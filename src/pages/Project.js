import React from 'react'
import '../styles/project.css';
import Menu from '../components/Menu/menu';





function Project() {
  
  return ( 
      <div className='project-body'>
        <Menu />


       <div className='table'>
        <h1 className='animate__animated animate__backInLeft'>City weather API</h1>

        <div className='video-description'>
          
          <video width="500" height="300"  controls>
          <source src='image/ezgif.com-gif-maker.gif' type="video/mov"/>
          </video>
          <div>
          <h2>Description<br/><p>First Project of School of Code where i create a City Info using e weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
          </div>
          
          
        </div>
        
        
       </div>


       <div className='table'>
        <h1 className='animate__animated animate__backInLeft'>City weather API</h1>

        <div className='video-description'>
          
          
          <img src="ezgif.com-gif-maker.gif" alt="This will display an animated GIF" />
          
          <div>
          <h2>Description<br/><p>First Project of School of Code where i create a City Info using e weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
          </div>
          
          
        </div>
        
        
       </div>
    </div>  
  )
}

export default Project