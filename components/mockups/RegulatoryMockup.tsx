import MockupFrame from "./MockupFrame";

const obligations = [
  { ref: "Public Framework A", title: "Model Risk Governance Policy", status: "Draft", evidence: "Template", risk: "High" },
  { ref: "Public Framework B", title: "Capital Adequacy Buffer", status: "Draft", evidence: "Template", risk: "High" },
  { ref: "Public Framework C", title: "Consumer Outcome Testing", status: "Review", evidence: "Pending", risk: "Medium" },
  { ref: "Public Framework D", title: "Operational Resilience Testing", status: "Draft", evidence: "Template", risk: "Medium" },
  { ref: "Public Framework E", title: "Disclosure and Reporting Templates", status: "Gap", evidence: "Missing", risk: "High" }
];

const sources = [
  { name: "Public source A", count: 847, color: "bg-blue-400" },
  { name: "Public source B", count: 612, color: "bg-violet-400" },
  { name: "Public source C", count: 394, color: "bg-primary" },
  { name: "Public source D", count: 231, color: "bg-orange-400" }
];

const statusStyle: Record<string, string> = {
  Draft: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Review: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  Gap: "border-red-400/30 bg-red-400/10 text-red-300"
};

const evidenceStyle: Record<string, string> = {
  Template: "text-emerald-400",
  Pending: "text-yellow-400",
  Missing: "text-red-400"
};

const riskStyle: Record<string, string> = {
  High: "text-red-300",
  Medium: "text-orange-300",
  Low: "text-emerald-300"
};

export default function RegulatoryMockup() {
  return (
    <MockupFrame title="app.lorvexai.com/regulatory-intelligence">
      <div className="flex items-center justify-between border-b border-secondary/10 px-4 py-2.5" style={{ background: "rgba(12,25,48,0.9)" }}>
        <div className="flex gap-4">
          {["Dashboard", "Obligations", "Controls", "Evidence", "Reports"].map((t, i) => (
            <span key={t} className={`text-xs ${i === 1 ? "border-b border-primary pb-1 text-heading" : "text-secondary/45"}`}>{t}</span>
          ))}
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
          Synthetic demo data - illustrative only
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto] divide-x divide-secondary/10">
        <div className="p-4">
          <div className="mb-4 grid grid-cols-4 gap-2">
            {[
              { label: "Obligation Candidates", value: "2,847", color: "text-heading" },
              { label: "Draft Mappings", value: "2,401", color: "text-emerald-300" },
              { label: "Review Gaps", value: "127", color: "text-red-300" },
              { label: "Template Coverage", value: "94%", color: "text-primary" }
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-secondary/10 bg-background/40 p-2.5 text-center">
                <p className={`text-base font-bold ${m.color}`}>{m.value}</p>
                <p className="mt-0.5 text-[9px] text-secondary/45">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-secondary/10">
            <div className="grid grid-cols-[1fr_1.4fr_auto_auto_auto] gap-x-3 border-b border-secondary/10 bg-background/60 px-3 py-1.5">
              {["Ref", "Candidate", "Status", "Evidence", "Risk"].map((h) => (
                <span key={h} className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35">{h}</span>
              ))}
            </div>
            {obligations.map((o, i) => (
              <div key={o.ref} className={`grid grid-cols-[1fr_1.4fr_auto_auto_auto] items-center gap-x-3 px-3 py-2 ${i % 2 === 0 ? "bg-background/20" : "bg-transparent"}`}>
                <span className="font-mono text-[9px] text-primary/70">{o.ref}</span>
                <span className="truncate text-[10px] text-secondary/75">{o.title}</span>
                <span className={`rounded-full border px-1.5 py-0.5 text-[9px] font-medium ${statusStyle[o.status]}`}>{o.status}</span>
                <span className={`text-[10px] font-medium ${evidenceStyle[o.evidence]}`}>{o.evidence}</span>
                <span className={`text-[10px] font-semibold ${riskStyle[o.risk]}`}>{o.risk}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-32 p-3" style={{ background: "rgba(12,25,48,0.6)" }}>
          <p className="mb-3 text-[9px] uppercase tracking-wider text-secondary/35">Sources</p>
          <div className="space-y-2.5">
            {sources.map((s) => (
              <div key={s.name}>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[9px] text-secondary/55">{s.name}</span>
                  <span className="font-mono text-[9px] text-secondary/45">{s.count}</span>
                </div>
                <div className="h-1 w-full rounded-full bg-secondary/10">
                  <div className={`h-1 rounded-full ${s.color} opacity-70`} style={{ width: `${Math.round((s.count / 847) * 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/10 p-2">
            <p className="text-[9px] font-semibold text-heading">Review Window</p>
            <p className="mt-0.5 text-[9px] text-secondary/50">Synthetic timeline</p>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
