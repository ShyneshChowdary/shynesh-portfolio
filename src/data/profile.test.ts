import { describe, expect, it } from "vitest";
import { profile } from "./profile";

describe("portfolio profile content", () => {
  it("keeps the requested professional title and hero summary", () => {
    expect(profile.title).toBe("Software Developer | QA Automation & Social Media");
    expect(profile.hero.description).toBe("Software developer from Vijayawada, India. QA automation engineer turned social media manager at Wysera. Passionate about software quality and seamless digital experiences.");
  });

  it("keeps the experience entries in newest-first order", () => {
    expect(profile.experience.map(({ company, role, dates }) => [company, role, dates])).toEqual([
      ["Wysera Technologies", "Social Media Manager", "Sep 2026 – Present"],
      ["Wysera Technologies", "QA Engineer", "May 2026 – Aug 2026"],
      ["Connexr Solutions Pvt. Ltd.", "Quality Assurance Analyst", "Jan 2026 – Apr 2026"],
    ]);
  });

  it("keeps the skills section focused on two or three major skills", () => {
    expect(profile.skills.length).toBeGreaterThanOrEqual(2);
    expect(profile.skills.length).toBeLessThanOrEqual(3);
  });

  it("contains project performance, education, contact links, and resume path", () => {
    expect(profile.projects[1]?.description).toContain("10 animal classes");
    expect(profile.projects[1]?.description).toContain("95% precision");
    expect(profile.projects[1]?.description).toContain("93% F1-score");
    expect(profile.education[0]?.dates).toBe("Nov 2021 – Apr 2026");
    expect(profile.contact.email).toBe("raparlashynesh75@gmail.com");
    expect(profile.contact.mailto).toBe("mailto:raparlashynesh75@gmail.com");
    expect(profile.contact.github).toBe("https://github.com/ShyneshChowdary");
    expect(profile.contact.linkedin).toBe("https://www.linkedin.com/in/shyneshraparla/");
    expect(profile.resume.url).toBe("/Shynesh_Resume.pdf");
    expect(profile.resume.previewUrl).toBe("/resume-preview.png");
  });

  it("uses matching profile values for SEO", () => {
    expect(profile.seo.title).toContain(profile.title);
    expect(profile.seo.description).toContain("QA automation");
  });
});