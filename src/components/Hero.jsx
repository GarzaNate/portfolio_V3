import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      <main className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between px-6 md:px-10 pt-20 xl:pt-0 h-full w-full">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-6"
        >
          <span className="text-lg md:text-xl text-accent tracking-wide">
            Software Engineer
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello, I'm
            <br />
            <span className="text-accent">Josue Garza</span>
          </h1>

          <p className="max-w-md text-white/80">
            Full-Stack Developer | Something catchy
          </p>

          {/* Buttons / Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <button className="rounded-full border border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-3 uppercase tracking-wider transition-colors">
              Download CV
            </button>

            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-black transition-all"
                >
                  {/* SVG icons go here */}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 xl:mt-0"
        >
          <div className="w-[260px] h-[260px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden shadow-lg shadow-accent/50">
            <img
              src={HeroImg}
              alt="Josue Garza"
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </motion.div>
      </main>
    </section>
  );
}
