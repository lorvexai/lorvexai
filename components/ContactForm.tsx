"use client";

import Link from "next/link";
import { useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  jobTitle: string;
  enquiryType: string;
  message: string;
  acknowledgement: boolean;
  updates: boolean;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  organisation: "",
  jobTitle: "",
  enquiryType: "",
  message: "",
  acknowledgement: false,
  updates: false
};

const ENQUIRY_TYPES = [
  "Book or research enquiry",
  "Speaking or writing enquiry",
  "Academic or publishing collaboration",
  "Correction or content feedback",
  "General enquiry"
];

const INPUT = "w-full rounded-lg border border-secondary/20 bg-background/60 px-4 py-2.5 text-sm text-white outline-none transition placeholder-secondary/35 focus:border-primary/60 focus:ring-1 focus:ring-primary/30";
const LABEL = "mb-1.5 block text-xs font-medium text-secondary/65";
const ERR = "mt-1 text-[11px] text-red-400";

export default function ContactForm() {
  const [data, setData] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(field: keyof FormData, value: string | boolean) {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: typeof errors = {};
    if (!data.name.trim()) nextErrors.name = "Required";
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = "Valid email required";
    if (!data.enquiryType) nextErrors.enquiryType = "Please select an enquiry type";
    if (!data.message.trim()) nextErrors.message = "Required";
    if (!data.acknowledgement) nextErrors.acknowledgement = "Required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const body = new FormData();
    body.append("Name", data.name);
    body.append("Email", data.email);
    body.append("Organisation", data.organisation || "-");
    body.append("Job Title", data.jobTitle || "-");
    body.append("Enquiry Type", data.enquiryType);
    body.append("Message", data.message);
    body.append("No Services Acknowledgement", data.acknowledgement ? "Accepted" : "Not accepted");
    body.append("Updates Consent", data.updates ? "Accepted" : "Not accepted");

    try {
      const res = await fetch("https://formspree.io/f/xpwzebqp", {
        method: "POST",
        body,
        headers: { Accept: "application/json" }
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-14 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
          <CheckCircle2 size={30} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Enquiry received</h3>
          <p className="mt-2 max-w-sm text-sm text-secondary/70">
            Thank you. LorvexAI will review your message and respond where appropriate. Consulting, advisory, client delivery, product implementation, and system development enquiries cannot be accepted.
          </p>
        </div>
        <button type="button" onClick={() => { setData(INITIAL); setStatus("idle"); }} className="text-sm text-secondary/50 transition hover:text-white">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className={LABEL}>Name <span className="text-red-400">*</span></label>
        <input id="name" className={INPUT} type="text" placeholder="Jane Smith" value={data.name} onChange={(e) => set("name", e.target.value)} />
        {errors.name && <p className={ERR}>{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={LABEL}>Email <span className="text-red-400">*</span></label>
          <input id="email" className={INPUT} type="email" placeholder="jane@example.com" value={data.email} onChange={(e) => set("email", e.target.value)} />
          {errors.email && <p className={ERR}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className={LABEL}>Organisation <span className="text-secondary/35">(optional)</span></label>
          <input id="organisation" className={INPUT} type="text" placeholder="Organisation name" value={data.organisation} onChange={(e) => set("organisation", e.target.value)} />
        </div>
      </div>

      <div>
        <label htmlFor="jobTitle" className={LABEL}>Job title <span className="text-secondary/35">(optional)</span></label>
        <input id="jobTitle" className={INPUT} type="text" placeholder="Role or function" value={data.jobTitle} onChange={(e) => set("jobTitle", e.target.value)} />
      </div>

      <div>
        <label htmlFor="enquiryType" className={LABEL}>How can LorvexAI help? <span className="text-red-400">*</span></label>
        <select id="enquiryType" className={INPUT} value={data.enquiryType} onChange={(e) => set("enquiryType", e.target.value)}>
          <option value="">Select an enquiry type</option>
          {ENQUIRY_TYPES.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        {errors.enquiryType && <p className={ERR}>{errors.enquiryType}</p>}
      </div>

      <div>
        <label htmlFor="message" className={LABEL}>Message <span className="text-red-400">*</span></label>
        <textarea id="message" className={INPUT} rows={5} placeholder="Share a book, research, speaking, writing, publishing, correction, or general enquiry. Please do not include confidential or restricted information." value={data.message} onChange={(e) => set("message", e.target.value)} />
        {errors.message && <p className={ERR}>{errors.message}</p>}
      </div>

      <label className="flex cursor-pointer gap-3 rounded-lg border border-secondary/15 bg-background/35 p-4">
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-primary" checked={data.acknowledgement} onChange={(e) => set("acknowledgement", e.target.checked)} />
        <span className="text-xs leading-relaxed text-secondary/70">
          I understand that LorvexAI is a personal educational and publishing website and does not offer consulting, advisory services, client delivery, product implementation, system development, regulated advice, or professional services. <span className="text-red-400">*</span>
        </span>
      </label>
      {errors.acknowledgement && <p className={ERR}>{errors.acknowledgement}</p>}

      <label className="flex cursor-pointer gap-3 rounded-lg border border-secondary/15 bg-background/35 p-4">
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-primary" checked={data.updates} onChange={(e) => set("updates", e.target.checked)} />
        <span className="text-xs leading-relaxed text-secondary/70">
          I agree to receive a response to my enquiry and, if selected, occasional LorvexAI updates. I can unsubscribe at any time.
        </span>
      </label>

      <p className="text-xs leading-relaxed text-secondary/55">
        We use your details to respond to your enquiry. See our <Link href="/privacy" className="text-primary underline underline-offset-2">Privacy Policy</Link> for how we handle personal data.
      </p>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          <AlertCircle size={14} />
          Something went wrong. Please try again or email lorvexai@gmail.com.
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary gap-2 text-sm disabled:cursor-not-allowed disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Enquiry"}
        {status !== "sending" && <ArrowRight size={14} />}
      </button>
    </form>
  );
}
