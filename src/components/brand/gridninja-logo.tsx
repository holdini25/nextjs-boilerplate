import { useId, type SVGProps } from "react"

import { cn } from "@/lib/utils"

type GridNinjaMarkProps = SVGProps<SVGSVGElement> & {
  className?: string
}

export function GridNinjaMark({ className, ...props }: GridNinjaMarkProps) {
  const strokeId = useId()
  const fillId = useId()

  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <defs>
        <linearGradient id={strokeId} x1="18" y1="18" x2="78" y2="78">
          <stop offset="0%" stopColor="#FF9F1A" />
          <stop offset="100%" stopColor="#E0B24A" />
        </linearGradient>
        <linearGradient id={fillId} x1="18" y1="18" x2="78" y2="78">
          <stop offset="0%" stopColor="#FF9F1A" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#FF9F1A" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <circle
        cx="48"
        cy="48"
        r="35"
        fill={`url(#${fillId})`}
        stroke={`url(#${strokeId})`}
        strokeWidth="2.5"
      />
      <ellipse
        cx="48"
        cy="48"
        rx="21"
        ry="34"
        stroke="rgba(159,176,191,0.45)"
        strokeWidth="1.5"
      />
      <ellipse
        cx="48"
        cy="48"
        rx="34"
        ry="17"
        stroke="rgba(159,176,191,0.25)"
        strokeWidth="1.5"
      />
      <path
        d="M19 39 C24 31 31 27 39 27 C35 32 34 36 34 43 C28 46 23 47 19 39Z"
        fill="rgba(255,159,26,0.85)"
      />
      <path
        d="M77 39 C72 31 65 27 57 27 C61 32 62 36 62 43 C68 46 73 47 77 39Z"
        fill="rgba(255,159,26,0.85)"
      />
      <path
        d="M48 26 L52.6 39.1 L66.3 39.6 L55.4 47.7 L59.3 60.9 L48 53.2 L36.7 60.9 L40.6 47.7 L29.7 39.6 L43.4 39.1 Z"
        fill="#FF9F1A"
      />
      <path
        d="M48 20 V76"
        stroke="rgba(159,176,191,0.2)"
        strokeWidth="1.25"
      />
      <path
        d="M24 48 H72"
        stroke="rgba(159,176,191,0.2)"
        strokeWidth="1.25"
      />
      <path
        d="M28 32 C36 25 61 25 68 32"
        stroke="rgba(255,159,26,0.45)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 64 C36 71 61 71 68 64"
        stroke="rgba(255,159,26,0.22)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

type GridNinjaLogoProps = {
  className?: string
  markClassName?: string
  textClassName?: string
  showWordmark?: boolean
}

export function GridNinjaLogo({
  className,
  markClassName,
  textClassName,
  showWordmark = true,
}: GridNinjaLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <GridNinjaMark className={cn("size-10", markClassName)} />
      {showWordmark ? (
        <span
          className={cn(
            "font-medium tracking-[0.18em] text-foreground uppercase",
            textClassName
          )}
        >
          GridNinja
        </span>
      ) : null}
    </span>
  )
}
