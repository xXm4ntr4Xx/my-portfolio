import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from '../Home/Home.js';
import About from '../About/About.js';
import Project from '../Project/Project.js';
import NoPage from '../NoPage/NoPage';
  


function App() {
  return (
    <Router basename='/my_project'>
    <div className="App">

          <Route  exact path="/" component={Home} />
          
          <Route   path="/about" component={About} />
          
          <Route   path="/project" component={Project} />

          <Route    component={NoPage} />
          

    </div> 
    </Router> 
  );
}

export default App;