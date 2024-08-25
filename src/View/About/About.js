import React from 'react'
import Navbar from './../../Component/Navbar'
import Aboutimg from './../../Images/About.png'
import './../../index.css'
function About() {
  return (
    <div>
       <Navbar />
      
          <div className='head-name'> about</div>
          <img className='about-img' src={Aboutimg} alt='About'/>
      
    </div>
  )
}

export default About