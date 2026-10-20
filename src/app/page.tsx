import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CommunityShowcase } from "@/components/community-showcase";
import { Callout, ProofBar, SectionHeading, TextLink } from "@/components/content";
import { ContactActions } from "@/components/site-chrome";
import { mailHref, workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Construction Cleaning in the SC Lowcountry | MB Cleaning" },
  description:
    "All-American, woman-owned construction cleaning for builders in Charleston, Summerville, and the South Carolina Lowcountry. Rough, final, and touch-up cleans around your schedule.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Construction Cleaning in the South Carolina Lowcountry",
    description:
      "Rough, final, and touch-up construction cleaning for Lowcountry builders and general contractors.",
    url: "/",
  },
};

const phases = [
  {
    number: "01",
    title: "Rough clean",
    body: "Once drywall and trim are in, we clear out the dust and debris so finish work can start clean.",
    href: "/services#rough",
    requestHref: mailHref("Rough clean"),
    photo: workPhotos.rough,
  },
  {
    number: "02",
    title: "Final clean",
    body: "The detailed clean before inspection and closing: counters, cabinets, glass, fixtures, and floors.",
    href: "/services#final",
    requestHref: mailHref("Final clean"),
    photo: workPhotos.kitchen,
  },
  {
    number: "03",
    title: "Touch-up clean",
    body: "After punch-list repairs, we come back for the dust and smudges so the home looks right on walkthrough day.",
    href: "/services#touch-up",
    requestHref: mailHref("Touch-up clean"),
    photo: workPhotos.windows,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Charleston · Summerville · <span className="nowrap">All-American</span> · Woman-owned</p>
            <h1>
              New homes,
              <span> cleaned and ready.</span>
            </h1>
            <p className="hero-intro">
              We’re an All-American, woman-owned crew that cleans new construction for builders
              across the <Link href="/service-area">South Carolina Lowcountry</Link>, from Charleston
              and Summerville to the towns around them, and from the first rough clean to the last
              touch-up before your buyers walk in.
            </p>
            <ContactActions />
            <p className="hero-note">Working with builders and superintendents across the Lowcountry.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-frame">
              <Image
                src={workPhotos.kitchen.src}
                alt={workPhotos.kitchen.alt}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 46vw"
              />
              <span className="hero-image-note">Illustration</span>
            </div>
            <div className="hero-checklist" aria-label="A typical home during walkthrough week">
              <p className="hero-checklist-title">
                <span>A typical home</span>
                <span>Walkthrough week</span>
              </p>
              <ul>
                <li data-state="done">Rough clean</li>
                <li data-state="done">Final clean</li>
                <li data-state="active">Touch-up before walkthrough</li>
              </ul>
            </div>
            <div className="hero-badge">
              <strong>12+</strong>
              <span>Lowcountry communities</span>
            </div>
          </div>
        </div>
      </section>

      <ProofBar />

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="What we do"
            title="Three cleans, one finished home."
            body="Most new homes need us more than once. Here’s what each visit covers."
          />
          <div className="phase-grid">
            {phases.map((phase) => (
              <article className="phase-card" key={phase.number}>
                <div className="phase-photo">
                  <Image
                    src={phase.photo.src}
                    alt={phase.photo.alt}
                    fill
                    sizes="(max-width: 980px) 100vw, 380px"
                  />
                </div>
                <div className="phase-body">
                  <span className="phase-number">{phase.number}</span>
                  <h3>{phase.title}</h3>
                  <p>{phase.body}</p>
                  <div className="phase-actions">
                    <TextLink href={phase.href}>What’s included</TextLink>
                    <TextLink href={phase.requestHref}>Email about this clean</TextLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell split-section">
          <div className="statement-block">
            <p className="eyebrow">Why builders call us</p>
            <h2>One less thing for your superintendent to worry about.</h2>
          </div>
          <div className="benefit-list">
            <article>
              <span>01</span>
              <div>
                <h3>We ask before we assume</h3>
                <p>We go over exactly what’s included before we start, so there are no surprises later.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>You’ll hear from us</h3>
                <p>If something on site changes our plans, we tell you right away. No chasing us down.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>We check before we leave</h3>
                <p>We walk the home and look at the details buyers notice first.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CommunityShowcase variant="home" />

      <Callout />
    </>
  );
}
