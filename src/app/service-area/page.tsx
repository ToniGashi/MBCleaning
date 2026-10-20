import type { Metadata } from "next";
import { CommunityShowcase } from "@/components/community-showcase";
import { Callout, PageHero, SectionHeading } from "@/components/content";
import { serviceAreas, workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lowcountry Towns We Clean",
  description:
    "Construction cleaning for builders in Charleston, Summerville, Johns Island, Ladson, Daniel Island, and other South Carolina Lowcountry towns.",
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: "South Carolina Lowcountry Construction Cleaning",
    description: "Construction cleaning across Charleston, Summerville, and nearby Lowcountry towns.",
    url: "/service-area",
  },
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="Construction cleaning across the South Carolina Lowcountry."
        intro="We clean new homes for builders in Charleston, Summerville, and the towns around them. Not sure if we cover your job? Just ask."
        image={workPhotos.windows}
      />
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Towns we cover"
            title="Where we work."
            body="These are towns where we’ve worked. If your job is nearby but not listed here, call or text us. We’ll tell you honestly whether we can take it."
          />
          <div className="area-list">
            {serviceAreas.map((area) => (
              <article key={area.name}>
                <h2>{area.name}</h2>
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
        eyebrow="Check your area"
        title="Not sure if we cover your job?"
        body="Text us the community or address and we’ll let you know."
      />
    </>
  );
}
