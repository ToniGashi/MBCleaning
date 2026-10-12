import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ContactActions } from "./site-chrome";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  media,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: { src: string; alt: string };
  media?: ReactNode;
}) {
  const hasMedia = Boolean(media || image);

  return (
    <section className="page-hero" data-has-image={hasMedia} data-media={media ? "graphic" : undefined}>
      <div className="shell page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-intro">{intro}</p>
        </div>
        {media ? (
          <div className="page-hero-media page-hero-media-graphic">{media}</div>
        ) : image ? (
          <div className="page-hero-media">
            <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 980px) 100vw, 560px" />
            <span className="hero-image-note">Illustration</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}

const processCycleSteps = [
  { number: "01", label: "Call" },
  { number: "02", label: "Schedule" },
  { number: "03", label: "Clean" },
  { number: "04", label: "Check" },
] as const;

export function ProcessCycle() {
  return (
    <div
      className="process-cycle"
      role="img"
      aria-label="Working with us is a simple loop: call, schedule, clean, then check."
    >
      <svg className="process-cycle-svg" viewBox="0 0 420 420" aria-hidden="true">
        <circle className="process-cycle-track" cx="210" cy="210" r="128" />
        <circle className="process-cycle-orbit" cx="210" cy="210" r="128" />
      </svg>
      <ol className="process-cycle-steps">
        {processCycleSteps.map((step, index) => (
          <li key={step.number} style={{ "--step": index } as CSSProperties}>
            <span>{step.number}</span>
            <strong>{step.label}</strong>
          </li>
        ))}
      </ol>
      <div className="process-cycle-center">
        <p className="process-cycle-kicker">Simple loop</p>
        <p>Call to walkthrough</p>
      </div>
    </div>
  );
}

export function ProofBar() {
  return (
    <aside className="proof-bar" aria-label="Service highlights">
      <div className="shell proof-grid">
        <p><strong>01</strong> Rough, final &amp; touch-up</p>
        <p><strong>02</strong> Built around your schedule</p>
        <p><strong>03</strong> One person to call</p>
        <p><strong>04</strong> Ready for the walkthrough</p>
      </div>
    </aside>
  );
}

export function Callout({
  eyebrow = "Let’s talk",
  title = "Got homes coming up?",
  body = "Call or text us with where the job is and when the homes will be ready. We’ll take it from there.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="callout">
      <div className="shell">
        <div className="callout-panel">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <div className="callout-body">
            <p>{body}</p>
            <ContactActions />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="text-link" href={href}>
      {children} <ArrowIcon />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

