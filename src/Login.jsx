import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from './baseurl';

const Login = () => {
const navigate = useNavigate();
    const [email,setemail]= useState(null);
    const [password,setpassword]= useState(null);
const handleLogin = async()=>{
    const res = await axios.post(`${baseurl}/0auth/login`,{"email":email,"password":password});
    console.log(res?.data);
    if(res?.data?.isAuthenticated)
 {
    localStorage.setItem('user_email', email);
navigate('/home');

 }
}
const handleSign = ()=>{
  navigate('/signup')
}
  return (
    <div className='welcomepage'>

    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title'>
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <span>
        Welcome Back!
      </span>
            <input placeholder='email' type='email' style={{padding:'10px',marginTop:'10px' ,backgroundColor:'transparent',color:'white',boxShadow:'0px 0px 6px white',width:'100%'}}
             value={email} onChange={(e)=>setemail(e.target.value)}
            />
            <input placeholder='password' type='password' style={{padding:'10px',marginTop:'10px' ,backgroundColor:'transparent',color:'white',boxShadow:'0px 0px 6px white',width:'100%'}}  value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <div style={{display:'flex'}}>
            <button onClick={handleLogin} className="custom-btn btn-3"><span className="btntext">Login</span></button>
            <button onClick={handleSign} className="custom-btn btn-3"><span className="btntext">Move to signup</span></button>
            </div>
           
            </div>
        </div>
      </div>
      </div>
  )
}

export default Login