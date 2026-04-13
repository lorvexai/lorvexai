"use client";

import { useState } from "react";
import { MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwzebqp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
          <CheckCircle2 size={28} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="max-w-sm text-sm text-secondary/70">
          Thanks for reaching out. We&apos;ll review your message and come back to you within 2 business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-primary hover:text-white transition"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-secondary/70">Full Name</label>
          <input id="name" name="name" type="text"
            className="rounded-xl border border-secondary/20 bg-background/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
            placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm text-secondary/70">Company</label>
          <input id="company" name="company" type="text"
            className="rounded-xl border border-secondary/20 bg-background/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
            placeholder="Your organisation" />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm text-secondary/70">Work Email</label>
        <input id="email" name="email" type="email"
          className="rounded-xl border border-secondary/20 bg-background/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
          placeholder="you@company.com" required />
      </div>
      <div className="grid gap-2">
        <label htmlFor="interest" className="text-sm text-secondary/70">What are you interested in?</label>
        <select id="interest" name="interest"
          className="rounded-xl border border-secondary/20 bg-background/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30">
          <option value="">Select an engagement type</option>
          <option>Agentic AI Blueprint Sprint</option>
          <option>LLM Engineering Engagement</option>
          <option>AI Risk &amp; Governance Audit</option>
          <option>Regulatory Intelligence Platform Pilot</option>
          <option>NHS Flow Optimizer Pilot</option>
          <option>Treasury Sentinel Pilot</option>
          <option>General Enquiry</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm text-secondary/70">Tell us about your project</label>
        <textarea id="message" name="message" rows={5}
          className="rounded-xl border border-secondary/20 bg-background/60 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
          placeholder="What are you trying to achieve? What does success look like?" required />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle size={15} />
          Something went wrong. Please try again or email us directly at hello@lorvex.ai
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-fit gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <MessageSquare size={16} />
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowRight size={16} />}
      </button>
    </form>
  );
}
