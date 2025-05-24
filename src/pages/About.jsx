import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { GraduationCap, Code2, Rocket, Lightbulb } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate full-stack developer with a keen eye for creating
              elegant solutions to complex problems
            </p>
          </motion.div>

          {/* Journey Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-lg shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">My Journey</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m a dedicated full-stack developer with a strong foundation
              in both frontend and backend technologies. My journey in software
              development began with a passion for creating intuitive and
              efficient solutions. I specialize in building modern web
              applications using React, Node.js, and various other cutting-edge
              technologies.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-lg shadow-lg mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="text-xl font-semibold">
                  Netaji Subhas University of Technology
                </h3>
                <p className="text-muted-foreground">New Delhi, India</p>
                <p className="text-sm text-muted-foreground">
                  Expected Graduation: 2026
                </p>
                <p className="mt-2">
                  Pursuing a degree in Computer Science with a focus on software
                  development and emerging technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-semibold">Interests & Goals</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Technical Interests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack Web Development</li>
                  <li>• Cloud Computing & DevOps</li>
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Mobile App Development</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Career Goals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Master modern web technologies</li>
                  <li>• Contribute to open-source projects</li>
                  <li>• Build scalable applications</li>
                  <li>• Stay updated with tech trends</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export { About };
