import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const MediaKitBanner = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const r = (d) => `reveal ${visible ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      ref={ref}
      className="py-20 bg-patriot text-pearl relative overflow-hidden"
      data-testid="section-media-kit"
    >
      <div className="hero-grain" style={{ opacity: 0.2 }} />
      <div className="container-nu grid grid-cols-12 gap-8 items-center relative z-[1]">
        <div className="col-span-12 lg:col-span-7">
          <div className={`eyebrow ${r(1)}`} style={{ color: "#7FB7E8" }}>
            Free for marketing leaders
          </div>
          <h2
            className={`display mt-4 ${r(2)}`}
            style={{
              color: "var(--nu-pearl)",
              fontSize: "clamp(50px, 6.5vw, 100px)",
              lineHeight: 1,
            }}
          >
            Want to know where your brand is{" "}
            <span className="display-italic" style={{ color: "#7FB7E8" }}>
              missing revenue?
            </span>
          </h2>
          <p
            className={`font-sans mt-5 ${r(3)}`}
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: 21,
              maxWidth: "56ch",
            }}
          >
            Book a free 15-minute discovery call and get your{" "}
            <strong style={{ color: "var(--nu-pearl)" }}>NewsUSA AI Authority Audit™</strong>:
            a deep-dive competitor comparison, content gap analysis, and specific
            placement recommendations to make your brand the source AI cites.
          </p>
          <div className={`mt-7 flex flex-wrap gap-3 font-sans text-sm ${r(4)}`} style={{ color: "rgba(255,255,255,0.78)" }}>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Sparkles size={14} style={{ color: "#7FB7E8" }} /> Competitor comparison report
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Sparkles size={14} style={{ color: "#7FB7E8" }} /> Content gap analysis
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Sparkles size={14} style={{ color: "#7FB7E8" }} /> Specific article recommendations
            </span>
          </div>
        </div>
        <div className={`col-span-12 lg:col-span-5 flex flex-col gap-3 lg:items-end ${r(5)}`}>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary"
            style={{ background: "var(--nu-pearl)", color: "var(--nu-heritage)" }}
            data-testid="media-kit-download"
          >
            Book free discovery call <ArrowUpRight size={16} />
          </a>
          <a
            href="tel:+17035088700"
            className="btn-pill btn-ghost-light"
            data-testid="media-kit-call"
          >
            Or call 703-508-8700
          </a>
          <span
            className="font-sans text-xs mt-2"
            style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Reply within one business day
          </span>
        </div>
      </div>
    </section>
  );
};

export default MediaKitBanner;
