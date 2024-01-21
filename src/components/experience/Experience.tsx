import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experienceFrontEnd: string[] = [
  "HTML",
  "CSS",
  "React",
  "TypeScript",
  "NextJs",
  "Tailwind",
  "MUI",
  "React Query",
  "React Hook Form",
  "Jest",
];

const experienceBackEnd: string[] = [
  "Java",
  "Java Spring",
  "PostgreSQL",
  "GraphQL",
  "Liquibase",
  "Express",
  "MongoDB",
  "Postman",
  "Docker",
];

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {experienceFrontEnd.map((e) => (
              <article key={e} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{e}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {experienceBackEnd.map((e) => (
              <article key={e} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{e}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
