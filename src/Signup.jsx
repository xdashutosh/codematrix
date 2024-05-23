import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from './baseurl';

const Signup = () => {
const navigate = useNavigate();
    const [username,setusername]= useState(null);
    const [email,setemail]= useState(null);
    const [password,setpassword]= useState(null);
console.log(username,email,password);
const handleSignup = async()=>{
    const res = await axios.post(`${baseurl}/0auth/signup`,{"username":username,"email":email,"password":password})
    if(res?.data?.userCreated)
 {
    localStorage.setItem('user_email', email);
navigate('/home');
 }
}

const handlelog = ()=>{
  navigate('/login');
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
        Hello Dev!
      </span>
            <input placeholder='username' type='text' style={{padding:'10px',marginTop:'10px' ,backgroundColor:'transparent',color:'white',boxShadow:'0px 0px 6px white',width:'100%'}}
            value={username} onChange={(e)=>setusername(e.target.value)}
            />
            <input placeholder='email' type='email' style={{padding:'10px',marginTop:'10px' ,backgroundColor:'transparent',color:'white',boxShadow:'0px 0px 6px white',width:'100%'}}
             value={email} onChange={(e)=>setemail(e.target.value)}
            />
            <input placeholder='password' type='password' style={{padding:'10px',marginTop:'10px' ,backgroundColor:'transparent',color:'white',boxShadow:'0px 0px 6px white',width:'100%'}}  value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <div style={{display:'flex'}}>
            <button onClick={handleSignup} className="custom-btn btn-3"><span className="btntext">Sign up</span></button>
            <button onClick={handlelog} className="custom-btn btn-3"><span className="btntext">Move to login</span></button>
            </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Signup