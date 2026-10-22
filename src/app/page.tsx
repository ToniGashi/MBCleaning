import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CommunityReveal } from "@/components/community-reveal";
import { HeroReveal } from "@/components/hero-reveal";
import { CommunityShowcase } from "@/components/community-showcase";
import { Callout, ProofBar, SectionHeading, TextLink } from "@/components/content";
import { ContactActions } from "@/components/site-chrome";
import { mailHref, siteConfig, workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.title },
  description: siteConfig.description,
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
            <p className="eyebrow">Charleston · Summerville · <span className="nowrap">American-women-owned</span></p>
            <h1>
              New homes,
              <span> cleaned and ready.</span>
            </h1>
            <p className="hero-intro">
              {siteConfig.ownership} We clean new construction for builders
              across the <Link href="/service-area">South Carolina Lowcountry</Link>, from Charleston
              and Summerville to the towns around them, and from the first rough clean to the last
              touch-up before your buyers walk in.
            </p>
            <ContactActions />
            <p className="hero-note">Working with builders and superintendents across the Lowcountry.</p>
          </div>
          <HeroReveal>
            <div className="hero-frame">
              <Image
                src={workPhotos.kitchen.src}
                alt={workPhotos.kitchen.alt}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 46vw"
              />
              <div className="hero-rough" aria-hidden="true">
                <Image
                  src={workPhotos.kitchenFirst.src}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 46vw"
                />
              </div>
              <span className="hero-clear-line" aria-hidden="true" />
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
          </HeroReveal>
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
          <CommunityReveal className="phase-reveal">
            <div className="phase-grid">
              {phases.map((phase, index) => (
                <article
                  className="phase-card"
                  data-reveal
                  key={phase.number}
                  style={{ "--reveal-order": index } as CSSProperties}
                >
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
                      <TextLink href={phase.href}>What’s included in a {phase.title.toLowerCase()}</TextLink>
                      <TextLink href={phase.requestHref}>Email about a {phase.title.toLowerCase()}</TextLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </CommunityReveal>
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
