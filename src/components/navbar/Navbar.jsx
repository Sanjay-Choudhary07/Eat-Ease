import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
function Navbar() {
  const [menu, setMenu] = useState("Home");
  return (
    <div className='navbar'>
      <div className='leftbar'>
      <img src={assets.logos} alt='' className='logo'/>
      </div>
      <div className="middlebar">
        <ul className="navbar-menu">
          <li onClick={()=>setMenu("Home")} className ={menu==="Home" ? "active" : " "}>Home</li>
          <li onClick={()=>setMenu("Menu")} className ={menu==="Menu" ? "active" : " "}>Menu</li>
          <li onClick={()=>setMenu("Mobile-App")} className ={menu==="Mobile-App" ? "active" : " "}>Mobile-App</li>
          <li onClick={()=>setMenu("Contact-us")} className ={menu==="Contact-us" ? "active" : " "}>Contact-us</li>
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
