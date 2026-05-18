import React from "react";

/**
 * Dramatic oversized horizontal text marquee.
 * Sits between major sections as a visual divider that conveys scale and authority.
 */

const words = [
  "AUTHORITY",
  "PLACEMENTS",
  "AI CITATIONS",
  "SYNDICATION",
  "GUARANTEED",
  "32,000+ CAMPAIGNS",
  "EARNED MEDIA",
  "TRUST",
];

const TextMarquee = () => {
  const row = [...words, ...words];
  return (
    <section
      className="text-marquee-section"
      aria-hidden="true"
      data-testid="text-marquee"
    >
      <div className="text-marquee">
        <div className="text-marquee__track">
          {row.map((w, i) => (
            <span key={`${w}-${i}`} className="text-marquee__word">
              {w}
              <span className="text-marquee__dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextMarquee;
