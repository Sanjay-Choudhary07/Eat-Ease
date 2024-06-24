import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftbar'>
      <img src={assets.logos} alt='' className='logo'/>
      </div>
      <div className="middlebar">
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile App</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="rightbar">
        <div className='search-icon'>
        <img src={assets.search_icon} alt=''/>
        </div>
      <div className='navbar-search-icon'>
        <img src={assets.basket_icon} alt=''/>
      </div>
      <button className="login">login</button>
    </div>
    </div>
  )
}

export default Navbar
