// src/App.js

import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { FaConnectdevelop, FaCss3, FaHtml5, FaJs } from 'react-icons/fa';
import UseBeforeUnload from './UseBeforeUnload';

const DashBoard = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

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



  return (
    <>
     <div className='topinfo'>
          <div className='logo'>
            <FaConnectdevelop color='white' size={36}/>
            <h3 className='logoname'>CodeMatrix</h3>
          </div>
          <h5>Made by ashutosh chaudhary @2024</h5>
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
