import React from 'react'
import { signIn, signOut, useSession  } from "next-auth/react";



const Login = () => {
  
  const { data: session, status } = useSession();

  if (status === "loading"){
    return <main>Loading...</main>
  }

  return (
    <>
      <main>
        <h1>Guestbook</h1>
        {session ? (
          <div>
            <p>
              hi  {session.user?.name}
            </p>
            <img src={session.user?.image} alt="" />

            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => signIn("spotify")}>Login with Spotify</button>
          </div>
        )}
      </main>
    </>
  )
}

export default Login