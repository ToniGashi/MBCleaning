import type { Metadata } from "next";
import Image from "next/image";
import { Callout, PageHero, SectionHeading } from "@/components/content";
import { workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "About MB Cleaning",
  description:
    "MB Cleaning is an All-American, woman-owned construction cleaning crew serving builders in Charleston and Summerville, South Carolina.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MB Cleaning",
    description: "An All-American, woman-owned crew that cleans new homes for Lowcountry builders.",
    url: "/about",
  },
};

const values = [
  ["We own our work", "If something isn’t right, we want to hear about it, and we’ll make it right."],
  ["We’re careful with new finishes", "We treat every counter, floor, and fixture like it’s in our own home."],
  ["We keep you in the loop", "You’ll know when we’re coming, what we did, and if anything needs attention."],
  ["Every home gets the same care", "The last home in the community gets the same attention as the first."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="All-American, woman-owned, and proud of the work."
        intro="MB Cleaning is an All-American, woman-owned crew that cleans new homes for builders across Charleston and Summerville."
        image={workPhotos.entry}
      />
      <section className="section">
        <div className="shell split-section">
          <div>
            <p className="eyebrow">What we focus on</p>
            <h2>New construction is our specialty.</h2>
          </div>
          <div className="prose">
            <p>
              We’re not a house-cleaning service that takes the occasional construction job.
              Cleaning new builds is what we do, and we know how a job site works.
            </p>
            <p>
              A rough clean isn’t a final clean. Trades come and go, schedules shift, and new
              finishes need careful handling. We plan for all of it.
            </p>
            <p>
              Our goal is simple: when your buyers walk in, the home should look exactly the way
              you built it to look.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-flush">
        <div className="shell">
          <figure className="quote-block">
            <Image src={workPhotos.walkthrough.src} alt="" fill sizes="(max-width: 1240px) 100vw, 1180px" />
            <div className="quote-content">
              <p className="eyebrow">Our promise</p>
              <blockquote>“Ready for the next walkthrough.”</blockquote>
              <figcaption>What we aim for in every home we clean.</figcaption>
            </div>
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="What we stand for" title="How we work, every time." />
          <div className="values-grid">
            {values.map(([title, copy]) => (
              <article className="value-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Callout
        title="Let’s work together."
        body="Tell us about your next homes. We’d love to help get them ready."
      />
    </>
  );
}
