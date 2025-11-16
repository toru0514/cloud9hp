import {Locale, defaultLocale} from "@/lib/i18n";

export interface NavItemType {
  id: number;
  label: string;
  link: string;
}

const navItems: Record<Locale, NavItemType[]> = {
  jp: [
    {id: 1, label: "HOME", link: "/"},
    {id: 2, label: "PRODUCT", link: "/product"},
    {id: 3, label: "FEATURES", link: "/features"},
    {id: 4, label: "GALLERY", link: "/gallery"},
    {id: 5, label: "WOODS", link: "/woods"},
    {id: 6, label: "ABOUT", link: "/about"},
    {id: 7, label: "ORDER", link: "/order-made"},
    {id: 8, label: "CONTACT", link: "/contact"},
  ],
  en: [
    {id: 1, label: "HOME", link: "/en"},
    {id: 2, label: "PRODUCTS", link: "/en/product"},
    {id: 3, label: "FEATURES", link: "/en/features"},
    {id: 4, label: "GALLERY", link: "/en/gallery"},
    {id: 5, label: "WOODS", link: "/en/woods"},
    {id: 6, label: "ABOUT", link: "/en/about"},
    {id: 7, label: "ORDER", link: "/en/order-made"},
    {id: 8, label: "CONTACT", link: "/en/contact"},
  ],
};

export const getNavItems = (locale: Locale = defaultLocale): NavItemType[] =>
  navItems[locale] ?? navItems[defaultLocale];
