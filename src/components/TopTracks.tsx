import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';



export default function TopTracks() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getTopTracks = async () => {
    const res = await fetch('/api/topTracks');
    const { items } = await res.json();
    setList(items);
  };

  if (session) {
    return (
      <>
        
        <button onClick={() => getTopTracks()}>Get my top tracks</button>
        <div className='overlord' style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px',}}>
        {list.map((item) => (

            <div className='card'>

              <div key={item.id} className='grid'>
                <h1 className='title'>{item.name}</h1>
                {/* <h1 className='title'>{item.images[0].url}</h1> */}
                {/* <h1 className='title'>{item.images[1].height}</h1>*/}
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