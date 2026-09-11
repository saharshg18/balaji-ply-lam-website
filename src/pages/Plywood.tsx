import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';
import {
  ContactLink,
  Eyebrow,
  InnerHero,
  Reveal,
  TextLink,
} from '../components/ui';
import { messages } from '../data/site';

const plywoodGrades = [
  {
    id: 'mr',
    number: '01',
    name: 'MR Grade',
    label: 'Moisture Resistant',
    image: '/images/grades/mr.jpg',
    description:
      'A practical plywood option for interior furniture and applications with limited moisture exposure.',
    use: 'Furniture · Wardrobes · Interior work',
  },
  {
    id: 'bwr',
    number: '02',
    name: 'BWR Grade',
    label: 'Boiling Water Resistant',
    image: '/images/grades/bwr.jpg',
    description:
      'A moisture-resistant option commonly considered for kitchens, utility areas and interior applications with greater exposure.',
    use: 'Kitchens · Utility areas · Furniture',
  },
  {
    id: 'bwp',
    number: '03',
    name: 'BWP Grade',
    label: 'Boiling Waterproof',
    image: '/images/grades/bwp.jpg',
    description:
      'A higher moisture-resistance option for demanding interior applications where regular moisture exposure is a concern.',
    use: 'Kitchens · Wet-prone areas · Premium interiors',
  },
];

const applications = [
  {
    id: 'home',
    number: '01',
    title: 'Homes, made personal',
    image: '/images/hero-interior.jpg',
    description:
      'Plywood for wardrobes, storage, furniture, wall features and other residential interior requirements.',
  },
  {
    id: 'kitchen',
    number: '02',
    title: 'Kitchens & wardrobes',
    image: '/images/plywood.jpg',
    description:
      'Choose plywood according to moisture exposure, construction requirements and the specific needs of kitchen cabinets and wardrobes.',
  },
  {
    id: 'architect',
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
      'Plywood and boards for custom furniture, carpentry and detailed interior work.',
  },
  {
    id: 'commercial',
    number: '05',
    title: 'Commercial spaces',
    image: '/images/laminates.jpg',
    description:
      'Material options for offices, retail, hospitality and other commercial interiors.',
  },
];

const brands = [
  {
    name: 'CenturyPly',
    logo: 'https://img.logokit.com/centuryply.com',
    link: '/brands/centuryply/',
  },
  {
    name: 'Greenply',
    logo: 'https://img.logokit.com/greenply.com',
    link: '/brands/',
  },
  {
    name: 'Greenlam',
    logo: 'https://img.logokit.com/greenlamindustries.com',
    link: '/brands/',
  },
  {
    name: 'Merino',
    logo: 'https://img.logokit.com/merinoindia.com',
    link: '/brands/',
  },
  {
    name: 'Royale Touche',
    logo: 'https://img.logokit.com/royaletouche.com',
    link: '/brands/',
  },
  {
    name: 'Austin',
    logo: 'https://img.logokit.com/austinply.com',
    link: '/brands/',
  },
];

