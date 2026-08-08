import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { posts } from "../data/posts.js";
import { asset } from "../lib/env.js";

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="section-inner">
        <div className="section-head">
          <Reveal as="span" className="section-eyebrow">Writing</Reveal>
          <Reveal as="h2" className="section-title">Blog</Reveal>
          <Reveal as="p" className="section-sub">My journey into software development.</Reveal>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <Reveal
              as={Link}
              dir="up"
              delay={(i % 3) * 0.08}
              className="blog-card"
              to={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="blog-media"><img src={asset(post.img)} alt={post.title} loading="lazy" /></div>
              <span className="blog-cat">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
