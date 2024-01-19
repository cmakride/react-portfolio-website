import React from "react";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: "/cocktail_recipe_finder.png",
    title: "Designer Portfolio Responsive Website",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/cocktails-third-party-api",
    demo: "https://brunamakridesdesign.com/",
  },
  {
    id: 2,
    image: "/spaceInvaders.png",
    title: "Uses Third Party API To Search And View Cocktail Recipes",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/cocktails-third-party-api",
    demo: "https://cocktail-recipe-finder-search.netlify.app/",
  },
];
export default function Portfolio() {
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
}
