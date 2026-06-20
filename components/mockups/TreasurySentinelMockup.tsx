import MockupFrame from "./MockupFrame";

const positions = [
  { entity: "Synthetic Entity A", currency: "GBP", balance: "GBP 1.24bn", lcr: "142%", trend: "+2.1%", status: "Normal" },
  { entity: "Synthetic Entity B", currency: "EUR", balance: "EUR 892m", lcr: "138%", trend: "-0.8%", status: "Watch" },
  { entity: "Synthetic Entity C", currency: "HKD", balance: "HKD 4.1bn", lcr: "155%", trend: "+1.4%", status: "Normal" },
  { entity: "Synthetic Entity D", currency: "USD", balance: "USD 2.07bn", lcr: "161%", trend: "+0.3%", status: "Normal" }
];

const alerts = [
  { time: "09:14", msg: "Synthetic cash-flow anomaly candidate - review required", level: "warn" },
  { time: "08:52", msg: "Illustrative liquidity variance detected", level: "info" },
  { time: "07:30", msg: "ALCO-style draft pack prepared for review", level: "info" }
];

const cashflowBars = [
  { day: "Mon", inflow: 82, outflow: 65 },
  { day: "Tue", inflow: 91, outflow: 78 },
  { day: "Wed", inflow: 74, outflow: 88 },
  { day: "Thu", inflow: 95, outflow: 70 },
  { day: "Fri", inflow: 68, outflow: 55 },
  { day: "Today", inflow: 87, outflow: 62 }
];

const statusStyle: Record<string, string> = {
  Normal: "text-emerald-300",
  Watch: "text-yellow-300",
  Breach: "text-red-300"
};

export default function TreasurySentinelMockup() {
  return (
    <MockupFrame title="app.lorvexai.com/treasury-sentinel">
      <div className="flex items-center justify-between border-b border-secondary/10 px-4 py-2.5" style={{ background: "rgba(12,25,48,0.9)" }}>
        <div className="flex gap-4">
          {["Dashboard", "Positions", "Cashflow", "Alerts", "ALCO Drafts"].map((t, i) => (
            <span key={t} className={`text-xs ${i === 0 ? "border-b border-orange-400 pb-1 text-white" : "text-secondary/45"}`}>{t}</span>
          ))}
        </div>
        <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2 py-0.5 text-[10px] text-orange-300">
          Synthetic demo data - illustrative only
        </span>
      </div>

      <div className="p-4">
        <div className="mb-4 grid grid-cols-4 gap-2">
          {[
            { label: "Group LCR", value: "149%", color: "text-emerald-300", sub: "Synthetic" },
            { label: "Group NSFR", value: "118%", color: "text-emerald-300", sub: "Synthetic" },
            { label: "Positions", value: "1,240", color: "text-primary", sub: "Demo records" },
            { label: "Alerts Today", value: "3", color: "text-yellow-300", sub: "Review required" }
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-secondary/10 bg-background/40 p-2.5 text-center">
              <p className={`text-base font-bold ${m.color}`}>{m.value}</p>
              <p className="mt-0.5 text-[9px] text-secondary/45">{m.label}</p>
              <p className="text-[8px] text-secondary/30">{m.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.3fr_1fr] gap-3">
          <div className="space-y-3">
            <div className="overflow-hidden rounded-lg border border-secondary/10">
              <div className="border-b border-secondary/10 bg-background/60 px-3 py-1.5">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35">Synthetic Positions</span>
              </div>
              {positions.map((p, i) => (
                <div key={p.entity} className={`grid grid-cols-[1.4fr_auto_auto_auto_auto] items-center gap-2 px-3 py-1.5 ${i % 2 === 0 ? "bg-background/20" : ""}`}>
                  <div>
                    <p className="text-[10px] font-medium text-white">{p.entity}</p>
                    <p className="text-[9px] text-secondary/40">{p.currency}</p>
                  </div>
                  <span className="font-mono text-[9px] text-secondary/65">{p.balance}</span>
                  <span className={`font-mono text-[9px] font-bold ${parseFloat(p.lcr) >= 140 ? "text-emerald-300" : "text-yellow-300"}`}>{p.lcr}</span>
                  <span className={`text-[9px] ${p.trend.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{p.trend}</span>
                  <span className={`text-[9px] font-semibold ${statusStyle[p.status]}`}>{p.status}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-secondary/10 p-3">
              <p className="mb-3 text-[9px] uppercase tracking-wider text-secondary/35">Weekly Cashflow (synthetic)</p>
              <div className="flex h-14 items-end gap-1.5">
                {cashflowBars.map((b) => (
                  <div key={b.day} className="flex flex-1 flex-col items-center gap-0.5">
                    <div className="flex h-12 w-full items-end gap-0.5">
                      <div className="flex-1 rounded-t bg-primary/50" style={{ height: `${b.inflow}%` }} />
                      <div className="flex-1 rounded-t bg-red-400/40" style={{ height: `${b.outflow}%` }} />
                    </div>
                    <span className="text-[7px] text-secondary/35">{b.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden rounded-lg border border-secondary/10">
              <div className="border-b border-secondary/10 bg-background/60 px-3 py-1.5">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-secondary/35">Alert Feed</span>
              </div>
              <div className="space-y-1.5 p-2">
                {alerts.map((a) => (
                  <div key={`${a.time}-${a.msg}`} className={`flex gap-2 rounded-lg p-2 ${a.level === "warn" ? "border border-yellow-400/20 bg-yellow-400/5" : "border border-secondary/10 bg-background/20"}`}>
                    <span className="mt-0.5 shrink-0 font-mono text-[8px] text-secondary/35">{a.time}</span>
                    <p className={`text-[9px] leading-tight ${a.level === "warn" ? "text-yellow-200" : "text-secondary/60"}`}>{a.msg}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-orange-400/20 bg-orange-400/5 p-3">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-orange-300">ALCO-style Draft</p>
              <p className="mt-1 text-[10px] text-white">Synthetic Review Pack</p>
              <p className="mt-1 text-[9px] text-secondary/50">Human approval required</p>
            </div>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
