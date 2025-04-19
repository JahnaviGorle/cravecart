import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <img className='logo' src={assets.logo} alt="CraveCart Logo" />
      </Link>
      <img className='profile' src={assets.profile_image} alt="Profile" />
    </div>
  )
}

export default Navbar
