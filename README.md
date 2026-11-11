# Edgetechnical — marketing website

Marketing site for **Edgetechnical Solutions Limited** (RC 9259130), a software agency for education technology in Abuja.
Concept: **"The Digital Campus"**. The Front Gate (school websites, the flagship), the Engine Room (school software) and the Study Room (AI for learning).

Built with **Next.js 16 (App Router, Cache Components) + TypeScript**, Tailwind CSS v4, Motion, Lenis, MDX, Zod, React Hook Form and Resend.

---

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in values (all optional in development)
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

Lint and type-check:

```bash
npm run lint
npx tsc --noEmit
```

## Environment variables

| Variable | Required | What it does |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URLs, sitemap, OG images. Defaults to `https://edgetechnical.ng`. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | Digits only, international format, e.g. `2348012345678`. Used by every WhatsApp button. |
| `RESEND_API_KEY` | For email | Contact form emails via [Resend](https://resend.com). Without it, enquiries are logged to the server console. |
| `CONTACT_TO_EMAIL` | For email | Where enquiries are sent. Comma-separate multiple addresses. |
| `CONTACT_FROM_EMAIL` | For email | Sender, e.g. `Edgetechnical Website <website@edgetechnical.ng>`. Must be on a domain verified in Resend. |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional | Plausible domain (cookieless, so no cookie banner needed). Leave empty to load no analytics. |
| `NEXT_PUBLIC_ANALYTICS_SRC` | Optional | Custom/proxied Plausible script URL. |

## Editing content (no component changes needed)

All copy lives in `src/content/`:

| File | What's in it |
|---|---|
| `site.ts` | Company facts, email/phone/address, WhatsApp, taglines, navigation, mega-menu, socials, marquee items |
| `home.ts` | Home hero, problem section, commitment stats, process steps, "Why Edgetechnical", final CTA |
| `modules.ts` | School website modules (each `id` is an anchor on `/schools`), school types, "Built for Nigeria", site-structure diagram |
| `services.ts` | The three pillars and the "We also build" services |
| `software.ts` | `/school-software` copy |
| `ai.ts` | `/ai` copy and the scripted school-assistant demo answers |
| `studywise.ts` | StudyWise AI copy, features, FAQ, store links, stats (hidden until `showStats: true`), the tutor demo script |
| `pricing.ts` | Packages, comparison table, care plan, add-ons and the quote-estimator numbers |
| `faq.ts` | Home FAQ (also used for FAQPage JSON-LD) |
| `contact.ts` | Quote-form options and prefill rules |
| `people.ts` | Team, values, testimonials (hidden until `showTestimonials: true`) |
| `work.ts` | Case-study index |
| `insights.ts` | Blog index |

Emphasis words in headlines are wrapped in `*asterisks*` and render in the serif italic, e.g. `"Let's build your *digital campus.*"`.

## Add a case study

1. Add an entry to `caseStudies` in `src/content/work.ts` (set `concept: false` for real clients).
2. Create `src/content/work/<slug>.mdx` with the story. Use `## The challenge`, `## What we built` and `## Results`.
3. Pick a `cover`. Covers are code-built mockups in `src/components/work/CaseCover.tsx`; add a new variant there for a new client.

## Add a blog post

1. Add an entry to `posts` in `src/content/insights.ts` (slug, title, description, ISO date, reading time, tag).
2. Create `src/content/insights/<slug>.mdx`. Write normal Markdown; internal links like `[contact us](/contact)` work.

New pages are picked up automatically by the sitemap and get Article JSON-LD and a branded OG image.

## Deploy to Vercel

1. Push this repository to GitHub and import it in Vercel (framework preset: Next.js).
2. Add the environment variables above in **Project → Settings → Environment Variables**.
3. Add your domain (e.g. `edgetechnical.ng`) and set `NEXT_PUBLIC_SITE_URL` to match.
4. Verify your sending domain in Resend, then submit the contact form once to test delivery.
5. Run [PageSpeed Insights](https://pagespeed.web.dev/) on the live URL (see the performance notes below).

## How it's built

- `src/app/` holds the routes. Every page sets metadata through `pageMetadata()` in `src/lib/seo.ts` (canonical URL, OG and Twitter tags, dynamic OG image from `/api/og`).
- `src/components/mockups/` holds every product visual, built in code (Greenfield Academy site in three states, admissions form, result card flip, payment success, report card, AI tutor phone, offline attendance, school assistant chat).
- `src/components/motion/` holds the motion kit: `SplitText` (CSS word reveal, paints before hydration), `Reveal` (shared IntersectionObserver), `Marquee`, `CountUp`, `Magnetic`, `Cursor`, `PageTransition`, `SmoothScroll` (Lenis).
- Reduced motion: Lenis, the custom cursor, the page wipe, parallax and staggers are disabled; reveals become simple fades.
- Contact: a Server Action (`src/app/contact/actions.ts`) with Zod validation, a honeypot field and per-IP rate limiting. Email is sent through `src/lib/email.ts`.
- SEO: `sitemap.ts`, `robots.ts`, plus JSON-LD for Organization/ProfessionalService (every page), FAQPage, Article and SoftwareApplication (StudyWise).
- Below-the-fold sections are wrapped in `<Defer>` (Suspense + `content-visibility: auto`) to cut initial rendering and hydration work. CSS is inlined (`experimental.inlineCss`) to remove a render-blocking request.

## Performance notes

Lighthouse (mobile, local production build): Accessibility, Best Practices and SEO score 98–100, and CLS is 0–0.014.
Local Performance scores were 83–92 on most pages, with simulated LCP around 3.2s. They swung widely with how busy the development laptop was (CPU benchmark 750–2000). Measure the deployed site on PageSpeed Insights for a reliable number. If LCP is still above target, the most likely next step is to self-host only the regular Instrument Serif weight for the hero and load the italic lazily.

## Owner checklist: every `TODO(owner)`

**Contact details** (`src/content/site.ts`)
- [ ] Confirm the public email address and final domain (`hello@edgetechnical.ng` / `edgetechnical.ng` are placeholders)
- [x] Confirm the phone number 0810 230 1860 (taken from the Edgetechnical credit on the Al-Mu’minun portal)
- [ ] Real office address
- [x] Set `NEXT_PUBLIC_WHATSAPP_NUMBER`
- [ ] Real social profile URLs (or remove unused ones)

**Brand**
- [ ] Final logo (replace `src/components/ui/Wordmark.tsx` and `src/app/icon.svg`)

**Pricing** (`src/content/pricing.ts`, all placeholders)
- [ ] Starter / Standard / Premium prices
- [ ] Care plan monthly price
- [ ] School Management System "from ₦X per term / per student"
- [ ] Calibrate the quote-estimator base, module prices and size multipliers

**StudyWise AI** (`src/content/studywise.ts`)
- [ ] Which stats to show publicly, then set `showStats: true`
- [ ] App Store / Play Store links if mobile apps ship (the web app link is already set)
- [ ] AI Points pricing to display, then set `pricingConfirmed: true`
- [ ] Screenshots and logo
- [ ] Same stats note in `src/content/work/studywise-ai.mdx`

**Proof and people**
- [ ] Confirm the home-page commitment stats (`src/content/home.ts`)
- [ ] Real team members and photos (`src/content/people.ts`, photos in `public/images/team`)
- [ ] Real testimonials with permission, then set `showTestimonials: true`
- [ ] Confirm Al-Mu’minun International Academy is happy to be featured, and add outcomes they agree to share (`src/content/work/al-muminun-international-academy.mdx`)

**Legal**
- [ ] Have the privacy policy reviewed by a Nigerian data-protection professional (NDPA 2023)
- [ ] Have the terms reviewed by a Nigerian lawyer
