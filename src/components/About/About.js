import React from 'react';
import { Link } from "react-router-dom";
import './about.css';

function About() {
  return (
  <div className='about_container'>
    <Link to="/"><i class="fas fa-user-tie fa-3x about">Home</i> </Link>
    <Link to="/project"><i class="fas fa-briefcase fa-3x project">Project</i></Link>

    
    <h1>Hi my name is Pietro Annobil</h1>
    <p>Im 33 years old and after 10 years working in a casino i decided to join this new adventure in the tech industry</p>
    <p>During my experience with school of code i learn the basic of HTML, CSS and JAVASCRIPT</p>

  </div>
    
  )
}

export default About;
