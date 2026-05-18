import React from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import useReveal from "../hooks/useReveal";

const CALENDLY = "https://calendly.com/rsmith-29/15min?month=2025-05";

const QuoteBanner = () => {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const r = (d) => `reveal ${visible ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section ref={ref} id="contact" className="section bg-pearl" data-testid="section-quote">
      <div className="container-nu">
        <div
          className="grid grid-cols-12 gap-8 items-center border-t border-b py-20 lg:py-28"
          style={{ borderColor: "var(--nu-line)" }}
        >
          <div className="col-span-12 lg:col-span-8">
            <div className={`eyebrow ${r(1)}`}>Talk to Rick's team</div>
            <h2
              className={`display-xl mt-4 ${r(2)}`}
              style={{
                fontSize: "clamp(67px, 13.5vw, 225px)",
              }}
            >
              Book your free
              <br />
              <span className="display-italic" style={{ color: "var(--nu-liberty)" }}>
                discovery call
              </span>
              <br />
              today.
            </h2>
            {/* Growing horizontal rule */}
            <div
              className={`hr-grow mt-6 ${visible ? "hr-grow--visible" : ""}`}
              style={{ maxWidth: 200, transitionDelay: "0.4s" }}
            />
            <p
              className={`font-sans mt-6 ${r(4)}`}
              style={{ color: "var(--nu-muted)", maxWidth: "52ch", fontSize: 21 }}
            >
              15 minutes with Rick's team. See where your brand appears across
              AI engines, where competitors beat you, and the fastest path to
              becoming the source AI cites to your buyers.
            </p>
          </div>
          <div className={`col-span-12 lg:col-span-4 flex flex-col gap-4 lg:items-end ${r(5)}`}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary"
              data-testid="quote-audit-cta"
            >
              Book free discovery call <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:rsmith@newsusa.com"
              className="btn-pill btn-ghost-dark"
              data-testid="quote-email-cta"
            >
              <Mail size={16} /> rsmith@newsusa.com
            </a>
            <a
              href="tel:+17035088700"
              className="btn-pill btn-ghost-dark"
              data-testid="quote-phone-cta"
            >
              <Phone size={16} /> 703-508-8700
            </a>
            <span
              className="font-sans text-sm mt-2"
              style={{ color: "var(--nu-muted)", maxWidth: 300, textAlign: "right" }}
            >
              NDAs available on request.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
