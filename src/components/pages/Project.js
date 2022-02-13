import React from 'react'
import {Link} from "react-router-dom";
import '../styles/project.css';

function Project() {
  return ( 
      <div>
        <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="nav-toggle"/>
      <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon" aria-label="toggle navigation menu"></span>
      </label>
      <div class="navigation__background"></div>

      <nav class="navigation__nav" role="navigation">
        <ul class="navigation__list">
          <li class="navigation__item">
          <Link to='/' >Home</Link>
          </li>
          <li class="navigation__item">
          <Link to='/about' >About</Link>
          </li>      
    </ul>
  </nav>
</div>
    </div>  
  )
}

export default Project