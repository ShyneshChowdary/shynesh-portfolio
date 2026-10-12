import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const EducationSection = () => (
  <section id="education" className="section-padding scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <SectionHeading {...profile.sections.education} />
      <div className="space-y-7">
        {profile.education.map((item) => (
          <article key={`${item.institution}-${item.qualification}`}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{item.qualification}</h3>
              <p className="font-mono text-xs text-muted-foreground">{item.dates}</p>
            </div>
            <p className="text-primary mt-1">{item.institution}</p>
          </article>
        ))}
      </div>
    </motion.div>
  </section>
);

export default EducationSection;