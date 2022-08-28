import type { NextPage } from "next";
import Heart from "../components/Heart";
import Hero from "../components/Hero";
import Playlists from "../components/Playlists";
import TopTracks from "../components/TopTracks";
import User from "../components/User";



const Home: NextPage = () => {
  
  

  return (
    <>
    <Heart />
    <User />
    <Playlists />
    <TopTracks />
      
    </>
  );
};

export default Home;
