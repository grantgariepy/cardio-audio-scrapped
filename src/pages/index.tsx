import type { NextPage } from "next";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Playlists from "../components/Playlists";
import User from "../components/User";



const Home: NextPage = () => {
  
  

  return (
    <>
    <User />
    <Info />
    <Playlists />
    <Hero />
      
    </>
  );
};

export default Home;
