import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export default function ResearchPage() {
  return (
    <>
      <Section
        eyebrow="Research"
        title="Publishing the future of applied AI"
        description="Books, whitepapers, and guides built from real-world deployments."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Books"
            description="Long-form explorations of LLM system design and evaluation at scale."
          />
          <ServiceCard
            title="Whitepapers"
            description="Strategic research on AI risk, governance, and industry impact."
          />
          <ServiceCard
            title="Technical Guides"
            description="Implementation playbooks for enterprise AI engineering teams."
          />
        </div>
      </Section>
      <Section title="Access LorvexAI research" description="">
        <CTA />
      </Section>
    </>
  );
}

