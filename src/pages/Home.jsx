import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Work from "../components/Work.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Work />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
