export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="font-mono text-xs tracking-widest text-primary">{index}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-muted-foreground text-pretty">{subtitle}</p> : null}
    </div>
  );
}