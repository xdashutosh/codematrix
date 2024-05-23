import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const WelcomePage = () => {
const navigate = useNavigate();
const handleLogin = ()=>{
navigate('/login');
}

const handleSignup = ()=>{
  navigate('/signup');
  }

  return (
    <>
    <div className='welcomepage'>

<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='title'>
  <span>
    WELCOME
  </span>
  <br/>
  <span>
  TO
    </span>
  <br/>
  <span>
   CODEMATRIX
  </span>
  <br/>

  <button  onClick={handleLogin}  className="custom-btn btn-3"><span className="btntext">Login</span></button>
  <button  onClick={handleSignup} style={{backgroundColor:'black',color:'black'}}  className="custom-btn btn-3"><span className="btntext">Signup</span></button>

</div>
    </div>
    </>
  )
}

export default WelcomePage