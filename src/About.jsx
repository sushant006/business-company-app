import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'


const About = () => {
  //const data = {
   // name:"Sushant Pathak",
    //image:"./images/hero.jpg"
  //}
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);
  return (
    
    <HeroSection ></HeroSection>
  )
}

export default About
