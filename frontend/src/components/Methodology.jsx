import React, { useState } from "react";

const steps = [
  {
    num: "01",
    title: "AI Authority Audit",
    body:
      "We start with a 15-minute discovery call and a deep audit of where your brand appears today across newsrooms, search, and AI engines like ChatGPT, Gemini, and Perplexity. You see exactly where competitors beat you and where revenue is leaking.",
  },
  {
    num: "02",
    title: "Strategy",
    body:
      "We review goals, market, and competitors, then recommend the best authority growth plan — editorial cadence, distribution channels, broadcast inclusion, and AI-citation targets. You sign off on a measurable plan, not a pitch deck.",
  },
  {
    num: "03",
    title: "Creation",
    body:
      "Our editors design newsroom-grade stories — releases, broadcast packages, bylined content, and AI-optimized authority content. Every asset is built to be cited, syndicated, and crawled by the engines your buyers consult.",
  },
  {
    num: "04",
    title: "Placement",
    body:
      "We launch fast. Releases ship across our exclusive news-site network, broadcast SMTs go to TV affiliates, and AI Authority Engine™ tags content for citation. NewsFLOW Intelligence™ surfaces real-time placement proof.",
  },
  {
    num: "05",
    title: "AI Re-Audit & Iterate",
    body:
      "Thirty days in, we re-run the audit. You see how your visibility moved across newsrooms and AI answers, what's converting, and where to double down. Earned coverage compounds — and we make sure yours does, too.",
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
          <div className="eyebrow">How it starts</div>
          <h2
            className="display mt-4"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1 }}
          >
            A 15-minute call.{" "}
            <span className="display-italic">A measurable plan.</span>
          </h2>
          <p
            className="font-sans mt-6"
            style={{
              color: "var(--nu-ink)",
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: "44ch",
            }}
          >
            Five steps. One accountable team. From AI audit to verified
            placement and back to audit — built for leaders who measure earned
            media in revenue, not in pitches sent.
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
                    style={{
                      fontSize: 18,
                      color: isActive ? "var(--nu-liberty)" : "var(--nu-muted)",
                    }}
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
                        maxHeight: isActive ? 240 : 0,
                        opacity: isActive ? 1 : 0,
                        transition:
                          "max-height 0.5s ease, opacity 0.4s ease, margin 0.4s ease",
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
          <div style={{ borderTop: "1px solid var(--nu-line)", marginTop: 8 }} />
        </div>
      </div>
    </section>
  );
};

export default Methodology;
