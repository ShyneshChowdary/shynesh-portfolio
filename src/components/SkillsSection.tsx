import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const SkillsSection = () => (
  <section id="skills" className="section-padding scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <SectionHeading {...profile.sections.skills} />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4">
        {profile.skills.map((skill) => (
          <li key={skill} className="border-b border-border pb-3 text-sm text-muted-foreground">{skill}</li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default SkillsSection;