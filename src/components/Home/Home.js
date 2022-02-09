import React from 'react';
import '../App/App.css';
import Social from '../Social/Social';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';


import { Link } from "react-router-dom";

function Home() {
  return (<>
  
     <Link to="/project"><i class="fas fa-briefcase fa-3x project">Project</i></Link>
     <Link to="/about"><i class="fas fa-user-tie fa-3x about">About Me</i> </Link>
       
      <Header />
        
        <div className='second_box'>
        <Skills />
        </div>

    <div>
       <Social />
    </div>
  
  </>)
}

export default Home;
