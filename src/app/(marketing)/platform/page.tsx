import type { Metadata } from "next"

import { CtaBand } from "@/components/marketing/cta-band"
import { Hero } from "@/components/marketing/hero"
import { SectionHeader } from "@/components/marketing/section-header"
import { TopologyMap } from "@/components/diagrams/topology-map"
import { SectionShell } from "@/components/layout/section-shell"
import {
  architectureFlow,
  platformHero,
  platformModules,
  platformProofSection,
} from "@/content/copy/platform"
import { buildLeadHref } from "@/lib/lead"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Platform | GridNinja",
    description:
      "See the runtime-assured platform architecture that turns constrained infrastructure into safe, usable, auditable capacity.",
    path: "/platform",
  })
}

export default function PlatformPage() {
  return (
    <div className="space-y-24 pb-24">
      <Hero
        headline={platformHero.headline}
        body={platformHero.body}
        primaryCta={{
          label: "Request Capacity Audit",
          href: buildLeadHref("capacity-audit", "platform-hero"),
        }}
      />

      <SectionShell>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Product modules"
            headline="One control plane, multiple operator-ready proof surfaces"
            body="Each module exists to make extra MW usable, explainable, and auditable before autonomy expands."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {platformModules.map((module) => (
              <div
                key={module.title}
                className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7"
              >
                <h3 className="text-[1.35rem] font-medium text-foreground">
                  {module.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {module.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Platform architecture"
            headline="Telemetry adapters to proof system, in one bounded chain"
            body="The platform is structured so the same path that ranks and gates action bundles also generates audit-ready evidence."
          />
          <TopologyMap items={architectureFlow} />
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          headline={platformProofSection.headline}
          body={platformProofSection.body}
          label="Request Capacity Audit"
          href={buildLeadHref("capacity-audit", "platform-final")}
        />
      </SectionShell>
    </div>
  )
}
