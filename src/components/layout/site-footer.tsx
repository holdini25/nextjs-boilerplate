import Link from "next/link"

import { GridNinjaLogo } from "@/components/brand/gridninja-logo"
import { footerGroups } from "@/content/nav"
import { siteConfig } from "@/content/site"

import { SectionShell } from "./section-shell"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-background/95">
      <SectionShell className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-4">
            <GridNinjaLogo
              className="gap-2.5"
              markClassName="size-9"
              textClassName="text-[0.84rem] tracking-[0.17em]"
            />
            <h2 className="max-w-md text-[1.9rem] font-medium text-foreground">
              {siteConfig.footerCopy}
            </h2>
            <p className="max-w-md text-base leading-8 text-muted-foreground">
              Unlock safe, usable, auditable capacity from constrained AI infrastructure.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-base font-medium text-foreground">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionShell>
    </footer>
  )
}
