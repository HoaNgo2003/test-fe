import React from 'react'
import "./CSS/Loginsignup.css"
export default function LoginSignup() {
  return (
    <div className='loginsingup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree the terms of policy</p>
        </div>
      </div>
    </div>
  )
}
