import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-32">
    <div className="max-w-6xl mx-auto w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-primary text-sm mb-4"
      >
        {profile.hero.intro}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3"
      >
        {profile.name}.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-mono text-primary text-sm md:text-base mb-5"
      >
        {profile.hero.title}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground tracking-tight mb-6"
      >
        {profile.tagline}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10"
      >
        {profile.hero.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
          <a href={profile.hero.contactHref}>
            {profile.hero.contactLabel}
            <ArrowDownRight aria-hidden="true" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;