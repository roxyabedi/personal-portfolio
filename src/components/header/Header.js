import React from 'react'
import './header.css'
import CTA from './Contact'
import me from '../../assets/me.JPG'
import HeaderSocials from '/Users/roxyabedi/Documents/Personal Website/personal-website/src/components/header/HeaderSocials.js'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h2>Hi, I'm</h2>
          <h1>Roxy Abedi</h1>
          <h2 className="text-light">Web Developer</h2>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header