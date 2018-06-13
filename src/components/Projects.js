import React, { Component}  from "react";
import "../App.css"
import ProjectCard from './ProjectCard.js'
// import doctorCode from './doctor-code.JPG'
const projectInfo = [
  {
    name: "Better Doctor API",
    description: "A project utilizing Better Doctor's API to help people find doctor's fitting to their needs.",
    image: './doctor-code.JPG'
  },
  {
    name: "Other Cool Thing",
    description: "A project utilizing Better Doctor's API to help people find doctor's fitting to their needs.",
    image: './doctor-code.JPG'
  }
];

function  Projects() {
  return (
    <div className='projects-container'>
    <h3>Projects</h3>
    <div className='project-box'>
    {
      projectInfo.map(function(project) {
        return (
          <div className='card-box'>
            <ProjectCard
              project = {project}/>
          </div>
        )

      })
    }
    </div>
    </div>
  );
}

export default Projects;
