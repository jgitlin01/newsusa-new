import React from "react";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";
const PPT = `${process.env.PUBLIC_URL || ""}/media/ppt`;

const stats = [
  { value: "32,000+", label: "Campaigns Delivered" },
  { value: "2,500+", label: "News Sites & Outlets" },
  { value: "170M+", label: "Monthly Readers" },
  { value: "$50M+", label: "Tracked Sales Growth" },
  { value: "38 yrs", label: "On the Wire" },
];

const items = [
  {
    title: "88% of Businesses Are Invisible to AI Recommendations",
    tag: "AI Discovery",
    img: `${PPT}/01-hero.jpg`,
    stat: "88%",
    body: "When prospects ask ChatGPT, Gemini, or Perplexity who to trust — most brands never appear. NewsUSA builds the authority that gets you cited.",
  },
  {
    title: "Press Release Distribution to 2,500+ News Sites",
    tag: "Content Syndication",
    img: `${PPT}/06-coverage.jpg`,
    stat: "2,500+",
    body: "Guaranteed editorial placements across daily newspapers, digital outlets, and news networks nationwide.",
  },
  {
    title: "$50M+ in Tracked Client Sales Growth",
    tag: "Proven Results",
    img: `${PPT}/04-graph.png`,
    stat: "$50M+",
    body: "Monthly national features drive measurable retail and direct-response revenue clients can actually trace back.",
  },
  {
    title: "NewsUSA AI Authority Engine™",
    tag: "AI Technology",
    img: `${PPT}/08-ai.jpg`,
    stat: null,
    body: "Strategic distribution, metadata optimization, and authoritative placements engineered for AI citation across ChatGPT, Gemini, and Perplexity.",
  },
  {
    title: "32,000+ Campaigns. Trusted Since 1987.",
    tag: "Track Record",
    img: `${PPT}/03-trust.png`,
    stat: "32K+",
    body: "Decades of media relationships and proven execution across every major vertical — consumer, tech, finance, health, and professional.",
  },
  {
    title: "Broadcast, TV & Radio Media Placement",
    tag: "Broadcast",
    img: `${PPT}/07-network.jpg`,
    stat: null,
    body: "Satellite media tours, pre-produced video segments, and radio syndication across 1,800+ stations — with verified placement logs.",
  },
  {
    title: "Consumer Brand Campaigns — National Syndicated Rollout",
    tag: "Consumer",
    img: `${PPT}/10-consumer.jpg`,
    stat: null,
    body: "Editorial-quality brand stories guaranteed across 2,500+ consumer print and digital publications with a placement report for every campaign.",
  },
  {
    title: "Tech & B2B AI Authority Campaigns",
    tag: "Tech / B2B",
    img: `${PPT}/11-tech.jpg`,
    stat: null,
    body: "Pre-launch and ongoing AI citation campaigns for technology brands seeking measurable B2B buyer trust.",
  },
  {
    title: "12,600+ Inbound Calls Driven by Syndication",
    tag: "Response Results",
    img: `${PPT}/05-results.jpg`,
    stat: "12,600+",
    body: "Strategic syndicated campaigns generate trackable inbound inquiry volume — real business, not just impressions.",
  },
];

