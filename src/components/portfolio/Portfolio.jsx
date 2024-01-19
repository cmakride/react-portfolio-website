import React from "react";
import "./portfolio.css";
import IMG3 from "../../assets/portfolio/cocktail_recipe_finder.png";
import IMG4 from "../../assets/portfolio/spaceInvaders.png";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Uses Third Party API To Search And View Cocktail Recipes",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/cocktails-third-party-api",
    demo: "https://cocktail-recipe-finder-search.netlify.app/",
  },
  {
    id: 2,
    image: IMG3,
    title: "Uses Third Party API To Search And View Cocktail Recipes",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/cocktails-third-party-api",
    demo: "https://cocktail-recipe-finder-search.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Uses Third Party API To Search And View Cocktail Recipes",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/cocktails-third-party-api",
    demo: "https://cocktail-recipe-finder-search.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "2D geometric shooter",
    description: "Javascript | HTML",
    github: "https://github.com/cmakride/space-invaders",
    demo: "https://space-invaders-cm.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map((project, idx) => (
          <article key={idx} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <h5>{project.description}</h5>
            <div className="portfolio_item-cta">
              <a
                href={project.github}
                className="btn"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
