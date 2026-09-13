import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ContactLink, Eyebrow, InnerHero, Reveal } from '../components/ui';
import { business, directionsUrl, mapEmbedUrl, messages } from '../data/site';

const values = [
  { name: 'Quality', description: 'Reliable, genuine materials for the spaces and projects that matter to you.' },
  { name: 'Variety', description: 'More possibilities for different aesthetics, applications and requirements.' },
  { name: 'Guidance', description: 'Useful conversations that help you make informed, confident choices.' },
  { name: 'Relationships', description: 'Building trust with homeowners, craftspeople and design professionals.' },
];

const audiences = [
  { name: 'Homeowners', description: 'For the home you are making your own.' },
  { name: 'Architects', description: 'Materials that support your design intent.' },
  { name: 'Interior Designers', description: 'A destination for a considered palette.' },
  { name: 'Contractors & Builders', description: 'Practical sourcing for the project ahead.' },
  { name: 'Carpenters', description: 'The foundations of well-made furniture.' },
  { name: 'Commercial Clients', description: 'Distinctive finishes for working spaces.' },
];

function OurStory() {
  return <section className="section about-story" id="our-story" aria-labelledby="story-title"><Reveal className="container intro-grid"><div><Eyebrow>Our story</Eyebrow><h2 id="story-title">A local address.<br /><em>A world of<br className="story-break" /> possibilities.</em></h2></div><div className="intro-copy"><p className="story-lead">Great interiors begin with the right materials. It's a simple belief, and it shapes everything we do.</p><p>At Balaji Ply &amp; Lam, we bring together plywood, laminates and decorative interior materials for the people creating spaces across Kolkata. From our address on Sarat Bose Road in Bhowanipore, we serve homeowners, architects, interior designers, contractors and carpenters.</p><p>Whether you're choosing a finish for your first home or sourcing a coordinated palette for a client, we're here to make the process feel more approachable, considered and convenient.</p></div></Reveal></section>;
}

function OurApproach() {
  return <section className="section about-approach" aria-labelledby="approach-title"><div className="container approach-grid"><Reveal className="approach-image"><img src="/images/laminates.jpg" alt="A carefully considered selection of laminate finishes in warm, natural tones" width="800" height="1000" loading="lazy" decoding="async" /></Reveal><Reveal className="approach-copy"><Eyebrow>Our approach</Eyebrow><h2 id="approach-title">An idea is a<br /><em>good place to start.</em></h2><p>You don't need to arrive with every answer. Bring your plans, reference images or simply a sense of what you love. We'll help you explore from there.</p><ol className="approach-steps"><li><span>01</span><div><h3>Understand your project.</h3><p>The space, the application and what matters to you.</p></div></li><li><span>02</span><div><h3>Explore the possibilities.</h3><p>Compare materials, colours, textures and suitable options.</p></div></li><li><span>03</span><div><h3>Choose with confidence.</h3><p>Useful guidance, clear specifications and considered decisions.</p></div></li></ol></Reveal></div></section>;
}

function OurValues() {
  return <section className="section values-section" aria-labelledby="values-title"><div className="container"><Reveal className="values-heading"><Eyebrow>What we believe in</Eyebrow><h2 id="values-title">Good materials.<br /><em>Better relationships.</em></h2></Reveal><div className="values-grid">{values.map((value, index) => <Reveal className="value-item" key={value.name} delay={index * 0.06}><span className="value-number">0{index + 1}</span><h3>{value.name}</h3><p>{value.description}</p></Reveal>)}</div></div></section>;
}

function WhoWeServe() {
  return <section className="section audience-section" aria-labelledby="audience-title"><div className="container audience-grid"><Reveal><Eyebrow>Who we serve</Eyebrow><h2 id="audience-title">Different projects.<br /><em>The same care.</em></h2><p className="audience-intro">A single piece of furniture or a whole new interior. Every project deserves thoughtful material choices.</p><div className="audience-image"><img src="/images/decorative-panels.jpg" alt="Neutral decorative wall panels and walnut furniture, an inspiration for considered interiors" width="800" height="1000" loading="lazy" decoding="async" /></div></Reveal><div className="audience-list">{audiences.map((audience) => <Reveal className="audience-item" key={audience.name}><h3>{audience.name}</h3><p>{audience.description}</p></Reveal>)}</div></div></section>;
}

function VisitStore() {
  return <section className="section visit-section" id="visit" aria-labelledby="visit-title"><div className="container"><Reveal className="section-heading-row"><div><Eyebrow>Come explore</Eyebrow><h2 id="visit-title">See it. Feel it.<br /><em>Find your material.</em></h2></div><p className="visit-heading-copy">Some decisions are better made in person.<br />We look forward to welcoming you.</p></Reveal><div className="visit-grid"><div className="visit-details"><h3>BALAJI PLY &amp; LAM</h3><address>{business.street}<br />Bhowanipore, Kolkata<br />West Bengal - 700025</address><div className="visit-contact-links"><a href={`tel:${business.phone}`}><Phone size={16} strokeWidth={1.4} aria-hidden="true" />{business.phoneDisplay}</a><a href={`mailto:${business.email}`}><Mail size={17} strokeWidth={1.4} aria-hidden="true" />{business.email}</a></div><p className="visit-note">Planning a visit? Call ahead to confirm today's opening hours and any specific materials you'd like to explore.</p><ContactLink kind="directions" /><div className="visit-secondary-actions"><ContactLink kind="call" variant="text">Call Now</ContactLink><ContactLink kind="whatsapp" variant="text" message={messages.visit} /></div></div><div className="visit-map"><iframe src={mapEmbedUrl} title="Find Balaji Ply & Lam at 63/1/1A Sarat Bose Road, Bhowanipore, Kolkata" width="800" height="520" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="map-caption"><span>63/1/1A, Sarat Bose Road, Bhowanipore</span><span>Open in Google Maps<ArrowUpRight size={15} strokeWidth={1.4} aria-hidden="true" /></span></a></div></div></div></section>;
}

export function AboutPage() {
  return <><SEO page="about" /><InnerHero image="/images/design-studio.jpg" alt="Interior material inspiration: a warm design studio with natural wood samples and considered finishes" eyebrow="Our story / Bhowanipore, Kolkata" title={<>Great interiors begin<br /><em>with the right materials.</em></>} className="about-hero"><p className="inner-hero-description">Rooted in Bhowanipore. Here for the spaces you're imagining.</p><Link to="/about-us#our-story" className="text-link light-link hero-anchor">Get to know us<ArrowDown size={17} strokeWidth={1.5} aria-hidden="true" /></Link></InnerHero><OurStory /><OurApproach /><OurValues /><WhoWeServe /><VisitStore /></>;
}