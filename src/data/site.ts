export const business = {
  name: 'Balaji Ply & Lam',
  phone: '+919339742083',
  phoneDisplay: '+91 93397 42083',
  whatsapp: '919339742083',
  email: 'balajiplyamit@yahoo.in',
  street: '63/1/1A, Sarat Bose Road',
  neighbourhood: 'Bhowanipore',
  city: 'Kolkata',
  state: 'West Bengal',
  postalCode: '700025',
};

export const messages = {
  general:
    'Hi, I would like to know more about Balaji Ply & Lam and the products you offer.',

  catalogue:
    'Hi, I would like to receive the latest catalogue from Balaji Ply & Lam. Please share the available products and options.',

  plywood:
    "Hi, I'm looking for plywood in Kolkata. Please share your current catalogue, available brands and pricing.",

  laminates:
    "Hi, I'm looking for laminates. Please share your current laminate catalogue and available options.",

  wpc:
    "Hi, I'm interested in WPC products. Please share the current catalogue, available options and pricing.",

  doors:
    "Hi, I'm looking for flush doors. Please share the available options, catalogue and pricing.",

  centuryply:
    "Hi, I'm looking for CenturyPly products in Kolkata. Please share the currently available options and pricing.",

  accessories:
    "Hi, I'm looking for interior accessories and supporting materials. Please share the available products and options.",

  professional:
    'Hi, I am an architect/interior designer and would like to discuss sourcing materials for a project.',

  project:
    'Hi, I would like to discuss materials for an interior project. I can share my requirements or reference images.',

  visit:
    'Hi, I would like to visit Balaji Ply & Lam. Please let me know your opening hours and help me plan my visit.',
};

export function whatsappUrl(message = messages.general) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

const mapQuery = `${business.name}, ${business.street}, Bhowanipore, Kolkata, West Bengal 700025`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;


/* -------------------------------------------------------------------------- */
/* Product categories                                                        */
/* -------------------------------------------------------------------------- */

