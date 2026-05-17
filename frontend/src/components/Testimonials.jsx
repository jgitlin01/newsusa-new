import React from "react";

const testimonials = [
  {
    brand: "Capitol Communications",
    quote:
      "NewsUSA's network secured placements across 380 daily newspapers in under two weeks. Our public health initiative reached the right audiences with verifiable, third-party reporting.",
    name: "Mara Halloway",
    role: "Director of Communications",
  },
  {
    brand: "Liberty Foundation",
    quote:
      "Earned media used to feel like a gamble. With a guaranteed distribution network, we finally have a predictable channel for credible coverage tied directly to our policy launches.",
    name: "James Whitfield",
    role: "VP, Public Affairs",
  },
  {
    brand: "Tribune Healthcare",
    quote:
      "Our Spanish-language program ran in 220+ outlets in the first month. The bilingual editorial team understood our community better than any agency we had previously hired.",
    name: "Lucia Ramos",
    role: "Head of Brand Communications",
  },
  {
    brand: "Foundry Industries",
    quote:
      "The NewsUSA+ team rebuilt our entire investor narrative around earned credibility. We saw qualified inbound coverage requests within the first quarter.",
    name: "Daniel Estes",
    role: "Chief Marketing Officer",
  },
  {
    brand: "Atlas Energy",
    quote:
      "Responsive, deeply networked, and surprisingly editorial. Every release we sent through their syndication picked up trade-press coverage we could measure.",
    name: "Priya Anand",
    role: "Director of External Affairs",
  },
  {
    brand: "Heritage Civic Group",
    quote:
      "When we needed broadcast and print to land within the same news cycle, NewsUSA was the only network that delivered both, on time, and to the regions we cared about.",
    name: "Robert Klein",
    role: "Executive Director",
  },
];

const Testimonials = () => {
  const row = [...testimonials, ...testimonials];
  return (
    <section
      className="section"
      style={{ background: "var(--nu-space)" }}
      data-testid="section-testimonials"
    >
      <div className="container-nu mb-14 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 lg:col-span-7">
          <div className="eyebrow">Voices on the wire</div>
          <h2
            className="display mt-4"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1 }}
          >
            Trusted by leading{" "}
            <span className="display-italic">communicators</span>.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:text-right">
          <p
            className="font-sans"
            style={{ color: "var(--nu-muted)", fontSize: 16, maxWidth: 460, marginLeft: "auto" }}
          >
            Read how directors of communications, public affairs leads, and CMOs
            describe the impact of guaranteed editorial placement.
          </p>
        </div>
      </div>

      <div className="marquee" data-testid="testimonial-marquee">
        <div className="marquee__inner" style={{ animationDuration: "60s" }}>
          {row.map((t, i) => (
            <article
              key={`${t.brand}-${i}`}
              className="shrink-0 bg-pearl border"
              style={{
                borderColor: "var(--nu-line)",
                width: 420,
                padding: 32,
                borderRadius: 4,
              }}
              data-testid={`testimonial-card-${i}`}
            >
              <div className="eyebrow mb-5" style={{ color: "var(--nu-union)" }}>
                {t.brand}
              </div>
              <p
                className="font-serif"
                style={{
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "var(--nu-heritage)",
                  fontWeight: 500,
                }}
              >
                “{t.quote}”
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
