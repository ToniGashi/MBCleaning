import Image from "next/image";
import { CommunityReveal } from "./community-reveal";
import { TextLink } from "./content";
import { projectCommunities } from "@/lib/site";

type CommunityShowcaseProps = {
  variant: "home" | "full";
};

export function CommunityShowcase({ variant }: CommunityShowcaseProps) {
  const communities =
    variant === "home"
      ? projectCommunities.filter((community) => community.featured)
      : projectCommunities;

  const isHome = variant === "home";

  return (
    <section
      className={`community-showcase community-showcase-${variant}`}
      id="communities"
      aria-labelledby={`community-${variant}-title`}
    >
      <CommunityReveal>
        <div className="shell">
          <div className="community-heading">
            <div>
              <p className="eyebrow">Where we’ve worked</p>
              <h2 id={`community-${variant}-title`}>Neighborhoods we know well.</h2>
              <p className="community-note">
                These names are communities we’ve worked in. The photos show the look of those
                neighborhoods, until we can show photos from our own jobs.
              </p>
            </div>
            <div className="community-proof">
              <strong>12<span>+</span></strong>
              <p>communities across the Lowcountry, and plenty more.</p>
            </div>
          </div>

          <div className="community-gallery" data-variant={variant}>
            {communities.map((community, index) => (
              <figure
                className="community-card"
                data-reveal
                style={{ "--reveal-order": index % 6 } as React.CSSProperties}
                key={community.name}
              >
                <Image
                  src={community.image}
                  alt={community.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, 800px"
                  quality={90}
                />
                <span className="community-image-note">Neighborhood</span>
                <figcaption>
                  <span className="community-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="community-card-copy">
                    <strong>{community.name}</strong>
                    <small>{community.locality}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="community-footer">
            <p>
              Photos show the look of the neighborhoods, not pictures from our jobs.
            </p>
            {isHome ? <TextLink href="/service-area">View all communities</TextLink> : null}
          </div>
        </div>
      </CommunityReveal>
    </section>
  );
}

