import { useEffect, useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { marked } from "marked";
import { getPostBySlug, posts } from "../data/posts.js";
import { HOME_BASE, asset } from "../lib/env.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    if (post) document.title = `${post.title} | B-Nduna`;
    return () => { document.title = "B-Nduna | Front-End Developer & Designer"; };
  }, [post]);

  const html = useMemo(() => (post ? marked.parse(post.content) : ""), [post]);

  if (!post) return <Navigate to="/" replace />;

  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="post-page">
      <div className="section-inner post-inner">
        <a href={`${HOME_BASE}/#blog`} className="post-back">&larr; Back to Portfolio</a>

        <div className="post-panel">
          <span className="section-eyebrow">{post.category}</span>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-byline">By B-Nduna &middot; {post.date}</p>
          <div className="post-media"><img src={asset(post.img)} alt={post.title} /></div>
          <article className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="post-cta">
          <h3>Like what you see?</h3>
          <p>I build sites like this one for real businesses. Let&rsquo;s talk about yours.</p>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <a href={`${HOME_BASE}/#contact`} className="btn btn-primary"><span>Get In Touch</span></a>
            <a href={`${HOME_BASE}/#work`} className="btn btn-ghost"><span>See My Work</span></a>
          </div>
        </div>

        {more.length > 0 && (
          <div className="post-more">
            <span className="section-eyebrow">Keep Reading</span>
            <div className="thoughts-list">
              {more.map((p) => (
                <Link to={`/blog/${p.slug}`} className="thought-row" key={p.slug}>
                  <div className="thought-left">
                    <span className="thought-date">{p.date}</span>
                    <div>
                      <h3 className="thought-title">{p.title}</h3>
                      <span className="thought-excerpt">{p.excerpt}</span>
                    </div>
                  </div>
                  <span className="thought-arrow">&#8599;</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
