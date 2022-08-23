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
        {list.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width='100' />
          </div>
        ))}
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