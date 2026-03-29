import type { LeadIntent } from "@/types/site"

export function buildLeadHref(intent: LeadIntent, source: string) {
  const params = new URLSearchParams({
    intent,
    source,
  })

  return `/contact?${params.toString()}`
}

export function getFirstQueryValue(
  value: string | string[] | undefined
): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}
