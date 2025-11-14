export const locales = ["jp", "en"] as const;

export type Locale = typeof locales[number];

export const defaultLocale: Locale = "jp";

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);
