import NavList from "@/components/common/Nav/NavList";
import {Locale, defaultLocale} from "@/lib/i18n";

type SideMenuProps = {
  isMobile?: boolean;
  variant?: "header" | "footer" | "simple";
  locale?: Locale;
};

const SideMenu = ({
                    isMobile = false,
                    variant = "header",
                    locale = defaultLocale,
                  }: SideMenuProps) => {
  return (
    <div>
      <NavList isMobile={isMobile} variant={variant} locale={locale}/>
    </div>
  );
};

export default SideMenu;
