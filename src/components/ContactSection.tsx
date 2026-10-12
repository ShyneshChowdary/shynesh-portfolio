import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), profile.contact.copySuccessDurationMs);
    } catch {
      window.prompt(profile.contact.copyPrompt, profile.contact.email);
    }
  };

  return (
    <section id="contact" className="section-padding scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-mono text-primary text-sm mb-2">{profile.sections.contact.number} {profile.sections.contact.eyebrow}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{profile.sections.contact.title}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">{profile.contact.description}</p>
        <p className="font-mono text-sm text-muted-foreground mb-8">{profile.contact.emailLabel}</p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" onClick={handleCopyEmail} aria-label={profile.contact.copyAriaLabel} className="border-primary text-primary hover:bg-primary/10">
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            {copied ? profile.contact.copiedLabel : profile.contact.copyLabel}
          </Button>
          <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
            <a href={profile.contact.mailto}>
              <Mail aria-hidden="true" />
              {profile.contact.mailtoLabel}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label={profile.contact.linkedinAriaLabel}>
              <Linkedin aria-hidden="true" />
              {profile.contact.linkedinLabel}
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label={profile.contact.githubAriaLabel}>
              <Github aria-hidden="true" />
              {profile.contact.githubLabel}
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;