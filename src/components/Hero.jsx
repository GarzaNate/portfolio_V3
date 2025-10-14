import React, { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm Nate Garza <span className="inline-block">👋</span>
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed">
              I build reliable, scalable web applications — frontend to backend.
              I love clean code, clear systems, and projects that make an
              impact.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-4 py-2 bg-accent text-black rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                View Projects
              </a>
              <a
                href="/Nate_Garza_Resume.pdf"
                className="px-4 py-2 border border-light rounded-lg hover:bg-light hover:text-dark transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Image / placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-semibold">
              Your Photo
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
