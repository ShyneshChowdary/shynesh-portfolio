import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { profile } from "./src/data/profile";

const escapeHtmlAttribute = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const profileHead = {
  name: "portfolio-profile-head",
  transformIndexHtml(html: string) {
    const tags: Record<string, string> = {
      __SEO_TITLE__: profile.seo.title,
      __SEO_DESCRIPTION__: profile.seo.description,
      __SEO_AUTHOR__: profile.seo.author,
      __SEO_ROBOTS__: profile.seo.robots,
      __SEO_OG_TYPE__: profile.seo.openGraphType,
      __SEO_TWITTER_CARD__: profile.seo.twitterCard,
    };
    return Object.entries(tags).reduce(
      (result, [placeholder, value]) => result.replaceAll(placeholder, escapeHtmlAttribute(value)),
      html,
    );
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), profileHead, mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
