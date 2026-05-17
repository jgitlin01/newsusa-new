# NewsUSA — Landing Page

## Problem Statement
Build a landing page similar to https://www.mprezagency.com/ but using NewsUSA brand guidelines.

## User choices
- Hero: scroll-controlled video using the uploaded NewsUSA logo-transformation MP4.
- Content direction: mirror mprez structure with copy rewritten for NewsUSA's actual business (press release distribution / earned media).
- Scope: frontend-only landing page (no backend, no contact form submission).

## Brand (from NewsUSA Brand Guidelines PDF)
- Colors: Liberty Blue #0068C2, Union Navy #0C4D8C, Heritage Indigo #122D51, Constitution Black #111821, Pearl White #FFFFFF, Space Grey #E5E5E5.
- Fonts: Playfair Display (display/serif) + Work Sans (UI/sans).
- Voice: serious, formal, respectful, matter-of-fact.
- Tagline: "Media Coverage. Guaranteed."

## Implemented
**2026-05-17 — MVP shipped**
- React (CRA) + Tailwind + shadcn UI, frontend-only.
- Hero with scroll-driven `video.currentTime` scrubbing (rAF easing); 3 synced cue states; progress bar; reduced-motion + coarse-pointer + narrow-viewport fallback to autoplay-loop.
- Video served from `/public/media/` as both VP9 WebM (for Chromium-headless / browsers without H.264) and H.264 MP4 (universal).
- Sections (mirroring mprez): Nav → Hero → Logo marquee → Mission → Testimonials marquee → 4 Pillars → 8 Services (with hover-to-dark animation) → Methodology (5-step expanding accordion) → Media Kit banner (patriotic gradient) → Complementary Services → Portfolio → Quote banner → FAQs (shadcn Accordion, 13 items) → About long-form → Footer (3 columns + socials).
- All copy rewritten for NewsUSA's earned-media / press release distribution business (NewsUSA+, NewsUSA&, broadcast/SMT, radio, bilingual, public affairs).
- Testing agent verified 100% pass; minor service-card hover-contrast and hero-fallback gating fixes applied.

## Architecture
- `/app/frontend/src/App.js` mounts `<Landing />` at `/`.
- Components: `Nav`, `Hero`, `LogoMarquee`, `Mission`, `Testimonials`, `Pillars`, `Services`, `Methodology`, `MediaKitBanner`, `ComplementaryServices`, `Portfolio`, `QuoteBanner`, `FAQ`, `About`, `Footer`, `Logo`.
- Design tokens in `/app/frontend/src/index.css` (`--nu-liberty`, `--nu-union`, `--nu-heritage`, etc.). `.display` and `.display-italic` classes for Playfair Display.
- `overflow-x: clip` on html/body (NOT `hidden`) so `position: sticky` in the hero shell works correctly.

## Backlog (P1)
- Working contact form with backend submission + admin view.
- Live RSS-style coverage feed of recent placements.
- Spanish-language toggle.
- Cookie banner / GDPR.
- Replace placeholder Unsplash portfolio images with real case-study screenshots.
- Replace `hello@newsusa.example` mailto with real contact address.

## Next Action Items
- Swap placeholder testimonial brand names + portfolio images for real client work.
- Replace mailto with real address + add a tracked CTA form.
