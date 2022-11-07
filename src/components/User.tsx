import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const User = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <main>Loading...</main>
  }

  console.log(session)
  return (
    <>
      <div className="infoContainer">
        {session ? (
          <div className="infoLoggedIn">
            <h1 className="greeting">hi {session.token.name}, You are about to be judged</h1>
            <img className="userImage" src={session.token['picture']} alt="" />
            <button className="logoutButton" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        ) : (
          <div className="infoLoggedOut">
            <div className="loggedOutMsg">Login to see your top tracks :)</div>
            <button className="logoutButton" onClick={() => signIn('spotify')}>
              Login with Spotify
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default User
