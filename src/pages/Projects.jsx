import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout } from "@/components/Layout";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Absolute Cinema",
    description:
      "A Netflix-like movie streaming platform with TMDB integration, user authentication, and a beautiful UI. Features include movie details, search, and responsive design.",
    thumbnail: "/images/absolutecinema.png",
    technologies: [
      "Next.js",
      "TMDB API",
      "Tailwind CSS",
      "React",
      "TypeScript",
    ],
    links: {
      github: "https://github.com/yourusername/absolute-cinema",
      demo: "https://absolute-cinema.vercel.app",
    },
  },
  {
    id: 2,
    title: "Library of Heaven",
    description:
      "A full-stack e-commerce platform for buying and selling used books. Features include user authentication, book listings, search functionality, cart management, and secure payment integration. Users can list their books for sale and purchase books from other users.",
    thumbnail: "/images/books.png",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Stripe",
    ],
    links: {
      github: "https://github.com/RaJuCodz/Library-of-Heaven",
      demo: "https://library-of-heaven.vercel.app",
    },
  },
  {
    id: 3,
    title: "CS Mastery",
    description:
      "An AI-powered learning platform for Computer Science subjects. Features include interactive AI tutors, note-taking capabilities, open board for visual learning, and real-time chat with multiple AI experts. The platform uses Gemini AI for intelligent responses and provides a comprehensive learning experience for CS topics.",
    thumbnail: "/images/css.png",
    technologies: [
      "Next.js",
      "Aceternity UI",
      "Canvas",
      "MongoDB",
      "Gemini AI",
      "Tailwind CSS",
      "TypeScript",
    ],
    links: {
      github: "https://github.com/RaJuCodz/csmastery",
      demo: "https://csmastery-zyzz.vercel.app/",
    },
  },
];

export const Projects = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            ref={titleRef}
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Featured{" "}
            <motion.span
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Projects
            </motion.span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 md:max-w-5xl mx-auto">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  projects.length % 2 === 1 &&
                  projects[projects.length - 1] === project
                    ? "md:col-span-2 md:max-w-2xl md:mx-auto"
                    : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">
                      View Project
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Go to Project</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
