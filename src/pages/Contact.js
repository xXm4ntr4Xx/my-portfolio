import React from 'react'
import '../styles/contact.css';
import Menu from '../components/Menu/menu';


function About() {


const handleSubmit = () => {
  
}

  return (  
      <div className='contact-container'>
        <Menu />
          
        <h1 className='header-contact'><a href="mailto:pietroannobil@gmail.com">Send email</a></h1>
        
        <div className='social-list'>
            <p><span>Telephone : </span>07501971950</p>
            <p>Youtube : <a href='https://www.youtube.com/channel/UC5vMCzzUNOSlrxbphd4k7SA'><i class="fab fa-youtube"></i></a></p>
            <p>Instagram : <a href='https://www.instagram.com/xxm4ntr4xx/'><i class="fab fa-instagram"></i></a></p>
            <p> Faceook : <a href='https://www.facebook.com/pietro.annobil'><i class="fab fa-facebook-square"></i></a></p>
            <p>Twitter : <a href='https://twitter.com/AnnobilPietro'><i class="fab fa-twitter"></i></a></p>
            <p>Pinterest : <a href='https://www.pinterest.co.uk/'><i class="fab fa-pinterest"></i></a></p>
        </div>
          
</div>
     
  )
}

export default About