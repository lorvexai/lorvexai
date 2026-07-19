"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");

    const body = new FormData();
    body.append("Email", email);
    body.append("Enquiry Type", "Research newsletter subscription");
    body.append("Updates Consent", "Accepted");
    body.append("Source", "LorvexAI subscription form");

    try {
      const response = await fetch("https://formspree.io/f/xpwzebqp", {
        method: "POST",
        body,
        headers: { Accept: "application/json" }
      });
      setStatus(response.ok ? "success" : "error");
      if (response.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`flex items-center gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 ${compact ? "p-4" : "p-5"}`} role="status">
        <CheckCircle2 size={20} className="shrink-0 text-emerald-300" />
        <div>
          <p className="font-semibold text-white">You are on the research list.</p>
          <p className="mt-1 text-sm text-secondary/75">Thank you. New LorvexAI writing will arrive occasionally.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={subscribe} className="w-full">
      <div className={`flex flex-col gap-3 ${compact ? "sm:flex-row" : "md:flex-row"}`}>
        <label className="sr-only" htmlFor={compact ? "newsletter-email-compact" : "newsletter-email"}>Email address</label>
        <input
          id={compact ? "newsletter-email-compact" : "newsletter-email"}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="min-h-12 flex-1 rounded-full border border-secondary/25 bg-background/70 px-5 text-sm text-white outline-none transition placeholder:text-secondary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button type="submit" disabled={status === "sending"} className="btn-primary min-h-12 shrink-0 text-sm disabled:cursor-wait disabled:opacity-70">
          {status === "sending" ? "Subscribing..." : "Subscribe"}
          {status !== "sending" && <ArrowRight size={15} aria-hidden="true" />}
        </button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-secondary/65">
        Occasional research updates. Unsubscribe at any time. See the <Link href="/privacy" className="text-primary underline underline-offset-2">privacy policy</Link>.
      </p>
      {status === "error" && <p className="mt-2 text-sm text-red-300" role="alert">Subscription could not be completed. Please try again or email lorvexai@gmail.com.</p>}
    </form>
  );
}
