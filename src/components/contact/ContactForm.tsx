"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import type { z } from "zod";
import { submitQuote } from "@/app/contact/actions";
import { budgets, contactCopy, formModules, needs, roles, schoolTypes, studentRanges, timelines } from "@/content/contact";
import { quoteSchema } from "@/lib/validation";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

type FormIn = z.input<typeof quoteSchema>;
type FormOut = z.output<typeof quoteSchema>;

export type ContactPrefill = Partial<Pick<FormIn, "needs" | "modules" | "message" | "package" | "estimate" | "students">>;

const field =
  "h-12 w-full rounded-[10px] border border-line bg-chalk px-4 text-[16px] outline-none transition-colors placeholder:text-slate/70 focus:border-ink aria-[invalid=true]:border-edge-deep";
const labelCls = "mb-2 block text-[14px] font-medium";

function Err({ errors, name }: { errors: FieldErrors<FormIn>; name: keyof FormIn }) {
  const msg = errors[name]?.message;
  if (!msg) return null;
  return (
    <p id={`${String(name)}-error`} role="alert" className="mt-1.5 text-[13px] text-edge-deep">
      {String(msg)}
    </p>
  );
}

function Chip({ label, ...input }: { label: string } & React.ComponentPropsWithoutRef<"input">) {
  return (
    <label className="relative cursor-pointer">
      <input type="checkbox" className="peer sr-only" {...input} />
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-chalk px-4 py-2 text-[14px] transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-edge hover:border-ink/40">
        {label}
      </span>
    </label>
  );
}

