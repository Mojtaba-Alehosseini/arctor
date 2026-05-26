# Arctor — portfolio site

A personal website for **Shirin Keshmirinejad** (brand: **Arctor**) — Iranian-Italian architect & interior designer based in Genoa.

Designed and built in May 2026. Built with **Astro 5**, **React 19**, **Tailwind 4**, and **Motion** (the Framer-Motion successor).

> *"Buildings are slow instruments. They breathe with the desert, remember the rain, and hold the people inside the way a hand holds water — gently, and with respect."*

## What's in here

- Five languages out of the box: **English** (default), **Italiano**, **Deutsch**, **Français**, and **فارسی** with full **RTL** layout.
- Six pages × 5 locales: home, work index, project detail, about, services, contact.
- Five fully-translated project case studies, including the master's thesis on biomimetic windcatchers.
- An ambient canvas hero with a stylised windcatcher silhouette and warm-air particles.
- A custom cursor, reveal-on-scroll animations, marquee, and a soft grain overlay.
- Mobile-first, accessible (`prefers-reduced-motion` honoured, semantic landmarks, skip-link).
- Static output — deploys anywhere (GitHub Pages workflow included, also works on Vercel / Netlify / Cloudflare Pages).

## Run locally

```bash
npm install
npm run dev
# open http://localhost:4321
```

## Build

```bash
npm run build
# output in dist/
```

The repo ships with a GitHub Actions workflow (`.github/workflows/build.yml`) that runs `npm run build` on every push, so the build is verified in CI.

A second workflow (`.github/workflows/deploy-pages.yml`) deploys to **GitHub Pages** when enabled in the repo settings (Settings → Pages → Source: GitHub Actions).

## What to swap for the final version

- **Portrait** — `src/components/AboutContent.astro` has an SVG placeholder. Drop a real photo into `public/portrait.jpg` and replace the SVG block with `<img src="/portrait.jpg" alt="Shirin Keshmirinejad" />`.
- **Project images** — the case studies are text-only right now. Add cover images to `public/images/projects/{slug}.jpg` and wire them into `src/components/ProjectCard.astro` and `src/pages/work/[slug].astro`.
- **CV PDF** — drop a CV at `public/cv-shirin-keshmirinejad.pdf` and link it from the contact page.
- **Contact email** — `src/components/ContactContent.astro` currently uses `shirin.arctor@gmail.com` as a placeholder; swap for the preferred address.
- **Domain / site URL** — `astro.config.mjs` currently uses `https://arctor.studio`; swap for the real domain when known.

## Structure

```
src/
├── components/    # Astro + React components (Hero, Manifesto, Thesis, etc.)
├── data/          # Project data (with translations per locale)
├── i18n/          # Locale config and translation dictionaries
├── layouts/       # Base layout with header / footer
├── pages/         # Routes — root paths for English, [lang]/ for others
└── styles/        # global.css (Tailwind v4 theme + tokens)
```

## Languages

| Locale | Code | Direction | URL prefix |
|---|---|---|---|
| English | `en` | ltr | `/` (default, no prefix) |
| Italiano | `it` | ltr | `/it/` |
| Deutsch | `de` | ltr | `/de/` |
| Français | `fr` | ltr | `/fr/` |
| فارسی | `fa` | **rtl** | `/fa/` |

The language switcher in the header preserves the current page when changing locales.

## License

All design and content © 2026 Shirin Keshmirinejad. Code is MIT — feel free to learn from it.
