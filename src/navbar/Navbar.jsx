import React from 'react'
import { Link } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Details from './Details.jsx'
import Project from './Projects.jsx'
const Navbar = () => {
  return (
    <>
      <div className='flex h-12  w-screen bg-[#f2f2f2] items-center justify-evenly flex-wrap'>
    
        <Link to={"/about"} className='text-xl ' style={{cursor: 'pointer'}}>About</Link>
        <Link to={"/projects"} className='text-xl ' style={{cursor: 'pointer'}}>
        Projects</Link>
        <Link to={"/details"} className='text-xl ' style={{cursor: 'pointer'}}>Details</Link>
        <Link to={"/contact"} className='text-xl ' style={{cursor: 'pointer'}}>Contact</Link>
      </div>
      {/* <About/>
      <Project/>
      <Details/>
      <Contact/> */}

    </>  
  )
}

export default Navbar
