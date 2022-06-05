import React from 'react'
import '../nav/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {RiContactsBookLine} from 'react-icons/ri'
import {IoLogoSlack} from 'react-icons/io'

// To make sure active class is to be selected for each component we have clicked we need 
// to import stateHook

import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BsFillPersonFill /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaLaptopCode /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active': ''}><FaPython /></a>      
      <a href="#company" onClick={() => setActiveNav('#companies')} className={activeNav === '#company' ? 'active': ''}><IoLogoSlack /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><RiContactsBookLine /></a>
    </nav>
  )
}

export default Nav