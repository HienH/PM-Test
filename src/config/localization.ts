const localesFromEnv = process.env.VERIFIED_LOCALES?.split(",").map((l) =>
  l.trim()
) || ["en"];
const defaultLocaleFromEnv: Locale = process.env.DEFAULT_LOCALE || "en";

if (localesFromEnv.some((l) => !l)) {
  console.warn("Invalid locale in env VERIFIED_LOCALES");
}

export const VERIFIED_LOCALES = localesFromEnv;
export const DEFAULT_LOCALE = defaultLocaleFromEnv;
export type Locale = (typeof VERIFIED_LOCALES)[number];

export function isValidLocale(locale: string): locale is Locale {
  return VERIFIED_LOCALES.includes(locale as Locale);
}

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "ENG",
};
