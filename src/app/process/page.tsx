import type { Metadata } from "next";
import { Callout, PageHero, ProcessCycle, TextLink } from "@/components/content";
import { mailHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Construction Cleaning Process",
  description:
    "See how MB Cleaning plans, schedules, cleans, and checks each new home for builders in the South Carolina Lowcountry.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "How MB Cleaning Works",
    description: "From the first call to the walkthrough for South Carolina Lowcountry builders.",
    url: "/process",
  },
};

const steps = [
  {
    number: "01",
    title: "We learn about the job",
    body: "Tell us where the homes are, how many there are, what stage they’re in, and anything special about the finishes. If it helps, we’ll come walk the site with you.",
  },
  {
    number: "02",
    title: "We set the schedule",
    body: "We agree on dates, who our contact on site is, and how we get in. If anything changes, we let you know early instead of at the last minute.",
  },
  {
    number: "03",
    title: "We clean",
    body: "Our crew does the clean we agreed on: rough, final, or touch-up. If we spot something outside that, we ask you first instead of guessing.",
  },
  {
    number: "04",
    title: "We check our work",
    body: "Before we leave, we walk the home and look over the details. You’ll know what’s ready and whether anything still needs attention.",
  },
];

const quoteDetails = [
  ["Where the homes are", "The community name or address."],
  ["How many homes", "Or the square footage, if it’s one large job."],
  ["Which clean you need", "Rough, final, touch-up, or all three."],
  ["When they’ll be ready", "Even a rough timeline helps us plan the crew."],
  ["Anything special", "Unusual finishes, gate codes, or who to call on site."],
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Easy to schedule. Easy to work with."
        intro="Here’s what working with us looks like for Lowcountry builders, from your first call to the homeowner walkthrough."
        media={<ProcessCycle />}
      />
      <section className="section">
        <div className="shell content-grid">
          <div className="sticky-label">
            <p className="eyebrow">Four steps</p>
            <h2>From first call to walkthrough.</h2>
          </div>
          <div>
            {steps.map((step) => (
              <article className="process-detail" key={step.number}>
                <span className="detail-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section quote-prep-section">
        <div className="shell quote-prep">
          <div>
            <p className="eyebrow">Getting a quote</p>
            <h2>What to have ready when you call.</h2>
            <p className="quote-prep-intro">
              Don’t have all of it yet? That’s fine. Call anyway and we’ll figure it out together.
            </p>
            <TextLink href={mailHref()}>Email the project</TextLink>
          </div>
          <ul className="prep-list">
            {quoteDetails.map(([title, detail]) => (
              <li key={title}>
                <div>
                  <strong>{title}</strong>
                  <span>{detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Callout
        eyebrow="Plan ahead"
        title="Bring us in early."
        body="A quick look at the site before your homes are ready helps us plan the right crew and catch problems before they slow you down."
      />
    </>
  );
}
