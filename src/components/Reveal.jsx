import { useEffect, useRef, useState } from "react";

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, dir = "up", ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = ["reveal", `reveal-${dir}`, visible ? "reveal-in" : "", className].filter(Boolean).join(" ");
  const style = visible ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  );
}