export function ContactForm({ prefill = {} }: { prefill?: ContactPrefill }) {
  const reduced = useReducedMotion();
  const [pending, startTransition] = useTransition();
  const [done, setDone] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!done || !wrapRef.current) return;
    const top = wrapRef.current.getBoundingClientRect().top;
    if (top < 80) window.scrollBy({ top: top - 120, behavior: reduced ? "auto" : "smooth" });
  }, [done, reduced]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormIn, unknown, FormOut>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      organisation: "",
      email: "",
      phone: "",
      needs: prefill.needs ?? [],
      modules: prefill.modules ?? [],
      students: prefill.students ?? "",
      schoolType: "",
      budget: "",
      timeline: "",
      message: prefill.message ?? "",
      consent: false,
      package: prefill.package ?? "",
      estimate: prefill.estimate ?? "",
      website: "",
    },
  });

  const onSubmit = (values: FormOut) => {
    setFormError(null);
    startTransition(async () => {
      const res = await submitQuote(values);
      if (res.ok) {
        setDone(true);
        return;
      }
      setFormError(res.message);
      for (const [k, v] of Object.entries(res.fieldErrors ?? {})) {
        if (v?.[0]) setError(k as keyof FormIn, { message: v[0] });
      }
    });
  };

  const aria = (name: keyof FormIn) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${String(name)}-error` : undefined,
  });

  return (
    <div ref={wrapRef} className="relative scroll-mt-28">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div
            key="done"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[560px] flex-col justify-center rounded-[14px] bg-ivy p-8 text-paper md:p-12"
            role="status"
            aria-live="polite"
          >
            <svg viewBox="0 0 52 52" className="size-16" aria-hidden>
              <motion.circle
                cx="26"
                cy="26"
                r="24"
                fill="none"
                stroke="#FF5A1F"
                strokeWidth="2.5"
                initial={{ pathLength: reduced ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.path
                d="M15 27l7 7 15-16"
                fill="none"
                stroke="#F5F2EB"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: reduced ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              />
            </svg>
            <p className="mt-8 font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-[1]">{contactCopy.success}</p>
            <p className="mt-5 max-w-md text-paper/80">
              We&apos;ve got your details. If it&apos;s urgent, message us on WhatsApp and mention your school&apos;s name.
            </p>
            <a
              href={whatsappLink("Hello Edgetechnical, I just sent an enquiry on your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-6 py-3 font-medium text-ink"
            >
              Open WhatsApp
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-8"
            aria-describedby={formError ? "form-error" : undefined}
          >
            {/* Honeypot */}
            <div aria-hidden className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            <input type="hidden" {...register("package")} />
            <input type="hidden" {...register("estimate")} />

            <fieldset className="grid gap-5 sm:grid-cols-2">
              <legend className="label-mono mb-5 text-slate">01 — About you</legend>
              <div>
                <label htmlFor="name" className={labelCls}>
                  Your name
                </label>
                <input id="name" autoComplete="name" className={field} {...register("name")} {...aria("name")} />
                <Err errors={errors} name="name" />
              </div>
              <div>
                <label htmlFor="organisation" className={labelCls}>
                  School / organisation
                </label>
                <input id="organisation" autoComplete="organization" className={field} {...register("organisation")} {...aria("organisation")} />
                <Err errors={errors} name="organisation" />
              </div>
              <div>
                <label htmlFor="role" className={labelCls}>
                  Your role
                </label>
                <select id="role" className={field} defaultValue="" {...register("role")} {...aria("role")}>
                  <option value="" disabled>
                    Choose…
                  </option>
                  {roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <Err errors={errors} name="role" />
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input id="email" type="email" autoComplete="email" className={field} {...register("email")} {...aria("email")} />
                <Err errors={errors} name="email" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className={labelCls}>
                  Phone (WhatsApp if possible)
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0803 123 4567"
                  className={field}
                  {...register("phone")}
                  {...aria("phone")}
                />
                <Err errors={errors} name="phone" />
              </div>
            </fieldset>

            <fieldset aria-describedby={errors.needs ? "needs-error" : undefined}>
              <legend className="label-mono mb-4 text-slate">02 — What you need</legend>
              <div className="flex flex-wrap gap-2">
                {needs.map((n) => (
                  <Chip key={n.value} label={n.label} value={n.value} {...register("needs")} />
                ))}
              </div>
              <Err errors={errors} name="needs" />
            </fieldset>

            <fieldset className="grid gap-5 sm:grid-cols-2">
              <legend className="label-mono mb-5 text-slate">03 — Your school</legend>
              <div>
                <label htmlFor="schoolType" className={labelCls}>
                  School type
                </label>
                <select id="schoolType" className={field} {...register("schoolType")}>
                  <option value="">Choose…</option>
                  {schoolTypes.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="students" className={labelCls}>
                  Number of students
                </label>
                <select id="students" className={field} {...register("students")}>
                  <option value="">Choose…</option>
                  {studentRanges.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <p className={labelCls} id="modules-label">
                  Modules you&apos;re interested in
                </p>
                <div className="flex flex-wrap gap-2" role="group" aria-labelledby="modules-label">
                  {formModules.map((m) => (
                    <Chip key={m} label={m} value={m} {...register("modules")} />
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset className="grid gap-5 sm:grid-cols-2">
              <legend className="label-mono mb-5 text-slate">04 — Budget & timing</legend>
              <div>
                <label htmlFor="budget" className={labelCls}>
                  Budget range
                </label>
                <select id="budget" className={field} {...register("budget")}>
                  <option value="">Choose…</option>
                  {budgets.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={labelCls}>
                  Timeline
                </label>
                <select id="timeline" className={field} {...register("timeline")}>
                  <option value="">Choose…</option>
                  {timelines.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>
                  Anything else? <span className="font-normal text-slate">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={cn(field, "h-auto py-3 leading-relaxed")}
                  placeholder="Tell us about your school, your current website, or what's not working."
                  {...register("message")}
                  {...aria("message")}
                />
                <Err errors={errors} name="message" />
              </div>
            </fieldset>

            <div>
              <label className="flex items-start gap-3 text-[15px] leading-snug">
                <input type="checkbox" className="mt-0.5 size-5 shrink-0 accent-ivy" {...register("consent")} {...aria("consent")} />
                <span>
                  I agree that Edgetechnical can contact me about this enquiry and store my details as described in the{" "}
                  <a href="/privacy" className="underline underline-offset-4">
                    privacy policy
                  </a>{" "}
                  (NDPA 2023).
                </span>
              </label>
              <Err errors={errors} name="consent" />
            </div>

            {formError && (
              <p id="form-error" role="alert" className="rounded-[10px] border border-edge-deep/40 bg-edge/10 px-4 py-3 text-[14px] text-edge-deep">
                {formError}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="submit"
                disabled={pending}
                className="inline-flex h-14 items-center gap-2 rounded-full bg-edge px-8 font-medium text-ink transition-colors hover:bg-ink hover:text-paper disabled:opacity-60"
              >
                {pending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
                  </>
                ) : (
                  <>
                    Send enquiry <Check className="size-4" aria-hidden />
                  </>
                )}
              </button>
              <p className="text-[14px] text-slate">We reply within one working day.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
