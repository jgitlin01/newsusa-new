import React from "react";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    eyebrow: "01 — Why this matters now",
    title: "AI is the new front door",
    body:
      "73% of B2B buyers now use AI tools in purchase research. 88% of businesses are invisible in ChatGPT — they simply don't appear when prospects ask for recommendations. That gap is where revenue is leaking, every month.",
    cta: { label: "Run my AI audit", href: "#contact" },
  },
  {
    eyebrow: "02 — Authority that travels",
    title: "Earned coverage AI cites back",
    body:
      "Our exclusive news-site network and 40+ years of content syndication infrastructure produce exactly the kind of authoritative third-party, AI-optimized, meta-tagged editorial presence that ChatGPT, Gemini, and Perplexity cite. Press release → newsroom → AI answer.",
    cta: { label: "See the engine", href: "#services" },
  },
  {
    eyebrow: "03 — Save Time, Compound Trust",
    title: "Reclaim your week",
    body:
      "Stop chasing journalists. Our editorial, distribution, audit, and AI optimization teams handle the entire lifecycle — from story design to syndication to AI-citation tracking — so your team focuses on what only your team can do.",
    cta: { label: "See how it works", href: "#methodology" },
  },
  {
    eyebrow: "04 — Show Up Ready",
    title: "Built for high-stakes moments",
    body:
      "Every announcement should be a moment of clarity, not risk. Rick Smith's team has run 32,000+ campaigns for consumer, tech, finance, health, and professional brands — so launch day is the easiest day of your quarter.",
    cta: { label: "Talk to Rick's team", href: "#contact" },
  },
];

const Pillars = () => {
  return (
    <section className="section bg-pearl" data-testid="section-pillars">
      <div className="container-nu">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => (
            <div key={i} data-testid={`pillar-${i}`}>
              <div className="eyebrow">{p.eyebrow}</div>
              <h3
                className="display mt-4"
                style={{ fontSize: "clamp(34px, 3.6vw, 56px)", lineHeight: 1.05 }}
              >
                {p.title}
              </h3>
              <p
                className="font-sans mt-5"
                style={{
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "var(--nu-ink)",
                  maxWidth: "52ch",
                }}
              >
                {p.body}
              </p>
              <a
                href={p.cta.href}
                className="link-underline mt-6 inline-flex items-center gap-2"
                data-testid={`pillar-cta-${i}`}
              >
                {p.cta.label} <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
