import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div id='Home'>
     <div className="txt-cont flex justify-center items-center py-8 ">
    <ReactTyped  className='text-white text-5xl md:text-7xl font-bold hover:text-blue-400 duration-500 cursor-pointer ' strings={["LE LEGENDS ."]} typeSpeed={80} backSpeed={50} loop />
    </div>

 
  </div>
  )
}

export default Hero