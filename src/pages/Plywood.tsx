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
    number: '01',
    name: 'MR Plywood',
    description:
      'A practical plywood option for dry interior applications where everyday strength and stability are required.',
    applications:
      'Wardrobes, bedroom furniture, shelving and general interior work.',
  },
  {
    number: '02',
    name: 'BWR Plywood',
    description:
      'A moisture-resistant plywood option for applications where occasional exposure to moisture needs to be considered.',
    applications:
      'Kitchens, utility areas and furniture exposed to occasional moisture.',
  },
  {
    number: '03',
    name: 'BWP / Marine Plywood',
    description:
      'A higher moisture-resistance option for applications where moisture exposure is an important consideration.',
    applications:
      'Kitchens, moisture-prone areas and demanding interior applications.',
  },
];

const boardTypes = [
  {
    number: '01',
    name: 'MDF',
    description:
      'A smooth engineered wood-fibre board used for suitable furniture, decorative and interior applications.',
  },
  {
    number: '02',
    name: 'HDF / HDMR',
    description:
      'Denser engineered boards that can be suitable where a smooth and stable substrate is required.',
  },
];

const applications = [
  {
    number: '01',
    title: 'Kitchen',
    description:
      'Consider moisture exposure, construction and the plywood specification required for the kitchen.',
  },
  {
    number: '02',
    title: 'Wardrobe',
    description:
      'Consider the room environment, thickness, construction and expected load when choosing plywood.',
  },
  {
    number: '03',
    title: 'Furniture',
    description:
      'Beds, shelving, storage and other furniture can require different board specifications.',
  },
  {
    number: '04',
    title: 'Commercial',
    description:
      'Office and commercial interiors may require material choices based on usage and project requirements.',
  },
];

const faqs = [
  {
    question:
      'What is the best plywood for a kitchen in Kolkata?',
    answer:
      'The best plywood for a kitchen depends on moisture exposure, construction, thickness and the requirements of the project. Moisture-resistant BWR or BWP options may be considered where moisture is an important factor. The exact specification should be confirmed for the application.',
  },
  {
    question:
      'How do I choose between MR, BWR and BWP plywood in Kolkata?',
    answer:
      'MR, BWR and BWP plywood are suited to different moisture-exposure requirements. MR can be suitable for many dry interior applications, while BWR and BWP can be considered where greater moisture resistance is required.',
  },
  {
    question:
      'Where can I find plywood dealers in Kolkata?',
    answer:
      'Balaji Ply & Lam is a plywood and interior-materials store in Bhowanipore, Kolkata. You can visit the store to explore available plywood, boards and brands, or contact us for the current catalogue and availability.',
  },
  {
    question:
      'How can I find a plywood shop near me in Kolkata?',
    answer:
      'When looking for a plywood shop near you in Kolkata, consider the location, available brands, product range and whether the store can help you compare specifications. Balaji Ply & Lam is located on Sarat Bose Road in Bhowanipore.',
  },
  {
    question:
      'What is the plywood price in Kolkata?',
    answer:
      'Plywood price in Kolkata varies according to the brand, grade, thickness and exact product specification. Current prices can change, so it is best to check the price for the specific plywood product you need.',
  },
  {
    question:
      'Which plywood is suitable for wardrobes and furniture?',
    answer:
      'The suitable plywood depends on the room environment, furniture construction, required thickness, expected load and budget. For indoor furniture and wardrobes, choose the specification according to the particular application.',
  },
];

