import React from "react";
import { ArrowUpRight, GraduationCap, Edit3 } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const items = [
  {
    icon: GraduationCap,
    title: "Earned-Media Training",
    body:
      "On-site and remote workshops for in-house communications teams. Newsroom thinking, narrative structure, and placement strategy — taught by working editors.",
  },
  {
    icon: Edit3,
    title: "Editorial Board",
    body:
      "Ongoing editorial advisory for high-stakes announcements: framing, message hierarchy, regulatory tone, and crisis-ready alternates. Built for sustained credibility.",
  },
];

const ComplementaryServices = () => {
  const [headerRef, headerVisible] = useReveal({ threshold: 0.15 });
  const [cardsRef, cardsVisible] = useReveal({ threshold: 0.15 });
  const r = (vis, d) => `reveal ${vis ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section className="section bg-pearl bg-grain-light bg-mesh-cool" data-testid="section-complementary">
      <div className="container-nu">
        <div ref={headerRef} className="grid grid-cols-12 gap-6 mb-14 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className={`eyebrow ${r(headerVisible, 1)}`}>Complementary Services</div>
            <h2
              className={`display mt-4 ${r(headerVisible, 2)}`}
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1 }}
            >
              A complete{" "}
              <span className="display-italic">authority ecosystem</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p
              className={`font-sans ${r(headerVisible, 3)}`}
              style={{ color: "var(--nu-muted)", fontSize: 16, maxWidth: 480 }}
            >
              Beyond guaranteed syndicated placements, we support communications
              leaders with training and strategic guidance — always toward one
              outcome: stronger AI authority and measurable audience engagement.
            </p>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <a
                key={it.title}
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className={`svc-card group ${r(cardsVisible, i + 2)}`}
                style={{ minHeight: 240, textDecoration: "none" }}
                data-testid={`comp-service-${i}`}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm"
                  style={{ background: "rgba(0,104,194,0.08)", color: "var(--nu-liberty)" }}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className="display"
                  style={{ fontSize: 26, fontWeight: 700, color: "var(--nu-heritage)" }}
                >
                  {it.title}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: 15, lineHeight: 1.65, color: "var(--nu-ink)", maxWidth: "48ch" }}
                >
                  {it.body}
                </p>
                <span className="svc-card__arrow inline-flex items-center gap-2 font-sans text-sm">
                  Book a discovery call <ArrowUpRight size={16} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplementaryServices;
