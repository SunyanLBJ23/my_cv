import React, { useRef } from 'react'
import { Ralph } from '../model/Ralph.jsx'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Steve } from '../model/Steve.jsx'

function MainPage() {
  const ref = useRef();
  const wallMap = useTexture('/map/wallMap.jpg')
  wallMap.wrapS = THREE.RepeatWrapping;
  wallMap.wrapT = THREE.RepeatWrapping;
  wallMap.repeat.set(40, 2)
  const wallMapN = useTexture("/map/pavement_02_arm_1k.jpg")
  wallMapN.wrapS = THREE.RepeatWrapping;
  wallMapN.wrapT = THREE.RepeatWrapping;
  wallMapN.repeat.set(40, 2)

  useFrame(()=>{
    ref.current.position.z-=0.02
  })
  return (
    <group position={[0, -1, -4]} ref={ref}>
      <Steve scale={0.3} position={[0,1.8,0]}/>
      {/* <Ralph scale={0.005} /> */}

      <mesh position={[2.5, 2, 0]}>
        <boxGeometry args={[0.1, 10, 400]} />
        <meshStandardMaterial color={"white"} roughness={0.5} map={wallMap} bumpMap={wallMapN} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.01, 500]} />
        <meshBasicMaterial color="gray" roughness={0} metalness={1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default MainPage