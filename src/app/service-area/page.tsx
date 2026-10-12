import type { Metadata } from "next";
import { CommunityShowcase } from "@/components/community-showcase";
import { Callout, PageHero, SectionHeading } from "@/components/content";
import { workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Charleston & Summerville Service Area",
  description:
    "Construction cleaning for builders in Charleston, Summerville, North Charleston, Goose Creek, Moncks Corner, Ridgeville, and nearby Lowcountry communities.",
  alternates: { canonical: "/service-area" },
  openGraph: {
    title: "MB Cleaning Service Area",
    description: "Construction cleaning across Charleston, Summerville, and nearby towns.",
    url: "/service-area",
  },
};

const areas = [
  ["Charleston", "One of our home bases, with work in new communities across the area, including Carolina Bay."],
  ["Summerville", "Our other home base, including Wisteria at Cane Bay and The Meadows."],
  ["North Charleston", "New construction in the area, including Coosaw Creek."],
  ["Goose Creek", "New homes in the area, including The Landings at Montague."],
  ["Moncks Corner", "New construction in the area, including Oakley Pointe and Strawberry Lane."],
  ["Ridgeville", "New communities in the area, including Parker’s Preserve and Timothy Lakes."],
];

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Service area"
        title="Charleston, Summerville, and the towns around them."
        intro="We’re based in the Lowcountry and clean new homes in communities all over the area. Not sure if we cover your job? Just ask."
        image={workPhotos.windows}
      />
      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Towns we cover"
            title="Where we work."
            body="If your job is nearby but not listed here, call or text us. We’ll tell you honestly whether we can take it."
          />
          <div className="area-list">
            {areas.map(([name, copy]) => (
              <article key={name}>
                <h2>{name}</h2>
                <p>{copy}</p>
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
