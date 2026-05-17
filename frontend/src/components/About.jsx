import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section bg-pearl"
      data-testid="section-about"
    >
      <div className="container-nu max-w-4xl">
        <div className="eyebrow">About NewsUSA</div>
        <h2
          className="display mt-4"
          style={{ fontSize: "clamp(36px, 4.4vw, 60px)", lineHeight: 1.05 }}
        >
          An earned-media network supporting communications leaders since 1988.
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-10 font-sans" style={{ fontSize: 16, lineHeight: 1.75, color: "var(--nu-ink)" }}>
          <p>
            NewsUSA is an earned-media network specialized in the editorial
            design and guaranteed distribution of press communications across
            print, broadcast, radio, and digital outlets. Our mission is to
            create credible coverage — verified, third-party reported, and
            measurable — for a diversified client base of corporate, civic,
            healthcare, public affairs, and consumer brands.
          </p>

          <h3
            className="display mt-4"
            style={{ fontSize: 26, fontWeight: 700 }}
          >
            Your strategic and editorial partner
          </h3>
          <p>
            Built almost four decades ago with the ambition of becoming the
            reference network for earned media in the United States, our
            specialization quickly earned the trust of major communications
            departments, public health initiatives, civic foundations, and
            policy organizations.
          </p>

          <p>
            Today, NewsUSA is expanding its program portfolio. We now offer
            integrated solutions across broadcast production, motion graphics,
            print editorial, digital syndication, editorial consulting, and
            earned-media training — designed to give communications leaders a
            single accountable partner for the full lifecycle of an
            announcement.
          </p>

          <h3
            className="display mt-4"
            style={{ fontSize: 26, fontWeight: 700 }}
          >
            Why the wire still matters
          </h3>
          <p>
            In a saturated digital news cycle, a placed story — credited,
            edited, archived — still outperforms paid noise on credibility,
            recall, and stakeholder trust. Mastery of the editorial process,
            combined with a guaranteed distribution footprint, allows NewsUSA
            to deliver coverage that audiences read and remember.
          </p>

          <h3
            className="display mt-4"
            style={{ fontSize: 26, fontWeight: 700 }}
          >
            A national footprint, a local operation
          </h3>
          <p>
            With editorial teams in Washington, New York, and Austin, and
            distribution operators coordinating across all 50 states, we
            operate with the responsiveness of a local newsroom and the reach
            of a national network. Programs run continuously across U.S. time
            zones to meet every news-cycle window.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
