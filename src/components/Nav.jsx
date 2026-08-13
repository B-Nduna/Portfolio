import { useEffect, useState } from "react";
import { HOME_BASE } from "../lib/env.js";

const LINKS = [
  { id: "bio", label: "About" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Thoughts" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ onHome = true }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
      <a href={`${HOME_BASE}/`} className="nav-brand">B-Nduna</a>
      <ul className="nav-links">
        {LINKS.map((l) => (
          <li key={l.id}>
            <a href={onHome ? `#${l.id}` : `${HOME_BASE}/#${l.id}`} className="nav-link">{l.label}</a>
          </li>
        ))}
      </ul>
      <a href={onHome ? "#contact" : `${HOME_BASE}/#contact`} className="nav-cta">Let&rsquo;s Talk</a>
    </nav>
  );
}
