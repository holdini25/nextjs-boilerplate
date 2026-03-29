import type { SectionCopy } from "@/types/site"

type SectionHeaderProps = SectionCopy & {
  align?: "left" | "center"
}

export function SectionHeader({
  eyebrow,
  headline,
  body,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <p className="mb-4 text-sm tracking-[0.28em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-[2.6rem] font-medium tracking-tight text-foreground sm:text-[3.1rem]">
        {headline}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
        {body}
      </p>
    </div>
  )
}
