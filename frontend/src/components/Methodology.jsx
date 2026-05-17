import React, { useState } from "react";

const steps = [
  {
    num: "01",
    title: "The earned-media partner that listens",
    body:
      "We start by analyzing your communications ecosystem — your audience, the news cycle around your sector, and the publications you actually want to be in. Then we co-author the editorial storyboard for your next program.",
  },
  {
    num: "02",
    title: "Storytelling & editorial",
    body:
      "An editorial consultant works directly with your team to sharpen the angle, structure the release, and pressure-test the headline against the standards of the daily newsroom — not the marketing brief.",
  },
  {
    num: "03",
    title: "Distribution strategy",
    body:
      "We pair the story with the right channels: daily newspaper syndication, vertical trade press, broadcast SMT, digital native placements, bilingual outlets — sequenced for maximum compounded reach.",
  },
  {
    num: "04",
    title: "Production & syndication",
    body:
      "Editors finalize the package. Distribution operators push it across the network. Broadcast producers cut the segments. Every asset is staged and dispatched on a confirmed news-cycle schedule.",
  },
  {
    num: "05",
    title: "Reporting & support",
    body:
      "You receive a verified clip report with publication names, dates, geography, and estimated reach. Our editorial team stays on call for follow-up coverage and program iteration.",
  },
];

const Methodology = () => {
  const [active, setActive] = useState(0);
  return (
    <section
      id="methodology"
      className="section bg-pearl"
      data-testid="section-methodology"
    >
      <div className="container-nu grid grid-cols-12 gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-5">
          <div className="eyebrow">Methodology</div>
          <h2
            className="display mt-4"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1 }}
          >
            A good idea is fine.{" "}
            <span className="display-italic">A placed story</span> is better.
          </h2>
          <p
            className="font-sans mt-6"
            style={{ color: "var(--nu-ink)", fontSize: 17, lineHeight: 1.7, maxWidth: "44ch" }}
          >
            Five steps. One accountable team. From editorial design to verified
            placement — built for communications leaders who measure their work
            in coverage, not in pitches sent.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7">
          {steps.map((s, i) => {
            const isActive = active === i;
            return (
              <div
                key={s.num}
                className="method-tab"
                data-active={isActive}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                data-testid={`method-step-${i}`}
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-baseline gap-6">
                  <span
                    className="display-italic"
                    style={{ fontSize: 18, color: isActive ? "var(--nu-liberty)" : "var(--nu-muted)" }}
                  >
                    {s.num}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="display"
                      style={{
                        fontSize: "clamp(22px, 2.4vw, 34px)",
                        lineHeight: 1.15,
                        color: isActive ? "var(--nu-heritage)" : "var(--nu-muted)",
                        transition: "color 0.3s ease",
                        fontWeight: 700,
                      }}
                    >
                      {s.title}
                    </h3>
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: isActive ? 220 : 0,
                        opacity: isActive ? 1 : 0,
                        transition: "max-height 0.5s ease, opacity 0.4s ease, margin 0.4s ease",
                        marginTop: isActive ? 16 : 0,
                      }}
                    >
                      <p
                        className="font-sans"
                        style={{
                          color: "var(--nu-ink)",
                          fontSize: 16,
                          lineHeight: 1.7,
                          maxWidth: "58ch",
                        }}
                      >
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            style={{ borderTop: "1px solid var(--nu-line)", marginTop: 8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Methodology;
