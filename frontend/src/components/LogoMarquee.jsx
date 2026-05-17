import React from "react";

const brands = [
  "Associated Press",
  "Reuters",
  "USA Today",
  "Tribune",
  "Hearst",
  "Gannett",
  "McClatchy",
  "Lee Enterprises",
  "Scripps",
  "Nexstar",
  "iHeartMedia",
  "Cox Media",
];

const LogoMarquee = () => {
  const row = [...brands, ...brands];
  return (
    <section
      className="py-12 md:py-16 border-y bg-pearl"
      style={{ borderColor: "var(--nu-line)" }}
      data-testid="logo-marquee"
    >
      <div className="container-nu mb-8 flex items-center justify-between flex-wrap gap-3">
        <div className="eyebrow">As featured & syndicated through</div>
        <div className="font-sans text-sm" style={{ color: "var(--nu-muted)" }}>
          10,000+ outlets • 50 states • 35+ years
        </div>
      </div>

      <div className="marquee" data-testid="marquee-row">
        <div className="marquee__inner">
          {row.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="flex items-center gap-3 shrink-0"
              data-testid={`marquee-item-${i}`}
            >
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: "var(--nu-liberty)" }}
              />
              <span
                className="display"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "var(--nu-heritage)",
                  letterSpacing: "-0.01em",
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
