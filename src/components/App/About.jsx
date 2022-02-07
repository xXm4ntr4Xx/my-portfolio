import React from 'react';
import { Link } from "react-router-dom";
import './about.css'

function About() {
  return (<div className='about_container'>

    <h1>about page</h1>
    <Link to="/">Home</Link>

  </div>
    
  )
}

export default About;
