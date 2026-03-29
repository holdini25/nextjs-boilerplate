import type { SectionCopy } from "@/types/site"

export const proofPackHero: SectionCopy = {
  eyebrow: "Sample Proof Pack",
  headline: "Review the proof pack before a live review",
  body: "Inspect the evidence package behind Shadow Mode, dispatch envelopes, replay artifacts, and rollback posture before the first operator session.",
}

export const proofPackDownloadHref = "/downloads/sample-proof-pack"

export const proofPackIncludes = [
  "Shadow Mode Safety Report",
  "Capacity Report",
  "Constraint Replay",
  "Dispatch Envelope",
  "Audit Log",
  "Operator Rollback Plan",
]

export const proofPackChecklist = [
  "Binding constraint, remaining margin, and reason code are visible.",
  "The action bundle is written in operator language, not model jargon.",
  "Replay, rollback, and audit evidence are readable without a dashboard.",
]

export const proofPackPreview = [
  { label: "Scope", value: "Shadow Mode baseline and headroom map" },
  { label: "Decision path", value: "Allow, repair, reject with margin to limit" },
  { label: "Evidence", value: "Replay logs, dispatch envelopes, rollback plan" },
]

export const proofPackSampleLog = [
  { label: "14:05:12", value: "REPAIR Cluster cap reduced 4%" },
  { label: "Reason", value: "PCC margin projected below threshold" },
  { label: "Constraint", value: "Feeder thermal envelope" },
  { label: "Margin", value: "+3.2%" },
  { label: "SLA impact", value: "None predicted" },
]

export const proofPackFinalCta: SectionCopy = {
  eyebrow: "Review",
  headline: "Use the sample pack to decide whether the site is ready for Shadow Mode",
  body: "If the artifact structure is useful, request a Capacity Audit and we will map the site-specific evidence package, operating constraints, and next review steps.",
}
