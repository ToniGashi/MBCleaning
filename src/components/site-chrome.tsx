import Link from "next/link";
import { navigation, siteConfig, smsHref, telHref } from "@/lib/site";
import { MobileMenu } from "./mobile-menu";
import { PrimaryNav } from "./primary-nav";

export function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link className="brand-mark" data-inverted={inverted} href="/">
      <img className="brand-logo" src="/logo.png" alt="" width={58} height={58} />
      <span className="brand-name">
        <strong>MB Cleaning</strong>
        <small>Construction Cleaning</small>
      </span>
    </Link>
  );
}

export function ContactActions({ compact = false }: { compact?: boolean }) {
  const hasPhone = Boolean(siteConfig.phone);

  return (
    <div className="contact-actions" data-compact={compact}>
      <a className="button button-primary" href={telHref()}>
        <PhoneIcon />
        {hasPhone ? "Call MB Cleaning" : "Request a walkthrough"}
      </a>
      {hasPhone ? (
        <a className="button button-secondary" href={smsHref()}>
          <MessageIcon />
          Text us
        </a>
      ) : null}
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <BrandMark />
        <PrimaryNav />
        <a className="header-cta" href={telHref()} aria-label={siteConfig.phone ? `Call ${siteConfig.phoneDisplay}` : undefined}>
          <span className="header-cta-full">{siteConfig.phoneDisplay || "Start a project"}</span>
          <span className="header-cta-short">{siteConfig.phone ? "Call" : "Start"}</span>
          <ArrowIcon />
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandMark inverted />
          <p className="footer-statement">
            All-American, woman-owned construction cleaning for new homes across the South Carolina Lowcountry.
          </p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="eyebrow">Service area</p>
          <p>Construction cleaning across the entire South Carolina Lowcountry.</p>
          <p>Charleston and Summerville are our home bases.</p>
          <Link className="text-link light" href="/service-area">
            View coverage <ArrowIcon />
          </Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© MB Cleaning. All rights reserved.</p>
        <p>Ready for the next walkthrough.</p>
      </div>
    </footer>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.3 3.7 10 7.8 8.4 9.4c.9 2 2.2 3.3 4.2 4.2l1.6-1.6 4.1 2.7-.6 4c-7.4.5-12.9-5-12.4-12.4l2-2.6Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 5h16v12H8l-4 3V5Z" />
    </svg>
  );
}

