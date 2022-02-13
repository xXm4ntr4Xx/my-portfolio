import React from 'react';
import '../App/App.css';
import './home.css';
import Social from '../Social';
import Header from '../Header';
import Skills from '../Skills';
import {Link} from 'react-router-dom';



function Home() {



  return (<div>
    
     <div className="topnav">
      <Link to="/project">Project</Link>
      <Link to="/about">About </Link> 
    </div>
    
      <Header />
        
        <div className='second_box'>
        <Skills />
        </div>

    
      <div>
        <Social />
      </div>
  </div>)
}

export default Home;
