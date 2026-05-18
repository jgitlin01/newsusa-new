import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import useReveal from "../hooks/useReveal";

const faqs = [
  {
    q: "What is the AI Authority Network™ and how is it different from PR distribution?",
    a: "The AI Authority Network™ is the only end-to-end platform engineered to make your brand the trusted source that AI systems — ChatGPT, Perplexity, Gemini, and others — surface when buyers ask for recommendations. Traditional PR distribution gets you mentions. AI authority gets you cited. We engineer the trust signals (editorial credibility, source diversity, repetition, structured data) that AI models rely on.",
  },
  {
    q: "Why work with NewsUSA instead of pitching in-house?",
    a: "NewsUSA combines editorial expertise, a guaranteed top-tier placement footprint across 2,500+ news sites, and verified placement reporting — plus the only proprietary AI suite designed to turn those placements into citations across ChatGPT, Gemini, and Perplexity. Your team stays focused on strategy while NewsUSA editors, syndication operators, and broadcast producers handle execution.",
  },
  {
    q: "What types of programs do you produce?",
    a: "We deliver guaranteed syndicated placements across corporate, public affairs, healthcare, financial, consumer, and Spanish-language sectors — including top-tier editorial placements, broadcast SMTs, radio releases, digital placements, bilingual content, and integrated monthly AI Authority programs.",
  },
  {
    q: "Do you handle content and placements, or just one?",
    a: "We support the full lifecycle — strategic framing, message hierarchy, editorial copywriting, guaranteed syndicated placements, AI citation optimization, and verified clip reporting. Our editors operate to newsroom standards, not marketing standards.",
  },
  {
    q: "What are your production timelines?",
    a: "Most programs run on a one-to-four-week cycle. Express production is available when a news window demands it. We confirm an exact timeline at kickoff and report against it weekly.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We begin with a kickoff to understand your announcement and audience. You are assigned a dedicated account director. We deliver an editorial plan, refine through structured feedback, syndicate the program across the network, and close with a verified clip report.",
  },
  {
    q: "Why choose a network over an individual publicist?",
    a: "A network combines multiple disciplines — editorial, syndication, broadcast, and digital — coordinated through structured processes. That ensures consistent quality, secure workflows (NDA, compliance, version control), and reliable timelines for high-stakes announcements.",
  },
  {
    q: "How much does a program cost?",
    a: "AI Authority campaigns start at $3,750/month and scale with distribution scope, targeted placements (USA Today, LA Times, CA Business Journal, etc.), broadcast inclusion, and language. Monthly programs deliver ongoing authority-building — not one-off placements. A personalized proposal is provided after a 15-minute discovery call.",
  },
  {
    q: "Do you offer custom programs for government and public affairs?",
    a: "Yes. Our public-affairs team builds compliant, community-level earned-media programs for federal, state, and civic foundations, with full transparency on placement and reach.",
  },
  {
    q: "Can you support time-sensitive announcements?",
    a: "Yes. Our express syndication can place a story across the network within hours. We staff coverage seven days a week for time-critical news cycles.",
  },
  {
    q: "Do you offer earned-media training?",
    a: "Yes. We provide remote and on-site training for in-house communications teams covering newsroom thinking, narrative structure, broadcast preparation, placement strategy, and AI authority building.",
  },
  {
    q: "Where can I see examples of past coverage?",
    a: "Our coverage portfolio includes work across healthcare, public affairs, finance, energy, and consumer brands. Due to confidentiality on some engagements, additional examples are shared upon request.",
  },
  {
    q: "Is my data handled confidentially?",
    a: "Confidentiality is contractually guaranteed. All materials are securely stored. An NDA can be signed prior to any document exchange.",
  },
  {
    q: "Do you work internationally?",
    a: "Our syndicated placement network is U.S.-first across all 50 states and territories. For international amplification, we partner with vetted regional networks and produce localized editorial in English and Spanish.",
  },
];

const FAQ = () => {
  const [headerRef, headerVisible] = useReveal({ threshold: 0.15 });
  const [accordionRef, accordionVisible] = useReveal({ threshold: 0.05 });
  const r = (vis, d) => `reveal ${vis ? "reveal--visible" : ""} reveal-d${d}`;

  return (
    <section
      id="faqs"
      className="section bg-pearl bg-grain-light bg-mesh-cool"
      data-testid="section-faqs"
    >
      <div className="container-nu grid grid-cols-12 gap-10">
        <div ref={headerRef} className="col-span-12 lg:col-span-4">
          <div className={`section-label mb-2 ${r(headerVisible, 1)}`}>005 / FAQs</div>
          <div className={`eyebrow ${r(headerVisible, 1)}`}>FAQs</div>
          <h2
            className={`display mt-4 ${r(headerVisible, 2)}`}
            style={{ fontSize: "clamp(52px, 6vw, 90px)", lineHeight: 1 }}
          >
            Answers, on the record.
          </h2>
          <p
            className={`font-sans mt-6 ${r(headerVisible, 3)}`}
            style={{ color: "var(--nu-muted)", maxWidth: "38ch" }}
          >
            Common questions from marketing and communications leaders about
            building AI authority and working with America's only AI Authority Network.
          </p>
          <a
            href="https://calendly.com/rsmith-29/15min?month=2025-05"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-pill btn-primary mt-8 self-start inline-flex ${r(headerVisible, 4)}`}
            data-testid="faq-cta-discovery"
          >
            Book a Free Discovery Call <ArrowUpRight size={16} />
          </a>
        </div>

        <div
          ref={accordionRef}
          className={`col-span-12 lg:col-span-8 ${r(accordionVisible, 2)}`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="faq-item"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-sans font-medium text-lg py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-base leading-relaxed pb-6" style={{ color: "var(--nu-ink)" }}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
