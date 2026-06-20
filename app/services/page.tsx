import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "No Services Offered | LorvexAI",
  description: "LorvexAI is a personal education, publishing, and research website. Consulting, advisory, client delivery, product implementation, and system development services are not offered.",
  alternates: { canonical: "/services" }
};

const boundaries = [
  "No consulting or advisory services",
  "No client delivery or implementation work",
  "No product development for others",
  "No regulated financial, legal, tax, clinical, compliance, or professional advice",
  "No use of confidential employer, client, customer, patient, regulatory, supervisory, or proprietary information"
];

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Boundary statement"
        title="LorvexAI does not offer services"
        description="LorvexAI is a personal AI education, publishing, and research website by Sreedhara Reddy Kotha. It exists for books, research notes, technical writing, educational diagrams, and reference blueprints only."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {boundaries.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg border border-secondary/15 bg-background/35 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-secondary/75">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/books" className="btn-primary text-sm">
            Explore Books
            <ArrowRight size={15} />
          </Link>
          <Link href="/research" className="btn-outline text-sm">
            Read Research
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
