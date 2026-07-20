import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimers & Independence | LorvexAI",
  description: "Independence, no-advice, no-endorsement, no-confidential-information, and personal publishing disclaimers for LorvexAI.",
  alternates: { canonical: "/disclaimers" }
};

const sections = [
  {
    title: "Independent Capacity",
    body: "LorvexAI is operated independently as a personal education, publishing, and research website. The views, articles, books, diagrams, templates, reference blueprints, and educational resources published here are personal to the author/operator and do not represent the views, policies, systems, controls, data, clients, projects, or positions of any current or former employer, client, regulator, vendor, financial institution, NHS body, or affiliated organisation."
  },
  {
    title: "No Employer or Client Endorsement",
    body: "No current or former employer, client, regulator, vendor, financial institution, healthcare body, or public-sector organisation has reviewed, approved, sponsored, endorsed, or authorised LorvexAI content, books, reference blueprints, templates, or research."
  },
  {
    title: "No Confidential Information",
    body: "LorvexAI does not use confidential, proprietary, customer, transaction, regulatory filing, supervisory, employer, client, patient, clinical, or non-public information. All examples, product screens, case studies, diagrams, figures, entity names, customer records, patient records, transaction records, and operating metrics are fictional, synthetic, illustrative, or based on public information."
  },
  {
    title: "No Professional Advice",
    body: "Content on this website is provided for educational and informational purposes only. It does not constitute financial, investment, legal, regulatory, tax, accounting, clinical, medical, compliance, model validation, cybersecurity, procurement, operational resilience, or professional advice."
  },
  {
    title: "No Regulated Financial Services",
    body: "LorvexAI does not provide regulated financial services. LorvexAI does not provide investment advice, arrange investments, advise on regulated financial products, approve financial promotions, manage client money, provide credit broking, provide claims management services, or act as a regulated compliance adviser."
  },
  {
    title: "No Clinical or Medical Advice",
    body: "LorvexAI does not provide medical advice, clinical advice, diagnosis, treatment recommendations, triage decisions, patient-specific recommendations, or clinical safety certification. Any healthcare or NHS-related content is educational and conceptual unless separately governed by a formal clinical safety process."
  },
  {
    title: "Product and Prototype Notice",
    body: "LorvexAI reference blueprints, dashboards, diagrams, screenshots, and conceptual examples are educational materials only. They are not products for sale, client prototypes, consulting deliverables, production banking systems, compliance engines, regulatory reporting engines, clinical systems, medical devices, model validation systems, or regulated decision systems."
  },
  {
    title: "Regulatory and Framework References",
    body: "References to PRA, FCA, Basel, EU AI Act, DORA, UK GDPR, NHS DSPT, DCB0129, ISO 42001, SOC 2, or similar frameworks are for educational mapping and design discussion only. They do not imply certification, compliance, regulatory approval, clinical safety approval, audit approval, or legal interpretation."
  },
  {
    title: "No Services or Product Development",
    body: "LorvexAI does not offer consulting, advisory services, client delivery, product implementation, system development, regulated advice, or professional services. LorvexAI does not accept work that would conflict with employment duties, confidentiality obligations, professional obligations, regulatory responsibilities, or legal restrictions."
  }
];

export default function DisclaimersPage() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-heading md:text-5xl">Disclaimers &amp; Independence</h1>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-secondary/15 bg-background/35 p-6">
              <h2 className="text-xl font-semibold text-heading">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-secondary/75">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
