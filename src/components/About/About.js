import React from 'react';
import { Link } from "react-router-dom";

import './about.css';
import 'animate.css';

function About() {
  return (
  <div className='about_container'>
    <Link to="/"><i class="fas fa-user-tie fa-3x about">Home</i> </Link>
    <Link to="https://angry-khorana-81659d.netlify.app//project"><i class="fas fa-briefcase fa-3x project">Project</i></Link>

    <h1 className='animate__animated animate__headShake'>What about me......</h1>

    <br />
    <br />
    <p className='text animate__animated animate__zoomInLeft'>Im 33 years old guy from Italy, and after 10 years working in a casino i decided to join this new adventure in the tech industry</p>
    <p className='text animate__animated animate__zoomInRight'> During my experience with school of code i learn the basic of <b className='html'>Html</b>, <b className='css'>Css </b> and <b className='js'>Javascript</b></p>

  </div>  
  )
}

export default About;
