import React from 'react';
import './project.css'
import Social from '../Social/Social.js';


function Project() {
  return (
  <div className='project_body'>
    <div>
      <a href="/"><i class="fas fa-home fa-3x home">Home</i></a>
      <a href="/about"><i className="fas fa-user-tie fa-3x about">About Me</i> </a>
    </div>
    
    <h1>My Projects</h1>
 
    <div>
      <Social />
    </div>
  </div>);
}

export default Project;
