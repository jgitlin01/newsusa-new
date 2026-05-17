import React from "react";
import { ArrowUpRight, Download } from "lucide-react";

const MediaKitBanner = () => {
  return (
    <section className="py-20 bg-patriot text-pearl relative overflow-hidden" data-testid="section-media-kit">
      <div className="hero-grain" style={{ opacity: 0.2 }} />
      <div className="container-nu grid grid-cols-12 gap-8 items-center relative z-[1]">
        <div className="col-span-12 lg:col-span-7">
          <div className="eyebrow" style={{ color: "#7FB7E8" }}>Free for communications teams</div>
          <h2
            className="display mt-4"
            style={{
              color: "var(--nu-pearl)",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              lineHeight: 1,
            }}
          >
            Need a free{" "}
            <span className="display-italic" style={{ color: "#7FB7E8" }}>
              earned-media kit?
            </span>
          </h2>
          <p
            className="font-sans mt-5"
            style={{ color: "rgba(255,255,255,0.82)", fontSize: 17, maxWidth: "52ch" }}
          >
            Our editors compiled a 36-page press toolkit — release templates,
            broadcast scripts, pitch frameworks, and a placement-tracking
            spreadsheet. Built on industry best practices. Yours, free.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
          <a
            href="#contact"
            className="btn-pill btn-primary"
            style={{ background: "var(--nu-pearl)", color: "var(--nu-heritage)" }}
            data-testid="media-kit-download"
          >
            Download the toolkit <Download size={16} />
          </a>
          <a
            href="#services"
            className="btn-pill btn-ghost-light"
            data-testid="media-kit-services"
          >
            See what's inside <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaKitBanner;
