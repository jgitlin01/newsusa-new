import React from "react";
import useReveal from "../hooks/useReveal";
import useCountUp from "../hooks/useCountUp";

const Mission = () => {
  const [sectionRef, sectionVisible] = useReveal({ threshold: 0.1 });
  const [stat1Ref, stat1] = useCountUp(32, { suffix: "K+", duration: 2000 });
  const [stat2Ref, stat2] = useCountUp(50, { prefix: "$", suffix: "M+", duration: 2200 });
  const [stat3Ref, stat3] = useCountUp(12.6, { suffix: "K+", decimals: 1, duration: 1800 });
  const [stat4Ref, stat4] = useCountUp(38, { duration: 1600 });

  const r = (delay) =>
    `reveal ${sectionVisible ? "reveal--visible" : ""} reveal-d${delay}`;

  return (
    <section
      id="mission"
      className="section bg-pearl bg-grain-light bg-mesh-warm"
      data-testid="section-mission"
      ref={sectionRef}
    >
      <div className="container-nu grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-4">
          <div className={r(1)}>
            <div className="eyebrow">Our Mission</div>
          </div>
          <h2
            className={`display mt-4 ${r(2)}`}
            style={{ fontSize: "clamp(52px, 6vw, 90px)", lineHeight: 1 }}
          >
            Earned media that{" "}
            <span className="display-italic">moves revenue</span>.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:pl-12 flex flex-col gap-6">
          <p
            className={`font-serif ${r(2)}`}
            style={{
              fontSize: "clamp(24px, 2.1vw, 34px)",
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
            className={`font-sans ${r(3)}`}
            style={{
              fontSize: 22,
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
            className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-8 border-t ${r(4)}`}
            style={{ borderColor: "var(--nu-line)" }}
          >
            <div ref={stat1Ref}>
              <div className="stat-num" style={{ fontSize: 70 }}>{stat1}</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Client campaigns since 1987
              </div>
            </div>
            <div ref={stat2Ref}>
              <div className="stat-num" style={{ fontSize: 70 }}>{stat2}</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Tracked sales growth
              </div>
            </div>
            <div ref={stat3Ref}>
              <div className="stat-num" style={{ fontSize: 70 }}>{stat3}</div>
              <div className="font-sans text-sm mt-1" style={{ color: "var(--nu-muted)" }}>
                Inbound calls driven
              </div>
            </div>
            <div ref={stat4Ref}>
              <div className="stat-num" style={{ fontSize: 70 }}>{stat4}</div>
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
