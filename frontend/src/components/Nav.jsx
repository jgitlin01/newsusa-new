import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#methodology" },
  { label: "Coverage", href: "#portfolio" },
  { label: "Founder", href: "#founder" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="nav-shell"
      data-scrolled={scrolled}
      data-testid="primary-nav"
      style={{ color: scrolled ? "#122D51" : "#FFFFFF" }}
    >
      <div className="container-nu flex items-center justify-between" style={{ height: scrolled ? 70 : 82, transition: "height 0.3s ease" }}>
        <a href="#top" data-testid="nav-logo-link" aria-label="NewsUSA home">
          <Logo light={!scrolled} />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ color: "inherit" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/rsmith-29/15min?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-primary hidden sm:inline-flex"
            data-testid="nav-cta-request-coverage"
          >
            Book Discovery Call
            <ArrowUpRight size={16} />
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            data-testid="nav-mobile-toggle"
            style={{ color: "inherit" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(14px)",
            borderColor: "var(--nu-line)",
            color: "#122D51",
          }}
          data-testid="nav-mobile-menu"
        >
          <div className="container-nu py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base"
                style={{ color: "#122D51" }}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/rsmith-29/15min?month=2025-05"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-pill btn-primary self-start mt-2"
              data-testid="nav-mobile-cta"
            >
              Book Discovery Call <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
