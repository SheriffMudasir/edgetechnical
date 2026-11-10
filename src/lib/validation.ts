import { z } from "zod";
import { budgets, needs, roles, schoolTypes, studentRanges, timelines } from "@/content/contact";

/** Nigerian phone: 0803 123 4567, +234 803 123 4567, 2348031234567 */
export function normaliseNgPhone(raw: string) {
  return raw.replace(/[\s\-().]/g, "");
}
const NG_PHONE = /^(?:\+?234|0)[789][01]\d{8}$/;

const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z.union([z.enum(values), z.literal("")]).optional();

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(120),
  organisation: z.string().trim().min(2, "Which school or organisation?").max(160),
  role: z.enum(roles, { message: "Please choose your role" }),
  email: z.email("Please enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .refine((v) => NG_PHONE.test(normaliseNgPhone(v)), "Please enter a Nigerian phone number, e.g. 0803 123 4567"),
  needs: z.array(z.enum(needs.map((n) => n.value) as [string, ...string[]])).min(1, "Choose at least one thing you need"),
  schoolType: optionalEnum(schoolTypes),
  students: optionalEnum(studentRanges),
  modules: z.array(z.string().max(60)).max(20).optional(),
  budget: optionalEnum(budgets),
  timeline: optionalEnum(timelines),
  message: z.string().trim().max(3000, "Please keep your message under 3,000 characters").optional(),
  consent: z.boolean().refine((v) => v, "Please agree so we can contact you"),
  // context from pricing / estimator
  package: z.string().max(40).optional(),
  estimate: z.string().max(80).optional(),
  // honeypot: must stay empty
  website: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
