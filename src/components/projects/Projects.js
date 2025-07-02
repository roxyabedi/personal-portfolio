import React from 'react'
import './projects.css'
import IMG1 from '../../assets/celtics.png'
import IMG2 from '../../assets/connections.png'
import IMG3 from '../../assets/portfolio.png'
import IMG4 from '../../assets/honey_butter.png'
import IMG5 from '../../assets/quiz_home.png'
import IMG6 from '../../assets/transactions.png'

const Projects = () => {
  return (
    <section id='myprojects'>

      <h2>Projects</h2>

      <div className="container portfolio__container">
         <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Honey Butter</h3>
            <small className='text-light description'>Java | TypeScript | MySQL | React.js | Spring | Bootstrap</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/roxyabedi/recipe-book-capstone-honey-butter" target="_blank" rel='noreferrer' className='btn btn-primary project'>GitHub</a> 
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Trivio</h3>
            <small className='text-light description'>Java | TypeScript | MySQL | React.js | Spring | HTML | CSS | Bootstrap</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/roxyabedi/trivio-quiz-application" target="_blank" rel='noreferrer' className='btn btn-primary project'>GitHub</a> 
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>Budget Tracker</h3>
            <small className='text-light description'>Java | TypeScript | MySQL | React.js | Spring | Thymeleaf | HTML | CSS</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/roxyabedi/budget-tracker" target="_blank" rel='noreferrer' className='btn btn-primary project'>GitHub</a> 
            </div>
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Boston Celtics Stats</h3>
            <small className='text-light description'>HTML | CSS | JS | Express/Node.js | EJS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/roxyabedi/nba" target="_blank" rel='noreferrer' className='btn btn-primary project'>GitHub</a> 
            </div>  
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Musical Connections</h3>
            <small className='text-light description'>HTML | CSS | JS | React.js </small>
            <div className="portfolio__item-cta">
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