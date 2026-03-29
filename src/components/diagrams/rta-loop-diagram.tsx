export function RtaLoopDiagram({
  steps,
}: {
  steps: Array<{ title: string; body: string }>
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="rounded-[1.6rem] border border-border/70 bg-surface px-5 py-6"
        >
          <p className="font-mono text-sm tracking-[0.2em] text-primary uppercase">
            Step 0{index + 1}
          </p>
          <h3 className="mt-4 text-[1.35rem] font-medium text-foreground">
            {step.title}
          </h3>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            {step.body}
          </p>
        </div>
      ))}
    </div>
  )
}
