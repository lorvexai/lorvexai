function Dot({ cx, cy }: { cx: number; cy: number }) {
  return <circle cx={cx} cy={cy} r={4} fill="currentColor" />;
}

function Line({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={1.4} />;
}

function LinearIcon() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-full text-primary">
      <Line x1={10} y1={20} x2={90} y2={20} />
      {[10, 36.6, 63.3, 90].map((x) => <Dot key={x} cx={x} cy={20} />)}
    </svg>
  );
}

function FanOutIcon() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-full text-primary">
      <Line x1={10} y1={20} x2={35} y2={8} />
      <Line x1={10} y1={20} x2={35} y2={20} />
      <Line x1={10} y1={20} x2={35} y2={32} />
      <Line x1={35} y1={8} x2={65} y2={20} />
      <Line x1={35} y1={20} x2={65} y2={20} />
      <Line x1={35} y1={32} x2={65} y2={20} />
      <Line x1={65} y1={20} x2={90} y2={20} />
      <Dot cx={10} cy={20} />
      <Dot cx={35} cy={8} />
      <Dot cx={35} cy={20} />
      <Dot cx={35} cy={32} />
      <Dot cx={65} cy={20} />
      <Dot cx={90} cy={20} />
    </svg>
  );
}

function BranchIcon() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-full text-primary">
      <Line x1={10} y1={20} x2={40} y2={20} />
      <Line x1={40} y1={20} x2={65} y2={8} />
      <Line x1={40} y1={20} x2={65} y2={32} />
      <Dot cx={10} cy={20} />
      <rect x={36} y={16} width={8} height={8} fill="none" stroke="currentColor" strokeWidth={1.4} transform="rotate(45 40 20)" />
      <Dot cx={65} cy={8} />
      <Dot cx={65} cy={32} />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-full text-primary">
      <Line x1={12} y1={20} x2={35} y2={20} />
      <Line x1={35} y1={20} x2={58} y2={20} />
      <path d="M58 15 A 14 14 0 1 0 58 25" fill="none" stroke="currentColor" strokeWidth={1.4} />
      <Line x1={62} y1={20} x2={88} y2={20} />
      <Dot cx={12} cy={20} />
      <rect x={54} y={16} width={8} height={8} fill="none" stroke="currentColor" strokeWidth={1.4} transform="rotate(45 58 20)" />
      <Dot cx={88} cy={20} />
    </svg>
  );
}

function EventIcon() {
  return (
    <svg viewBox="0 0 100 40" className="h-10 w-full text-primary">
      <path d="M14 8 L6 22 L13 22 L9 34 L22 18 L15 18 Z" fill="currentColor" opacity={0.85} />
      <Line x1={30} y1={20} x2={55} y2={20} />
      <Line x1={55} y1={20} x2={80} y2={20} />
      <Dot cx={30} cy={20} />
      <Dot cx={55} cy={20} />
      <Dot cx={80} cy={20} />
    </svg>
  );
}

const patterns = [
  {
    Icon: LinearIcon,
    name: "Linear Sequential",
    body: "Steps execute in order, each passing output to the next.",
    used: "Document processing, report generation"
  },
  {
    Icon: FanOutIcon,
    name: "Parallel Fan-out",
    body: "Independent steps run simultaneously, then merge.",
    used: "Latency-sensitive multi-part scoring"
  },
  {
    Icon: BranchIcon,
    name: "Conditional Branching",
    body: "Routes differ based on confidence or risk classification.",
    used: "Escalation without hard-coding every case"
  },
  {
    Icon: LoopIcon,
    name: "Loop / Iterative",
    body: "Repeats until a quality threshold is met.",
    used: "Drafting, evidence compilation"
  },
  {
    Icon: EventIcon,
    name: "Event-Driven",
    body: "Triggered by an external event, runs asynchronously.",
    used: "Threshold breaches, inbound referrals"
  }
] as const;

export default function WorkflowPatternGallery() {
  return (
    <div className="corner-ticks not-prose my-8 border border-secondary/15 bg-panel/60 p-5 md:p-7">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
        Five patterns, at a glance
      </p>
      <h3 className="mt-2 text-xl font-semibold text-heading md:text-2xl">
        Every workflow here is a shape.
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {patterns.map((p) => (
          <div key={p.name} className="flex flex-col border border-secondary/15 bg-panel2/50 p-3">
            <p.Icon />
            <p className="mt-3 text-sm font-semibold text-heading">{p.name}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-secondary/70">{p.body}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-secondary/45">{p.used}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
