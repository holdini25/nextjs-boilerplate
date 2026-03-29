import type { Metadata } from "next"

import { ContactForm } from "@/components/forms/contact-form"
import { Hero } from "@/components/marketing/hero"
import { SectionShell } from "@/components/layout/section-shell"
import { contactHero } from "@/content/copy/contact"
import { getFirstQueryValue } from "@/lib/lead"
import { createPageMetadata } from "@/lib/seo"
import type { LeadIntent } from "@/types/site"

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Contact | GridNinja",
    description:
      "Start with a Capacity Audit and tell GridNinja about your site, constraints, and operating priorities.",
    path: "/contact",
  })
}

export default async function ContactPage({
  searchParams,
}: ContactPageProps) {
  const query = await searchParams
  const rawIntent = getFirstQueryValue(query.intent)
  const source = getFirstQueryValue(query.source) ?? "contact-page"

  const intent: LeadIntent =
    rawIntent === "shadow-mode" ||
    rawIntent === "sellable-capacity" ||
    rawIntent === "partnership"
      ? rawIntent
      : "capacity-audit"

  return (
    <div className="space-y-24 pb-24">
      <Hero headline={contactHero.headline} body={contactHero.body} />

      <SectionShell>
        <ContactForm intent={intent} source={source} />
      </SectionShell>
    </div>
  )
}
