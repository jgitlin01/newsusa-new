import React from "react";
import {
  Newspaper,
  Radio,
  Tv,
  Globe2,
  Megaphone,
  Target,
  Zap,
  Search,
  ArrowUpRight,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const aiSuite = [
  {
    icon: Target,
    badge: "NewsUSA AI Media Targeting™",
    title: "Match placements to your best prospects",
    body:
      "Our proprietary AI analyzes your goals, audience profile, and competitive landscape, then matches your story to the exact media placements most likely to reach the buyers you want — before a single campaign dollar is spent.",
  },
  {
    icon: Zap,
    badge: "NewsUSA AI Citation Authority Builder™",
    title: "Get cited by AI — not just indexed",
    body:
      "Content optimization and third-party citation construction engineered to the trust signals ChatGPT, Gemini, and Perplexity rely on. We don't just place content — we architect the authority ecosystem that AI models surface to your buyers.",
  },
  {
    icon: Search,
    badge: "NewsUSA AI Authority Audit™",
    title: "Deep-dive competitor & gap analysis",
    body:
      "A comprehensive analysis of where your brand appears across all major LLMs, a side-by-side competitor comparison report, identification of content gaps, and specific article recommendations to close those gaps — delivered as an actionable campaign brief.",
  },
];

const services = [
  {
    icon: Newspaper,
    title: "Top-Tier Guaranteed Syndicated Placements",
    body:
      "Editorial-quality brand stories guaranteed across our network of 2,500+ daily newspapers, weekly publications, and digital news outlets — with a verified placement report for every campaign.",
  },
  {
    icon: Megaphone,
    title: "NewsUSA+ Earned Authority Program",
    body:
      "Our flagship monthly program. Story strategy, editorial writing, guaranteed syndication, AI citation optimization, and monthly performance reporting — one accountable engagement.",
  },
  {
    icon: Tv,
    title: "Broadcast & SMT Placements",
    body:
      "Pre-produced video segments, B-roll packages, and satellite media tours placed with regional and national television affiliates — guaranteed airings, verified logs.",
  },
  {
    icon: Radio,
    title: "Radio Network Placements",
    body:
      ":60 and :30 audio placements distributed across 1,800+ stations, with verified airplay logs delivered post-campaign.",
  },
  {
    icon: Globe2,
    title: "Digital & Online Placements",
    body:
      "Native editorial placements on local news websites, regional portals, and vertical publishers — indexed, archived, and crawled by AI engines for maximum citation potential.",
  },
  {
    icon: Newspaper,
    title: "Bilingual & Spanish-Language Placements",
    body:
      "Full-service Spanish-language editorial with bilingual writers and guaranteed placement to Hispanic-targeted print, digital, and broadcast outlets.",
  },
];

const Services = () => {
  const [headerRef, headerVisible] = useReveal({ threshold: 0.1 });
  const [aiRef, aiVisible] = useReveal({ threshold: 0.1 });
  const [svcRef, svcVisible] = useReveal({ threshold: 0.08 });
  const [bannerRef, bannerVisible] = useReveal({ threshold: 0.2 });

  const r = (vis, d) => `reveal ${vis ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--nu-space)" }}
      data-testid="section-services"
    >
      <div className="container-nu">
        <div ref={headerRef} className="grid grid-cols-12 gap-6 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className={`section-label mb-2 ${r(headerVisible, 1)}`}>002 / Services</div>
            <div className={`eyebrow ${r(headerVisible, 1)}`}>What we deliver</div>
            <h2
              className={`display mt-4 ${r(headerVisible, 2)}`}
              style={{ fontSize: "clamp(52px, 6.5vw, 100px)", lineHeight: 1 }}
            >
              Top-Tier Placements.{" "}
              <span className="display-italic">100% Guaranteed.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <p
              className={`font-sans ${r(headerVisible, 3)}`}
              style={{ color: "var(--nu-muted)", fontSize: 20, maxWidth: 480, marginLeft: "auto" }}
            >
              The only AI Authority Network with 40+ years of proven syndication
              infrastructure — editorial strategists, broadcast producers, and a
              proprietary AI stack operating as one team.
            </p>
          </div>
        </div>

        {/* AI Suite */}
        <div ref={aiRef} className="mb-6">
          <div className={`eyebrow mb-5 ${r(aiVisible, 1)}`} style={{ color: "var(--nu-union)" }}>
            The NewsUSA AI Suite
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aiSuite.map((p, i) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.badge}
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`svc-card ${r(aiVisible, i + 2)}`}
                  data-testid={`ai-product-${i}`}
                  style={{ minHeight: 320, textDecoration: "none" }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 flex items-center justify-center rounded-sm"
                      style={{
                        background: "rgba(0,104,194,0.08)",
                        color: "var(--nu-liberty)",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="svc-card__num">{p.badge}</span>
                  </div>
                  <h3
                    className="display"
                    style={{
                      fontSize: 30,
                      lineHeight: 1.2,
                      fontWeight: 700,
                      color: "var(--nu-heritage)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: 18, color: "var(--nu-ink)", lineHeight: 1.6 }}
                  >
                    {p.body}
                  </p>
                  <span className="svc-card__arrow inline-flex items-center gap-2 font-sans text-sm font-medium">
                    Book a discovery call <ArrowUpRight size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Syndicated services */}
        <div ref={svcRef} className="mt-16">
          <div className={`eyebrow mb-5 ${r(svcVisible, 1)}`} style={{ color: "var(--nu-union)" }}>
            Guaranteed Syndicated Placements
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.title}
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`svc-card ${r(svcVisible, Math.min(i + 2, 8))}`}
                  data-testid={`service-card-${i}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 flex items-center justify-center rounded-sm"
                      style={{
                        background: "rgba(0,104,194,0.08)",
                        color: "var(--nu-liberty)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="svc-card__num">/{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3
                    className="display"
                    style={{
                      fontSize: 28,
                      lineHeight: 1.2,
                      fontWeight: 700,
                      color: "var(--nu-heritage)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: 18, color: "var(--nu-ink)", lineHeight: 1.6 }}
                  >
                    {s.body}
                  </p>
                  <span className="svc-card__arrow inline-flex items-center gap-2 font-sans text-sm font-medium">
                    Book a discovery call <ArrowUpRight size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <a
          ref={bannerRef}
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className={`svc-card mt-8 block lg:flex items-center justify-between reveal-scale ${bannerVisible ? "reveal--visible" : ""}`}
          data-testid="service-cta-banner"
          style={{
            background: "var(--nu-heritage)",
            color: "var(--nu-pearl)",
            borderColor: "var(--nu-heritage)",
            textDecoration: "none",
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: "#7FB7E8" }}>
              Five categories. One network.
            </div>
            <h3 className="display mt-3" style={{ color: "var(--nu-pearl)", fontSize: 40 }}>
              Consumer · Tech · Finance · Health · Professional
            </h3>
            <p className="font-sans mt-2" style={{ color: "rgba(255,255,255,0.82)", fontSize: 19 }}>
              Top-tier guaranteed syndicated placements across the media channels
              — and AI engines — your buyers already trust. 32,000+ campaigns delivered since 1987.
            </p>
          </div>
          <span className="btn-pill btn-ghost-light mt-6 lg:mt-0">
            Book Discovery Call <ArrowUpRight size={16} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Services;
