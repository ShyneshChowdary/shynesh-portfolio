import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <a href="#" className="flex items-center" aria-label={profile.navigation.logoAlt}>
          <img src={logo} alt={profile.navigation.logoAlt} className="h-8 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {profile.navigation.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((current) => !current)} aria-label={profile.navigation.menuLabel} aria-expanded={open}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-b border-border bg-background"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {profile.navigation.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      setOpen(false);
                      window.setTimeout(() => {
                        window.location.hash = link.href;
                      }, 320);
                    }}
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;