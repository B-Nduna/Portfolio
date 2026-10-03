import { useEffect, useState } from "react";
import { HOME_BASE } from "../lib/env.js";

const LINKS = [
  { id: "bio", label: "About" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Writing" },
];

export default function Nav({ onHome = true }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (id) => onHome ? `#${id}` : `${HOME_BASE}/#${id}`;

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""} aria-label="Main navigation">
      <a href={`${HOME_BASE}/`} className="nav-brand" aria-label="Bongani Nduna home"><span>BN</span><strong>Bongani Nduna</strong></a>
      <ul className="nav-links">{LINKS.map((link) => <li key={link.id}><a href={href(link.id)}>{link.label}</a></li>)}</ul>
      <a href={href("contact")} className="nav-cta">Let’s talk <span>↗</span></a>
    </nav>
  );
}
