import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Operations Research | LorvexAI",
  description: "Educational healthcare operations research and conceptual AI reference architectures for flow intelligence, queue analytics, and human-reviewed support workflows.",
  alternates: { canonical: "/industries/healthcare" }
};

const topics = [
  "Conceptual healthcare-operations blueprints for flow visibility",
  "Waiting-list and capacity analytics using synthetic examples",
  "Human-reviewed support workflows rather than clinical decisioning",
  "Clinical safety, data protection, procurement, and information governance considerations before real use",
  "No medical advice, diagnosis, treatment recommendation, triage decision, or clinical safety certification"
];

export default function HealthcareIndustryPage() {
  return (
    <>
      <Section
        eyebrow="Healthcare operations research"
        title="Conceptual AI patterns for healthcare operations"
        description="Healthcare-related content on LorvexAI is educational and conceptual. It is not clinical advice, medical advice, a clinical triage system, a medical device, or a patient-specific decision system."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="flex items-start gap-3 rounded-lg border border-secondary/15 bg-background/35 p-5">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-secondary/75">{topic}</p>
            </div>
          ))}
        </div>
        <Link href="/products" className="btn-primary mt-8 text-sm">
          View Blueprints
          <ArrowRight size={15} />
        </Link>
      </Section>
      <section className="section pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <LegalDisclaimerBanner />
        </div>
      </section>
    </>
  );
}
