import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="py-8 text-center border-t border-border">
    <p className="font-mono text-xs text-muted-foreground">
      {profile.footer.copyrightPrefix} {new Date().getFullYear()} {profile.name}. {profile.footer.copyrightSuffix}
    </p>
  </footer>
);

export default Footer;