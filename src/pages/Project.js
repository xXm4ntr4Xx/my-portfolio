import React from 'react'
import '../styles/project.css';
import Menu from '../components/Menu/menu';




function Project() {
  
  return ( 
      <div className='project-body'>
        <Menu />


       <div className='table'>
        <h1>City weather API</h1>

        <video width="500" height="300"  controls>
        <source src="https://vimeo.com/676914977" type="video/mp4"/>
        </video>
        
       </div>
    </div>  
  )
}

export default Project