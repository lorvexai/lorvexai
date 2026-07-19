import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, CalendarCheck, Clock, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | LorvexAI",
  description: "Contact LorvexAI about books, research, speaking, writing, publishing, corrections, or general enquiries.",
  alternates: { canonical: "/contact" }
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    detail: "lorvexai@gmail.com",
    sub: "For books, research, writing, publishing, and general enquiries",
    href: "mailto:lorvexai@gmail.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    detail: "Sreedhara Reddy Kotha",
    sub: "Follow for educational AI architecture updates",
    href: "https://www.linkedin.com/in/sreekotha/"
  },
  {
    icon: CalendarCheck,
    title: "Boundaries",
    detail: "No consulting or delivery work",
    sub: "Educational publishing site only",
    href: "#form"
  }
];

const engagementTypes = [
  "Book or research enquiry",
  "Speaking or writing enquiry",
  "Academic or publishing collaboration",
  "Correction or content feedback",
  "General enquiry"
];

export default function ContactPage() {
  return (
    <>
      <section className="section pb-6 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-lg border border-primary/30 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Get In Touch</p>
                <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
                  <span className="text-white">Contact </span>
                  <span className="text-gradient">LorvexAI</span>
                </h1>
                <p className="mt-5 max-w-2xl text-secondary/80">
                  Reach out about books, research, speaking, writing, publishing, or corrections. I read everything myself.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {contactMethods.map((m) =>
                    m.href ? (
                      <a
                        key={m.title}
                        href={m.href}
                        target={m.href.startsWith("http") ? "_blank" : undefined}
                        rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="glass flex flex-col gap-2 rounded-lg border border-primary/20 p-4 transition hover:border-primary/45"
                      >
                        <m.icon size={18} className="text-primary" />
                        <p className="text-sm font-semibold text-white">{m.title}</p>
                        <p className="text-xs text-primary">{m.detail}</p>
                        <p className="text-xs text-secondary/60">{m.sub}</p>
                      </a>
                    ) : (
                      <div
                        key={m.title}
                        className="glass flex flex-col gap-2 rounded-lg border border-primary/20 p-4"
                      >
                        <m.icon size={18} className="text-primary" />
                        <p className="text-sm font-semibold text-white">{m.title}</p>
                        <p className="text-xs text-primary">{m.detail}</p>
                        <p className="text-xs text-secondary/60">{m.sub}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.22em] text-secondary/55">How we can help</p>
                {engagementTypes.map((label) => (
                  <div key={label} className="flex items-start gap-3 rounded-lg border border-secondary/15 bg-background/30 px-4 py-3">
                    <ArrowRight size={14} className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="section pt-4">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr]">
            <div className="glass rounded-lg border border-secondary/20 p-8">
              <p className="mb-1 font-mono text-xs uppercase tracking-[0.28em] text-primary">Contact Form</p>
              <h2 className="mb-6 text-2xl font-semibold text-white">Send an enquiry</h2>
              <ContactForm />
            </div>

            <div className="flex flex-col gap-5">
              <div className="glass rounded-lg border border-primary/20 p-6">
                <Clock size={20} className="mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-white">Response and review</h3>
                <p className="mt-2 text-sm text-secondary/70">
                  Enquiries are reviewed for fit with the site&apos;s personal educational and publishing purpose.
                </p>
              </div>
              <div className="glass rounded-lg border border-primary/20 p-6">
                <h3 className="text-lg font-semibold text-white">What happens next?</h3>
                <ol className="mt-4 space-y-3">
                  {[
                    "I read the enquiry myself",
                    "I reply where it's a good fit for the site",
                    "I can't take on consulting, advisory, or delivery work",
                    "Please don't send confidential or restricted information"
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-secondary/70">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-[10px] font-bold text-primary">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-xs leading-relaxed text-secondary/45">
                Contact form provider: [INSERT FORM HANDLER PROVIDER]. See the <Link href="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</Link> for data handling details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
