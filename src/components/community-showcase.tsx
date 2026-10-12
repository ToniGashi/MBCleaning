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
                  alt={`${community.name}: ${community.alt}`}
                  fill
                  sizes={
                    isHome
                      ? "(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                      : "(max-width: 680px) 100vw, (max-width: 980px) 50vw, 40vw"
                  }
                  quality={78}
                />
                <span className="community-image-note">Community photo</span>
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
              These are public community photos used as placeholders, not photos from our jobs.
              We’ll replace them with MB Cleaning project photos over time.
            </p>
            {isHome ? <TextLink href="/service-area">View all communities</TextLink> : null}
          </div>
        </div>
      </CommunityReveal>
    </section>
  );
}

