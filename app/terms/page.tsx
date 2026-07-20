import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | LorvexAI",
  description: "Terms of use for LorvexAI educational content, prototypes, external links, warranties, and liability.",
  alternates: { canonical: "/terms" }
};

const sections = [
  ["Website use", "You may use this website for lawful personal, professional, and educational purposes. You must not misuse the site, attempt unauthorised access, or submit confidential, restricted, unlawful, or harmful material."],
  ["Educational content only", "LorvexAI content is provided for general educational and informational purposes. It is not tailored to your organisation, controls, regulatory status, systems, patients, customers, portfolios, or obligations."],
  ["No professional advice", "Nothing on this site constitutes financial, investment, legal, regulatory, tax, accounting, clinical, medical, compliance, model validation, cybersecurity, procurement, operational resilience, or professional advice."],
  ["No reliance", "You should not rely on website content as a basis for regulated, legal, financial, clinical, operational, procurement, or compliance decisions. Independent professional advice and validation should be obtained where appropriate."],
  ["Intellectual property", "Unless otherwise stated, LorvexAI owns or licenses the text, diagrams, templates, product concepts, and other materials on this site. You may not copy, reproduce, or commercially exploit content without permission, except as permitted by law."],
  ["External links", "External links are provided for convenience only. LorvexAI is not responsible for external websites, their availability, security, content, privacy practices, or accuracy."],
  ["Reference blueprint limitations", "Reference blueprints, dashboards, screenshots, diagrams, and conceptual examples are educational materials only. They are not products for sale, client prototypes, consulting deliverables, production systems, regulated decision systems, compliance engines, clinical systems, medical devices, or certified control frameworks."],
  ["No services offered", "LorvexAI does not offer consulting, advisory services, client delivery, product implementation, system development, regulated advice, or professional services."],
  ["No warranties", "The website and its content are provided as is and as available. LorvexAI does not warrant that the site will be uninterrupted, error-free, complete, current, secure, or suitable for any particular purpose."],
  ["Limitation of liability", "To the fullest extent permitted by law, LorvexAI excludes liability for loss or damage arising from use of, or reliance on, this website or its content. Nothing in these terms excludes liability that cannot be excluded under applicable law."],
  ["Contact details", "Contact: [INSERT CONTACT EMAIL]."],
  ["Last updated", "20 June 2026"]
];

export default function TermsPage() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-heading md:text-5xl">Terms of Use</h1>
        <div className="mt-10 space-y-6">
          {sections.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-secondary/15 bg-background/35 p-6">
              <h2 className="text-xl font-semibold text-heading">{title}</h2>
              <p className="mt-3 leading-relaxed text-secondary/75">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
