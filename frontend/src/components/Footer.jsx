import React from "react";
import Logo from "./Logo";
import { ArrowUpRight, Linkedin, Mail, Phone, Globe } from "lucide-react";

const columns = [
  {
    title: "AI Suite",
    links: [
      "MediaMatch AI™",
      "AI Authority Engine™",
      "NewsFLOW Intelligence™",
      "AI Authority Audit™",
    ],
  },
  {
    title: "Editorial",
    links: [
      "Press Release Distribution",
      "NewsUSA+",
      "NewsUSA&",
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
  return (
    <footer
      className="text-pearl"
      style={{ background: "var(--nu-constitution)" }}
      data-testid="site-footer"
    >
      <div className="container-nu pt-24 pb-12">
        <div
          className="grid grid-cols-12 gap-10 pb-16 border-b"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          <div className="col-span-12 lg:col-span-5">
            <Logo light />
            <h3
              className="display mt-10"
              style={{
                color: "var(--nu-pearl)",
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1,
              }}
            >
              Media Coverage.
              <br />
              <span className="display-italic" style={{ color: "#7FB7E8" }}>
                Guaranteed.
              </span>
            </h3>
            <p
              className="font-sans mt-6"
              style={{ color: "rgba(255,255,255,0.65)", maxWidth: "40ch" }}
            >
              The AI-enhanced earned-media network founded by Rick Smith in
              1987. 32,000+ campaigns. $50M+ in tracked sales growth.
            </p>
            <a
              href="https://newsusa.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary mt-8 inline-flex"
              data-testid="footer-cta"
            >
              Get free AI audit <ArrowUpRight size={16} />
            </a>

            <div
              className="mt-10 pt-8 border-t flex flex-col gap-3 font-sans text-sm"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.78)" }}
            >
              <div className="eyebrow" style={{ color: "#7FB7E8" }}>
                Founder & CEO
              </div>
              <div
                className="display"
                style={{ color: "var(--nu-pearl)", fontSize: 22, fontWeight: 700 }}
              >
                Rick Smith
              </div>
              <a
                href="mailto:rsmith@newsusa.com"
                className="inline-flex items-center gap-2 hover:text-pearl"
                data-testid="footer-email-rick"
              >
                <Mail size={14} /> rsmith@newsusa.com
              </a>
              <a
                href="tel:+17035088700"
                className="inline-flex items-center gap-2 hover:text-pearl"
                data-testid="footer-phone"
              >
                <Phone size={14} /> 703-508-8700
              </a>
              <a
                href="https://newsusa.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-pearl"
                data-testid="footer-website"
              >
                <Globe size={14} /> NewsUSA.ai
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <div className="eyebrow" style={{ color: "#7FB7E8", marginBottom: 18 }}>
                  {c.title}
                </div>
                <ul
                  className="flex flex-col gap-3 font-sans text-sm"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#contact"
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

        <div className="pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div
            className="font-sans text-sm"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            © {new Date().getFullYear()} NewsUSA — Content confidential. All
            rights reserved.
          </div>
          <div
            className="flex items-center gap-5"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <a href="mailto:sales@newsusa.com" aria-label="Sales email" data-testid="footer-sales">
              <Mail size={18} />
            </a>
            <a href="tel:+17035088700" aria-label="Phone" data-testid="footer-phone-icon">
              <Phone size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" data-testid="footer-linkedin">
              <Linkedin size={18} />
            </a>
            <a
              href="https://newsusa.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NewsUSA.ai"
              data-testid="footer-newsusa-ai"
            >
              <Globe size={18} />
            </a>
          </div>
          <div
            className="font-sans text-xs"
            style={{
              color: "rgba(255,255,255,0.4)",
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
