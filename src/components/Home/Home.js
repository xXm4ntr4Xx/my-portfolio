import React from 'react';
import '../App/App.css';
import Social from '../Social/Social.js';
import Header from '../Header/Header.js';
import Skills from '../Skills/Skills.js';




function Home() {
  return (<div>
      <a href="/project"><i class="fas fa-briefcase fa-3x project">Project</i></a>
      <a href="/about"><i class="fas fa-user-tie fa-3x about">About Me</i> </a>
     
       
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
