import React from 'react';
import './about.css';
import 'animate.css';


function About() {
  return (<div>
   {/* <div className='about_container'> */}
  
    <div className='topnav'>
    <a href="/"><i class="fas active fa-home fa-3x home"></i></a>
    <a href="/project"><i class="fas active fa-briefcase fa-3x project"></i></a>
    
    </div>


    <br />
    <br />
    <p className='text animate__animated animate__zoomInLeft'> 33 years old guy from Italy, and after 10 years working in a casino i decided to join this new adventure in the tech industry</p>
    <p className='text animate__animated animate__zoomInRight'> During my experience with school of code i learn the basic of <b className='topic'>Html</b>, <b className='topic'>Css </b> and <b className='topic'>Javascript</b></p>
    <p className='text animate__animated animate__zoomInLeft'> Learn the importance of  testing using tool like <b className='topic'>Jest</b>, <b className='topic'>Cypress</b>.</p> 
    <p className='text animate__animated animate__zoomInRight'>Work with Backend enviroment like <b className='topic'>Node.js</b>and <b className='topic'>Express</b></p>
    <p className='text animate__animated animate__zoomInLeft'> Learn how to create CRUD application using  javascript combined with api platform like <b className='topic'>Postman</b> and <b className='topic'>Thunder</b></p>

  </div>  
  )
}

export default About;
