# Balaji Ply & Lam

A three-page React, Vite and Tailwind CSS website for a premium interior materials destination in Bhowanipore, Kolkata.

## Pages

- `/`: material gallery, interactive project inspiration, professional enquiries, Google reviews link, and FAQs.
- `/products`: seven material categories with a sticky index and contextual WhatsApp enquiries.
- `/about-us`: story, approach, values, audiences, and store details with a Google Maps embed.

## Content

- Business details, enquiry messages, categories and FAQ answers live in `src/data/site.ts`.
- Adding a material to `materials` automatically adds its gallery entry, product section, navigation link and service schema.
- Only publish authentic review excerpts in `verifiedReviews`, including the original Google source URL. No rating, review count or testimonial has been invented.
- Generated material and interior images are illustrative, not photographs of the physical store or a guarantee of stocked finishes.
- Current opening hours, exact brands, prices and stock are intentionally not asserted. Customers can confirm them by phone or WhatsApp.

## Technical Notes

- Fonts and the core imagery are hosted with the site. Two secondary project-inspiration photographs are served by Pexels.
- Calls use `tel:` links. WhatsApp links use the supplied number and URL-encoded, category-specific messages. Google Maps directions use the supplied business name and full address.
- Per-route metadata, canonical URLs, Open Graph tags, LocalBusiness, Service, FAQ and breadcrumb structured data are managed in `src/components/SEO.tsx`.
- Canonical and structured-data origins follow the deployed hostname rather than an invented domain.
- The site is a client-rendered application. Search engines that render JavaScript can read route-specific metadata; deployment-side prerendering is recommended for social crawlers that do not run JavaScript.
- Netlify and Vercel fallback rules are included for the two inner-page URLs. Other hosts need equivalent history fallback rules.
- Before public launch, confirm the Maps listing resolves to the correct store, connect any verified Google review excerpts, and submit the final domain through Google Search Console.

## Development

Install dependencies with `npm install`, run the development server with `npm run dev`, and create the production build with `npm run build`.