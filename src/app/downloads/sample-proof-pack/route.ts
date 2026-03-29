import "server-only"

import { proofPackChecklist, proofPackIncludes, proofPackSampleLog } from "@/content/copy/proof-pack"

export function GET() {
  const lines = [
    "# GridNinja Sample Proof Pack",
    "",
    "This sample pack previews the operator-facing artifacts behind Proof Before Autonomy.",
    "",
    "## Included artifacts",
    ...proofPackIncludes.map((item) => `- ${item}`),
    "",
    "## Sample log",
    ...proofPackSampleLog.map((line) => `- ${line.label}: ${line.value}`),
    "",
    "## Review checklist",
    ...proofPackChecklist.map((item) => `- ${item}`),
    "",
    "## Next step",
    "Request a Capacity Audit to generate a site-specific proof pack and Shadow Mode evidence baseline.",
    "",
  ]

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition":
        'attachment; filename="gridninja-sample-proof-pack.md"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}
