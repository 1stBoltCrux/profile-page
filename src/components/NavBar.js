import '../App.css'
import React, { Component} from 'react';

function navBar() {
  return(
    <div className='nav'>
      <div className='title'><div className='nav-diamond'></div><p>Ted Leary</p></div>
      <div className='nav-links'><p>Projects</p><p>Contact</p></div>
    </div>
  )
}

export default navBar;
