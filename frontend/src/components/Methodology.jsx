import React, { useState, useRef, useEffect } from "react";
import useReveal from "../hooks/useReveal";

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
  const [headerRef, headerVisible] = useReveal({ threshold: 0.15 });
  const [timelineRef, timelineVisible] = useReveal({ threshold: 0.1 });
  const stepsContainerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  // Calculate timeline progress line height based on active step
  useEffect(() => {
    if (!stepsContainerRef.current) return;
    const children = stepsContainerRef.current.children;
    if (!children[active]) return;
    const containerTop = stepsContainerRef.current.getBoundingClientRect().top;
    const activeEl = children[active];
    const activeTop = activeEl.getBoundingClientRect().top;
    const activeHeight = activeEl.offsetHeight;
    setLineHeight(activeTop - containerTop + activeHeight * 0.3);
  }, [active]);

  const r = (vis, d) => `reveal ${vis ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      id="methodology"
      className="section bg-pearl bg-grain-light"
      data-testid="section-methodology"
    >
      <div className="container-nu grid grid-cols-12 gap-10 lg:gap-16">
        <div ref={headerRef} className="col-span-12 lg:col-span-5">
          <div className={`section-label mb-2 ${r(headerVisible, 1)}`}>003 / Process</div>
          <div className={`eyebrow ${r(headerVisible, 1)}`}>How it starts</div>
          <h2
            className={`display mt-4 ${r(headerVisible, 2)}`}
            style={{ fontSize: "clamp(52px, 6vw, 90px)", lineHeight: 1 }}
          >
            A 15-minute call.{" "}
            <span className="display-italic">A measurable plan.</span>
          </h2>
          <p
            className={`font-sans mt-6 ${r(headerVisible, 3)}`}
            style={{
              color: "var(--nu-ink)",
              fontSize: 21,
              lineHeight: 1.7,
              maxWidth: "44ch",
            }}
          >
            Five steps. One accountable team. From AI audit to verified
            placement and back to audit — built for leaders who measure earned
            media in revenue, not in pitches sent.
          </p>
        </div>

        <div
          ref={timelineRef}
          className={`col-span-12 lg:col-span-7 ${r(timelineVisible, 2)}`}
        >
          <div className="method-timeline" ref={stepsContainerRef}>
            {/* Animated progress line */}
            <div
              className="method-timeline__line"
              style={{ height: timelineVisible ? lineHeight : 0 }}
            />

            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <div
                  key={s.num}
                  className="relative pb-6 pt-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  data-testid={`method-step-${i}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`method-dot ${isActive ? "method-dot--active" : ""}`}
                    style={{ top: 24 }}
                  />

                  <h3
                    className="display flex items-baseline gap-4"
                    style={{
                      fontSize: "clamp(27px, 2.8vw, 42px)",
                      lineHeight: 1.15,
                      color: isActive ? "var(--nu-heritage)" : "var(--nu-muted)",
                      transition: "color 0.35s var(--ease-out-quint)",
                      fontWeight: 700,
                    }}
                  >
                    <span
                      className="display-italic"
                      style={{
                        fontSize: 50,
                        color: isActive ? "var(--nu-liberty)" : "var(--nu-muted)",
                        transition: "color 0.35s ease",
                        opacity: isActive ? 1 : 0.5,
                      }}
                    >
                      {s.num}
                    </span>
                    {s.title}
                  </h3>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isActive ? 240 : 0,
                      opacity: isActive ? 1 : 0,
                      transition:
                        "max-height 0.55s var(--ease-out-quint), opacity 0.45s var(--ease-out-quint), margin 0.45s var(--ease-out-quint)",
                      marginTop: isActive ? 16 : 0,
                    }}
                  >
                    <p
                      className="font-sans"
                      style={{
                        color: "var(--nu-ink)",
                        fontSize: 20,
                        lineHeight: 1.7,
                        maxWidth: "58ch",
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
