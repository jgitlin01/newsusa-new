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
            <span className="display-italic">moves audiences</span>.
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
            Press releases sent to the void. Pitches ignored. Generic placements
            that nobody reads. These familiar frustrations quietly drain the
            credibility of even the best-prepared communications teams.
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
            With more than three decades of experience and a guaranteed
            distribution network spanning daily newspapers, broadcast stations,
            and trusted digital outlets, NewsUSA helps brands, agencies, and
            government partners deliver clear, credible, third-party-validated
            coverage that audiences actually read, watch, and remember.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-8 border-t" style={{ borderColor: "var(--nu-line)" }}>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>10K+</div>
              <div
                className="font-sans text-sm mt-1"
                style={{ color: "var(--nu-muted)" }}
              >
                Media partners
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>50</div>
              <div
                className="font-sans text-sm mt-1"
                style={{ color: "var(--nu-muted)" }}
              >
                States covered
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>37</div>
              <div
                className="font-sans text-sm mt-1"
                style={{ color: "var(--nu-muted)" }}
              >
                Years on the wire
              </div>
            </div>
            <div>
              <div className="stat-num" style={{ fontSize: 44 }}>100%</div>
              <div
                className="font-sans text-sm mt-1"
                style={{ color: "var(--nu-muted)" }}
              >
                Coverage guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
