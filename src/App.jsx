import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen text-light transition-colors">
      <ParticlesBackground />

      <div className="absolute inset-0 bg-dark/90 -z-10" />
      <Navbar />
      <main className="pt-20 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;