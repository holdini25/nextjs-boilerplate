"use client"

import { motion, useReducedMotion } from "motion/react"

export function ProofLog({
  lines,
}: {
  lines: Array<{ label: string; value: string }>
}) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="rounded-[1.8rem] border border-border/70 bg-surface p-5">
      <div className="rounded-[1.4rem] border border-border/70 bg-background/70 p-5 font-mono text-base text-foreground">
        {lines.map((line, index) => (
          <motion.div
            key={line.label}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="border-b border-border/50 py-3 last:border-b-0"
          >
            <span className="text-muted-foreground">{line.label}: </span>
            <span>{line.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
