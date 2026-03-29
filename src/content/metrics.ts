import type { StatItem } from "@/types/site"

export const proofStats: StatItem[] = [
  {
    label: "Virtual Capacity Unlocked",
    value: "+18 MW",
    body: "Turn stranded and delayed infrastructure into safe, sellable capacity.",
  },
  {
    label: "Time-to-Power Accelerated",
    value: "4.2 mo",
    body: "Bring compute online faster with coordinated bridge power and bounded control.",
  },
  {
    label: "Critical Violations Prevented",
    value: "0",
    body: "Stay inside strict electrical, thermal, and reserve envelopes with runtime-assured action gating.",
  },
  {
    label: "Verified Flexibility Delivered",
    value: "93%",
    body: "Produce auditable dispatch and proof artifacts for operators, buyers, and partners.",
  },
]

export const homeKpis: StatItem[] = [
  {
    label: "Safe MW Headroom",
    value: "11.6 MW",
    body: "Available before the feeder thermal envelope binds.",
  },
  {
    label: "Binding Constraint",
    value: "Feeder",
    body: "Thermal envelope, 5.4% remaining margin.",
  },
  {
    label: "Confidence",
    value: "94%",
    body: "Shadow-mode replay confidence across the active bundle.",
  },
  {
    label: "Flex Delivered",
    value: "7.3 MW",
    body: "Coordinated cooling, reserve, and workload actions.",
  },
  {
    label: "Actions Blocked",
    value: "14",
    body: "Rejected before they could threaten SLA or reserve posture.",
  },
  {
    label: "SLA Penalty Avoided",
    value: "$2.4M",
    body: "Estimated avoided exposure across recent constrained intervals.",
  },
]

export const eventLog = [
  "14:05 — Allow: battery discharge within reserve floor",
  "14:06 — Repair: reduce noncritical cluster cap by 4%",
  "14:06 — Reject: tower mode switch would violate thermal margin",
]

export const solutionTeasers = [
  {
    title: "AI Cloud Providers",
    body: "Bring GPU capacity online faster, avoid throttling, and protect billable compute.",
    href: "/solutions/ai-cloud",
  },
  {
    title: "Colocation & REITs",
    body: "Increase sellable kW, oversubscribe more safely, and defend uptime.",
    href: "/solutions/colocation",
  },
]
