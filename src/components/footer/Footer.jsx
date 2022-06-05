import React from 'react'
import '../footer/footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">PRAVEEN-PORTFOLIO</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiece</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#companies">Companies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.github.com"><FaGithub /></a>
        <a href="https://www.linkedin.com"><AiOutlineLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Praveen Kumar. All rights are reserved</small>
      </div>
    </footer>

    
  )
}

export default Footer