import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      
      <h2>About Me</h2>

      <div className="container about__container">


          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>BA Integrative Biology <br /><i>University of California Berkeley</i></small>
              </article>
                <p>
                    I'm an enthusiastic and self-driven developer seeking an opportunity to apply 
                    and expand my technical skills. 
                    With a foundation in development through self-learning and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
                </p>
            </div>

          </div>
    </div>
    </section>
  )
}

export default About