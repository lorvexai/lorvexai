import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LorvexAI",
  description: "Plain-English privacy policy for LorvexAI contact forms, technical data, retention, sharing, and user rights.",
  alternates: { canonical: "/privacy" }
};

const sections = [
  ["Who we are", "LorvexAI is a personal AI education, publishing, and research website by Sreedhara Reddy Kotha. Contact: [INSERT CONTACT EMAIL]."],
  ["What personal data we collect", "We may collect contact form data including name, email, organisation, job title, message, and enquiry type. We may also collect technical data such as IP address, browser/device data, and server logs if analytics, hosting, or security logging is used."],
  ["Contact form data", "Contact form submissions may include name, email, organisation, job title, message, and enquiry type. Do not submit confidential, proprietary, customer, transaction, patient, clinical, employer, client, regulatory filing, supervisory, or non-public information."],
  ["Technical data", "Analytics provider: [INSERT ANALYTICS PROVIDER OR \"No analytics currently used\"]. Form handler provider: [INSERT FORM HANDLER PROVIDER]. Hosting and form providers may process technical data such as IP address, browser, device, timestamp, and usage logs."],
  ["Why we process data", "We process data to respond to books, research, writing, publishing, correction, or general enquiries, maintain site security, understand website usage where permitted, and keep appropriate records."],
  ["Legal basis", "Under UK GDPR, our legal basis may include consent, legitimate interests in responding to enquiries and operating the website, and compliance with legal obligations where applicable."],
  ["How long we keep data", "Retention period: [INSERT RETENTION PERIOD]. We aim to keep personal data only for as long as needed for the purpose collected, unless a longer period is required by law or appropriate record-keeping obligations."],
  ["Who data is shared with", "Personal data may be shared with hosting, contact form, email, analytics, security, or professional service providers where needed. Current provider details should be inserted here: [INSERT FORM HANDLER PROVIDER] and [INSERT ANALYTICS PROVIDER OR \"No analytics currently used\"]."],
  ["International transfers", "Some third-party tools may process data outside the UK/EEA. Where relevant, appropriate safeguards should be confirmed with each provider before use."],
  ["Your rights", "You may have rights to access, correct, delete, restrict, object to processing, and request portability of your personal data. You may also withdraw consent where consent is the lawful basis."],
  ["How to contact LorvexAI", "For privacy questions or rights requests, contact [INSERT CONTACT EMAIL]."],
  ["Date last updated", "20 June 2026"]
];

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-heading md:text-5xl">Privacy Policy</h1>
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
