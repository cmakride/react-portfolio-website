import React from 'react'
import './contact.css'

import { FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

        <div className="avatar">
          
        </div>
        
          <small className='contact-text'>If you would like to reach out, please message me on LinkedIn. Link to my profile is below. Thank you. </small>
        
        <div>
          <a className='contact-icon' href="https://www.linkedin.com/in/christopher-makrides" rel='noreferrer' target='_blank'><FaLinkedin/></a>
        </div>

      </div>
    </section>
  )
}

export default Contact