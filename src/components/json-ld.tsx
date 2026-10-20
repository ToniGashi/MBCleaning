import type { LocalBusiness, OfferCatalog, Service, WithContext } from "schema-dts";
import { absoluteUrl, serviceAreas, siteConfig } from "@/lib/site";

function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
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
    areaServed,
    hasOfferCatalog: offerCatalog,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

export function ServiceJsonLd() {
  const data: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Cleaning",
    serviceType: "New construction cleaning",
    description:
      "Rough, final, and touch-up construction cleaning for homebuilders and general contractors in the South Carolina Lowcountry.",
    provider: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: siteConfig.name,
    },
    areaServed,
    url: absoluteUrl("/services"),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

