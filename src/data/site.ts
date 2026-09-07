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
    question: 'Where can I find a plywood shop near me in Kolkata?',
    answer: 'If you are searching for a plywood shop near me in Kolkata, visit Balaji Ply & Lam in Bhowanipore. We are a Kolkata plywood shop offering plywood, decorative laminates and interior materials for furniture, homes, offices and commercial projects. Contact us before visiting to discuss your requirements and confirm current availability.',
  },
  {
    question: 'Which is a reliable plywood shop in Kolkata?',
    answer: 'Balaji Ply & Lam is a plywood shop in Kolkata located in Bhowanipore, serving homeowners, carpenters, architects, interior designers and contractors. Visit our store to explore plywood, laminates and interior materials for furniture and residential or commercial interior projects.',
  },
  {
    question: 'Where can I find a plywood dealer near me?',
    answer: 'If you are looking for a plywood dealer near you in Kolkata, Balaji Ply & Lam is conveniently located on Sarat Bose Road in Bhowanipore. You can enquire about different plywood options, grades, thicknesses and applications and get guidance in selecting suitable materials for your project.',
  },
  {
    question: 'Are you a plywood dealer in Kolkata?',
    answer: 'Yes. Balaji Ply & Lam is a plywood and interior materials destination in Kolkata where customers can enquire about plywood for furniture, wardrobes, cabinets, kitchens and other applications. We also offer decorative laminates and other interior materials, making it convenient to explore multiple material options in one place.',
  },
  {
    question: 'Where can I buy quality plywood in Kolkata?',
    answer: 'You can visit Balaji Ply & Lam, a plywood shop in Bhowanipore, Kolkata, to enquire about suitable plywood for furniture, wardrobes, cabinets, kitchens and other interior applications. Our team can help you understand available grades, thicknesses and options based on your project requirements.',
  },
  {
    question: 'What types of plywood are available at your plywood shop in Kolkata?',
    answer: 'You can enquire about commercial and MR plywood, BWR-grade plywood and marine or BWP plywood options. The right plywood depends on factors such as furniture application, moisture exposure, required strength and thickness. Contact our Kolkata plywood store to confirm currently available grades, brands and sizes.',
  },
  {
    question: 'How do I choose the right plywood from a plywood dealer in Kolkata?',
    answer: 'The right plywood depends on where and how it will be used. Furniture application, expected load, exposure to moisture, required thickness and budget should all be considered. Whether you are making wardrobes, beds, cabinets or kitchen furniture, Balaji Ply & Lam can help you explore suitable plywood options for your project.',
  },
  {
    question: 'Do you have waterproof and moisture-resistant plywood in Kolkata?',
    answer: 'You can enquire about BWR and marine or BWP plywood options for applications where moisture resistance is important. These plywood grades have different specifications, so the right choice depends on your project. Contact our team to discuss your requirements and confirm current availability.',
  },
  {
    question: 'Do you supply plywood to architects and interior designers in Kolkata?',
    answer: 'Yes. Balaji Ply & Lam works with architects, interior designers, contractors and other professionals looking for plywood, laminates and interior materials in Kolkata. You can share your specifications, material requirements or reference images to discuss suitable options for residential and commercial projects.',
  },
  {
    question: 'Where is your plywood shop and dealer located in Kolkata?',
    answer: 'Balaji Ply & Lam is located at 63/1/1A, Sarat Bose Road, Bhowanipore, Kolkata, West Bengal 700025. Our plywood shop is conveniently located for customers across Kolkata, particularly Bhowanipore and South Kolkata. Call or WhatsApp us before visiting for product enquiries and current availability.',
  },
];

export interface VerifiedReview {
  author: string;
  text: string;
  sourceUrl: string;
}

// Publish only genuine, permission-cleared excerpts with their original Google source.
export const verifiedReviews: VerifiedReview[] = [];
