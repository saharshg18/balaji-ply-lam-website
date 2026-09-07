import { useEffect } from 'react';
import { business, faqs, googleMapsUrl, materials } from '../data/site';

const SITE_URL = 'https://www.balajiplyandlam.in';

const pageMetadata = {
  home: {
    path: '/',
    title: 'Best Plywood & Laminate Shop in Kolkata | Balaji Ply & Lam',
    description:
      'Looking for quality plywood, laminates and interior materials in Kolkata? Visit Balaji Ply & Lam in Bhowanipore for plywood, laminates, louvers, decorative panels and more.',
    name: 'Home',
    image: '/images/hero-interior.jpg',
  },

  products: {
    path: '/products',
    title: 'Plywood, Laminates & Decorative Panels in Kolkata | Balaji Ply & Lam',
    description:
      'Explore plywood, laminates, louvers, charcoal sheets, HDF panels and decorative interior materials at Balaji Ply & Lam in Bhowanipore, Kolkata.',
    name: 'Products',
    image: '/images/material-palette.jpg',
  },

  about: {
    path: '/about-us',
    title: 'About Balaji Ply & Lam | Plywood & Interior Materials in Kolkata',
    description:
      'Visit Balaji Ply & Lam in Bhowanipore, Kolkata for plywood, laminates and decorative interior materials. Find us at 63/1/1A Sarat Bose Road, Kolkata 700025.',
    name: 'About Us',
    image: '/images/design-studio.jpg',
  },
};

export function SEO({ page }: { page: keyof typeof pageMetadata }) {
  useEffect(() => {
    const meta = pageMetadata[page];

    const url =
      meta.path === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${meta.path}`;

    document.title = meta.title;

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

    /* Primary SEO */

    setMeta('description', meta.description);
    setMeta('robots', 'index, follow');

    /* Open Graph */

    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', url, true);
    setMeta('og:site_name', business.name, true);
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:image', `${SITE_URL}${meta.image}`, true);
    setMeta(
      'og:image:alt',
      'Interior materials and decorative surfaces from Balaji Ply & Lam',
      true
    );

    /* Twitter */

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', `${SITE_URL}${meta.image}`);

    /* Canonical */

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = url;

    /* Structured Data */

    const businessId = `${SITE_URL}/#business`;

    const graph: Record<string, unknown>[] = [
      {
        '@type': ['LocalBusiness', 'HomeGoodsStore'],
        '@id': businessId,

        name: business.name,

        url: `${SITE_URL}/`,

        description:
          'Plywood, laminates and decorative interior materials for homeowners, architects and interior designers in Kolkata.',

        telephone: business.phone,

        email: business.email,

        logo: `${SITE_URL}/favicon.svg`,

        image: `${SITE_URL}/images/hero-interior.jpg`,

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

        '@id': `${SITE_URL}/#website`,

        url: `${SITE_URL}/`,

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
          '@id': `${SITE_URL}/#website`,
        },

        about: {
          '@id': businessId,
        },

        inLanguage: 'en-IN',
      },
    ];

    /* Breadcrumb Schema */

    if (page !== 'home') {
      graph.push({
        '@type': 'BreadcrumbList',

        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
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

    /* FAQ Schema */

    if (page === 'home') {
      graph.push({
        '@type': 'FAQPage',

        '@id': `${SITE_URL}/#faqs`,

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

    /* Products Schema */

    if (page === 'products') {
      graph.push({
        '@type': 'ItemList',

        name: 'Interior Material Categories',

        itemListElement: materials.map((material, index) => ({
          '@type': 'ListItem',

          position: index + 1,

          name: material.name,

          url: `${url}#${material.id}`,
        })),
      });

      materials.forEach((material) => {
        graph.push({
          '@type': 'Service',

          '@id': `${url}#${material.id}-service`,

          name: `${material.name} in Kolkata`,

          serviceType: `${material.name} supply and material selection`,

          description: material.description,

          url: `${url}#${material.id}`,

          image: `${SITE_URL}${material.image}`,

          provider: {
            '@id': businessId,
          },

          areaServed: {
            '@type': 'City',
            name: 'Kolkata',
          },
        });
      });
    }

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
