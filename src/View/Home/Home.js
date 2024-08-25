import React from 'react'
import Navbar from '../../Component/Navbar'
import Homeimg from '../../Images/House.png'
import './../../index.css'
function Home() {
  return (

    <div>
       <Navbar />
       
         <div className='head-name'> Home</div>
         <img className='home-img' src={Homeimg} alt='Home' /> 
      
    </div>
  )
}

export default Home