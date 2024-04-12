import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/roxanna-abedi/" target="_blank" rel='noreferrer'><BsLinkedin size={30}/></a>
        <a href="https://github.com/roxyabedi" target="_blank" rel='noreferrer'><BsGithub size={30}/></a>
    </div>
  )
}

export default HeaderSocials