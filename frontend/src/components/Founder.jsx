import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Phone, BookOpen, Briefcase, Award } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const facts = [
  { icon: BookOpen, label: "Six business books", sub: "Authored" },
  { icon: Briefcase, label: "100+ emerging companies", sub: "Investor & advisor" },
  { icon: Award, label: "Founded News Canada", sub: "Before launching NewsUSA in 1987" },
];

const Founder = () => {
  const [photoRef, photoVisible] = useReveal({ threshold: 0.01, rootMargin: "200px 0px 0px 0px" });
  const [bioRef, bioVisible] = useReveal({ threshold: 0.1 });
  const imgRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);

  // Subtle parallax on the founder photo
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vh = window.innerHeight;
      const offset = ((center - vh / 2) / vh) * -20;
      setParallaxY(offset);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = (vis, d) => `reveal ${vis ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      id="founder"
      className="section"
      style={{ background: "var(--nu-pearl)" }}
      data-testid="section-founder"
    >
      <div className="container-nu grid grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Photo with parallax */}
        <div ref={photoRef} className={`col-span-12 lg:col-span-5 reveal-left ${photoVisible ? "reveal--visible" : ""}`}>
          <div
            ref={imgRef}
            className="relative"
            style={{
              borderRadius: 4,
              overflow: "hidden",
              background: "var(--nu-heritage)",
              aspectRatio: "4 / 5",
              maxWidth: 520,
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL || ""}/media/team/rick-smith.jpg`}
              alt="Rick Smith, Founder & CEO of NewsUSA"
              loading="lazy"
              style={{
                width: "100%",
                height: "110%",
                objectFit: "cover",
                objectPosition: "center 25%",
                transform: `translateY(${parallaxY}px)`,
                transition: "transform 0.1s linear",
              }}
              data-testid="founder-photo"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(18,45,81,0.85) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 28,
                right: 28,
                bottom: 24,
                color: "var(--nu-pearl)",
              }}
            >
              <div className="eyebrow" style={{ color: "#7FB7E8", marginBottom: 8 }}>
                Founder & CEO
              </div>
              <div
                className="display"
                style={{ color: "var(--nu-pearl)", fontSize: 38, fontWeight: 700 }}
              >
                Rick Smith
              </div>
              <div
                className="font-sans"
                style={{ color: "rgba(255,255,255,0.78)", fontSize: 16, marginTop: 4 }}
              >
                NewsUSA · AI Authority Network™ · Since 1987
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div ref={bioRef} className="col-span-12 lg:col-span-7 relative">
          {/* Decorative quote mark */}
          <div
            className="decorative-quote hidden lg:block"
            style={{ fontSize: 280, top: -60, left: -30 }}
          >
            {"\u201C"}
          </div>

          <div className={`eyebrow ${r(bioVisible, 1)}`}>A note from the founder</div>
          <h2
            className={`display mt-4 ${r(bioVisible, 2)}`}
            style={{ fontSize: "clamp(45px, 5.5vw, 80px)", lineHeight: 1.04 }}
          >
            Building the network for{" "}
            <span className="display-italic">AI authority</span>.
          </h2>

          <p
            className={`font-serif mt-7 ${r(bioVisible, 3)}`}
            style={{
              fontSize: "clamp(23px, 2vw, 30px)",
              lineHeight: 1.5,
              color: "var(--nu-heritage)",
              fontStyle: "italic",
              fontWeight: 500,
              maxWidth: "44ch",
              position: "relative",
              zIndex: 1,
            }}
          >
            "Brands that earn third-party coverage outperform brands that buy
            attention. Four decades and 32,000+ guaranteed syndicated placements
            later, that conviction has only sharpened — now that AI engines
            decide what buyers see first."
          </p>

          <div
            className={`font-sans mt-8 flex flex-col gap-4 ${r(bioVisible, 4)}`}
            style={{ fontSize: 20, lineHeight: 1.75, color: "var(--nu-ink)", maxWidth: "62ch" }}
          >
            <p>
              Rick Smith is founder and CEO of NewsUSA, America's only AI
              Authority Network™ — a top-tier guaranteed syndicated placement
              platform he launched in 1987 after recognizing the need for
              measurable media-visibility solutions for brands and organizations.
              Earlier, he founded News Canada and helped redefine how businesses
              use syndicated editorial content, strategic storytelling, and media
              placement to build awareness and credibility.
            </p>
            <p>
              Today, Rick focuses on the intersection of AI discoverability,
              authority positioning, and strategic communications through three
              proprietary platforms: <strong>NewsUSA AI Media Targeting™</strong>
              {" "}(matching placements to best prospects),{" "}
              <strong>NewsUSA AI Citation Authority Builder™</strong> (content
              optimization and third-party citation build), and{" "}
              <strong>NewsUSA AI Authority Audit™</strong> (deep-dive competitor
              analysis with specific content recommendations across all LLMs).
            </p>
            <p>
              Rick has authored six business books, is an active investor and
              advisor to 100+ emerging companies across fintech, green tech,
              biotech, ad tech, and mobility innovation, and has spoken at
              investor conferences globally.
            </p>
          </div>

          {/* Facts row */}
          <div
            className={`mt-10 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-6 ${r(bioVisible, 5)}`}
            style={{ borderColor: "var(--nu-line)" }}
          >
            {facts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-start gap-4" data-testid={`founder-fact-${i}`}>
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm"
                    style={{ background: "rgba(0,104,194,0.08)", color: "var(--nu-liberty)" }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-semibold" style={{ color: "var(--nu-heritage)", fontSize: 19 }}>
                      {f.label}
                    </div>
                    <div className="font-sans text-sm" style={{ color: "var(--nu-muted)" }}>
                      {f.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`mt-8 flex flex-wrap gap-3 ${r(bioVisible, 6)}`}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-pill btn-primary" data-testid="founder-cta-calendar">
              Book a discovery call <ArrowUpRight size={16} />
            </a>
            <a href="mailto:rsmith@newsusa.com" className="btn-pill btn-ghost-dark" data-testid="founder-cta-email">
              <Mail size={16} /> rsmith@newsusa.com
            </a>
            <a href="tel:+17035088700" className="btn-pill btn-ghost-dark" data-testid="founder-cta-phone">
              <Phone size={16} /> 703-508-8700
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
