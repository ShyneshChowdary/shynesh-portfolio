import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-32">
    <div className="max-w-6xl mx-auto w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-primary text-sm mb-4"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2"
      >
        Shynesh Raparla.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground tracking-tight mb-6"
      >
        I build quality software.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-10"
      >
        QA Developer from Vijayawada, currently working in Hyderabad, India. Passionate about ensuring software quality and delivering seamless digital experiences.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        href="#contact"
        className="inline-block font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
      >
        Get In Touch
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
