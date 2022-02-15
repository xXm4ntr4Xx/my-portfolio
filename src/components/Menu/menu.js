import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';



function Menu() {
  return (
    <div>
        <nav id='menu'>
        <input type='checkbox' id='responsive-menu' /><label></label>
            <ul>
              <li><Link to='/contact' >Contact</Link></li>
              <li><Link to='/project' >Project</Link></li>
              <li><Link to='/' >Home</Link></li>  
             </ul>
        </nav>
    </div>
  )
}

export default Menu