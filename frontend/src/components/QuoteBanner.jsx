import React from "react";
import { ArrowUpRight } from "lucide-react";

const QuoteBanner = () => {
  return (
    <section
      id="contact"
      className="section bg-pearl"
      data-testid="section-quote"
    >
      <div className="container-nu">
        <div
          className="grid grid-cols-12 gap-8 items-center border-t border-b py-20 lg:py-28"
          style={{ borderColor: "var(--nu-line)" }}
        >
          <div className="col-span-12 lg:col-span-8">
            <div className="eyebrow">Request a coverage plan</div>
            <h2
              className="display mt-4"
              style={{
                fontSize: "clamp(54px, 9vw, 160px)",
                lineHeight: 0.9,
              }}
            >
              Request{" "}
              <span className="display-italic">your quote</span>
              <br />
              today.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 lg:items-end">
            <a
              href="mailto:hello@newsusa.example"
              className="btn-pill btn-primary"
              data-testid="quote-contact-cta"
            >
              Contact our team <ArrowUpRight size={16} />
            </a>
            <span
              className="font-sans text-sm"
              style={{ color: "var(--nu-muted)", maxWidth: 280, textAlign: "right" }}
            >
              Average response in under one business day. NDAs available on
              request.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;
