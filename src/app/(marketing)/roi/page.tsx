import type { Metadata } from "next"

import { CapacityAuditForm } from "@/components/forms/capacity-audit-form"
import { Hero } from "@/components/marketing/hero"
import { SectionHeader } from "@/components/marketing/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { roiOutputs, roiAssumptions } from "@/content/roi-assumptions"
import { roiArchetypes, roiDeliverables, roiHero } from "@/content/copy/roi"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "ROI / Capacity Audit | GridNinja",
    description:
      "Quantify stranded headroom, recurring constraints, and the business case for safe virtual capacity control before you deploy.",
    path: "/roi",
  })
}

export default function RoiPage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero headline={roiHero.headline} body={roiHero.body} />

      <SectionShell>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="ROI archetypes"
            headline="Three ways constrained infrastructure turns into financial drag"
            body="Phase one keeps the ROI page analytical and conversion-oriented: clear archetypes, fixed scenario outputs, and a direct path to the audit intake."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {roiArchetypes.map((archetype) => (
              <div
                key={archetype.title}
                className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7"
              >
                <h3 className="text-[1.35rem] font-medium text-foreground">
                  {archetype.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {archetype.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Illustrative scenario outputs"
              headline="Fixed outputs first, real calibration during the audit"
              body="This first release avoids a heavy live calculator. Instead it shows the output shape, the assumptions, and the intake that moves the buyer into a real Capacity Audit."
            />
            <div className="grid gap-px overflow-hidden rounded-[1.8rem] border border-border/70 bg-border/70 md:grid-cols-2">
              {roiOutputs.map((output) => (
                <div key={output.label} className="bg-surface px-5 py-6">
                  <p className="text-sm tracking-[0.18em] text-muted-foreground uppercase">
                    {output.label}
                  </p>
                  <p className="mt-4 font-mono text-3xl text-foreground">
                    {output.value}
                  </p>
                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {output.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7">
              <p className="text-sm tracking-[0.28em] text-primary uppercase">
                Assumptions
              </p>
              <ul className="mt-4 space-y-3">
                {roiAssumptions.map((assumption) => (
                  <li
                    key={assumption}
                    className="border-l border-border/80 pl-4 text-base leading-8 text-muted-foreground"
                  >
                    {assumption}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <CapacityAuditForm
              intent="capacity-audit"
              source="roi-page"
            />
            <div className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7">
              <p className="text-sm tracking-[0.28em] text-primary uppercase">
                Capacity Audit deliverables
              </p>
              <ul className="mt-4 space-y-3">
                {roiDeliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="border-l border-border/80 pl-4 text-base leading-8 text-muted-foreground"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
