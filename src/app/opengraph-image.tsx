import { ImageResponse } from "next/og"

import { GridNinjaOgCard } from "@/components/brand/gridninja-og-card"
import { siteConfig } from "@/content/site"

export const runtime = "edge"
export const alt = "GridNinja"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  const host = new URL(siteConfig.url).host

  return new ImageResponse(
    <GridNinjaOgCard
      title={siteConfig.title}
      description={siteConfig.description}
      host={host}
    />,
    { ...size }
  )
}
