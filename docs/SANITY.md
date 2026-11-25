# Content now comes from Sanity ("KFOCO dashboard")

Sanity project: `mrjotrl0` (org KFOCO), dataset `production`.
Dashboard (Sanity Studio) is built into the site at **/studio** (e.g. https://your-domain/studio).

## What changed in the data flow

| Before | After |
| --- | --- |
| Content hardcoded in `src/data/*.ts` and `src/messages/{en,ar}.json`; images hotlinked from kfoco.com / Unsplash | Everything is stored in Sanity. Images are Sanity assets (cdn.sanity.io). |
| Components imported data directly | `src/lib/content.ts` (`getContent()`) fetches everything with ONE GROQ query and returns the same shapes the components used before |
| next-intl messages from JSON files | next-intl messages are built from the `uiTextGroup` documents (`src/i18n/request.ts`) |
| Static build only | Static pages that refresh every 60 s (ISR), optional instant refresh via webhook |

Only `src/data/nav.ts` is left in code (menu structure/URLs). Menu labels are in Sanity (`nav` text group).

## Endpoint

`GET https://mrjotrl0.apicdn.sanity.io/v2024-10-01/data/query/production?query=<GROQ>`
(`api.sanity.io` with a Bearer token if `SANITY_API_READ_TOKEN` is set). The full GROQ is the `QUERY` constant in `src/lib/content.ts`.
`POST /api/revalidate?secret=<SANITY_REVALIDATE_SECRET>` (new) clears the cache tag `sanity`.

## Env vars (Vercel)

| Name | Required | Value |
| --- | --- | --- |
| NEXT_PUBLIC_SANITY_PROJECT_ID | recommended (defaults to mrjotrl0) | mrjotrl0 |
| NEXT_PUBLIC_SANITY_DATASET | recommended (defaults to production) | production |
| SANITY_API_READ_TOKEN | only if dataset becomes private | read token |
| SANITY_REVALIDATE_SECRET | optional | any random string, used in the Sanity webhook URL |

Never put a write token in Vercel.

## Sanity document types

siteSettings (contact info, logo, hero/page-header images, company profile PDF), category, project (gallery), service (Services page), homeService (Home page), processStep, event, article, knowledgeVideo, teamMember, client, qualification, stat, milestone, uiTextGroup (all headings, labels, buttons, SEO titles in EN + AR; 35 groups).

## Re-seeding

`scripts/seed/` holds the snapshot of the old static content. `SANITY_API_WRITE_TOKEN=... npm run migrate:content` re-uploads it (overwrites documents with the same IDs, so do not run it after editors have changed content).

## Dashboard (Studio)

Open `/studio` on the site and sign in with the Sanity account. The domain must be added under Sanity > API > CORS origins (with credentials).
