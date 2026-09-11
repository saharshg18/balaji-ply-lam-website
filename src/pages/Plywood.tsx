import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';
import {
  ContactLink,
  Eyebrow,
  Reveal,
  TextLink,
} from '../components/ui';
import {
  brands,
  messages,
} from '../data/site';

const plywoodTypes = [
  {
    name: 'MR Plywood',
    shortName: 'MR',
    description:
      'A practical plywood option for many dry interior applications where everyday strength and stability are required.',
    uses: 'Furniture, wardrobes, shelving and general interior work.',
  },
  {
    name: 'BWR Plywood',
    shortName: 'BWR',
    description:
      'Designed for applications where better resistance to moisture is important compared with standard MR plywood.',
    uses: 'Kitchens, utility areas and furniture exposed to occasional moisture.',
  },
  {
    name: 'BWP / Marine Plywood',
    shortName: 'BWP',
    description:
      'A higher moisture-resistance option for applications where exposure to moisture is a key consideration.',
    uses: 'Kitchens, areas with higher moisture exposure and demanding interior applications.',
  },
];

const boardTypes = [
  {
    name: 'MDF',
    description:
      'An engineered wood-fibre board with a smooth, consistent surface, commonly used for suitable furniture and interior applications.',
    uses: 'Furniture components, decorative work, shelving and interior detailing.',
  },
  {
    name: 'HDF / HDMR',
    description:
      'Denser engineered boards that can be useful where a smooth, stable substrate is required for suitable interior applications.',
    uses: 'Furniture, decorative panels and selected interior applications.',
  },
];

const applications = [
  'Kitchen cabinets',
  'Wardrobes',
  'Beds & furniture',
  'Shelving & storage',
  'Office interiors',
  'Commercial interiors',
];

