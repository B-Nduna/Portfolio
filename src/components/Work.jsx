import Reveal from "./Reveal.jsx";
import { projects } from "../data/projects.js";
import { asset } from "../lib/env.js";

const FEATURED = projects.slice(0, 4);

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="div">
            <span className="section-eyebrow">Selected Work</span>
            <h2 className="section-title">Projects</h2>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={0.1}>A handful of recent sites, live and in production.</Reveal>
        </div>
        <div className="work-grid">
          {FEATURED.map((p, i) => (
            <Reveal
              as="a"
              dir="up"
              delay={i * 0.08}
              className={`work-card ${i % 2 === 0 ? "work-card--big" : "work-card--small"}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              key={p.title}
            >
              <div className="work-media"><img src={asset(p.img)} alt={p.title} loading="lazy" /></div>
              <div className="work-body">
                <h3>{p.title}</h3>
                <div className="work-body-foot">
                  <p className="work-meta">{p.category} &middot; {p.date}</p>
                  <span className="work-arrow">&#8599;</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
