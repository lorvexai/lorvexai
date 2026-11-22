"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { NEWSLETTER_NAME, NEWSLETTER_URL } from "@/utils/site";

/**
 * Email sign-up. When NEWSLETTER_URL is set (Substack, Beehiiv, Buttondown...), the address is passed to the
 * provider's subscribe page as ?email= so readers only confirm there. Until then it points to the contact page.
 */
export default function SubscribeForm({ id = "subscribe-email" }: { id?: string }) {
  const [email, setEmail] = useState("");

  if (!NEWSLETTER_URL) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/contact" className="btn-primary min-h-11 text-sm">
          <Mail size={15} aria-hidden="true" />
          Ask to be notified at launch
        </Link>
        <span className="text-sm text-secondary/80">{NEWSLETTER_NAME} opens for sign-ups soon.</span>
      </div>
    );
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const sep = NEWSLETTER_URL.includes("?") ? "&" : "?";
    window.open(`${NEWSLETTER_URL}${sep}email=${encodeURIComponent(email)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="min-h-11 flex-1 rounded-full border border-secondary/30 bg-background/60 px-5 text-base text-heading placeholder-secondary/65 outline-none focus:border-primary"
      />
      <button type="submit" className="btn-primary min-h-11 text-sm">
        Subscribe
      </button>
    </form>
  );
}
