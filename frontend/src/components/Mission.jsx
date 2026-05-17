import React from "react";

const Mission = () => {
  return (
    <section
      id="mission"
      className="section bg-pearl"
      data-testid="section-mission"
    >
      <div className="container-nu grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-4">
          <div className="eyebrow">Our Mission</div>
          <h2
            className="display mt-4"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1 }}
          >
            Earned media that{" "}
            <span className="display-italic">moves revenue</span>.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:pl-12 flex flex-col gap-6">
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(20px, 1.8vw, 28px)",
              lineHeight: 1.45,
              color: "var(--nu-heritage)",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Every month, invisible brands lose buyers to louder competitors. AI
            now influences buying decisions before your sales team is ever
            contacted — and 88% of businesses don't appear in those answers.
          </p>
          <p
            className="font-sans"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--nu-ink)",
              maxWidth: "62ch",
            }}
          >
            Founded by Rick Smith in 1987, NewsUSA is the earned-media network
            that puts your brand in front of the buyers — and the AI engines —
            making today's decisions. Editorial syndication, broadcast
            placement, and AI-optimized authority content, delivered as one
            accountable program across consumer, tech, finance, health, and
            professional categories.
          </p>

          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-8 border-t"
            style={{ borderColor: "var(--nu-line)" }}
          >
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>32K+</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Client campaigns since 1987
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>$50M+</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Tracked sales growth
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>12.6K+</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Inbound calls driven
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>38</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Years on the wire
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
