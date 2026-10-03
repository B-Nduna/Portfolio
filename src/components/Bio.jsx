import Reveal from "./Reveal.jsx";

const CAPABILITIES = [
  ["01", "Frontend systems", "Reusable React components, stateful flows, responsive layouts and maintainable UI architecture."],
  ["02", "Product polish", "Micro-interactions, loading states, edge cases and the details that make an interface feel intentional."],
  ["03", "Production thinking", "Accessibility, performance, SEO, deployment and resilient behaviour across real devices."],
];

export default function Bio() {
  return (
    <section id="bio" className="section section-rule">
      <div className="section-inner">
        <div className="about-grid">
          <Reveal as="div" dir="left">
            <span className="section-eyebrow">About / 01</span>
            <h2 className="about-title">I care about the gap between “it works” and “this feels right”.</h2>
          </Reveal>
          <Reveal as="div" className="about-copy" dir="right" delay={0.08}>
            <p>I’m Bongani, a frontend developer who enjoys turning rough ideas into sharp, usable interfaces. My strongest work sits where code, product thinking and visual detail overlap.</p>
            <p>I work mostly in JavaScript and React, and I’m comfortable taking a project from component architecture and data flows through responsive QA and deployment.</p>
            <p>Outside the browser, sim racing keeps me obsessed with feedback, precision and shaving away unnecessary friction. That same mindset shows up in how I build.</p>
          </Reveal>
        </div>

        <div className="capability-list">
          {CAPABILITIES.map(([num, title, copy], index) => (
            <Reveal as="article" className="capability-row" dir="up" delay={index * 0.06} key={num}>
              <span className="capability-num">{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
