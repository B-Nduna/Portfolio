import { projects } from "../../../data/projects.js";
import { asset } from "../../../lib/env.js";

export default function WorkWindow() {
  return (
    <div className="os-content">
      <div className="os-work-grid">
        {projects.map((p) => (
          <a className="os-work-card" href={p.url} target="_blank" rel="noopener noreferrer" key={p.title}>
            <div className="os-work-media"><img src={asset(p.img)} alt={p.title} loading="lazy" /></div>
            <div className="os-work-body">
              <h4>{p.title}</h4>
              <p className="os-work-meta"><span>{p.category}</span><span className="dot">&middot;</span><span>{p.date}</span></p>
              {p.blurb && <p className="os-work-blurb">{p.blurb}</p>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
