import { useSession} from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function TopTracks() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getTopTracks = async () => {
    const res = await fetch('/api/topTracks');
    const { items } = await res.json();
    setList(items);
  };

  useEffect(()=>{
    getTopTracks();
  }, [])
  
  const topTracks = list.map((item, index) =>
      <div key={index} className={index.toString()}>
        <h1 className='title'>{item.album.artists[0].name}</h1>
        <h1 className='title'>{item.album.name}</h1>
        <img src={item.album.images[0].url}  /> 
      </div>
  );

  if (session) {
    return (
      <>
        {topTracks}
      </>
    );
  }
  return (
    <>
      
    </>
  );
}