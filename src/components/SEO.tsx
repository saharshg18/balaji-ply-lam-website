import { Helmet } from 'react-helmet-async';
import { business, faqs, googleMapsUrl, materials } from '../data/site';

const siteUrl = 'https://www.balajiplyandlam.in';

const pageMetadata = {
  home: {
    path: '/',
    title: 'Best Plywood Shop in Kolkata | Balaji Ply & Lam',
    description:
      'Balaji Ply & Lam is a trusted plywood shop in Kolkata offering quality plywood, laminates, louvers and interior materials from our Bhowanipore showroom.',
    name: 'Home',
    image: '/images/hero-interior.jpg',
  },
  products: {
    path: '/products',
    title: 'Plywood & Laminates in Kolkata | CenturyPly, Greenply & More',
    description:
      'Explore plywood, laminates and interior materials at Balaji Ply & Lam, a leading plywood shop in Kolkata. Shop CenturyPly, Greenply and other trusted brands in Bhowanipore.',
    name: 'Products',
    image: '/images/material-palette.jpg',
  },
  about: {
    path: '/about-us',
    title: 'About Balaji Ply & Lam | Plywood Shop in Kolkata',
    description:
      'Learn about Balaji Ply & Lam, a trusted plywood and laminate shop in Bhowanipore, Kolkata, offering quality plywood, laminates and interior materials for homes and projects.',
    name: 'About Us',
    image: '/images/design-studio.jpg',
  },
};

export function SEO({ page }: { page: keyof typeof pageMetadata }) {
  const meta = pageMetadata[page];
  const url = `${siteUrl}${meta.path}`;
  const businessId = `${siteUrl}/#business`;

  const graph: Record<string, unknown>[] = [
    {
      '@type': ['LocalBusiness', 'HomeGoodsStore'],
      '@id': businessId,
      name: business.name,
      url: `${siteUrl}/`,
      description:
        'Plywood, laminates and decorative interior materials for homeowners and design professionals in Bhowanipore, Kolkata.',
      telephone: business.phone,
      email: business.email,
      logo: `${siteUrl}/favicon.svg`,
      image: `${siteUrl}/images/hero-interior.jpg`,
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
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
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
        '@id': `${siteUrl}/#website`,
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
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteUrl}/`,
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
      '@id': `${siteUrl}/#faqs`,
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
      name: 'Interior material categories',
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
        name: `${material.name} sourcing in Kolkata`,
        serviceType: `${material.name} supply and material selection`,
        description: material.description,
        url: `${url}#${material.id}`,
        image: `${siteUrl}${material.image}`,
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

  return (
    <Helmet>
      <title>{meta.title}</title>

      <meta name="description" content={meta.description} />

      <link rel="canonical" href={url} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${siteUrl}${meta.image}`} />
      <meta
        property="og:image:alt"
        content="Warm, considered interior materials from the Balaji Ply & Lam visual collection"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${siteUrl}${meta.image}`} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        })}
      </script>
    </Helmet>
  );
}
