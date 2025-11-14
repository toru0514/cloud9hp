import enFeatures from "@/locales/en/features.json";
import jpFeatures from "@/locales/jp/features.json";
import {Locale, defaultLocale} from "@/lib/i18n";

export type FeaturesDictionary = typeof enFeatures;

const dictionaries: Record<Locale, FeaturesDictionary> = {
  en: enFeatures,
  jp: jpFeatures,
};

export const getFeaturesDictionary = (locale: Locale): FeaturesDictionary =>
  dictionaries[locale] ?? dictionaries[defaultLocale];
