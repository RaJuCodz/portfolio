import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
  Code2,
  Database,
  Server,
  FileCode2,
  Terminal,
  Layers,
  Globe,
  Palette,
  Cpu,
  Braces,
  FileCode,
  FileJson,
  FileType,
  FileText,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  {
    category: "Frontend Development",
    icon: <FileCode2 className="w-6 h-6" />,
    skills: [
      { name: "React", icon: <Code2 className="w-6 h-6" /> },
      { name: "JavaScript", icon: <FileCode2 className="w-6 h-6" /> },
      { name: "HTML/CSS", icon: <Layers className="w-6 h-6" /> },
      { name: "Tailwind CSS", icon: <Palette className="w-6 h-6" /> },
      { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: <Terminal className="w-6 h-6" /> },
      { name: "Express.js", icon: <Server className="w-6 h-6" /> },
      { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
      { name: "SQL", icon: <Database className="w-6 h-6" /> },
      { name: "REST APIs", icon: <Globe className="w-6 h-6" /> },
    ],
  },
  {
    category: "Programming Languages",
    icon: <Cpu className="w-6 h-6" />,
    skills: [
      { name: "JavaScript", icon: <FileCode className="w-6 h-6" /> },
      { name: "TypeScript", icon: <FileType className="w-6 h-6" /> },
      { name: "Python", icon: <Braces className="w-6 h-6" /> },
      { name: "Java", icon: <FileCode className="w-6 h-6" /> },
      { name: "C++", icon: <FileText className="w-6 h-6" /> },
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-card p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 hover:shadow-xl transition-all duration-300"
    >
      <motion.div
        className="text-primary"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {skill.icon}
      </motion.div>
      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h1>
            <p className="text-muted-foreground">
              A showcase of my technical expertise and tools I work with
            </p>
          </motion.div>

          <div className="grid gap-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h2 className="text-2xl font-semibold">
                    {category.category}
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
