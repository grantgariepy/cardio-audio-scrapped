import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TopTracks from '../components/TopTracks'
import User from '../components/User'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <User />
      <TopTracks />
      {/* <Footer /> */}
    </>
  )
}

export default Home
