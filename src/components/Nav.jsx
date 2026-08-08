import { useEffect, useState } from "react";
import { HOME_BASE } from "../lib/env.js";

const LINKS = [
  { id: "top", label: "Home", param: null },
  { id: "about", label: "About", param: "about" },
  { id: "work", label: "Work", param: "work" },
  { id: "blog", label: "Blog", param: "blog" },
  { id: "contact", label: "Contact", param: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href={`${HOME_BASE}/`} className="nav-brand">B&middot;N</a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a href={l.param ? `${HOME_BASE}/?open=${l.param}` : `${HOME_BASE}/`} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
