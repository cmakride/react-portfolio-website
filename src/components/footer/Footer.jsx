import React from 'react'
import './footer.css'
import { FaGithubSquare,FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Christopher Makrides</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    <div className="footer__socials">
    <a href="https://www.linkedin.com/in/christopher-makrides" rel='noreferrer' target='_blank'><FaLinkedin/></a>
      <a href="https://github.com/cmakride" rel='noreferrer' target='_blank'><FaGithubSquare/></a>
    </div>
    </footer>
  )
}

export default Footer