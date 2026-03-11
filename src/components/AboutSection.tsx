import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            About Me
            <span className="h-px bg-border flex-1 max-w-[200px]" />
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a QA Developer currently working at <span className="text-primary font-medium">RSA Tech</span>, where I focus on delivering high-quality, bug-free software. I enjoy the challenge of finding edge cases and ensuring every product meets the highest standards.
            </p>
            <p>
              Based in Vijayawada, India, I'm passionate about software quality assurance, test automation, and building reliable digital products that users can trust.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
