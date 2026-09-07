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
  general: 'Hi, I would like to know more about Balaji Ply & Lam and the products you offer.',
  professional: 'Hi, I am an architect/interior designer and would like to discuss sourcing materials for a project.',
  visit: 'Hi, I would like to visit Balaji Ply & Lam. Please let me know your opening hours and help me plan my visit.',
};

export function whatsappUrl(message = messages.general) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

const mapQuery = `${business.name}, ${business.street}, Bhowanipore, Kolkata, West Bengal 700025`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;

export interface Material {
  id: string;
  name: string;
  navName: string;
  image: string;
  alt: string;
  shortDescription: string;
  eyebrow: string;
  description: string;
  characteristics: string[];
  applications: string;
  note?: string;
  cta: string;
  message: string;
}

// One collection powers the gallery, product navigation, detail sections, and service schema.
export const materials: Material[] = [
  {
    id: 'plywood',
    name: 'Plywood',
    navName: 'Plywood',
    image: '/images/plywood.jpg',
    alt: 'Birch plywood samples showing smooth woodgrain surfaces and precise layered edges',
    shortDescription: 'A dependable foundation for furniture, cabinetry and beautifully built spaces.',
    eyebrow: 'A strong beginning',
    description: 'Made from layers of wood veneer bonded together, plywood brings strength and stability to furniture and interior construction. Explore a suitable grade and thickness for your project, from everyday wardrobes to cabinetry in moisture-prone areas.',
    characteristics: ['Commercial / MR plywood', 'BWR-grade plywood', 'Marine / BWP plywood', 'Application-specific thicknesses'],
    applications: 'Furniture, cabinets, wardrobes, kitchens and interior construction.',
    note: 'MR, BWR and marine/BWP grades offer different levels of moisture resistance. Ask us to confirm the specification, certification and current availability for your application.',
    cta: 'Ask Us About Plywood',
    message: 'Hi, I am looking for plywood for my project. Please help me with the available options.',
  },
  {
    id: 'laminates',
    name: 'Laminates',
    navName: 'Laminates',
    image: '/images/laminates.jpg',
    alt: 'Decorative laminate samples in walnut woodgrain, olive, taupe and warm neutral finishes',
    shortDescription: 'Colours, grains and tactile finishes that give your interiors their character.',
    eyebrow: 'A finish that feels like you',
    description: 'Decorative laminates are surface sheets applied over a suitable base to create a finished look. From the warmth of woodgrain to understated solid colours, explore finishes that bring furniture and interior surfaces into harmony.',
    characteristics: ['Natural-looking woodgrains', 'Solid colours and decorative designs', 'Matte and glossy finishes', 'Tactile surface textures'],
    applications: 'Wardrobes, kitchen cabinets, furniture, shelving and interior surfaces.',
    cta: 'Explore Laminates on WhatsApp',
    message: 'Hi, I am interested in your laminate collection. Please share more details.',
  },
  {
    id: 'louvers',
    name: 'Louvers',
    navName: 'Louvers',
    image: '/images/louvers.jpg',
    alt: 'Warm walnut decorative louvers with vertical fluting and soft architectural lighting',
    shortDescription: 'Architectural lines that add warmth, rhythm and a little quiet drama.',
    eyebrow: 'Depth, in every detail',
    description: 'Decorative louvers use repeated linear profiles to create depth and rhythm. Their clean, contemporary look can turn a simple wall into an architectural feature, with finishes that complement both warm and minimal interiors.',
    characteristics: ['Distinctive linear profiles', 'Wood-inspired and modern finishes', 'Dimensional visual texture', 'Options for coordinated interiors'],
    applications: 'Feature walls, TV unit backdrops, selected ceiling applications and commercial interiors.',
    note: 'Confirm the panel material, installation method and suitability for your wall or ceiling before choosing.',
    cta: 'Ask About Louvers',
    message: 'Hi, I am interested in decorative louvers for my project. Please share the available finishes and options.',
  },
  {
    id: 'charcoal-sheets',
    name: 'Charcoal Sheets',
    navName: 'Charcoal Sheets',
    image: '/images/charcoal-sheets.jpg',
    alt: 'Rich charcoal decorative wall surface with a tactile bronze-toned texture',
    shortDescription: 'Expressive textures and distinctive surfaces for statement-making walls.',
    eyebrow: 'Make a considered statement',
    description: 'Charcoal sheets are decorative composite surface panels chosen for their textured and dimensional finishes. They offer an expressive way to introduce contrast, visual depth and a contemporary focal point into an interior.',
    characteristics: ['Textured decorative surfaces', 'Dimensional and patterned finishes', 'Contemporary visual character', 'A variety of decorative effects'],
    applications: 'Accent walls, TV unit surrounds, furniture highlights and decorative commercial interiors.',
    note: 'These are decorative finishes, not structural boards. Ask about available designs and recommended installation.',
    cta: 'Ask About Charcoal Sheets',
    message: 'Hi, I would like to explore charcoal sheets for a decorative wall. Please help me with designs and availability.',
  },
  {
    id: 'decorative-panels',
    name: 'HDF & Decorative Panels',
    navName: 'HDF & Panels',
    image: '/images/decorative-panels.jpg',
    alt: 'Warm taupe decorative wall panels with precise geometric lines above a walnut sideboard',
    shortDescription: 'Thoughtful surfaces that bring shape, structure and personality to a room.',
    eyebrow: 'Give your walls a new dimension',
    description: 'HDF is a dense engineered wood-fibre board used in suitable furniture and interior applications. Alongside decorative panels, it opens up possibilities for well-defined surfaces, feature walls and considered detailing.',
    characteristics: ['Dense, smooth HDF surfaces', 'Decorative panel designs', 'Clean architectural detailing', 'Options for different interior styles'],
    applications: 'Decorative walls, feature panels, suitable partition finishes and furniture detailing.',
    note: 'Standard HDF is generally intended for dry interiors. Confirm moisture suitability and the exact panel specification with us.',
    cta: 'Explore Decorative Panels',
    message: 'Hi, I am looking for HDF or decorative panels. Please help me explore suitable options for my project.',
  },
  {
    id: 'adhesives-masking-tapes',
    name: 'Adhesives & Masking Tapes',
    navName: 'Adhesives & Tapes',
    image: '/images/adhesives.jpg',
    alt: 'Wood adhesive, paper masking tapes and a brush arranged beside a plywood sample',
    shortDescription: 'The everyday essentials behind a careful installation and a clean finish.',
    eyebrow: 'The details that hold it together',
    description: 'The right supporting materials matter just as much as the visible finish. Explore adhesives and masking tapes for bonding, surface protection and finishing, with options selected around the materials and installation you are working with.',
    characteristics: ['Material-appropriate adhesives', 'Masking and surface protection', 'Installation support essentials', 'Products for careful finishing'],
    applications: 'Furniture assembly, laminate installation, masking, finishing and interior project work.',
    note: 'Always follow the product manufacturer\'s guidance on surface preparation, compatibility and curing time.',
    cta: 'Ask Us About These Products',
    message: 'Hi, I need adhesives or masking tapes for my interior project. Please advise on suitable products and availability.',
  },
  {
    id: 'other-materials',
    name: 'Other Interior Materials',
    navName: 'More Materials',
    image: '/images/material-palette.jpg',
    alt: 'A coordinated palette of wood, laminate, fluted surfaces and warm neutral material samples',
    shortDescription: 'More possibilities to complete your palette and bring your project together.',
    eyebrow: 'Keep the possibilities open',
    description: 'A considered interior is made of many small decisions. If you are looking for an additional surface, finishing material or something specific in a reference image, talk to us. We can help you explore what is currently available and suitable.',
    characteristics: ['Additional decorative surfaces', 'Coordinated material options', 'Project-specific requirements', 'Guidance on current availability'],
    applications: 'Home renovations, custom furniture, decorative interiors and professional material sourcing.',
    cta: 'Discuss Your Material Requirements',
    message: 'Hi, I am looking for interior materials for my project. Can I share my requirements or a reference image with you?',
  },
];

