import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px w-full bg-white/10" />

        <div className="py-6 text-center text-sm opacity-40">
          © {new Date().getFullYear()} Josue Garza. Designed & Built with care.
        </div>
      </div>
    </footer>
  );
}
