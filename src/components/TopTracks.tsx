import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { number } from 'zod';
import Track from './Track';



export default function TopTracks() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getTopTracks = async () => {
    const res = await fetch('/api/topTracks');
    const { items } = await res.json();
    setList(items);
  };

  

  
  const topTracks = list.map((item, index) =>
      <div key={index} className={index.toString()}>
        <h1 className='title'>{index}</h1>
        <h1 className='title'>{item.album.artists[0].name}</h1>
        <h1 className='title'>{item.album.name}</h1>
        <img src={item.album.images[0].url} width='1000' /> 
      </div>
    
  );


  if (session) {
    return (
      <>
        <button onClick={() => getTopTracks()}>Get my top tracks</button>
        {topTracks}
      </>
    );
  }
  return (
    <>
      
    </>
  );
}