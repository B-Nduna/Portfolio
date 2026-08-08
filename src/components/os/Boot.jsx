import { useEffect, useRef, useState, lazy, Suspense } from "react";

const HeroCrystal = lazy(() => import("../HeroCrystal.jsx"));

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const LINES = [
  "BonganiOS v1.0",
  "Initializing holographic render engine...",
  "Mounting /projects /notes /contact...",
  "Authenticating guest session...",
  "Welcome.",
];

export default function Boot({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setClosing(true);
    setTimeout(onDone, prefersReduced ? 0 : 420);
  };

  useEffect(() => {
    if (prefersReduced) {
      finish();
      return;
    }

    const timers = LINES.map((_, i) =>
      setTimeout(() => setLineIndex(i + 1), 260 + i * 420)
    );
    const finalTimer = setTimeout(finish, 260 + LINES.length * 420 + 700);

    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`boot-screen${closing ? " boot-closing" : ""}`}>
      <Suspense fallback={null}>
        <HeroCrystal />
      </Suspense>
      <div className="boot-vignette" />

      <button
        type="button"
        className="boot-skip"
        onClick={(e) => { e.stopPropagation(); finish(); }}
      >
        Skip &#9193;
      </button>

      <div className="boot-terminal">
        {LINES.slice(0, lineIndex).map((line, i) => (
          <p key={i} className={i === LINES.length - 1 ? "boot-line boot-line-final" : "boot-line"}>
            <span className="boot-caret">&gt;</span> {line}
          </p>
        ))}
        {lineIndex < LINES.length && lineIndex > 0 && <span className="boot-blink" />}
      </div>

      <p className="boot-hint">click / tap / press any key to skip</p>
    </div>
  );
}
