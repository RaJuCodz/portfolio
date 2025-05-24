import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Coursework
  { name: "Object-Oriented Programming", level: 85, category: "coursework" },
  { name: "Computer Architecture", level: 80, category: "coursework" },
  { name: "Machine Learning", level: 75, category: "coursework" },
  { name: "Database Management Systems", level: 80, category: "coursework" },
  { name: "Computer Networks", level: 75, category: "coursework" },

  // Programming Languages
  { name: "C++", level: 75, category: "programming" },
  { name: "Python", level: 55, category: "programming" },
  { name: "Java", level: 50, category: "programming" },

  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 65, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
];

const categories = [
  "all",
  "coursework",
  "programming",
  "frontend",
  "backend",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      (activeCategory === "all" && skill.category !== "coursework") ||
      skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          My <span className="text-primary animate-gradient"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize transform hover:scale-105 hover:shadow-lg",
                activeCategory === category
                  ? "bg-primary text-primary-foreground animate-pulse"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${key * 100}ms` }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg animate-gradient">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                    animationDelay: `${key * 150}ms`,
                  }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground animate-fade-in">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
