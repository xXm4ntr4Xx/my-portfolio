import './App.css';
import Social from '../Social/social.js'
import Header from '../Header/header.js';
import Skills from '../Skills/skills.js';
import Project from '../Project/project.js'


function App() {
  return (
    <div className="App">
      <Social />
      <Header />
       
        <div className='second_box'>
        <Skills />
        </div>

        <div className='third_box'>
        <Project />
        </div>
        
    </div>
  );
}

export default App;
