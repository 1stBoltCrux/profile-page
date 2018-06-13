import React, { Component}  from "react";
import "../App.css"

function ProjectCard({project}) {
  console.log(project);
  return (
    <div className="projects">
    <div className="project">
    <div className="project-description"><h3>{project.name}</h3><p>{project.description}</p></div>
    <div className="project-pic">
</div>
    </div>
    </div>
  );
}

export default ProjectCard;
