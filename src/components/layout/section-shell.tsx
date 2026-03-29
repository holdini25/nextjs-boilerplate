import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionShellProps = ComponentPropsWithoutRef<"section"> & {
  containerClassName?: string
  children: ReactNode
}

export function SectionShell({
  className,
  containerClassName,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section className={cn("px-4 sm:px-6 lg:px-8", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
