import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const ExperienceSection = () => (
  <section id="experience" className="section-padding scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <SectionHeading {...profile.sections.experience} />
      <ol className="border-l border-border">
        {profile.experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="relative pb-8 pl-6 last:pb-0">
            <span className="absolute -left-1.5 top-2 size-3 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-primary">{item.company}</p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{item.dates}</p>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  </section>
);

export default ExperienceSection;