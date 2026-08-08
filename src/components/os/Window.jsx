import { useEffect, useRef, useState } from "react";

let dragSeq = 0;

export default function Window({ id, title, icon, zIndex, offset, onClose, onFocus, children }) {
  const winRef = useRef(null);
  const [pos, setPos] = useState(() => ({ x: 60 + offset * 26, y: 90 + offset * 22 }));
  const dragState = useRef(null);

  const canDrag =
    typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const startDrag = (e) => {
    if (!canDrag) return;
    onFocus(id);
    dragState.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y, id: ++dragSeq };
    window.addEventListener("pointermove", onDrag);
    window.addEventListener("pointerup", stopDrag, { once: true });
  };

  const onDrag = (e) => {
    const d = dragState.current;
    if (!d) return;
    setPos({
      x: Math.max(8, d.origX + (e.clientX - d.startX)),
      y: Math.max(8, d.origY + (e.clientY - d.startY)),
    });
  };

  const stopDrag = () => {
    dragState.current = null;
    window.removeEventListener("pointermove", onDrag);
  };

  useEffect(() => () => window.removeEventListener("pointermove", onDrag), []);

  return (
    <div
      ref={winRef}
      className="os-window"
      style={canDrag ? { left: pos.x, top: pos.y, zIndex } : { zIndex }}
      onPointerDown={() => onFocus(id)}
    >
      <div className="os-window-titlebar" onPointerDown={startDrag}>
        <div className="os-window-dots">
          <button type="button" className="os-dot os-dot-close" aria-label="Close" onClick={() => onClose(id)} />
          <span className="os-dot os-dot-min" />
          <span className="os-dot os-dot-max" />
        </div>
        <span className="os-window-title">{icon} {title}</span>
        <button type="button" className="os-window-x" aria-label="Close window" onClick={() => onClose(id)}>&times;</button>
      </div>
      <div className="os-window-body">{children}</div>
    </div>
  );
}
