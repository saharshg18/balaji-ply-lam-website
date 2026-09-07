import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ContactLink, Eyebrow, Reveal, TextLink } from '../components/ui';
import { faqs, googleMapsUrl, materials, messages, verifiedReviews } from '../data/site';

function HomeHero() {
  const reduced = useReducedMotion();
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <picture className="hero-picture">
        <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />
        <motion.img src="/images/hero-interior.jpg" alt="A considered contemporary living room with walnut wall panels, textured louvers and warm ivory furniture" className="hero-image" width="1568" height="882" fetchPriority="high" initial={{ scale: reduced ? 1 : 1.035 }} animate={{ scale: 1 }} transition={{ duration: reduced ? 0 : 2, ease: 'easeOut' }} />
      </picture>
      <div className="home-hero-shade" />
      <div className="container home-hero-inner">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: reduced ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.15 }}>
         <Eyebrow>Plywood & laminate shop in Kolkata. Bhawanipore.</Eyebrow>
          <h1 id="home-title">Balaji<br />Ply <em>&amp;</em> Lam</h1>
          <p className="hero-tagline">Where great interiors begin.</p>
          <p className="hero-description">Premium plywood, laminates and interior materials.<br className="desktop-break" /> Considered choices for the spaces you imagine.</p>
          <div className="button-group hero-buttons">
            <Link to="/products" className="btn btn-light"><span>Explore Products</span><ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link>
            <ContactLink kind="whatsapp" variant="outline-light" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="section introduction" aria-labelledby="intro-title">
      <Reveal className="container intro-grid">
        <div><Eyebrow>Your material destination</Eyebrow><h2 id="intro-title">Thoughtful materials.<br /><em>Beautiful beginnings.</em></h2></div>
        <div className="intro-copy"><p>Every beautiful interior begins with a choice. The right foundation. A finish that feels just right. Materials that work as beautifully as they look.</p><p>At <strong>Balaji Ply &amp; Lam, Bhowanipore</strong>, we bring plywood, laminates and decorative interior materials together in one welcoming Kolkata destination, with genuine products and helpful guidance for homeowners and professionals alike.</p><TextLink to="/about-us">A little more about us</TextLink></div>
      </Reveal>
    </section>
  );
}

function MaterialGallery() {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ start: true, end: false, index: 1 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const first = element.firstElementChild as HTMLElement | null;
      const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 24;
      const itemWidth = (first?.getBoundingClientRect().width || 1) + gap;
      setPosition({ start: element.scrollLeft <= 2, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 3, index: Math.round(element.scrollLeft / itemWidth) + 1 });
    };
    update();
    element.addEventListener('scroll', update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    return () => { element.removeEventListener('scroll', update); resize.disconnect(); };
  }, []);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const item = element.firstElementChild as HTMLElement;
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 24;
    element.scrollBy({ left: direction * (item.getBoundingClientRect().width + gap), behavior: reduced ? 'instant' : 'smooth' });
  };

  return (
    <section className="section material-gallery" aria-labelledby="collection-title">
      <div className="container">
        <Reveal className="section-heading-row"><div><Eyebrow>The material collection</Eyebrow><h2 id="collection-title">A material for<br /><em>every possibility.</em></h2></div><div className="section-heading-aside"><p>From a strong foundation<br />to the perfect finishing touch.</p><TextLink to="/products">Explore the full collection</TextLink></div></Reveal>
        <div className="material-track" ref={track} aria-label="Interior material collection" tabIndex={0}>
          {materials.map((material, index) => (
            <Link className="material-item" to={`/products#${material.id}`} key={material.id}>
              <div className="material-image-wrap"><img src={material.image} alt={material.alt} loading="lazy" decoding="async" width="800" height="1000" /><span className="material-image-arrow"><ArrowUpRight size={22} strokeWidth={1.3} aria-hidden="true" /></span></div>
              <div className="material-name-row"><span className="material-number">0{index + 1}</span><h3>{material.name}</h3><ArrowUpRight size={19} strokeWidth={1.4} aria-hidden="true" /></div>
              <p>{material.shortDescription}</p>
            </Link>
          ))}
        </div>
        <div className="gallery-bottom"><span className="gallery-note">A world of finishes. One destination.</span><div className="gallery-controls"><span className="gallery-counter" aria-live="polite">{String(position.index).padStart(2, '0')} <span>/ {String(materials.length).padStart(2, '0')}</span></span><button type="button" className="round-button" onClick={() => move(-1)} disabled={position.start} aria-label="Previous material category"><ArrowLeft size={19} strokeWidth={1.4} /></button><button type="button" className="round-button" onClick={() => move(1)} disabled={position.end} aria-label="Next material category"><ArrowRight size={19} strokeWidth={1.4} /></button></div></div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: 'Homes, made personal',
    description: 'Warm kitchens. Thoughtful storage. The little details that turn a house into a space that feels like you.',
    image: 'https://images.pexels.com/photos/8141955/pexels-photo-8141955.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Interior inspiration: warm wood kitchen cabinetry in a contemporary home',
    link: 'laminates',
  },
  {
    title: 'Architect & design projects',
    description: 'From a first moodboard to a resolved material palette, explore finishes that stay true to your design intent.',
    image: '/images/design-studio.jpg',
    alt: 'Interior inspiration: a considered design studio with coordinated wood and surface samples',
    link: 'decorative-panels',
  },
  {
    title: 'Furniture & carpentry',
    description: 'Dependable boards and considered finishes for wardrobes, cabinets and furniture built around everyday life.',
    image: '/images/plywood.jpg',
    alt: 'Material inspiration: layered plywood for carefully made furniture and cabinetry',
    link: 'plywood',
  },
  {
    title: 'Commercial spaces',
    description: 'Distinctive surfaces for welcoming workplaces, memorable retail interiors and spaces with a point of view.',
    image: 'https://images.pexels.com/photos/31771715/pexels-photo-31771715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    alt: 'Interior inspiration: a contemporary commercial reception with warm decorative wood surfaces',
    link: 'louvers',
  },
];

