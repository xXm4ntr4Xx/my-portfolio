import React from 'react';
import './project.css'
import { Link } from "react-router-dom";
import Social from '../Social/Social.js';


function Project() {
  return (
  <div className='project_body'>
    <div>
      <Link to="/"><i class="fas fa-home fa-3x home">Home</i></Link>
      <Link to="/about"><i className="fas fa-user-tie fa-3x about">About Me</i> </Link>
    </div>
    
    <h1>My Projects</h1>
 
    <div>
      <Social />
    </div>
  </div>);
}

export default Project;
