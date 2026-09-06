import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24">
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
            About Me
          </p>

          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            A little about me.
          </h2>
        </motion.div>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}
        <motion.div
          className="mt-10 max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            I'm a full-stack developer and Computer Science & Systems student
            who enjoys turning ideas into software that is useful, intuitive,
            and well-structured.
          </p>

          <p className="mt-6 text-base md:text-lg leading-relaxed opacity-80">
            My development journey started with a full-stack web development
            program, where I built a foundation in modern web technologies and
            learned to approach problems from both the frontend and backend. I'm
            now continuing that path through my B.S. in Computer Science &
            Systems, with an expected graduation in 2028.
          </p>

          <p className="mt-5 text-base md:text-lg leading-relaxed opacity-80">
            I enjoy taking an idea from concept to a working application —
            designing the interface, building the backend, working with data,
            and figuring out how all of the pieces fit together. I'm especially
            interested in modern web development and software engineering, and
            I'm always looking for opportunities to build something that teaches
            me something new.
          </p>
        </motion.div>

        {/* =====================================================
            MY JOURNEY
        ===================================================== */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">
              My Journey
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              From web development to computer science.
            </h3>
          </div>

          {/* Education Timeline */}
          <div className="relative mt-10 max-w-3xl">
            {/* Vertical line */}
            <div
              className="
                absolute
                left-[7px]
                top-2
                bottom-2
                w-px
                bg-cyan-400/30
              "
            />

            {/* Education Item 1 */}
            <div className="relative pl-10 pb-12">
              {/* Node */}
              <div
                className="
                  absolute
                  left-0
                  top-1
                  w-4
                  h-4
                  rounded-full
                  border-2
                border-accent
                bg-black
                  shadow-[0_0_12px_rgba(34,211,238,0.5)]
                "
              />

              <p className="text-sm text-accent font-medium">
                2022             
              </p>

              <h4 className="mt-1 text-xl font-semibold">
                Full-Stack Web Development Certificate
              </h4>

              <p className="mt-2 text-sm opacity-60">
                University of Washington
              </p>

              <p className="mt-3 leading-relaxed opacity-80 max-w-xl">
                Started my development journey by building a foundation in
                modern web development. I gained hands-on experience working
                across the frontend and backend and learned how the different
                pieces of a web application come together.
              </p>
            </div>

            {/* Education Item 2 */}
            <div className="relative pl-10 pb-12">
              {/* Node */}
              <div
                className="
                  absolute
                  left-0
                  top-1
                  w-4
                  h-4
                  rounded-full
                  border-2
                  border-accent
                  bg-black
                  shadow-[0_0_12px_rgba(34,211,238,0.5)]
                "
              />

              <p className="text-sm text-accent font-medium">
                2026
              </p>

              <h4 className="mt-1 text-xl font-semibold">
                Associate's Degree in Computer Science
              </h4>

              <p className="mt-2 text-sm opacity-60">Green River College</p>

              <p className="mt-3 leading-relaxed opacity-80 max-w-xl">
                Expanded my foundation beyond web development through formal
                computer science coursework, strengthening my understanding of
                programming, data structures, algorithms, and software
                development.
              </p>
            </div>

            {/* Education Item 3 */}
            <div className="relative pl-10">
              {/* Node */}
              <div
                className="
                  absolute
                  left-0
                  top-1
                  w-4
                  h-4
                  rounded-full
                  border-2
                  border-accent
                  bg-black
                  shadow-[0_0_12px_rgba(34,211,238,0.5)]
                "
              />

              <p className="text-sm text-accent font-medium">
                Current
              </p>

              <h4 className="mt-1 text-xl font-semibold">
                B.S. Computer Science & Systems
              </h4>

              <p className="mt-2 text-sm opacity-60">
                University of Washington Tacoma · Expected 2028
              </p>

              <p className="mt-3 leading-relaxed opacity-80 max-w-xl">
                Continuing to deepen my understanding of computer science,
                software engineering, and the systems behind the applications I
                build. I'm using this experience to strengthen both my technical
                fundamentals and my ability to design and build larger software
                projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CURRENTLY FOCUSED ON
        ===================================================== */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Currently Focused On
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            Always learning, always building.
          </h3>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {/* Focus Card */}
            <div
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-6
                transition
                hover:border-cyan-400/30
              "
            >
              <p className="text-accent text-sm font-medium">01</p>

              <h4 className="mt-2 text-lg font-semibold">TypeScript</h4>

              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Writing safer, more maintainable applications and becoming more
                comfortable with TypeScript's type system.
              </p>
            </div>

            {/* Focus Card */}
            <div
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-6
                transition
                hover:border-cyan-400/30
              "
            >
              <p className="text-accent text-sm font-medium">02</p>

              <h4 className="mt-2 text-lg font-semibold">React & Next.js</h4>

              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Improving my understanding of component architecture, state
                management, server-side functionality, and scalable application
                structure.
              </p>
            </div>

            {/* Focus Card */}
            <div
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-6
                transition
                hover:border-cyan-400/30
              "
            >
              <p className="text-accent text-sm font-medium">03</p>

              <h4 className="mt-2 text-lg font-semibold">
                Computer Science Fundamentals
              </h4>

              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Strengthening my understanding of data structures, algorithms,
                object-oriented programming, and the concepts that make software
                work beneath the surface.
              </p>
            </div>

            {/* Focus Card */}
            <div
              className="
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                p-6
                transition
                hover:border-cyan-400/30
              "
            >
              <p className="text-accent text-sm font-medium">04</p>

              <h4 className="mt-2 text-lg font-semibold">Software Design</h4>

              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Learning how to build applications that are not only functional,
                but readable, maintainable, and easier to extend as they grow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BEYOND THE CODE
        ===================================================== */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            Beyond the Code
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            There's more to me than programming.
          </h3>

          <p className="mt-5 max-w-3xl leading-relaxed opacity-80">
            When I'm away from the keyboard, I spend a lot of my time training
            Brazilian Jiu-Jitsu, hiking, listening to music, and enjoying games
            and anime. I like having interests that challenge me in completely
            different ways — whether that's working through a difficult
            programming problem or trying to figure out how to escape a bad
            position on the mat.
          </p>

          {/* =================================================
              IMAGE PLACEHOLDERS
          ================================================= */}
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {/* BJJ */}
            <div className="group">
              <div
                className="
                  aspect-[4/3]
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  overflow-hidden
                  flex items-center justify-center
                  transition
                  group-hover:border-cyan-400/30
                "
              >
                <div className="text-center px-6">
                  <p className="text-3xl">🥋</p>

                  <p className="mt-3 font-medium">BJJ</p>

                  <p className="mt-1 text-xs opacity-50">
                    Replace with your own photo
                  </p>
                </div>
              </div>
            </div>

            {/* Hiking */}
            <div className="group">
              <div
                className="
                  aspect-[4/3]
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  overflow-hidden
                  flex items-center justify-center
                  transition
                  group-hover:border-cyan-400/30
                "
              >
                <div className="text-center px-6">
                  <p className="text-3xl">🥾</p>

                  <p className="mt-3 font-medium">Hiking</p>

                  <p className="mt-1 text-xs opacity-50">
                    Replace with your own photo
                  </p>
                </div>
              </div>
            </div>

            {/* Music / Gaming */}
            <div className="group">
              <div
                className="
                  aspect-[4/3]
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  overflow-hidden
                  flex items-center justify-center
                  transition
                  group-hover:border-cyan-400/30
                "
              >
                <div className="text-center px-6">
                  <p className="text-3xl">🎵</p>

                  <p className="mt-3 font-medium">Music & Games</p>

                  <p className="mt-1 text-xs opacity-50">
                    Replace with your own photo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
