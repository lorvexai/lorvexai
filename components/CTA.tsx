import SubscribeForm from "@/components/SubscribeForm";

export default function CTA() {
  return (
    <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-glow/10 px-6 py-6 md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold text-heading">Stay with the weekly briefing.</h2>
          <p className="mt-1 text-base text-secondary/80">What regulators changed for AI in risk, for practitioners.</p>
        </div>
        <SubscribeForm id="cta-email" />
      </div>
    </div>
  );
}
