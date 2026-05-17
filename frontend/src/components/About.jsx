import React from "react";

const About = () => {
  return (
    <section id="about" className="section bg-pearl" data-testid="section-about">
      <div className="container-nu max-w-4xl">
        <div className="eyebrow">About NewsUSA</div>
        <h2
          className="display mt-4"
          style={{ fontSize: "clamp(36px, 4.4vw, 60px)", lineHeight: 1.05 }}
        >
          Founded by Rick Smith in 1987. 32,000+ campaigns. One trusted network.
        </h2>

        <div
          className="grid grid-cols-1 gap-6 mt-10 font-sans"
          style={{ fontSize: 16, lineHeight: 1.75, color: "var(--nu-ink)" }}
        >
          <p>
            NewsUSA is the earned-media network founded by Rick Smith in 1987.
            For nearly four decades we have specialized in the editorial design,
            guaranteed distribution, and now AI-optimization of press
            communications across print, broadcast, radio, digital outlets — and
            the AI engines making today's purchase decisions.
          </p>

          <h3 className="display mt-4" style={{ fontSize: 26, fontWeight: 700 }}>
            From the wire to the AI answer
          </h3>
          <p>
            For decades, buyers checked the newspaper, the trade press, the
            evening news. Today they also check ChatGPT, Gemini, Perplexity, and
            an expanding set of AI engines that quietly shape brand preference
            before a sales team is ever contacted. 88% of businesses don't
            appear when prospects ask AI for recommendations. We exist to close
            that gap.
          </p>
          <p>
            Our exclusive news-site network and 40+ years of content syndication
            infrastructure produce exactly the kind of authoritative,
            third-party, AI-optimized editorial presence that modern engines
            cite — and modern buyers trust.
          </p>

          <h3 className="display mt-4" style={{ fontSize: 26, fontWeight: 700 }}>
            Why Rick Smith built NewsUSA
          </h3>
          <p>
            Rick Smith founded NewsUSA in 1987 with a single conviction: brands
            that earn third-party coverage outperform brands that buy attention.
            Four decades and 32,000+ campaigns later, that conviction has held —
            and it has scaled. NewsUSA now operates an AI-enhanced earned-media
            ecosystem powered by three proprietary platforms: NewsUSA MediaMatch
            AI™, the AI Authority Engine™, and NewsFLOW Intelligence™.
          </p>
          <p>
            We work across five categories — consumer, tech, finance, health,
            and professional — for in-house marketing teams, communications
            departments, and the agencies that serve them.
          </p>

          <h3 className="display mt-4" style={{ fontSize: 26, fontWeight: 700 }}>
            What our network delivers
          </h3>
          <p>
            Campaigns delivered through NewsUSA have produced $50M+ in tracked
            sales growth and more than 12,600 inbound calls across our most
            measured client programs. Monthly national features have driven
            retail demand for consumer brands; fast editorial coverage has
            become reusable sales infrastructure for tech and finance brands;
            and AI citation work is now strengthening discoverability for
            clients in every category we serve.
          </p>

          <h3 className="display mt-4" style={{ fontSize: 26, fontWeight: 700 }}>
            Start with a 15-minute conversation
          </h3>
          <p>
            Every engagement begins with a 15-minute discovery call. We review
            your goals, market, and competitors, then recommend the best
            authority growth plan for your category. You can also start with our
            free AI Authority Audit™ — a snapshot of where your brand appears
            now, where competitors beat you, and the best next moves. Reach
            Rick's team directly at{" "}
            <a
              href="mailto:rsmith@newsusa.com"
              className="link-underline"
              data-testid="about-email-rick"
            >
              rsmith@newsusa.com
            </a>{" "}
            or{" "}
            <a
              href="tel:+17035088700"
              className="link-underline"
              data-testid="about-phone"
            >
              703-508-8700
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
