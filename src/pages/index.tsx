import type { NextPage } from "next";
import Hero from "../components/Hero";
import Playlists from "../components/Playlists";
import TopTracks from "../components/TopTracks";
import User from "../components/User";



const Home: NextPage = () => {
  
  

  return (
    <>
    <User />
    <Playlists />
    <TopTracks />
      
    </>
  );
};

export default Home;
