import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';
import {
  ContactLink,
  Eyebrow,
  InnerHero,
  Reveal,
  TextLink,
} from '../components/ui';
import { brands, messages } from '../data/site';

const plywoodGrades = [
  {
    name: 'MR Plywood',
    description:
      'A practical option for dry interior applications where everyday strength and stability are required.',
    characteristics: [
      'Suitable for many indoor furniture applications',
      'Commonly used for wardrobes and shelving',
      'Useful for general interior work',
      'Consider moisture exposure before choosing',
    ],
    applications:
      'Wardrobes, bedroom furniture, shelving, storage and general interior applications.',
  },
  {
    name: 'BWR Plywood',
    description:
      'A moisture-resistant plywood option for applications where occasional exposure to moisture needs to be considered.',
    characteristics: [
      'Better moisture resistance than MR',
      'Suitable for selected kitchen applications',
      'Useful where occasional moisture is expected',
      'Available in different brands and specifications',
    ],
    applications:
      'Kitchens, utility areas, furniture and interiors with occasional moisture exposure.',
  },
  {
    name: 'BWP / Marine Plywood',
    description:
      'A higher moisture-resistance option for applications where exposure to moisture is an important consideration.',
    characteristics: [
      'Designed for higher moisture resistance',
      'Commonly considered for demanding applications',
      'Suitable for selected kitchen requirements',
      'Exact specifications vary by product and brand',
    ],
    applications:
      'Kitchens, moisture-prone areas and demanding interior applications where appropriate.',
  },
];

