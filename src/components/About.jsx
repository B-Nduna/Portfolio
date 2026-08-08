import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal.jsx";
import { skills } from "../data/projects.js";

gsap.registerPlugin(ScrollTrigger);

function SkillBar({ name, pct }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const el = fillRef.current;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => { el.style.width = pct + "%"; },
    });
    return () => st.kill();
  }, [pct]);

  return (
    <div className="skill-bar">
      <div className="skill-bar-head"><span>{name}</span><span className="skill-pct">{pct}%</span></div>
      <div className="skill-track"><div className="skill-fill" ref={fillRef} /></div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner about-grid">
        <Reveal dir="left" className="glass-panel">
          <span className="panel-tag">01 &mdash; Stack</span>
          <h3 className="panel-heading">Tech Stack</h3>
          <div className="skill-bars">
            {skills.map((s) => <SkillBar key={s.name} {...s} />)}
          </div>
        </Reveal>

        <Reveal dir="right" className="glass-panel">
          <span className="panel-tag">02 &mdash; Profile</span>
          <h3 className="panel-heading">About Me</h3>
          <p className="lead">Hi there! I&rsquo;m a front-end web developer passionate about creating seamless digital experiences.</p>
          <p className="lead">Off-screen, I dive into the world of sim racing, where precision fuels my creativity and adaptability.</p>
          <p className="lead">Whether it&rsquo;s crafting clean code or nailing the perfect lap, I&rsquo;m all about delivering flow and functionality. Let&rsquo;s build something extraordinary together.</p>
        </Reveal>
      </div>
    </section>
  );
}
