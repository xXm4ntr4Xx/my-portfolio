import React from 'react';
import '../App/App.css';
import './home.css';
import Social from '../Social';
import Header from '../Header';
import Skills from '../Skills';




function Home() {



  return (<div>
    
     <div className="topnav">
      <a href="/project"><i class="fas active  fa-briefcase fa-3x project"/></a>
      <a href="/about"><i class="fas active fa-user-tie fa-3x about"/> </a> 
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
