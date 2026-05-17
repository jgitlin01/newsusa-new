import React from "react";
import { ArrowUpRight, GraduationCap, Edit3 } from "lucide-react";

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
  return (
    <section className="section bg-pearl" data-testid="section-complementary">
      <div className="container-nu">
        <div className="grid grid-cols-12 gap-6 mb-14 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="eyebrow">Complementary Services</div>
            <h2
              className="display mt-4"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1 }}
            >
              A complete{" "}
              <span className="display-italic">communications ecosystem</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p
              className="font-sans"
              style={{ color: "var(--nu-muted)", fontSize: 16, maxWidth: 480 }}
            >
              Entrusting us with your earned-media program is only the start. We
              support communications leaders beyond delivery with training and
              strategic guidance — always for one outcome: stronger audience
              engagement and effective communication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <a
                key={it.title}
                href="#contact"
                className="svc-card group"
                style={{ minHeight: 240 }}
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
                  Learn more <ArrowUpRight size={16} />
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
