import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logos} className='logoo' alt=''/>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio, modi tempore cum eveniet soluta sed architecto fuga tempora vel distinctio veritatis, quo sapiente accusantium et voluptatum vero delectus laboriosam.</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon}alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
        </div>
        <div className="footer-content-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>
        <div className="footer-content-right">
         <h2>Get In Touch</h2>
         <ul>
            <li>+91-202-303-5002</li>
            <li>contact@eatease.com</li>
         </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @eatease.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
