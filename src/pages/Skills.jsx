import React from "react";
import { motion } from "framer-motion";

const SKILLS = {
  Languages: ["JavaScript", "TypeScript", "Java", "C++", "Python"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "Spring Boot", "REST APIs"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "VS Code", "Postman", "Figma", "JUnit"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Technical Skills
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            What I work with.
          </h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed opacity-70">
            The languages, frameworks, and tools I've used to build projects
            across frontend development, backend systems, and software
            engineering.
          </p>
        </motion.div>

        {/* =====================================================
            SKILLS
        ===================================================== */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(SKILLS).map(([group, items], index) => (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  transition
                  hover:border-cyan-400/30
                "
              >
                {/* Category */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold">{group}</h3>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.02]
                        px-3
                        py-1.5
                        text-sm
                        opacity-70
                        transition
                        hover:border-cyan-400/30
                        hover:text-accent
                        hover:opacity-100
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            APPROACH
        ===================================================== */}
        <motion.div
          className="mt-16 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Still Learning
          </p>

          <p className="mt-4 text-lg leading-relaxed opacity-70">
            I'm continuously expanding my technical foundation through
            coursework and personal projects, with a current focus on
            TypeScript, React and Next.js, computer science fundamentals, and
            writing software that is easier to maintain and extend.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
