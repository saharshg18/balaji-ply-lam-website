import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ContactLink, Eyebrow, InnerHero, Reveal } from '../components/ui';
import { business, materials } from '../data/site';

function CollectionNavigation() {
  const [active, setActive] = useState(materials[0].id);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: '-22% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('[data-product-section]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = navigation.current;
    const link = element?.querySelector<HTMLElement>(`[data-category="${active}"]`);
    if (element && link && element.scrollWidth > element.clientWidth) {
      element.scrollTo({ left: link.offsetLeft - (element.clientWidth - link.clientWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  }, [active]);

  return <div className="collection-navigation"><nav className="container collection-nav" aria-label="Jump to a material category" ref={navigation}>{materials.map((material) => <Link key={material.id} to={`/products#${material.id}`} data-category={material.id} className={active === material.id ? 'is-active' : ''} aria-current={active === material.id ? 'location' : undefined} onClick={() => setActive(material.id)}>{material.navName}</Link>)}</nav></div>;
}

export function ProductsPage() {
  return (
    <>
      <SEO page="products" />
      <InnerHero image="/images/material-palette.jpg" alt="An architectural palette of warm wood, decorative surfaces and tactile neutral materials" eyebrow="The collection / Kolkata" title={<>Explore our <em>range.</em></>} className="products-hero"><p className="inner-hero-description">From the foundations of furniture to the finishes that define a room. Materials for homes, kitchens, walls, ceilings and your next big idea.</p><Link to="/products#collection" className="text-link light-link hero-anchor">Find your material<ArrowDown size={17} strokeWidth={1.5} aria-hidden="true" /></Link></InnerHero>
      <CollectionNavigation />
      <div className="collection-intro container" id="collection"><p>Good spaces begin with considered choices.</p><span>Explore the range. Enquire for current finishes and availability.</span></div>
      <div className="product-sections">
        {materials.map((material, index) => (
          <section key={material.id} id={material.id} data-product-section className={`product-detail${index % 2 === 1 ? ' product-detail-reverse' : ''}`} aria-labelledby={`${material.id}-title`}>
            <div className="container product-detail-grid">
              <Reveal className="product-detail-image"><img src={material.image} alt={material.alt} width="800" height="1000" loading="lazy" decoding="async" /><span className="product-image-caption">THE MATERIAL COLLECTION / 0{index + 1}</span></Reveal>
              <Reveal className="product-detail-copy" delay={0.08}><Eyebrow>{material.eyebrow}</Eyebrow><h2 id={`${material.id}-title`}>{material.name}</h2><p className="product-description">{material.description}</p><div className="product-characteristics"><h3>Options to explore</h3><ul>{material.characteristics.map((characteristic) => <li key={characteristic}>{characteristic}</li>)}</ul></div><div className="product-applications"><h3>Made for</h3><p>{material.applications}</p></div>{material.note && <p className="product-note">{material.note}</p>}<ContactLink kind="whatsapp" message={material.message} className="product-enquiry">{material.cta}</ContactLink><a href={`tel:${business.phone}`} className="product-call"><Phone size={14} strokeWidth={1.5} aria-hidden="true" /><span>Prefer a conversation? Call us</span><ArrowUpRight size={15} strokeWidth={1.4} aria-hidden="true" /></a></Reveal>
            </div>
          </section>
        ))}
      </div>
      <div className="collection-footnote container"><p>Material and interior imagery is illustrative. Colours, textures, specifications and stock can vary. Visit our Bhowanipore store to see the current collection in person.</p></div>
    </>
  );
}