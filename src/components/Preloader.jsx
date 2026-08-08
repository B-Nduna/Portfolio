import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t2 = setTimeout(() => setRemoved(true), 700);
    return () => clearTimeout(t2);
  }, [hidden]);

  if (removed) return null;

  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="preloader-crystal" />
    </div>
  );
}
