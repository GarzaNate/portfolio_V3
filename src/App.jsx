import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="relative min-h-screen text-light transition-colors">
      {/* Background */}
      <ParticlesBackground />
      <div className="absolute inset-0 bg-dark -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

