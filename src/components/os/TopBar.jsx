import { useEffect, useState } from "react";

const MENU = [
  { id: "about", label: "About" },
  { id: "work", label: "Projects" },
  { id: "blog", label: "Notes" },
  { id: "contact", label: "Mail" },
];

function useClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function TopBar({ onOpen }) {
  const time = useClock();

  return (
    <div className="os-topbar">
      <span className="os-topbar-brand">BonganiOS</span>
      <div className="os-topbar-menu">
        {MENU.map((m) => (
          <button type="button" key={m.id} className="os-topbar-item" onClick={() => onOpen(m.id)}>
            {m.label}
          </button>
        ))}
      </div>
      <span className="os-topbar-clock">{time}</span>
    </div>
  );
}
