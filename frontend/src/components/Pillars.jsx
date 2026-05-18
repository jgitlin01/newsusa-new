import React from "react";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const pillars = [
  {
    eyebrow: "01 — Why this matters now",
    title: "AI is the new front door",
    body:
      "73% of B2B buyers now use AI tools in purchase research. 88% of businesses are invisible in ChatGPT — they simply don't appear when prospects ask for recommendations. That gap is where revenue is leaking, every month.",
    cta: "Get my free AI Authority Audit",
  },
  {
    eyebrow: "02 — Authority that travels",
    title: "Syndicated placements AI cites back",
    body:
      "Our exclusive news-site network and 40+ years of content syndication infrastructure produce exactly the kind of authoritative third-party, AI-optimized, meta-tagged editorial presence that ChatGPT, Gemini, and Perplexity cite. Syndicated placement → newsroom → AI answer.",
    cta: "See the AI Authority Engine",
  },
  {
    eyebrow: "03 — Save Time, Compound Trust",
    title: "Reclaim your week",
    body:
      "Stop chasing journalists. Our editorial, syndication, and AI optimization teams handle the entire lifecycle — from story strategy to guaranteed placements to AI-citation tracking — so your team focuses on what only your team can do.",
    cta: "See how it works",
  },
  {
    eyebrow: "04 — Top-Tier. Guaranteed.",
    title: "Built for high-stakes moments",
    body:
      "Every announcement should be a moment of clarity, not risk. Rick Smith's team has run 32,000+ campaigns for consumer, tech, finance, health, and professional brands — so launch day is the easiest day of your quarter.",
    cta: "Talk to Rick's team",
  },
];

const PillarCard = ({ p, i }) => {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const isEven = i % 2 === 1;
  const r = (d) => `reveal ${visible ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <div
      ref={ref}
      className={isEven ? "lg:text-right" : ""}
      data-testid={`pillar-${i}`}
    >
      <div className={`section-label mb-3 ${r(1)}`}>
        {String(i + 1).padStart(3, "0")} / {p.eyebrow.split(" — ")[1]}
      </div>
      <div className={`eyebrow ${r(1)}`}>{p.eyebrow}</div>
      <h3
        className={`display mt-4 ${r(2)}`}
        style={{ fontSize: "clamp(43px, 4.5vw, 70px)", lineHeight: 1.05 }}
      >
        {p.title}
      </h3>
      <p
        className={`font-sans mt-5 ${r(3)}`}
        style={{
          fontSize: 21,
          lineHeight: 1.7,
          color: "var(--nu-ink)",
          maxWidth: "52ch",
          ...(isEven ? { marginLeft: "auto" } : {}),
        }}
      >
        {p.body}
      </p>
      <a
        href={CALENDLY}
        target="_blank"
        rel="noopener noreferrer"
        className={`link-underline mt-6 inline-flex items-center gap-2 ${r(4)}`}
        data-testid={`pillar-cta-${i}`}
      >
        {p.cta} <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

const Pillars = () => {
  return (
    <section className="section bg-pearl bg-grain-light" data-testid="section-pillars">
      <div className="container-nu">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {pillars.map((p, i) => (
            <PillarCard key={i} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
