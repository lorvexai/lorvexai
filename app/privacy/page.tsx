import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LorvexAI",
  description: "Plain-English privacy policy for LorvexAI contact forms, technical data, retention, sharing, and user rights.",
  alternates: { canonical: "/privacy" }
};

const sections = [
  ["Who we are", "LorvexAI is a personal AI education, publishing, and research website by Sreedhara Reddy Kotha. Contact: lorvexai@gmail.com."],
  ["What personal data we collect", "We may collect contact form data including name, email, organisation, job title, message, and enquiry type. We may also collect technical data such as IP address, browser/device data, and server logs if analytics, hosting, or security logging is used."],
  ["Contact form data", "Contact form submissions may include name, email, organisation, job title, message, and enquiry type. Do not submit confidential, proprietary, customer, transaction, patient, clinical, employer, client, regulatory filing, supervisory, or non-public information."],
  ["Technical data", "No first-party analytics service is currently configured. Contact and subscription forms are handled by Formspree. Hosting, security, and form providers may process technical data such as IP address, browser, device, timestamp, and usage logs."],
  ["Why we process data", "We process data to respond to books, research, writing, publishing, correction, or general enquiries, maintain site security, understand website usage where permitted, and keep appropriate records."],
  ["Legal basis", "Under UK GDPR, our legal basis may include consent, legitimate interests in responding to enquiries and operating the website, and compliance with legal obligations where applicable."],
  ["How long we keep data", "Contact and subscription data is kept only for as long as reasonably needed to respond, provide requested updates, maintain appropriate records, or meet legal obligations. You can request deletion at any time."],
  ["Who data is shared with", "Personal data may be processed by the website hosting provider, Formspree as the contact-form provider, email providers, and security or professional service providers where necessary to operate the site."],
  ["International transfers", "Some third-party tools may process data outside the UK/EEA. Where relevant, appropriate safeguards should be confirmed with each provider before use."],
  ["Your rights", "You may have rights to access, correct, delete, restrict, object to processing, and request portability of your personal data. You may also withdraw consent where consent is the lawful basis."],
  ["How to contact LorvexAI", "For privacy questions, unsubscribe requests, or data-rights requests, contact lorvexai@gmail.com."],
  ["Date last updated", "19 July 2026"]
];

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6">
          {sections.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-secondary/15 bg-background/35 p-6">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 leading-relaxed text-secondary/75">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
