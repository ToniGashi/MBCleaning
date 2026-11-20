import type { Metadata } from "next";
import { CommunityShowcase } from "@/components/community-showcase";
import { Callout, PageHero, SectionHeading } from "@/components/content";
import { ContactActions } from "@/components/site-chrome";
import { serviceAreas, workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lowcountry Towns We Clean",
  description:
    "Construction cleaning for builders across the entire South Carolina Lowcountry, including Charleston, Summerville, and the towns around them.",
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: "South Carolina Lowcountry Construction Cleaning",
    description: "Construction cleaning across the entire South Carolina Lowcountry.",
    url: "/service-area",
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="Construction cleaning across the South Carolina Lowcountry."
        intro="We clean new homes for builders across the entire South Carolina Lowcountry. Charleston and Summerville are our home bases."
        image={workPhotos.windows}
        actions={<ContactActions compact />}
      />
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Towns we already know"
            title="Where we work."
            body="We serve the entire South Carolina Lowcountry. These are towns where we’ve already cleaned new homes."
          />
          <div className="area-list">
            {serviceAreas.map((area) => (
              <article key={area.name}>
                <h3>{area.name}</h3>
                <p>{area.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CommunityShowcase variant="full" />
      <section className="section section-dark">
        <div className="shell split-section">
          <div>
            <p className="eyebrow">Building in more than one place?</p>
            <h2>Send us the whole list.</h2>
          </div>
          <div className="prose">
            <p>
              If you have homes going up in a few communities at once, tell us where they are and
              when they’ll be ready. We’ll let you know what we can cover and plan it out with you.
            </p>
          </div>
        </div>
      </section>
      <Callout
        eyebrow="Service area"
        title="Jobs across the Lowcountry."
        body="Text the community or address. If the job is in the Lowcountry, we can talk through the schedule."
      />
    </>
  );
}
