import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold mb-6">
            <span className="font-mono text-primary text-lg">03.</span>
            Resume
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Interested in my experience? Download my resume to learn more about my skills and background.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
