import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const email = "raparlashynesh64@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${encodeURIComponent(email)}`;
  const linkedInUrl = "https://www.linkedin.com/in/shyneshraparla/";

  const handleOpenExternal = (url: string, fallbackUrl?: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (!newWindow && fallbackUrl) {
      window.location.href = fallbackUrl;
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
            <a
              href="https://mail.google.com/mail/?view=cm&to=raparlashynesh64@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/shyneshraparla/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm border border-border text-foreground px-8 py-4 rounded hover:border-primary hover:text-primary transition-colors duration-200"
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