function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % projects.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + projects.length) % projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = projects.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`project-tab-${next}`)?.focus();
  };

  return (
    <section className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal className="section-heading-row"><div><Eyebrow>For the spaces you imagine</Eyebrow><h2 id="projects-title">Different spaces.<br /><em>The same possibilities.</em></h2></div><p className="projects-heading-copy">A home to make your own.<br /> A project to bring to life.<br /> It all starts with the right materials.</p></Reveal>
        <div className="projects-grid">
          <div className="project-visual" id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${active}`} tabIndex={0}>
            <AnimatePresence mode="sync" initial={false}><motion.img key={active} src={projects[active].image} alt={projects[active].alt} width="1200" height="900" loading="lazy" decoding="async" onError={(event) => { const image = event.currentTarget; if (image.dataset.fallback) return; image.dataset.fallback = 'true'; image.src = '/images/hero-interior.jpg'; image.alt = 'Interior inspiration featuring warm wood panels and thoughtfully chosen finishes'; }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.45 }} /></AnimatePresence>
            <span className="project-image-caption">A little inspiration for your next space.</span>
          </div>
          <div className="project-selection"><div role="tablist" aria-label="Project inspiration" aria-orientation="vertical">
            {projects.map((project, index) => <button type="button" key={project.title} className={`project-tab${active === index ? ' is-active' : ''}`} id={`project-tab-${index}`} role="tab" aria-selected={active === index} aria-controls="project-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => onTabKey(event, index)}><span className="project-number">0{index + 1}</span><span className="project-tab-body"><span className="project-tab-title">{project.title}</span>{active === index && <span className="project-tab-description">{project.description}</span>}</span><ArrowUpRight size={21} strokeWidth={1.4} aria-hidden="true" /></button>)}
          </div><TextLink to={`/products#${projects[active].link}`}>Find materials for your project</TextLink></div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: 'More materials. One trusted destination.',
    text: 'Explore quality plywood, laminates, decorative surfaces and interior materials for homes, offices and commercial spaces across Kolkata.'
  },
  {
    title: 'Quality you can choose with confidence.',
    text: 'Choose from reliable plywood and laminate options with the right specifications, finishes and materials for your project.'
  },
  {
    title: 'Guidance for every project.',
    text: 'Get practical assistance in choosing plywood, laminates and interior materials based on your design, requirements and budget.'
  },
  {
    title: 'Considered options. Fair value.',
    text: 'Explore materials across different styles and price points to find the right plywood, laminates and interior finishes for your space.'
  },
];

function WhyChoose() {
  return (
    <section className="section why-section" aria-labelledby="why-title">
      <div className="container why-grid"><Reveal className="why-heading"><Eyebrow>Your trusted plywood & laminate destination in Kolkata</Eyebrow><h2 id="why-title">Quality plywood, laminates & interior materials.<br /><em>One trusted destination <br />in Kolkata.</em></h2><p>Looking for a trusted plywood shop in Kolkata? Explore quality plywood, laminates and interior materials with expert guidance for homes, offices and commercial spaces.</p></Reveal><div className="reasons-list">{reasons.map((reason, index) => <Reveal className="reason-row" key={reason.title} delay={index * 0.035}><span className="reason-number">0{index + 1}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div></Reveal>)}</div></div>
    </section>
  );
}

