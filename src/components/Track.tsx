import React from 'react'

const Track = (item) => {
  return (
    <div className='card'>

              <div key={item.id} className='grid'>
                
                {/* <h1 className='title'>{item.album.artists[0].name} - </h1> */}
                <h1 className='title'>{item.album.name}</h1>
                {/* <h1 className='title'>{item.images[0].url}</h1> */}
                {/* <h1 className='title'>{item.images[1].height}</h1>*/}
                <img src={item.album.images[0].url} width='100' /> 
              </div>
            </div>
  )
}

export default Track