import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
         <span className='brand-name'>
               Deserts
         </span>
         <div className='nav-pages'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
         </div>
    </div>
  )
}

export default Navbar