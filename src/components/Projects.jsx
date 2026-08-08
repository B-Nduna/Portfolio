import React from 'react';

const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "Built using HTML, CSS, and JS.",
    link: "https://github.com/B-Nduna/Project1",
    image: "/project1-thumbnail.jpg" // Path relative to public folder
  },
  {
    id: 2,
    title: "Project Two",
    description: "E-commerce interface application.",
    link: "https://github.com/B-Nduna/Project2",
    image: "/project2-thumbnail.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}