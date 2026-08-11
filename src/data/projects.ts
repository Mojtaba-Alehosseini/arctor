import { copy, type ProjectCopy } from "./projects.i18n";
import { images, type Plate } from "./images";
import type { Locale } from "../i18n/config";
import { DEFAULT_LOCALE } from "../i18n/config";

export type Category = "architecture" | "interior" | "urban" | "research";

export interface Project {
  slug: string;
  /** Sort key — newest first */
  order: number;
  year: string;
  category: Category;
  place: string;
  role: string;
  scope: string;
  tools: string[];
  featured?: boolean;
  cover: Plate;
  card: Plate;
  plates: Plate[];
}

interface Meta {
  slug: string;
  year: string;
  category: Category;
  place: string;
  role: string;
  scope: string;
  tools: string[];
  featured?: boolean;
}

const meta: Meta[] = [
  {
    slug: "house-of-future",
    year: "2025",
    category: "research",
    place: "Abu Dhabi, United Arab Emirates",
    role: "Master's thesis — design & environmental analysis",
    scope: "Single-family dwelling · passive cooling system",
    tools: ["Revit", "Rhinoceros", "Environmental analysis", "V-Ray"],
    featured: true,
  },
  {
    slug: "castelnuovo-davane",
    year: "2024",
    category: "urban",
    place: "Tuscany, Italy",
    role: "Design Studio IV, with Archea Associati — supervisor Marco Casamonti",
    scope: "Village regeneration · hotels, galleries, retail, housing",
    tools: ["Revit", "AutoCAD", "Rhinoceros", "Photoshop"],
    featured: true,
  },
  {
    slug: "k-cafe-factory",
    year: "2021",
    category: "architecture",
    place: "Zagros Industrial Town, Kermanshah, Iran",
    role: "Architectural design & project coordination",
    scope: "4,000 m² · production workshop and administration",
    tools: ["Revit", "AutoCAD", "V-Ray"],
    featured: true,
  },
  {
    slug: "kamran-4",
    year: "2018",
    category: "interior",
    place: "Fereshteh, Tehran, Iran",
    role: "Interior design & project coordination",
    scope: "Nine-storey residential building · apartments and common areas",
    tools: ["AutoCAD", "3ds Max", "Photoshop"],
  },
  {
    slug: "alvand-tower",
    year: "2016",
    category: "architecture",
    place: "Tehran, Iran",
    role: "Façade design",
    scope: "Administrative building · façade and detailing",
    tools: ["AutoCAD", "Revit", "Photoshop"],
  },
  {
    slug: "ashvan-house",
    year: "2016",
    category: "architecture",
    place: "Noshahr, Caspian coast, Iran",
    role: "Architecture & interior design",
    scope: "Private villa · house, pool level, terraces",
    tools: ["AutoCAD", "3ds Max", "V-Ray"],
    featured: true,
  },
  {
    slug: "iran-palace-hotel",
    year: "2016",
    category: "interior",
    place: "Tehran, Iran",
    role: "Interior design — lobby and public areas",
    scope: "Hotel lobby, lounge, reception",
    tools: ["AutoCAD", "3ds Max", "V-Ray", "Photoshop"],
    featured: true,
  },
  {
    slug: "aspian",
    year: "2016",
    category: "architecture",
    place: "Tehran, Iran",
    role: "Architectural design — bachelor project",
    scope: "Rehabilitation & youth development centre, ages 15–18",
    tools: ["AutoCAD", "3ds Max", "V-Ray", "Photoshop"],
  },
  {
    slug: "shams-tomb",
    year: "2012",
    category: "urban",
    place: "Tabriz, Iran",
    role: "Open competition with +Caat Studio — design & visualisation",
    scope: "Historic monument setting · access, passages, collective space",
    tools: ["AutoCAD", "3ds Max", "V-Ray", "Photoshop"],
  },
  {
    slug: "secret-garden",
    year: "2010",
    category: "architecture",
    place: "Tehran, Iran",
    role: "Architectural & spatial design — student work",
    scope: "Kindergarten for children under twelve",
    tools: ["AutoCAD", "3ds Max", "Photoshop"],
  },
];

export const projects: Project[] = meta.map((m, i) => {
  const img = images[m.slug];
  if (!img) throw new Error(`Missing images for ${m.slug}`);
  return { ...m, order: i + 1, ...img };
});

export const featuredProjects = projects.filter((x) => x.featured);

export const categories: Category[] = ["architecture", "interior", "urban", "research"];

export function projectCopy(slug: string, locale: Locale): ProjectCopy {
  const entry = copy[slug];
  if (!entry) throw new Error(`Missing copy for project: ${slug}`);
  return entry[locale] ?? entry[DEFAULT_LOCALE];
}

export function getProject(slug: string) {
  return projects.find((x) => x.slug === slug);
}

export function neighbours(slug: string) {
  const i = projects.findIndex((x) => x.slug === slug);
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

/** Path to a project image, relative to the site root (feed through withBase). */
export function img(slug: string, file: string) {
  return `/images/${slug}/${file}`;
}
