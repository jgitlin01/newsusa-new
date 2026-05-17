import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

/**
 * Scroll-controlled video hero — VIDEO ONLY.
 *
 * - Hero shell is ~280vh tall.
 * - Inner sticky video pins for the full shell, scrubbing
 *   video.currentTime directly from scroll progress (1:1).
 * - At the end of the shell, the sticky releases naturally and
 *   the video scrolls UP out of view. No headlines overlap the
 *   video — they live in their own section below this one.
 * - Reduced-motion / mobile fallback: autoplay loop muted.
 */

const VIDEO_URL_MP4 = `${process.env.PUBLIC_URL || ""}/media/newsusa-hero.mp4`;
const VIDEO_URL_WEBM = `${process.env.PUBLIC_URL || ""}/media/newsusa-hero.webm`;

const Hero = () => {
  const shellRef = useRef(null);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const evaluate = () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  return (
    <section
      ref={shellRef}
      className="hero-shell"
      data-testid="hero-scroll-video"
      id="top"
      style={{ height: fallback ? "100vh" : "300vh" }}
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

        <div className="hero-vignette" style={{ opacity: 0.55 }} />
        <div className="hero-grain" />

        {/* Brand chrome — minimal, never competes with H1 content */}
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
              opacity: 0.85,
            }}
          >
            Scroll to Explore
          </span>
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
