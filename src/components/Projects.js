import React, { Component}  from 'react';
import '../App.css'

function  Projects() {
  return(
    <div className='projects-container'>
    <h3>Projects</h3>
    <div className='projects'>
    <div className='project'>
    <div className='project-description'><h3>Project Name</h3><p>This is one of my many fantastic projects. Aren't you lucky.</p></div>
    <div className='project-pic'></div>
    </div>
    </div>
    </div>
  );
}

export default Projects;