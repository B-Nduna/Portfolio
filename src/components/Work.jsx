import Reveal from "./Reveal.jsx";
import { projects } from "../data/projects.js";
import { asset } from "../lib/env.js";

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="div"><span className="section-eyebrow">Selected work / 03</span><h2 className="section-title">Built, not mocked up.</h2></Reveal>
          <Reveal as="p" className="section-sub" delay={0.08}>A few projects where I owned both implementation and the small product decisions that make the interface hold together.</Reveal>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <Reveal as="article" className="project-row" dir="up" delay={index * 0.06} key={project.title}>
              <a className="project-media" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                <img src={asset(project.img)} alt={`${project.title} project preview`} loading="lazy" />
                <span className="project-index">0{index + 1}</span>
              </a>
              <div className="project-info">
                <div className="project-topline"><span>{project.category}</span><span>{project.date}</span></div>
                <h3>{project.title}</h3>
                <p className="project-blurb">{project.blurb}</p>
                <p className="project-highlight"><span>Focus</span>{project.highlight}</p>
                <ul className="project-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">Live project ↗</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
