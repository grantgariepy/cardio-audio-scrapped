/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/logo.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.5}>
        <mesh geometry={nodes.Mesh_1.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/logo.gltf')
