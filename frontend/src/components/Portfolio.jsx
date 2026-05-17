import React from "react";
import { ArrowUpRight } from "lucide-react";

// Curated editorial-style photography from Unsplash.
const items = [
  {
    title: "Capitol Health Initiative",
    tag: "Public Affairs",
    img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Foundry Industries — Earnings Wire",
    tag: "Corporate",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Tribune Healthcare — Bilingual Rollout",
    tag: "Spanish-Language",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Liberty Foundation — Policy Launch",
    tag: "Government",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Atlas Energy — Regional Press Tour",
    tag: "Broadcast",
    img: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1200&q=70",
  },
  {
    title: "Heritage Civic Group — Community Series",
    tag: "Editorial",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=70",
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
            <div className="eyebrow" style={{ color: "#7FB7E8" }}>Coverage Portfolio</div>
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
            <a href="#contact" className="btn-pill btn-ghost-light" data-testid="portfolio-cta">
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
            >
              <img src={it.img} alt={it.title} loading="lazy" />
              <div className="portfolio-tile__overlay">
                <div className="eyebrow" style={{ color: "#7FB7E8" }}>{it.tag}</div>
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
