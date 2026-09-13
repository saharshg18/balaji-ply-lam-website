import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, MapPin, Menu, Phone, X } from 'lucide-react';
import { business, directionsUrl, whatsappUrl } from '../data/site';
import { ContactLink, Eyebrow, Logo, Reveal, WhatsAppIcon } from './ui';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about-us', label: 'About Us' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (menuOpen && !element.open) element.showModal();
    if (!menuOpen && element.open) element.close();
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1100px)');
    const onResize = () => { if (media.matches) setMenuOpen(false); };
    media.addEventListener('change', onResize);
    return () => media.removeEventListener('change', onResize);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={`tel:${business.phone}`}><Phone size={15} strokeWidth={1.5} aria-hidden="true" /><span>{business.phoneDisplay}</span></a>
            <ContactLink kind="whatsapp" className="header-whatsapp">WhatsApp Us</ContactLink>
            <a className="header-directions" href={directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={15} strokeWidth={1.5} aria-hidden="true" /><span>Get Directions</span></a>
          </div>
          <div className="mobile-header-actions">
            <a href={`tel:${business.phone}`} aria-label={`Call Balaji Ply & Lam on ${business.phoneDisplay}`} className="icon-button"><Phone size={20} strokeWidth={1.5} /></a>
            <button type="button" className="icon-button menu-toggle" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(true)}><Menu size={25} strokeWidth={1.3} /></button>
          </div>
        </div>
      </header>
      <dialog id="mobile-menu" ref={dialog} className="mobile-menu" aria-label="Main navigation" onCancel={() => setMenuOpen(false)} onClose={() => setMenuOpen(false)}>
        <div className="mobile-menu-top"><Logo onClick={() => setMenuOpen(false)} /><button type="button" className="icon-button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}><X size={26} strokeWidth={1.4} /></button></div>
        <Eyebrow>Considered materials. Beautiful spaces.</Eyebrow>
        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)}><span className="mobile-menu-number">0{index + 1}</span><span>{item.label}</span><ArrowUpRight size={27} strokeWidth={1} /></NavLink>)}
        </nav>
        <div className="mobile-menu-contact"><p>Let's talk about your next space.</p><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a><ContactLink kind="whatsapp" /><a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Visit us in Bhowanipore <ArrowUpRight size={17} /></a></div>
      </dialog>
    </>
  );
}

function NavigationEffects() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const changedPage = previousPath.current !== pathname;
    previousPath.current = pathname;
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (changedPage) document.getElementById('main-content')?.focus({ preventScroll: true });
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);
        try { id = decodeURIComponent(id); } catch { /* Keep malformed external fragments harmless. */ }
        const target = document.getElementById(id);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target?.scrollIntoView({ behavior: changedPage || reduced ? 'instant' : 'smooth', block: 'start' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <Reveal className="container final-cta-inner">
        <div><Eyebrow>A beautiful space starts with a conversation</Eyebrow><h2 id="final-cta-title">Your next space.<br /><em>Let's begin.</em></h2></div>
        <div className="final-cta-copy"><p>Tell us what you have in mind.<br />We'll help you explore the right materials.</p><div className="button-group"><ContactLink kind="whatsapp" variant="light" /><ContactLink kind="call" variant="outline-light" /></div><a className="text-link light-link" href={directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} strokeWidth={1.5} />Get Directions to Our Store<ArrowUpRight size={17} strokeWidth={1.5} /></a></div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand"><Logo /><p>Considered materials.<br />Beautiful possibilities.</p><span>Plywood, laminates &amp; interior materials in Kolkata.</span></div>
          <div className="footer-nav"><h2>Explore</h2><nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav></div>
          <div className="footer-visit"><h2>Find us in Kolkata</h2><address>{business.street}<br />Bhowanipore, Kolkata<br />West Bengal - 700025</address><a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions<ArrowUpRight size={16} strokeWidth={1.5} /></a></div>
          <div className="footer-contact"><h2>Let's connect</h2><a href={`tel:${business.phone}`}>{business.phoneDisplay}</a><a href={`mailto:${business.email}`}>{business.email}</a><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp<ArrowUpRight size={16} strokeWidth={1.5} /></a></div>
        </div>
        <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} Balaji Ply &amp; Lam. All rights reserved.</p><p>Rooted in Kolkata. Inspired by good design.</p></div>
      </div>
    </footer>
  );
}

function PersistentActions() {
  return (
    <>
      <a href={whatsappUrl()} className="floating-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Start a WhatsApp conversation with Balaji Ply & Lam" title="Let's talk on WhatsApp"><WhatsAppIcon /><span className="floating-tooltip" aria-hidden="true">Let's talk materials</span></a>
      <nav className="mobile-action-bar" aria-label="Quick contact actions">
        <a href={`tel:${business.phone}`}><Phone size={19} strokeWidth={1.5} aria-hidden="true" /><span>Call</span></a>
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mobile-whatsapp"><WhatsAppIcon /><span>WhatsApp</span></a>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={19} strokeWidth={1.5} aria-hidden="true" /><span>Directions</span></a>
      </nav>
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <NavigationEffects />
      <main id="main-content" tabIndex={-1}>{children}<FinalCTA /></main>
      <Footer />
      <PersistentActions />
    </>
  );
}