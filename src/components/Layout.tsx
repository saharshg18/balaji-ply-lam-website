import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, MapPin, Menu, Phone, X } from 'lucide-react';
import { business, directionsUrl, messages, whatsappUrl } from '../data/site';
import { ContactLink, Eyebrow, Logo, Reveal, WhatsAppIcon } from './ui';

const productNavigation = [
  { to: '/plywood/', label: 'Plywood & Boards' },
  { to: '/laminates/', label: 'Laminates' },
  { to: '/wpc-louvers/', label: 'WPC & Louvers' },
  { to: '/doors/', label: 'Doors' },
  { to: '/interior-accessories/', label: 'Interior Accessories' },
];

const brandNavigation = [
  { to: '/brands/centuryply/', label: 'CenturyPly' },
  { to: '/brands/', label: 'Greenply' },
  { to: '/brands/', label: 'Greenlam' },
  { to: '/brands/', label: 'Merino' },
  { to: '/brands/', label: 'Royale Touche' },
  { to: '/brands/', label: 'Austin' },
  { to: '/brands/', label: 'Sylvan' },
];

const guideGroups = [
  {
    label: 'Plywood',
    links: [
      {
        to: '/guides/plywood-price-in-kolkata/',
        label: 'Plywood Price in Kolkata',
      },
      {
        to: '/guides/mr-vs-bwr-vs-bwp-plywood/',
        label: 'MR vs BWR vs BWP',
      },
      {
        to: '/guides/best-plywood-for-kitchen/',
        label: 'Best Plywood for Kitchen',
      },
      {
        to: '/guides/best-plywood-for-wardrobe/',
        label: 'Best Plywood for Wardrobe',
      },
    ],
  },
  {
    label: 'Comparisons',
    links: [
      {
        to: '/guides/plywood-vs-mdf/',
        label: 'Plywood vs MDF',
      },
      {
        to: '/guides/plywood-vs-wpc/',
        label: 'Plywood vs WPC',
      },
      {
        to: '/guides/mdf-vs-hdmr/',
        label: 'MDF vs HDMR',
      },
      {
        to: '/guides/acrylic-vs-pvc-laminates/',
        label: 'Acrylic vs PVC Laminates',
      },
      {
        to: '/guides/centuryply-vs-greenply/',
        label: 'CenturyPly vs Greenply',
      },
    ],
  },
  {
    label: 'Kolkata Buying Guides',
    links: [
      {
        to: '/guides/where-to-buy-plywood-in-kolkata/',
        label: 'Where to Buy Plywood in Kolkata',
      },
    ],
  },
];

const mobilePrimaryNavigation = [
  { to: '/', label: 'Home' },
  { to: '/projects/', label: 'Projects' },
  { to: '/about/', label: 'About' },
  { to: '/contact/', label: 'Contact' },
];

