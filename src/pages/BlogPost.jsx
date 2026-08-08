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
    if (post) document.title = `${post.title} | Bongani Nduna`;
    return () => { document.title = "Bongani Nduna | Front-End Developer & Designer"; };
  }, [post]);

  const html = useMemo(() => (post ? marked.parse(post.content) : ""), [post]);

  if (!post) return <Navigate to="/" replace />;

  const more = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main className="post-page">
      <div className="section-inner post-inner">
        <a href={`${HOME_BASE}/?open=blog`} className="post-back">&larr; Back to Portfolio</a>

        <div className="glass-panel post-panel">
          <span className="panel-tag">{post.category}</span>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-byline">By Bongani Nduna &middot; {post.date}</p>
          <div className="post-media"><img src={asset(post.img)} alt={post.title} /></div>
          <article className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="glass-panel post-cta">
          <h3 className="panel-heading">Like what you see?</h3>
          <p className="lead">I build sites like this one for real businesses. Let&rsquo;s talk about yours.</p>
          <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
            <a href={`${HOME_BASE}/?open=contact`} className="btn btn-primary"><span>Get In Touch</span></a>
            <a href={`${HOME_BASE}/?open=work`} className="btn btn-ghost"><span>See My Work</span></a>
          </div>
        </div>

        {more.length > 0 && (
          <div className="post-more">
            <span className="section-eyebrow">Keep Reading</span>
            <div className="blog-grid">
              {more.map((p) => (
                <Link to={`/blog/${p.slug}`} className="blog-card" key={p.slug}>
                  <div className="blog-media"><img src={asset(p.img)} alt={p.title} loading="lazy" /></div>
                  <span className="blog-cat">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
