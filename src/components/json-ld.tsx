import type { LocalBusiness, Service, WithContext } from "schema-dts";
import { absoluteUrl, siteConfig } from "@/lib/site";

function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function BusinessJsonLd() {
  const data: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: siteConfig.areas.map((name) => ({
      "@type": "City",
      name,
    })),
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
    serviceType: "Post-construction cleaning",
    description:
      "Rough, final, and touch-up construction cleaning for homebuilders and general contractors.",
    provider: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: siteConfig.name,
    },
    areaServed: siteConfig.areas.map((name) => ({
      "@type": "City",
      name,
    })),
    url: absoluteUrl("/services"),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

