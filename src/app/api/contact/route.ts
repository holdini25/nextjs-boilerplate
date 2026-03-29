import { deliverLead } from "@/lib/lead-delivery"
import {
  capacityAuditSchema,
  contactLeadSchema,
  mapZodErrors,
} from "@/lib/validators"

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const detailed = Boolean(payload.role || payload.message)
    const result = detailed
      ? contactLeadSchema.safeParse(payload)
      : capacityAuditSchema.safeParse(payload)

    if (!result.success) {
      return Response.json(
        {
          ok: false,
          fieldErrors: mapZodErrors(result),
          message: "Please correct the highlighted fields.",
        },
        { status: 400 }
      )
    }

    await deliverLead(result.data)

    return Response.json({
      ok: true,
      message: "Lead accepted.",
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to deliver the request."

    return Response.json(
      {
        ok: false,
        message,
      },
      { status: 502 }
    )
  }
}
