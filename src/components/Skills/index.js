import React from "react";
import './skills.css';



const Skills = () => (
  <div>
    <h1 className="title is-1">My Skills</h1>
    <div className='main_box'>
         
    <div className="container">
    
    <i class="fab fa-html5 fa-3x"><button>Html</button></i>
    <i class="fab fab fa-css3-alt fa-3x"><button>Css</button></i> 
    <i class="fab fa-js fa-3x"><button>Js</button></i>
    <i class="fab fa-react fa-3x"><button>React</button></i>
    <i class="fab fa-node fa-3x"><button>Node</button></i>
    <i class="fas fa-database fa-3x"><button>Heroku</button></i>
     <div>
     
     </div>
    </div>
    <i class="fas fa-bug fa-3x"><button>Jest</button></i>
    <i class="fas fa-code-branch fa-3x"><button>Github</button></i>
    </div>
  </div>
);

export default Skills;