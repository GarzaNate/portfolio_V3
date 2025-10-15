import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          I am a full-stack developer who enjoys building tools that solve real
          problems. I have experience with React, Node.js, and Java; I value
          readable, maintainable code and a thoughtful developer experience.
        </motion.p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p>
              <strong>Interests:</strong> BJJ, Hiking, Music, Anime
            </p>
            <p>
              <strong>Currently learning:</strong> TypeScript & advanced React
              patterns
            </p>
          </div>
          <div className="rounded-xl p-4 bg-slate-100 dark:bg-slate-800">
            <p className="text-sm">
              Small gallery or images of your setup / hobbies can go here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
