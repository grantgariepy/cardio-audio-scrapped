import React from 'react'
import { signIn, signOut, useSession  } from "next-auth/react";




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
              hi  {session.user?.name} {session.user?.id}
            </p>
            <img src={session.user?.image} alt="" />
            <button ></button>

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

export default User