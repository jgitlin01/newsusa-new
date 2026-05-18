import React from "react";
import Logo from "./Logo";
import { ArrowUpRight, Linkedin, Mail, Phone, Globe } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const columns = [
  {
    title: "AI Suite",
    links: [
      "NewsUSA AI Media Targeting™",
      "NewsUSA AI Citation Authority Builder™",
      "NewsUSA AI Authority Audit™",
    ],
  },
  {
    title: "Placements",
    links: [
      "Top-Tier Syndicated Placements",
      "NewsUSA+ Earned Authority Program",
      "Broadcast & SMT",
      "Radio Network",
      "Digital Placements",
      "Bilingual & Spanish-Language",
    ],
  },
  {
    title: "Network",
    links: [
      "How We Work",
      "Coverage Portfolio",
      "Editorial Board",
      "Training",
      "FAQs",
      "About Rick Smith",
    ],
  },
];

const Footer = () => {
  const [ref, visible] = useReveal({ threshold: 0.05 });
  const r = (d) => `reveal ${visible ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <footer
      ref={ref}
      className="text-pearl"
      style={{ background: "var(--nu-constitution)" }}
      data-testid="site-footer"
    >
      <div className="container-nu pb-16" style={{ paddingTop: "200px" }}>
        <div
          className="grid grid-cols-12 gap-10 pb-20 border-b"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <div className={`col-span-12 lg:col-span-5 ${r(1)}`}>
            <Logo light />
            <h3
              className="display mt-12"
              style={{
                color: "var(--nu-pearl)",
                fontSize: "clamp(52px, 5.5vw, 82px)",
                lineHeight: 1,
              }}
            >
              Top-Tier Placements.
              <br />
              <span className="display-italic" style={{ color: "#7FB7E8" }}>
                100% Guaranteed.
              </span>
            </h3>
            <p
              className="font-sans mt-6"
              style={{ color: "rgba(255,255,255,0.65)", maxWidth: "40ch", fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.6 }}
            >
              America's only AI Authority Network. Founded by Rick Smith in
              1987. 32,000+ campaigns. $50M+ in tracked sales growth.
            </p>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary mt-8 inline-flex"
              data-testid="footer-cta"
            >
              Book a discovery call <ArrowUpRight size={16} />
            </a>

            <div
              className="mt-12 pt-10 border-t flex flex-col gap-4 font-sans"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.78)" }}
            >
              <div className="eyebrow" style={{ color: "#7FB7E8" }}>
                Founder & CEO
              </div>
              <div
                className="display"
                style={{ color: "var(--nu-pearl)", fontSize: 34, fontWeight: 700 }}
              >
                Rick Smith
              </div>
              <a
                href="mailto:rsmith@newsusa.com"
                className="inline-flex items-center gap-2 hover:text-pearl"
                style={{ fontSize: 17 }}
                data-testid="footer-email-rick"
              >
                <Mail size={16} /> rsmith@newsusa.com
              </a>
              <a
                href="tel:+17035088700"
                className="inline-flex items-center gap-2 hover:text-pearl"
                style={{ fontSize: 17 }}
                data-testid="footer-phone"
              >
                <Phone size={16} /> 703-508-8700
              </a>
              <a
                href="https://newsusa.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-pearl"
                style={{ fontSize: 17 }}
                data-testid="footer-website"
              >
                <Globe size={16} /> NewsUSA.ai
              </a>
            </div>
          </div>

          <div className={`col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pt-4 ${r(3)}`}>
            {columns.map((c) => (
              <div key={c.title}>
                <div className="eyebrow" style={{ color: "#7FB7E8", marginBottom: 20, fontSize: 13 }}>
                  {c.title}
                </div>
                <ul
                  className="flex flex-col gap-4 font-sans"
                  style={{ color: "rgba(255,255,255,0.78)", fontSize: 17 }}
                >
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href={CALENDLY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pearl transition-colors"
                        data-testid={`footer-link-${l.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}`}
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div
            className="font-sans"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: 15 }}
          >
            © {new Date().getFullYear()} NewsUSA — AI Authority Network™. All
            rights reserved.
          </div>
          <div
            className="flex items-center gap-5"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <a href="mailto:sales@newsusa.com" aria-label="Sales email" data-testid="footer-sales">
              <Mail size={20} />
            </a>
            <a href="tel:+17035088700" aria-label="Phone" data-testid="footer-phone-icon">
              <Phone size={20} />
            </a>
            <a href="https://www.linkedin.com/company/newsusa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin">
              <Linkedin size={20} />
            </a>
            <a
              href="https://newsusa.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NewsUSA.ai"
              data-testid="footer-newsusa-ai"
            >
              <Globe size={20} />
            </a>
          </div>
          <div
            className="font-sans"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Privacy · Terms · Code of Editorial Conduct
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
