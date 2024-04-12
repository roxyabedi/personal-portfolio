import React from 'react'
import './projects.css'
import IMG1 from '../../assets/celtics.png'
import IMG2 from '../../assets/connections.png'
import IMG3 from '../../assets/portfolio.png'

const Projects = () => {
  return (
    <section id='myprojects'>

      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Boston Celtics Stats</h3>
            <small className='text-light description'>HTML | CSS | JS | Express/Node.js | EJS</small>
            <div className="portfolio__item-cta">
              {/* <a href="https://github.com/himani413/FashionGallery" target="_blank" rel='noreferrer' className='btn'>Github</a> */}
              <a href="https://nba-celtics.onrender.com" target="_blank" rel='noreferrer' className='btn btn-primary project'>Visit Website</a> 
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Musical Connections</h3>
            <small className='text-light description'>HTML | CSS | JS | React.js </small>
            <div className="portfolio__item-cta">
              {/* <a href="" target="_blank" rel='noreferrer' className='btn'>Github</a>   */}
              <a href="https://musical-connections.netlify.app" target="_blank" rel='noreferrer' className='btn btn-primary project'>Visit Website</a> 
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Portfolio</h3>
            <small className='text-light description'>HTML | CSS | JS | React.js </small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/roxyabedi/personal-portfolio" target="_blank" rel='noreferrer' className='btn btn-primary project'>GitHub</a> 
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Projects