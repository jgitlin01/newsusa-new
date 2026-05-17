import React from "react";
import Logo from "./Logo";
import { ArrowUpRight, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const columns = [
  {
    title: "Programs",
    links: [
      "Press Release Distribution",
      "NewsUSA+",
      "NewsUSA&",
      "Broadcast & TV",
      "Radio Network",
      "Digital Placements",
      "Bilingual & Spanish-Language",
      "Public Affairs",
    ],
  },
  {
    title: "Network",
    links: [
      "How We Work",
      "Coverage Portfolio",
      "Editorial Board",
      "Training",
      "Media Kit",
      "FAQs",
    ],
  },
  {
    title: "Offices",
    links: [
      "Washington, D.C.",
      "New York, NY",
      "Austin, TX",
      "Press inquiries",
      "Careers",
      "Partner with us",
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
        <div className="grid grid-cols-12 gap-10 pb-16 border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
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
              An earned-media network for communications leaders who measure
              their work in coverage, not in pitches sent.
            </p>
            <a
              href="#contact"
              className="btn-pill btn-primary mt-8 inline-flex"
              data-testid="footer-cta"
            >
              Request Coverage <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((c) => (
              <div key={c.title}>
                <div
                  className="eyebrow"
                  style={{ color: "#7FB7E8", marginBottom: 18 }}
                >
                  {c.title}
                </div>
                <ul className="flex flex-col gap-3 font-sans text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#contact"
                        className="hover:text-pearl transition-colors"
                        data-testid={`footer-link-${l.toLowerCase().replace(/\s+/g, "-")}`}
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
            © {new Date().getFullYear()} NewsUSA Editorial Network. All rights reserved.
          </div>
          <div className="flex items-center gap-5" style={{ color: "rgba(255,255,255,0.7)" }}>
            <a href="mailto:hello@newsusa.example" aria-label="Email" data-testid="footer-email"><Mail size={18} /></a>
            <a href="tel:+1" aria-label="Phone" data-testid="footer-phone"><Phone size={18} /></a>
            <a href="#" aria-label="LinkedIn" data-testid="footer-linkedin"><Linkedin size={18} /></a>
            <a href="#" aria-label="X / Twitter" data-testid="footer-twitter"><Twitter size={18} /></a>
          </div>
          <div className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Privacy · Terms · Code of Editorial Conduct
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
