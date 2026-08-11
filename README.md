# Shirin Keshmirinejad — portfolio

Personal website for **Shirin Keshmirinejad**, multidisciplinary architect and interior
designer based in Genoa, Italy.

Built with **Astro 5**, **Tailwind CSS 4**, and no client framework — the whole site
ships a few kilobytes of hand-written JavaScript.

## The design

Every visual decision comes from Shirin's own material rather than a template:

- **Palette** — the deep forest green and antique gold of her CV, the dusty rose of her
  portfolio cover, on a warm paper ground. Nothing invented.
- **Marks** — the ten black glyphs she drew for her portfolio (one per project) were
  traced from the PDF into SVG (`src/lib/marks.ts`) and now run through the whole
  interface: the work index, project headers, the footer marquee, the favicon. Her
  blocky monogram is the site logo.
- **Type** — Instrument Serif for display, Instrument Sans for text, IBM Plex Mono for
  metadata (an architect's drawing labels are monospaced), Vazirmatn for Persian.
- **Layout** — a faint six-column drawing-sheet grid, hairline rules, numbered sections.
- **Motion** — CSS transitions on a strong ease-out curve, a clip-path wipe for images,
  and a pointer-tracked cover preview on the work index driven by a critically damped
  spring. All of it disabled under `prefers-reduced-motion`.

## Content

All copy is drawn from Shirin's CV and her 63-page portfolio: ten real projects between
2010 and 2025, real roles, real locations, real narrative. Project imagery is exported
directly from the portfolio plates.

The thesis section carries a purpose-drawn SVG section of *House of the Future*, showing
the wind catcher, solar chimney, central shaft and floor inlets with animated airflow.

## Languages

| Locale | Code | Direction | URL |
| --- | --- | --- | --- |
| English | `en` | ltr | `/` |
| Italiano | `it` | ltr | `/it/` |
| Deutsch | `de` | ltr | `/de/` |
| Français | `fr` | ltr | `/fr/` |
| فارسی | `fa` | **rtl** | `/fa/` |

Seventy-five static pages: home, work index, ten project pages, about, practice and
contact — in five languages, with full RTL support for Persian.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321/arctor
npm run build    # static output in dist/
```

## Structure

```
src/
├── components/   # Header, Hero, WorkIndex, Thesis, AirflowDiagram, …
├── data/
│   ├── projects.ts        # project metadata
│   ├── projects.i18n.ts   # project copy in five languages
│   └── images.ts          # generated image manifest (sizes + placeholder colours)
├── i18n/         # locale config and UI dictionaries
├── lib/
│   ├── marks.ts  # Shirin's ten project glyphs + monogram, as SVG paths
│   └── site.ts   # contact details and constants
├── layouts/
├── pages/        # root paths for English, [lang]/ for the rest
└── styles/       # global.css — tokens, type scale, motion
public/
├── images/<project>/   # cover, card and portfolio plates
├── marks/              # the glyphs as standalone SVG
├── shirin-keshmirinejad-cv.pdf
└── shirin-keshmirinejad-portfolio.pdf
```

## Deployment

`.github/workflows/deploy-pages.yml` builds and publishes to GitHub Pages on every push
to `main` (Settings → Pages → Source: GitHub Actions).

## Licence

All design and content © 2026 Shirin Keshmirinejad. Code is MIT.
