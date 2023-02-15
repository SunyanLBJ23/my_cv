import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './App.css'
import { WalkRobot } from './model/WalkRobot'
import * as THREE from 'three'
import { Ralph } from './model/Ralph'
import MainPage from './views/MainPage'

function App() {
  return (
    <div className='app'>
      <Canvas camera={{
        position: [-5.958562858640552,
          1.5060335726855252,
        -0.32453294258008203]
      }}>
        <Environment files={'/hdr/hdr.hdr'} />
        {/* <OrbitControls makeDefault /> */}
        <MainPage />
      </Canvas>
    </div>
  )
}

export default App