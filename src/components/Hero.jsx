import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <Particles
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
          particles: {
            number: { value: 35 },
            size: { value: 3 },
            move: { enable: true, speed: 0.6 },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm Nate Garza <span className="inline-block">👋</span>
            </h1>
            <p className="mt-4 max-w-xl">
              I build reliable, scalable web applications — frontend to backend.
              I love clean code, clear systems, and projects that make an
              impact.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="px-4 py-2 bg-accent text-black rounded-lg"
              >
                View Projects
              </a>
              <a
                href="/Nate_Garza_Resume.pdf"
                className="px-4 py-2 border rounded-lg"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <span className="text-white">Your Photo</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
