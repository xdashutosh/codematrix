import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaCode,FaConnectdevelop,FaHandSparkles, FaSearch } from 'react-icons/fa';

const Navigation = () => {
    const navigate = useNavigate();

    const VisitCode = ()=>{
        navigate('/codebase');
    }
    
    const HandleLogout = ()=>{
      localStorage.clear();
      navigate('/login');
    }
    const VisitChall = ()=>{
      navigate('/challenge');
    }
    
    const VisitAll = ()=>{
      navigate('/explore');
    }
    

  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}} >

<div className='logo'>
      <Link to={'/home'}>
            <FaConnectdevelop color='white' size={36}/>
      </Link>
            <h3 className='logoname'>CodeMatrix</h3>
          </div>

    <button onClick={VisitCode}   style={{backgroundColor:'black',color:'white'}}  className="custom-btn btn-3"><span className="btntext">Start Coding <FaCode size={16}/></span></button>
    
    <button onClick={VisitChall}   style={{backgroundColor:'black',color:'white'}}  className="custom-btn btn-3"><span className="btntext">Challenges <FaHandSparkles size={16}/></span></button>
    
    <button onClick={VisitAll}   style={{backgroundColor:'black',color:'white'}}  className="custom-btn btn-3"><span className="btntext">Explore <FaSearch size={16}/></span></button>
    
    <button onClick={HandleLogout}   style={{backgroundColor:'black',color:'white'}}  className="custom-btn btn-3"><span className="btntext">Logout</span></button>
    </div>
  )
}

export default Navigation