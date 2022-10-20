import { useSession} from 'next-auth/react';
import { useEffect, useState } from 'react';
import { BsSpotify } from 'react-icons/bs'

export default function TopTracks() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getTopTracks = async () => {
    const res = await fetch('/api/topTracks');
    const { items } = await res.json();
    setList(items);
    console.log({items})
  };

  useEffect(()=>{
    getTopTracks();
  }, [])
  
  
  const topTracks = list.map((item, index) =>
      <div key={index} className={index.toString()}>
        
        <div className='text'>
          <div className='iconButton'>
            <ul> 
              <li>
                <a href={item.album.external_urls.spotify} target="__blank">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span>
                    <BsSpotify />
                  </span>
                </a> 
              </li>
            </ul>  
          </div> 
          
          <h1 className='title'>{item.name}</h1>
          <h1 className='title'> by {item.artists[0].name}</h1>
        </div>
        <div className="image">
          <img src={item.album.images[0].url}  /> 
        </div>
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
      <div>Login to see your top tracks :)</div>
    </>
  );
}