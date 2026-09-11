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
  materials,
  messages,
  productCategories,
} from '../data/site';

export function ProductsPage() {
  return (
    <>
      <SEO page="products" />

      {/* HERO */}
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <Reveal>
            <Eyebrow>PRODUCTS</Eyebrow>

            <h1>
              Plywood, Laminates &amp;
              <br />
              <em>Interior Materials in Kolkata</em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="inner-hero-description">
              Explore plywood, boards, laminates, WPC, louvers,
              flush doors and supporting interior materials
              available from Balaji Ply &amp; Lam in Bhowanipore,
              Kolkata.
            </p>

            <div className="button-group">
              <ContactLink
                kind="whatsapp"
                message={messages.catalogue}
              >
                Get Catalogue on WhatsApp
              </ContactLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section
        className="section"
        aria-labelledby="product-categories-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>EXPLORE BY CATEGORY</Eyebrow>

              <h2 id="product-categories-title">
                Find the right
                <br />
                <em>material for your project.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Start with a category to explore
                <br />
                materials, applications and options.
              </p>
            </div>
          </Reveal>

          <div className="product-category-grid">
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                to={category.href}
                className="product-category-card"
              >
                <div className="product-category-image">
                  <img
                    src={category.image}
                    alt={category.alt}
                    width="900"
                    height="1100"
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                  />

                  <span className="product-category-arrow">
                    <ArrowUpRight
                      size={23}
                      strokeWidth={1.35}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className="product-category-meta">
                  <span className="product-category-number">
                    0{index + 1}
                  </span>

                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.shortDescription}</p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MATERIALS */}
      <section
        className="section materials-overview"
        aria-labelledby="materials-overview-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>MATERIALS</Eyebrow>

              <h2 id="materials-overview-title">
                From everyday essentials
                <br />
                <em>to specialised finishes.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                A quick overview of materials
                <br />
                available across our categories.
              </p>
            </div>
          </Reveal>

          <div className="materials-list">
            {materials.map((material, index) => (
              <div
                className="materials-list-item"
                key={material.id}
              >
                <span className="materials-list-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="materials-list-content">
                  <h3>{material.name}</h3>
                  <p>{material.description}</p>
                </div>

                <Link
                  to={material.href}
                  aria-label={`Explore ${material.name}`}
                >
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section
        className="section"
        aria-labelledby="product-brands-title"
      >
        <div className="container">
          <Reveal className="section-heading-row">
            <div>
              <Eyebrow>BRANDS</Eyebrow>

              <h2 id="product-brands-title">
                Brands worth
                <br />
                <em>exploring.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                Explore the brands available
                <br />
                through our product range.
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

      {/* BUYING HELP */}
      <section
        className="section buying-help"
        aria-labelledby="buying-help-title"
      >
        <div className="container buying-help-grid">
          <Reveal>
            <Eyebrow>NOT SURE WHAT TO CHOOSE?</Eyebrow>

            <h2 id="buying-help-title">
              Start with
              <br />
              <em>the right question.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              The right material depends on where it will be
              used, the finish you want and the requirements of
              your project. Our guides can help you compare
              common options before you buy.
            </p>

            <div className="buying-help-links">
              <TextLink to="/guides/">
                Explore buying guides
              </TextLink>

              <TextLink to="/guides/plywood-price-in-kolkata/">
                Understand plywood pricing
              </TextLink>

              <TextLink to="/guides/mr-vs-bwr-vs-bwp-plywood/">
                Compare plywood types
              </TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="professionals-section"
        aria-labelledby="products-cta-title"
      >
        <div className="professionals-copy">
          <Reveal>
            <Eyebrow>LET'S FIND THE RIGHT MATERIAL</Eyebrow>

            <h2 id="products-cta-title">
              Have something
              <br />
              <em>specific in mind?</em>
            </h2>

            <p>
              Tell us what you need and we'll help you explore
              the available options. WhatsApp us for the latest
              catalogue and availability.
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
            alt="Interior material samples and finishes"
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
