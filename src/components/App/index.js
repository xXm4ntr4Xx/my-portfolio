import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from '../Home';
import About from '../About';
import Project from '../Project';

  


function App() {
  return (
    <Router basename='/my_project'>
    <div className="App">

          <Route  exact path="/" component={Home} />
          <Route  exact path="/home" component={Home} />
          <Route   path="/about" component={About} />
          
          <Route   path="/project" component={Project} />

    </div> 
    </Router> 
  );
}

export default App;
