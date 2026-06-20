import Link from "next/link";

export const shortDisclaimer =
  "LorvexAI content is educational and informational. It does not constitute financial, investment, legal, regulatory, tax, clinical, compliance, or professional advice.";

export const fullDisclaimer =
  "LorvexAI is an independent education, publishing, research, and AI architecture platform. Content is for general educational and informational purposes only and does not constitute financial, investment, legal, regulatory, tax, clinical, compliance, model validation, cybersecurity, or professional advice. LorvexAI is not affiliated with, endorsed by, sponsored by, or connected to any current or former employer, client, regulator, financial institution, NHS body, vendor, or other organisation.";

export default function LegalDisclaimerBanner({ compact = false }: { compact?: boolean }) {
  return (
    <aside className="rounded-lg border border-secondary/15 bg-background/50 p-4 text-xs leading-relaxed text-secondary/70">
      <p>{compact ? shortDisclaimer : fullDisclaimer}</p>
      <Link href="/disclaimers" className="mt-2 inline-flex font-semibold text-primary hover:text-white">
        Read disclaimers and independence statement
      </Link>
    </aside>
  );
}
