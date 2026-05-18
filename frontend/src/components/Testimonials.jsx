import React from "react";
import useReveal from "../hooks/useReveal";

const testimonials = [
  {
    brand: "Consumer Products CEO",
    quote:
      "More valuable than traditional advertising. The earned coverage built credibility our paid spend simply couldn't reach.",
    name: "CEO",
    role: "Consumer Products Brand",
  },
  {
    brand: "Agency Principal",
    quote:
      "NewsUSA generated measurable new business for our clients. The placement reporting alone justified the engagement.",
    name: "Principal",
    role: "Marketing Agency",
  },
  {
    brand: "Marketing Agency CEO",
    quote:
      "Highly responsive and effective. Editorial-grade execution, on schedule, every cycle — exactly what high-stakes campaigns demand.",
    name: "Chief Executive",
    role: "Marketing Agency",
  },
  {
    brand: "National Consumer Brand",
    quote:
      "Internet orders have more than doubled since we launched our syndicated program. Earned coverage is now our single highest-ROI channel.",
    name: "VP Marketing",
    role: "National Consumer Co.",
  },
  {
    brand: "32,000+ Campaigns Since 1987",
    quote:
      "Four decades. One trusted network. From CPG launches to investor announcements, NewsUSA has delivered editorial credibility for the brands buyers — and now AI engines — actually trust.",
    name: "Rick Smith",
    role: "Founder & CEO, NewsUSA",
  },
  {
    brand: "$50M+ in Tracked Sales Growth",
    quote:
      "Monthly national features generated retail demand we could measure. 12,600+ inbound calls in a single program — fast editorial coverage became reusable sales assets.",
    name: "Case Study",
    role: "Multi-channel CPG Campaign",
  },
];

const Testimonials = () => {
  const [headerRef, headerVisible] = useReveal({ threshold: 0.15 });
  const row = [...testimonials, ...testimonials];
  return (
    <section
      className="section"
      style={{ background: "var(--nu-space)" }}
      data-testid="section-testimonials"
    >
      <div
        ref={headerRef}
        className="container-nu mb-20 lg:mb-28 grid grid-cols-12 gap-6 items-end"
      >
        <div className="col-span-12 lg:col-span-7">
          <div className={`eyebrow reveal ${headerVisible ? "reveal--visible" : ""}`}>
            Voices on the wire
          </div>
          <h2
            className={`display mt-4 reveal reveal-d1 ${headerVisible ? "reveal--visible" : ""}`}
            style={{ fontSize: "clamp(52px, 6vw, 90px)", lineHeight: 1 }}
          >
            Trusted by leading{" "}
            <span className="display-italic">communicators</span>.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:text-right">
          <p
            className={`font-sans reveal reveal-d2 ${headerVisible ? "reveal--visible" : ""}`}
            style={{ color: "var(--nu-muted)", fontSize: 20, maxWidth: 460, marginLeft: "auto" }}
          >
            Four decades of earned coverage for consumer, tech, finance, health,
            and professional brands. Hear it from CEOs, agency principals, and
            marketing leaders who measure their results in revenue.
          </p>
        </div>
      </div>

      <div className="marquee" data-testid="testimonial-marquee">
        <div className="marquee__inner" style={{ animationDuration: "60s" }}>
          {row.map((t, i) => (
            <article
              key={`${t.brand}-${i}`}
              className="shrink-0 bg-pearl testimonial-card"
              style={{
                width: 420,
                padding: 32,
                borderRadius: 4,
              }}
              data-testid={`testimonial-card-${i}`}
            >
              {/* Decorative quote mark */}
              <div
                className="decorative-quote"
                style={{ fontSize: 120, top: -10, right: 16 }}
              >
                "
              </div>
              <div className="eyebrow mb-5" style={{ color: "var(--nu-union)" }}>
                {t.brand}
              </div>
              <p
                className="font-serif"
                style={{
                  fontSize: 22,
                  lineHeight: 1.55,
                  color: "var(--nu-heritage)",
                  fontWeight: 500,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {"\u201C"}{t.quote}{"\u201D"}
              </p>
              <div className="mt-8 pt-6 border-t" style={{ borderColor: "var(--nu-line)" }}>
                <div className="font-sans font-semibold" style={{ color: "var(--nu-heritage)" }}>
                  {t.name}
                </div>
                <div className="font-sans text-sm" style={{ color: "var(--nu-muted)" }}>
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
