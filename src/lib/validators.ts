import { z } from "zod"

import {
  buyerTypes,
  constraintOptions,
  leadIntents,
  siteTypes,
  timelineOptions,
} from "@/lib/constants"

const buyerTypeSchema = z.enum(buyerTypes)
const siteTypeSchema = z.enum(siteTypes)
const timelineSchema = z.enum(timelineOptions)
const leadIntentSchema = z.enum(leadIntents)

const baseLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  company: z.string().trim().min(2, "Enter your company."),
  email: z.string().trim().email("Enter a valid email address."),
  buyerType: buyerTypeSchema,
  siteType: siteTypeSchema,
  timeline: timelineSchema,
  intent: leadIntentSchema,
  source: z.string().trim().min(2, "Missing lead source."),
})

export const capacityAuditSchema = baseLeadSchema

export const contactLeadSchema = baseLeadSchema.extend({
  role: z.string().trim().min(2, "Enter your role."),
  constraints: z
    .array(z.enum(constraintOptions))
    .min(1, "Select at least one current constraint."),
  message: z
    .string()
    .trim()
    .min(12, "Add a little more context for the site.")
    .max(2000, "Message is too long."),
})

export const leadSubmissionSchema = baseLeadSchema.extend({
  role: z.string().trim().min(2).optional(),
  constraints: z.array(z.enum(constraintOptions)).optional(),
  message: z.string().trim().min(12).max(2000).optional(),
})

export type CapacityAuditInput = z.infer<typeof capacityAuditSchema>
export type ContactLeadInput = z.infer<typeof contactLeadSchema>
export type LeadSubmissionInput = z.infer<typeof leadSubmissionSchema>

export function mapZodErrors<T extends z.ZodType>(
  result: z.ZodSafeParseError<z.input<T>>
) {
  const fieldErrors: Record<string, string> = {}

  for (const issue of result.error.issues) {
    const key = issue.path[0]

    if (typeof key === "string" && !fieldErrors[key]) {
      fieldErrors[key] = issue.message
    }
  }

  return fieldErrors
}
