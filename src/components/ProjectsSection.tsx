import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/config/portfolio";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12">
            <span className="font-mono text-primary text-lg">03.</span>
            Projects
            <span className="h-px bg-border flex-1 max-w-[200px]" />
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors duration-300 glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="font-mono text-primary text-sm">{project.type}</p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
