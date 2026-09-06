import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 ">
      <div className="max-w-6xl mx-auto mt-12 px-6 text-center text-sm">
        © {new Date().getFullYear()} Designed and Built by Josue Garza
      </div>
    </footer>
  );
}
