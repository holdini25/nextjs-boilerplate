import type { ComparisonRow } from "@/types/site"

export function ComparisonGrid({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-border/70 bg-border/70 lg:grid-cols-4">
      {rows.map((row) => (
        <div
          key={row.name}
          className={row.emphasis ? "bg-surface-2 px-6 py-7" : "bg-surface px-6 py-7"}
        >
          <h3 className="text-xl font-medium text-foreground">{row.name}</h3>
          <ul className="mt-5 space-y-3">
            {row.bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-l border-border/80 pl-4 text-base leading-8 text-muted-foreground"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
