import React from 'react';
import './App.css';
import Social from '../Social/social.js'
import Header from '../Header/header.js';
import Skills from '../Skills/skills.js';
import About from './About';
import Project from './Project'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  return (<>
   
      <Link to="/about"><i class="fas fa-user-tie fa-3x about">About Me</i> </Link>
      <Link to="/project"><i class="fas fa-briefcase fa-3x project">Project</i></Link>
     
      <Header />
       
        <div className='second_box'>
        <Skills />
        </div>

        <div className='third_box'>
        
        </div>
        
       <Router>
          <Switch>
          <Route  exact path="/about">
            <About/>
          </Route>
          </Switch>

          <Switch>
          <Route  exact path="/project">
            <Project/>
          </Route>
          </Switch>
        </Router>
    
    <div>

       <Social />
    </div>
  </>)
}

export default Home;
