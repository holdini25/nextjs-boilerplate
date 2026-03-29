import type { SolutionPageConfig } from "@/types/site"

export const solutionPages: Record<"ai-cloud" | "colocation", SolutionPageConfig> =
  {
    "ai-cloud": {
      slug: "ai-cloud",
      path: "/solutions/ai-cloud",
      hero: {
        headline: "For AI Clouds Racing Against the Grid",
        body: "Bring compute online faster, avoid power-driven throttling, and convert constrained infrastructure into billable capacity.",
      },
      whyThisMatters:
        "Every month of delay can strand high-value GPU inventory and postpone revenue. GridNinja helps operators energize sooner, protect throughput, and stay inside the envelope.",
      painPoints: [
        "Interconnection delays",
        "GPU monetization pressure",
        "Thermal hotspots in dense clusters",
        "Limited contracted headroom",
        "Need for bridge power coordination",
      ],
      outcomes: [
        "Accelerate time-to-power",
        "Avoid broad throttling",
        "Preserve SLA-critical workloads",
        "Coordinate bridge power, batteries, and cooling",
      ],
      metrics: [
        {
          label: "Incremental billable GPU-hours",
          value: "+14.8%",
          body: "Recovered by reducing broad derates during constrained intervals.",
        },
        {
          label: "Earlier energization revenue",
          value: "$18.2M",
          body: "Illustrative annualized value from earlier bridge-power operation.",
        },
        {
          label: "Avoided derates and SLA penalties",
          value: "$4.1M",
          body: "Protected through bounded coordination and runtime assurance.",
        },
      ],
      ctaLabel: "Book an AI Capacity Audit",
      ctaSource: "ai-cloud-page",
    },
    colocation: {
      slug: "colocation",
      path: "/solutions/colocation",
      hero: {
        headline: "For Operators Selling Capacity in Constrained Markets",
        body: "Increase sellable kW, oversubscribe more safely, and protect uptime with proof-backed control.",
      },
      whyThisMatters:
        "In power-constrained markets, every recoverable megawatt is revenue. GridNinja helps operators increase dynamic sellable capacity without relying on static assumptions or opaque risk.",
      painPoints: [
        "Stranded buffer capacity",
        "Pressure to monetize scarce power",
        "Risk of oversubscription incidents",
        "Tenant SLA sensitivity",
        "Investor and regulatory scrutiny",
      ],
      outcomes: [
        "Unlock stranded capacity",
        "Support dynamic oversubscription with guardrails",
        "Protect tenant SLAs",
        "Produce auditable evidence for internal and external stakeholders",
      ],
      metrics: [
        {
          label: "Recovered sellable capacity",
          value: "+9.4 MW",
          body: "Dynamic headroom unlocked from static buffers and fixed reserve posture.",
        },
        {
          label: "Protected uptime posture",
          value: "99.99%",
          body: "Actions remain bounded by feeder, reserve, and thermal margins.",
        },
        {
          label: "Annualized capacity value",
          value: "$5.2M",
          body: "Illustrative kW-month recovery across a constrained market footprint.",
        },
      ],
      ctaLabel: "Request a Sellable Capacity Assessment",
      ctaSource: "colocation-page",
    },
  }
