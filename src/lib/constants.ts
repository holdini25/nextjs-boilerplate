import type { LeadIntent } from "@/types/site"

export const leadIntents = [
  "capacity-audit",
  "shadow-mode",
  "sellable-capacity",
  "partnership",
] as const satisfies ReadonlyArray<LeadIntent>

export const buyerTypes = [
  "AI cloud operator",
  "Colo / REIT",
  "Bridge power / DER partner",
  "Utility / aggregator partner",
  "Investor / advisor",
  "Other",
] as const

export const siteTypes = [
  "AI training campus",
  "Inference cluster",
  "Colocation facility",
  "Hybrid power campus",
  "Bridge power deployment",
  "Other",
] as const

export const timelineOptions = [
  "Immediate (0-3 months)",
  "Near term (3-6 months)",
  "Planning window (6-12 months)",
  "Exploratory",
] as const

export const constraintOptions = [
  "interconnection delay",
  "stranded capacity",
  "thermal bottlenecks",
  "bridge power orchestration",
  "demand / flex programs",
  "water / cooling constraints",
  "SLA protection",
] as const

export const intentLabels: Record<LeadIntent, string> = {
  "capacity-audit": "Capacity Audit",
  "shadow-mode": "Shadow Mode Demo",
  "sellable-capacity": "Sellable Capacity Assessment",
  partnership: "Partnership Conversation",
}