export interface ProductCategory {
  id: string;
  name: string;
  navName: string;
  path: string;
  image: string;
  alt: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  applications: string[];
  cta: string;
  message: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'plywood',
    name: 'Plywood & Boards',
    navName: 'Plywood & Boards',
    path: '/plywood/',
    image: '/images/plywood.jpg',
    alt: 'Plywood sheets showing layered wood construction and natural woodgrain',
    eyebrow: 'FOUNDATION MATERIALS',
    shortDescription:
      'Plywood and engineered boards for furniture, cabinetry and interior construction.',
    description:
      'Explore plywood and board materials for furniture, wardrobes, kitchens, cabinetry and other interior requirements. Available options can vary by grade, thickness, brand and application.',
    highlights: [
      'MR / Commercial plywood',
      'BWR-grade plywood',
      'Marine / BWP plywood',
      'MDF and engineered boards',
      'Application-specific thicknesses',
    ],
    applications: [
      'Kitchens',
      'Wardrobes',
      'Furniture',
      'Cabinetry',
      'Commercial interiors',
    ],
    cta: 'Get Plywood & Board Catalogue',
    message: messages.plywood,
  },

  {
    id: 'laminates',
    name: 'Laminates',
    navName: 'Laminates',
    path: '/laminates/',
    image: '/images/laminates.jpg',
    alt: 'Decorative laminate samples in woodgrain, solid and warm neutral finishes',
    eyebrow: 'SURFACE FINISHES',
    shortDescription:
      'Decorative laminates in a range of colours, patterns, textures and finishes.',
    description:
      'Explore decorative surface finishes for wardrobes, kitchens, furniture, shelving and other interior surfaces. Options include different colours, woodgrains, textures and gloss or matte finishes.',
    highlights: [
      'Decorative laminates',
      'PVC laminates',
      'Acrylic laminates',
      'Woodgrain finishes',
      'Matte and glossy finishes',
      'Textured and decorative surfaces',
    ],
    applications: [
      'Wardrobes',
      'Kitchen cabinets',
      'Furniture',
      'Shelving',
      'Interior surfaces',
    ],
    cta: 'Get Laminate Catalogue',
    message: messages.laminates,
  },

  {
    id: 'wpc-louvers',
    name: 'WPC & Louvers',
    navName: 'WPC & Louvers',
    path: '/wpc-louvers/',
    image: '/images/louvers.jpg',
    alt: 'Decorative wood-finish louvers creating a vertical architectural feature',
    eyebrow: 'ARCHITECTURAL SURFACES',
    shortDescription:
      'WPC and decorative louvers for feature walls, furniture and contemporary interiors.',
    description:
      'WPC and louvers can add dimensional detail and architectural character to interiors. Explore available options for furniture, partitions, feature walls, ceilings and commercial interior applications.',
    highlights: [
      'WPC products',
      'Decorative louvers',
      'Linear profiles',
      'Wood-inspired finishes',
      'Dimensional surface detailing',
    ],
    applications: [
      'Feature walls',
      'TV unit backdrops',
      'Furniture',
      'Partitions',
      'Selected ceiling applications',
      'Commercial interiors',
    ],
    cta: 'Get WPC & Louver Catalogue',
    message: messages.wpc,
  },

  {
    id: 'doors',
    name: 'Doors',
    navName: 'Doors',
    path: '/doors/',
    image: '/images/decorative-panels.jpg',
    alt: 'Interior door and wood-finish material selection for residential interiors',
    eyebrow: 'DOOR SOLUTIONS',
    shortDescription:
      'Flush door options for residential, furniture and interior requirements.',
    description:
      'Explore flush door options for interior projects, including wooden and WPC door solutions where available. Product suitability depends on the application, specification and installation requirements.',
    highlights: [
      'Wooden flush doors',
      'WPC flush doors',
      'Different thickness options',
      'Application-specific selections',
    ],
    applications: [
      'Homes',
      'Bedrooms',
      'Offices',
      'Commercial interiors',
      'Interior partitions',
    ],
    cta: 'Get Door Catalogue',
    message: messages.doors,
  },

  {
    id: 'interior-accessories',
    name: 'Interior Accessories',
    navName: 'Interior Accessories',
    path: '/interior-accessories/',
    image: '/images/adhesives.jpg',
    alt: 'Interior installation materials including adhesive and masking tape beside plywood',
    eyebrow: 'SUPPORTING MATERIALS',
    shortDescription:
      'Supporting materials and finishing essentials for interior and furniture work.',
    description:
      'Explore supporting products used alongside plywood, laminates and other interior materials, including adhesives, PVC mouldings, beading and masking tapes.',
    highlights: [
      'PVC mouldings',
      'Beading',
      'Adhesives',
      'Masking tapes',
      'Installation essentials',
    ],
    applications: [
      'Furniture work',
      'Laminate installation',
      'Interior finishing',
      'Surface protection',
      'Project installation',
    ],
    cta: 'Ask About Interior Accessories',
    message: messages.accessories,
  },
];


/* -------------------------------------------------------------------------- */
/* Individual material information                                            */
/* -------------------------------------------------------------------------- */

export interface Material {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  alt: string;
  shortDescription: string;
  description: string;
  characteristics: string[];
  applications: string[];
  note?: string;
}

