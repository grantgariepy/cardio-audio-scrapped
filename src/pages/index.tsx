import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Logo from "../components/Logo"
import { Suspense } from "react";

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 1200px;
  }
`;

const Home: NextPage = () => {
  

  return (
    <>
      <Wrapper className="App">
        <Canvas className="canvas">
          <OrbitControls enableZoom={true} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} />
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
        </Canvas>
      </Wrapper>
    </>
  );
};

export default Home;
