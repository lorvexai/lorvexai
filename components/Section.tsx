export default function Section({
  eyebrow,
  title,
  description,
  children,
  accent = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <section className={`section${accent ? " border-y border-secondary/10 bg-background/40" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-secondary/55">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-secondary/75">{description}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
