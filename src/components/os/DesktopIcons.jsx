const ICONS = [
  { id: "about", label: "About.me", icon: "\u{1F464}", hint: "Who I am" },
  { id: "work", label: "Projects", icon: "\u{1F4C1}", hint: "See my work" },
  { id: "blog", label: "Notes", icon: "\u{1F5D2}\uFE0F", hint: "Read my blog" },
  { id: "contact", label: "Mail", icon: "\u2709\uFE0F", hint: "Get in touch" },
];

export default function DesktopIcons({ onOpen, resumeUrl, hasOpenWindow }) {
  return (
    <div className="desktop-icons-wrap">
      <div className="desktop-icons">
        {ICONS.map((it) => (
          <button type="button" key={it.id} className="desktop-icon" onClick={() => onOpen(it.id)} title={it.hint}>
            <span className="desktop-icon-glyph">{it.icon}</span>
            <span className="desktop-icon-label">{it.label}</span>
          </button>
        ))}
        <a className="desktop-icon" href={resumeUrl} target="_blank" rel="noopener noreferrer" title="Open my resume">
          <span className="desktop-icon-glyph">{"\u{1F4C4}"}</span>
          <span className="desktop-icon-label">Resume.link</span>
        </a>
      </div>
      {!hasOpenWindow && (
        <p className="desktop-hint">&#8593; Click an icon, or a menu item above, to open it</p>
      )}
    </div>
  );
}
