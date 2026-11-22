/** Logo: an L and a V sharing one shape, a teal check and a checkpoint node, plus the LorvexAI wordmark. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="14 14 170 170" aria-hidden="true" focusable="false">
        <rect x="20" y="22" width="36" height="148" fill="#0A1535" />
        <rect x="20" y="134" width="84" height="36" fill="#0A1535" />
        <line x1="66" y1="56" x2="112" y2="138" stroke="#0A1535" strokeWidth="22" />
        <line x1="112" y1="138" x2="176" y2="30" stroke="#19BDB3" strokeWidth="22" />
        <circle cx="112" cy="140" r="21" fill="#FFFFFF" />
        <circle cx="112" cy="140" r="14" fill="#19BDB3" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-heading" style={{ fontFamily: "var(--font-space)" }}>
        Lorvex<span style={{ color: "#19BDB3" }}>AI</span>
      </span>
    </span>
  );
}
