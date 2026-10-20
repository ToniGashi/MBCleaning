import type { ImageObject, LocalBusiness, OfferCatalog, Service, WithContext } from "schema-dts";
import { absoluteUrl, projectCommunities, serviceAreas, siteConfig, workPhotos } from "@/lib/site";

function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }} />
  );
}

const areaServed = [
  { "@type": "AdministrativeArea" as const, name: "South Carolina Lowcountry" },
  { "@type": "State" as const, name: "South Carolina" },
  ...serviceAreas.map((area) => ({
    "@type": "City" as const,
    name: area.name,
    containedInPlace: { "@type": "State" as const, name: "South Carolina" },
  })),
];

function imageObject(src: string, caption: string): ImageObject {
  return {
    "@type": "ImageObject",
    contentUrl: absoluteUrl(src),
    caption,
  };
}

const businessImages: ImageObject[] = [
  imageObject("/logo.png", "MB Cleaning logo, a mop cleaning dirty tiles to a shine"),
  ...Object.values(workPhotos).map((photo) => imageObject(photo.src, photo.alt)),
  ...projectCommunities.map((community) => imageObject(community.image, community.alt)),
];

const offerCatalog: OfferCatalog = {
  "@type": "OfferCatalog",
  name: "South Carolina Lowcountry construction cleaning",
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rough clean", url: absoluteUrl("/services#rough") } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Final clean", url: absoluteUrl("/services#final") } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Touch-up clean", url: absoluteUrl("/services#touch-up") } },
  ],
};

export function BusinessJsonLd() {
  const data: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.png"),
    image: businessImages,
    areaServed,
    hasOfferCatalog: offerCatalog,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
  };

  return <JsonLd data={data} />;
}

export function ServiceJsonLd() {
  const data: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Cleaning",
    serviceType: "New construction cleaning",
    description: `Rough, final, and touch-up construction cleaning for homebuilders and general contractors in the ${siteConfig.region}.`,
    provider: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: siteConfig.name,
    },
    areaServed,
    url: absoluteUrl("/services"),
  };

  return <JsonLd data={data} />;
}

