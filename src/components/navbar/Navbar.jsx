import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logos} alt='' className='logo'/></Link> 
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("Home")} className ={menu==="Home" ? "active" : " "}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className ={menu==="Menu" ? "active" : " "}>Menu</a>
          <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className ={menu==="Mobile-App" ? "active" : " "}>Mobile-App</a>
          <a href='#footer' onClick={()=>setMenu("Contact-us")} className ={menu==="Contact-us" ? "active" : " "}>Contact-us</a>
        </ul>
      <div className="navbar-right">
      <div className='navbar-search-icon'>
      <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)} className="login">login</button>
    </div>
    </div>
  )
}

export default Navbar