export const materials: Material[] = [
  {
    id: 'plywood',
    name: 'Plywood',
    categoryId: 'plywood',
    image: '/images/plywood.jpg',
    alt: 'Plywood sheets showing layered wood construction',
    shortDescription:
      'A dependable foundation for furniture, cabinetry and interior construction.',
    description:
      'Plywood is made from layers of wood veneer bonded together. Different grades, thicknesses and specifications are suited to different furniture and interior applications.',
    characteristics: [
      'MR / Commercial plywood',
      'BWR-grade plywood',
      'Marine / BWP plywood',
      'Application-specific thicknesses',
    ],
    applications: [
      'Furniture',
      'Cabinets',
      'Wardrobes',
      'Kitchens',
      'Interior construction',
    ],
    note:
      'MR, BWR and marine/BWP grades have different moisture-resistance characteristics. Confirm the specification, certification and current availability for your application.',
  },

  {
    id: 'mdf',
    name: 'MDF',
    categoryId: 'plywood',
    image: '/images/decorative-panels.jpg',
    alt: 'Smooth engineered board surface used for furniture and interior applications',
    shortDescription:
      'A smooth engineered board used across suitable furniture and interior applications.',
    description:
      'MDF is an engineered wood-fibre board with a relatively smooth, uniform surface. Its suitability depends on the application, environment and required finish.',
    characteristics: [
      'Smooth surface',
      'Uniform engineered board',
      'Suitable for selected furniture applications',
      'Useful for painted and finished surfaces',
    ],
    applications: [
      'Furniture',
      'Cabinet components',
      'Decorative work',
      'Interior detailing',
    ],
  },

  {
    id: 'hdmr',
    name: 'HDF / HDMR',
    categoryId: 'plywood',
    image: '/images/decorative-panels.jpg',
    alt: 'Decorative engineered board panels for interior applications',
    shortDescription:
      'Dense engineered boards for selected furniture and interior applications.',
    description:
      'HDF and HDMR are engineered board materials used in suitable furniture and interior applications. The right specification depends on the environment, construction and finish required.',
    characteristics: [
      'Dense engineered board',
      'Smooth surface',
      'Furniture applications',
      'Interior detailing',
    ],
    applications: [
      'Furniture',
      'Decorative panels',
      'Interior detailing',
      'Selected cabinetry applications',
    ],
  },

  {
    id: 'decorative-laminates',
    name: 'Decorative Laminates',
    categoryId: 'laminates',
    image: '/images/laminates.jpg',
    alt: 'Decorative laminate samples with woodgrain and neutral finishes',
    shortDescription:
      'Surface finishes that add colour, grain, texture and character to interiors.',
    description:
      'Decorative laminates are surface sheets used over a suitable base to create a finished interior surface.',
    characteristics: [
      'Woodgrain finishes',
      'Solid colours',
      'Decorative patterns',
      'Matte and glossy surfaces',
      'Textured finishes',
    ],
    applications: [
      'Wardrobes',
      'Kitchen cabinets',
      'Furniture',
      'Shelving',
      'Interior surfaces',
    ],
  },

  {
    id: 'pvc-laminates',
    name: 'PVC Laminates',
    categoryId: 'laminates',
    image: '/images/laminates.jpg',
    alt: 'Decorative laminate surfaces for furniture and interior applications',
    shortDescription:
      'Decorative PVC-based surface options for selected interior applications.',
    description:
      'PVC laminates provide decorative surface finishes for suitable furniture and interior applications. Availability and specifications vary by collection.',
    characteristics: [
      'Decorative surfaces',
      'Multiple colours and patterns',
      'Contemporary finishes',
      'Application-specific options',
    ],
    applications: [
      'Furniture',
      'Wardrobes',
      'Cabinet surfaces',
      'Interior detailing',
    ],
  },

  {
    id: 'acrylic-laminates',
    name: 'Acrylic Laminates',
    categoryId: 'laminates',
    image: '/images/laminates.jpg',
    alt: 'Glossy decorative laminate surface samples',
    shortDescription:
      'High-visual-impact surface finishes for contemporary interiors.',
    description:
      'Acrylic laminate options can create a clean, contemporary appearance on suitable furniture and interior surfaces.',
    characteristics: [
      'High-gloss visual finish',
      'Contemporary appearance',
      'Solid and decorative options',
      'Suitable for selected furniture applications',
    ],
    applications: [
      'Kitchen cabinets',
      'Wardrobes',
      'Furniture',
      'Contemporary interiors',
    ],
  },

  {
    id: 'wpc',
    name: 'WPC',
    categoryId: 'wpc-louvers',
    image: '/images/louvers.jpg',
    alt: 'Wood-inspired architectural surface material for interior applications',
    shortDescription:
      'Wood-polymer composite options for selected interior applications.',
    description:
      'WPC products are used in selected interior applications where a durable, design-oriented material is required. Product specifications and suitability vary by application.',
    characteristics: [
      'Wood-polymer composite material',
      'Decorative options',
      'Contemporary finishes',
      'Application-specific profiles',
    ],
    applications: [
      'Furniture',
      'Partitions',
      'Feature walls',
      'Interior detailing',
    ],
  },

  {
    id: 'louvers',
    name: 'Decorative Louvers',
    categoryId: 'wpc-louvers',
    image: '/images/louvers.jpg',
    alt: 'Warm walnut decorative louvers with vertical linear profiles',
    shortDescription:
      'Linear architectural profiles that add depth and rhythm to interiors.',
    description:
      'Decorative louvers create repeated linear detailing and can be used to introduce depth and visual rhythm to selected interior surfaces.',
    characteristics: [
      'Linear profiles',
      'Wood-inspired finishes',
      'Dimensional visual texture',
      'Contemporary architectural detailing',
    ],
    applications: [
      'Feature walls',
      'TV unit backdrops',
      'Partitions',
      'Selected ceiling applications',
      'Commercial interiors',
    ],
    note:
      'Confirm the panel material, installation method and suitability for the intended wall or ceiling before selecting a louver system.',
  },

  {
    id: 'flush-doors',
    name: 'Flush Doors',
    categoryId: 'doors',
    image: '/images/decorative-panels.jpg',
    alt: 'Interior material selection representing flush door applications',
    shortDescription:
      'Practical door solutions for residential and commercial interior projects.',
    description:
      'Flush doors provide a clean, simple door surface for a range of interior applications. Available constructions and specifications should be confirmed according to the project requirement.',
    characteristics: [
      'Wooden flush door options',
      'WPC flush door options',
      'Different thicknesses',
      'Application-specific specifications',
    ],
    applications: [
      'Bedrooms',
      'Bathrooms where suitable',
      'Offices',
      'Residential interiors',
      'Commercial interiors',
    ],
  },

  {
    id: 'pvc-mouldings',
    name: 'PVC Mouldings & Beading',
    categoryId: 'interior-accessories',
    image: '/images/adhesives.jpg',
    alt: 'Interior finishing and installation accessories',
    shortDescription:
      'Finishing components for cleaner edges and considered interior detailing.',
    description:
      'PVC mouldings and beading can support furniture and interior finishing work by providing edge treatment and decorative detailing.',
    characteristics: [
      'Finishing profiles',
      'Edge detailing',
      'Decorative options',
      'Application-specific profiles',
    ],
    applications: [
      'Furniture',
      'Cabinetry',
      'Interior finishing',
      'Decorative detailing',
    ],
  },

  {
    id: 'adhesives',
    name: 'Adhesives',
    categoryId: 'interior-accessories',
    image: '/images/adhesives.jpg',
    alt: 'Interior adhesive and installation materials',
    shortDescription:
      'Supporting bonding products for furniture and interior installation work.',
    description:
      'Adhesives are used for suitable bonding and installation applications across furniture and interior work. Product compatibility should always be confirmed before use.',
    characteristics: [
      'Furniture bonding',
      'Laminate installation support',
      'Material-specific options',
      'Installation essentials',
    ],
    applications: [
      'Furniture assembly',
      'Laminate installation',
      'Interior work',
      'Project installation',
    ],
    note:
      "Always follow the manufacturer's instructions for surface preparation, compatibility and curing time.",
  },

  {
    id: 'masking-tapes',
    name: 'Masking Tapes',
    categoryId: 'interior-accessories',
    image: '/images/adhesives.jpg',
    alt: 'Paper masking tape used for interior finishing work',
    shortDescription:
      'Practical surface-protection and finishing support for interior work.',
    description:
      'Masking tapes can be used for surface protection and controlled finishing during furniture and interior installation work.',
    characteristics: [
      'Surface protection',
      'Finishing support',
      'Installation assistance',
      'Everyday project essential',
    ],
    applications: [
      'Furniture work',
      'Painting and finishing',
      'Installation',
      'Surface protection',
    ],
  },
];