function Professionals() {
  return (
    <section className="professionals-section" aria-labelledby="professionals-title">
      <div className="professionals-copy"><Reveal><Eyebrow>For architects, interior designers &amp; professionals in Kolkata</Eyebrow><h2 id="professionals-title">Your design vision.<br /><em>Quality materials to bring it to life.</em></h2><p>A trusted material destination in Kolkata for architects and interior designers. Explore quality plywood, laminates, decorative surfaces and interior materials, compare textures and finishes, and bring your complete material palette together in one convenient destination.</p><p className="professionals-invitation">Bring your ideas. Let's explore the right materials for your project.</p><div className="button-group"><ContactLink kind="whatsapp" message={messages.professional} variant="light">Let's Talk Materials</ContactLink><ContactLink kind="call" variant="outline-light" /></div></Reveal></div>
      <div className="professionals-image"><img src="/images/material-palette.jpg" alt="An interior designer's coordinated palette of woodgrain, fluted panels and neutral decorative finishes" width="1200" height="900" loading="lazy" decoding="async" /></div>
    </section>
  );
}

function MaterialsAsDesign() {
  return (
    <section className="materials-editorial" aria-labelledby="details-title">
      <img src="/images/louvers.jpg" alt="A close study of walnut grain, vertical fluting and the way warm light moves across a decorative surface" width="800" height="1000" loading="lazy" decoding="async" />
      <div className="editorial-shade" />
      <Reveal className="container editorial-copy"><Eyebrow>Materials, as design</Eyebrow><h2 id="details-title">It's all in<br /><em>the details.</em></h2><p>The warmth of a grain. The feel of a finish.<br />The little things that make a space your own.</p><TextLink to="/products" className="light-link">Discover your material palette</TextLink></Reveal>
    </section>
  );
}

function GoogleMark() {
  return <svg className="google-mark" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.4a4.6 4.6 0 0 1-2 3v2.6h3.2c1.9-1.8 3-4.3 3-7.5Z" /><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.3l-3.2-2.6a6 6 0 0 1-9-3.1H3.1v2.6A10 10 0 0 0 12 22Z" /><path fill="#FBBC05" d="M6.4 14a6 6 0 0 1 0-4V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14Z" /><path fill="#EA4335" d="M12 6a5.4 5.4 0 0 1 3.8 1.5l2.8-2.8A9.5 9.5 0 0 0 12 2a10 10 0 0 0-8.9 5.4L6.4 10A6 6 0 0 1 12 6Z" /></svg>;
}

function Reviews() {
  return (
    <section className="section reviews-section" aria-labelledby="reviews-title">
      <Reveal className="container reviews-inner"><div className="google-label"><GoogleMark /><span>Our community, on Google</span></div><h2 id="reviews-title">Real people.<br /><em>Real experiences.</em></h2><p>The best perspective comes from the people who walk through our doors. Explore their experiences, in their own words.</p>
        {verifiedReviews.length > 0 && <div className="verified-reviews">{verifiedReviews.map((review) => <figure key={review.sourceUrl}><blockquote>{review.text}</blockquote><figcaption>{review.author}<a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">Read on Google <ArrowUpRight size={14} /></a></figcaption></figure>)}</div>}
        <a className="btn btn-outline" href={googleMapsUrl} target="_blank" rel="noopener noreferrer"><span>Read Our Google Reviews</span><ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></a>
      </Reveal>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section faq-section" id="faqs" aria-labelledby="faq-title">
      <div className="container faq-grid"><Reveal><Eyebrow>A little clarity</Eyebrow><h2 id="faq-title">Good questions.<br /><em>Helpful answers.</em></h2><p className="faq-intro">A few things to know before you choose.<br />For everything else, we're a conversation away.</p><ContactLink kind="whatsapp" variant="text">Ask Us on WhatsApp</ContactLink></Reveal><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item${open === index ? ' is-open' : ''}`} key={faq.question}><h3><button type="button" id={`faq-question-${index}`} aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}><span>{faq.question}</span><Plus size={19} strokeWidth={1.4} aria-hidden="true" /></button></h3><div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={open !== index}><p>{faq.answer}</p></div></div>)}</div></div>
    </section>
  );
}

export function HomePage() {
  return <><SEO page="home" /><HomeHero /><Introduction /><MaterialGallery /><ProjectShowcase /><WhyChoose /><Professionals /><MaterialsAsDesign /><Reviews /><FAQ /></>;
}
