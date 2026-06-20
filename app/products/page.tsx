import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "No Products Offered | LorvexAI",
  description: "LorvexAI does not offer products, product implementation, client prototypes, or system development. Educational reference blueprints are available for reading.",
  alternates: { canonical: "/products" }
};

export default function ProductsBoundaryPage() {
  return (
    <>
      <Section
        eyebrow="Boundary statement"
        title="LorvexAI does not offer products"
        description="LorvexAI is a personal education, publishing, and research website. It does not offer products for sale, product implementation, client prototypes, consulting deliverables, or system development for others."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/blueprints" className="btn-primary text-sm">
            View Reference Blueprints
            <ArrowRight size={15} />
          </Link>
          <Link href="/books" className="btn-outline text-sm">
            Explore Books
          </Link>
        </div>
      </Section>
      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
    </>
  );
}
