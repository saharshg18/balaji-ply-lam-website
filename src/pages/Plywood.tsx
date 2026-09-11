import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { SEO } from '../components/SEO';
import {
  ContactLink,
  Eyebrow,
  InnerHero,
  Reveal,
  TextLink,
} from '../components/ui';
import { brands, messages } from '../data/site';

const gradeItems = [
  {
    id: 'mr',
    number: '01',
    name: 'MR Grade Plywood',
    shortName: 'MR',
    image: '/images/grades/mr.jpg',
    fallback: '/images/plywood.jpg',
    description:
      'MR plywood is suited to interior areas where moisture exposure is limited, making it a practical choice for furniture, wardrobes and general interior work.',
    applications: 'Furniture • Wardrobes • Interior furniture',
  },
  {
    id: 'bwr',
    number: '02',
    name: 'BWR Grade Plywood',
    shortName: 'BWR',
    image: '/images/grades/bwr.jpg',
    fallback: '/images/plywood.jpg',
    description:
      'BWR plywood offers improved resistance to moisture and is commonly considered for areas such as kitchens, utility spaces and interiors with occasional moisture exposure.',
    applications: 'Kitchens • Utility areas • Interior furniture',
  },
  {
    id: 'bwp',
    number: '03',
    name: 'BWP / Marine Grade Plywood',
    shortName: 'BWP',
    image: '/images/grades/bwp.jpg',
    fallback: '/images/plywood.jpg',
    description:
      'BWP plywood is designed for demanding environments where higher moisture resistance is important, including kitchens and areas exposed to regular moisture.',
    applications: 'Kitchens • Wet-prone interiors • Premium furniture',
  },
];

const applications = [
  {
    id: 'homes',
    number: '01',
    title: 'Homes & interiors',
    image: '/images/hero-interior.jpg',
    description:
      'Plywood for wardrobes, storage, furniture, wall features and other residential interiors where material selection matters.',
  },
  {
    id: 'kitchens',
    number: '02',
    title: 'Kitchens & wardrobes',
    image: '/images/plywood.jpg',
    description:
      'Explore plywood options for kitchen cabinets, shutters, carcasses and wardrobes based on moisture exposure and intended use.',
  },
  {
    id: 'architects',
    number: '03',
    title: 'Architect & design projects',
    image: '/images/design-studio.jpg',
    description:
      'Material options for architects, interior designers and contractors working across residential and commercial projects.',
  },
  {
    id: 'furniture',
    number: '04',
    title: 'Furniture & carpentry',
    image: '/images/material-palette.jpg',
    description:
      'Boards for furniture making, carpentry and custom interior work, with options across different grades and applications.',
  },
  {
    id: 'commercial',
    number: '05',
    title: 'Commercial spaces',
    image: '/images/laminates.jpg',
    description:
      'Plywood and boards for offices, retail spaces, hospitality interiors and other commercial applications.',
  },
];

const brandLogos = [
  {
    name: 'CenturyPly',
    image: 'https://img.logokit.com/centuryply.com',
    href: '/brands/centuryply/',
  },
  {
    name: 'Greenply',
    image: 'https://img.logokit.com/greenply.com',
    href: '/brands/',
  },
  {
    name: 'Greenlam',
    image: 'https://img.logokit.com/greenlamindustries.com',
    href: '/brands/',
  },
  {
    name: 'Merino',
    image: 'https://img.logokit.com/merinoindia.com',
    href: '/brands/',
  },
  {
    name: 'Royale Touche',
    image: 'https://img.logokit.com/royaletouche.com',
    href: '/brands/',
  },
  {
    name: 'Austin',
    image: 'https://img.logokit.com/austinply.com',
    href: '/brands/',
  },
];

