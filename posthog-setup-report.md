<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the GIJUHAN Next.js 16.2.1 App Router project.

## Summary of changes

- **`instrumentation-client.ts`** (new) — Initializes PostHog client-side via the `instrumentation-client` pattern (Next.js 15.3+). Uses a `/ingest` reverse proxy, enables `capture_exceptions` for automatic error tracking, and sets the `2026-01-30` defaults snapshot.
- **`next.config.ts`** — Added `/ingest/*`, `/ingest/static/*`, and `/ingest/array/*` reverse proxy rewrites routing through `us.i.posthog.com`, plus `skipTrailingSlashRedirect: true`.
- **`lib/posthog-server.ts`** (new) — Singleton PostHog Node.js client (`posthog-node`) for server-side event capture. Configured with `flushAt: 1` and `flushInterval: 0` for immediate flushing in serverless functions.
- **`.env.local`** — `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` added.
- **`components/contact/ContactForm.tsx`** — Tracks `contact_form_submitted` (with service, company, source properties) and `contact_form_error` (with reason). Calls `posthog.identify()` on successful submission. Passes `X-POSTHOG-DISTINCT-ID` and `X-POSTHOG-SESSION-ID` headers to the API for server-client correlation.
- **`app/api/contact/route.ts`** — Server-side `contact_lead_received` event with full lead properties. Calls `posthog.identify()` to associate the email address as the person on the server side.
- **`app/work/WorkPageClient.tsx`** — Tracks `case_study_clicked` (slug, title, tags) and `work_filter_changed` (filter value).
- **`app/blog/BlogListClient.tsx`** — Tracks `blog_post_clicked` (slug, title, category).
- **`components/ui/GlobalCTA.tsx`** — Tracks `cta_clicked` with `location: global_cta`.
- **`components/home/FeaturedWork.tsx`** — Tracks `featured_work_clicked` (slug, title, tags).
- **`components/layout/Navbar.tsx`** — Tracks `nav_start_project_clicked` with `location: desktop_nav` or `mobile_nav`.

## Events

| Event | Description | File |
|---|---|---|
| `contact_form_submitted` | User successfully submitted the contact form | `components/contact/ContactForm.tsx` |
| `contact_form_error` | Contact form submission failed | `components/contact/ContactForm.tsx` |
| `contact_lead_received` | Server-side: lead received and forwarded | `app/api/contact/route.ts` |
| `case_study_clicked` | User clicked a completed case study | `app/work/WorkPageClient.tsx` |
| `work_filter_changed` | User switched portfolio filter | `app/work/WorkPageClient.tsx` |
| `blog_post_clicked` | User clicked a blog post | `app/blog/BlogListClient.tsx` |
| `cta_clicked` | User clicked the global CTA button | `components/ui/GlobalCTA.tsx` |
| `featured_work_clicked` | User clicked a featured project on the home page | `components/home/FeaturedWork.tsx` |
| `nav_start_project_clicked` | User clicked "Start a Project" in the nav | `components/layout/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/435476/dashboard/1616507)
- [Contact form submissions (30d)](https://us.posthog.com/project/435476/insights/CepZyB4W)
- [CTA → Contact form conversion funnel](https://us.posthog.com/project/435476/insights/Uou86RGY)
- [Content engagement (blog + case studies)](https://us.posthog.com/project/435476/insights/Obf6HXLI)
- [Nav CTA clicks by location](https://us.posthog.com/project/435476/insights/UprKL7Nf)
- [Work filter usage](https://us.posthog.com/project/435476/insights/2I3cDf6Q)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
