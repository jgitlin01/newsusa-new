import React from "react";
import { ArrowUpRight, Mail, Phone, BookOpen, Briefcase, Award } from "lucide-react";

const facts = [
  {
    icon: BookOpen,
    label: "Six business books",
    sub: "Authored",
  },
  {
    icon: Briefcase,
    label: "100+ emerging companies",
    sub: "Investor & advisor",
  },
  {
    icon: Award,
    label: "Founded News Canada",
    sub: "Before launching NewsUSA in 1987",
  },
];

const Founder = () => {
  return (
    <section
      id="founder"
      className="section"
      style={{ background: "var(--nu-pearl)" }}
      data-testid="section-founder"
    >
      <div className="container-nu grid grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Photo */}
        <div className="col-span-12 lg:col-span-5">
          <div
            className="relative"
            style={{
              borderRadius: 4,
              overflow: "hidden",
              background: "var(--nu-heritage)",
              aspectRatio: "4 / 5",
              maxWidth: 520,
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL || ""}/media/team/rick-smith.jpg`}
              alt="Rick Smith, Founder & CEO of NewsUSA"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 25%",
              }}
              data-testid="founder-photo"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 55%, rgba(18,45,81,0.85) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 28,
                right: 28,
                bottom: 24,
                color: "var(--nu-pearl)",
              }}
            >
              <div
                className="eyebrow"
                style={{ color: "#7FB7E8", marginBottom: 8 }}
              >
                Founder & CEO
              </div>
              <div
                className="display"
                style={{ color: "var(--nu-pearl)", fontSize: 30, fontWeight: 700 }}
              >
                Rick Smith
              </div>
              <div
                className="font-sans"
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 13,
                  marginTop: 4,
                }}
              >
                NewsUSA · Since 1987
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="col-span-12 lg:col-span-7">
          <div className="eyebrow">A note from the founder</div>
          <h2
            className="display mt-4"
            style={{ fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: 1.04 }}
          >
            Building the network for{" "}
            <span className="display-italic">measurable visibility</span>.
          </h2>

          <p
            className="font-serif mt-7"
            style={{
              fontSize: "clamp(19px, 1.7vw, 24px)",
              lineHeight: 1.5,
              color: "var(--nu-heritage)",
              fontStyle: "italic",
              fontWeight: 500,
              maxWidth: "44ch",
            }}
          >
            “Brands that earn third-party coverage outperform brands that buy
            attention. Four decades and 32,000+ campaigns later, that
            conviction has only sharpened — now that AI engines decide what
            buyers see first.”
          </p>

          <div
            className="font-sans mt-8 flex flex-col gap-4"
            style={{ fontSize: 16, lineHeight: 1.75, color: "var(--nu-ink)", maxWidth: "62ch" }}
          >
            <p>
              Rick Smith is founder and CEO of NewsUSA, a pioneering media
              distribution and AI authority platform he launched in 1987 after
              recognizing the need for measurable media-visibility solutions
              for brands and organizations. Earlier, he founded News Canada and
              helped redefine how businesses use syndicated editorial content,
              strategic storytelling, and media placement to build awareness
              and credibility.
            </p>
            <p>
              Today, Rick focuses on the intersection of AI discoverability,
              authority positioning, and strategic communications through
              NewsUSA's expanding AI-visibility initiatives — MediaMatch AI™,
              the AI Authority Engine™, and NewsFLOW Intelligence™. He is also
              an active investor and advisor to more than 100 emerging
              companies across fintech, green tech, biotech, ad tech, and
              mobility innovation.
            </p>
            <p>
              Rick has authored six business books, served on advisory boards,
              spoken at investor conferences, and helped growth-stage companies
              accelerate revenue, visibility, and market traction globally.
            </p>
          </div>

          {/* Facts row */}
          <div
            className="mt-10 pt-8 border-t grid grid-cols-1 sm:grid-cols-3 gap-6"
            style={{ borderColor: "var(--nu-line)" }}
          >
            {facts.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-start gap-4"
                  data-testid={`founder-fact-${i}`}
                >
                  <div
                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm"
                    style={{
                      background: "rgba(0,104,194,0.08)",
                      color: "var(--nu-liberty)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div
                      className="font-sans font-semibold"
                      style={{ color: "var(--nu-heritage)", fontSize: 15 }}
                    >
                      {f.label}
                    </div>
                    <div
                      className="font-sans text-sm"
                      style={{ color: "var(--nu-muted)" }}
                    >
                      {f.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:rsmith@newsusa.com"
              className="btn-pill btn-primary"
              data-testid="founder-cta-email"
            >
              <Mail size={16} /> rsmith@newsusa.com
            </a>
            <a
              href="tel:+17035088700"
              className="btn-pill btn-ghost-dark"
              data-testid="founder-cta-phone"
            >
              <Phone size={16} /> 703-508-8700
            </a>
            <a
              href="https://newsusa.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-ghost-dark"
              data-testid="founder-cta-audit"
            >
              Run my free AI audit <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
