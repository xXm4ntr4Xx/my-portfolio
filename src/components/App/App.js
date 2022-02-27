import {useState} from "react";
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Project from "../../pages/Project";

export default function App() {

  return (
    <div className="app"> 
      <BrowserRouter>
        <Routes>
          <Route exact path='/' index element={<Home />} />
          <Route exact path='/home' index element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

