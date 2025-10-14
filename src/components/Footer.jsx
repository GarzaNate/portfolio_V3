import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 ">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Nate Garza. Built with React & Tailwind.
      </div>
    </footer>
  );
}
