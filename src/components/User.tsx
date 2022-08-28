import React, { Suspense } from 'react'
import { signIn, signOut, useSession  } from "next-auth/react";
import { Canvas } from '@react-three/fiber';
import Model from './Logo';
import { Environment } from '@react-three/drei';




const User = () => {
  
  const { data: session, status } = useSession();
  

  if (status === "loading"){
    return <main>Loading...</main>
  }

  return (
    <>
      <main>
        <h1>Spotify</h1>
        {session ? (
          <div>
            <p>
              hi  {session?.token?.name} {session?.token?.email}
            </p>
            <img src={session?.token?.picture} alt="" />
           

            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => signIn("spotify")}>Login with Spotify</button>
          </div>
        )}
      </main>
      <div className='heroContainer'>
      <Canvas className="canvas"  camera={{ position: [0, 0, 5], fov: 45 }}>
        <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[0, 15, 10]} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
      </div>
    </>
  )
}

export default User