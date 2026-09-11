import { useEffect } from 'react';
import {
  business,
  faqs,
  googleMapsUrl,
  productCategories,
  brands,
  guides,
} from '../data/site';

const pageMetadata = {
  home: {
    path: '/',
    title: 'Plywood Shop in Kolkata | Plywood & Laminates | Balaji Ply & Lam',
    description:
      'Looking for a plywood shop in Kolkata? Balaji Ply & Lam in Bhowanipore offers plywood, laminates, WPC, doors, boards and interior materials.',
    name: 'Home',
    image: '/images/hero-interior.jpg',
  },

  products: {
    path: '/products/',
    title:
      'Plywood, Laminates & Interior Materials in Kolkata | Balaji Ply & Lam',
    description:
      'Explore plywood, laminates, WPC, louvers, doors, boards and interior accessories at Balaji Ply & Lam, a plywood and laminate shop in Bhowanipore, Kolkata.',
    name: 'Products',
    image: '/images/material-palette.jpg',
  },

  plywood: {
    path: '/plywood/',
    title:
      'Plywood Dealers in Kolkata | Best Plywood & Plywood Shop',
    description:
      'Looking for plywood dealers in Kolkata or a plywood shop near you? Explore plywood, MDF and HDF/HDMR boards for kitchens, wardrobes, furniture and interiors.',
    name: 'Plywood & Boards',
    image: '/images/plywood.jpg',
  },

  laminates: {
    path: '/laminates/',
    title:
      'Laminates in Kolkata | Laminate Shop & Dealers Near Me',
    description:
      'Looking for laminates near you in Kolkata? Explore decorative, PVC and acrylic laminates at Balaji Ply & Lam in Bhowanipore for furniture and interiors.',
    name: 'Laminates',
    image: '/images/laminates.jpg',
  },

  wpcLouvers: {
    path: '/wpc-louvers/',
    title:
      'WPC & Louvers in Kolkata | WPC Products Near Me',
    description:
      'Explore WPC products and decorative louvers in Kolkata for furniture, feature walls, partitions and contemporary interior projects.',
    name: 'WPC & Louvers',
    image: '/images/louvers.jpg',
  },

  doors: {
    path: '/doors/',
    title:
      'Flush Doors in Kolkata | Wooden & WPC Flush Door Shop',
    description:
      'Looking for flush doors in Kolkata? Explore wooden and WPC flush door options at Balaji Ply & Lam in Bhowanipore. Enquire for current availability.',
    name: 'Doors',
    image: '/images/decorative-panels.jpg',
  },

  interiorAccessories: {
    path: '/interior-accessories/',
    title:
      'Interior Accessories & Materials in Kolkata | Balaji Ply & Lam',
    description:
      'Find interior accessories and supporting materials in Kolkata, including PVC mouldings, beading, adhesives and masking tapes.',
    name: 'Interior Accessories',
    image: '/images/adhesives.jpg',
  },

  brands: {
    path: '/brands/',
    title:
      'Plywood & Laminate Brands in Kolkata | CenturyPly, Greenply & More',
    description:
      'Explore plywood and laminate brands in Kolkata including CenturyPly, Greenply, Greenlam, Merino, Royale Touche, Austin and Sylvan.',
    name: 'Brands',
    image: '/images/plywood.jpg',
  },

  centuryply: {
    path: '/brands/centuryply/',
    title:
      'CenturyPly Dealers in Kolkata | Century Ply Near Me',
    description:
      'Looking for CenturyPly near you in Kolkata? Explore available CenturyPly products at Balaji Ply & Lam in Bhowanipore. Enquire for current availability and pricing.',
    name: 'CenturyPly',
    image: '/images/plywood.jpg',
  },

  projects: {
    path: '/projects/',
    title:
      'Interior Projects & Material Applications | Balaji Ply & Lam',
    description:
      'Explore selected interior projects and see how plywood, laminates and other interior materials come together across residential and commercial spaces.',
    name: 'Projects',
    image: '/images/hero-interior.jpg',
  },

  guides: {
    path: '/guides/',
    title:
      'Plywood & Interior Material Guides | Kolkata Buying Guides',
    description:
      'Practical guides to plywood, laminates and interior materials, including plywood prices, comparisons, buying advice and Kolkata-focused information.',
    name: 'Guides',
    image: '/images/material-palette.jpg',
  },

  about: {
    path: '/about/',
    title:
      'About Balaji Ply & Lam | Plywood & Interior Materials in Kolkata',
    description:
      'Learn about Balaji Ply & Lam, a plywood and interior-materials store on Sarat Bose Road in Bhowanipore, Kolkata.',
    name: 'About',
    image: '/images/design-studio.jpg',
  },

  contact: {
    path: '/contact/',
    title:
      'Contact Balaji Ply & Lam | Plywood & Laminates in Kolkata',
    description:
      'Contact Balaji Ply & Lam in Bhowanipore, Kolkata for plywood, laminates, WPC, doors and interior materials. Call, WhatsApp or get directions.',
    name: 'Contact',
    image: '/images/hero-interior.jpg',
  },

  guidePlywoodPrice: {
    path: '/guides/plywood-price-in-kolkata/',
    title:
      'Plywood Price in Kolkata | Plywood Rates & Buying Guide',
    description:
      'Understand plywood prices in Kolkata and the factors that affect cost, including grade, thickness, brand, specification and application.',
    name: 'Plywood Price in Kolkata',
    image: '/images/plywood.jpg',
  },

  guideMrBwrBwp: {
    path: '/guides/mr-vs-bwr-vs-bwp-plywood/',
    title:
      'MR vs BWR vs BWP Plywood | Which Plywood Is Best?',
    description:
      'Compare MR, BWR and BWP plywood and understand which plywood type may be suitable for kitchens, wardrobes, furniture and other applications.',
    name: 'MR vs BWR vs BWP Plywood',
    image: '/images/plywood.jpg',
  },

  guideKitchen: {
    path: '/guides/best-plywood-for-kitchen/',
    title:
      'Best Plywood for Kitchen | How to Choose Plywood',
    description:
      'Learn what to consider when choosing plywood for kitchen cabinets and furniture, including moisture exposure, grade and application.',
    name: 'Best Plywood for Kitchen',
    image: '/images/plywood.jpg',
  },

  guideWardrobe: {
    path: '/guides/best-plywood-for-wardrobe/',
    title:
      'Best Plywood for Wardrobe | Which Plywood Should You Choose?',
    description:
      'Learn how to choose plywood for wardrobes based on construction, moisture exposure, thickness, finish and project requirements.',
    name: 'Best Plywood for Wardrobe',
    image: '/images/plywood.jpg',
  },

  guidePlywoodMdf: {
    path: '/guides/plywood-vs-mdf/',
    title:
      'Plywood vs MDF | Which Is Better for Furniture?',
    description:
      'Compare plywood and MDF for furniture and interior applications, including construction, finishing, strength and suitable uses.',
    name: 'Plywood vs MDF',
    image: '/images/plywood.jpg',
  },

  guidePlywoodWpc: {
    path: '/guides/plywood-vs-wpc/',
    title:
      'Plywood vs WPC | Which Material Is Better?',
    description:
      'Compare plywood and WPC for furniture and interior applications and understand where each material may be suitable.',
    name: 'Plywood vs WPC',
    image: '/images/louvers.jpg',
  },

  guideMdfHdmr: {
    path: '/guides/mdf-vs-hdmr/',
    title:
      'MDF vs HDMR | Which Board Is Better for Furniture?',
    description:
      'Compare MDF and HDMR boards for furniture and interior applications based on construction, finish and project requirements.',
    name: 'MDF vs HDMR',
    image: '/images/decorative-panels.jpg',
  },

  guideAcrylicPvc: {
    path: '/guides/acrylic-vs-pvc-laminates/',
    title:
      "Acrylic vs PVC Laminates | What's the Difference?",
    description:
      'Understand the differences between acrylic and PVC laminates, including appearance, finishes, applications and selection considerations.',
    name: 'Acrylic vs PVC Laminates',
    image: '/images/laminates.jpg',
  },

  guideCenturyGreenply: {
    path: '/guides/centuryply-vs-greenply/',
    title:
      'CenturyPly vs Greenply | Which Plywood Should You Choose?',
    description:
      'Compare CenturyPly and Greenply using practical factors such as plywood grade, specification, application, availability and project requirements.',
    name: 'CenturyPly vs Greenply',
    image: '/images/plywood.jpg',
  },

  guideWhereToBuy: {
    path: '/guides/where-to-buy-plywood-in-kolkata/',
    title:
      'Where to Buy Plywood in Kolkata | Plywood Shop Buying Guide',
    description:
      'Looking for a plywood shop in Kolkata? Learn what to check before choosing a plywood dealer, including specifications, brands, availability and pricing.',
    name: 'Where to Buy Plywood in Kolkata',
    image: '/images/plywood.jpg',
  },
} as const;

