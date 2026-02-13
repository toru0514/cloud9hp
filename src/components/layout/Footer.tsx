import Link from "next/link"; // ← 追加
import NavList from "@/components/common/Nav/NavList";
import Image from "next/image";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getHomeDictionary} from "@/locales/home";

type FooterProps = {
  locale?: Locale;
};

const Footer = ({locale = defaultLocale}: FooterProps) => {
  const dictionary = getHomeDictionary(locale).footer;
  const homeLink = locale === "en" ? "/en" : "/";

  return (
    <footer className="bg-neutral-900 text-white py-4 sm:py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="hidden md:flex justify-center">
          <NavList isMobile={false} variant="footer" locale={locale}/>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <Link href={homeLink}>
            <div className="relative w-24 sm:w-32 md:w-40 lg:w-48 h-auto mb-4 aspect-square">
              <Image
                src="/footer/footer-logo.png"
                alt="Footer Logo"
                fill
                sizes="(min-width: 1024px) 192px, (min-width: 768px) 160px, (min-width: 640px) 128px, 96px"
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} {dictionary.copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
