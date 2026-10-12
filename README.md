# MB Cleaning website

A mobile-first lead-generation website and brand foundation for MB Cleaning, a construction-cleaning company serving builders and general contractors in the Charleston and Summerville area.

## Technology

- Next.js 16.4 App Router
- React 19.3
- TypeScript
- Server Components and static rendering by default
- Next.js Metadata API, metadata file conventions, and typed JSON-LD
- CSS design system with no client-side UI framework

The implementation was checked against the current official Next.js documentation on October 11, 2026:

- [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [`generateMetadata` and metadata fields](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [`robots.txt`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [`sitemap.xml`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [JSON-LD](https://nextjs.org/docs/app/guides/json-ld)

Re-check official version histories before future SEO-related API changes. Do not copy older Pages Router examples into this App Router project.

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Required configuration

Copy `.env.example` to `.env.local` and replace every example value:

- `NEXT_PUBLIC_SITE_URL` — final canonical HTTPS domain
- `NEXT_PUBLIC_PHONE` — machine-readable call/SMS number
- `NEXT_PUBLIC_PHONE_DISPLAY` — human-readable number
- `NEXT_PUBLIC_EMAIL` — current public business email
- `INQUIRY_WEBHOOK_URL` — HTTPS endpoint that receives form submissions

The site intentionally does not use the outdated address or phone discovered during research. Until a verified number is configured, call/text buttons route to the inquiry section. The inquiry route returns a clear configuration error until a webhook is supplied.

## Content structure

- `docs/business/owner-provided-facts.md` — permanent source of truth for facts supplied directly by MB Cleaning’s owner
- `docs/research/market-audit.md` — public-footprint, competitor, positioning, and claims audit
- `docs/brand/brand-guidelines.md` — verbal and visual brand system
- `docs/brand/capability-statement.md` — working sales and qualification copy
- `src/lib/site.ts` — central public business configuration
- `src/app` — routes, metadata files, structured content, and inquiry endpoint
- `src/components` — site chrome, content patterns, structured data, and form UI
- `public/images/communities` — original representative neighborhood imagery generated for the
  visual showcase; these are not documentary MB Cleaning project photographs and should be
  replaced over time with approved authentic project images

## Launch checklist

### Business facts

- [x] Add the current phone and SMS number: (843) 469-6373.
- [ ] Add the current email and canonical domain.
- [ ] Confirm legal name, public name, and service-area-business setup.
- [ ] Confirm every service, equipment, capacity, insurance, and response-time claim.
- [ ] Obtain written permission before naming Eastwood Homes or any other customer.
- [ ] Add approved project photography, testimonials, and references.
- [ ] Connect and test the inquiry webhook end to end.

### Search and local visibility

- [ ] Create or reclaim the Google Business Profile with consistent details.
- [ ] Correct the stale Magwood Drive address while retaining the current 843-469-6373 phone number.
- [ ] Verify the production domain in Google Search Console.
- [ ] Submit `/sitemap.xml` and inspect `/robots.txt`.
- [ ] Run Google Rich Results Test and Schema Markup Validator on production HTML.
- [ ] Inspect every canonical, title, description, Open Graph image, and index directive.
- [ ] Add privacy-respecting analytics and events for call, SMS, and form conversions.

### Quality and deployment

- [ ] Deploy with all production environment variables.
- [ ] Test call and SMS links on iOS and Android.
- [ ] Test form success, invalid input, webhook failure, and spam honeypot behavior.
- [ ] Run Lighthouse on Home, Services, Service Area, and Contact.
- [ ] Verify keyboard navigation, focus visibility, contrast, and reduced motion.
- [ ] Check mobile layouts at 320, 375, 768, and 1024 pixels.
- [ ] Confirm the rendered HTML contains crawlable content with JavaScript disabled.
- [ ] Check all links and run `npm run build` immediately before launch.

## Deployment

The app can be deployed to Vercel or any platform that supports Next.js 16 and server route handlers. Configure environment variables in the deployment platform; do not commit `.env.local`.
