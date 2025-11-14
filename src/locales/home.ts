import enHome from "@/locales/en/home.json";
import jpHome from "@/locales/jp/home.json";
import {Locale, defaultLocale} from "@/lib/i18n";

export type HomeDictionary = typeof enHome;

const dictionaries: Record<Locale, HomeDictionary> = {
  en: enHome,
  jp: jpHome,
};

export const getHomeDictionary = (locale: Locale): HomeDictionary =>
  dictionaries[locale] ?? dictionaries[defaultLocale];
