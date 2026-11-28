import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | LorvexAI",
  description: "Cookie policy for LorvexAI, including essential cookies and optional analytics cookie consent requirements.",
  alternates: { canonical: "/cookies" }
};

export default function CookiesPage() {
  return (
    <section className="section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-heading md:text-5xl">Cookie Policy</h1>
        <div className="mt-10 space-y-6">
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-heading">Current cookie position</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">
              This site sets no advertising or tracking cookies. It uses only strictly necessary storage, plus Cloudflare Web Analytics, a cookieless service that counts visits without building visitor profiles or tracking people across sites. Because it sets no cookies, no consent banner is needed. If non-essential cookies or similar tools are added later, this page will be updated and consent will be requested first.</p>
          </article>
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-heading">Essential cookies</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">
              Essential cookies are used only where required to make the website work, protect the site, or remember necessary preferences.
            </p>
          </article>
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-heading">Last updated</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">28 November 2026</p>
          </article>
        </div>
      </div>
    </section>
  );
}
