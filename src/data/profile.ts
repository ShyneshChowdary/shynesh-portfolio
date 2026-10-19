// Edit only this file to update the site.
import resumePdf from "../assets/resume.pdf.asset.json";
import resumePreview from "../assets/resume-preview.png.asset.json";

const email = "raparlashynesh75@gmail.com";

export const profile = {
  name: "Shynesh Raparla",
  title: "Software Developer | QA Automation & Social Media",
  tagline: "I build quality software.",
  hero: {
    intro: "Hi, my name is",
    title: "Software Developer | QA Automation & Social Media",
    description:
      "Software developer from Vijayawada, India. QA automation engineer turned social media manager at Wysera. Passionate about software quality and seamless digital experiences.",
    contactLabel: "Get In Touch",
    contactHref: "#contact",
  },
  navigation: {
    logoAlt: "Shynesh Raparla",
    menuLabel: "Toggle menu",
    themeToggleLabel: "Toggle theme",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "Resume", href: "#resume" },
      { label: "Contact", href: "#contact" },
    ],
  },
  sections: {
    about: { number: "01.", title: "About Me" },
    experience: { number: "02.", title: "Experience" },
    skills: { number: "03.", title: "Skills" },
    projects: { number: "04.", title: "Projects" },
    education: { number: "05.", title: "Education" },
    resume: { number: "06.", title: "Resume" },
    contact: { number: "07.", eyebrow: "What's Next?", title: "Get In Touch" },
  },
  about: [
    "I work at Wysera Technologies, where I started in QA and Playwright test automation using Python and TypeScript.",
    "Since September 2026, I’ve managed social content and content calendars, combining a technical foundation with clear, consistent communication.",
  ],
  experience: [
    {
      company: "Wysera Technologies",
      role: "Social Media Manager",
      dates: "Sep 2026 – Present",
    },
    {
      company: "Wysera Technologies",
      role: "QA Engineer",
      dates: "May 2026 – Aug 2026",
    },
    {
      company: "Connexr Solutions Pvt. Ltd.",
      role: "Quality Assurance Analyst",
      dates: "Jan 2026 – Apr 2026",
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C",
    "HTML/CSS",
    "Playwright",
    "pytest",
    "API testing",
    "Page Object Model",
    "MySQL",
    "MongoDB",
    "GitHub",
    "GitHub Actions",
  ],
  projects: [
    {
      category: "Current Project",
      title: "OpsWyse / Wysera platform",
      description: "QA automation and testing for the Wysera platform.",
      tags: ["Playwright", "Python", "TypeScript", "AI Agents"],
      url: "https://wysera.ai/",
      linkLabel: "Visit Wysera",
    },
    {
      category: "Final Year Project",
      title: "Automated Animal Detection System",
      description:
        "A real-time animal detection system using YOLOv8 across 10 animal classes, achieving 95% precision and a 93% F1-score.",
      tags: ["Computer Vision", "YOLOv8", "Real-time Detection"],
    },
    {
      category: "Full Stack Project",
      title: "Cars Info",
      description:
        "An HTML, CSS, and JavaScript app for exploring car models, fuel types, transmission options, and prices.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ],
  education: [
    {
      qualification: "B.Tech in Computer Science and Engineering",
      institution: "Lakireddy Bali Reddy College of Engineering",
      dates: "Nov 2021 – Apr 2026",
    },
  ],
  certifications: [],
  resume: {
    url: resumePdf.url,
    previewUrl: resumePreview.url,
    downloadLabel: "Download Resume",
    previewTitle: "Resume preview for Shynesh Raparla",
    description: "Explore my experience, projects, and technical background.",
  },
  contact: {
    email,
    mailto: `mailto:${email}`,
    emailLabel: email,
    copyLabel: "Copy Email",
    copiedLabel: "Copied!",
    copyAriaLabel: "Copy email address",
    copyPrompt: "Copy this email address:",
    mailtoLabel: "Get In Touch",
    linkedin: "https://www.linkedin.com/in/shyneshraparla/",
    linkedinLabel: "LinkedIn",
    linkedinAriaLabel: "Open LinkedIn profile",
    github: "https://github.com/ShyneshChowdary",
    githubLabel: "GitHub",
    githubAriaLabel: "Open GitHub profile",
    description: "I'm open to new opportunities and interesting conversations.",
    copySuccessDurationMs: 2000,
  },
  footer: {
    copyrightPrefix: "©",
  },
  seo: {
    title: "Shynesh Raparla — Software Developer | QA Automation & Social Media",
    description:
      "Shynesh Raparla is a software developer focused on QA automation and social media at Wysera. Explore experience, projects, skills, education, and resume.",
    author: "Shynesh Raparla",
    openGraphType: "website",
    twitterCard: "summary_large_image",
    robots: "index, follow",
  },
} as const;