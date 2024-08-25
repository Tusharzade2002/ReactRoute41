import React from 'react'
import Navbar from '../../Component/Navbar'
import Contactimg from '../../Images/Contact.png'
import './../../index.css'
function Contact() {
  return (
    <div>
       <Navbar />

         <div className='head-name'>contact</div>
         <img className='contact-img' src={Contactimg} alt='contact'/>
      
    </div>
  )
}

export default Contact