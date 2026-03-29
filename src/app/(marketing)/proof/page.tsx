import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AutonomyLadder } from "@/components/marketing/autonomy-ladder"
import { CtaBand } from "@/components/marketing/cta-band"
import { Hero } from "@/components/marketing/hero"
import { ProofLog } from "@/components/marketing/proof-log"
import { SectionHeader } from "@/components/marketing/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { ladderSteps, proofArtifacts, proofHero, proofLog, proofSafetyCopy } from "@/content/copy/proof"
import { proofPackDownloadHref } from "@/content/copy/proof-pack"
import { buildLeadHref } from "@/lib/lead"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Proof Before Autonomy | GridNinja",
    description:
      "See the Shadow Mode evidence, audit artifacts, and rollback posture that establish trust before autonomy expands.",
    path: "/proof",
  })
}

export default function ProofPage() {
  const logLines = [
    { label: "14:05:12", value: `${proofLog.action} ${proofLog.summary}` },
    { label: "Reason", value: proofLog.reason },
    { label: "Binding constraint", value: proofLog.constraint },
    { label: "Post-action margin", value: proofLog.margin },
    { label: "SLA impact", value: proofLog.impact },
  ]

  return (
    <div className="space-y-24 pb-24">
      <Hero
        headline={proofHero.headline}
        body={proofHero.body}
        primaryCta={{
          label: "Request Capacity Audit",
          href: buildLeadHref("shadow-mode", "proof-hero"),
        }}
      />

      <SectionShell>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="The autonomy ladder"
            headline="Shadow to bounded autonomy, with visible evidence at every step"
            body="Control authority expands only after operators can inspect the recommendation path, the remaining margin, and the rollback posture."
          />
          <AutonomyLadder steps={ladderSteps} />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Artifact gallery"
            headline="Procurement-ready outputs, not just recommendations"
            body="GridNinja produces the reports, logs, and replay artifacts needed to trust and operationalize the control loop."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {proofArtifacts.map((artifact) => (
              <div
                key={artifact}
                className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7"
              >
                <p className="text-sm tracking-[0.28em] text-primary uppercase">
                  Proof artifact
                </p>
                <h3 className="mt-4 text-[1.35rem] font-medium text-foreground">
                  {artifact}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Operator-readable evidence that explains action choice, binding constraints, and margin after repair or rejection.
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Audit log example"
            headline="Readable, attributable, and grounded in the active constraint"
            body="Every repair or rejection is logged in plain operator language, with the relevant envelope and predicted impact attached."
          />
          <ProofLog lines={logLines} />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-8">
          <p className="text-sm tracking-[0.28em] text-primary uppercase">
            Safety and rollback
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-muted-foreground">
            {proofSafetyCopy}
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-8 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.28em] text-primary uppercase">
              Sample proof pack
            </p>
            <h2 className="mt-4 text-balance text-[2.25rem] font-medium text-foreground">
              Review the artifact stack before the first call
            </h2>
            <p className="mt-4 text-lg leading-9 text-muted-foreground">
              Open the full proof-pack surface or download the sample bundle to
              inspect logs, envelopes, and Shadow Mode artifacts before a live demo.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <Button asChild size="lg">
              <Link href="/proof/proof-pack">Open proof pack</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/80 bg-surface/60 text-foreground"
            >
              <Link href={proofPackDownloadHref}>Download sample</Link>
            </Button>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          headline="Start with Shadow Mode evidence, then expand control with proof in hand"
          body="Use Capacity Audit and Shadow Mode outputs to establish the business case, the active constraints, and the operating guardrails before bounded autonomy."
          label="Request Capacity Audit"
          href={buildLeadHref("shadow-mode", "proof-final")}
        />
      </SectionShell>
    </div>
  )
}
