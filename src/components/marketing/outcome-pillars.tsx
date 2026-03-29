import { FileCheck2Icon, GaugeIcon, ShieldCheckIcon } from "lucide-react"

const icons = [GaugeIcon, ShieldCheckIcon, FileCheck2Icon]

export function OutcomePillars({
  items,
}: {
  items: Array<{ title: string; body: string }>
}) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-border/70 bg-border/70 lg:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index] ?? GaugeIcon

        return (
          <div key={item.title} className="bg-surface px-6 py-8">
            <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl border border-border/80 bg-surface-2 text-primary">
              <Icon className="size-5" />
            </div>
            <h3 className="text-[1.4rem] font-medium text-foreground">{item.title}</h3>
            <p className="mt-3 max-w-sm text-base leading-8 text-muted-foreground">
              {item.body}
            </p>
          </div>
        )
      })}
    </div>
  )
}
