import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export function Ralph(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/glb/ralph.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    console.log("actions----",actions);
    actions.Walk.play()
  },[])
  useFrame(()=>{
    group.current.position.z+=0.01
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="8e864e9bb7e0433abed60c63c617f36dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[Math.PI / 2, 0, -Math.PI]} scale={100}>
                  <group name="Object_17">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_19" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_21" position={[116.76, 307.33, -2.07]} rotation={[-1.53, 0, 0.01]} scale={41.49} />
                    <group name="Object_23" position={[115.05, 314.11, 5.94]} rotation={[-1.53, 0, 0.01]} scale={41.49} />
                    <group name="Object_25" position={[113.45, 315.26, -6.8]} rotation={[3.06, 0.3, -0.25]} scale={[41.51, 41.49, 41.47]} />
                    <group name="Object_27" position={[-126.31, 306.69, 11.9]} rotation={[-1.5, -0.03, 0.01]} scale={[-41.49, 41.49, 41.49]} />
                    <group name="Object_29" position={[-127.02, 307.52, -1.74]} rotation={[-1.5, -0.03, 0.01]} scale={[-41.49, 41.49, 41.49]} />
                    <group name="Object_31" position={[-125.22, 314.07, 6.46]} rotation={[-1.5, -0.03, 0.01]} scale={[-41.49, 41.49, 41.49]} />
                    <group name="Object_33" position={[-123.78, 315.59, -6.25]} rotation={[3.09, -0.31, 0.24]} scale={[-41.47, 41.49, 41.52]} />
                    <group name="Object_35" position={[-48.18, 184.24, -55.02]} rotation={[0.85, 1.37, -2.39]} scale={[99.99, 99.97, 100.05]} />
                    <group name="Object_37" position={[0.08, 0.03, 5.63]} rotation={[0.55, 1.51, 1]} scale={[100, 99.99, 100.01]} />
                    <group name="Object_39" position={[45.38, 473.84, -39.86]} rotation={[-1.57, 0, 0.15]} scale={[99.97, 100.03, 100]} />
                    <group name="Object_41" position={[45.79, 460.12, -48.54]} rotation={[-1.57, 0, 0.15]} scale={[39.46, 39.49, 39.48]} />
                    <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_20.skeleton} />
                    <skinnedMesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_22.skeleton} />
                    <skinnedMesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_24.skeleton} />
                    <skinnedMesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_26.skeleton} />
                    <skinnedMesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_28.skeleton} />
                    <skinnedMesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_30.skeleton} />
                    <skinnedMesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_32.skeleton} />
                    <skinnedMesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_34.skeleton} />
                    <skinnedMesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_36.skeleton} />
                    <skinnedMesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_38.skeleton} />
                    <skinnedMesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_40.skeleton} />
                    <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Ralph_Textures} skeleton={nodes.Object_42.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/ralph.glb')
