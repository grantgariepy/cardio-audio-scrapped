
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../components/Logo"
import { Suspense } from "react";


const Hero = () => {
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
  )
}

export default Hero