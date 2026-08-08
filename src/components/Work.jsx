import { useRef } from "react";
import { gsap } from "gsap";
import Reveal from "./Reveal.jsx";
import { projects } from "../data/projects.js";
import { asset } from "../lib/env.js";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover =
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

function TiltCard({ project, index }) {
  const cardRef = useRef(null);
  const bounds = useRef(null);

  const onEnter = () => { bounds.current = cardRef.current.getBoundingClientRect(); };
  const onMove = (e) => {
    if (!canHover || prefersReduced) return;
    if (!bounds.current) bounds.current = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - bounds.current.left) / bounds.current.width - 0.5;
    const py = (e.clientY - bounds.current.top) / bounds.current.height - 0.5;
    gsap.to(cardRef.current, { rotateY: px * 14, rotateX: -py * 14, duration: 0.4, ease: "power2.out", overwrite: true });
  };
  const onLeave = () => {
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
  };

  return (
    <Reveal
      as="a"
      dir="up"
      delay={(index % 3) * 0.08}
      className="work-card tilt"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div ref={cardRef} onMouseEnter={onEnter} onMouseMove={onMove} onMouseLeave={onLeave} style={{ transformStyle: "preserve-3d" }}>
        <div className="work-media"><img src={asset(project.img)} alt={project.title} loading="lazy" /></div>
        <div className="work-body">
          <h3>{project.title}</h3>
          <p><span>{project.category}</span><span className="dot">&middot;</span><span>{project.date}</span></p>
          {project.blurb && <p className="work-blurb">{project.blurb}</p>}
        </div>
        <div className="work-arrow">&#8599;</div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="span" className="section-eyebrow">Selected Work</Reveal>
          <Reveal as="h2" className="section-title">Portfolio</Reveal>
          <Reveal as="p" className="section-sub">Explore some of my recent projects.</Reveal>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => <TiltCard project={p} index={i} key={p.title} />)}
        </div>
      </div>
    </section>
  );
}
