import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./components/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen text-light transition-colors">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-dark -z-10" />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
