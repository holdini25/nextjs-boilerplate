import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/marketing/cta-band"
import { Hero } from "@/components/marketing/hero"
import { OutcomePillars } from "@/components/marketing/outcome-pillars"
import { SectionHeader } from "@/components/marketing/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import {
  aboutClosingCta,
  aboutHero,
  aboutMission,
  aboutOperatingModel,
  aboutPrinciples,
  aboutWhyNow,
} from "@/content/copy/about"
import { buildLeadHref } from "@/lib/lead"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "About | GridNinja",
    description:
      "Learn why GridNinja exists and how it approaches runtime-assured virtual capacity for AI infrastructure.",
    path: "/about",
  })
}

export default function AboutPage() {
  return (
    <div className="space-y-14 pb-14 sm:space-y-16 sm:pb-16">
      <Hero
        eyebrow={aboutHero.eyebrow}
        headline={aboutHero.headline}
        body={aboutHero.body}
        primaryCta={{
          label: "Request Capacity Audit",
          href: buildLeadHref("capacity-audit", "about-hero"),
        }}
        secondaryCta={{
          label: "Contact partnerships",
          href: buildLeadHref("partnership", "about-hero"),
        }}
      />

      <SectionShell>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5 sm:space-y-6">
            <SectionHeader
              eyebrow={aboutMission.title}
              headline={aboutMission.body}
              body="GridNinja is a runtime-assured virtual capacity engine for constrained AI infrastructure, not another monitoring layer."
            />
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href={buildLeadHref("capacity-audit", "about-mission")}>
                  Request Capacity Audit
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7">
            <p className="text-sm tracking-[0.28em] text-primary uppercase">
              Why now
            </p>
            <ul className="mt-5 space-y-3">
              {aboutWhyNow.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="border-l border-border/80 pl-4 text-base leading-8 text-muted-foreground"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="space-y-8 sm:space-y-10">
          <SectionHeader
            eyebrow="Operating philosophy"
            headline="Sharp on constraints, conservative on control"
            body="GridNinja is built to make the boundary between insight and actuation explicit."
          />
          <OutcomePillars items={aboutPrinciples} />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 sm:gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow={aboutOperatingModel.title}
            headline="A practical path from Capacity Audit to bounded autonomy"
            body="GridNinja does not jump from monitoring to blind control. It earns trust with evidence first."
          />
          <div className="rounded-[1.8rem] border border-border/70 bg-surface px-6 py-7">
            <ul className="space-y-4">
              {aboutOperatingModel.bullets.map((bullet, index) => (
                <li
                  key={bullet}
                  className="flex gap-4 border-l border-border/80 pl-4"
                >
                  <span className="font-mono text-sm text-primary">0{index + 1}</span>
                  <p className="text-base leading-8 text-muted-foreground">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          eyebrow={aboutClosingCta.eyebrow}
          headline={aboutClosingCta.headline}
          body={aboutClosingCta.body}
          label="Request Capacity Audit"
          href={buildLeadHref("capacity-audit", "about-final")}
        />
      </SectionShell>
    </div>
  )
}
