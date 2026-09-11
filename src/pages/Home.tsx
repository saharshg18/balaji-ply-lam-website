import { useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

import { SEO } from '../components/SEO';
import { ContactLink, Eyebrow, Reveal, TextLink } from '../components/ui';
import {
  brands,
  faqs,
  googleMapsUrl,
  messages,
  productCategories,
  projects,
  verifiedReviews,
} from '../data/site';

function HomeHero() {
  const reduced = useReducedMotion();

  return (
    <section className="home-hero" aria-labelledby="home-title">
      <picture className="hero-picture">
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero-mobile.jpg"
        />

        <motion.img
          src="/images/hero-interior.jpg"
          alt="Contemporary interior featuring warm wood panels and refined interior finishes"
          className="hero-image"
          width="1568"
          height="882"
          fetchPriority="high"
          initial={{ scale: reduced ? 1 : 1.035 }}
          animate={{ scale: 1 }}
          transition={{
            duration: reduced ? 0 : 2,
            ease: 'easeOut',
          }}
        />
      </picture>

      <div className="home-hero-shade" />

      <div className="container home-hero-inner">
        <motion.div
          className="hero-copy"
          initial={{
            opacity: 0,
            y: reduced ? 0 : 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduced ? 0 : 0.9,
            delay: reduced ? 0 : 0.15,
          }}
        >
          <Eyebrow>
            PLYWOOD • LAMINATES • INTERIOR MATERIALS
          </Eyebrow>

          <h1 id="home-title">
            Plywood, Laminates &amp; Interior Materials in Kolkata
          </h1>

          <p className="hero-tagline">
            Materials that bring interiors together.
          </p>

          <p className="hero-description">
            Plywood, laminates, WPC, doors, boards, louvers and more —
            all in one place in Bhowanipore, Kolkata.
          </p>

          <div className="button-group hero-buttons">
            <Link
              to="/products/"
              className="btn btn-light"
            >
              <span>Explore Products</span>
              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>

            <ContactLink
              kind="whatsapp"
              message={messages.catalogue}
              variant="outline-light"
            >
              Get Catalogue on WhatsApp
            </ContactLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section
      className="section introduction"
      aria-labelledby="intro-title"
    >
      <Reveal className="container intro-grid">
        <div>
          <Eyebrow>YOUR MATERIAL DESTINATION IN KOLKATA</Eyebrow>

          <h2 id="intro-title">
            Thoughtful materials.
            <br />
            <em>Better choices.</em>
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            Balaji Ply &amp; Lam is a plywood and interior-materials
            store in Bhowanipore, Kolkata, offering products across
            plywood, laminates, WPC, doors, boards, louvers and
            related interior requirements.
          </p>

          <p>
            Whether you are working on a home, furniture, kitchen,
            wardrobe, commercial space or interior project, we bring
            a range of materials and established brands together so
            you can explore the right options for your requirement.
          </p>

          <TextLink to="/about/">
            A little more about us
          </TextLink>
        </div>
      </Reveal>
    </section>
  );
}

function ProductCategories() {
  return (
    <section
      className="section material-gallery"
      aria-labelledby="collection-title"
    >
      <div className="container">
        <Reveal className="section-heading-row">
          <div>
            <Eyebrow>THE MATERIAL COLLECTION</Eyebrow>

            <h2 id="collection-title">
              Everything you need.
              <br />
              <em>In one place.</em>
            </h2>
          </div>

          <div className="section-heading-aside">
            <p>
              Plywood, laminates, boards,
              <br />
              WPC, doors and more.
            </p>

            <TextLink to="/products/">
              Explore all products
            </TextLink>
          </div>
        </Reveal>

        <div className="material-track" aria-label="Product categories">
          {productCategories.map((category, index) => (
            <Link
              className="material-item"
              to={category.href}
              key={category.id}
            >
              <div className="material-image-wrap">
                <img
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="1000"
                />

                <span className="material-image-arrow">
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </span>
              </div>

              <div className="material-name-row">
                <span className="material-number">
                  0{index + 1}
                </span>

                <h3>{category.name}</h3>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </div>

              <p>{category.shortDescription}</p>
            </Link>
          ))}
        </div>

        <div className="gallery-bottom">
          <span className="gallery-note">
            Explore the materials for your next space.
          </span>

          <TextLink to="/products/">
            View all products
          </TextLink>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  const featuredBrands = brands.slice(0, 6);

  return (
    <section
      className="section"
      aria-labelledby="brands-title"
    >
      <div className="container">
        <Reveal className="section-heading-row">
          <div>
            <Eyebrow>BRANDS</Eyebrow>

            <h2 id="brands-title">
              Established names.
              <br />
              <em>More choice.</em>
            </h2>
          </div>

          <div className="section-heading-aside">
            <p>
              Explore plywood and laminate
              <br />
              brands available through our store.
            </p>

            <TextLink to="/brands/">
              View all brands
            </TextLink>
          </div>
        </Reveal>

        <div className="brand-grid">
          {featuredBrands.map((brand) => (
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
  );
}

function ProjectsSection() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const visibleProjects = projects.slice(0, 3);

  const onTabKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next = index;

    if (
      event.key === 'ArrowDown' ||
      event.key === 'ArrowRight'
    ) {
      next = (index + 1) % visibleProjects.length;
    } else if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowLeft'
    ) {
      next =
        (index - 1 + visibleProjects.length) %
        visibleProjects.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = visibleProjects.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActive(next);

    document
      .getElementById(`project-tab-${next}`)
      ?.focus();
  };

  if (!visibleProjects.length) {
    return null;
  }

  const currentProject = visibleProjects[active];

  return (
    <section
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <Reveal className="section-heading-row">
          <div>
            <Eyebrow>PROJECTS</Eyebrow>

            <h2 id="projects-title">
              Spaces brought
              <br />
              <em>to life.</em>
            </h2>
          </div>

          <div className="section-heading-aside">
            <p>
              A look at selected spaces
              <br />
              connected to our work.
            </p>

            <TextLink to="/projects/">
              View projects
            </TextLink>
          </div>
        </Reveal>

        <div className="projects-grid">
          <div
            className="project-visual"
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${active}`}
            tabIndex={0}
          >
            <motion.img
              key={currentProject.id}
              src={currentProject.image}
              alt={currentProject.alt}
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              onError={(event) => {
                const image = event.currentTarget;

                if (image.dataset.fallback) return;

                image.dataset.fallback = 'true';
                image.src = '/images/hero-interior.jpg';
                image.alt =
                  'Interior inspiration featuring warm wood panels and refined finishes';
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduced ? 0 : 0.45,
              }}
            />

            <span className="project-image-caption">
              Selected project inspiration.
            </span>
          </div>

          <div className="project-selection">
            <div
              role="tablist"
              aria-label="Selected projects"
              aria-orientation="vertical"
            >
              {visibleProjects.map((project, index) => (
                <button
                  type="button"
                  key={project.id}
                  className={`project-tab${
                    active === index ? ' is-active' : ''
                  }`}
                  id={`project-tab-${index}`}
                  role="tab"
                  aria-selected={active === index}
                  aria-controls="project-panel"
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) =>
                    onTabKey(event, index)
                  }
                >
                  <span className="project-number">
                    0{index + 1}
                  </span>

                  <span className="project-tab-body">
                    <span className="project-tab-title">
                      {project.name}
                    </span>

                    {active === index && (
                      <span className="project-tab-description">
                        {project.description}
                      </span>
                    )}
                  </span>

                  <ArrowUpRight
                    size={21}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <TextLink to="/projects/">
              Explore our projects
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * IMPORTANT:
 * This Google Reviews section is intentionally kept unchanged
 * from the existing homepage implementation.
 */
function GoogleMark() {
  return (
    <svg
      className="google-mark"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4a4.6 4.6 0 0 1-2 3v2.6h3.2c1.9-1.8 3-4.3 3-7.5Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 5-.9 6.6-2.3l-3.2-2.6a6 6 0 0 1-9-3.1H3.1v2.6A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.4 14a6 6 0 0 1 0-4V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14Z"
      />
      <path
        fill="#EA4335"
        d="M12 6a5.4 5.4 0 0 1 3.8 1.5l2.8-2.8A9.5 9.5 0 0 0 12 2a10 10 0 0 0-8.9 5.4L6.4 10A6 6 0 0 1 12 6Z"
      />
    </svg>
  );
}

function Reviews() {
  return (
    <section
      className="section reviews-section"
      aria-labelledby="reviews-title"
    >
      <Reveal className="container reviews-inner">
        <div className="google-label">
          <GoogleMark />
          <span>Our community, on Google</span>
        </div>

        <h2 id="reviews-title">
          Real people.
          <br />
          <em>Real experiences.</em>
        </h2>

        <p>
          The best perspective comes from the people who walk
          through our doors. Explore their experiences, in their
          own words.
        </p>

        {verifiedReviews.length > 0 && (
          <div className="verified-reviews">
            {verifiedReviews.map((review) => (
              <figure key={review.sourceUrl}>
                <blockquote>{review.text}</blockquote>

                <figcaption>
                  {review.author}

                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on Google
                    <ArrowUpRight size={14} />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <a
          className="btn btn-outline"
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Read Our Google Reviews</span>

          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </a>
      </Reveal>
    </section>
  );
}

function LocationSection() {
  return (
    <section
      className="section"
      aria-labelledby="location-title"
    >
      <Reveal className="container location-section">
        <div>
          <Eyebrow>VISIT OUR STORE</Eyebrow>

          <h2 id="location-title">
            Find us in
            <br />
            <em>Bhowanipore, Kolkata.</em>
          </h2>
        </div>

        <div className="location-copy">
          <p>
            Visit Balaji Ply &amp; Lam at 63/1/1A, Sarat Bose
            Road, Bhowanipore, Kolkata, West Bengal – 700025.
          </p>

          <div className="button-group">
            <ContactLink kind="directions">
              Get Directions
            </ContactLink>

            <ContactLink kind="call">
              Call Us
            </ContactLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="section faq-section"
      id="faqs"
      aria-labelledby="faq-title"
    >
      <div className="container faq-grid">
        <Reveal>
          <Eyebrow>HELPFUL ANSWERS</Eyebrow>

          <h2 id="faq-title">
            Good questions.
            <br />
            <em>Helpful answers.</em>
          </h2>

          <p className="faq-intro">
            A few things to know before you choose.
            <br />
            For everything else, we&apos;re a conversation away.
          </p>

          <ContactLink
            kind="whatsapp"
            variant="text"
          >
            Ask Us on WhatsApp
          </ContactLink>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item${
                open === index ? ' is-open' : ''
              }`}
              key={faq.question}
            >
              <h3>
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpen(
                      open === index ? null : index
                    )
                  }
                >
                  <span>{faq.question}</span>

                  <Plus
                    size={19}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <div
                className="faq-answer"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={open !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCatalogueCTA() {
  return (
    <section className="professionals-section" aria-labelledby="catalogue-title">
      <div className="professionals-copy">
        <Reveal>
          <Eyebrow>READY TO EXPLORE?</Eyebrow>

          <h2 id="catalogue-title">
            Tell us what
            <br />
            <em>you&apos;re looking for.</em>
          </h2>

          <p>
            Looking for plywood, laminates, WPC, doors or other
            interior materials in Kolkata? WhatsApp us for the
            latest catalogue and availability.
          </p>

          <div className="button-group">
            <ContactLink
              kind="whatsapp"
              message={messages.catalogue}
              variant="light"
            >
              Get Catalogue on WhatsApp
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
          src="/images/material-palette.jpg"
          alt="Coordinated interior material samples and finishes"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <SEO page="home" />

      <HomeHero />

      <Introduction />

      <ProductCategories />

      <BrandsSection />

      <ProjectsSection />

      <Reviews />

      <LocationSection />

      <FAQ />

      <FinalCatalogueCTA />
    </>
  );
}
