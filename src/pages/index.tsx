import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import styled from "styled-components";
import { Canvas, extend, useLoader  } from "@react-three/fiber";
import { OrbitControls, Environment, Effects, Loader, useTexture} from "@react-three/drei";
import Model from "../components/Logo"
import { Suspense } from "react";
// import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass'
// import { LUTCubeLoader } from 'three/examples/jsm/loaders/LUTCubeLoader'

// function Grading() {
//   const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
//   return <Effects children={<lUTPass attachArray="passes" lut={texture3D} />} />
// }


const Home: NextPage = () => {
  

  return (
    <>
      <Canvas className="canvas"  camera={{ position: [0, 0, 5], fov: 45 }}>
        <OrbitControls enableZoom={true} />
        <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
        <Suspense fallback={null}>
          
          <Model />
          {/* <Grading /> */}
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Home;
