import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  OrbitControls,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { SwimmingMan } from "./moonHuman/SwimmingMan";
import { WalkingMan } from "./moonHuman/WalkingMan";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <OrbitControls makeDefault/>
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <Stars />
          <mesh position={[0,-0.2,0]}>
            <ringGeometry args={[0.14,0.16,800]}/>
          </mesh>
          <group position={[0,-0.7,0]}>
            <SwimmingMan scale={0.3} />
          </group>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
