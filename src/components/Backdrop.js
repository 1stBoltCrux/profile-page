import '../App.css'
import backdrop from './backdrop.jpg';
import React, { Component}  from 'react';

function Backdrop() {
  return   ( <div className='backdrop'>
  <div className='splash-title'><p>Hello, This is it.</p></div>
  <div className='diamond-container'>
  <div className='diamond'><p></p></div>
  <div className='diamond'><p></p></div>
  </div>
  
  </div>
);
}

export default Backdrop;