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
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Cookie Policy</h1>
        <div className="mt-10 space-y-6">
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-white">Current cookie position</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">
              This site should use only strictly necessary cookies unless analytics, tracking, embedded videos, scheduling widgets, pixels, or similar non-essential tools are added. Analytics provider: [INSERT ANALYTICS PROVIDER OR "No analytics currently used"].
            </p>
          </article>
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-white">Essential cookies</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">
              Essential cookies are used only where required to make the website work, protect the site, or remember necessary preferences.
            </p>
          </article>
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-white">Optional analytics cookies</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">
              If analytics cookies are added, non-essential scripts must not load until consent is given. The consent banner should say: We use essential cookies to make this site work. With your consent, we may also use analytics cookies to understand how the site is used. You can accept, reject, or manage your preferences.
            </p>
            <p className="mt-3 leading-relaxed text-secondary/75">
              Consent controls should include: Accept optional cookies, Reject optional cookies, and Manage preferences.
            </p>
          </article>
          <article className="rounded-lg border border-secondary/15 bg-background/35 p-6">
            <h2 className="text-xl font-semibold text-white">Last updated</h2>
            <p className="mt-3 leading-relaxed text-secondary/75">20 June 2026</p>
          </article>
        </div>
      </div>
    </section>
  );
}
