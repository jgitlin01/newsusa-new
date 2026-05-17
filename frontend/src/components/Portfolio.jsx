import React from "react";
import { ArrowUpRight } from "lucide-react";

// Editorial graphics extracted from the NewsUSA pitch deck
const PPT = `${process.env.PUBLIC_URL || ""}/media/ppt`;

const items = [
  {
    title: "AI Authority Engine™ — Citation Optimization",
    tag: "AI Discovery",
    img: `${PPT}/08-ai.jpg`,
  },
  {
    title: "Results — $50M+ Tracked Sales Growth",
    tag: "Case Study",
    img: `${PPT}/04-graph.png`,
  },
  {
    title: "What We Build — 5-Stage Visibility Stack",
    tag: "Methodology",
    img: `${PPT}/02-build.png`,
  },
  {
    title: "Consumer Brand — National Editorial Rollout",
    tag: "Consumer",
    img: `${PPT}/10-consumer.jpg`,
  },
  {
    title: "Why Clients Trust NewsUSA — 32,000+ Campaigns",
    tag: "Network",
    img: `${PPT}/03-trust.png`,
  },
  {
    title: "Tech Brand — Pre-Launch Authority Campaign",
    tag: "Tech",
    img: `${PPT}/11-tech.jpg`,
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section"
      style={{ background: "var(--nu-constitution)" }}
      data-testid="section-portfolio"
    >
      <div className="container-nu">
        <div className="grid grid-cols-12 gap-6 items-end mb-14">
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow" style={{ color: "#7FB7E8" }}>
              Coverage Portfolio
            </div>
            <h2
              className="display mt-4"
              style={{
                color: "var(--nu-pearl)",
                fontSize: "clamp(44px, 6vw, 92px)",
                lineHeight: 0.98,
              }}
            >
              Stories that{" "}
              <span className="display-italic" style={{ color: "#7FB7E8" }}>
                made the news
              </span>
              .
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <a
              href="#contact"
              className="btn-pill btn-ghost-light"
              data-testid="portfolio-cta"
            >
              See all coverage <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <a
              key={i}
              href="#contact"
              className="portfolio-tile group"
              data-testid={`portfolio-tile-${i}`}
              style={{ background: "var(--nu-heritage)" }}
            >
              <img src={it.img} alt={it.title} loading="lazy" />
              <div className="portfolio-tile__overlay">
                <div className="eyebrow" style={{ color: "#7FB7E8" }}>
                  {it.tag}
                </div>
                <h3
                  className="display mt-2"
                  style={{
                    color: "var(--nu-pearl)",
                    fontSize: 24,
                    lineHeight: 1.15,
                    fontWeight: 700,
                  }}
                >
                  {it.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
