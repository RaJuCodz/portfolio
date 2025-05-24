import { useRef } from "react";
import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <ThemeToggle />
      <Navbar />

      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 pt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Hi, I&apos;m{" "}
                  <span className="text-primary relative">
                    Raju Gupta
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary" />
                  </span>
                </h1>
                <div className="text-xl md:text-2xl text-muted-foreground mb-8">
                  <p>I am Software Developer</p>
                </div>
                <div>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden"
                    onClick={scrollToContact}
                  >
                    Hire Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="relative scale-125 origin-center">
                <div className="absolute inset-0 bg-white dark:bg-transparent rounded-lg" />
                <img
                  src="/images/Hero_image.png"
                  alt="Raju Gupta working on laptop"
                  className="relative w-full h-auto rounded-lg shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
    </div>
  );
};