/* -------------------------------------------------------------------------- */
/* Brands                                                                     */
/* -------------------------------------------------------------------------- */

export interface Brand {
  id: string;
  name: string;
  path: string;
  image?: string;
  description: string;
  dedicatedPage?: boolean;
}

export const brands: Brand[] = [
  {
    id: 'centuryply',
    name: 'CenturyPly',
    path: '/brands/centuryply/',
    image: '/images/plywood.jpg',
    description:
      'Explore CenturyPly products available through Balaji Ply & Lam in Kolkata. Contact us to confirm current products, specifications and availability.',
    dedicatedPage: true,
  },

  {
    id: 'greenply',
    name: 'Greenply',
    path: '/brands/',
    image: '/images/plywood.jpg',
    description:
      'Explore Greenply options available through our current product range. Contact us to confirm availability.',
  },

  {
    id: 'greenlam',
    name: 'Greenlam',
    path: '/brands/',
    image: '/images/laminates.jpg',
    description:
      'Explore Greenlam laminate options available through our current product range. Contact us to confirm availability.',
  },

  {
    id: 'merino',
    name: 'Merino',
    path: '/brands/',
    image: '/images/laminates.jpg',
    description:
      'Explore Merino laminate and interior surface options available through our current product range.',
  },

  {
    id: 'royale-touche',
    name: 'Royale Touche',
    path: '/brands/',
    image: '/images/laminates.jpg',
    description:
      'Explore Royale Touche surface options available through our current product range.',
  },

  {
    id: 'austin',
    name: 'Austin',
    path: '/brands/',
    image: '/images/plywood.jpg',
    description:
      'Explore Austin options available through our current product range. Contact us to confirm current availability.',
  },

  {
    id: 'sylvan',
    name: 'Sylvan',
    path: '/brands/',
    image: '/images/plywood.jpg',
    description:
      'Explore Sylvan options available through our current product range. Contact us to confirm current availability.',
  },
];


