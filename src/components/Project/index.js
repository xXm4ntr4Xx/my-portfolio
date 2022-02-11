import React from 'react';
import './project.css'


function Project() {



  return (
  <div className='project_body'>
    <div>
      <a href="/"><i class="fas fa-home fa-3x home">Home</i></a>
      <a href="/about"><i className="fas fa-user-tie fa-3x about">About Me</i> </a>
    </div>
    <div>
      <h1>My Projects</h1>
      
      <div>
      <table>

  <tr>
    <th>Project</th>
    <th>Language</th>
    <th>Database</th>
    <th>Link</th>
  </tr>

  <tr>
    <td>Weather App</td>
    <td>Html, Css, Javascript</td>
    <td>Heroku</td>
    <td><a href='https://weather-application001.herokuapp.com/'>https://weather-application001.herokuapp.com/</a></td>
  </tr>

  <tr>
    <td>Search Movie</td>
    <td>Javascript(Gatsby.js), Css, </td>
    <td>Netlify</td>
    <td><a href='https://searchapp.gatsbyjs.io/mainPage'>https://searchapp.gatsbyjs.io/mainPage</a></td>
  </tr>

  <tr>
    <td>Bootcamper Helper</td>
    <td>Javascript, Css, Agile Methodology, Express, Heroku</td>
    <td>Heroku</td>
    <td><a href='https://bootcamperknowledge.herokuapp.com/'>https://bootcamperknowledge.herokuapp.com/</a></td>
  </tr>
  
</table>
      </div>
    </div>
    
    
    
  
    
  </div>);
}
export default Project;
