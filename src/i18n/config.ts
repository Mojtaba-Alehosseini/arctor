export const LOCALES = ["en", "it", "de", "fr", "fa"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  it: "Italiano",
  de: "Deutsch",
  fr: "Français",
  fa: "فارسی",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  en: "EN",
  it: "IT",
  de: "DE",
  fr: "FR",
  fa: "FA",
};

export const RTL_LOCALES = new Set<Locale>(["fa"]);

export function isRtl(locale: Locale) {
  return RTL_LOCALES.has(locale);
}

// Astro injects BASE_URL — e.g. "/arctor/" on GitHub Pages, "/" locally.
const RAW_BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

export function withBase(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  if (!path.startsWith("/")) path = "/" + path;
  return (RAW_BASE + path).replace(/\/{2,}/g, "/");
}

export function localePath(locale: Locale, path = "") {
  const clean = path.replace(/^\/+/, "");
  const inner = locale === DEFAULT_LOCALE ? `/${clean}` : `/${locale}/${clean}`;
  let out = withBase(inner);
  if (!out.endsWith("/") && !clean.includes(".")) out = out.replace(/\/+$/, "") + "/";
  return out.replace(/\/{2,}/g, "/");
}

export function pathWithoutLocale(pathname: string) {
  // strip base
  let p = pathname;
  if (RAW_BASE && p.startsWith(RAW_BASE)) p = p.slice(RAW_BASE.length) || "/";
  for (const l of LOCALES) {
    if (l === DEFAULT_LOCALE) continue;
    if (p === `/${l}` || p === `/${l}/`) return "/";
    if (p.startsWith(`/${l}/`)) return p.slice(l.length + 1);
  }
  return p;
}

import en from "./locales/en";
import it from "./locales/it";
import de from "./locales/de";
import fr from "./locales/fr";
import fa from "./locales/fa";

export const dict = { en, it, de, fr, fa } as const;

export function t(locale: Locale) {
  return dict[locale] ?? dict[DEFAULT_LOCALE];
}
