import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { baseurl } from './baseurl';
import { FaCode, FaEye, FaHandSparkles, FaHeart, FaSearch, FaThumbsUp } from 'react-icons/fa';
import Navigation from './Navigation';

const Home = () => {
const [cards,setcards]= useState([]);
    const email = localStorage.getItem('user_email');
    console.log(email);
  const navigate = useNavigate();
    
    useEffect(()=>{
      const getData = async()=>{
        const res = await axios.post(`${baseurl}/0auth/getalldata`,{});
        console.log(res?.data[0]);
        setcards(res?.data);
      }
      getData();
    },[])


const handleVisit = (ind)=>{
    navigate(`/dashboard/${ind}`);
}

function truncateParagraph(paragraph, wordLimit) {
  // Split the paragraph into an array of words
  const words = paragraph.split(' ');
  
  // Get the first 'wordLimit' words
  const truncatedWords = words.slice(0, wordLimit);
  
  // Join the words back into a string
  return truncatedWords.join(' ');
}

  return (
    <div className='homebody' >
<Navigation/>
<h1 style={{color:'white',margin:'10px',textDecoration:'underline'}}>All Matrix</h1>
<div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',alignItems:'start'}}>

{  cards.length>0 ? (

  cards?.map((data,index)=>(
    data?.mycode?.map((da,i)=>(
        <div class="card" onClick={()=>handleVisit(da?._id)}>
        <div class="card-image" >
        <iframe
          srcDoc={
            `
        <html>
          <body>${da?.code?.html}</body>
          <style>${da?.code?.css}</style>
          <script>${da?.code?.js}</script>
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
        <div class="card-content" style={{overflow:'scroll'}}>
          <div style={{display:'flex',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
            <h2>{da?.code?.title}</h2>
            <div style={{display:'flex',width:'20%',justifyContent:'space-evenly'}}>
            <FaThumbsUp/>
            <FaEye/>
            <FaHeart/>
            </div>
          </div>
            <p>{ truncateParagraph(da?.code?.desc,15)}</p>
        </div>
    </div>

    ))
  
    ))
  ):(<h1 style={{color:'white'}}>No projects yet!</h1>)
}

</div>


    </div>

  )
}

export default Home