import type { Metadata } from "next";
import Image from "next/image";
import { Callout, PageHero } from "@/components/content";
import { ServiceJsonLd } from "@/components/json-ld";
import { workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Construction Cleaning Services",
  description:
    "Rough, final, and touch-up construction cleaning for builders and general contractors in Charleston and Summerville, South Carolina.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Construction Cleaning Services | MB Cleaning",
    description: "Rough, final, and touch-up cleaning for new homes in Charleston and Summerville.",
    url: "/services",
  },
};

const services = [
  {
    id: "rough",
    number: "01",
    title: "Rough clean",
    description:
      "Once drywall, paint, and trim are done, there’s dust on everything. We clear it out so the finish trades can do their best work in a clean space.",
    photo: workPhotos.rough,
    items: [
      "Dust and debris cleared from every room",
      "Floors swept and vacuumed",
      "Cabinets and fixtures wiped out",
      "Stickers and protective film removed, when approved",
      "Walls and surfaces wiped down",
      "Anything unusual reported to your site contact",
    ],
  },
  {
    id: "final",
    number: "02",
    title: "Final clean",
    description:
      "The detailed clean before inspection and closing. This is the one your buyers see, so we take our time with it and follow your checklist.",
    photo: workPhotos.kitchen,
    items: [
      "Counters, cabinets, and shelves",
      "Inside windows, glass, and mirrors",
      "Appliances and fixtures",
      "Trim, doors, and baseboards",
      "Floors cleaned the right way for each material",
      "A room-by-room check before we leave",
    ],
  },
  {
    id: "touch-up",
    number: "03",
    title: "Touch-up clean",
    description:
      "Punch-list repairs always leave a little mess behind. We come back and make it right before the homeowner walkthrough.",
    photo: workPhotos.windows,
    items: [
      "Dust from punch-list repairs",
      "Fingerprints and smudges",
      "Glass and fixtures touched up",
      "Floors spot-cleaned",
      "Entry and front rooms looking their best",
      "A quick note on what we did",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceJsonLd />
      <PageHero
        eyebrow="Services"
        title="Three cleans, from dusty to move-in ready."
        intro="Every new home goes through stages, and we clean at each one. We’re clear about what’s included, so there’s never any guessing."
        image={workPhotos.film}
      />
      <section className="section">
        <div className="shell content-grid">
          <aside className="sticky-label">
            <p className="eyebrow">What’s included</p>
            <p className="side-note">
              Every builder does things a little differently. We’ll match our checklist to yours.
            </p>
          </aside>
          <div>
            {services.map((service) => (
              <article className="service-detail" id={service.id} key={service.id}>
                <span className="detail-number">{service.number}</span>
                <div>
                  <h2>{service.title}</h2>
                  <div className="service-photo">
                    <Image
                      src={service.photo.src}
                      alt={service.photo.alt}
                      fill
                      sizes="(max-width: 980px) 100vw, 640px"
                    />
                  </div>
                  <p>{service.description}</p>
                  <ul className="check-list">
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
            <div className="note-box">
              <strong>Need something else?</strong>
              <p>
                Outside windows, pressure washing, hauling, special floor care, model homes, and
                sales centers are quoted separately. If trades come back in after we’ve cleaned,
                we’ll check with you before doing a re-clean.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Callout
        eyebrow="Get a quote"
        title="Tell us about your homes."
        body="How many homes, which clean you need, and when they’ll be ready. That’s all we need to get started."
      />
    </>
  );
}
