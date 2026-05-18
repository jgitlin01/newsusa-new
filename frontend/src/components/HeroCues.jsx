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
    sub: "of businesses don't appear when prospects ask AI for recommendations. Your competitors are already building authority. Are you?",
  },
  {
    eyebrow: "AI Authority Engine™",
    title: ["Press that", "AI cites back"],
    sub: "Editorial placements engineered with the trust signals AI models rely on — appearing in newspapers, TV, and online, and surfaced when buyers ask AI who to trust.",
  },
  {
    eyebrow: "Be the source AI cites",
    title: ["The only", "AI Authority Network™"],
    sub: "40+ years of proven infrastructure. End-to-end campaigns that engineer real authority — not just visibility. The trusted source AI surfaces to your buyers.",
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
                style={{ color: "var(--nu-pearl)", fontSize: "clamp(52px, 9vw, 120px)", lineHeight: 0.95 }}
              >
                {c.title[0]}{" "}
                <span className="display-italic" style={{ color: "#7FB7E8" }}>
                  {c.title[1]}
                </span>
              </h2>
              <p
                className="font-sans mt-5"
                style={{ color: "rgba(255,255,255,0.78)", maxWidth: "44ch", fontSize: 21 }}
              >
                {c.sub}
              </p>
            </div>
          ))}
          <a
            href="https://calendly.com/rsmith-29/15min?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary self-start mt-6"
            data-testid="hero-cues-cta"
          >
            Book a Discovery Call <ArrowUpRight size={16} />
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
              fontSize: 14,
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
              fontSize: 14,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              opacity: cuesActive ? 1 : 0.45,
              transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {cuesActive
              ? `0${Math.min(3, cueIndex + 1)} / 03`
              : "Keep scrolling"}
          </span>
        </div>

        {/* Cue stack — per-element staggered entrance */}
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
            const exitUp = cuesActive && i < cueIndex;
            const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

            const childStyle = (delayMs) => ({
              opacity: active ? 1 : 0,
              transform: active
                ? "translateY(0)"
                : exitUp
                ? "translateY(-14px)"
                : "translateY(20px)",
              transition: active
                ? `opacity 0.5s ${ease} ${delayMs}ms, transform 0.55s ${ease} ${delayMs}ms`
                : `opacity 0.3s ${ease}, transform 0.35s ${ease}`,
              willChange: "opacity, transform",
            });

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "12%",
                  pointerEvents: active ? "auto" : "none",
                  zIndex: active ? 1 : 0,
                }}
                data-testid={`hero-cue-${i}`}
              >
                <div className="container-nu" style={{ padding: 0 }}>
                  <div
                    className="eyebrow"
                    style={{
                      ...childStyle(0),
                      color: "#7FB7E8",
                      marginBottom: 18,
                    }}
                  >
                    {c.eyebrow}
                  </div>
                  <h2
                    className="display"
                    style={{
                      ...childStyle(80),
                      color: "#FFFFFF",
                      fontSize: "clamp(60px, 10vw, 160px)",
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
                      ...childStyle(160),
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "clamp(19px, 1.75vw, 24px)",
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
            transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            pointerEvents: cuesActive ? "auto" : "none",
          }}
        >
          <a
            href="https://calendly.com/rsmith-29/15min?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary"
            data-testid="hero-cta-explore"
          >
            Book a Discovery Call
          </a>
          <a
            href="https://calendly.com/rsmith-29/15min?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-ghost-light hidden sm:inline-flex"
            data-testid="hero-cta-services"
          >
            See Our Placements
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
                display: "block",
                width: i === cueIndex && cuesActive ? 24 : 8,
                height: 2,
                borderRadius: 1,
                background:
                  i === cueIndex && cuesActive
                    ? "var(--nu-pearl)"
                    : "rgba(255,255,255,0.25)",
                transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCues;
