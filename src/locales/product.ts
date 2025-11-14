import enProduct from "@/locales/en/product.json";
import jpProduct from "@/locales/jp/product.json";
import {Locale, defaultLocale} from "@/lib/i18n";

export type ProductDictionary = typeof enProduct;

const dictionaries: Record<Locale, ProductDictionary> = {
  en: enProduct,
  jp: jpProduct,
};

export const getProductDictionary = (locale: Locale): ProductDictionary =>
  dictionaries[locale] ?? dictionaries[defaultLocale];
