import Section from "@/components/Section";
import CTA from "@/components/CTA";
import MethodologySection from "@/components/MethodologySection";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import DeliveryFrameworkDiagram from "@/components/DeliveryFrameworkDiagram";

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="LorveAI Technologies Ltd"
        description="We partner with ambitious teams to deploy intelligent systems that scale across the enterprise."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">Mission</h3>
            <p className="mt-3 text-secondary/80">
              Deliver enterprise AI systems that transform how organizations
              reason and automate.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">Vision</h3>
            <p className="mt-3 text-secondary/80">
              Build intelligent systems that augment human decision making.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Operating Principles"
        title="Engineering excellence and trusted AI systems"
        description="We blend research depth with production pragmatism."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-white">
              Responsible by Design
            </h4>
            <p className="mt-3 text-sm text-secondary/80">
              Governance and safety are embedded across every stage of delivery.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-white">
              Performance at Scale
            </h4>
            <p className="mt-3 text-sm text-secondary/80">
              Systems optimized for latency, reliability, and operational cost.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-white">
              Research-Driven
            </h4>
            <p className="mt-3 text-sm text-secondary/80">
              We ship with the latest advances in evaluation, agentic design,
              and LLM tooling.
            </p>
          </div>
        </div>
      </Section>
      <Section
        eyebrow="Architecture"
        title="AI Capabilities"
        description="A scalable architecture that connects enterprise data, LLMs, and governance controls."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <ArchitectureDiagram />
          <DeliveryFrameworkDiagram />
        </div>
      </Section>
      <MethodologySection />
      <Section title="Partner with LorvexAI" description="">
        <CTA />
      </Section>
    </>
  );
}

