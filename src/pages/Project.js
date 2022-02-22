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
          <h2>Description<br/><p>Thi is the result of our national project week.
            <br/> For this task we have to put down everything we learned during the bootcamp.<br/>
            For the week we work as a team of 4 and every day we use to split in a pair and work in different area <br/>of the project(1 team work on front-end and 1 team work on back-end) <br/>
             As a team we have to work with agile methodoly.Disney Ideation, use sprint, Kanban Board, Tech stack diagram<br/>
             Have been a wonderful experience see how people with different background and different knowledge can produce in a week working togheter.<br/>
              </p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, React, Express, Heroku, Miro Board, Figma, Wireframe</p>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://bootcamperknowledge.herokuapp.com/'>Bootcamper Helper Link</a>
          </div>  
        </div>

        <hr/>
        <hr/>
        <hr/>

        <h1 className={projectStyles.header_project}>City weather API</h1>
        <div className={projectStyles.video_description}>
        <a  href='https://weather-application001.herokuapp.com/ '>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/b7cd41d4-884d-451f-b256-0335af874c47.gif?ClientID=vimeo-core-prod&Date=1644864340&Signature=e2e9c7e9f40cdf5d7f13c5ac3996a13d070426ba'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>First Project of School of Code where i create a City Info using e weather API.
            <br/> The app has been created using Vanilla Javascript,Html and Css. The Most challenge <br/>part of this
             project has been retreive the info from  the API and assign the different data <br/>to a variable and place the info on the page.
             <br/>Was the first time i use  Css in a complete project for create a table and add weather icon on the page.</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a style={{color:'blue',marginLeft:'2%'}}href='https://weather-application001.herokuapp.com/ '>Weather Api Link</a>
          </div> 
          <br/>   
        </div>

    <hr/>
    <hr/>
    <hr/>

    <h1 className={projectStyles.header_project} >Dictionary API</h1>
        <div className={projectStyles.video_description}>
        <a  href='https://little-dictionary.netlify.app'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/ac07f7f9-fd5f-49da-b9cf-2ccb20128658.gif?ClientID=vimeo-core-prod&Date=1645225890&Signature=db8e00fed25897b6e055798bfbd79757dc8561a5'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>For this beginner app i use a Dictionary API
            <br/> The app has been created using Vanilla Javascript,Html and Css.<br/>
            Part of the weekly exercise we had at school of code</p> </h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI</p>
            <a  style={{color:'blue',marginLeft:'2%'}}href='https://little-dictionary.netlify.app'>Dictionary Api Link</a>
          </div> 
        </div>

        <hr/>
        <hr/>
        <hr/>

        <h1 className={projectStyles.header_project}>Search Movie/Anime/TV </h1>
        <div className={projectStyles.video_description}>
        <a  href='https://searchapp.gatsbyjs.io/'>
          <img className={projectStyles.weatherAPI} src='https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/f70626d1-7352-4e38-b7bc-a2f3d6cbb3b7.gif?ClientID=vimeo-core-prod&Date=1645228122&Signature=f02e9ec3377b958f0ffefa93a69dfbbd6cb16d73'alt=''/>
        </a>
          <div className={projectStyles.text_div}>
          <h2>Description<br/><p>The aim of this exercise was to get familiar with a new framework.
            <br/> For this task the bootcampers have to work on a new <br/>framework
             and Gatsby was the one i got assigned <br/>The key point of the learning that day were
             <br/>the direct link to the page, the css module and the Gatsby deployment(happen on the Cloud)</p></h2>
            <p><bold>Tools : </bold>Html,Css,Vanilla Javascript, FetchAPI, Gatsby Cloud</p>
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