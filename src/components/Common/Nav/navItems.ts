export interface NavItemType {
  id: number;
  label: string;
  link: string;
}

export const navItems: NavItemType[] = [
  {id: 1, label: "HOME", link: "/"},
  {id: 2, label: "PRODUCT", link: "/product"},
  {id: 3, label: "FEATURES", link: "/features"},
  {id: 4, label: "GALLERY", link: "/gallery"},
  {id: 5, label: "ABOUT", link: "/about"},
  {id: 6, label: "CONTACT", link: "/contact"},
];
