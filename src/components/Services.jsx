import Reveal from "./Reveal.jsx";

const SERVICES = [
  { num: "01", title: "Web Design", tags: ["Brand-led layouts", "Responsive UI", "Design systems"] },
  { num: "02", title: "Frontend Development", tags: ["React / Vite", "Performance", "Accessibility"] },
  { num: "03", title: "E-Commerce & Booking", tags: ["Cart flows", "Payments", "Scheduling"] },
  { num: "04", title: "Consulting", tags: ["Digital strategy", "SEO basics", "Ongoing support"] },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="div">
            <span className="section-eyebrow">What I Do</span>
            <h2 className="section-title">Services</h2>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={0.1}>From first sketch to a live site your customers actually use.</Reveal>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal as="div" className="service-card" dir="up" delay={i * 0.08} key={s.num}>
              <span className="service-num">{s.num}</span>
              <h3 className="service-title">{s.title}</h3>
              <div className="service-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
