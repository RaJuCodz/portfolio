import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Absolute Cinema",
    description:
      "A Netflix-like movie streaming platform with TMDB integration, user authentication, and a beautiful UI. Features include movie details, search, and responsive design.",
    image: "/images/absolutecinema.png",
    tags: ["Next.js", "TMDB API", "Tailwind CSS", "React", "TypeScript"],
    demoUrl: "https://absolute-cinema.vercel.app",
    githubUrl: "https://github.com/RaJuCodz/AbsoluteCinema",
  },
  {
    id: 2,
    title: "Library of Heaven",
    description:
      "A full-stack e-commerce platform for buying and selling used books. Features include user authentication, book listings, search functionality, cart management, and secure payment integration.",
    image: "/images/books.png",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    demoUrl: "https://library-of-heaven.vercel.app",
    githubUrl: "https://github.com/RaJuCodz/Library-of-Heaven",
  },
  {
    id: 3,
    title: "CS Mastery",
    description:
      "An AI-powered learning platform for Computer Science subjects. Features include interactive AI tutors, note-taking capabilities, open board for visual learning, and real-time chat with multiple AI experts.",
    image: "/images/css.png",
    tags: [
      "Next.js",
      "Aceternity UI",
      "Canvas",
      "MongoDB",
      "Gemini AI",
      "Tailwind CSS",
      "TypeScript",
    ],
    demoUrl: "https://csmastery-zyzz.vercel.app/",
    githubUrl: "https://github.com/RaJuCodz/csmastery",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-fade-in">
          Featured{" "}
          <span className="text-primary animate-gradient">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary animate-fade-in"
                      style={{
                        animationDelay: `${index * 200 + tagIndex * 100}ms`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 animate-gradient">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 animate-fade-in"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 animate-fade-in"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 animate-fade-in"
          >
            View All Projects{" "}
            <ArrowRight size={16} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};
