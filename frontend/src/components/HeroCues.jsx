import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Headline reveal section — comes AFTER the video scrub hero.
 *
 * Plays only once the video hero has fully scrolled out of frame.
 * Sticky inner area shows three editorial cues one by one as the
 * user scrolls through this section's own ~300vh height.
 *
 *   [ 0–8%  ]   buffer — empty stage, no headline yet
 *   [ 8–100% ]  three cues evenly distributed; each fades in / out
 *
 * On reduced-motion / mobile: collapses to a single static panel.
 */

const cues = [
  {
    eyebrow: "AI is rewriting buying decisions",
    title: ["88%", "invisible"],
    sub: "of businesses don't appear when prospects ask AI for recommendations.",
  },
  {
    eyebrow: "Earned Media, AI-Optimized",
    title: ["Press coverage that", "AI cites back"],
    sub: "Editorial placements that authoritatively appear in newspapers, on TV, online — and in the AI answers your buyers are already reading.",
  },
  {
    eyebrow: "Founded by Rick Smith — Since 1987",
    title: ["32,000+ campaigns.", "One network."],
    sub: "NewsUSA puts your brand in front of the buyers — and the AI models — that decide.",
  },
];

const BUFFER = 0.08;

const HeroCues = () => {
  const shellRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const evaluate = () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isNarrow = window.innerWidth < 768;
      setReduced(prefersReduced || isNarrow);
    };
    evaluate();
    window.addEventListener("resize", evaluate);
    return () => window.removeEventListener("resize", evaluate);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const shell = shellRef.current;
    if (!shell) return;

    let raf = false;
    const update = () => {
      raf = false;
      const rect = shell.getBoundingClientRect();
      const total = shell.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    const onScroll = () => {
      if (raf) return;
      raf = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  // After the buffer, distribute progress across the cues.
  const cueP = Math.max(0, (progress - BUFFER) / (1 - BUFFER));
  const cueIndex = Math.min(cues.length - 1, Math.floor(cueP * cues.length * 0.999));
  const cuesActive = cueP > 0 || reduced;

  // For the reduced-motion fallback, render a single stacked panel with all cues.
  if (reduced) {
    return (
      <section
        className="bg-constitution"
        style={{ background: "var(--nu-constitution)", color: "var(--nu-pearl)" }}
        data-testid="section-hero-cues"
        id="hero-cues"
      >
        <div className="container-nu py-24 flex flex-col gap-16">
          {cues.map((c, i) => (
            <div key={i} data-testid={`hero-cue-${i}`}>
              <div className="eyebrow" style={{ color: "#7FB7E8" }}>
                {c.eyebrow}
              </div>
              <h2
                className="display mt-3"
                style={{ color: "var(--nu-pearl)", fontSize: "clamp(40px, 8vw, 96px)", lineHeight: 0.95 }}
              >
                {c.title[0]}{" "}
                <span className="display-italic" style={{ color: "#7FB7E8" }}>
                  {c.title[1]}
                </span>
              </h2>
              <p
                className="font-sans mt-5"
                style={{ color: "rgba(255,255,255,0.78)", maxWidth: "44ch", fontSize: 17 }}
              >
                {c.sub}
              </p>
            </div>
          ))}
          <a
            href="#mission"
            className="btn-pill btn-primary self-start mt-6"
            data-testid="hero-cues-cta"
          >
            Explore the Network <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={shellRef}
      className="relative"
      style={{
        height: "330vh",
        background: "var(--nu-constitution)",
      }}
      data-testid="section-hero-cues"
      id="hero-cues"
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          color: "var(--nu-pearl)",
        }}
      >
        {/* Subtle grain texture for editorial feel */}
        <div className="hero-grain" style={{ opacity: 0.35 }} />

        {/* Ambient lighting */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 40% at 18% 75%, rgba(0,104,194,0.22) 0%, rgba(0,104,194,0) 70%), radial-gradient(50% 35% at 82% 25%, rgba(12,77,140,0.18) 0%, rgba(12,77,140,0) 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top eyebrow */}
        <div
          className="absolute top-[110px] left-0 right-0 px-6 md:px-14 z-[2] flex items-center justify-between"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#0068C2" }}>●</span> &nbsp; The Conversation
            Continues
          </span>
          <span
            className="hidden md:inline font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              opacity: cuesActive ? 1 : 0.45,
              transition: "opacity 0.5s ease",
            }}
          >
            {cuesActive
              ? `0${Math.min(3, cueIndex + 1)} / 03`
              : "Keep scrolling"}
          </span>
        </div>

        {/* Cue stack */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0 24px 80px",
          }}
        >
          {cues.map((c, i) => {
            const active = cuesActive && i === cueIndex;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "12%",
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translateY(0)"
                    : i < cueIndex
                    ? "translateY(-30px)"
                    : "translateY(30px)",
                  transition: "opacity 0.6s ease, transform 0.7s ease",
                  willChange: "opacity, transform",
                }}
                data-testid={`hero-cue-${i}`}
              >
                <div className="container-nu" style={{ padding: 0 }}>
                  <div
                    className="eyebrow"
                    style={{ color: "#7FB7E8", marginBottom: 18 }}
                  >
                    {c.eyebrow}
                  </div>
                  <h2
                    className="display"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(48px, 9vw, 144px)",
                      lineHeight: 0.92,
                      maxWidth: "16ch",
                    }}
                  >
                    {c.title[0]}{" "}
                    <span
                      className="display-italic"
                      style={{ color: "#7FB7E8" }}
                    >
                      {c.title[1]}
                    </span>
                  </h2>
                  <p
                    className="font-sans mt-6"
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "clamp(15px, 1.5vw, 19px)",
                      maxWidth: "44ch",
                    }}
                  >
                    {c.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div
          className="absolute z-[3] flex items-center gap-3"
          style={{
            left: 24,
            bottom: 64,
            color: "#FFFFFF",
            opacity: cuesActive ? 1 : 0,
            transform: cuesActive ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            pointerEvents: cuesActive ? "auto" : "none",
          }}
        >
          <a
            href="#mission"
            className="btn-pill btn-primary"
            data-testid="hero-cta-explore"
          >
            Explore the Network
          </a>
          <a
            href="#services"
            className="btn-pill btn-ghost-light hidden sm:inline-flex"
            data-testid="hero-cta-services"
          >
            Our Services
          </a>
        </div>

        {/* Cue progress dots */}
        <div
          className="absolute z-[3] hidden md:flex flex-col gap-3"
          style={{ right: 32, top: "50%", transform: "translateY(-50%)" }}
          data-testid="hero-cue-progress"
        >
          {cues.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === cueIndex && cuesActive ? 24 : 8,
                height: 2,
                background:
                  i === cueIndex && cuesActive
                    ? "var(--nu-pearl)"
                    : "rgba(255,255,255,0.25)",
                transition: "width 0.4s ease, background 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCues;
