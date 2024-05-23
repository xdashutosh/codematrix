import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseurl } from './baseurl';

const Home = () => {
const [cards,setcards]= useState([]);
    const email = localStorage.getItem('user_email');
    console.log(email);
  const navigate = useNavigate();
    
    useEffect(()=>{
      const getData = async()=>{
        const res = await axios.post(`${baseurl}/0auth/getdata`,{"email":email});
        console.log(res?.data?.mycode);
        setcards(res?.data?.mycode);
        // setHtml(res?.data?.html)
        // setCss(res?.data?.css)
        // setJs(res?.data?.js)
      }
      getData();
    },[])


const handleVisit = (ind)=>{
    navigate(`/dashboard/${ind}`);
}
const VisitCode = ()=>{
    navigate('/codebase');
}

const HandleLogout = ()=>{
  localStorage.clear();
  navigate('/login');
}

  return (
    <div className='homebody' >
<div style={{display:'flex',justifyContent:'space-between'}} >
<button onClick={VisitCode}   style={{backgroundColor:'black',color:'white'}}  className="custom-btn btn-3"><span className="btntext">Start Coding</span></button>

<button onClick={HandleLogout}   style={{backgroundColor:'black',color:'white'}}  className="custom-btn btn-3"><span className="btntext">Logout</span></button>
</div>

<div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',alignItems:'start'}}>

{  cards.length>0 ? (

  cards?.map((data,index)=>(
    <div class="card" onClick={()=>handleVisit(index)}>
        <div class="card-image" >
        <iframe
          srcDoc={
            `
        <html>
          <body>${data?.html}</body>
          <style>${data?.css}</style>
          <script>${data?.js}</script>
        </html>
      `
          }
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          />

        </div>
        <div class="card-content">
            <h2>{data?.title}</h2>
            <p>{data?.desc}</p>
        </div>
    </div>
    ))
  ):(<h1 style={{color:'white'}}>No projects yet!</h1>)
}

</div>


    </div>
  )
}

export default Home