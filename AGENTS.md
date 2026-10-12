# Project architecture decisions

- Keep all portfolio copy, profile details, links, and SEO values in `src/data/profile.ts`; page sections render from that object so routine content updates do not require layout edits.
- Generate static HTML head metadata from the profile data in Vite so published crawlers and the editable profile stay in sync.