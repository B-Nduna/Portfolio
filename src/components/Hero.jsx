import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";

const HeroCrystal = lazy(() => import("./HeroCrystal.jsx"));

const NAME = "Bongani Nduna";
const ROLES = ["Web Designer", "UI/UX Designer", "Frontend Developer"];

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useTypedRole() {
  const [text, setText] = useState(prefersReduced ? ROLES[0] : "");

  useEffect(() => {
    if (prefersReduced) return;
    let ri = 0, ci = 0, deleting = false, timer;

    const tick = () => {
      const word = ROLES[ri];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 70);
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % ROLES.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

export default function Hero() {
  const typed = useTypedRole();
  const titleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const roleRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current.querySelectorAll(".char");
    if (prefersReduced) {
      gsap.set([eyebrowRef.current, chars, roleRef.current, actionsRef.current], { opacity: 1, y: 0, rotateX: 0 });
      return;
    }
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(eyebrowRef.current, { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .fromTo(chars, { opacity: 0, y: 60, rotateX: -90, transformOrigin: "50% 100%" }, { opacity: 1, y: 0, rotateX: 0, stagger: 0.035, duration: 0.9, ease: "back.out(1.6)" }, "-=.4")
      .fromTo(roleRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, "-=.5")
      .fromTo(actionsRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, "-=.4");

    // Without this, React StrictMode's dev-only double-invoke of effects
    // creates a second overlapping timeline on the same elements, which
    // snaps opacity back to 0 mid-animation (looks like the hero content
    // "disappearing" right after it appears).
    return () => tl.kill();
  }, []);

  return (
    <header id="top" className="hero">
      <div className="hero-vignette" />
      <div className="hero-grid">
        <div className="hero-visual">
          <Suspense fallback={<div className="hero-visual-fallback" />}>
            <HeroCrystal />
          </Suspense>
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow" ref={eyebrowRef}>Front-End Developer &mdash; South Africa</p>
          <h1 className="hero-title" ref={titleRef} aria-label={NAME}>
            {NAME.split("").map((ch, i) => (
              <span className="char" key={i}>{ch === " " ? "\u00A0" : ch}</span>
            ))}
          </h1>
          <p className="hero-role" ref={roleRef}>
            <span>{typed}</span><span className="typed-cursor">|</span>
          </p>
          <div className="hero-actions" ref={actionsRef}>
            <a href="#work" className="btn btn-primary"><span>View Work</span></a>
            <a href="#contact" className="btn btn-ghost"><span>Get In Touch</span></a>
            <a href="https://profile.indeed.com/p/bonganin-d187m2k" className="btn btn-ghost" target="_blank" rel="noopener noreferrer"><span>View Resume</span></a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <span className="scroll-cue-line" />
        <span className="scroll-cue-text">Scroll</span>
      </a>
    </header>
  );
}
