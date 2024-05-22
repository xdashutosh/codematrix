import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const WelcomePage = () => {
const navigate = useNavigate();
const handleDash = ()=>{
navigate('/dashboard');
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

  <button  onClick={handleDash}  className="custom-btn btn-3"><span className="btntext">Code Box <FaArrowRight color='white'  /></span></button>

</div>
    </div>
    </>
  )
}

export default WelcomePage