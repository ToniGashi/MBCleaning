import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/content";
import { ContactActions } from "@/components/site-chrome";
import { workPhotos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page is not on the schedule."
        intro="This page may have moved. Head back home, or call or text us and we’ll help you find what you need."
        image={workPhotos.walkthrough}
        actions={<ContactActions compact />}
      />
      <section className="section">
        <div className="shell not-found-actions">
          <div className="contact-actions">
            <Link className="button button-primary" href="/">
              Return home
            </Link>
            <Link className="button button-secondary" href="/services">
              View services
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
