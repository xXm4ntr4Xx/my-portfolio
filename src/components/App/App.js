import React from "react";
import {
  BrowserRouter,
  Router ,
  Route
} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Project from "../pages/Project";

export default function App() {
  return (
    <div> 
      <BrowserRouter>
        <Router>
          <Route exact path='/' index element={<Home />} />
          <Route exact path='/home' index element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path="/project" element={<Project />} />
        </Router>
       </BrowserRouter> 
    </div>
    
  );
}
