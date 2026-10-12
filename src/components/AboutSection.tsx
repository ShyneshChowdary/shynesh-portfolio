import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/config/portfolio";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { about } = portfolioData;

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8">
            <span className="font-mono text-primary text-lg">01.</span>
            {about.title}
            <span className="h-px bg-border flex-1 max-w-[200px]" />
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {about.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/WYSERA/g, '<span class="text-primary font-medium">WYSERA</span>') }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
