import React, { useState } from 'react'
import "./CSS/Loginsignup.css"
export default function LoginSignup() {
  const [state, setState] = useState("Signup");
  
  const [formData, setFormData] = useState({
    name:"",
    password:"",
    email:""
  })
  const signup = async (req, res)=>{
    let response;
    await fetch('http://localhost:4000/signup',{
      method: "POST",
      headers:{
        Accept: "application/json",
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json())
    .then((data)=>{
      response = data;
    })
    if(response.success){
      localStorage.setItem('auth-token', response.token);
      window.location.replace("/");

    }
    else{
      alert(response.error);
    }
  }
  const login = async (req, res)=>{
    let response;
    await fetch('http://localhost:4000/login',{
      method:"POST",
      headers:{
        Accept: "application/json",
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res)=>res.json())
    .then((data)=>{
      response = data;
    })
    if(response.success){
      localStorage.setItem('auth-token', response.token);
      window.location.replace("/");
    }
    else{
      alert(response.error);
    }
  }
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className='loginsingup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
            {state==="Signup"?<input type="text" name='name' onChange={changeHandler} placeholder='Your Name' value={formData.name}  />:<></>}
            <input name='email' type="email" placeholder='Email Address'  onChange={changeHandler} value={formData.email} />
            <input name='password'  onChange={changeHandler} type="password" placeholder='Password' value={formData.password} />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Login"?<p className='loginsignup-login'>Haven't have an account?<span onClick={()=>{setState("Signup")}}>Sign up here</span></p>:<p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>}
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree the terms of policy</p>
        </div>
      </div>
    </div>
  )
}
