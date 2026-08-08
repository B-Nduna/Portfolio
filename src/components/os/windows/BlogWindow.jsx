import { Link } from "react-router-dom";
import { posts } from "../../../data/posts.js";
import { asset } from "../../../lib/env.js";

export default function BlogWindow() {
  return (
    <div className="os-content">
      <div className="os-notes-list">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} className="os-note-row" key={post.slug}>
            <div className="os-note-thumb"><img src={asset(post.img)} alt={post.title} loading="lazy" /></div>
            <div>
              <span className="os-note-cat">{post.category}</span>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
