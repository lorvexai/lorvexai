import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";

type TechnicalInsightsHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  takeaways: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function TechnicalInsightsHeader({
  eyebrow,
  title,
  description,
  takeaways,
  ctaLabel,
  ctaHref
}: TechnicalInsightsHeaderProps) {
  return (
    <div className="glass rounded-3xl border border-primary/25 p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-secondary/70">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-secondary/85">{description}</p>

      <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-5">
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          <Lightbulb size={16} aria-hidden="true" />
          Key Takeaways
        </p>
        <ul className="mt-4 space-y-2 text-sm text-secondary/85">
          {takeaways.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={16} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {ctaLabel && ctaHref && (
        <div className="mt-6">
          <Link href={ctaHref} className="btn-primary min-h-11 text-sm">
            {ctaLabel}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}
