import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linked.com" target='_blank'><BsLinkedin /></a>
        <a href="https://www.whatsappweb.com" target='_blank'><BsWhatsapp /></a>
        <a href="https://www.github.com" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials