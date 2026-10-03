import Reveal from "./Reveal.jsx";
import { asset } from "../lib/env.js";

const RESUME_URL = "https://profile.indeed.com/p/bonganin-d187m2k";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <Reveal as="div" className="hero-kicker" dir="left">
        <span className="status-badge"><span className="status-dot" /> Open to frontend opportunities</span>
        <span className="hero-location">Mahikeng, South Africa · UTC+2</span>
      </Reveal>

      <div className="hero-grid">
        <Reveal as="div" className="hero-copy" dir="left">
          <p className="hero-eyebrow">Bongani Nduna · Frontend / React Developer</p>
          <h1>I build interfaces that feel <em>finished.</em></h1>
          <p className="hero-summary">
            React developer focused on responsive products, thoughtful interaction and clean frontend architecture — from polished business websites to app-like experiences.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">Selected work <span aria-hidden="true">↘</span></a>
            <a href="https://github.com/B-Nduna" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub <span aria-hidden="true">↗</span></a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-link">Résumé <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>

        <Reveal as="div" className="hero-portrait-wrap" dir="pop" delay={0.08}>
          <div className="hero-portrait">
            <img src={asset("img/profile.webp")} alt="Bongani Nduna" />
            <div className="portrait-caption">
              <span>Current focus</span>
              <strong>React · Product UI · Frontend systems</strong>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal as="div" className="hero-stack" delay={0.14}>
        <span>Toolkit</span>
        <ul>
          <li>React</li><li>JavaScript</li><li>Vite</li><li>HTML/CSS</li><li>Supabase</li><li>Git/GitHub</li><li>Figma</li>
        </ul>
      </Reveal>
    </header>
  );
}
