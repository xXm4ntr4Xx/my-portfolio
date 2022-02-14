import React from 'react'
import '../styles/home.css';
import Menu from '../components/Menu/menu';

function Home() {
  

  return (   
    <div className='home-body'>
      <Menu />
         <h1 className='header1'> Pietro Annobil </h1><br/>
          <p className='par-home'>Im a software developer based in london that love work with API</p>
          <p className='par-home'>My favourite tools are Html ,Node.js and React</p>
      <br/>

      <div className='social-link'>
        <a href=''><h2 className='github'>Github  <i class="fab fa-github-square fa-spin fa-3x"></i></h2></a>
        <a href=''><h2 className='linkedin'>LinkedIn  <i class="fab fa-linkedin fa-spin fa-3x"></i></h2></a>
      </div>
      
    </div>
  )
}

export default Home