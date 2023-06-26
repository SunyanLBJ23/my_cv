import React from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SphereGeoParticle() {
  return (
    <group>
      <points>
        <sphereGeometry args={[1, 48, 48]} />
        <pointsMaterial color={"gold"} size={0.015} sizeAttenuation />
      </points>
    </group>
  );
}

export default SphereGeoParticle;

const vertexShader = `
uniform float uTime;
uniform float uRadius;

varying float vDistance;

// Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}


void main() {
  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 1.5);
  float size = distanceFactor * 10.0 + 10.0;
  vec3 particlePosition = position * rotation3dY(uTime * 0.3 * distanceFactor);

  vDistance = distanceFactor;

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = size;
  // Size attenuation;
  gl_PointSize *= (1.0 / - viewPosition.z);
}

`;

const fragmentShader = `
varying float vDistance;

void main() {
  vec3 color = vec3(0.34, 0.53, 0.96);
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  color = mix(color, vec3(0.97, 0.70, 0.45), vDistance * 0.5);
  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}
`;

export const CustomGeometryParticles = ({ count, shape }) => {
  const points = useRef();
  const radius = 2;
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uRadius: { value: radius },
    }),
    []
  );

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const distance = Math.sqrt(Math.random()) * radius;
      const theta = MathUtils.randFloatSpread(360);
      const phi = MathUtils.randFloatSpread(360);
      let x = distance * Math.sin(theta) * Math.cos(phi);
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach={"attributes-position"}
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};
