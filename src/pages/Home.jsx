import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Bio from "../components/Bio.jsx";
import Services from "../components/Services.jsx";
import Work from "../components/Work.jsx";
import Blog from "../components/Blog.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Nav onHome />
      <Hero />
      <main>
        <Bio />
        <Services />
        <Work />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
