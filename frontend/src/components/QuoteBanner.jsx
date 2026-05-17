import React from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

const QuoteBanner = () => {
  return (
    <section id="contact" className="section bg-pearl" data-testid="section-quote">
      <div className="container-nu">
        <div
          className="grid grid-cols-12 gap-8 items-center border-t border-b py-20 lg:py-28"
          style={{ borderColor: "var(--nu-line)" }}
        >
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">Talk to Rick's team</div>
            <h2
              className="display mt-4"
              style={{
                fontSize: "clamp(54px, 9vw, 160px)",
                lineHeight: 0.9,
              }}
            >
              Run your free{" "}
              <span className="display-italic">AI audit</span>
              <br />
              today.
            </h2>
            <p
              className="font-sans mt-6"
              style={{ color: "var(--nu-muted)", maxWidth: "52ch", fontSize: 17 }}
            >
              See where your brand appears across newsrooms and AI engines,
              where competitors beat you, and the fastest path to recover
              revenue from AI-driven buyers.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <a
              href="https://newsusa.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-primary"
              data-testid="quote-audit-cta"
            >
              Get free audit at NewsUSA.ai <ArrowUpRight size={16} />
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
              15-minute discovery call. NDAs available on request.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
