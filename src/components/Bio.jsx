import Reveal from "./Reveal.jsx";
import { skills } from "../data/projects.js";

export default function Bio() {
  return (
    <section id="bio" className="section">
      <div className="section-inner bio-grid">
        <Reveal as="p" className="bio-lead" dir="left">
          I build clean, fast, thoughtfully-detailed web experiences for real businesses.
        </Reveal>
        <Reveal as="div" className="bio-text" dir="right" delay={0.1}>
          <p>Hi there! I&rsquo;m a front-end web developer passionate about creating seamless digital experiences &mdash; the kind that feel obvious in hindsight but take real care to get right.</p>
          <p>Off-screen, I dive into the world of sim racing, where precision fuels my creativity and adaptability. Both taught me the same lesson: slow down at the exact moment you want to rush.</p>
          <p>Whether it&rsquo;s crafting clean code or nailing the perfect lap, I&rsquo;m all about delivering flow and functionality. Let&rsquo;s build something extraordinary together.</p>
          <div className="bio-skills">
            {skills.map((s) => <span className="bio-skill" key={s.name}>{s.name} &middot; {s.pct}%</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
