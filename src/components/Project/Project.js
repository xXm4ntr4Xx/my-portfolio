import React from 'react';
import './project.css'
import { Link } from "react-router-dom";


function Project() {
  return (<div>
    
    <Link to="/"><i className="fas fa-user-tie fa-3x about">Home</i></Link>
    <Link to="/about"><i className="fas fa-user-tie fa-3x about">About Me</i> </Link>
    <i class="fa-solid fa-house">Home</i>
    
      <h1>this is my projects</h1>

  </div>);
}

export default Project;
