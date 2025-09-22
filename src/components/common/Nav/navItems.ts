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
  {id: 5, label: "WOODS", link: "/woods"},
  {id: 6, label: "ABOUT", link: "/about"},
  {id: 7, label: "ORDER", link: "/order-made"},
  {id: 8, label: "CONTACT", link: "/contact"},
];

//order-made