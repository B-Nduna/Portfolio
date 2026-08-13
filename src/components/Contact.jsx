import { useState } from "react";
import Reveal from "./Reveal.jsx";

const SOCIALS = [
  {
    label: "Email", href: "mailto:nduna700@gmail.com",
    path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.8 2 6.9 5.6a.5.5 0 0 0 .6 0L19.2 7H4.8Z",
  },
  {
    label: "Instagram", href: "https://www.instagram.com/bnduna_75/",
    path: "M12 2c2.7 0 3.06.01 4.12.06 1.05.05 1.77.22 2.4.46.65.25 1.2.6 1.75 1.15.5.5.9 1.1 1.15 1.75.24.63.41 1.35.46 2.4C21.99 8.94 22 9.3 22 12s-.01 3.06-.06 4.12c-.05 1.05-.22 1.77-.46 2.4a4.9 4.9 0 0 1-1.15 1.75c-.5.5-1.1.9-1.75 1.15-.63.24-1.35.41-2.4.46C15.06 21.99 14.7 22 12 22s-3.06-.01-4.12-.06c-1.05-.05-1.77-.22-2.4-.46a4.9 4.9 0 0 1-1.75-1.15 4.9 4.9 0 0 1-1.15-1.75c-.24-.63-.41-1.35-.46-2.4C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.05.22-1.77.46-2.4.25-.65.6-1.2 1.15-1.75A4.9 4.9 0 0 1 5.42 2.58c.63-.24 1.35-.41 2.4-.46C8.94 2.01 9.3 2 12 2Zm0 3.6a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 10.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.65-10.85a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
  {
    label: "GitHub", href: "https://github.com/B-Nduna",
    path: "M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/bongani-nduna-8196202b6/",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.97 1.83-2 3.77-2 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.8h-4V9Z",
  },
];

const FIELDS = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "subject", label: "Subject", type: "text" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+27603168301";
    const whatsappMessage =
      `Hello!%0A%0AMy Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-grid">
        <Reveal as="div" dir="left">
          <span className="section-eyebrow">Let&rsquo;s Talk</span>
          <h2 className="contact-title">Have a project<br />in mind?</h2>
          <p className="contact-sub">Fill out the form, reach out directly, or send a message and I&rsquo;ll reply on WhatsApp.</p>
          <div className="contact-cta">
            <a href="mailto:nduna700@gmail.com" className="btn btn-primary"><span>Email Me</span></a>
            <a href="https://wa.me/+27603168301" target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><span>WhatsApp Me</span></a>
          </div>
          <div className="contact-socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={s.label} className="social-orb">
                <svg viewBox="0 0 24 24"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" dir="right" delay={0.1} className="contact-form" onSubmit={onSubmit}>
          {FIELDS.map((f) => (
            <div className="field" key={f.id}>
              <input type={f.type} name={f.id} id={f.id} placeholder=" " required value={form[f.id]} onChange={onChange} />
              <label htmlFor={f.id}>{f.label}</label>
            </div>
          ))}
          <div className="field">
            <textarea name="message" id="message" rows={4} placeholder=" " required value={form.message} onChange={onChange} />
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="btn btn-primary btn-block"><span>Send via WhatsApp</span></button>
        </Reveal>
      </div>
    </section>
  );
}
