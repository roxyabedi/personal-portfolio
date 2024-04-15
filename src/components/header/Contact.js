import React from 'react'
import CV from '/Users/roxyabedi/Documents/Personal Website/personal-website/src/assets/Roxanna_Abedi Resume.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} target="_blank" rel="noopener noreferrer" className='btn'>Resume</a>
        <a href="#contacts" className='btn btn-primary contact-me'>Contact Me</a>
    </div>
  )
}

export default CTA