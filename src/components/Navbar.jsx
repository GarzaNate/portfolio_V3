import React from "react";
import { Link } from "react-scroll";
import { Sun, Moon } from "react-feather";

export default function Navbar() {

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="">
          <h1 className="text-4xl font-semibold">
            Josue
            <span className="text-accent">.</span>
          </h1>
        </a>

        <div className="hidden xl:flex items-center gap-8"></div>
        <nav className="flex gap-8">
          <Link
            to="professional"
            smooth={true}
            offset={-80}
            className="cursor-pointer"
          >
            Professional
          </Link>
          <Link
            to="personal"
            smooth={true}
            offset={-80}
            className="cursor-pointer"
          >
            Personal
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