export function PlywoodPage() {
  return (
    <>
      <SEO page="plywood" />

      {/* =====================================================
          HERO
          ===================================================== */}
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
          Looking for plywood in Kolkata? Balaji Ply &amp; Lam is a
          plywood shop in Bhowanipore offering plywood, MDF and
          HDF / HDMR boards for kitchens, wardrobes, furniture,
          offices and interior projects.
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

      {/* =====================================================
          PAGE NAVIGATION
          ===================================================== */}
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

      {/* =====================================================
          INTRODUCTION
          ===================================================== */}
      <div className="collection-intro container">
        <p>
          The right plywood depends on
          <br />
          where you plan to use it.
        </p>

        <span>
          MR / BWR / BWP plywood · MDF · HDF / HDMR
          <br />
          Compare materials based on application and requirements.
        </span>
      </div>

      {/* =====================================================
          PLYWOOD GRADES
          ===================================================== */}
      <section
        id="plywood-grades"
        className="section compact-product-section"
        aria-labelledby="plywood-grades-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>Plywood Grades</Eyebrow>

              <h2 id="plywood-grades-title">
                Understand the
                <br />
                <em>main options.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Choose according to moisture exposure,
                <br />
                application and project requirements.
              </p>

              <TextLink to="/guides/mr-vs-bwr-vs-bwp-plywood/">
                Compare plywood grades
              </TextLink>
            </div>
          </Reveal>

          <div className="grade-list">
            {plywoodGrades.map((grade) => (
              <Reveal
                key={grade.name}
                className="grade-row"
              >
                <span className="grade-number">
                  {grade.number}
                </span>

                <div className="grade-main">
                  <h3>{grade.name}</h3>

                  <p>{grade.description}</p>
                </div>

                <div className="grade-application">
                  <span>Common applications</span>

                  <p>{grade.applications}</p>
                </div>

                <ArrowUpRight
                  className="grade-arrow"
                  size={20}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </Reveal>
            ))}
          </div>

          <div className="section-note">
            <span>Important</span>

            <p>
              Product specifications, certifications, thicknesses
              and current availability can vary by brand. Confirm
              the exact specification before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERED BOARDS
          ===================================================== */}
      <section
        id="boards"
        className="section compact-material-section"
        aria-labelledby="boards-title"
      >
        <div className="container compact-material-grid">
          <Reveal className="compact-material-image">
            <img
              src="/images/material-palette.jpg"
              alt="Interior board and material samples"
              width="900"
              height="700"
              loading="lazy"
              decoding="async"
            />

            <span className="product-image-caption">
              ENGINEERED BOARDS / 04
            </span>
          </Reveal>

          <Reveal
            className="compact-material-copy"
            delay={0.08}
          >
            <Eyebrow>Engineered Boards</Eyebrow>

            <h2 id="boards-title">
              More than plywood.
              <br />
              <em>Explore board options.</em>
            </h2>

            <p className="product-description">
              Plywood is not the only board material used in
              interior work. MDF and HDF / HDMR can be suitable
              options for selected furniture, decorative and
              interior applications.
            </p>

            <div className="board-list">
              {boardTypes.map((board) => (
                <div
                  className="board-list-row"
                  key={board.name}
                >
                  <span>{board.number}</span>

                  <div>
                    <h3>{board.name}</h3>

                    <p>{board.description}</p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <TextLink to="/guides/mdf-vs-hdmr/">
              Compare MDF &amp; HDMR
            </TextLink>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
          ===================================================== */}
      <section
        id="applications"
        className="section applications-section"
        aria-labelledby="applications-title"
      >
        <div className="container applications-grid">
          <Reveal>
            <Eyebrow>Choosing Plywood</Eyebrow>

            <h2 id="applications-title">
              Start with
              <br />
              <em>the application.</em>
            </h2>

            <p>
              Whether you are buying plywood for a kitchen,
              wardrobe, furniture or commercial interior, start
              with how and where the material will be used.
            </p>

            <div className="button-group">
              <TextLink to="/guides/best-plywood-for-kitchen/">
                Kitchen plywood guide
              </TextLink>

              <TextLink to="/guides/best-plywood-for-wardrobe/">
                Wardrobe plywood guide
              </TextLink>
            </div>
          </Reveal>

          <div className="application-list">
            {applications.map((application) => (
              <div
                className="application-list-item"
                key={application.title}
              >
                <span>{application.number}</span>

                <div>
                  <strong>{application.title}</strong>

                  <p>{application.description}</p>
                </div>

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

      {/* =====================================================
          BRANDS
          ===================================================== */}
      <section
        id="brands"
        className="section"
        aria-labelledby="plywood-brands-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>
                Plywood Brands in Kolkata
              </Eyebrow>

              <h2 id="plywood-brands-title">
                Explore brands.
                <br />
                <em>Compare your options.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Ask us about current plywood brands,
                <br />
                specifications and availability.
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

      {/* =====================================================
          FAQ
          ===================================================== */}
      <section
        id="plywood-faq"
        className="section faq-section"
        aria-labelledby="plywood-faq-title"
      >
        <div className="container faq-grid">
          <Reveal>
            <Eyebrow>Plywood FAQ</Eyebrow>

            <h2 id="plywood-faq-title">
              Common questions
              <br />
              <em>about plywood in Kolkata.</em>
            </h2>

            <p className="faq-intro">
              Comparing plywood grades, looking for a plywood
              shop near you or checking current pricing?
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
            {faqs.map((faq, index) => (
              <div
                className={`faq-item${
                  index === 0 ? ' is-open' : ''
                }`}
                key={faq.question}
              >
                <h3>
                  <span>{faq.question}</span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </h3>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NOTE
          The "Your next space. Let's begin." CTA is intentionally
          NOT included here. It is already rendered globally by
          SiteLayout.
          ===================================================== */}
    </>
  );
}
