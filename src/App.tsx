import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
