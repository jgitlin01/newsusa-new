import React from "react";
import {
  Newspaper,
  Radio,
  Tv,
  Globe2,
  Megaphone,
  Brain,
  Sparkles,
  LineChart,
  ArrowUpRight,
} from "lucide-react";

const aiSuite = [
  {
    icon: Brain,
    badge: "MediaMatch AI™",
    title: "Smarter media placement",
    body:
      "Our AI engine reads your goals, audience, and competitors, then matches your story to the placements most likely to convert visibility into pipeline. It turns discovery calls into strategic media recommendations — in minutes, not weeks.",
  },
  {
    icon: Sparkles,
    badge: "AI Authority Engine™",
    title: "Get cited by AI models",
    body:
      "Strategic distribution, metadata optimization, and authoritative editorial placements engineered to increase the visibility and citation potential of your content across ChatGPT, Gemini, Perplexity, and the wider AI-driven media landscape.",
  },
  {
    icon: LineChart,
    badge: "NewsFLOW Intelligence™",
    title: "Transparent reporting",
    body:
      "Monitor, measure, and optimize every campaign in one system: placement proof, performance insights, AI-citation tracking, and clear ROI — delivered continuously, not in a closing deck.",
  },
];

const services = [
  {
    icon: Newspaper,
    title: "Press Release Distribution",
    body:
      "Editorial-grade releases distributed through our guaranteed network of daily newspapers, weekly papers, and trade publications — with a verified clip report for every campaign.",
  },
  {
    icon: Megaphone,
    title: "NewsUSA+ Earned Media",
    body:
      "Our flagship program. Story design, copywriting, syndication, and monthly placement reporting — bundled into a single accountable engagement.",
  },
  {
    icon: Tv,
    title: "Broadcast & SMT",
    body:
      "Pre-produced video segments, B-roll packages, and ready-to-air satellite media tours distributed to regional and national television affiliates.",
  },
  {
    icon: Radio,
    title: "Radio Network",
    body:
      ":60 and :30 audio releases distributed across 1,800+ stations, with verified airplay logs delivered post-campaign.",
  },
  {
    icon: Globe2,
    title: "Digital Placements",
    body:
      "Native editorial placements on local news websites, regional portals, and vertical publishers — indexed, archived, and crawled by AI engines.",
  },
  {
    icon: Newspaper,
    title: "Bilingual & Spanish-Language",
    body:
      "Full-service Spanish-language editorial with bilingual writers, translators, and distribution to Hispanic-targeted print, digital, and broadcast outlets.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--nu-space)" }}
      data-testid="section-services"
    >
      <div className="container-nu">
        <div className="grid grid-cols-12 gap-6 items-end mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow">What we build</div>
            <h2
              className="display mt-4"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1 }}
            >
              Content. Distribution.{" "}
              <span className="display-italic">AI discovery</span>. Buyer trust. Leads.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <p
              className="font-sans"
              style={{ color: "var(--nu-muted)", fontSize: 16, maxWidth: 480, marginLeft: "auto" }}
            >
              An AI-enhanced earned-media distribution ecosystem. Editorial
              strategists, syndication operators, broadcast producers, and a
              proprietary AI stack — coordinated as one team.
            </p>
          </div>
        </div>

        {/* AI Suite — 3 flagship products */}
        <div className="mb-6">
          <div className="eyebrow mb-5" style={{ color: "var(--nu-union)" }}>
            The NewsUSA AI Suite
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aiSuite.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.badge}
                  className="svc-card"
                  data-testid={`ai-product-${i}`}
                  style={{ minHeight: 320 }}
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
                      fontSize: 24,
                      lineHeight: 1.2,
                      fontWeight: 700,
                      color: "var(--nu-heritage)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: 14.5, color: "var(--nu-ink)", lineHeight: 1.6 }}
                  >
                    {p.body}
                  </p>
                  <span className="svc-card__arrow inline-flex items-center gap-2 font-sans text-sm font-medium">
                    Learn more <ArrowUpRight size={16} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        {/* Traditional editorial services */}
        <div className="mt-16">
          <div className="eyebrow mb-5" style={{ color: "var(--nu-union)" }}>
            Editorial & Distribution
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="svc-card"
                  data-testid={`service-card-${i}`}
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
                      fontSize: 22,
                      lineHeight: 1.2,
                      fontWeight: 700,
                      color: "var(--nu-heritage)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: 14.5, color: "var(--nu-ink)", lineHeight: 1.6 }}
                  >
                    {s.body}
                  </p>
                  <span className="svc-card__arrow inline-flex items-center gap-2 font-sans text-sm font-medium">
                    Learn more <ArrowUpRight size={16} />
                  </span>
                </article>
              );
            })}
          </div>
        </div>

        <a
          href="#contact"
          className="svc-card mt-8 block lg:flex items-center justify-between"
          data-testid="service-cta-banner"
          style={{
            background: "var(--nu-heritage)",
            color: "var(--nu-pearl)",
            borderColor: "var(--nu-heritage)",
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: "#7FB7E8" }}>
              Five categories. One network.
            </div>
            <h3 className="display mt-3" style={{ color: "var(--nu-pearl)", fontSize: 32 }}>
              Consumer · Tech · Finance · Health · Professional
            </h3>
            <p className="font-sans mt-2" style={{ color: "rgba(255,255,255,0.82)", fontSize: 15 }}>
              Visibility across the media channels — and AI engines — your
              buyers already trust. 32,000+ campaigns delivered since 1987.
            </p>
          </div>
          <span className="btn-pill btn-ghost-light mt-6 lg:mt-0">
            Start a brief <ArrowUpRight size={16} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Services;
