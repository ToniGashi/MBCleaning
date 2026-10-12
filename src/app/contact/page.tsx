import type { Metadata } from "next";
import { PageHero } from "@/components/content";
import { InquiryForm } from "@/components/inquiry-form";
import { ContactActions } from "@/components/site-chrome";
import { siteConfig, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact MB Cleaning",
  description:
    "Call, text, or send project details to discuss construction cleaning in Charleston and Summerville, South Carolina.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Discuss a Construction Cleaning Project",
    description: "Share the phase, location, and schedule with MB Cleaning.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s get your homes ready."
        intro="Calling or texting is the fastest way to reach us. You can also send the form below and we’ll get back to you."
      />
      <section className="section">
        <div className="shell contact-layout">
          <aside>
            <div className="contact-card">
              <p className="eyebrow">Call or text</p>
              <h2>Talk to us directly.</h2>
              <p>Tell us where the job is and what you need. We’re happy to talk it through.</p>
              {siteConfig.phone ? (
                <a className="contact-number" href={telHref()}>
                  {siteConfig.phoneDisplay}
                </a>
              ) : null}
              <ContactActions compact />
            </div>
            <div className="note-box">
              <strong>Where we work</strong>
              <p>Charleston, Summerville, and the towns around them. Not sure about your area? Just ask.</p>
            </div>
          </aside>
          <div>
            <p className="eyebrow">Send a message</p>
            <h2 className="form-title">
              Ask for a quote or a site visit.
            </h2>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

