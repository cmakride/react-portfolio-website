import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port_shakn.png'
import IMG2 from '../../assets/port_classics.png'
import IMG3 from '../../assets/port_cofoundations.png'
import IMG4 from '../../assets/port_dominoes.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">

          </div>
          <h3>Shakn</h3>
          <a href="https://github.com/cmakride/shakn_app_front_end" className='btn' rel='noreferrer' target='_blank'>Github</a>
          <a href="https://shakn.netlify.app/" className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">

          </div>
          <h3>Classics</h3>
          <a href="https://github.com/cmakride/classics-react-app" className='btn' rel='noreferrer' target='_blank'>Github</a>
          <a href="https://theclassics.netlify.app/classics" className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">

          </div>
          <h3>Cocktail Foundations</h3>
          <a href="https://github.com/cmakride/cocktail_foundations" className='btn' rel='noreferrer' target='_blank'>Github</a>
          <a href="https://cocktail-foundations.herokuapp.com/cocktails" className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">

          </div>
          <h3>Dominoes</h3>
          <a href="https://github.com/cmakride/Dominoes-Game" className='btn' rel='noreferrer' target='_blank'>Github</a>
          <a href="https://cmakride.github.io/Dominoes-Game/" className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio
