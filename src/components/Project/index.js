import React from 'react';
import './project.css'


function Project() {



  return (
  <div className='project_body'>
    <div className='topnav'>
      <a href="/"><i class="fas fa-home fa-3x home"></i></a>
      <a href="/about"><i className="fas fa-user-tie fa-3x about"></i> </a>
    </div>
    <div>
      <h1>My Projects</h1>
      
      
      <table>

  <tr>
    <th>Project</th>
    <th>Language</th>
    <th>Deployment</th>
    <th>Link</th>
  </tr>

  <tr>
    <td>Weather App</td>
    <td>Html, Css, Javascript</td>
    <td>Heroku</td>
    <td><a className='link' href='https://weather-application001.herokuapp.com/'>https://weather-application001.herokuapp.com</a></td>
  </tr>

  <tr>
    <td>Search Movie</td>
    <td>Javascript(Gatsby.js), Css, </td>
    <td>Netlify</td>
    <td><a className='link' href='https://searchapp.gatsbyjs.io/mainPage'>https://searchapp.gatsbyjs.io/mainPage</a></td>
  </tr>

  <tr>
    <td>Bootcamper Helper</td>
    <td>Javascript, Css, Agile Methodology, Express, Heroku</td>
    <td>Heroku</td>
    <td><a className='link' href='https://bootcamperknowledge.herokuapp.com/'>https://bootcamperknowledge.herokuapp.com</a></td>
  </tr>
</table>
      
    </div> 
  </div>);
}
export default Project;
