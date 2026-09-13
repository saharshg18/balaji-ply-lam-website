import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ContactLink, Eyebrow, Reveal, TextLink } from '../components/ui';
import { faqs, googleMapsUrl, materials, messages, verifiedReviews } from '../data/site';

function HomeHero() {
  const reduced = useReducedMotion();

  return (
    <section className="home-hero" aria-labelledby="home-title">
      <picture className="hero-picture">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />
        <motion.img
          src="/images/hero-interior.jpg"
          alt="A considered contemporary living room with walnut wall panels, textured louvers and warm ivory furniture"
          className="hero-image"
          width="1568"
          height="882"
          fetchPriority="high"
          initial={{ scale: reduced ? 1 : 1.035 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduced ? 0 : 2, ease: 'easeOut' }}
        />
      </picture>

      <div className="home-hero-shade" />

      <div className="container home-hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.9,
            delay: reduced ? 0 : 0.15,
          }}
        >
          <Eyebrow>Plywood &amp; laminate shop in Kolkata. Bhawanipore.</Eyebrow>

          <h1 id="home-title">
            Balaji
            <br />
            Ply <em>&amp;</em> Lam
          </h1>

          <p className="hero-tagline">Where great interiors begin.</p>

          <p className="hero-description">
            Premium plywood, laminates and interior materials.
            <br className="desktop-break" /> Considered choices for the spaces you imagine.
          </p>

          <div className="button-group hero-buttons">
            <Link to="/products" className="btn btn-light">
              <span>Explore Products</span>
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </Link>

            <ContactLink kind="whatsapp" variant="outline-light" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="section introduction" aria-labelledby="intro-title">
      <Reveal className="container intro-grid">
        <div>
          <Eyebrow>Your material destination</Eyebrow>

          <h2 id="intro-title">
            Thoughtful materials.
            <br />
            <em>Beautiful beginnings.</em>
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            Every beautiful interior begins with a choice. The right foundation.
            A finish that feels just right. Materials that work as beautifully as
            they look.
          </p>

          <p>
            At <strong>Balaji Ply &amp; Lam, Bhowanipore</strong>, we bring
            plywood, laminates and decorative interior materials together in one
            welcoming Kolkata destination, with genuine products and helpful
            guidance for homeowners and professionals alike.
          </p>

          <TextLink to="/about-us">A little more about us</TextLink>
        </div>
      </Reveal>
    </section>
  );
}

