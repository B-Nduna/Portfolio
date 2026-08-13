import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import { BASENAME } from "./lib/env.js";

function BlogPostPage() {
  return (
    <>
      <Nav onHome={false} />
      <BlogPost />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
