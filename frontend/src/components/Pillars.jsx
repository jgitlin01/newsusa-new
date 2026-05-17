import React from "react";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    eyebrow: "01 — Engaging Coverage",
    title: "Choose meaningful placement",
    body:
      "As an earned-media network, NewsUSA designs press programs engineered for audience attention — measured in real readership and broadcast minutes, not vanity impressions. We turn dense announcements into editorial-grade stories that local and trade outlets want to publish.",
    cta: { label: "Capture attention", href: "#contact" },
  },
  {
    eyebrow: "02 — Brand Image",
    title: "Elevate your reputation",
    body:
      "Standing out in a saturated news cycle requires more than a press release. We craft third-party-credible narratives, then deploy them through outlets your audience already trusts — strengthening recall, recognition, and the long-term equity of your brand.",
    cta: { label: "Stand out", href: "#contact" },
  },
  {
    eyebrow: "03 — Save Time",
    title: "Reclaim your week",
    body:
      "Stop chasing journalists. Our editorial, distribution, and audit teams handle the entire lifecycle of an earned-media campaign — from story design and copywriting through syndication and clip reporting — so your team can focus on what only your team can do.",
    cta: { label: "See how it works", href: "#methodology" },
  },
  {
    eyebrow: "04 — Confidence",
    title: "Show up ready",
    body:
      "Make every high-stakes announcement a moment of clarity. Our editorial consultants, project leads, and account directors prepare you with placement strategy, expected reach, and rehearsed talking points so that the day-of feels routine, not risky.",
    cta: { label: "Discover training", href: "#contact" },
  },
];

const Pillars = () => {
  return (
    <section
      className="section bg-pearl"
      data-testid="section-pillars"
    >
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
