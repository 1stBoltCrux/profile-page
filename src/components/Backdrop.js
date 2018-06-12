import '../App.css'
import backdrop from './backdrop.jpg';
import React, { Component}  from 'react';

function Backdrop() {
  return   ( <div className='backdrop'>
  <div className='diamond-container'>
  <div className='diamond'></div>
  <div className='diamond'></div>
  </div>
  
  </div>
);
}

export default Backdrop;