import React from 'react';
import './about.css';
import 'animate.css';


function About() {
  return (
  <div className='about_container'>
    
    <a href="/"><i class="fas fa-user-tie fa-3x about">Home</i> </a>
    <a href="/project"><i class="fas fa-briefcase fa-3x project">Project</i></a>

    

    <br />
    <br />
    <p className='text animate__animated animate__zoomInLeft'> 33 years old guy from Italy, and after 10 years working in a casino i decided to join this new adventure in the tech industry</p>
    <p className='text animate__animated animate__zoomInRight'> During my experience with school of code i learn the basic of <b className='topic'>Html</b>, <b className='topic'>Css </b> and <b className='topic'>Javascript</b></p>
    <p className='text animate__animated animate__zoomInLeft'> The importance of testing using tool like <b className='topic'>Jest</b>, <b className='topic'>Cypress</b>, work with databse using <b className='topic'>Node.js</b>and <b className='topic'>Express</b></p>
    <p className='text animate__animated animate__zoomInRight'> Learn how to CRUD application using api platform like <b className='topic'>Postman</b> and <b className='topic'>Thunder</b></p>
    
  </div>  
  )
}

export default About;
