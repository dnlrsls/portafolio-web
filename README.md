# Daniel Rosales Portfolio

A static, bilingual Astro portfolio built as a dual-theme monochrome ASCII-native editorial folio.

The initial theme follows `prefers-color-scheme`. A compact header control stores a
manual override in `localStorage`; without that override, later operating-system theme
changes remain live. Theme state updates semantic CSS roles, metadata, favicon, the
animated ASCII character field, and the static ASCII portrait independently from language.

The deterministic viewport-wide ASCII field keeps every glyph on a stable lattice anchor: 76 × 40
(3,040 glyphs) above 640px and 24 × 42 (1,008 glyphs) at or below 640px. It uses 12px desktop and
10px mobile Fragment Mono, with independent 10–16px per-axis oscillation over 4–7-second periods.
Fine-pointer visitors produce radial target displacement within a 140px radius, capped at 28px with
a velocity cap of 180px/s. A 120 spring, 22 damping, and 1.25 falloff create a short trailing return.
The Canvas updates at approximately 24ms while influenced and 50ms while idle. Coarse pointers keep
autonomous drift only, while OS `prefers-reduced-motion: reduce` renders the field completely static
and disables repulsion.

## Local development

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm check
pnpm build
```

## Contribution policy

This is a personal portfolio. Non-owner issues and pull requests are automatically closed.

## Deployment configuration

The published site is [https://dnlrsls.github.io/portafolio-web/](https://dnlrsls.github.io/portafolio-web/).

In the `dnlrsls/portafolio-web` repository, set **Settings → Pages → Build and deployment → Source**
to **GitHub Actions**. The included workflow deploys pushes to `main` and can also run manually.

Production builds use:

```text
SITE_URL=https://dnlrsls.github.io
BASE_PATH=/portafolio-web
```

## Production SEO

Production builds generate a base-prefixed sitemap index at
`https://dnlrsls.github.io/portafolio-web/sitemap-index.xml`. The page metadata uses
an absolute canonical URL and 1200 × 630 social card; `robots.txt` and the document
head both advertise the sitemap index.

### Owner action: Google Search Console

The repository owner must add and verify the GitHub Pages property
`https://dnlrsls.github.io/portafolio-web/` in Google Search Console, then submit the
sitemap index URL above. This manual Search Console step has not been completed by
this project.

## Typography

Doto Variable and Fragment Mono are bundled locally through Fontsource. Both are
released under the SIL Open Font License, include the Latin coverage required by the
Spanish and English interface, and make no runtime font requests to third-party services.

Doto is installed from `@fontsource-variable/doto`; its weight and rounded-dot axes
support the readable dot-matrix display voice. Fragment Mono renders the structural
ASCII compositions, evidence, navigation, and body copy.