function DropdownLink({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="nav-dropdown">
      <button type="button" className="nav-dropdown-trigger" aria-haspopup="true">
        <span>{label}</span>
        <ChevronDown size={14} strokeWidth={1.5} aria-hidden="true" />
      </button>

      <div className="nav-dropdown-menu">
        {children}
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dialog = useRef<HTMLDialogElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

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

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1100px)');

    const onResize = () => {
      if (media.matches) setMenuOpen(false);
    };

    media.addEventListener('change', onResize);

    return () => media.removeEventListener('change', onResize);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="header-inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              Home
            </NavLink>

            <DropdownLink label="Products">
              <div className="nav-dropdown-heading">Products</div>

              {productNavigation.map((item) => (
                <Link key={item.to} to={item.to}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
                </Link>
              ))}

              <Link className="nav-dropdown-view-all" to="/products/">
                <span>View All Products</span>
                <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </DropdownLink>

            <DropdownLink label="Brands">
              <div className="nav-dropdown-heading">Brands</div>

              {brandNavigation.map((item, index) => (
                <Link key={`${item.label}-${index}`} to={item.to}>
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
                </Link>
              ))}

              <Link className="nav-dropdown-view-all" to="/brands/">
                <span>View All Brands</span>
                <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
              </Link>
            </DropdownLink>

            <NavLink to="/projects/">Projects</NavLink>

            <DropdownLink label="Guides">
              <div className="nav-guides-dropdown">
                {guideGroups.map((group) => (
                  <div className="nav-guide-group" key={group.label}>
                    <div className="nav-dropdown-heading">{group.label}</div>

                    {group.links.map((item) => (
                      <Link key={item.to} to={item.to}>
                        <span>{item.label}</span>
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.4}
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                ))}

                <Link className="nav-dropdown-view-all" to="/guides/">
                  <span>View All Guides</span>
                  <ArrowUpRight size={16} strokeWidth={1.4} aria-hidden="true" />
                </Link>
              </div>
            </DropdownLink>

            <NavLink to="/about/">About</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </nav>

          <div className="header-actions">
            <a
              className="header-phone"
              href={`tel:${business.phone}`}
              aria-label={`Call Balaji Ply & Lam on ${business.phoneDisplay}`}
            >
              <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>{business.phoneDisplay}</span>
            </a>

            <ContactLink
              kind="whatsapp"
              message={messages.catalogue}
              className="header-whatsapp"
            >
              Get Catalogue
            </ContactLink>

            <a
              className="header-directions"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="mobile-header-actions">
            <a
              href={`tel:${business.phone}`}
              aria-label={`Call Balaji Ply & Lam on ${business.phoneDisplay}`}
              className="icon-button"
            >
              <Phone size={20} strokeWidth={1.5} />
            </a>

            <button
              type="button"
              className="icon-button menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={25} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </header>

      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-label="Main navigation"
        onCancel={() => setMenuOpen(false)}
        onClose={() => setMenuOpen(false)}
      >
        <div className="mobile-menu-top">
          <Logo onClick={() => setMenuOpen(false)} />

          <button
            type="button"
            className="icon-button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={26} strokeWidth={1.4} />
          </button>
        </div>

        <Eyebrow>Considered materials. Beautiful spaces.</Eyebrow>

        <nav aria-label="Mobile navigation">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            <span className="mobile-menu-number">01</span>
            <span>Home</span>
            <ArrowUpRight size={27} strokeWidth={1} />
          </NavLink>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-expand"
              aria-expanded={mobileProductsOpen}
              onClick={() => setMobileProductsOpen((open) => !open)}
            >
              <span className="mobile-menu-number">02</span>
              <span>Products</span>
              <ChevronDown
                size={22}
                strokeWidth={1.2}
                className={mobileProductsOpen ? 'is-open' : ''}
              />
            </button>

            {mobileProductsOpen && (
              <div className="mobile-nav-submenu">
                {productNavigation.map((item) => (
                  <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                    {item.label}
                    <ArrowUpRight size={17} strokeWidth={1.2} />
                  </Link>
                ))}

                <Link to="/products/" onClick={() => setMenuOpen(false)}>
                  View All Products
                  <ArrowUpRight size={17} strokeWidth={1.2} />
                </Link>
              </div>
            )}
          </div>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-expand"
              aria-expanded={mobileBrandsOpen}
              onClick={() => setMobileBrandsOpen((open) => !open)}
            >
              <span className="mobile-menu-number">03</span>
              <span>Brands</span>
              <ChevronDown
                size={22}
                strokeWidth={1.2}
                className={mobileBrandsOpen ? 'is-open' : ''}
              />
            </button>

            {mobileBrandsOpen && (
              <div className="mobile-nav-submenu">
                {brandNavigation.map((item, index) => (
                  <Link
                    key={`${item.label}-${index}`}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowUpRight size={17} strokeWidth={1.2} />
                  </Link>
                ))}

                <Link to="/brands/" onClick={() => setMenuOpen(false)}>
                  View All Brands
                  <ArrowUpRight size={17} strokeWidth={1.2} />
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/projects/" onClick={() => setMenuOpen(false)}>
            <span className="mobile-menu-number">04</span>
            <span>Projects</span>
            <ArrowUpRight size={27} strokeWidth={1} />
          </NavLink>

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-expand"
              aria-expanded={mobileGuidesOpen}
              onClick={() => setMobileGuidesOpen((open) => !open)}
            >
              <span className="mobile-menu-number">05</span>
              <span>Guides</span>
              <ChevronDown
                size={22}
                strokeWidth={1.2}
                className={mobileGuidesOpen ? 'is-open' : ''}
              />
            </button>

            {mobileGuidesOpen && (
              <div className="mobile-nav-submenu mobile-guide-submenu">
                {guideGroups.map((group) => (
                  <div key={group.label}>
                    <p>{group.label}</p>

                    {group.links.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                        <ArrowUpRight size={17} strokeWidth={1.2} />
                      </Link>
                    ))}
                  </div>
                ))}

                <Link to="/guides/" onClick={() => setMenuOpen(false)}>
                  View All Guides
                  <ArrowUpRight size={17} strokeWidth={1.2} />
                </Link>
              </div>
            )}
          </div>

          {mobilePrimaryNavigation
            .filter((item) => item.to !== '/')
            .map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-menu-number">
                  {String(index + 6).padStart(2, '0')}
                </span>
                <span>{item.label}</span>
                <ArrowUpRight size={27} strokeWidth={1} />
              </NavLink>
            ))}
        </nav>

        <div className="mobile-menu-contact">
          <p>Let's talk about your next space.</p>

          <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>

          <ContactLink kind="whatsapp" message={messages.catalogue}>
            Get Catalogue on WhatsApp
          </ContactLink>

          <a
            className="text-link"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit us in Bhowanipore
            <ArrowUpRight size={17} />
          </a>
        </div>
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

    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }

    if (changedPage) {
      document.getElementById('main-content')?.focus({
        preventScroll: true,
      });
    }

    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);

        try {
          id = decodeURIComponent(id);
        } catch {
          // Keep malformed external fragments harmless.
        }

        const target = document.getElementById(id);
        const reduced = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        target?.scrollIntoView({
          behavior: changedPage || reduced ? 'instant' : 'smooth',
          block: 'start',
        });
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
        <div>
          <Eyebrow>Let's talk materials</Eyebrow>

          <h2 id="final-cta-title">
            Your next space.
            <br />
            <em>Let's begin.</em>
          </h2>
        </div>

        <div className="final-cta-copy">
          <p>
            Tell us what you have in mind.
            <br />
            We'll help you explore the right materials.
          </p>

          <div className="button-group">
            <ContactLink
              kind="whatsapp"
              message={messages.catalogue}
              variant="light"
            >
              Get Catalogue on WhatsApp
            </ContactLink>

            <ContactLink
              kind="call"
              variant="outline-light"
            >
              Call Us
            </ContactLink>
          </div>

          <a
            className="text-link light-link"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={16} strokeWidth={1.5} />
            Get Directions to Our Store
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />

            <p>
              Considered materials.
              <br />
              Beautiful possibilities.
            </p>

            <span>
              Plywood, laminates &amp; interior materials in Kolkata.
            </span>
          </div>

          <div className="footer-nav">
            <h2>Explore</h2>

            <nav aria-label="Footer navigation">
              <Link to="/">Home</Link>
              <Link to="/products/">Products</Link>
              <Link to="/brands/">Brands</Link>
              <Link to="/projects/">Projects</Link>
              <Link to="/guides/">Guides</Link>
              <Link to="/about/">About</Link>
              <Link to="/contact/">Contact</Link>
            </nav>
          </div>

          <div className="footer-nav">
            <h2>Materials</h2>

            <nav aria-label="Product navigation">
              {productNavigation.map((item) => (
                <Link key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-visit">
            <h2>Find us in Kolkata</h2>

            <address>
              {business.street}
              <br />
              Bhowanipore, Kolkata
              <br />
              West Bengal - 700025
            </address>

            <a
              className="text-link"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>

          <div className="footer-contact">
            <h2>Let's connect</h2>

            <a href={`tel:${business.phone}`}>
              {business.phoneDisplay}
            </a>

            <a href={`mailto:${business.email}`}>
              {business.email}
            </a>

            <a
              className="text-link"
              href={whatsappUrl(messages.catalogue)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Catalogue on WhatsApp
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Balaji Ply &amp; Lam. All rights
            reserved.
          </p>

          <p>Rooted in Kolkata. Inspired by good design.</p>
        </div>
      </div>
    </footer>
  );
}

function PersistentActions() {
  return (
    <>
      <a
        href={whatsappUrl(messages.catalogue)}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get the Balaji Ply & Lam catalogue on WhatsApp"
        title="Get Catalogue on WhatsApp"
      >
        <WhatsAppIcon />

        <span className="floating-tooltip" aria-hidden="true">
          Get catalogue on WhatsApp
        </span>
      </a>

      <nav className="mobile-action-bar" aria-label="Quick contact actions">
        <a href={`tel:${business.phone}`}>
          <Phone size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl(messages.catalogue)}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-whatsapp"
        >
          <WhatsAppIcon />
          <span>Catalogue</span>
        </a>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={19} strokeWidth={1.5} aria-hidden="true" />
          <span>Directions</span>
        </a>
      </nav>
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <NavigationEffects />

      <main id="main-content" tabIndex={-1}>
        {children}
        <FinalCTA />
      </main>

      <Footer />

      <PersistentActions />
    </>
  );
}
