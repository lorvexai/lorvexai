import Link from "next/link";

export const shortDisclaimer =
  "LorvexAI is a personal educational and publishing website. It does not offer consulting, advisory services, client delivery, product implementation, system development, regulated advice, or professional services.";

export const fullDisclaimer =
  "LorvexAI is a personal AI education, publishing, and research website by Sreedhara Reddy Kotha. Content is for general educational and informational purposes only and does not constitute financial, investment, legal, regulatory, tax, clinical, compliance, model validation, cybersecurity, or professional advice. LorvexAI does not offer consulting, advisory services, client delivery, product implementation, system development, regulated advice, or professional services. LorvexAI is not affiliated with, endorsed by, sponsored by, or connected to any current or former employer, client, regulator, financial institution, NHS body, vendor, or other organisation.";

export default function LegalDisclaimerBanner({ full = false }: { full?: boolean }) {
  if (full) {
    return (
      <aside className="rounded-lg border border-secondary/15 bg-background/50 p-4 text-sm leading-relaxed text-secondary/75">
        <p>{fullDisclaimer}</p>
      </aside>
    );
  }
  return (
    <p className="text-sm leading-relaxed text-secondary/75">
      Educational content only. Not financial, legal, regulatory or professional advice. Independent of any employer, client
      or regulator.
    </p>
  );
}