/* -------------------------------------------------------------------------- */
/* Projects                                                                   */
/* -------------------------------------------------------------------------- */

export interface Project {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  materials?: string[];
}

export const projects: Project[] = [
  {
    id: 'lunamo',
    name: 'Lunamo',
    image: '/images/lunamo.jpg',
    alt: 'Lunamo interior project featuring considered material and surface detailing',
    description:
      'A completed interior project showcasing the role of carefully selected surfaces and materials in creating a cohesive space.',
  },

  {
    id: 'cocoa-bakery',
    name: 'Cocoa Bakery',
    image: '/images/cocoa-bakery.jpg',
    alt: 'Cocoa Bakery interior project with warm material finishes',
    description:
      'A commercial interior project where material selection contributes to the overall warmth and visual identity of the space.',
  },

  {
    id: 'mintelaa',
    name: 'Mintelaa',
    image: '/images/mintelaa.jpg',
    alt: 'Mintelaa interior project featuring contemporary material finishes',
    description:
      'An interior project demonstrating how coordinated surfaces and architectural details can bring a distinctive material palette together.',
  },
];


/* -------------------------------------------------------------------------- */
/* Guides                                                                     */
/* -------------------------------------------------------------------------- */

export interface Guide {
  id: string;
  title: string;
  path: string;
  category: 'Plywood' | 'Comparisons' | 'Kolkata Buying Guides';
  description: string;
}

export const guides: Guide[] = [
  {
    id: 'plywood-price-kolkata',
    title: 'Plywood Price in Kolkata: What Determines the Cost?',
    path: '/guides/plywood-price-in-kolkata/',
    category: 'Plywood',
    description:
      'Understand the factors that influence plywood prices in Kolkata, including grade, thickness, brand and application.',
  },

  {
    id: 'mr-vs-bwr-vs-bwp',
    title: 'MR vs BWR vs BWP Plywood: Which One Should You Choose?',
    path: '/guides/mr-vs-bwr-vs-bwp-plywood/',
    category: 'Plywood',
    description:
      'A practical comparison of MR, BWR and BWP plywood and where each type may be suitable.',
  },

  {
    id: 'best-plywood-kitchen',
    title: 'Best Plywood for Kitchen: How to Choose',
    path: '/guides/best-plywood-for-kitchen/',
    category: 'Plywood',
    description:
      'What to consider when choosing plywood for kitchen cabinets and other kitchen furniture.',
  },

  {
    id: 'best-plywood-wardrobe',
    title: 'Best Plywood for Wardrobe: What Should You Choose?',
    path: '/guides/best-plywood-for-wardrobe/',
    category: 'Plywood',
    description:
      'A practical guide to choosing plywood for wardrobes based on construction, moisture exposure and finish.',
  },

  {
    id: 'plywood-vs-mdf',
    title: 'Plywood vs MDF: Which Is Better for Furniture?',
    path: '/guides/plywood-vs-mdf/',
    category: 'Comparisons',
    description:
      'Compare plywood and MDF based on construction, applications, finishing and project requirements.',
  },

  {
    id: 'plywood-vs-wpc',
    title: 'Plywood vs WPC: Which Is Better?',
    path: '/guides/plywood-vs-wpc/',
    category: 'Comparisons',
    description:
      'Understand the key differences between plywood and WPC and when each may be appropriate.',
  },

  {
    id: 'mdf-vs-hdmr',
    title: 'MDF vs HDMR: Which Board Is Better for Furniture?',
    path: '/guides/mdf-vs-hdmr/',
    category: 'Comparisons',
    description:
      'Compare MDF and HDMR boards for furniture and interior applications.',
  },

  {
    id: 'acrylic-vs-pvc-laminates',
    title: "Acrylic vs PVC Laminates: What's the Difference?",
    path: '/guides/acrylic-vs-pvc-laminates/',
    category: 'Comparisons',
    description:
      'Understand the visual, functional and application differences between acrylic and PVC laminate options.',
  },

  {
    id: 'centuryply-vs-greenply',
    title: 'CenturyPly vs Greenply: Which Plywood Should You Choose?',
    path: '/guides/centuryply-vs-greenply/',
    category: 'Comparisons',
    description:
      'A practical comparison framework for evaluating CenturyPly and Greenply based on your project requirements.',
  },

  {
    id: 'where-to-buy-plywood-kolkata',
    title: 'Where to Buy Plywood in Kolkata: What Should You Check Before Buying?',
    path: '/guides/where-to-buy-plywood-in-kolkata/',
    category: 'Kolkata Buying Guides',
    description:
      'What to check when choosing a plywood shop or dealer in Kolkata, from specifications and brands to availability.',
  },
];


