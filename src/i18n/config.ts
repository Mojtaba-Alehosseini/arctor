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

export function localePath(locale: Locale, path = "") {
  const clean = path.replace(/^\/+/, "");
  if (locale === DEFAULT_LOCALE) return "/" + clean;
  return `/${locale}/${clean}`.replace(/\/+$/, "/") || `/${locale}/`;
}

export function pathWithoutLocale(pathname: string) {
  for (const l of LOCALES) {
    if (l === DEFAULT_LOCALE) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
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
