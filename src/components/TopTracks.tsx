import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { BsSpotify } from 'react-icons/bs'
import Blurb from './Blurb'

export default function TopTracks() {
  const { data: session } = useSession()
  const [list, setList] = useState([])

  const getTopTracks = async () => {
    const res = await fetch('/api/topTracks')
    const { items } = await res.json()
    setList(items)
    console.log({ items })
  }
  useEffect(() => {
    getTopTracks()
  }, [])

  const topTracks = list.map((item, index) => (
    <div key={item['id']} className={index.toString()}>
      <div className="text">
        <div className="iconButton">
          <ul>
            <li>
              <a href={item['album']['external_urls']['spotify']} target="__blank">
                <span>
                  <img src={item['album']['images'][0]['url']} />
                </span>
                <span>
                  <img src={item['album']['images'][0]['url']} />
                </span>
                <span>
                  <img src={item['album']['images'][0]['url']} />
                </span>
                <span>
                  <img src={item['album']['images'][0]['url']} />
                </span>
                <span>
                  <img src={item['album']['images'][0]['url']} />
                </span>
              </a>
            </li>
          </ul>
        </div>

        <Blurb key={item['id']} rank={index} />
        <h1 className="title">{item['name']}</h1>
        <h1 className="title"> by {item['artists'][0]['name']}</h1>
      </div>
      <div className="image">
        <img src={item['album']['images'][0]['url']} />
      </div>
    </div>
  ))

  if (session) {
    return <>{topTracks}</>
  }
  return <></>
}
