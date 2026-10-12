import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const ResumeSection = () => (
  <section id="resume" className="section-padding scroll-mt-20">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <SectionHeading {...profile.sections.resume} />
      <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">{profile.resume.description}</p>
        <Button variant="outline" asChild className="shrink-0 border-primary text-primary hover:bg-primary/10">
          <a href={profile.resume.url} download>
            <Download aria-hidden="true" />
            {profile.resume.downloadLabel}
          </a>
        </Button>
      </div>
      <iframe
        src={`${profile.resume.url}#view=FitH`}
        title={profile.resume.previewTitle}
        className="w-full h-[620px] md:h-[800px] border border-border rounded-md bg-card"
        loading="lazy"
      />
    </motion.div>
  </section>
);

export default ResumeSection;