import NavItem from "@/components/common/Nav/NavItem";
import {getNavItems} from "./navItems";
import {Locale, defaultLocale} from "@/lib/i18n";

type NavListProps = {
  isMobile?: boolean;
  variant?: "header" | "footer" | "simple";
  locale?: Locale;
};

const NavList = ({
                   isMobile,
                   variant = "header",
                   locale = defaultLocale,
                 }: NavListProps) => {
  const items = getNavItems(locale);

  return (
    <ul
      className={`flex ${
        isMobile
          ? "flex-col space-y-4 text-right"
          : "space-x-4 md:space-x-6 lg:space-x-10 justify-end"
      }`}
    >
      {items.map((item) => (
        <NavItem key={item.id} {...item} variant={variant}/>
      ))}
    </ul>
  );
};

export default NavList;
