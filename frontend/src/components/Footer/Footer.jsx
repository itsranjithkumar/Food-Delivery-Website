import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit quia, sapiente magnam officia sequi non placeat inventore, dicta repellendus maxime nostrum rem praesentium quo unde illum quis sint possimus?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    
                </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+91 1234567890</li>
                    <li> contactus@food.com</li>
                 </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">2025 © Food Delivery Company</p>

    </div>
  )
}

export default Footer