const Portfolio = () => {
  // Single ref on the section — triggers once 5% is visible, pre-fires 100px before entry
  const [sectionRef, sectionVisible] = useReveal({
    threshold: 0.05,
    rootMargin: "0px 0px 100px 0px",
  });

  const r = (d) =>
    `reveal ${sectionVisible ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section"
      style={{ background: "var(--nu-constitution)" }}
      data-testid="section-portfolio"
    >
      <div className="container-nu">

        {/* ── Header ── */}
        <div className="grid grid-cols-12 gap-6 items-end mb-14">
          <div className="col-span-12 lg:col-span-8">
            <div
              className={`section-label mb-2 ${r(1)}`}
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              004 / Portfolio
            </div>
            <div className={`eyebrow ${r(1)}`} style={{ color: "#7FB7E8" }}>
              Coverage Portfolio
            </div>
            <h2
              className={`display mt-4 ${r(2)}`}
              style={{
                color: "var(--nu-pearl)",
                fontSize: "clamp(55px, 7.5vw, 115px)",
                lineHeight: 0.98,
              }}
            >
              Placements that{" "}
              <span className="display-italic" style={{ color: "#7FB7E8" }}>
                made the news
              </span>
              .
            </h2>
            <p
              className={`font-sans mt-6 ${r(3)}`}
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "clamp(17px, 1.6vw, 22px)",
                maxWidth: "52ch",
                lineHeight: 1.6,
              }}
            >
              32,000+ campaigns delivered across consumer, tech, finance, health,
              and professional verticals — guaranteed placements, verified logs,
              and measurable results since 1987.
            </p>
          </div>
          <div className={`col-span-12 lg:col-span-4 lg:text-right ${r(3)}`}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-ghost-light"
              data-testid="portfolio-cta"
            >
              Book a Discovery Call <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px mb-14 overflow-hidden rounded-sm ${r(4)}`}
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center py-10 px-4"
              style={{ background: "var(--nu-heritage)" }}
            >
              <div
                className="display"
                style={{
                  fontSize: "clamp(30px, 4vw, 56px)",
                  color: "#7FB7E8",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-sans mt-2"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── 9-tile grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <a
              key={i}
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-tile group"
              data-testid={`portfolio-tile-${i}`}
              style={{
                background: "var(--nu-heritage)",
                textDecoration: "none",
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                transition: `opacity 0.65s ease ${i * 0.07}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s`,
              }}
            >
              <img src={it.img} alt={it.title} loading="lazy" />
              <div
                className="portfolio-tile__overlay"
                style={{ padding: "28px 28px 32px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <div
                    className="eyebrow"
                    style={{ color: "#7FB7E8", fontSize: 13 }}
                  >
                    {it.tag}
                  </div>
                  {it.stat && (
                    <div
                      className="display"
                      style={{
                        color: "#7FB7E8",
                        fontSize: "clamp(22px, 2.8vw, 38px)",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {it.stat}
                    </div>
                  )}
                </div>
                <h3
                  className="display mt-3"
                  style={{
                    color: "var(--nu-pearl)",
                    fontSize: "clamp(20px, 2vw, 28px)",
                    lineHeight: 1.15,
                    fontWeight: 700,
                  }}
                >
                  {it.title}
                </h3>
                <p
                  className="font-sans mt-3"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: 16,
                    lineHeight: 1.55,
                  }}
                >
                  {it.body}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* ── Free AI Audit CTA ── */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-10 lg:p-14"
          style={{
            background:
              "linear-gradient(135deg, var(--nu-heritage) 0%, var(--nu-union) 55%, var(--nu-liberty) 100%)",
            borderRadius: 4,
            textDecoration: "none",
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "scale(1) translateY(0)" : "scale(0.97) translateY(16px)",
            transition: "opacity 0.65s ease 0.65s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.65s",
          }}
          data-testid="portfolio-audit-cta"
        >
          <div style={{ maxWidth: "58ch" }}>
            <div className="eyebrow" style={{ color: "#7FB7E8" }}>
              Free AI Authority Audit — See Where You Stand
            </div>
            <h3
              className="display mt-4"
              style={{
                color: "var(--nu-pearl)",
                fontSize: "clamp(28px, 3.5vw, 56px)",
                lineHeight: 1.05,
              }}
            >
              Find out where your brand is missing revenue — and which competitors
              AI recommends instead.
            </h3>
            <p
              className="font-sans mt-4"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: 1.6,
              }}
            >
              We'll show you where you appear (and don't) across ChatGPT, Gemini,
              and Perplexity — plus specific content gaps and a 15-minute strategy
              call to map your path to AI authority.
            </p>
          </div>
          <span
            className="btn-pill btn-ghost-light"
            style={{ whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Get Free Audit <ArrowUpRight size={18} />
          </span>
        </a>

      </div>
    </section>
  );
};

export default Portfolio;
