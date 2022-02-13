import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';
function Menu() {
  return (
    <div>
        <nav id='menu'>
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/project' >Project</Link></li>
                <li><Link to='/about' >About</Link></li>
             </ul>
        </nav>
    </div>
  )
}

export default Menu