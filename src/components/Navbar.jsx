import '../css/Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink> 
        <NavLink to='/products'>Products</NavLink> 
    </nav>
  )
}

export default Navbar

