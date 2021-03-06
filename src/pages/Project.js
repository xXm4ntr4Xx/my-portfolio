import React from 'react'
import projectStyles from '../styles/project.module.css';
import Menu from '../components/Menu/menu';



function Project() {
  
  
  return ( 
      <div className={projectStyles.project_body}>
        <Menu />

      {/* 'header_project animate__animated animate__backInLeft' */}
       <div className={projectStyles.table}>

       <h1 className={projectStyles.header_project}>Bootcamper Helper</h1>
        <div className={projectStyles.video_description}>
        <a  href='https://bootcamperknowledge.herokuapp.com/'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/8f923854-1c63-4bf1-ac71-4cdd10fda6ed.gif?ClientID=vimeo-core-prod&Date=1645557355&Signature=d0deab5ff1f4fe70ef7b3c0bad7537b877dd2261'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>This is the result of our project week.
            <br/> For this task we have to put down everything we learned during the bootcamp.<br/>
            For the week we work as a team of 4 and every day we use to split in a pair and work in different areas <br/>of the project(1 team worked on front-end and 1 team worked on back-end) <br/>
             As a team we have to work with agile methodoly.Disney Ideation, use sprint, Kanban Board, Tech stack diagram<br/>
             Have been a wonderful experience see how people with different background and different knowledge can produce in a week working togheter.<br/>
              </p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, React, Express, Heroku, Miro Board, Figma, Wireframe</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/SchoolOfCode/national-project-week-jenny-josh-joan-pietro'> Source Code</a>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://bootcamperknowledge.herokuapp.com/'>Bootcamper Helper Link</a>
          </div>  
        </div>

        <hr/>
        <hr/>
        <hr/>

        <h1 className={projectStyles.header_project}>City weather API</h1>
        <div className={projectStyles.video_description}>
        <a  href='https://weather-application001.herokuapp.com/'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b7cd41d4-884d-451f-b256-0335af874c47.gif?ClientID=vimeo-core-prod&Date=1644864340&Signature=e2e9c7e9f40cdf5d7f13c5ac3996a13d070426ba'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>First Project of School of Code where i create a City Info using a weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/xXm4ntr4Xx/City-weather-Api'> Source Code</a>
            <a style={{color:'blue',marginLeft:'2%'}}href='https://weather-application001.herokuapp.com/ '>Weather Api Link</a>
          </div>  
        </div>

    <hr/>
    <hr/>
    <hr/>

        <h1 className={projectStyles.header_project}>Html Template Example </h1>
        <div className={projectStyles.video_description}>
        <a  href='https://pietroannoibl-portfolio.netlify.app/'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ecaf745b-768d-4bab-8580-3248b363cc0b.gif?ClientID=vimeo-core-prod&Date=1646350971&Signature=b8c1b40f67c7b919080ea2602c0690affeeeb2c3'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>With this exercise i start to watch around for simple template for create portfolio on the internet.<br/>
          BootsrapMade is a A website that allow you to create<br/> website template very quickly, as normal bootsrap framework is based on class</p></h2>
            <p><bold>Tools : </bold>Html,Bootstrap tools, Netlify, Php</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/xXm4ntr4Xx/html-portfolio-new'> Source Code</a>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://pietroannoibl-portfolio.netlify.app/'>Html Template Example Link</a>
            
          </div>  
        </div>

    <hr/>
    <hr/>
    <hr/>

    <h1 className={projectStyles.header_project} >Dictionary API</h1>
        <div className={projectStyles.video_description}>
        <a  href='https://little-dictionary.netlify.app'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/bab8f1d9-947e-43c1-997b-f4ca2330702a.gif?ClientID=vimeo-core-prod&Date=1645744885&Signature=2edc80a4fbd64e914bfe01b6cf407218e78b99f5'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>For this beginner app i use a Dictionary API
            <br/> The app has been created using Vanilla Javascript,Html and Css.<br/>
            Part of the weekly exercise we had at school of code</p> </h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/xXm4ntr4Xx/DictionaryApi'> Source Code</a>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://little-dictionary.netlify.app'>Dictionary Api Link</a>
          </div> 
        </div>

        <hr/>
        <hr/>
        <hr/>

        <h1 className={projectStyles.header_project}>Search Movie/Anime/TV </h1>
        <div className={projectStyles.video_description}>
        <a  href='https://searchapp.gatsbyjs.io/'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/153ffda2-60b7-4762-ac55-a9c0d3351b3d.gif?ClientID=vimeo-core-prod&Date=1645746953&Signature=7b5fc7a8ea2ed1e16ea1f276c772150e8c714b64'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>The aim of this exercise was to get familiar with a new framework.
            <br/> For this task the bootcampers have to work on a new <br/>framework
             and Gatsby was the one we got assigned <br/>The key point of the learning that day were
             <br/>the direct link to the page, the css module and the Gatsby deployment(happen on the Cloud)</p></h2>
            <p><bold>Tools : </bold>Html,Css,React, FetchAPI, Gatsby Cloud</p>
            <a  style={{color:'green',marginLeft:'2%'}}href='https://github.com/xXm4ntr4Xx/search-app'> Source Code</a>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://searchapp.gatsbyjs.io/'>Search Movie/Anime/TV Api Link</a>
            
          </div>  
        </div>

        <hr/>
        <hr/>
        <hr/>
       </div>
    </div>  
  )
}

export default Project