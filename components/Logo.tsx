import { useId } from "react";

/** Text-based logo: a simple V mark plus the LorvexAI wordmark. Readable at any size, works in light and dark themes. */
export default function Logo({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`lv-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#E1B133" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="#000A25" />
        <path d="M8 9l8 15 8-15" fill="none" stroke={`url(#lv-${id})`} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-heading" style={{ fontFamily: "var(--font-space)" }}>
        Lorvex<span className="text-primary">AI</span>
      </span>
    </span>
  );
}
