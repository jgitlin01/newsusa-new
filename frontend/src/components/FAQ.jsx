import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    q: "Why work with an earned-media network instead of pitching in-house?",
    a: "An earned-media network combines editorial expertise, a guaranteed distribution footprint, and verified placement reporting. Your team stays focused on strategy and stakeholder management while NewsUSA editors, syndication operators, and broadcast producers handle the day-to-day execution.",
  },
  {
    q: "What types of programs do you produce?",
    a: "We design earned-media programs across corporate, public affairs, healthcare, financial, consumer, and Spanish-language sectors — including press release distribution, broadcast SMTs, radio releases, digital placements, bilingual editorial, and integrated NewsUSA+ programs.",
  },
  {
    q: "Do you only handle distribution, or do you also support content?",
    a: "We support the full lifecycle — strategic framing, message hierarchy, editorial copywriting, art direction for broadcast packages, syndication, and clip reporting. Our editors operate to newsroom standards, not marketing standards.",
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
    a: "Pricing depends on program scope: number of releases, distribution channels, broadcast inclusion, language, and timeline. A typical mid-scope engagement falls between $3,000 and $12,000. A personalized proposal is provided after an initial conversation.",
  },
  {
    q: "Do you offer custom programs for government and public affairs?",
    a: "Yes. Our public-affairs team builds compliant, community-level earned-media programs for federal, state, and civic foundations, with full transparency on placement and reach.",
  },
  {
    q: "Can you support time-sensitive announcements?",
    a: "Yes. Our express distribution can move a release across the network within hours. We staff coverage seven days a week for time-critical news cycles.",
  },
  {
    q: "Do you offer earned-media training?",
    a: "Yes. We provide remote and on-site training for in-house communications teams covering newsroom thinking, narrative structure, broadcast preparation, and placement strategy.",
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
    a: "Our distribution network is U.S.-first across all 50 states and territories. For international amplification, we partner with vetted regional networks and produce localized editorial in English and Spanish.",
  },
];

const FAQ = () => {
  return (
    <section
      id="faqs"
      className="section bg-pearl"
      data-testid="section-faqs"
    >
      <div className="container-nu grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="eyebrow">FAQs</div>
          <h2
            className="display mt-4"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1 }}
          >
            Answers, on the record.
          </h2>
          <p
            className="font-sans mt-6"
            style={{ color: "var(--nu-muted)", maxWidth: "38ch" }}
          >
            Common questions from communications directors, public affairs
            leads, and CMOs about working with an earned-media network.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8">
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