export function PlywoodPage() {
  const [activeApplication, setActiveApplication] = useState('home');

  const selectedApplication =
    applications.find((item) => item.id === activeApplication) ??
    applications[0];

  return (
    <>
      <SEO page="plywood" />

      <main className="plywood-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <InnerHero
          image="/images/plywood.jpg"
          alt="Plywood sheets for interior applications in Kolkata"
          eyebrow="PLYWOOD & BOARDS"
          title="Plywood for the spaces you imagine."
        >
          <p>
            Explore plywood grades and board options for kitchens, wardrobes,
            furniture, homes and commercial interiors in Kolkata.
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

        {/* =====================================================
            PAGE NAVIGATION
        ====================================================== */}

        <div className="plywood-page-nav">
          <div className="plywood-page-nav-inner">
            <a href="#grades">Grades</a>
            <a href="#applications">Applications</a>
            <a href="#boards">Boards</a>
            <a href="#brands">Brands</a>
            <a href="#faqs">FAQs</a>
          </div>
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="plywood-intro section">
          <Reveal>
            <div className="plywood-intro-grid">
              <div>
                <Eyebrow>PLYWOOD IN KOLKATA</Eyebrow>

                <h2>
                  The right board
                  <br />
                  starts with the
                  <br />
                  right application.
                </h2>
              </div>

              <div className="plywood-intro-copy">
                <p>
                  Plywood selection depends on where the material will be used,
                  the moisture it may encounter and the performance your
                  project requires.
                </p>

                <TextLink to="/guides/">
                  Explore plywood guides
                </TextLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            GRADES
        ====================================================== */}

        <section id="grades" className="plywood-grades section">
          <Reveal>
            <div className="plywood-section-heading">
              <div>
                <Eyebrow>PLYWOOD GRADES</Eyebrow>
                <h2>MR. BWR. BWP.</h2>
              </div>

              <p>
                Three commonly considered grades, each suited to different
                levels of moisture exposure and interior use.
              </p>
            </div>

            <div className="plywood-grade-list">
              {plywoodGrades.map((grade) => (
                <article className="plywood-grade-item" key={grade.id}>
                  <div className="plywood-grade-photo">
                    <img
                      src={grade.image}
                      alt={`${grade.name} plywood`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src = '/images/plywood.jpg';
                      }}
                    />
                  </div>

                  <div className="plywood-grade-number">
                    {grade.number}
                  </div>

                  <div className="plywood-grade-main">
                    <h3>{grade.name}</h3>

                    <span>{grade.label}</span>

                    <p>{grade.description}</p>
                  </div>

                  <div className="plywood-grade-use">
                    <small>TYPICAL USE</small>
                    <p>{grade.use}</p>
                  </div>

                  <ArrowUpRight
                    className="plywood-grade-arrow"
                    size={19}
                    strokeWidth={1.2}
                  />
                </article>
              ))}
            </div>

            <div className="plywood-grade-footer">
              <p>
                Looking for the right plywood price in Kolkata? Pricing varies
                by brand, grade, thickness, size and specification.
              </p>

              <Link to="/guides/">
                Compare plywood options
                <ArrowUpRight size={16} strokeWidth={1.2} />
              </Link>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            APPLICATIONS — MAIN VISUAL SECTION
        ====================================================== */}

        <section id="applications" className="plywood-applications section">
          <Reveal>
            <div className="plywood-applications-heading">
              <div>
                <Eyebrow>FOR THE SPACES YOU IMAGINE</Eyebrow>

                <h2>
                  Different spaces.
                  <br />
                  <em>The same possibilities.</em>
                </h2>
              </div>

              <div>
                <p>
                  A home to make your own.
                  <br />
                  A project to bring to life.
                  <br />
                  It all starts with the right materials.
                </p>
              </div>
            </div>

            <div className="plywood-applications-layout">
              {/* FEATURE IMAGE */}

              <div className="plywood-application-image">
                <img
                  key={selectedApplication.image}
                  src={selectedApplication.image}
                  alt={selectedApplication.title}
                />

                <div className="plywood-application-image-caption">
                  <span>PLYWOOD APPLICATION</span>
                  <strong>{selectedApplication.title}</strong>
                </div>
              </div>

              {/* APPLICATION LIST */}

              <div className="plywood-application-list">
                {applications.map((application) => {
                  const isActive =
                    application.id === activeApplication;

                  return (
                    <button
                      type="button"
                      key={application.id}
                      className={`plywood-application-row ${
                        isActive ? 'is-active' : ''
                      }`}
                      onClick={() =>
                        setActiveApplication(application.id)
                      }
                    >
                      <span className="plywood-application-number">
                        {application.number}
                      </span>

                      <span className="plywood-application-content">
                        <span className="plywood-application-title">
                          {application.title}
                        </span>

                        {isActive && (
                          <span className="plywood-application-description">
                            {application.description}
                          </span>
                        )}
                      </span>

                      <ArrowUpRight
                        className="plywood-application-arrow"
                        size={19}
                        strokeWidth={1.2}
                      />
                    </button>
                  );
                })}

                <div className="plywood-application-link">
                  <Link to="/contact/">
                    Discuss your project
                    <ArrowUpRight size={16} strokeWidth={1.2} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            ENGINEERED BOARDS
        ====================================================== */}

        <section id="boards" className="plywood-boards section">
          <Reveal>
            <div className="plywood-boards-grid">
              <div className="plywood-boards-image">
                <img
                  src="/images/design-studio.jpg"
                  alt="Engineered boards and interior materials"
                  loading="lazy"
                />
              </div>

              <div className="plywood-boards-content">
                <Eyebrow>BEYOND PLYWOOD</Eyebrow>

                <h2>
                  Boards for
                  <br />
                  modern interiors.
                </h2>

                <p>
                  Plywood is only one part of an interior material palette.
                  Depending on the project, engineered boards can offer
                  different surface, density and application characteristics.
                </p>

                <div className="plywood-board-types">
                  <div>
                    <strong>MDF</strong>
                    <span>Furniture & interior applications</span>
                  </div>

                  <div>
                    <strong>HDF / HDMR</strong>
                    <span>Higher-density board applications</span>
                  </div>

                  <div>
                    <strong>Decorative Boards</strong>
                    <span>Furniture & interior detailing</span>
                  </div>
                </div>

                <TextLink to="/products/">
                  Explore all products
                </TextLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            BRANDS
        ====================================================== */}

        <section id="brands" className="plywood-brands section">
          <Reveal>
            <div className="plywood-brands-heading">
              <div>
                <Eyebrow>BRANDS</Eyebrow>

                <h2>
                  Explore
                  <br />
                  your options.
                </h2>
              </div>

              <p>
                Ask us about currently available plywood brands and
                specifications in Kolkata.
              </p>
            </div>

            <div className="plywood-brand-grid">
              {brands.map((brand) => (
                <Link
                  to={brand.link}
                  className="plywood-brand-card"
                  key={brand.name}
                >
                  <div className="plywood-brand-logo">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                    />
                  </div>

                  <div className="plywood-brand-name">
                    <span>{brand.name}</span>
                    <ArrowUpRight size={16} strokeWidth={1.2} />
                  </div>
                </Link>
              ))}
            </div>

            <div className="plywood-brands-footer">
              <TextLink to="/brands/">View all brands</TextLink>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}

        <section id="faqs" className="plywood-faq section">
          <Reveal>
            <div className="plywood-faq-grid">
              <div>
                <Eyebrow>PLYWOOD QUESTIONS</Eyebrow>

                <h2>
                  Before you
                  <br />
                  choose plywood.
                </h2>

                <p>
                  Quick answers to common plywood buying questions in Kolkata.
                </p>
              </div>

              <div className="plywood-faq-list">
                <details>
                  <summary>
                    Which plywood is best for a kitchen?
                    <span>+</span>
                  </summary>

                  <p>
                    Kitchen plywood should be selected according to moisture
                    exposure and the specific construction. BWR and BWP grades
                    may be considered where greater moisture resistance is
                    required.
                  </p>
                </details>

                <details>
                  <summary>
                    What is the difference between MR, BWR and BWP plywood?
                    <span>+</span>
                  </summary>

                  <p>
                    MR, BWR and BWP represent different levels of moisture
                    resistance. The appropriate grade depends on the intended
                    application and exposure conditions.
                  </p>
                </details>

                <details>
                  <summary>
                    What is the plywood price in Kolkata?
                    <span>+</span>
                  </summary>

                  <p>
                    Plywood price in Kolkata varies according to brand, grade,
                    thickness, size and specification. Contact us for current
                    availability and pricing.
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
                    for currently available plywood options.
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
