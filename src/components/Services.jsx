import Reveal from "./Reveal.jsx";

const SERVICES = [
  { num: "01", title: "React interfaces", text: "Component-led product UI with clear state, responsive behaviour and sensible architecture.", tags: ["React", "Vite", "JavaScript"] },
  { num: "02", title: "Frontend product builds", text: "From static concepts to working apps with authentication, databases and real user flows.", tags: ["Supabase", "REST", "Auth"] },
  { num: "03", title: "UI engineering", text: "Design translated into precise, accessible interfaces without losing the intent in implementation.", tags: ["CSS", "Accessibility", "Motion"] },
  { num: "04", title: "Web delivery", text: "Performance, technical SEO, deployment, analytics and the last 10% needed to ship confidently.", tags: ["GitHub Pages", "SEO", "QA"] },
];

export default function Services() {
  return (
    <section id="services" className="section section-dark">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="div"><span className="section-eyebrow">Capabilities / 02</span><h2 className="section-title">What I ship</h2></Reveal>
          <Reveal as="p" className="section-sub" delay={0.08}>Useful frontend work, with enough design sense to make it look deliberate and enough engineering discipline to keep it maintainable.</Reveal>
        </div>
        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <Reveal as="article" className="service-card" dir="up" delay={index * 0.06} key={service.num}>
              <span className="service-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
