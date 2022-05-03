import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port_shakn.png'
import IMG2 from '../../assets/port_classics.png'
import IMG3 from '../../assets/port_cofoundations.png'
import IMG4 from '../../assets/port_dominoes.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Social App To Upload/Review Cocktails',
    description: 'React | Express | MongoDB',
    github: "https://github.com/cmakride/shakn",
    demo: "https://shakn-a.netlify.app/"
  },

  {
    id: 2,
    image: IMG2,
    title: 'App To Create,View Classics',
    description: 'React | Flask | PostgreSQL',
    github: "https://github.com/cmakride/classics-react-app",
    demo: "https://theclassics.netlify.app/classics"
  },

  {
    id: 3,
    image: IMG3,
    title: 'App To Search and View Cocktail Recipes',
    description: 'Javascript | MongoDB',
    github: "https://github.com/cmakride/cocktail_foundations",
    demo: "https://cocktail-foundations.herokuapp.com/cocktails"
  },

  {
    id: 4,
    image: IMG4,
    title: '4 Player Dominoes Web App',
    description: 'Javascript | CSS',
    github: "https://github.com/cmakride/Dominoes-Game",
    demo: "https://cmakride.github.io/Dominoes-Game/"
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map((project,idx) => (
          <article key={idx} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <h5>{project.description}</h5>
            <div className="portfolio_item-cta">
              <a href={project.github} className='btn' rel='noreferrer' target='_blank'>Github</a>
              <a href={project.demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live Demo</a>
            </div>
          </article>
        ))}


      </div>

    </section>
  )
}

export default Portfolio
