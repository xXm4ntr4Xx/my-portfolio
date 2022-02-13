import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/home.css';

function Home() {
  
  return (
    <body id='home'>
    <div className='home-body'>
        <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="nav-toggle"/>
      <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon" aria-label="toggle navigation menu"></span>
      </label>

     

{/* Navigation hidden */}
      <nav class="navigation__nav" role="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
          <Link to='/project' >Project</Link>
          </li>
          <li class="navigation__item">
          <Link to='/about' >About</Link>
          </li>   
    </ul>
  </nav>
 <h1>home</h1>
 <div>
   
 </div>
</div>
    </div>
    </body>
  )
}

export default Home