import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const proofPoints = [
  "Guaranteed placements — or we run it again at no charge",
  "Journalist-written brand stories, not keyword-stuffed press releases",
  "AI citation optimization built into every distribution campaign",
  "Verified placement report delivered with every campaign",
  "2,500+ daily newspapers, digital outlets, and broadcast affiliates",
  "Spanish-language syndication for bilingual market reach",
];

const stats = [
  { value: "2,500+", label: "Guaranteed News Site Placements" },
  { value: "170M+", label: "Monthly Readers Nationwide" },
  { value: "50+", label: "Years Satisfaction Guarantee" },
];

const BigBrands = () => {
  const [sectionRef, visible] = useReveal({ threshold: 0.08, rootMargin: "0px 0px 80px 0px" });
  const [imgRef, imgVisible] = useReveal({ threshold: 0.05, rootMargin: "0px 0px 80px 0px" });

  const r = (d) => `reveal ${visible ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      ref={sectionRef}
      id="platform"
      className="section bg-grain-light bg-mesh-cool"
      style={{ background: "var(--nu-pearl)", overflow: "hidden" }}
      data-testid="section-big-brands"
    >
      <div className="container-nu">

        {/* ── Top label + headline ── */}
        <div className="grid grid-cols-12 gap-6 items-end mb-16">
          <div className="col-span-12 lg:col-span-7">
            <div className={`section-label mb-2 ${r(1)}`}>005 / Platform</div>
            <div className={`eyebrow mb-4 ${r(1)}`}>
              Where AI Finds Its Sources
            </div>
            <h2
              className={`display ${r(2)}`}
              style={{ fontSize: "clamp(48px, 6.5vw, 104px)", lineHeight: 0.95 }}
            >
              Where Big Brands Come for{" "}
              <span className="display-italic">Guaranteed</span> Media Coverage
              &amp; AI Citation.
            </h2>
          </div>
          <div className={`col-span-12 lg:col-span-5 lg:pl-10 ${r(3)}`}>
            <p
              className="font-sans"
              style={{
                fontSize: "clamp(18px, 1.7vw, 23px)",
                lineHeight: 1.65,
                color: "var(--nu-ink)",
              }}
            >
              NewsUSA is America's largest content syndication service. Founded
              in 1987 by Rick Smith and headquartered in Falls Church, Virginia,
              we have guaranteed brand story placement on 2,500+ news sites
              reaching 170M+ monthly readers nationwide.
            </p>
            <p
              className="font-sans mt-5"
              style={{
                fontSize: "clamp(17px, 1.5vw, 21px)",
                lineHeight: 1.65,
                color: "var(--nu-muted)",
              }}
            >
              Our mat release distribution model blends the credibility of
              earned media with the predictability of paid placement — giving
              brands guaranteed visibility across trusted newspaper and digital
              outlets, AI-indexed and crawled for maximum citation potential.
            </p>
          </div>
        </div>

        {/* ── Platform dashboard mockup ── */}
        <div
          ref={imgRef}
          style={{
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 40px 80px -20px rgba(18,45,81,0.28), 0 0 0 1px rgba(18,45,81,0.1)",
            marginBottom: 64,
            opacity: imgVisible ? 1 : 0,
            transform: imgVisible ? "scale(1) translateY(0)" : "scale(0.96) translateY(20px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          {/* Browser chrome */}
          <div style={{ background: "#f0ede8", padding: "14px 20px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(18,45,81,0.08)" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <div style={{ flex: 1, marginLeft: 12, background: "white", borderRadius: 6, padding: "5px 14px", fontSize: 13, color: "var(--nu-muted)", fontFamily: "var(--font-sans)" }}>
              app.newsusa.com — AI Citation Authority Platform
            </div>
          </div>

          {/* Dashboard body */}
          <div style={{ background: "var(--nu-constitution)", display: "flex", minHeight: 500 }}>

            {/* Sidebar */}
            <div style={{ width: 220, background: "var(--nu-heritage)", padding: "24px 16px", display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }}>
              <div style={{ color: "var(--nu-pearl)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                NewsUSA Platform
              </div>
              {["Campaign Dashboard", "Distribution Network", "AI Citation Tracker", "Placement Reports", "Broadcast & Radio", "Analytics"].map((item, i) => (
                <div key={i} style={{ padding: "9px 12px", borderRadius: 4, fontSize: 13, fontFamily: "var(--font-sans)", color: i === 0 ? "var(--nu-pearl)" : "rgba(255,255,255,0.5)", background: i === 0 ? "rgba(255,255,255,0.12)" : "transparent" }}>
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div style={{ flex: 1, padding: "28px 28px", overflow: "hidden" }}>

              {/* Top bar */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.1em", color: "#7FB7E8" }}>Active Campaign</div>
                  <div style={{ fontSize: 20, fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--nu-pearl)", marginTop: 4, lineHeight: 1 }}>Q2 Brand Authority Rollout</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
                  <span style={{ fontSize: 13, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.65)" }}>Live — Day 4 of 30</span>
                </div>
              </div>

              {/* Stat tiles */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
                {[
                  { label: "Placements Live", value: "847", sub: "of 2,500 target" },
                  { label: "AI Citations", value: "23", sub: "new this week" },
                  { label: "Reader Reach", value: "44.2M", sub: "and growing" },
                  { label: "Inbound Calls", value: "312", sub: "tracked responses" },
                ].map((stat, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ fontSize: 10, fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.08em", color: "#7FB7E8", marginBottom: 6 }}>{stat.label}</div>
                    <div style={{ fontSize: 24, fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--nu-pearl)", lineHeight: 1, letterSpacing: "-0.03em" }}>{stat.value}</div>
                    <div style={{ fontSize: 11, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{stat.sub}</div>
                  </div>
                ))}
              </div>

              {/* Two-panel row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>

                {/* Recent placements feed */}
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: 18, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: 10, fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>Recent Placements</div>
                  {[
                    { outlet: "AP NewsWire Partner", time: "2 min ago", state: "CA" },
                    { outlet: "Dallas Morning News Digital", time: "8 min ago", state: "TX" },
                    { outlet: "Chicago Tribune Network", time: "14 min ago", state: "IL" },
                    { outlet: "Miami Herald Syndicate", time: "21 min ago", state: "FL" },
                    { outlet: "Seattle Times Digital", time: "33 min ago", state: "WA" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 10, marginBottom: 10, borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <div>
                        <div style={{ fontSize: 12, fontFamily: "var(--font-sans)", color: "var(--nu-pearl)" }}>{item.outlet}</div>
                        <div style={{ fontSize: 11, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{item.time}</div>
                      </div>
                      <div style={{ fontSize: 11, fontFamily: "var(--font-sans)", background: "rgba(127,183,232,0.12)", color: "#7FB7E8", padding: "3px 9px", borderRadius: 20 }}>{item.state}</div>
                    </div>
                  ))}
                </div>

                {/* AI Citation monitor */}
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: 18, border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ fontSize: 10, fontFamily: "var(--font-sans)", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>AI Citation Monitor</div>
                  {[
                    { engine: "ChatGPT / GPT-4o", status: "Cited", count: "9", cited: true },
                    { engine: "Google Gemini", status: "Indexed", count: "7", cited: false },
                    { engine: "Perplexity AI", status: "Cited", count: "5", cited: true },
                    { engine: "Claude / Anthropic", status: "Referenced", count: "2", cited: false },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, marginBottom: 12, borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <div style={{ fontSize: 12, fontFamily: "var(--font-sans)", color: "var(--nu-pearl)" }}>{item.engine}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ fontSize: 11, background: item.cited ? "rgba(40,200,64,0.14)" : "rgba(127,183,232,0.12)", color: item.cited ? "#28c840" : "#7FB7E8", padding: "3px 9px", borderRadius: 20, fontFamily: "var(--font-sans)" }}>{item.status}</div>
                        <div style={{ fontSize: 16, fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--nu-pearl)", minWidth: 22, textAlign: "right" }}>{item.count}</div>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 14, padding: "12px 14px", background: "rgba(127,183,232,0.07)", borderRadius: 4, border: "1px solid rgba(127,183,232,0.14)" }}>
                    <div style={{ fontSize: 10, fontFamily: "var(--font-sans)", color: "#7FB7E8", textTransform: "uppercase", letterSpacing: "0.08em" }}>AI Authority Score</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
                      <div style={{ fontSize: 30, fontFamily: "var(--font-display)", fontWeight: 700, color: "#7FB7E8", lineHeight: 1 }}>87</div>
                      <div style={{ fontSize: 13, fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.45)" }}>/ 100</div>
                      <div style={{ fontSize: 12, fontFamily: "var(--font-sans)", color: "#28c840", marginLeft: 4 }}>↑ +12 this week</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Three columns: proof points + stats + CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Proof points */}
          <div className={`col-span-1 lg:col-span-2 ${r(4)}`}>
            <div className="eyebrow mb-6">Why Brands Choose NewsUSA</div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px 32px",
              }}
            >
              {proofPoints.map((pt, i) => (
                <li
                  key={i}
                  className="font-sans"
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    fontSize: "clamp(16px, 1.4vw, 19px)",
                    color: "var(--nu-ink)",
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: "var(--nu-liberty)", flexShrink: 0, marginTop: 3 }}
                  />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats + CTA */}
          <div className={`col-span-1 flex flex-col gap-6 ${r(5)}`}>
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 28px",
                  background: i === 0 ? "var(--nu-heritage)" : "var(--nu-space)",
                  borderRadius: 4,
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: "clamp(36px, 4vw, 60px)",
                    lineHeight: 1,
                    color: i === 0 ? "#7FB7E8" : "var(--nu-heritage)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="font-sans mt-2"
                  style={{
                    fontSize: 16,
                    color: i === 0 ? "rgba(255,255,255,0.65)" : "var(--nu-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              Get Started — It's Free <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* ── Introducing callout strip ── */}
        <div
          className="mt-16 p-10 lg:p-14"
          style={{
            background: "linear-gradient(135deg, var(--nu-heritage) 0%, var(--nu-union) 50%, var(--nu-liberty) 100%)",
            borderRadius: 4,
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1) translateY(0)" : "scale(0.97) translateY(16px)",
            transition: "opacity 0.65s ease 0.4s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.4s",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="eyebrow" style={{ color: "#7FB7E8" }}>
                Introducing — First of Its Kind
              </div>
              <h3
                className="display mt-4"
                style={{
                  color: "var(--nu-pearl)",
                  fontSize: "clamp(30px, 3.8vw, 60px)",
                  lineHeight: 1.0,
                }}
              >
                The First AI Citation
                <br />
                <span className="display-italic">Authority Platform.</span>
              </h3>
            </div>
            <div>
              <p
                className="font-sans"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  fontSize: "clamp(17px, 1.6vw, 21px)",
                  lineHeight: 1.65,
                }}
              >
                With more than 32,000 campaigns and a 100% satisfaction
                guarantee, NewsUSA delivers measurable results on a national
                scale — and proven results through professional journalist-written
                content syndicated in all 50 states.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-ghost-light mt-6 inline-flex"
              >
                Book a 15-Minute Strategy Call <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BigBrands;
