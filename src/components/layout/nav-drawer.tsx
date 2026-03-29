"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { MenuIcon } from "lucide-react"

import { navItems } from "@/content/nav"
import { buildLeadHref } from "@/lib/lead"
import { cn } from "@/lib/utils"

import { GridNinjaLogo } from "@/components/brand/gridninja-logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function NavDrawer() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          className="border-border/80 bg-surface/80 text-foreground lg:hidden"
        >
          <MenuIcon />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-border bg-background/98 px-0 text-foreground"
      >
        <SheetHeader className="border-b border-border/70">
          <SheetTitle>
            <GridNinjaLogo
              className="gap-2.5"
              markClassName="size-8"
              textClassName="text-sm"
            />
          </SheetTitle>
          <SheetDescription>
            Runtime-assured virtual capacity for AI data centers.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4 py-6">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <Link
                href={item.href}
                className={cn(
                  "text-base font-medium tracking-wide text-foreground transition-colors hover:text-primary",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="flex flex-col gap-2 border-l border-border/70 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "text-base text-muted-foreground transition-colors hover:text-foreground",
                        pathname === child.href && "text-foreground"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <Button asChild size="lg" className="w-full">
            <Link href={buildLeadHref("capacity-audit", "mobile-nav")}>
              Request Capacity Audit
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
