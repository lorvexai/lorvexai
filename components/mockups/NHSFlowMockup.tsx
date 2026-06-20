import MockupFrame from "./MockupFrame";

const referrals = [
  { id: "Synthetic Referral 001", patient: "Patient A", pathway: "Cardiology", wait: "2d", urgency: "High", status: "Review" },
  { id: "Synthetic Referral 002", patient: "Patient B", pathway: "Orthopaedics", wait: "5d", urgency: "Medium", status: "Queued" },
  { id: "Synthetic Case 003", patient: "Patient C", pathway: "Respiratory", wait: "1d", urgency: "High", status: "Review" },
  { id: "Synthetic Case 004", patient: "Patient D", pathway: "Gastroenterology", wait: "8d", urgency: "Low", status: "Queued" },
  { id: "Synthetic Case 005", patient: "Patient E", pathway: "Neurology", wait: "3d", urgency: "Medium", status: "Review" }
];

const urgencyStyle: Record<string, string> = {
  High: "border-red-400/40 bg-red-400/15 text-red-300",
  Medium: "border-yellow-400/40 bg-yellow-400/15 text-yellow-300",
  Low: "border-emerald-400/40 bg-emerald-400/15 text-emerald-300"
};

const statusStyle: Record<string, string> = {
  Review: "text-yellow-400",
  Queued: "text-secondary/50"
};

const wards = [
  { name: "Service A", occ: 87 },
  { name: "Service B", occ: 72 },
  { name: "Service C", occ: 91 },
  { name: "Service D", occ: 65 }
];

export default function NHSFlowMockup() {
  return (
    <MockupFrame title="app.lorvexai.com/healthcare-flow-blueprint">
      <div className="flex items-center justify-between border-b border-secondary/10 px-4 py-2.5" style={{ background: "rgba(12,25,48,0.9)" }}>
        <div className="flex gap-4">
          {["Overview", "Referrals", "Pathways", "Capacity", "Reports"].map((t, i) => (
            <span key={t} className={`text-xs ${i === 1 ? "border-b border-emerald-400 pb-1 text-white" : "text-secondary/45"}`}>{t}</span>
          ))}
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-300">
          Synthetic demo data - illustrative only
        </span>
      </div>

      <div className="p-4">
        <div className="mb-4 grid grid-cols-4 gap-2">
          {[
            { label: "Pending Referrals", value: "84", color: "text-yellow-300" },
            { label: "Reviewed Today", value: "127", color: "text-emerald-300" },
            { label: "Avg Draft Time", value: "4.2s", color: "text-primary" },
            { label: "Review Queue", value: "94%", color: "text-emerald-300" }
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-secondary/10 bg-background/40 p-2.5 text-center">
              <p className={`text-base font-bold ${m.color}`}>{m.value}</p>
              <p className="mt-0.5 text-[9px] text-secondary/45">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-3">
          <div className="overflow-hidden rounded-lg border border-secondary/10">
            <div className="flex items-center justify-between border-b border-secondary/10 bg-background/60 px-3 py-1.5">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35">Synthetic Referral Queue</span>
              <span className="rounded-full bg-red-400/15 px-2 py-0.5 text-[9px] text-red-300">Human review required</span>
            </div>
            {referrals.map((r, i) => (
              <div key={r.id} className={`grid grid-cols-[1.4fr_0.8fr_1fr_auto_auto_auto] items-center gap-2 px-3 py-2 ${i % 2 === 0 ? "bg-background/20" : ""}`}>
                <span className="truncate font-mono text-[9px] text-secondary/40">{r.id}</span>
                <span className="truncate text-[10px] text-white">{r.patient}</span>
                <span className="truncate text-[9px] text-secondary/55">{r.pathway}</span>
                <span className="text-[9px] text-secondary/40">{r.wait}</span>
                <span className={`rounded-full border px-1.5 py-0.5 text-[9px] ${urgencyStyle[r.urgency]}`}>{r.urgency}</span>
                <span className={`text-[9px] font-medium ${statusStyle[r.status]}`}>{r.status}</span>
              </div>
            ))}
          </div>

          <div className="w-28 rounded-lg border border-secondary/10 p-3" style={{ background: "rgba(12,25,48,0.6)" }}>
            <p className="mb-3 text-[9px] uppercase tracking-wider text-secondary/35">Capacity</p>
            <div className="space-y-3">
              {wards.map((w) => {
                const barColor = w.occ >= 90 ? "bg-red-400" : w.occ >= 75 ? "bg-yellow-400" : "bg-emerald-400";
                return (
                  <div key={w.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[9px] text-secondary/55">{w.name}</span>
                      <span className={`text-[9px] font-bold ${w.occ >= 90 ? "text-red-300" : w.occ >= 75 ? "text-yellow-300" : "text-emerald-300"}`}>{w.occ}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary/10">
                      <div className={`h-1.5 rounded-full ${barColor} opacity-75`} style={{ width: `${w.occ}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-2">
              <p className="text-[9px] font-semibold text-emerald-300">Draft Signals</p>
              <p className="mt-0.5 text-sm font-bold text-white">23</p>
              <p className="text-[9px] text-secondary/45">Illustrative only</p>
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
