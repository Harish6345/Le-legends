import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex py-8 items-center justify-center gap-6 text-sm sm:gap-12   sm:text-lg font-bold ">
    <a href="#Home" className="relative text-white after:content-[''] after:block after:h-[4px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-300">
      Home
    </a>
    <a href="#Intro" className="relative text-white after:content-[''] after:block after:h-[4px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-300">
      Introduction
    </a>
    <a href="#Memo" className="relative text-white after:content-[''] after:block after:h-[4px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-300">
      Memories
    </a>
    <a href="#End" className="relative text-white after:content-[''] after:block after:h-[4px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:origin-bottom after:transition-transform after:duration-300">
      End
    </a>
  </nav>
  
  
  )
}
export default Navbar