export function PlywoodPage() {
  const [activeApplication, setActiveApplication] = useState('homes');

  const selectedApplication =
    applications.find((item) => item.id === activeApplication) ??
    applications[0];

  return (
    <>
      <SEO page="plywood" />

      <main>
        {/* HERO */}
        <InnerHero
          image="/images/plywood.jpg"
          alt="Plywood sheets and interior materials in Kolkata"
          eyebrow="PLYWOOD & BOARDS"
          title="Plywood for every kind of interior."
        >
          <p>
            Explore plywood grades, engineered boards and material options for
            homes, kitchens, furniture and commercial interiors in Kolkata.
          </p>

          <div className="inner-hero-actions">
            <ContactLink
              kind="whatsapp"
              message={messages.plywood}
              variant="primary"
            >
              Get Plywood Options
            </ContactLink>

            <Link to="/contact/" className="button button-secondary">
              Visit Our Store
            </Link>
          </div>
        </InnerHero>

        {/* PAGE NAV */}
        <div className="collection-navigation">
          <div className="collection-nav">
            <a href="#grades">Grades</a>
            <a href="#boards">Boards</a>
            <a href="#applications">Applications</a>
            <a href="#brands">Brands</a>
            <a href="#faqs">FAQs</a>
          </div>
        </div>

        {/* INTRO */}
        <section className="collection-intro section">
          <Reveal>
            <Eyebrow>PLYWOOD IN KOLKATA</Eyebrow>

            <div className="collection-intro-grid">
              <h2>
                Choose the material
                <br />
                around the project.
              </h2>

              <div>
                <p>
                  The right plywood depends on where it will be used, how much
                  moisture it may encounter and the level of performance your
                  project requires.
                </p>

                <p>
                  At Balaji Ply & Lam, you can compare plywood grades and
                  interior board options in one place and ask about current
                  availability and pricing.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* GRADES */}
        <section id="grades" className="compact-product-section section">
          <Reveal>
            <div className="section-heading-row">
              <div>
                <Eyebrow>Plywood grades</Eyebrow>
                <h2>MR. BWR. BWP.</h2>
              </div>

              <p>
                Different grades for different levels of moisture exposure and
                interior use.
              </p>
            </div>

            <div className="grade-list">
              {gradeItems.map((grade) => (
                <article className="grade-row" key={grade.id}>
                  <div className="grade-image">
                    <img
                      src={grade.image}
                      alt={`${grade.name} plywood`}
                      onError={(event) => {
                        event.currentTarget.src = grade.fallback;
                      }}
                    />
                  </div>

                  <div className="grade-number">{grade.number}</div>

                  <div className="grade-main">
                    <h3>{grade.name}</h3>
                    <p>{grade.description}</p>
                  </div>

                  <div className="grade-application">
                    <span>Typical use</span>
                    <strong>{grade.applications}</strong>
                  </div>

                  <ArrowUpRight size={19} strokeWidth={1.2} />
                </article>
              ))}
            </div>

            <p className="section-note">
              Grade selection should be based on the actual application,
              moisture exposure and project requirements. Ask us for the
              currently available options.
            </p>
          </Reveal>
        </section>

        {/* VISUAL STRIP */}
        <section className="material-visual-strip section">
          <Reveal>
            <div className="material-visual-grid">
              <div className="material-visual-card">
                <img
                  src="/images/plywood.jpg"
                  alt="Plywood sheets for interior work"
                />
                <span>Plywood</span>
              </div>

              <div className="material-visual-card">
                <img
                  src="/images/material-palette.jpg"
                  alt="Interior material palette"
                />
                <span>Boards & materials</span>
              </div>

              <div className="material-visual-card">
                <img
                  src="/images/laminates.jpg"
                  alt="Decorative laminates for interiors"
                />
                <span>Finishing materials</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ENGINEERED BOARDS */}
        <section id="boards" className="compact-material-section section">
          <Reveal>
            <div className="compact-material-grid">
              <div className="compact-material-image">
                <img
                  src="/images/design-studio.jpg"
                  alt="Engineered boards for interior applications"
                />
              </div>

              <div className="compact-material-copy">
                <Eyebrow>Beyond plywood</Eyebrow>

                <h2>Engineered boards for modern interiors.</h2>

                <p>
                  Depending on the project, plywood may be only one part of the
                  material selection. We also work with engineered boards and
                  related interior materials.
                </p>

                <div className="board-list">
                  <div className="board-list-row">
                    <span>MDF</span>
                    <small>
                      Smooth board material for furniture and interior
                      applications.
                    </small>
                  </div>

                  <div className="board-list-row">
                    <span>HDF / HDMR</span>
                    <small>
                      Higher-density board options for selected interior uses.
                    </small>
                  </div>

                  <div className="board-list-row">
                    <span>Decorative boards</span>
                    <small>
                      Surface-ready options for furniture and interior
                      detailing.
                    </small>
                  </div>
                </div>

                <TextLink to="/products/">
                  Explore all products
                </TextLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* APPLICATIONS — INTERACTIVE */}
        <section id="applications" className="applications-section section">
          <Reveal>
            <div className="applications-header">
              <div>
                <Eyebrow>For every space</Eyebrow>

                <h2>
                  One material.
                  <br />
                  Different possibilities.
                </h2>
              </div>

              <p>
                See how plywood and boards can fit into different kinds of
                interior projects.
              </p>
            </div>

            <div className="applications-layout">
              {/* SINGLE IMAGE */}
              <div className="application-feature-image">
                <img
                  src={selectedApplication.image}
                  alt={selectedApplication.title}
                />

                <div className="application-image-caption">
                  <span>A material choice for</span>
                  <strong>{selectedApplication.title}</strong>
                </div>
              </div>

              {/* SELECTORS */}
              <div className="application-selector">
                {applications.map((application) => {
                  const isActive = application.id === activeApplication;

                  return (
                    <button
                      type="button"
                      className={`application-selector-row ${
                        isActive ? 'is-active' : ''
                      }`}
                      key={application.id}
                      onClick={() =>
                        setActiveApplication(application.id)
                      }
                    >
                      <span className="application-selector-number">
                        {application.number}
                      </span>

                      <span className="application-selector-content">
                        <span className="application-selector-title">
                          {application.title}
                        </span>

                        {isActive && (
                          <span className="application-selector-description">
                            {application.description}
                          </span>
                        )}
                      </span>

                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.2}
                        className="application-selector-arrow"
                      />
                    </button>
                  );
                })}

                <div className="application-selector-link">
                  <Link to="/contact/">
                    Discuss your project
                    <ArrowUpRight size={17} strokeWidth={1.2} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* BRANDS */}
        <section id="brands" className="plywood-brands-section section">
          <Reveal>
            <div className="section-heading-row">
              <div>
                <Eyebrow>Brands</Eyebrow>
                <h2>Explore your options.</h2>
              </div>

              <p>
                Ask us about current availability across plywood and related
                interior-material brands.
              </p>
            </div>

            <div className="brand-logo-grid">
              {brandLogos.map((brand) => (
                <Link
                  to={brand.href}
                  className="brand-logo-card"
                  key={brand.name}
                >
                  <div className="brand-logo-image-wrap">
                    <img
                      src={brand.image}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                    />
                  </div>

                  <div className="brand-logo-footer">
                    <span>{brand.name}</span>
                    <ArrowUpRight size={17} strokeWidth={1.2} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="brands-bottom-link">
              <TextLink to="/brands/">View all brands</TextLink>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faqs" className="faq-section section">
          <Reveal>
            <div className="faq-grid">
              <div>
                <Eyebrow>Common questions</Eyebrow>
                <h2>Plywood buying questions, answered.</h2>

                <p>
                  Looking for plywood in Kolkata? These are some of the key
                  questions to consider before choosing a grade.
                </p>
              </div>

              <div className="faq-list">
                <details>
                  <summary>
                    Which plywood is best for a kitchen?
                    <span>+</span>
                  </summary>
                  <p>
                    Kitchen plywood should be selected based on moisture
                    exposure, construction requirements and the specific
                    application. BWR or BWP options may be considered where
                    greater moisture resistance is required.
                  </p>
                </details>

                <details>
                  <summary>
                    What is the difference between MR, BWR and BWP plywood?
                    <span>+</span>
                  </summary>
                  <p>
                    MR, BWR and BWP indicate different levels of moisture
                    resistance. The appropriate grade depends on where the
                    plywood will be used and the conditions it will encounter.
                  </p>
                </details>

                <details>
                  <summary>
                    What is the plywood price in Kolkata?
                    <span>+</span>
                  </summary>
                  <p>
                    Plywood prices in Kolkata vary according to grade,
                    thickness, size, brand and product specification. Contact
                    us for current availability and pricing.
                  </p>
                </details>

                <details>
                  <summary>
                    Where can I buy plywood in Kolkata?
                    <span>+</span>
                  </summary>
                  <p>
                    Balaji Ply & Lam is located at 63/1/1A Sarat Bose Road,
                    Bhowanipore, Kolkata. You can visit the store or contact us
                    on WhatsApp to ask about available plywood options.
                  </p>
                </details>

                <details>
                  <summary>
                    Do you have CenturyPly in Kolkata?
                    <span>+</span>
                  </summary>
                  <p>
                    Ask us about currently available CenturyPly products,
                    grades and specifications in Kolkata.
                  </p>
                </details>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
