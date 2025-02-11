import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close" 
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type="text" placeholder='Name' />
          )}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button type="button" onClick={() => setCurrState(currState === "Login" ? "Sign Up" : "Login")}>
          {currState === "Login" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>By continuing, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span></p>
        </div>
        {currState === "Sign Up" && (
          <div className="login-popup-links">
            <p>Already have an account <span onClick={() => setCurrState("Login")}>Login here</span></p>
          </div>
        )}
        {currState === "Login" && (
          <div className="login-popup-links">
            <p>Created a new account <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          </div>
        )}
      </form>
    </div>
  )
}

export default LoginPopup