import React from "react";
import "./portfolio.css";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  github?: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/ux-designer-portfolio.png",
    title: "Designer Portfolio Responsive Website",
    description: "Javascript | React | Tailwind",
    demo: "https://brunamakridesdesign.com/",
  },
  {
    id: 2,
    image: "/cocktail-recipe-finder.png",
    title: "Uses Third Party API To Search And View Cocktail Recipes",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/cocktails-third-party-api",
    demo: "https://cocktail-recipe-finder-search.netlify.app/",
  },
  {
    id: 3,
    image: "/space-invaders.png",
    title: "Uses Third Party API To Search And View Cocktail Recipes",
    description: "Javascript | React | Tailwind",
    github: "https://github.com/cmakride/space-invaders",
    demo: "https://space-invaders-cm.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {projects.map((project, idx) => (
          <article key={idx} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={project.image} alt="" />
            </div>
            <h3 className="">{project.title}</h3>
            <h5 className="">{project.description}</h5>
            <div className="portfolio_item-cta">
              {project?.github && (
                <a
                  href={project.github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              )}
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
