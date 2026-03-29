export function AutonomyLadder({
  steps,
}: {
  steps: Array<{ title: string; body: string }>
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-surface-2 font-mono text-base text-primary">
              0{index + 1}
            </span>
            <div className="h-px flex-1 bg-border/80" />
          </div>
          <h3 className="mt-6 text-[1.35rem] font-medium text-foreground">{step.title}</h3>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            {step.body}
          </p>
        </div>
      ))}
    </div>
  )
}
