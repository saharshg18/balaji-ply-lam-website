import type { ReactNode, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { business, directionsUrl, whatsappUrl } from '../data/site';

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m8.4 7.6 1.2 2.5-.9 1c.7 1.5 1.8 2.6 3.4 3.3l1-.9 2.5 1.2c-.2 1.4-1 2-2.2 1.8-3.6-.6-6.4-3.4-7-6.8-.2-1 .4-1.9 2-2.1Z" fill="currentColor" />
    </svg>
  );
}

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 44 52" fill="none" aria-hidden="true" {...props}>
      <path d="M8 45V7h14c13 0 15 15 4 19 14 4 11 19-2 19H8Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 40V2h14c13 0 15 15 4 19 14 4 11 19-2 19H3Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 26h16M3 21h17" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link to="/" className={`brand-logo${light ? ' brand-logo-light' : ''}`} aria-label="Balaji Ply & Lam home" onClick={onClick}>
      <BrandMark className="brand-mark" />
      <span className="brand-wordmark"><span>BALAJI</span><span>PLY &amp; LAM</span></span>
    </Link>
  );
}

type ContactKind = 'call' | 'whatsapp' | 'directions';
type ButtonVariant = 'dark' | 'light' | 'outline' | 'outline-light' | 'text';

export function ContactLink({ kind, children, message, variant = 'dark', className = '', showIcon = true }: {
  kind: ContactKind;
  children?: ReactNode;
  message?: string;
  variant?: ButtonVariant;
  className?: string;
  showIcon?: boolean;
}) {
  const href = kind === 'call' ? `tel:${business.phone}` : kind === 'directions' ? directionsUrl : whatsappUrl(message);
  const Icon = kind === 'call' ? Phone : kind === 'directions' ? MapPin : WhatsAppIcon;
  const defaultLabel = kind === 'call' ? 'Call Us' : kind === 'directions' ? 'Get Directions' : 'WhatsApp Us';
  return (
    <a href={href} className={`btn btn-${variant} ${className}`} target={kind === 'call' ? undefined : '_blank'} rel={kind === 'call' ? undefined : 'noopener noreferrer'}>
      {showIcon && <Icon className="button-icon" aria-hidden="true" />}
      <span>{children || defaultLabel}</span>
    </a>
  );
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function TextLink({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) {
  return <Link to={to} className={`text-link ${className}`}><span>{children}</span><ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" /></Link>;
}

export function InnerHero({ image, alt, eyebrow, title, children, className = '' }: { image: string; alt: string; eyebrow: string; title: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`inner-hero ${className}`}>
      <img src={image} alt={alt} className="hero-image" width="1568" height="882" fetchPriority="high" />
      <div className="inner-hero-shade" />
      <div className="container inner-hero-content">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <p className="inner-hero-brand">Balaji Ply &amp; Lam</p>
          <h1>{title}</h1>
          {children}
        </Reveal>
      </div>
    </section>
  );
}