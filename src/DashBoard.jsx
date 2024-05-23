// src/App.js

import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { FaCloud, FaConnectdevelop, FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import UseBeforeUnload from './UseBeforeUnload';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DashBoard = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');
  const email = localStorage.getItem('user_email');
  console.log(email);
const {id} = useParams();
  
  useEffect(()=>{
    const getData = async()=>{
      const res = await axios.post('http://localhost:5000/0auth/getdata',{"email":email});
      console.log(res?.data);
      setHtml(res?.data?.mycode[id]?.html);
      setCss(res?.data?.mycode[id]?.css);
      setJs(res?.data?.mycode[id]?.js);
      
    }
    getData();
  },[])
  
  UseBeforeUnload('Are you sure you want to leave? save first');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);


const handleSave = async()=>{
  const res = await axios.post('http://localhost:5000/0auth/save',{"email":email,"html":html,"css":css,"js":js});
  console.log(res);
}

  return (
    <>
     <div className='topinfo'>
          <div className='logo'>
      <Link to={'/home'}>
            <FaConnectdevelop color='white' size={36}/>
      </Link>
            <h3 className='logoname'>CodeMatrix</h3>
          </div>
          <div style={{display:'flex'}}>

          <button onClick={handleSave} style={{color:'white'}}  className="custom-btn btn-3"><span  className="btntext" >Save <FaCloud style={{marginLeft:'10px'}} size={22} color='white'  /></span></button>
          <h5>Made by ashutosh chaudhary @2024</h5>
          </div>
        </div>
    <div className="container">
      <div className="editor-container">
       
        <ResizableBox className="editor" width={800}  height={200} minConstraints={[150, 100]} maxConstraints={[Infinity, Infinity]} resizeHandles={['s', 'e', 'w']}>
          <div className='tophead'>
            <FaHtml5 size={28}/>
            <h5>HTML</h5>
            </div>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="Write HTML here"
            />
        </ResizableBox>
        <ResizableBox className="editor"  height={200} width={800} minConstraints={[150, 100]} maxConstraints={[Infinity, Infinity]}  resizeHandles={['s', 'e', 'w']}>
        <div className='tophead'>
            <FaCss3 size={28}/>
            <h5>CSS</h5>
            </div>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            placeholder="Write CSS here"
            />
        </ResizableBox>
        <ResizableBox className="editor"  height={200} width={800} minConstraints={[150, 100]} maxConstraints={[Infinity, Infinity]}  resizeHandles={['s', 'e', 'w']}>
        <div className='tophead'>
            <FaJs size={28}/>
            <h5>JAVASCRIPT</h5>
            </div>
          <textarea
            value={js}
            onChange={(e) => setJs(e.target.value)}
            placeholder="Write JavaScript here"
            />
        </ResizableBox>
      </div>
      <div className="output-container">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          />
      </div>
    </div>
          </>
  );
};

export default DashBoard;
