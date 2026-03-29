import Link from "next/link"

import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CtaBand({
  eyebrow = "Capacity Audit",
  headline,
  body,
  label,
  href,
}: {
  eyebrow?: string
  headline: string
  body: string
  label: string
  href: string
}) {
  return (
    <div className="rounded-[2rem] border border-border/80 bg-surface px-6 py-7 sm:px-8 sm:py-8 lg:flex lg:items-end lg:justify-between lg:gap-10">
      <div className="max-w-2xl">
        <p className="text-sm tracking-[0.28em] text-primary uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-balance text-[2.05rem] font-medium text-foreground sm:text-[2.55rem] lg:text-[2.8rem]">
          {headline}
        </h2>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-8 text-muted-foreground sm:text-lg sm:leading-9">
          {body}
        </p>
      </div>
      <div className="mt-8 lg:mt-0">
        <Button asChild size="lg" className="group">
          <Link href={href}>
            {label}
            <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