export const faqs = [
  {
    question: 'What types of plywood can I enquire about?',
    answer: 'You can ask us about commercial and MR plywood, BWR-grade plywood, and marine/BWP options. The right choice depends on how and where the plywood will be used. Call or WhatsApp us to confirm current grades, brands, thicknesses and availability.',
  },
  {
    question: 'How do I choose plywood for furniture?',
    answer: 'Start with the furniture\'s purpose, expected load, exposure to moisture and the finish you want. Wardrobes in dry rooms and kitchen cabinets may need different specifications. Bring your measurements or speak with your carpenter, and we can help you explore suitable grades and thicknesses.',
  },
  {
    question: 'Do you have waterproof plywood?',
    answer: 'Ask us about BWR and marine/BWP plywood options for applications where moisture resistance matters. BWR means boiling water resistant; it is not the same specification as marine/BWP plywood. Please confirm the exact grade, certification and current availability for your project with our team.',
  },
  {
    question: 'What types of laminates do you offer?',
    answer: 'Explore decorative laminates in woodgrain, solid colour, matte, glossy and textured finishes. They can be used on suitable furniture, wardrobes, cabinets and interior surfaces. Visit our Bhowanipore store to compare the available colours and finishes in person.',
  },
  {
    question: 'Can architects and interior designers source materials from you?',
    answer: 'Yes. Balaji Ply & Lam welcomes architects, interior designers and other design professionals sourcing materials for residential and commercial projects. Share your material palette, specifications or reference images on WhatsApp so we can discuss suitable options across our range.',
  },
  {
    question: 'Where is your store located in Kolkata?',
    answer: 'Visit Balaji Ply & Lam at 63/1/1A, Sarat Bose Road, Bhowanipore, Kolkata, West Bengal 700025. Use the Get Directions link to plan your route in Google Maps. We recommend calling ahead to confirm opening hours and any specific materials you would like to see.',
  },
  {
    question: 'How can I contact Balaji Ply & Lam?',
    answer: 'Call or WhatsApp us on +91 9339742083. You can also email balajiplyamit@yahoo.in or visit our store on Sarat Bose Road in Bhowanipore. Product-specific WhatsApp buttons on our Products page make it easy to start a conversation about the material you need.',
  },
];

export interface VerifiedReview {
  author: string;
  text: string;
  sourceUrl: string;
}

// Publish only genuine, permission-cleared excerpts with their original Google source.
export const verifiedReviews: VerifiedReview[] = [];