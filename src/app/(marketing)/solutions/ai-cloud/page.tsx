import type { Metadata } from "next"

import { SolutionPageTemplate } from "@/components/marketing/solution-page-template"
import { solutionPages } from "@/content/copy/solutions"
import { createPageMetadata } from "@/lib/seo"

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "AI Cloud Solutions | GridNinja",
    description:
      "Bring compute online faster, avoid power-driven throttling, and convert constrained infrastructure into billable capacity.",
    path: "/solutions/ai-cloud",
  })
}

export default function AiCloudPage() {
  return <SolutionPageTemplate config={solutionPages["ai-cloud"]} />
}
