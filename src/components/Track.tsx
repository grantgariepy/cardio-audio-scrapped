import React, { useState } from 'react'
import Blurb from './Blurb';

const Track = () => {

  const [list, setList] = useState([]);
  
  return (
    <>
    {list.map((item) => (
      <div className='card'>

        <div key={item.id} className='grid'>
          <Blurb rank={item.id}/>
          <h1 className='title'>{item.album.artists[0].name}</h1>
          <h1 className='title'>{item.album.name}</h1>
          <img src={item.album.images[0].url} width='100' /> 
        </div>
  </div>
  ))}
  </>
  )
}

export default Track