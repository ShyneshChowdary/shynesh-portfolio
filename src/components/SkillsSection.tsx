import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/config/portfolio";

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8">
            <span className="font-mono text-primary text-lg">02.</span>
            Skills
            <span className="h-px bg-border flex-1 max-w-[200px]" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-mono text-primary text-sm font-bold uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {skill}
                    </li>
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

export default SkillsSection;
