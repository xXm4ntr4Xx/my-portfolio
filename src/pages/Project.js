import React from 'react'
import '../styles/project.css';
import Menu from '../components/Menu/menu';





function Project() {
  
  return ( 
      <div className='project-body'>
        <Menu />


       <div className='table'>
        <h1 className='header-project animate__animated animate__backInLeft' styles={{color:'white'}}>City weather API</h1>

        <div className='video-description'>
        <a  href='https://weather-application001.herokuapp.com/ '>
          <img className='weatherAPI' src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b7cd41d4-884d-451f-b256-0335af874c47.gif?ClientID=vimeo-core-prod&Date=1644864340&Signature=e2e9c7e9f40cdf5d7f13c5ac3996a13d070426ba'/>
        </a>
        
          <div className='text-div'>
          <h2>Description<br/><p>First Project of School of Code where i create a City Info using e weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a  style={{color:'white'}}href='https://weather-application001.herokuapp.com/ '>Weather Api Link</a>
          </div> 
          <br/>
            
        </div>


        <div className='video-description'>
        
        
          <div className='text-div'>
          <h2>Description<br/><p>First Project of School of Code where i create a City Info using e weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a  style={{color:'white'}}href='https://weather-application001.herokuapp.com/ '>Weather Api Link</a>
          </div> 
          <a  href='https://weather-application001.herokuapp.com/ '>
          <img className='weatherAPI' src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b7cd41d4-884d-451f-b256-0335af874c47.gif?ClientID=vimeo-core-prod&Date=1644864340&Signature=e2e9c7e9f40cdf5d7f13c5ac3996a13d070426ba'/>
        </a>
          <br/>
            
        </div>

          

       </div>
    </div>  
  )
}

export default Project