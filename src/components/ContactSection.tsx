import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Check, Copy } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const email = "raparlashynesh64@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/shyneshraparla/";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this email address:", email);
    }
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to new opportunities and interesting conversations. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm border border-border text-foreground px-8 py-4 rounded hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Open LinkedIn profile of Shynesh Chowdary"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
