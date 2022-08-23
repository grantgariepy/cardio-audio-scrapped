import type { NextPage } from "next";
import Hero from "../components/Hero";
import Playlists from "../components/Playlists";
import User from "../components/User";



const Home: NextPage = () => {
  
  

  return (
    <>
    <User />
    <Playlists />
    <Hero />
      
    </>
  );
};

export default Home;
