export default function Footer() {
  return (
    <footer>
      <div className="section-inner footer-inner">
        <p>© {new Date().getFullYear()} Bongani Nduna</p>
        <p>Designed & built in React.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
