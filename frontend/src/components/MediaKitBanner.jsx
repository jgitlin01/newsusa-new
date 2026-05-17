import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const MediaKitBanner = () => {
  return (
    <section
      className="py-20 bg-patriot text-pearl relative overflow-hidden"
      data-testid="section-media-kit"
    >
      <div className="hero-grain" style={{ opacity: 0.2 }} />
      <div className="container-nu grid grid-cols-12 gap-8 items-center relative z-[1]">
        <div className="col-span-12 lg:col-span-7">
          <div className="eyebrow" style={{ color: "#7FB7E8" }}>
            Free for marketing leaders
          </div>
          <h2
            className="display mt-4"
            style={{
              color: "var(--nu-pearl)",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 1,
            }}
          >
            Want to know where your brand is{" "}
            <span className="display-italic" style={{ color: "#7FB7E8" }}>
              missing revenue?
            </span>
          </h2>
          <p
            className="font-sans mt-5"
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: 17,
              maxWidth: "56ch",
            }}
          >
            Get your free <strong style={{ color: "var(--nu-pearl)" }}>AI Authority Audit™</strong>:
            where you appear now across AI engines, where competitors beat you,
            and the best next moves to recover revenue from AI-driven buyers.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 font-sans text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Sparkles size={14} style={{ color: "#7FB7E8" }} /> Where you appear now
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Sparkles size={14} style={{ color: "#7FB7E8" }} /> Where competitors beat you
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <Sparkles size={14} style={{ color: "#7FB7E8" }} /> Best next moves
            </span>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 lg:items-end">
          <a
            href="https://newsusa.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary"
            style={{ background: "var(--nu-pearl)", color: "var(--nu-heritage)" }}
            data-testid="media-kit-download"
          >
            Get free AI audit at NewsUSA.ai <ArrowUpRight size={16} />
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