/* -------------------------------------------------------------------------- */
/* FAQs                                                                       */
/* -------------------------------------------------------------------------- */

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Where is Balaji Ply & Lam located in Kolkata?',
    answer:
      'Balaji Ply & Lam is located at 63/1/1A, Sarat Bose Road, Bhowanipore, Kolkata, West Bengal 700025.',
  },

  {
    question: 'What products does Balaji Ply & Lam offer?',
    answer:
      'Balaji Ply & Lam offers plywood and boards, laminates, WPC and louvers, doors, and interior accessories and supporting materials. Available brands and products can vary, so contact us for the current catalogue.',
  },

  {
    question: 'Can I buy plywood in Kolkata from Balaji Ply & Lam?',
    answer:
      'Yes. You can enquire about plywood and board options at Balaji Ply & Lam in Bhowanipore, Kolkata. Available grades, thicknesses, brands and specifications depend on current stock and your project requirements.',
  },

  {
    question: 'What types of plywood can I enquire about?',
    answer:
      'You can enquire about MR or commercial plywood, BWR-grade plywood and marine or BWP plywood options. The appropriate grade depends on the intended application, moisture exposure, construction requirements and specification.',
  },

  {
    question: 'Do you offer laminates in Kolkata?',
    answer:
      'Yes. Balaji Ply & Lam offers laminate options for furniture and interior surfaces, including decorative, PVC and acrylic laminate categories. Contact us for the current catalogue, finishes and availability.',
  },

  {
    question: 'Do you offer WPC and louvers?',
    answer:
      'Yes. You can enquire about WPC products and decorative louvers for suitable furniture, feature-wall, partition and interior applications. Contact us to see currently available options and finishes.',
  },

  {
    question: 'Do you work with architects and interior designers?',
    answer:
      'Yes. Architects, interior designers, contractors and other professionals can contact Balaji Ply & Lam to discuss plywood, laminates and other interior-material requirements for residential and commercial projects.',
  },

  {
    question: 'Can I get the current product catalogue on WhatsApp?',
    answer:
      'Yes. You can request the latest catalogue and current product availability through WhatsApp. Availability can vary by product, brand and stock.',
  },

  {
    question: 'How can I check the current plywood price in Kolkata?',
    answer:
      'Plywood prices vary according to grade, thickness, brand, specification and current availability. Contact Balaji Ply & Lam with your required size, grade or application to enquire about current options and pricing.',
  },

  {
    question: 'Should I visit the store before choosing materials?',
    answer:
      'Visiting the store can be useful when you want to compare physical samples, finishes and available options. You can also contact Balaji Ply & Lam in advance with your requirements or reference images.',
  },
];


/* -------------------------------------------------------------------------- */
/* Reviews                                                                    */
/* -------------------------------------------------------------------------- */

export interface VerifiedReview {
  author: string;
  text: string;
  sourceUrl: string;
}

// Publish only genuine, permission-cleared excerpts with their original source.
export const verifiedReviews: VerifiedReview[] = [];
