import React, { useRef } from 'react'
// import { useRef } from 'react'; --> emailJS import
import '../contact/contact.css'
import {TbMailFast} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com';


const Contact = () => {
  // EMAIL js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jhaw2kw', 'template_wsupfpt', form.current, 'HNR_hNuTHAgBydb6b')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };
  // Ends EMAILjs

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact options">
          <article className='contact__option'>
            <TbMailFast className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>djangotester@gmail.com</h5>
            <a href="mailto:djangotester@gmail.com" target='_blank'>Send a Mail message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>            
            <a href="https://wa.me/919663600530?text=We%20are%20impressed%20with%20your%20profile%20please%20revert%20back%20to%20us%20with%20your%20details" target='_blank'>WhatsApp Me! (faster response!)</a>
          </article>         
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Preffered Calling Name' required/>
          <input type="email" name='email' placeholder='Your valid E-mail ID' required/>
          <textarea type="message" name='message' rows='7' placeholder='Your Message min 50 charecter' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit your Query</button>
        </form>
      </div>
    </section>
  )
}

export default Contact