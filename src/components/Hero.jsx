import { useEffect, useState } from "react";
import Reveal from "./Reveal.jsx";
import { asset } from "../lib/env.js";

const RESUME_URL = "https://profile.indeed.com/p/bonganin-d187m2k";
const ROLES = ["Frontend Developer", "React Developer", "UI/UX Designer"];

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useTypedRole() {
  const [text, setText] = useState(prefersReduced ? ROLES[0] : "");

  useEffect(() => {
    if (prefersReduced) return;
    let ri = 0, ci = 0, deleting = false, timer;

    const tick = () => {
      const word = ROLES[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) { deleting = true; timer = setTimeout(tick, 1500); return; }
        timer = setTimeout(tick, 75);
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) { deleting = false; ri = (ri + 1) % ROLES.length; timer = setTimeout(tick, 300); return; }
        timer = setTimeout(tick, 30);
      }
    };
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

export default function Hero() {
  const typed = useTypedRole();

  return (
    <header id="top" className="hero">
      <Reveal as="div" className="hero-meta-row" dir="left">
        <p className="hero-eyebrow">Front-End Developer &mdash; South Africa</p>
        <span className="status-badge"><span className="status-dot" />Available for work</span>
      </Reveal>

      <Reveal as="div" className="hero-panel" dir="pop" delay={0.08}>
        <div className="hero-panel-photo">
          <img src={asset("img/profile.webp")} alt="Portrait" />
        </div>
        <p className="hero-typed">
          <span>{typed}</span><span className="typed-cursor">|</span>
        </p>
      </Reveal>

      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              Front-End Developer <span className="accent">&mdash;</span> React <span className="accent">&mdash;</span> UI/UX <span className="accent">&mdash;</span> Web Design <span className="accent">&mdash;</span> Available For Work <span className="accent">&mdash;</span>
            </span>
          ))}
        </div>
      </div>

      <Reveal as="div" className="hero-actions" delay={0.15}>
        <a href="#work" className="btn btn-primary"><span>View Work</span></a>
        <a href="#contact" className="btn btn-ghost"><span>Get In Touch</span></a>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><span>Resume</span></a>
      </Reveal>
    </header>
  );
}
