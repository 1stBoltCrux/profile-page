import React, { Component}  from "react";
import "../App.css"
import ProjectCard from './ProjectCard.js'
// import doctorCode from './doctor-code.JPG'
const projectInfo = [
  {
    name: "Better Doctor API",
    description: "A project utilizing Better Doctor's API to help people find doctor's fitting to their needs.",
    image: 'project-pic project1'
  },
  {
    name: "Backcountry Mock-up",
    description: "A CSS and HTML clone of Backcountry.com's frontpage.",
    image: 'project-pic project2'
  },
  {
    name: "Smith Rock Route Finder",
    description: "A project built in Angular with CRUD capabilities and Firebase as a database.",
    image: 'project-pic project3'
  },
  {
    name: "Common Good",
    description: "A shared-space website mock-up built from the ground up in Sketch and utilizing SASS.",
    image: 'project-pic project4'
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
