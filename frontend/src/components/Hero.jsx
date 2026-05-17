import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

/**
 * Scroll-controlled video hero.
 * - The video element is sticky inside a tall shell.
 * - As user scrolls through the shell, video.currentTime is mapped to scroll progress.
 * - Synced text cue points reveal/hide based on progress.
 * - Reduced motion / mobile fallback: video autoplays loop muted.
 */

const VIDEO_URL_MP4 = `${process.env.PUBLIC_URL || ""}/media/newsusa-hero.mp4`;
const VIDEO_URL_WEBM = `${process.env.PUBLIC_URL || ""}/media/newsusa-hero.webm`;

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

const Hero = () => {
  const shellRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fallback, setFallback] = useState(false);

  // Detect reduced motion / coarse pointer (mobile) / narrow viewport — fallback to autoplay loop.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const evaluate = () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      const isNarrow = window.innerWidth < 768;
      setFallback(prefersReduced || isCoarse || isNarrow);
    };
    evaluate();
    window.addEventListener("resize", evaluate);
    window.addEventListener("orientationchange", evaluate);
    return () => {
      window.removeEventListener("resize", evaluate);
      window.removeEventListener("orientationchange", evaluate);
    };
  }, []);

  // Load metadata
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => {
      setDuration(v.duration || 0);
      if (fallback) {
        v.loop = true;
        v.muted = true;
        v.play().catch(() => {});
      }
    };
    if (v.readyState >= 1) onMeta();
    v.addEventListener("loadedmetadata", onMeta);
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, [fallback]);

  // Direct 1:1 scroll-to-frame sync (no rAF easing). Each scroll position maps
  // exactly to a video frame so scrubbing feels physically connected to the
  // scroll wheel / trackpad.
  useEffect(() => {
    if (fallback) return;
    const v = videoRef.current;
    const shell = shellRef.current;
    if (!v || !shell) return;

    let rafPending = false;
    const update = () => {
      rafPending = false;
      const rect = shell.getBoundingClientRect();
      const total = shell.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      const d = duration || v.duration || 0;
      if (d > 0 && !Number.isNaN(d)) {
        const target = Math.min(d - 0.001, p * d);
        // Only assign if we have buffered enough — otherwise the assignment
        // is a no-op and the browser shows the last decoded frame.
        try {
          v.currentTime = target;
        } catch (e) {
          /* ignore */
        }
      }
    };

    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [duration, fallback]);

  // active cue index
  const cueIndex = Math.min(
    cues.length - 1,
    Math.floor(progress * cues.length * 0.999)
  );

  return (
    <section
      ref={shellRef}
      className="hero-shell"
      data-testid="hero-scroll-video"
      id="top"
      style={{ height: fallback ? "100vh" : "320vh" }}
    >
      <div className="hero-sticky">
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          preload="auto"
          autoPlay={fallback}
          loop={fallback}
          poster=""
          data-testid="hero-video-element"
        >
          <source src={VIDEO_URL_WEBM} type="video/webm" />
          <source src={VIDEO_URL_MP4} type="video/mp4" />
        </video>

        <div className="hero-vignette" />
        <div className="hero-grain" />

        {/* Top eyebrow + meta */}
        <div
          className="absolute top-[110px] left-0 right-0 px-6 md:px-14 z-[2] flex items-center justify-between"
          style={{ color: "rgba(255,255,255,0.85)" }}
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
            <span style={{ color: "#0068C2" }}>●</span> &nbsp; Earned Media Network — Est. 1987
          </span>
          <span
            className="hidden md:inline font-sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            Scroll to Explore
          </span>
        </div>

        {/* Cue text */}
        <div className="hero-content" data-testid="hero-cue-stack">
          {cues.map((c, i) => {
            const active = i === cueIndex;
            return (
              <div
                key={i}
                className="hero-cue"
                style={{
                  left: 0,
                  right: 0,
                  bottom: "12%",
                  paddingLeft: "inherit",
                  paddingRight: "inherit",
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translateY(0)"
                    : i < cueIndex
                    ? "translateY(-24px)"
                    : "translateY(24px)",
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
                  <h1
                    className="display"
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(48px, 9vw, 144px)",
                      lineHeight: 0.92,
                      maxWidth: "16ch",
                    }}
                  >
                    {c.title[0]}{" "}
                    <span className="display-italic" style={{ color: "#7FB7E8" }}>
                      {c.title[1]}
                    </span>
                  </h1>
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

        {/* Bottom-left chip */}
        <div
          className="absolute z-[3] flex items-center gap-3"
          style={{ left: 24, bottom: 64, color: "#FFFFFF" }}
        >
          <a href="#mission" className="btn-pill btn-primary" data-testid="hero-cta-explore">
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

        {/* Progress bar */}
        <div className="hero-progress" data-testid="hero-progress">
          <div
            className="hero-progress__bar"
            style={{ transform: `scaleX(${Math.max(0.02, progress)})` }}
          />
        </div>

        <div className="scroll-hint hidden md:block">
          <ArrowDown size={12} style={{ transform: "rotate(180deg)", marginBottom: 6 }} />
          Scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
