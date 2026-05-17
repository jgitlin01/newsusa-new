import React from "react";
import {
  Newspaper,
  Radio,
  Tv,
  Globe2,
  Megaphone,
  Languages,
  Landmark,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Newspaper,
    title: "Press Release Distribution",
    body:
      "Editorial-grade releases distributed through our guaranteed network of daily newspapers, weekly papers, and trade publications. Every release ships with a verified clip report.",
  },
  {
    icon: Megaphone,
    title: "NewsUSA+",
    body:
      "Our flagship earned-media program. Story design, copywriting, syndication, and monthly placement reporting — bundled into a single, accountable engagement.",
  },
  {
    icon: FileText,
    title: "NewsUSA&",
    body:
      "Targeted marketing services that complement earned coverage: paid amplification, owned-channel activation, and integrated campaign reporting.",
  },
  {
    icon: Tv,
    title: "Broadcast & TV",
    body:
      "Pre-produced video segments, B-roll packages, and ready-to-air SMTs distributed to regional and national television affiliates with guaranteed minimum runs.",
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
      "Native editorial placements on local news websites, regional portals, and vertical-specific publishers — indexed, archived, and trackable.",
  },
  {
    icon: Languages,
    title: "Bilingual & Spanish-Language",
    body:
      "Full-service Spanish-language editorial program with bilingual writers, translators, and distribution to Hispanic-targeted print, digital, and broadcast outlets.",
  },
  {
    icon: Landmark,
    title: "Public Affairs",
    body:
      "Earned-media programs for government partners, civic foundations, and policy organizations. Compliant, transparent, and built for community-level reach.",
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
            <div className="eyebrow">Our Services</div>
            <h2
              className="display mt-4"
              style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1 }}
            >
              An earned-media program for{" "}
              <span className="display-italic">every audience</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <p
              className="font-sans"
              style={{ color: "var(--nu-muted)", fontSize: 16, maxWidth: 460, marginLeft: "auto" }}
            >
              Editorial strategists, syndication operators, and broadcast
              producers — coordinated to deliver coverage your audience already
              trusts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  <span className="svc-card__num">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
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

        <a
          href="#contact"
          className="svc-card mt-5 block lg:flex items-center justify-between"
          data-testid="service-cta-banner"
          style={{ background: "var(--nu-heritage)", color: "var(--nu-pearl)", borderColor: "var(--nu-heritage)" }}
        >
          <div>
            <div className="eyebrow" style={{ color: "#7FB7E8" }}>We shape it, you make it happen</div>
            <h3 className="display mt-3" style={{ color: "var(--nu-pearl)", fontSize: 32 }}>
              Tell us about your next announcement.
            </h3>
            <p className="font-sans mt-2" style={{ color: "rgba(255,255,255,0.78)", fontSize: 15 }}>
              Our team will reply within one business day with a coverage plan
              and an estimated placement reach.
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
