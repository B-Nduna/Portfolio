import { useEffect, useRef } from "react";
import { skills } from "../../../data/projects.js";

function SkillBar({ name, pct }) {
  const fillRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => {
      if (fillRef.current) fillRef.current.style.width = pct + "%";
    }, 120);
    return () => clearTimeout(t);
  }, [pct]);

  return (
    <div className="skill-bar">
      <div className="skill-bar-head"><span>{name}</span><span className="skill-pct">{pct}%</span></div>
      <div className="skill-track"><div className="skill-fill" ref={fillRef} /></div>
    </div>
  );
}

export default function AboutWindow() {
  return (
    <div className="os-content">
      <p className="lead">Hi there! I&rsquo;m a front-end web developer passionate about creating seamless digital experiences.</p>
      <p className="lead">Off-screen, I dive into the world of sim racing, where precision fuels my creativity and adaptability.</p>
      <p className="lead">Whether it&rsquo;s crafting clean code or nailing the perfect lap, I&rsquo;m all about delivering flow and functionality.</p>
      <div className="skill-bars os-skill-bars">
        {skills.map((s) => <SkillBar key={s.name} {...s} />)}
      </div>
    </div>
  );
}
