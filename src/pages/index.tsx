import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Logo"
import { Suspense } from "react";


const Home: NextPage = () => {
  

  return (
    <>
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={-.5} />
        <directionalLight position={[-5, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Home;