export function PlywoodPage() {
  return (
    <>
      <SEO page="plywood" />

      {/* HERO */}
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <Reveal>
            <Eyebrow>PLYWOOD &amp; BOARDS</Eyebrow>

            <h1>
              Plywood &amp; Boards
              <br />
              <em>in Kolkata</em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="inner-hero-description">
              Looking for plywood in Kolkata? Balaji Ply &amp; Lam
              in Bhowanipore offers plywood and engineered boards
              for furniture, kitchens, wardrobes, offices and
              interior projects. Explore suitable grades and board
              options based on how you plan to use them.
            </p>

            <div className="button-group">
              <ContactLink
                kind="whatsapp"
                message={messages.plywood}
              >
                Get Plywood Catalogue
              </ContactLink>

              <ContactLink
                kind="call"
                variant="outline"
              >
                Call Us
              </ContactLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANSWER FIRST */}
      <section
        className="section plywood-answer"
        aria-labelledby="plywood-answer-title"
      >
        <Reveal className="container two-column-content">
          <div>
            <Eyebrow>CHOOSING PLYWOOD</Eyebrow>

            <h2 id="plywood-answer-title">
              The right plywood depends
              <br />
              <em>on where you use it.</em>
            </h2>
          </div>

          <div className="content-copy">
            <p>
              There is no single plywood grade that is best for
              every project. The right choice depends on moisture
              exposure, the type of furniture or interior being
              built, required strength, thickness and budget.
            </p>

            <p>
              MR, BWR and BWP / marine plywood are suited to
              different requirements. MDF and HDF / HDMR are
              different engineered-board options that may also be
              appropriate for selected furniture and interior
              applications.
            </p>

            <TextLink to="/guides/mr-vs-bwr-vs-bwp-plywood/">
              Compare plywood grades
            </TextLink>
          </div>
        </Reveal>
      </section>

      {/* PLYWOOD TYPES */}
      <section
        className="section"
        aria-labelledby="plywood-types-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>PLYWOOD GRADES</Eyebrow>

              <h2 id="plywood-types-title">
                Understand the
                <br />
                <em>main options.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Different grades are designed for
                <br />
                different levels of moisture exposure.
              </p>
            </div>
          </Reveal>

          <div className="plywood-type-grid">
            {plywoodTypes.map((type, index) => (
              <article
                className="plywood-type-card"
                key={type.shortName}
              >
                <span className="plywood-type-number">
                  0{index + 1}
                </span>

                <span className="plywood-type-label">
                  {type.shortName}
                </span>

                <h3>{type.name}</h3>

                <p>{type.description}</p>

                <div className="plywood-type-use">
                  <span>Common applications</span>
                  <strong>{type.uses}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="section-inline-note">
            <p>
              Specifications, certifications, thicknesses and
              current availability can vary by product and brand.
              Contact us to confirm the right option for your
              application.
            </p>
          </div>
        </div>
      </section>

      {/* BOARDS */}
      <section
        className="section boards-section"
        aria-labelledby="boards-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>ENGINEERED BOARDS</Eyebrow>

              <h2 id="boards-title">
                More than plywood.
                <br />
                <em>More ways to build.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Explore engineered boards for
                <br />
                suitable interior applications.
              </p>
            </div>
          </Reveal>

          <div className="board-grid">
            {boardTypes.map((board, index) => (
              <article
                className="board-card"
                key={board.name}
              >
                <div className="board-card-number">
                  0{index + 1}
                </div>

                <h3>{board.name}</h3>

                <p>{board.description}</p>

                <div className="board-card-use">
                  <span>Common applications</span>
                  <strong>{board.uses}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        className="section applications-section"
        aria-labelledby="plywood-applications-title"
      >
        <div className="container applications-grid">
          <Reveal>
            <Eyebrow>WHERE IT'S USED</Eyebrow>

            <h2 id="plywood-applications-title">
              Built around
              <br />
              <em>the way you live.</em>
            </h2>

            <p>
              Plywood and boards are used across residential,
              commercial and furniture projects. The appropriate
              material depends on the construction, environment
              and finish required.
            </p>
          </Reveal>

          <div className="application-list">
            {applications.map((application, index) => (
              <div
                className="application-list-item"
                key={application}
              >
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <strong>{application}</strong>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section
        className="section"
        aria-labelledby="how-to-choose-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>HOW TO CHOOSE</Eyebrow>

              <h2 id="how-to-choose-title">
                Start with the
                <br />
                <em>application.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                A few questions can make choosing
                <br />
                plywood much easier.
              </p>
            </div>
          </Reveal>

          <div className="choice-grid">
            <article className="choice-card">
              <span>01</span>
              <h3>Where will it be used?</h3>
              <p>
                A kitchen, wardrobe, bedroom furniture and
                commercial installation can have very different
                material requirements.
              </p>
            </article>

            <article className="choice-card">
              <span>02</span>
              <h3>How much moisture exposure is expected?</h3>
              <p>
                Consider whether the material will remain in a dry
                interior or encounter occasional or higher
                moisture exposure.
              </p>
            </article>

            <article className="choice-card">
              <span>03</span>
              <h3>What thickness do you need?</h3>
              <p>
                Required thickness can depend on the furniture
                design, span, construction and intended load.
              </p>
            </article>

            <article className="choice-card">
              <span>04</span>
              <h3>Which brand and specification fit?</h3>
              <p>
                Compare the exact product specification rather than
                choosing only by grade name or price.
              </p>
            </article>
          </div>

          <div className="section-cta-row">
            <TextLink to="/guides/best-plywood-for-kitchen/">
              Read our kitchen plywood guide
            </TextLink>

            <TextLink to="/guides/best-plywood-for-wardrobe/">
              Read our wardrobe plywood guide
            </TextLink>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section
        className="section"
        aria-labelledby="plywood-brands-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>BRANDS</Eyebrow>

              <h2 id="plywood-brands-title">
                Explore plywood
                <br />
                <em>brands available in Kolkata.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Ask us about current availability,
                <br />
                specifications and options.
              </p>

              <TextLink to="/brands/">
                View all brands
              </TextLink>
            </div>
          </Reveal>

          <div className="brand-grid">
            {brands.slice(0, 6).map((brand) => (
              <Link
                key={brand.id}
                to={brand.href}
                className="brand-card"
              >
                <span className="brand-card-name">
                  {brand.name}
                </span>

                <span className="brand-card-arrow">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </span>

                <p>{brand.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE GUIDE */}
      <section
        className="section plywood-price-section"
        aria-labelledby="plywood-price-title"
      >
        <Reveal className="container two-column-content">
          <div>
            <Eyebrow>PLYWOOD PRICE IN KOLKATA</Eyebrow>

            <h2 id="plywood-price-title">
              Price depends on more
              <br />
              <em>than just the size.</em>
            </h2>
          </div>

          <div className="content-copy">
            <p>
              Plywood prices in Kolkata can vary according to
              grade, thickness, brand, product specification and
              other factors. Because current prices can change,
              it is better to confirm the latest price for the
              exact product you need.
            </p>

            <TextLink to="/guides/plywood-price-in-kolkata/">
              See what determines plywood price
            </TextLink>

            <div className="button-group">
              <ContactLink
                kind="whatsapp"
                message={messages.plywood}
              >
                Ask for Current Price
              </ContactLink>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section
        className="section faq-section"
        aria-labelledby="plywood-faq-title"
      >
        <div className="container faq-grid">
          <Reveal>
            <Eyebrow>PLYWOOD FAQ</Eyebrow>

            <h2 id="plywood-faq-title">
              Common questions
              <br />
              <em>about plywood.</em>
            </h2>

            <p className="faq-intro">
              Need help choosing a grade, thickness or board?
              <br />
              Talk to us about your project.
            </p>

            <ContactLink
              kind="whatsapp"
              message={messages.plywood}
              variant="text"
            >
              Ask Us on WhatsApp
            </ContactLink>
          </Reveal>

          <div className="faq-list">
            <div className="faq-item is-open">
              <h3>
                <span>
                  Which plywood is suitable for a kitchen?
                </span>
              </h3>

              <div className="faq-answer">
                <p>
                  Kitchens can have higher moisture exposure, so
                  a moisture-resistant plywood grade may be more
                  appropriate than standard MR plywood. The exact
                  choice depends on the construction and
                  environment. Compare BWR and BWP options before
                  deciding.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3>
                <span>
                  What is the difference between MR, BWR and BWP
                  plywood?
                </span>
              </h3>

              <div className="faq-answer">
                <p>
                  They represent different levels and types of
                  moisture resistance and are intended for
                  different applications. The appropriate choice
                  depends on where the plywood will be used.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3>
                <span>
                  What plywood is suitable for wardrobes?
                </span>
              </h3>

              <div className="faq-answer">
                <p>
                  Wardrobe plywood should be selected according to
                  the room environment, construction, thickness,
                  expected load and budget. For most indoor
                  wardrobes, moisture exposure is generally lower
                  than in kitchens, but the exact specification
                  should be checked for the project.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3>
                <span>
                  How can I check the current plywood price in
                  Kolkata?
                </span>
              </h3>

              <div className="faq-answer">
                <p>
                  Current plywood prices depend on the exact
                  brand, grade, thickness and specification. Contact
                  Balaji Ply &amp; Lam with the product you are
                  looking for and we can help you check current
                  availability and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="professionals-section"
        aria-labelledby="plywood-cta-title"
      >
        <div className="professionals-copy">
          <Reveal>
            <Eyebrow>LOOKING FOR PLYWOOD?</Eyebrow>

            <h2 id="plywood-cta-title">
              Tell us what
              <br />
              <em>your project needs.</em>
            </h2>

            <p>
              Share your application, preferred brand or
              specification with us. We'll help you explore the
              currently available plywood and board options.
            </p>

            <div className="button-group">
              <ContactLink
                kind="whatsapp"
                message={messages.plywood}
                variant="light"
              >
                Get Plywood Catalogue
              </ContactLink>

              <ContactLink
                kind="call"
                variant="outline-light"
              />
            </div>
          </Reveal>
        </div>

        <div className="professionals-image">
          <img
            src="/images/plywood.jpg"
            alt="Plywood sheets showing layered wood construction"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
}
