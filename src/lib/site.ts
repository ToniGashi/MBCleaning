export const siteConfig = {
  name: "MB Cleaning",
  descriptor: "Construction Cleaning",
  title: "MB Cleaning | Construction Cleaning in Charleston & Summerville",
  description:
    "All-American, woman-owned construction cleaning for Charleston-area builders and general contractors. Rough, final, and touch-up support built around the schedule.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+18434696373",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "(843) 469-6373",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  region: "Charleston & Summerville, South Carolina",
  areas: [
    "Charleston",
    "Summerville",
    "North Charleston",
    "Goose Creek",
    "Moncks Corner",
    "Ridgeville",
  ],
} as const;

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/service-area", label: "Service area" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const representativeAlt =
  "Public community marketing photo used as a placeholder; not an MB Cleaning project photograph.";

export const workPhotos = {
  kitchen: {
    src: "/images/work/kitchen-final-v2.webp",
    alt: "Blue microfiber cloth and spray bottle on a quartz kitchen island during a final clean",
  },
  film: {
    src: "/images/work/detail-film-v2.webp",
    alt: "Gloved hands peeling protective film off a new stainless steel appliance",
  },
  rough: {
    src: "/images/work/rough-clean-v2.webp",
    alt: "Shop vacuum and ladder on dusty new wood floors during a rough clean",
  },
  walkthrough: {
    src: "/images/work/walkthrough-v2.webp",
    alt: "Empty finished living room with oak floors ready for a homeowner walkthrough",
  },
  windows: {
    src: "/images/work/windows-v2.webp",
    alt: "Squeegee and cleaning caddy on a new window looking out onto Lowcountry live oaks",
  },
  entry: {
    src: "/images/work/entry-ready-v2.webp",
    alt: "Cleaning supplies neatly set by the open front door of a finished new home",
  },
} as const;

export const projectCommunities = [
  {
    name: "Parker’s Preserve",
    locality: "Ridgeville",
    image: "/images/communities/parkers-preserve-v2.webp",
    alt: representativeAlt,
    featured: true,
  },
  {
    name: "Oakley Pointe",
    locality: "Moncks Corner",
    image: "/images/communities/oakley-pointe-v2.webp",
    alt: representativeAlt,
    featured: true,
  },
  {
    name: "Coosaw Creek",
    locality: "North Charleston",
    image: "/images/communities/coosaw-creek-v2.webp",
    alt: representativeAlt,
    featured: true,
  },
  {
    name: "Swygerts Landing",
    locality: "Johns Island",
    image: "/images/communities/swygerts-landing-v2.webp",
    alt: representativeAlt,
    featured: false,
  },
  {
    name: "Grand Oaks Preserve",
    locality: "Ladson",
    image: "/images/communities/grand-oaks-preserve-v2.webp",
    alt: representativeAlt,
    featured: false,
  },
  {
    name: "Carolina Bay",
    locality: "Charleston",
    image: "/images/communities/carolina-bay-v2.webp",
    alt: representativeAlt,
    featured: false,
  },
  {
    name: "Timothy Lakes",
    locality: "Ridgeville",
    image: "/images/communities/timothy-lakes-v2.webp",
    alt: representativeAlt,
    featured: false,
  },
  {
    name: "Strawberry Lane",
    locality: "Moncks Corner",
    image: "/images/communities/strawberry-lane-v2.webp",
    alt: representativeAlt,
    featured: false,
  },
  {
    name: "The Meadows",
    locality: "Summerville",
    image: "/images/communities/the-meadows-v2.webp",
    alt: representativeAlt,
    featured: false,
  },
  {
    name: "Wisteria at Cane Bay",
    locality: "Summerville",
    image: "/images/communities/wisteria-at-cane-bay-v2.webp",
    alt: representativeAlt,
    featured: true,
  },
  {
    name: "The Landings at Montague",
    locality: "Goose Creek",
    image: "/images/communities/landings-at-montague-v2.webp",
    alt: representativeAlt,
    featured: true,
  },
  {
    name: "Nowell",
    locality: "Daniel Island",
    image: "/images/communities/nowell-v2.webp",
    alt: representativeAlt,
    featured: true,
  },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function telHref() {
  return siteConfig.phone ? `tel:${siteConfig.phone}` : "/contact#inquiry";
}

export function smsHref(message = "Hi MB Cleaning, I’d like to discuss a construction cleaning project.") {
  if (!siteConfig.phone) return "/contact#inquiry";
  return `sms:${siteConfig.phone}?&body=${encodeURIComponent(message)}`;
}

