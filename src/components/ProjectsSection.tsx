import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const ProjectsSection = () => (
  <section id="projects" className="section-padding scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <SectionHeading {...profile.sections.projects} />
      <div className="space-y-6">
        {profile.projects.map((project) => {
          const content = (
            <>
              <div className="flex items-start justify-between gap-4 mb-4">
                <p className="font-mono text-primary text-sm">{project.category}</p>
                {"url" in project && <ExternalLink aria-hidden="true" size={18} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />}
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground" aria-label={project.title}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </>
          );

          return "url" in project ? (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.linkLabel}
              className="group relative block bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/40 transition-colors duration-300 glow"
            >
              {content}
            </a>
          ) : (
            <article key={project.title} className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/40 transition-colors duration-300 glow">
              {content}
            </article>
          );
        })}
      </div>
    </motion.div>
  </section>
);

export default ProjectsSection;