import React ,{useRef}from 'react';
import '../styles/contact.css';
import Menu from '../components/Menu/menu';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';


function About() {
  const form = useRef({});
  
const sendEmail = (e) => {
    e.preventDefault();

//   emailjs.sendForm('service_txg5vy7','template_plwfnyd',form.current,'user_WjBDwlObMa9kxwB0CQf2h')
//   .then((result) => {
//     console.log(result.text);
// }, (error) => {
//     console.log(error.text);
// });

//   e.target.reset();
  }


  return (  
      <div className='contact-container'>
        <Menu />
          
        <h1 className='header-contact'><a href="mailto:pietroannobil@gmail.com">Send email</a></h1>
        
        <div className='social-list'>
            <p><span>Telephone : </span>07501971950</p>
            <p>Youtube : <a href='https://www.youtube.com/channel/UC5vMCzzUNOSlrxbphd4k7SA'><i className="fab fa-youtube"></i></a></p>
            <p>Instagram : <a href='https://www.instagram.com/xxm4ntr4xx/'><i className="fab fa-instagram"></i></a></p>
            <p> Faceook : <a href='https://www.facebook.com/pietro.annobil'><i className="fab fa-facebook-square"></i></a></p>
            <p>Twitter : <a href='https://twitter.com/AnnobilPietro'><i className="fab fa-twitter"></i></a></p>
            <p>Pinterest : <a href='https://www.pinterest.co.uk/'><i className="fab fa-pinterest"></i></a></p>
        </div>

      <br/>

      
      {/* <form action='POST'ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
          
</div>
     
  )
}

export default About;