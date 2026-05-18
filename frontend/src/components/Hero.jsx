import React, { useEffect, useRef, useCallback } from "react";

/**
 * Canvas-based scroll-driven hero.
 *
 * 192 WebP frames pre-loaded into Image objects, drawn to <canvas>
 * on scroll. This eliminates the choppiness caused by video.currentTime
 * scrubbing, which browsers rate-limit and buffer unpredictably.
 *
 * - 400vh shell gives full video playback before any other content.
 * - No text overlaid — pure cinematic scroll experience.
 * - Frame index advances 1:1 with scroll progress.
 */

const FRAME_COUNT = 192;
const FRAME_BASE = `${process.env.PUBLIC_URL || ""}/frames/frame_`;

const Hero = () => {
  const shellRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef(new Array(FRAME_COUNT).fill(null));
  const currentFrameRef = useRef(0);
  const progressBarRef = useRef(null);
  const ctxRef = useRef(null);

  // Stable draw — reads only refs, never triggers re-renders
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    const img = framesRef.current[index];
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover mode — fills viewport, no letterbox
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;

    ctx.fillStyle = "#111821";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }, []);

  // Size canvas to viewport * devicePixelRatio for crisp rendering
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctxRef.current = canvas.getContext("2d");
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Initial resize + listen
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Two-phase preload: first frame immediately, rest in background
  useEffect(() => {
    const imgs = framesRef.current;

    const loadOne = (i) => {
      const img = new Image();
      const num = String(i + 1).padStart(4, "0");
      img.src = `${FRAME_BASE}${num}.webp`;
      img.onload = () => {
        imgs[i] = img;
        if (i === 0) drawFrame(0);
      };
    };

    // Frame 0 first for immediate paint
    loadOne(0);
    for (let i = 1; i < FRAME_COUNT; i++) loadOne(i);
  }, [drawFrame]);

  // Scroll → frame index → draw
  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    let rafId = null;

    const update = () => {
      rafId = null;
      const rect = shell.getBoundingClientRect();
      const total = shell.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      const index = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
      if (index !== currentFrameRef.current) {
        currentFrameRef.current = index;
        drawFrame(index);
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${Math.max(0.015, progress)})`;
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [drawFrame]);

  return (
    <section
      ref={shellRef}
      className="hero-shell"
      id="top"
      style={{ height: "400vh" }}
    >
      <div className="hero-sticky">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, display: "block" }}
        />

        {/* Subtle bottom vignette so progress bar reads cleanly */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(17,24,33,0.55) 0%, transparent 18%)",
            pointerEvents: "none",
          }}
        />

        <div className="hero-grain" />

        {/* Scroll progress bar */}
        <div className="hero-progress">
          <div
            ref={progressBarRef}
            className="hero-progress__bar"
            style={{ transform: "scaleX(0.015)" }}
          />
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint hidden md:block">
          <span
            style={{
              display: "block",
              marginBottom: 6,
              fontSize: 10,
              letterSpacing: "0.15em",
            }}
          >
            ↓
          </span>
          Scroll
        </div>
      </div>
    </section>
  );
};

export default Hero;