function MaterialGallery() {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({
    start: true,
    end: false,
    index: 1,
  });
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = track.current;
    if (!element) return;

    const update = () => {
      const first = element.firstElementChild as HTMLElement | null;
      const gap =
        Number.parseFloat(getComputedStyle(element).columnGap) || 24;
      const itemWidth =
        (first?.getBoundingClientRect().width || 1) + gap;

      setPosition({
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft + element.clientWidth >=
          element.scrollWidth - 3,
        index: Math.round(element.scrollLeft / itemWidth) + 1,
      });
    };

    update();

    element.addEventListener('scroll', update, { passive: true });

    const resize = new ResizeObserver(update);
    resize.observe(element);

    return () => {
      element.removeEventListener('scroll', update);
      resize.disconnect();
    };
  }, []);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;

    const item = element.firstElementChild as HTMLElement;
    const gap =
      Number.parseFloat(getComputedStyle(element).columnGap) || 24;

    element.scrollBy({
      left: direction * (item.getBoundingClientRect().width + gap),
      behavior: reduced ? 'instant' : 'smooth',
    });
  };

  return (
    <section
      className="section material-gallery"
      aria-labelledby="collection-title"
    >
      <div className="container">
        <Reveal className="section-heading-row">
          <div>
            <Eyebrow>The material collection</Eyebrow>

            <h2 id="collection-title">
              A material for
              <br />
              <em>every possibility.</em>
            </h2>
          </div>

          <div className="section-heading-aside">
            <p>
              From a strong foundation
              <br />
              to the perfect finishing touch.
            </p>

            <TextLink to="/products">Explore the full collection</TextLink>
          </div>
        </Reveal>

        <div
          className="material-track"
          ref={track}
          aria-label="Interior material collection"
          tabIndex={0}
        >
          {materials.map((material, index) => (
            <Link
              className="material-item"
              to={`/products#${material.id}`}
              key={material.id}
            >
              <div className="material-image-wrap">
                <img
                  src={material.image}
                  alt={material.alt}
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
                <span className="material-number">0{index + 1}</span>
                <h3>{material.name}</h3>
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </div>

              <p>{material.shortDescription}</p>
            </Link>
          ))}
        </div>

        <div className="gallery-bottom">
          <span className="gallery-note">
            A world of finishes. One destination.
          </span>

          <div className="gallery-controls">
            <span className="gallery-counter" aria-live="polite">
              {String(position.index).padStart(2, '0')}{' '}
              <span>
                / {String(materials.length).padStart(2, '0')}
              </span>
            </span>

            <button
              type="button"
              className="round-button"
              onClick={() => move(-1)}
              disabled={position.start}
              aria-label="Previous material category"
            >
              <ArrowLeft size={19} strokeWidth={1.4} />
            </button>

            <button
              type="button"
              className="round-button"
              onClick={() => move(1)}
              disabled={position.end}
              aria-label="Next material category"
            >
              <ArrowRight size={19} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const brands = [
  {
    category: 'Plywood',
    name: 'Century Ply',
    heading: 'Century Ply for Homes & Interiors',
    description:
      'A trusted choice for homeowners, architects and carpenters, with plywood for everything from everyday furniture to complete home interiors.',
    logo: '/images/brands/century-ply.png',
    logoAlt: 'Century Ply logo',
    image: '/images/hero-interior.jpg',
    imageAlt:
      'Contemporary home interior featuring warm wood surfaces and furniture',
    tags: ['Homes', 'Furniture', 'Kitchens', 'Interiors'],
  },
  {
    category: 'Plywood',
    name: 'Greenply',
    heading: 'Greenply Plywood for Everyday Living',
    description:
      'A versatile range of plywood for modern homes and furniture, with options suited to kitchens, bedrooms, living spaces and more.',
    logo: '/images/brands/greenply.png',
    logoAlt: 'Greenply logo',
    image: '/images/plywood.jpg',
    imageAlt:
      'Plywood sheets and warm wood materials for furniture and interiors',
    tags: ['Homes', 'Furniture', 'Kitchens', 'Offices'],
  },
  {
    category: 'Plywood',
    name: 'Austin',
    heading: 'Austin Plywood for Lasting Interiors',
    description:
      'Known for plywood made for demanding furniture and interior work, Austin brings dependable choices for projects that need lasting performance.',
    logo: '/images/brands/austin.png',
    logoAlt: 'Austin Plywood logo',
    image: '/images/design-studio.jpg',
    imageAlt:
      'Interior design studio with coordinated wood and surface materials',
    tags: ['Furniture', 'Interiors', 'Homes', 'Projects'],
  },
  {
    category: 'Plywood',
    name: 'Sylvan',
    heading: 'Sylvan Plywood for Furniture & Interiors',
    description:
      'A popular plywood choice for furniture and interiors, bringing together practical performance and a finish suited to everyday living spaces.',
    logo: '/images/brands/sylvan.jpg',
    logoAlt: 'Sylvan Ply logo',
    image: '/images/material-palette.jpg',
    imageAlt: 'Interior material palette with wood and decorative surfaces',
    tags: ['Furniture', 'Homes', 'Interiors', 'Commercial'],
  },
  {
    category: 'Laminates',
    name: 'Royale Touche',
    heading: 'Royale Touche Laminates for Statement Interiors',
    description:
      'Bring more character to your interiors with Royale Touche laminates, from elegant woodgrains and colours to bold textures and contemporary finishes.',
    logo: '/images/brands/royale-touche.png',
    logoAlt: 'Royale Touche logo',
    image: '/images/louvers.jpg',
    imageAlt: 'Warm decorative interior surface with textured detailing',
    tags: ['Woodgrains', 'Colours', 'Textures', 'Finishes'],
  },
  {
    category: 'Laminates',
    name: 'Greenlam',
    heading: 'Greenlam Laminates for Every Style',
    description:
      'From subtle everyday finishes to distinctive textures and surfaces, Greenlam offers laminates that give furniture and interiors their own personality.',
    logo: '/images/brands/greenlam.png',
    logoAlt: 'Greenlam logo',
    image: '/images/material-palette.jpg',
    imageAlt:
      'Curated palette of decorative laminate and interior finishes',
    tags: ['Textures', 'Colours', 'Woodgrains', 'Finishes'],
  },
  {
    category: 'Laminates',
    name: 'Century Laminates',
    heading: 'Century Laminates for Modern Furniture',
    description:
      'Contemporary laminate designs for furniture, wardrobes and interiors, with a wide choice of colours, patterns and finishes.',
    logo: '/images/brands/century-laminates.png',
    logoAlt: 'Century Laminates logo',
    image: '/images/design-studio.jpg',
    imageAlt:
      'Contemporary interior design studio with coordinated surface finishes',
    tags: ['Furniture', 'Wardrobes', 'Walls', 'Interiors'],
  },
  {
    category: 'Laminates',
    name: 'Merino',
    heading: 'Merino Laminates for Kitchens & Interiors',
    description:
      'A versatile collection of laminate designs for kitchens, wardrobes, furniture and interiors, making it easy to find a finish that feels right for your space.',
    logo: '/images/brands/merino.png',
    logoAlt: 'Merino laminates logo',
    image: '/images/hero-interior.jpg',
    imageAlt:
      'Contemporary home interior with warm furniture and decorative surfaces',
    tags: ['Kitchens', 'Furniture', 'Wardrobes', 'Interiors'],
  },
];

function BrandShowcase() {
  const [category, setCategory] = useState<'Plywood' | 'Laminates'>(
    'Plywood'
  );
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const filteredBrands = brands.filter(
    (brand) => brand.category === category
  );

  const activeBrand = filteredBrands[active] ?? filteredBrands[0];

  const onTabKey = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let next = index;

    if (
      event.key === 'ArrowDown' ||
      event.key === 'ArrowRight'
    ) {
      next = (index + 1) % filteredBrands.length;
    } else if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowLeft'
    ) {
      next =
        (index - 1 + filteredBrands.length) %
        filteredBrands.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = filteredBrands.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActive(next);

    document
      .getElementById(`brand-tab-${next}`)
      ?.focus();
  };

  const changeCategory = (
    nextCategory: 'Plywood' | 'Laminates'
  ) => {
    setCategory(nextCategory);
    setActive(0);
  };

  return (
    <section
      className="section projects-section brand-showcase-section"
      aria-labelledby="brands-title"
    >
      <div className="container">
        <Reveal className="section-heading-row">
          <div>
            <Eyebrow>Plywood &amp; laminate brands</Eyebrow>

            <h2 id="brands-title">
              Best Plywood &amp; Laminate Brands in Kolkata
            </h2>
          </div>

          <p className="projects-heading-copy">
            Explore plywood and laminates from trusted brands including
            Century Ply, Greenply, Austin, Sylvan, Royale Touche,
            Greenlam, Century Laminates and Merino — for homes,
            furniture, kitchens, wardrobes and commercial interiors.
          </p>
        </Reveal>

        <div
          className="brand-category-toggle"
          role="tablist"
          aria-label="Material type"
        >
          <button
            type="button"
            className={`brand-category-button${
              category === 'Plywood' ? ' is-active' : ''
            }`}
            role="tab"
            aria-selected={category === 'Plywood'}
            onClick={() => changeCategory('Plywood')}
          >
            Plywood
          </button>

          <button
            type="button"
            className={`brand-category-button${
              category === 'Laminates' ? ' is-active' : ''
            }`}
            role="tab"
            aria-selected={category === 'Laminates'}
            onClick={() => changeCategory('Laminates')}
          >
            Laminates
          </button>
        </div>

        <div className="projects-grid brand-showcase-grid">
          <div
            className="project-visual brand-visual"
            id="brand-panel"
            role="tabpanel"
            aria-labelledby={`brand-tab-${active}`}
            tabIndex={0}
          >
            <AnimatePresence
              mode="sync"
              initial={false}
            >
              <motion.div
                key={activeBrand.name}
                className="brand-visual-inner"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: reduced ? 0 : 0.45,
                }}
              >
                <img
                  src={activeBrand.image}
                  alt={activeBrand.imageAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />

                <div className="brand-visual-overlay" />

                <div className="brand-logo-card">
                  <img
                    src={activeBrand.logo}
                    alt={activeBrand.logoAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <span className="project-image-caption">
                  {activeBrand.name} · {activeBrand.category}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="project-selection brand-selection">
            <div
              role="tablist"
              aria-label={`${category} brands`}
              aria-orientation="vertical"
            >
              {filteredBrands.map((brand, index) => (
                <button
                  type="button"
                  key={brand.name}
                  className={`project-tab${
                    active === index ? ' is-active' : ''
                  }`}
                  id={`brand-tab-${index}`}
                  role="tab"
                  aria-selected={active === index}
                  aria-controls="brand-panel"
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
                      {brand.name}
                    </span>

                    {active === index && (
                      <>
                        <span className="project-tab-description">
                          <strong>{brand.heading}</strong>
                          <br />
                          {brand.description}
                        </span>

                        <span className="brand-tags">
                          {brand.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </span>
                      </>
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

            <TextLink to="/products">
              Explore {activeBrand.name}
            </TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: 'More materials. One trusted destination.',
    text: 'Explore quality plywood, laminates, decorative surfaces and interior materials for homes, offices and commercial spaces across Kolkata.',
  },
  {
    title: 'Quality you can choose with confidence.',
    text: 'Choose from reliable plywood and laminate options with the right specifications, finishes and materials for your project.',
  },
  {
    title: 'Guidance for every project.',
    text: 'Get practical assistance in choosing plywood, laminates and interior materials based on your design, requirements and budget.',
  },
  {
    title: 'Considered options. Fair value.',
    text: 'Explore materials across different styles and price points to find the right plywood, laminates and interior finishes for your space.',
  },
];

function WhyChoose() {
  return (
    <section
      className="section why-section"
      aria-labelledby="why-title"
    >
      <div className="container why-grid">
        <Reveal className="why-heading">
          <Eyebrow>
            Your trusted plywood &amp; laminate destination in Kolkata
          </Eyebrow>

          <h2 id="why-title">
            Quality plywood, laminates &amp; interior materials.
            <br />
            <em>
              One trusted destination
              <br />
              in Kolkata.
            </em>
          </h2>

          <p>
            Looking for a trusted plywood shop in Kolkata? Explore
            quality plywood, laminates and interior materials with
            expert guidance for homes, offices and commercial spaces.
          </p>
        </Reveal>

        <div className="reasons-list">
          {reasons.map((reason, index) => (
            <Reveal
              className="reason-row"
              key={reason.title}
              delay={index * 0.035}
            >
              <span className="reason-number">
                0{index + 1}
              </span>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Professionals() {
  return (
    <section
      className="professionals-section"
      aria-labelledby="professionals-title"
    >
      <div className="professionals-copy">
        <Reveal>
          <Eyebrow>
            For architects, interior designers &amp; professionals in
            Kolkata
          </Eyebrow>

          <h2 id="professionals-title">
            Your design vision.
            <br />
            <em>Quality materials to bring it to life.</em>
          </h2>

          <p>
            A trusted material destination in Kolkata for architects
            and interior designers. Explore quality plywood,
            laminates, decorative surfaces and interior materials,
            compare textures and finishes, and bring your complete
            material palette together in one convenient destination.
          </p>

          <p className="professionals-invitation">
            Bring your ideas. Let's explore the right materials for
            your project.
          </p>

          <div className="button-group">
            <ContactLink
              kind="whatsapp"
              message={messages.professional}
              variant="light"
            >
              Let's Talk Materials
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
          alt="An interior designer's coordinated palette of woodgrain, fluted panels and neutral decorative finishes"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

function MaterialsAsDesign() {
  return (
    <section
      className="materials-editorial"
      aria-labelledby="details-title"
    >
      <img
        src="/images/louvers.jpg"
        alt="A close study of walnut grain, vertical fluting and the way warm light moves across a decorative surface"
        width="800"
        height="1000"
        loading="lazy"
        decoding="async"
      />

      <div className="editorial-shade" />

      <Reveal className="container editorial-copy">
        <Eyebrow>
          Quality plywood, laminates &amp; interior materials
        </Eyebrow>

        <h2 id="details-title">
          The right materials.
          <br />
          <em>The perfect finish.</em>
        </h2>

        <p>
          From the warmth of natural wood to the perfect laminate
          finish,
          <br />
          discover quality plywood, laminates and interior materials
          for every space in Kolkata.
        </p>

        <TextLink
          to="/products"
          className="light-link"
        >
          Explore our plywood &amp; laminate collection
        </TextLink>
      </Reveal>
    </section>
  );
}

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
          The best perspective comes from the people who walk through
          our doors. Explore their experiences, in their own words.
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
          <Eyebrow>A little clarity</Eyebrow>

          <h2 id="faq-title">
            Good questions.
            <br />
            <em>Helpful answers.</em>
          </h2>

          <p className="faq-intro">
            A few things to know before you choose.
            <br />
            For everything else, we're a conversation away.
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

export function HomePage() {
  return (
    <>
      <SEO page="home" />
      <HomeHero />
      <Introduction />
      <MaterialGallery />
      <BrandShowcase />
      <WhyChoose />
      <Professionals />
      <MaterialsAsDesign />
      <Reviews />
      <FAQ />
    </>
  );
}
