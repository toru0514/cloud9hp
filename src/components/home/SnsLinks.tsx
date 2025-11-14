'use client'

import {snsLinks} from "@/data/snsLinks";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionContainer from "@/components/ui/SectionContainer";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getHomeDictionary} from "@/locales/home";

type SnsLinksProps = {
  locale?: Locale;
};

const SnsLinks = ({locale = defaultLocale}: SnsLinksProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const dictionary = getHomeDictionary(locale).sns;

  return (
    <SectionContainer className="bg-neutral-200">
      <SectionTitle>{dictionary.title}</SectionTitle>
      <div className="grid grid-cols-4 sm:grid-cols-5 sm:gap-6 max-w-5xl mx-auto sm:px-4 gap-y-5 mt-5 bg-amber-20">
        {snsLinks.map((sns, i) => {
          const src = isMobile
            ? sns.icon.replace(".", "_sp.")
            : sns.icon;

          return (
            <a
              key={i}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:bg-white hover:shadow-lg transition sm:p-4 sm:rounded-xl text-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={sns.name}
                className="h-12 sm:h-12 md:h-14 lg:h-16 w-auto mx-auto object-contain rounded-lg"
              />
            </a>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default SnsLinks;
