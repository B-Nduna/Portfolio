export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = (e) => {
    e.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer>
      <div className="section-inner footer-inner">
        <p className="copyright">&copy; {year} B-Nduna. All rights reserved.</p>
        <a href="#top" className="back-to-top" onClick={scrollTop} aria-label="Back to top">&#8593;</a>
      </div>
    </footer>
  );
}
