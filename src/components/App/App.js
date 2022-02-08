import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../Home/Home.js';
import About from '../About/About.js';
import Project from '../Project/Project.js';
  


function App() {
  return (
    
    <div className="App">
      
      {/* <Link to="/about"><i class="fas fa-user-tie fa-3x about">About Me</i> </Link>
        <Link to="/project"><i class="fas fa-briefcase fa-3x project">Project</i></Link> */}

        <Router>
        <Switch>
          <Route  exact path="/" component={Home} ><Home /></Route>
          </Switch>
          <Switch>
          <Route  exact path="/about" component={About} ><About /></Route>
          </Switch>
          <Switch>
          <Route  exact path="/project" component={Project} ><Project /></Route>
          </Switch>
        </Router> 

    </div>
  );
}

export default App;
