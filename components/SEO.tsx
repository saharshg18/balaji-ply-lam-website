import { useEffect } from 'react';
import { business, faqs, googleMapsUrl, materials } from '../data/site';

const pageMetadata = {
  home: {
    path: '/',
    title: 'Best Plywood & Laminate Shop in Kolkata | Balaji Ply & Lam',
    description:
      'Looking for a plywood shop near you in Kolkata? Balaji Ply & Lam offers plywood, laminates and interior materials, including CenturyPly and Greenply, in Bhowanipore.',
    ogTitle:
      'Best Plywood & Laminate Shop in Kolkata | Balaji Ply & Lam',
    ogDescription:
      'Explore plywood, laminates and decorative interior materials at Balaji Ply & Lam in Bhowanipore, Kolkata, including trusted brands such as CenturyPly and Greenply.',
    name: 'Home',
    image: '/images/hero-interior.jpg',
  },

  products: {
    path: '/products',
    title:
      'Plywood Dealers in Kolkata | Laminates & Interior Materials',
    description:
      'Explore plywood, including CenturyPly and Greenply, plus laminates, louvers, charcoal sheets, HDF panels and decorative interior materials at Balaji Ply & Lam in Kolkata.',
    ogTitle:
      'Plywood, Laminates & Interior Materials in Kolkata | Balaji Ply & Lam',
    ogDescription:
      'Explore plywood, CenturyPly, Greenply, laminates, louvers, charcoal sheets, HDF panels and decorative interior materials in Kolkata.',
    name: 'Products',
    image: '/images/material-palette.jpg',
  },

  about: {
    path: '/about-us',
    title:
      "About Balaji Ply & Lam | Kolkata's Trusted Plywood Store",
    description:
      "Balaji Ply & Lam has served Kolkata's plywood and laminate needs for 25+ years from our Bhowanipore store, offering trusted brands including CenturyPly and Greenply.",
    ogTitle:
      'About Balaji Ply & Lam | 25+ Years in Kolkata',
    ogDescription:
      "Discover Balaji Ply & Lam, serving Kolkata's plywood and laminate needs for over 25 years from our Bhowanipore store.",
    name: 'About Us',
    image: '/images/design-studio.jpg',
  },
};

export function SEO({
  page,
}: {
  page: keyof typeof pageMetadata;
}) {
  useEffect(() => {
    const meta = pageMetadata[page];
    const origin = window.location.origin;
    const url = `${origin}${meta.path}`;

    // Page title
    document.title = meta.title;

    // Reuse existing tags instead of creating duplicates
    const setMeta = (
      key: string,
      content: string,
      property = false
    ) => {
      const attribute = property ? 'property' : 'name';

      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    // Standard SEO
    setMeta('description', meta.description);

    // Open Graph
    setMeta('og:title', meta.ogTitle, true);
    setMeta('og:description', meta.ogDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', url, true);
    setMeta('og:site_name', business.name, true);
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:image', `${origin}${meta.image}`, true);

    setMeta(
      'og:image:alt',
      'Plywood, laminates and decorative interior materials from Balaji Ply & Lam in Kolkata',
      true
    );

    // Twitter / X
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.ogTitle);
    setMeta('twitter:description', meta.ogDescription);
    setMeta('twitter:image', `${origin}${meta.image}`);

    // Canonical URL
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = url;

    // Structured Data
    const businessId = `${origin}/#business`;

    const graph: Record<string, unknown>[] = [
      {
        '@type': ['LocalBusiness', 'HomeGoodsStore'],
        '@id': businessId,

        name: business.name,

        url: `${origin}/`,

        description:
          'Plywood, laminates and decorative interior materials for homeowners, architects and interior professionals in Bhowanipore, Kolkata.',

        telephone: business.phone,

        email: business.email,

        logo: `${origin}/favicon.svg`,

        image: `${origin}/images/hero-interior.jpg`,

        address: {
          '@type': 'PostalAddress',

          streetAddress: `${business.street}, ${business.neighbourhood}`,

          addressLocality: business.city,

          addressRegion: business.state,

          postalCode: business.postalCode,

          addressCountry: 'IN',
        },

        areaServed: {
          '@type': 'City',
          name: 'Kolkata',
        },

        hasMap: googleMapsUrl,
      },

      {
        '@type': 'WebSite',

        '@id': `${origin}/#website`,

        url: `${origin}/`,

        name: business.name,

        publisher: {
          '@id': businessId,
        },

        inLanguage: 'en-IN',
      },

      {
        '@type': 'WebPage',

        '@id': `${url}#webpage`,

        url,

        name: meta.title,

        description: meta.description,

        isPartOf: {
          '@id': `${origin}/#website`,
        },

        about: {
          '@id': businessId,
        },

        inLanguage: 'en-IN',
      },
    ];

    // Breadcrumbs
    if (page !== 'home') {
      graph.push({
        '@type': 'BreadcrumbList',

        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${origin}/`,
          },

          {
            '@type': 'ListItem',
            position: 2,
            name: meta.name,
            item: url,
          },
        ],
      });
    }

    // Homepage FAQs
    if (page === 'home') {
      graph.push({
        '@type': 'FAQPage',

        '@id': `${origin}/#faqs`,

        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',

          name: faq.question,

          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    // Products structured data
    if (page === 'products') {
      graph.push({
        '@type': 'ItemList',

        name: 'Interior material categories',

        itemListElement: materials.map(
          (material, index) => ({
            '@type': 'ListItem',

            position: index + 1,

            name: material.name,

            url: `${url}#${material.id}`,
          })
        ),
      });

      materials.forEach((material) =>
        graph.push({
          '@type': 'Service',

          '@id': `${url}#${material.id}-service`,

          name: `${material.name} sourcing in Kolkata`,

          serviceType: `${material.name} supply and material selection`,

          description: material.description,

          url: `${url}#${material.id}`,

          image: `${origin}${material.image}`,

          provider: {
            '@id': businessId,
          },

          areaServed: {
            '@type': 'City',
            name: 'Kolkata',
          },
        })
      );
    }

    // Structured data script
    let schema = document.getElementById(
      'site-structured-data'
    ) as HTMLScriptElement | null;

    if (!schema) {
      schema = document.createElement('script');

      schema.id = 'site-structured-data';

      schema.type = 'application/ld+json';

      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [page]);

  return null;
}
