import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './App.css'
import { WalkRobot } from './model/WalkRobot'
import * as THREE from 'three'
import { Ralph } from './model/Ralph'

function App() {
  return (
    <div className='app'>
      <Canvas>
        <Environment files={'/hdr/hdr.hdr'} background/>
        <OrbitControls makeDefault/>
        <WalkRobot/>
        <Ralph scale={0.005}/>
        <mesh position={[0,-0.5,0]}>
          <boxGeometry args={[5,1,5]}/>
          <meshStandardMaterial color="gold" roughness={0} metalness={1} side={THREE.DoubleSide}/>
        </mesh>
      </Canvas>
    </div>
  )
}

export default App