/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DatSketch (https://sketchfab.com/DatSketch)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9
title: Apple iPhone 13 Pro Max
*/

import React, { useRef, useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Mesh from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { EffectComposer } from "postprocessing";
import { RenderPass } from "postprocessing";
// import  UnrealBloomPass  from 'three/examples/jsm/postprocessing/UnrealBloomPass';


type ModelType = {
  [key: string]: any;
}

// const { scene, gl, size, camera } = useThree();

// const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
//   size,
// ]);

// const bloom = {
//   resolution: aspect,
//   strength: 0.6,
//   radius: 0.01,
//   threshold: 0.4,
// };



export default function Model({ ...props }) {

  
  const group = React.useRef();

  
  

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.y = -a*.5
   
  });

  

  const { nodes, materials }: ModelType = useGLTF("/logo.gltf");
  return (
    <group ref={group} {...props}  dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0.5, 0]} scale={0.00003} >
          <group scale={500} >
          <mesh   
            geometry={nodes.Mesh_1.geometry} 
            material={materials['Material.001']}/>
            
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/logo.gltf");