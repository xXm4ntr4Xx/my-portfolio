import React from 'react'
import homeStyles from '../styles/home.module.css';
import Menu from '../components/Menu/menu';

function Home() {
  

  return (   
    <>
    
    <div className={homeStyles.home_body}>
      <Menu />
         <h1 className={homeStyles.header1}> Pietro Annobil </h1><br/>
          <p className={homeStyles.par_home}>Im a software developer based in london that love work with API</p>
          <p className={homeStyles.par_home}>My favourite tools are React and Node.js</p>
      <br/>
      <br/>
      <div className={homeStyles.social_link}>
        <a href='https://github.com/xXm4ntr4Xx'><h2 className={homeStyles.github}>Github  <i class="fab fa-github-square fa-spin fa-3x"></i></h2></a>
        <a href='https://www.linkedin.com/in/pietro-annobil-025483180/'><h2 className={homeStyles.linkedin}>LinkedIn  <i class="fab fa-linkedin fa-spin fa-3x"></i></h2></a>
     </div>
      
    </div>
    </>
  )
}

export default Home;