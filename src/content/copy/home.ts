import type { ComparisonRow, SectionCopy } from "@/types/site"

export const homeHero: SectionCopy & {
  primaryCtaLabel: string
  secondaryCtaLabel: string
} = {
  eyebrow: "AI Data Center Virtual Capacity Control Plane",
  headline: "Unlock Virtual Capacity for AI Data Centers",
  body: "GridNinja turns constrained power, cooling, and on-site energy assets into safe, usable, auditable capacity so operators can energize faster, oversubscribe more safely, and protect SLAs.",
  primaryCtaLabel: "Request Capacity Audit",
  secondaryCtaLabel: "See Shadow Mode",
}

export const powerWallSection: SectionCopy & { bullets: string[] } = {
  eyebrow: "The Problem",
  headline: "The Power Wall is now the gating factor for AI growth",
  body: "AI data centers are colliding with a new operational reality: compute demand moves at software speed, while grid upgrades, interconnection approvals, and physical capacity expansion move at infrastructure speed. The result is stranded MW, delayed deployments, thermal bottlenecks, and rising pressure to oversubscribe safely.",
  bullets: [
    "Interconnection delays can stretch for years while AI demand expects deployment now.",
    "Static safety buffers leave capacity stranded when operators need every sellable megawatt.",
    "High-density AI racks turn thermal constraints into revenue constraints.",
    "Behind-the-meter power is growing, but it still needs safe orchestration.",
  ],
}

export const comparisonSection: SectionCopy = {
  eyebrow: "Why Existing Tools Stop Short",
  headline: "Monitoring shows the constraint. It does not solve it.",
  body: "Most products in this space stop at visibility, subsystem optimization, or grid-facing dispatch. GridNinja is the inside-the-fence execution and assurance layer that turns extra MW into a real operating resource.",
}

export const comparisonRows: ComparisonRow[] = [
  {
    name: "Monitoring / DCIM",
    bullets: [
      "Reads the environment",
      "Identifies stranded capacity",
      "Alerts operators",
      "Does not safely coordinate action bundles in real time",
    ],
  },
  {
    name: "Cooling Optimization",
    bullets: [
      "Improves thermal efficiency",
      "Tunes one subsystem well",
      "Does not coordinate IT workload flexibility, power reserves, and bridge assets",
    ],
  },
  {
    name: "DR / VPP Orchestration",
    bullets: [
      "Connects sites to grid and market programs",
      "Monetizes flexibility",
      "Does not decide the safest internal action bundle to deliver that flexibility",
    ],
  },
  {
    name: "GridNinja",
    emphasis: true,
    bullets: [
      "Coordinates workloads, cooling, on-site power, and reserve",
      "Gates every action through runtime assurance",
      "Produces Shadow Mode evidence and proof packs before autonomy",
      "Converts constrained infrastructure into safe, sellable capacity",
    ],
  },
]

export const engineSection: SectionCopy = {
  eyebrow: "What GridNinja Is",
  headline: "A runtime-assured virtual capacity engine",
  body: "GridNinja coordinates workloads, cooling, and on-site power assets to unlock usable MW inside strict safety and SLA envelopes. It does not ask operators to trust a black box. It shows what it would do, why it would do it, which constraint is binding, and what margin remains before bounded autonomy is enabled.",
}

export const enginePillars = [
  {
    title: "Unlock Capacity",
    body: "Turn stranded power, cooling, and reserve margins into safe, usable infrastructure.",
  },
  {
    title: "Protect Uptime",
    body: "Gate every action through runtime assurance with visible margins, reason codes, and fallback behavior.",
  },
  {
    title: "Prove Execution",
    body: "Generate Shadow Mode reports, capacity audits, replay evidence, and procurement-ready proof packs.",
  },
]

export const controlLoopSection: SectionCopy & {
  steps: Array<{ title: string; body: string }>
} = {
  eyebrow: "How It Works",
  headline: "From telemetry to proof, in one control loop",
  body: "GridNinja collapses observation, decisioning, assurance, and evidence into one operating surface.",
  steps: [
    {
      title: "Observe",
      body: "Ingest telemetry across power, cooling, workload behavior, reserves, and site constraints.",
    },
    {
      title: "Model",
      body: "Combine deterministic physics with structured residual learning to estimate feasible headroom, risk, and likely outcomes.",
    },
    {
      title: "Decide",
      body: "Construct candidate action bundles across workloads, cooling modes, and on-site assets, then rank them under hard constraints.",
    },
    {
      title: "Assure",
      body: "Every action is evaluated through a runtime assurance layer that can allow, repair, or reject it based on margin to limit and policy.",
    },
    {
      title: "Prove",
      body: "Produce counterfactual replay, Shadow Mode safety evidence, capacity reports, and operator-readable decision logs.",
    },
  ],
}

export const homeFinalCta = {
  headline: "See how much virtual capacity your site is leaving on the table",
  body: "Start with a Capacity Audit and Shadow Mode baseline. Quantify constraints, identify recurring bottlenecks, and generate proof before autonomy.",
  label: "Request Capacity Audit",
}
