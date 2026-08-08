import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Reveal({ children, dir = "up", delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, z: 0, rotateX: 0 });
      return;
    }

    const fromVars = { opacity: 0, rotateX: -8 };
    if (dir === "left") Object.assign(fromVars, { x: -70, z: -120 });
    else if (dir === "right") Object.assign(fromVars, { x: 70, z: -120 });
    else Object.assign(fromVars, { y: 70, z: -120 });

    const tween = gsap.fromTo(
      el,
      fromVars,
      {
        opacity: 1, x: 0, y: 0, z: 0, rotateX: 0, duration: 1, ease: "power3.out", delay,
        scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
      }
    );

    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [dir, delay]);

  return (
    <Tag ref={ref} className={className} style={{ opacity: 0 }} {...rest}>
      {children}
    </Tag>
  );
}
