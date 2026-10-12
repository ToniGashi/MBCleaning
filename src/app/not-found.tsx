import Link from "next/link";
import { PageHero } from "@/components/content";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 · Page not found"
        title="This page is not on the schedule."
        intro="This page may have moved. Head back home, or give us a call and we’ll help you find what you need."
      />
      <section className="section">
        <div className="shell contact-actions">
          <Link className="button button-primary" href="/">Return home</Link>
          <Link className="button button-secondary" href="/services">View services</Link>
        </div>
      </section>
    </>
  );
}

