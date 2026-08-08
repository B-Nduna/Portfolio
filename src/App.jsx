import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Preloader from "./components/Preloader.jsx";
import Desktop from "./pages/Desktop.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import { BASENAME } from "./lib/env.js";

function BlogPostPage() {
  return (
    <>
      <Preloader />
      <Nav />
      <BlogPost />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <div className="grain" />
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