const boards = [
  'MDF',
  'HDF / HDMR',
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
      <InnerHero
        image="/images/plywood.jpg"
        alt="Plywood sheets and wood-based interior materials"
        eyebrow="Plywood & Boards / Kolkata"
        title={
          <>
            Plywood &amp; Boards
            <br />
            <em>in Kolkata.</em>
          </>
        }
        className="plywood-hero"
      >
        <p className="inner-hero-description">
          Looking for plywood in Kolkata? Explore plywood, MDF and
          HDF / HDMR boards for kitchens, wardrobes, furniture,
          offices and interior projects at Balaji Ply &amp; Lam in
          Bhowanipore.
        </p>

        <div className="button-group hero-buttons">
          <ContactLink
            kind="whatsapp"
            message={messages.plywood}
            variant="light"
          >
            Get Plywood Catalogue
          </ContactLink>

          <Link
            to="#plywood-grades"
            className="text-link light-link"
          >
            <span>Explore plywood grades</span>
            <ArrowDown
              size={17}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
        </div>
      </InnerHero>

      {/* STICKY PAGE NAVIGATION */}
      <div className="collection-navigation">
        <nav
          className="container collection-nav"
          aria-label="Plywood page sections"
        >
          <a href="#plywood-grades">
            Plywood Grades
          </a>

          <a href="#boards">
            Engineered Boards
          </a>

          <a href="#applications">
            Applications
          </a>

          <a href="#brands">
            Brands
          </a>

          <a href="#plywood-faq">
            FAQs
          </a>
        </nav>
      </div>

      {/* INTRODUCTION */}
      <div className="collection-intro container">
        <p>
          The right plywood depends on
          <br />
          where you plan to use it.
        </p>

        <span>
          MR / BWR / BWP plywood · MDF · HDF / HDMR
          <br />
          Ask us for current availability and specifications.
        </span>
      </div>

      {/* PLYWOOD GRADES */}
      <div className="product-sections">
        <section
          id="plywood-grades"
          className="product-detail"
          aria-labelledby="plywood-grades-title"
        >
          <div className="container product-detail-grid">
            <Reveal className="product-detail-image">
              <img
                src="/images/plywood.jpg"
                alt="Plywood sheets showing layered wood construction"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />

              <span className="product-image-caption">
                PLYWOOD COLLECTION / 01
              </span>
            </Reveal>

            <Reveal
              className="product-detail-copy"
              delay={0.08}
            >
              <Eyebrow>Plywood Grades</Eyebrow>

              <h2 id="plywood-grades-title">
                Choose the right
                <br />
                <em>grade for the job.</em>
              </h2>

              <p className="product-description">
                Plywood grades are not interchangeable. The right
                choice depends on the environment, expected
                moisture exposure, construction and requirements of
                your furniture or interior project.
              </p>

              <div className="product-characteristics">
                <h3>Options to explore</h3>

                <ul>
                  {plywoodGrades.map((grade) => (
                    <li key={grade.name}>
                      <strong>{grade.name}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-applications">
                <h3>What to consider</h3>

                <p>
                  For dry interiors, MR may be appropriate for
                  suitable applications. Where moisture exposure is
                  a consideration, BWR or BWP options may be more
                  appropriate depending on the project.
                </p>
              </div>

              <p className="product-note">
                Product specifications, certifications, thicknesses
                and availability can vary by brand. Confirm the
                exact specification before purchasing.
              </p>

              <TextLink to="/guides/mr-vs-bwr-vs-bwp-plywood/">
                Compare MR, BWR &amp; BWP plywood
              </TextLink>
            </Reveal>
          </div>
        </section>

        {/* GRADE BREAKDOWN */}
        {plywoodGrades.map((grade, index) => (
          <section
            key={grade.name}
            className={`product-detail ${
              index % 2 === 0
                ? 'product-detail-reverse'
                : ''
            }`}
            aria-labelledby={`grade-${index}-title`}
          >
            <div className="container product-detail-grid">
              <Reveal className="product-detail-image">
                <img
                  src={
                    index === 0
                      ? '/images/design-studio.jpg'
                      : index === 1
                        ? '/images/material-palette.jpg'
                        : '/images/plywood.jpg'
                  }
                  alt={`${grade.name} and interior material selection`}
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />

                <span className="product-image-caption">
                  PLYWOOD GRADES / 0{index + 2}
                </span>
              </Reveal>

              <Reveal
                className="product-detail-copy"
                delay={0.08}
              >
                <Eyebrow>
                  {grade.name}
                </Eyebrow>

                <h2 id={`grade-${index}-title`}>
                  {grade.name}
                </h2>

                <p className="product-description">
                  {grade.description}
                </p>

                <div className="product-characteristics">
                  <h3>Key points</h3>

                  <ul>
                    {grade.characteristics.map(
                      (characteristic) => (
                        <li key={characteristic}>
                          {characteristic}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="product-applications">
                  <h3>Common applications</h3>

                  <p>{grade.applications}</p>
                </div>

                <ContactLink
                  kind="whatsapp"
                  message={messages.plywood}
                  className="product-enquiry"
                >
                  Ask About {grade.shortName ?? grade.name}
                </ContactLink>

                <Link
                  to="/guides/mr-vs-bwr-vs-bwp-plywood/"
                  className="product-call"
                >
                  <span>
                    Need help comparing plywood grades?
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            </div>
          </section>
        ))}

        {/* ENGINEERED BOARDS */}
        <section
          id="boards"
          className="product-detail"
          aria-labelledby="boards-title"
        >
          <div className="container product-detail-grid">
            <Reveal className="product-detail-image">
              <img
                src="/images/material-palette.jpg"
                alt="Engineered boards and interior material palette"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />

              <span className="product-image-caption">
                ENGINEERED BOARDS / 05
              </span>
            </Reveal>

            <Reveal
              className="product-detail-copy"
              delay={0.08}
            >
              <Eyebrow>Engineered Boards</Eyebrow>

              <h2 id="boards-title">
                Beyond plywood.
                <br />
                <em>Explore board options.</em>
              </h2>

              <p className="product-description">
                Plywood is not the only board material used in
                interior work. MDF and HDF / HDMR can be suitable
                for selected furniture, decorative and interior
                applications.
              </p>

              <div className="product-characteristics">
                <h3>Options to explore</h3>

                <ul>
                  {boards.map((board) => (
                    <li key={board}>
                      <strong>{board}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-applications">
                <h3>Common applications</h3>

                <p>
                  Furniture components, decorative work, shelving,
                  panels and selected interior applications.
                </p>
              </div>

              <TextLink to="/guides/mdf-vs-hdmr/">
                Compare MDF &amp; HDMR
              </TextLink>
            </Reveal>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section
          id="applications"
          className="product-detail product-detail-reverse"
          aria-labelledby="applications-title"
        >
          <div className="container product-detail-grid">
            <Reveal className="product-detail-image">
              <img
                src="/images/design-studio.jpg"
                alt="Interior design studio showing material selection"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />

              <span className="product-image-caption">
                INTERIOR APPLICATIONS / 06
              </span>
            </Reveal>

            <Reveal
              className="product-detail-copy"
              delay={0.08}
            >
              <Eyebrow>Applications</Eyebrow>

              <h2 id="applications-title">
                Start with
                <br />
                <em>where it will be used.</em>
              </h2>

              <p className="product-description">
                The same plywood grade does not necessarily make
                sense for every part of an interior. Start with the
                application, then consider moisture, thickness,
                construction, finish and budget.
              </p>

              <div className="product-characteristics">
                <h3>Common applications</h3>

                <ul>
                  {applications.map((application) => (
                    <li key={application}>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-applications">
                <h3>Useful guides</h3>

                <p>
                  Explore our guides for more specific advice on
                  kitchens, wardrobes, plywood grades and pricing.
                </p>
              </div>

              <div className="button-group">
                <TextLink to="/guides/best-plywood-for-kitchen/">
                  Plywood for kitchens
                </TextLink>

                <TextLink to="/guides/best-plywood-for-wardrobe/">
                  Plywood for wardrobes
                </TextLink>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      {/* BRANDS */}
      <section
        id="brands"
        className="section"
        aria-labelledby="plywood-brands-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>
                Brands / Plywood in Kolkata
              </Eyebrow>

              <h2 id="plywood-brands-title">
                Explore brands.
                <br />
                <em>Compare your options.</em>
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

          <div className="product-sections">
            {brands.slice(0, 6).map((brand, index) => (
              <div
                key={brand.id}
                className="product-detail"
                style={{
                  paddingBlock: '30px',
                  borderTop: '1px solid var(--line)',
                }}
              >
                <div
                  className="container"
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      '80px 1fr auto',
                    gap: '25px',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      color: 'var(--brass)',
                      letterSpacing: '1px',
                    }}
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <h3
                      style={{
                        fontFamily:
                          'var(--display)',
                        fontSize:
                          'clamp(28px, 3vw, 42px)',
                        lineHeight: 1.1,
                        fontWeight: 500,
                      }}
                    >
                      {brand.name}
                    </h3>

                    <p
                      style={{
                        maxWidth: '620px',
                        marginTop: '8px',
                        color: 'var(--muted)',
                        fontSize: '13px',
                        lineHeight: 1.8,
                      }}
                    >
                      {brand.description}
                    </p>
                  </div>

                  <Link
                    to={brand.href}
                    className="text-link"
                  >
                    <span>Explore</span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE GUIDE */}
      <section
        className="section faq-section"
        aria-labelledby="price-title"
      >
        <div className="container faq-grid">
          <Reveal>
            <Eyebrow>
              Plywood Price in Kolkata
            </Eyebrow>

            <h2 id="price-title">
              What determines
              <br />
              <em>the price?</em>
            </h2>

            <p className="faq-intro">
              Plywood prices can change according to the exact
              brand, grade, thickness and specification.
            </p>

            <TextLink to="/guides/plywood-price-in-kolkata/">
              Read the plywood price guide
            </TextLink>
          </Reveal>

          <Reveal>
            <div className="faq-answer">
              <p>
                There is no single plywood price in Kolkata that
                applies to every product. MR, BWR and BWP plywood
                can have different prices, and the price can also
                vary by brand, thickness and product
                specification.
              </p>

              <p style={{ marginTop: '18px' }}>
                For the most useful quote, share the grade,
                thickness, brand or intended application you have
                in mind. We can then help you check the current
                availability and pricing.
              </p>

              <div
                className="button-group"
                style={{ marginTop: '25px' }}
              >
                <ContactLink
                  kind="whatsapp"
                  message={messages.plywood}
                >
                  Ask for Current Price
                </ContactLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="plywood-faq"
        className="section faq-section"
        aria-labelledby="plywood-faq-title"
      >
        <div className="container faq-grid">
          <Reveal>
            <Eyebrow>
              Plywood FAQ
            </Eyebrow>

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
                <button
                  type="button"
                  aria-expanded="true"
                >
                  <span>
                    Which plywood is suitable for a kitchen?
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <div className="faq-answer">
                <p>
                  Kitchens can have higher moisture exposure, so a
                  moisture-resistant plywood grade may be more
                  appropriate than standard MR plywood. The exact
                  choice depends on the construction and
                  environment.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <h3>
                <button
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    What is the difference between MR, BWR and BWP
                    plywood?
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </button>
              </h3>
            </div>

            <div className="faq-item">
              <h3>
                <button
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    What plywood is suitable for wardrobes?
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </button>
              </h3>
            </div>

            <div className="faq-item">
              <h3>
                <button
                  type="button"
                  aria-expanded="false"
                >
                  <span>
                    How can I check the current plywood price in
                    Kolkata?
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </button>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="professionals-section"
        aria-labelledby="plywood-cta-title"
      >
        <div className="professionals-copy">
          <Reveal>
            <Eyebrow>
              Looking for plywood?
            </Eyebrow>

            <h2 id="plywood-cta-title">
              Tell us what
              <br />
              <em>your project needs.</em>
            </h2>

            <p>
              Share the application, preferred brand or
              specification you're looking for. We'll help you
              explore the currently available plywood and board
              options.
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
            alt="Plywood sheets and wood-based interior materials"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <div className="collection-footnote container">
        <p>
          Material imagery is illustrative. Colours, textures,
          specifications and stock can vary by product and brand.
          Contact Balaji Ply &amp; Lam in Bhowanipore, Kolkata for
          current availability.
        </p>
      </div>
    </>
  );
}
