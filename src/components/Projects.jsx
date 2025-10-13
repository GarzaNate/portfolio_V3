import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "MERN Task App",
    desc: "Fullstack task app with auth and role-based access",
    tags: ["React", "Node", "MongoDB"],
    repo: "#",
    live: "#",
  },
  {
    title: "Quote Generator",
    desc: "Random quote generator using public APIs",
    tags: ["React", "API"],
    repo: "#",
    live: "#",
  },
  {
    title: "Portfolio (this site)",
    desc: "My developer portfolio built with React & Tailwind",
    tags: ["React", "Tailwind"],
    repo: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-4 bg-white dark:bg-slate-900 shadow"
            >
              <div className="h-40 rounded-md bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                Screenshot
              </div>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm">{p.desc}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.repo} className="text-sm underline">
                  GitHub
                </a>
                <a href={p.live} className="text-sm underline">
                  Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
