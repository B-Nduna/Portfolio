import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { posts } from "../data/posts.js";

export default function Blog() {
  return (
    <section id="blog" className="section section-rule">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="div"><span className="section-eyebrow">Notes / 04</span><h2 className="section-title">How I think while building.</h2></Reveal>
          <Reveal as="p" className="section-sub" delay={0.08}>Short notes on frontend craft, learning in public and the habits behind the work.</Reveal>
        </div>
        <div className="thoughts-list">
          {posts.map((post, index) => (
            <Reveal as={Link} className="thought-row" to={`/blog/${post.slug}`} dir="left" delay={index * 0.05} key={post.slug}>
              <span className="thought-index">0{index + 1}</span>
              <div className="thought-main"><span className="thought-date">{post.date} · {post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p></div>
              <span className="thought-arrow">↗</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
