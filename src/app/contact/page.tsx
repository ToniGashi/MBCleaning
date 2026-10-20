import type { Metadata } from "next";
import { PageHero } from "@/components/content";
import { ContactActions } from "@/components/site-chrome";
import { mailHref, siteConfig, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or email MB Cleaning about construction cleaning in the South Carolina Lowcountry.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Call or Email MB Cleaning",
    description: "Two ways to reach us about construction cleaning in the South Carolina Lowcountry.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s get your homes ready."
        intro="Call or email us about construction cleaning across the South Carolina Lowcountry. Share the location and the phase if you have them. We’ll follow up."
      />
      <section className="section">
        <div className="shell">
          <div className="contact-methods">
            <article className="contact-card" id="call">
              <p className="eyebrow">Call</p>
              <h2>Talk to us directly.</h2>
              <p>The fastest way to reach us. Tell us where the job is and what you need, and we’ll talk it through.</p>
              {siteConfig.phone ? (
                <a className="contact-number" href={telHref()}>
                  {siteConfig.phoneDisplay}
                </a>
              ) : null}
              <ContactActions compact />
            </article>
            <article className="contact-card contact-card-email" id="email">
              <p className="eyebrow">Email</p>
              <h2>Email the project.</h2>
              <p>Send the location, the phase, and the timing if you have them. Partial details are fine. We’ll follow up.</p>
              {siteConfig.email ? (
                <a className="contact-number" href={mailHref()}>
                  {siteConfig.email}
                </a>
              ) : null}
              <div className="contact-actions">
                <a className="button button-primary" href={mailHref()}>
                  <MailIcon />
                  Email MB Cleaning
                </a>
              </div>
            </article>
          </div>
          <div className="note-box">
            <strong>Where we work</strong>
            <p>The entire South Carolina Lowcountry. Charleston and Summerville are our home bases, and we serve the surrounding Lowcountry as well.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4V6Z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
