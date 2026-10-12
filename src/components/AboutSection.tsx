import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const AboutSection = () => (
  <section id="about" className="section-padding scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <SectionHeading {...profile.sections.about} />
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </motion.div>
  </section>
);

export default AboutSection;