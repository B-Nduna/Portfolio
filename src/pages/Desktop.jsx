import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Boot from "../components/os/Boot.jsx";
import TopBar from "../components/os/TopBar.jsx";
import DesktopIcons from "../components/os/DesktopIcons.jsx";
import Window from "../components/os/Window.jsx";
import AboutWindow from "../components/os/windows/AboutWindow.jsx";
import WorkWindow from "../components/os/windows/WorkWindow.jsx";
import BlogWindow from "../components/os/windows/BlogWindow.jsx";
import ContactWindow from "../components/os/windows/ContactWindow.jsx";

const REGISTRY = {
  about: { title: "about.me", icon: "\u{1F464}", Comp: AboutWindow },
  work: { title: "Projects", icon: "\u{1F4C1}", Comp: WorkWindow },
  blog: { title: "Notes", icon: "\u{1F5D2}\uFE0F", Comp: BlogWindow },
  contact: { title: "Mail", icon: "\u2709\uFE0F", Comp: ContactWindow },
};

const RESUME_URL = "https://profile.indeed.com/p/bonganin-d187m2k";

export default function Desktop() {
  const [booted, setBooted] = useState(false);
  const [windows, setWindows] = useState({}); // { id: { z, order } }
  const zCounter = useRef(10);
  const [searchParams, setSearchParams] = useSearchParams();

  const openWindow = (id) => {
    setWindows((w) => ({
      ...w,
      [id]: { z: ++zCounter.current, order: w[id] ? w[id].order : Object.keys(w).length },
    }));
  };
  const closeWindow = (id) => {
    setWindows((w) => {
      const next = { ...w };
      delete next[id];
      return next;
    });
  };
  const focusWindow = (id) => {
    setWindows((w) => (w[id] ? { ...w, [id]: { ...w[id], z: ++zCounter.current } } : w));
  };

  // Deep-link support: /?open=contact etc. (used from blog post pages)
  useEffect(() => {
    if (!booted) return;
    const open = searchParams.get("open");
    if (open && REGISTRY[open]) {
      openWindow(open);
      const next = new URLSearchParams(searchParams);
      next.delete("open");
      setSearchParams(next, { replace: true });
      return;
    }
    // No deep link: open with About already visible so visitors land on
    // real content instead of an empty desktop they have to decode first.
    openWindow("about");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booted]);

  if (!booted) return <Boot onDone={() => setBooted(true)} />;

  const entries = Object.entries(windows);
  const contactOpen = Boolean(windows.contact);

  return (
    <div className="os-desktop">
      <TopBar onOpen={openWindow} />
      <DesktopIcons onOpen={openWindow} resumeUrl={RESUME_URL} hasOpenWindow={entries.length > 0} />

      {entries.map(([id, w]) => {
        const def = REGISTRY[id];
        if (!def) return null;
        const Comp = def.Comp;
        return (
          <Window
            key={id}
            id={id}
            title={def.title}
            icon={def.icon}
            zIndex={w.z}
            offset={w.order}
            onClose={closeWindow}
            onFocus={focusWindow}
          >
            <Comp />
          </Window>
        );
      })}

      {!contactOpen && (
        <button type="button" className="os-fab" onClick={() => openWindow("contact")}>
          <span className="os-fab-dot" />
          Hire Me
        </button>
      )}
    </div>
  );
}
