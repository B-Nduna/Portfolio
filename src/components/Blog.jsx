import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { posts } from "../data/posts.js";

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="div">
            <span className="section-eyebrow">Writing</span>
            <h2 className="section-title">Thoughts</h2>
          </Reveal>
          <Reveal as="p" className="section-sub" delay={0.1}>Notes on building, shipping, and the odd detour into sim racing.</Reveal>
        </div>
        <div className="thoughts-list">
          {posts.map((post, i) => (
            <Reveal as={Link} dir="left" delay={i * 0.08} className="thought-row" to={`/blog/${post.slug}`} key={post.slug}>
              <div className="thought-left">
                <span className="thought-date">{post.date}</span>
                <div>
                  <h3 className="thought-title">{post.title}</h3>
                  <span className="thought-excerpt">{post.excerpt}</span>
                </div>
              </div>
              <span className="thought-arrow">&#8599;</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