export type SEOPage = keyof typeof pageMetadata;

export function SEO({ page }: { page: SEOPage }) {
  useEffect(() => {
    const meta = pageMetadata[page];
    const origin = window.location.origin;
    const url = `${origin}${meta.path}`;

    document.title = meta.title;

    const setMeta = (
      key: string,
      content: string,
      property = false
    ) => {
      const attribute = property ? 'property' : 'name';

      let element =
        document.head.querySelector<HTMLMetaElement>(
          `meta[${attribute}="${key}"]`
        );

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    setMeta('description', meta.description);

    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('og:type', page.startsWith('guide') ? 'article' : 'website', true);
    setMeta('og:url', url, true);
    setMeta('og:site_name', business.name, true);
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:image', `${origin}${meta.image}`, true);
    setMeta(
      'og:image:alt',
      `${meta.name} - Balaji Ply & Lam`,
      true
    );

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', `${origin}${meta.image}`);

    let canonical =
      document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = url;

    const businessId = `${origin}/#business`;
    const websiteId = `${origin}/#website`;

    const graph: Record<string, unknown>[] = [
      {
        '@type': ['LocalBusiness', 'HomeGoodsStore'],
        '@id': businessId,
        name: business.name,
        url: `${origin}/`,
        description:
          'Plywood, laminates and interior materials for homeowners and design professionals in Bhowanipore, Kolkata.',
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
        '@id': websiteId,
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
          '@id': websiteId,
        },
        about: {
          '@id': businessId,
        },
        inLanguage: 'en-IN',
      },
    ];

    if (page !== 'home') {
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
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

    if (page === 'products') {
      graph.push({
        '@type': 'ItemList',
        '@id': `${url}#product-categories`,
        name: 'Interior material categories',
        itemListElement: productCategories.map((category, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: category.name,
          url: `${origin}${category.path}`,
        })),
      });
    }

    if (page === 'brands') {
      graph.push({
        '@type': 'ItemList',
        '@id': `${url}#brands`,
        name: 'Plywood and laminate brands',
        itemListElement: brands.map((brand, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: brand.name,
          url: `${origin}${brand.path}`,
        })),
      });
    }

    if (page === 'guides') {
      graph.push({
        '@type': 'ItemList',
        '@id': `${url}#guides`,
        name: 'Plywood and interior material guides',
        itemListElement: guides.map((guide, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: guide.title,
          url: `${origin}${guide.path}`,
        })),
      });
    }

    if (page.startsWith('guide')) {
      graph.push({
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: meta.name,
        description: meta.description,
        mainEntityOfPage: {
          '@id': `${url}#webpage`,
        },
        publisher: {
          '@id': businessId,
        },
        author: {
          '@id': businessId,
        },
        inLanguage: 'en-IN',
      });
    }

    let schema =
      document.getElementById(
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
