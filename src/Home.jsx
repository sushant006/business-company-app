import React from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context';
import { useEffect } from 'react';
const Home = () => {
  //const data = {
   // name:"Pathak Technical",
   // image:"./images/hero.jpg"
  //}

 const { updateHomePage } = useGlobalContext();

 useEffect(() => updateHomePage(), []);
  return  <HeroSection />;
  
}

export default Home
