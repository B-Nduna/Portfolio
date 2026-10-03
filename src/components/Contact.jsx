import Reveal from "./Reveal.jsx";

const links = [
  ["GitHub", "https://github.com/B-Nduna"],
  ["LinkedIn", "https://www.linkedin.com/in/bongani-nduna-8196202b6/"],
  ["Email", "mailto:nduna700@gmail.com"],
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <Reveal as="div" className="contact-top" dir="up">
          <span className="section-eyebrow">Contact / 05</span>
          <p className="contact-kicker">Need a frontend developer?</p>
          <h2>Let’s build something<br /><em>worth using.</em></h2>
          <div className="contact-actions">
            <a className="btn contact-primary" href="mailto:nduna700@gmail.com">Start a conversation ↗</a>
            <a className="btn contact-secondary" href="https://wa.me/27603168301" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          </div>
        </Reveal>

        <div className="contact-bottom">
          <p>Based in South Africa · Available for remote work and selected freelance projects.</p>
          <div className="contact-links">{links.map(([label, href]) => <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" key={label}>{label} ↗</a>)}</div>
        </div>
      </div>
    </section>
  );
}
