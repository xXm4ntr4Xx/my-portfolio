import React from 'react'
import '../styles/home.css';
import Menu from '../components/Menu/menu';

function Home() {
  // <Link to='/project' >Project</Link>
  // <Link to='/about' >About</Link>
  return (   
    <div className='home-body'>
      <Menu />
         <h1 className='header1'>Hi. Im Pietro. <br/> Software developer <br/>based in london</h1>
    </div>
  )
}

export default Home