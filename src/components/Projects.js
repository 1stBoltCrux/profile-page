import React, { Component}  from "react";
import "../App.css"
import ProjectCard from './ProjectCard.js'
// import doctorCode from './doctor-code.JPG'
const projectInfo = [
  {
    name: "Better Doctor API",
    description: "A project utilizing Better Doctor's API to help people find doctor's fitting to their needs.",
    image: './doctor-code.JPG'
  }
];

function  Projects() {
  return (
    <div className='projects-container'>
    <h3>Projects</h3>
  <ProjectCard />
    </div>
  );
}

export default Projects;