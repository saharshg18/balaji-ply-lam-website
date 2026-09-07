import { useEffect } from 'react';
import { business, faqs, googleMapsUrl, materials } from '../data/site';

const pageMetadata = {
  home: {
    path: '/',
    title: 'Balaji Ply & Lam | Plywood, Laminates & Interior Materials in Kolkata',
    description: 'Explore plywood, laminates, louvers and decorative interior materials at Balaji Ply & Lam in Bhowanipore, Kolkata. Call, WhatsApp or visit us on Sarat Bose Road.',
    name: 'Home',
    image: '/images/hero-interior.jpg',
  },
  products: {
    path: '/products',
    title: 'Plywood, Laminates & Decorative Panels in Kolkata | Balaji Ply & Lam',
    description: 'Discover plywood, laminates, louvers, charcoal sheets, HDF panels and finishing essentials in Bhowanipore, Kolkata. Enquire on WhatsApp for suitable options.',
    name: 'Products',
    image: '/images/material-palette.jpg',
  },
  about: {
    path: '/about-us',
    title: 'About & Visit Balaji Ply & Lam | Bhowanipore, Kolkata',
    description: 'Meet your interior material sourcing destination in Bhowanipore. Visit Balaji Ply & Lam at 63/1/1A Sarat Bose Road, Kolkata 700025. Call +91 9339742083.',
    name: 'About Us',
    image: '/images/design-studio.jpg',
  },
};

export function SEO({ page }: { page: keyof typeof pageMetadata }) {
  useEffect(() => {
    const meta = pageMetadata[page];
    const origin = window.location.origin;
    const url = `${origin}${meta.path}`;
    document.title = meta.title;

    // Reuse the initial HTML tags instead of accumulating metadata on client-side navigation.
    const setMeta = (key: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
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
    setMeta('og:type', 'website', true);
    setMeta('og:url', url, true);
    setMeta('og:site_name', business.name, true);
    setMeta('og:locale', 'en_IN', true);
    setMeta('og:image', `${origin}${meta.image}`, true);
    setMeta('og:image:alt', 'Warm, considered interior materials from the Balaji Ply & Lam visual collection', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);
    setMeta('twitter:image', `${origin}${meta.image}`);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const businessId = `${origin}/#business`;
    const graph: Record<string, unknown>[] = [
      {
        '@type': ['LocalBusiness', 'HomeGoodsStore'],
        '@id': businessId,
        name: business.name,
        url: `${origin}/`,
        description: 'Plywood, laminates and decorative interior materials for homeowners and design professionals in Bhowanipore, Kolkata.',
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
        areaServed: { '@type': 'City', name: 'Kolkata' },
        hasMap: googleMapsUrl,
      },
      { '@type': 'WebSite', '@id': `${origin}/#website`, url: `${origin}/`, name: business.name, publisher: { '@id': businessId }, inLanguage: 'en-IN' },
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: meta.title, description: meta.description, isPartOf: { '@id': `${origin}/#website` }, about: { '@id': businessId }, inLanguage: 'en-IN' },
    ];

    if (page !== 'home') {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: meta.name, item: url },
        ],
      });
    }
    if (page === 'home') {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${origin}/#faqs`,
        mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      });
    }
    if (page === 'products') {
      graph.push({
        '@type': 'ItemList',
        name: 'Interior material categories',
        itemListElement: materials.map((material, index) => ({ '@type': 'ListItem', position: index + 1, name: material.name, url: `${url}#${material.id}` })),
      });
      materials.forEach((material) => graph.push({
        '@type': 'Service',
        '@id': `${url}#${material.id}-service`,
        name: `${material.name} sourcing in Kolkata`,
        serviceType: `${material.name} supply and material selection`,
        description: material.description,
        url: `${url}#${material.id}`,
        image: `${origin}${material.image}`,
        provider: { '@id': businessId },
        areaServed: { '@type': 'City', name: 'Kolkata' },
      }));
    }

    let schema = document.getElementById('site-structured-data') as HTMLScriptElement | null;
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'site-structured-data';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
  }, [page]);

  return null;
}