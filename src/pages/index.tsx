import type { NextPage } from "next";
import Hero from "../components/Hero";
import Info from "../components/Info";
import User from "../components/User";



const Home: NextPage = () => {
  
  

  return (
    <>
    <User />
    <Info />
    <Hero />
      
    </>
  );
};

export default Home;
