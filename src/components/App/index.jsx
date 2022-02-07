import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
  


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
          <Route exact path="/about" component={About} >About Page</Route>
          </Switch>
        </Router> 

    </div>
  );
}

export default App;
