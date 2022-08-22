import React from 'react'
import recentPlayed from "../pages/api/userData"
import getTopTracks from '../pages/api/getTopTracks'



const Info = () => {

  return (
    <>
      <button onClick={getTopTracks}>Load Data</button>
      <div>

      {}
      </div>
    </>
  )
}

export default Info