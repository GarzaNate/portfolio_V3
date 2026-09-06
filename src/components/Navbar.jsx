import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="py-6 md:py-8 text-white">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Josue<span className="text-accent">.</span>
          </h1>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="about"
            smooth={true}
            offset={-80}
            duration={500}
            className="
              cursor-pointer text-sm md:text-base
              opacity-70 transition
              hover:text-accent hover:opacity-100
            "
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={true}
            offset={-80}
            duration={500}
            className="
              cursor-pointer text-sm md:text-base
              opacity-70 transition
              hover:text-accent hover:opacity-100
            "
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="
              cursor-pointer text-sm md:text-base
              opacity-70 transition
              hover:text-accent hover:opacity-100
            "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
