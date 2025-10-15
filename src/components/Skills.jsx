import React from "react";

const SKILLS = {
  Frontend: ["React", "JavaScript", "Tailwind", "HTML", "CSS"],
  Backend: ["Java", "C++", "Node", "Express", "MongoDB", "MySQL"],
  Tools: ["Git", "VSCode", "Postman", "Figma", "JUnit"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div
              key={group}
              className="p-4 rounded-xl bg-white dark:bg-slate-900 shadow"
            >
              <h3 className="font-semibold">{group}</h3>
              <div className="mt-3 flex gap-2 flex-wrap">
                {items.map((i) => (
                  <span key={i} className="px-2 py-1 border rounded text-sm">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
