import React from "react";
import DeformationMesh from "./child/DeformationMesh";
import SphereGeoParticle, {
  CustomGeometryParticles,
} from "./child/SphereGeoParticle";
import FBOParticleMesh from "./child/fboParticleMesh/FBOParticleMesh";

function ParticleView() {
  return (
    <group scale={0.8} rotation={[Math.PI/2,0,0]} position={[0,0,0]}>
      <group scale={[1, 0.01, 1]}>
        <CustomGeometryParticles count={2000} shape="sphere" />
      </group>
      <group scale={[1, 1, 1]}>
        <FBOParticleMesh />
      </group>
    </group>
  );
}

export default ParticleView;
