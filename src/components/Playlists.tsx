import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';


export default function Playlists() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const { items } = await res.json();
    setList(items);
  };
  

  if (session) {
    return (
      <>
        
        <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
        <div className='overlord' style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px',}}>
        {list.map((item) => (
          
            <div className='card'>

              <div key={item.id} className='grid'>
                <h1 className='title'>{item.name}</h1>
                <h1 className='title'>{item.owner.display_name}</h1>
                <img src={item.images[0].url} width='100' />
              </div>
            </div>
        ))}
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}