import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "MERN Task Manager",
    description:
      "A full-stack task management application with authentication, role-based access, and persistent user data.",
    image: "/projects/task-manager-placeholder.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/yourusername/task-manager",
    live: "https://your-task-manager.com",
    featured: true,
    highlights: [
      "Authentication & authorization",
      "REST API",
      "MongoDB persistence",
    ],
  },
  {
    title: "Between the Ratings",
    description:
      "A full-stack book review platform where users can discover books, create lists, and share ratings.",
    image: "/projects/between-the-ratings-placeholder.jpg",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    repo: "https://github.com/yourusername/between-the-ratings",
    live: "https://your-book-app.com",
  },
  {
    title: "Java Card Game",
    description:
      "A multiplayer card game built with Java and Spring Boot, focused on game state management and real-time communication.",
    image: "/projects/card-game-placeholder.jpg",
    tags: ["Java", "Spring Boot", "WebSockets", "OOP"],
    repo: "https://github.com/yourusername/card-game",
    live: "#",
  },
];

export default function Projects() {
  const featuredProject = PROJECTS[0];
  const secondaryProjects = PROJECTS.slice(1);

  return (
    <section id="projects" className="min-h-screen py-24">
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
            Selected Work
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold">Projects</h2>

          <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed opacity-70">
            A selection of projects that represent how I approach building
            software, solving problems, and learning new technologies.
          </p>
        </motion.div>

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              Featured Project
            </p>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Project Container */}
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              overflow-hidden
              transition
              hover:border-cyan-400/30
            "
          >
            {/* Screenshot */}
            <div className="relative aspect-video bg-white/[0.02] overflow-hidden">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} screenshot`}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-500
                  hover:scale-[1.02]
                "
              />

              {/* Placeholder overlay */}
              <div className="absolute inset-0 pointer-events-none bg-black/5" />
            </div>

            {/* Project Information */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-[1fr_auto] gap-8">
                {/* Main Information */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-relaxed opacity-70">
                    {featuredProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-3
                          py-1
                          text-xs
                          opacity-80
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="md:min-w-[210px]">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-40">
                    Highlights
                  </p>

                  <ul className="mt-3 space-y-2">
                    {featuredProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm opacity-70"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Links */}
              <div className="mt-7 flex items-center gap-5">
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    font-medium
                    text-accent
                    transition
                    hover:opacity-70
                  "
                >
                  Live Demo ↗
                </a>

                <a
                  href={featuredProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    font-medium
                    opacity-60
                    transition
                    hover:opacity-100
                  "
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              More Work
            </p>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  group
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  overflow-hidden
                  transition
                  hover:border-cyan-400/30
                "
              >
                {/* Screenshot */}
                <div className="aspect-video bg-white/[0.02] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed opacity-70">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border border-white/10
                          px-2.5
                          py-1
                          text-xs
                          opacity-60
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-sm
                        font-medium
                        text-accent
                        transition
                        hover:opacity-70
                      "
                    >
                      Live Demo ↗
                    </a>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-sm
                        font-medium
                        opacity-60
                        transition
                        hover:opacity-100
                      "
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT PHILOSOPHY
        ===================================================== */}
        <motion.div
          className="mt-16 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            How I Build
          </p>

          <p className="mt-4 text-lg leading-relaxed opacity-70">
            I enjoy taking an idea from concept to a working application —
            thinking through the interface, architecture, data, and the
            different pieces required to make everything work together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
