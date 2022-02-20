import React from 'react';
import contactStyles from '../styles/contact.module.css';
import Menu from '../components/Menu/menu';



function About() {
  


  return (  
      <div className={contactStyles.contact_container}>
        <Menu />
          
        <p className={contactStyles.header_contact}><span>Email:  </span><a href="mailto:pietroannobil@gmail.com">pietroannobil@gmail.com</a></p>
        
        <div className={contactStyles.social_list}>
            <p><span>Telephone : </span>07501971950</p>
            <p>Linkedin : <a href='https://www.linkedin.com/in/pietro-annobil-025483180/'><i className="fab fa-linkedin"></i></a></p>
            <p>Twitter : <a href='https://twitter.com/AnnobilPietro'><i className="fab fa-twitter"></i></a></p>
            <p>Pinterest : <a href='https://www.pinterest.co.uk/'><i className="fab fa-pinterest"></i></a></p>
            <p> Facebook : <a href='https://www.facebook.com/pietro.annobil'><i className="fab fa-facebook-square"></i></a></p>
            <p>Youtube : <a href='https://www.youtube.com/channel/UC5vMCzzUNOSlrxbphd4k7SA'><i className="fab fa-youtube"></i></a></p>
            <p>Instagram : <a href='https://www.instagram.com/xxm4ntr4xx/'><i className="fab fa-instagram"></i></a></p>
        </div>
      <br/>
</div>
     
  )
}

export default About;