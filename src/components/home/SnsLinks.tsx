'use client'

import {snsLinks} from "@/data/snsLinks";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionContainer from "@/components/ui/SectionContainer";
import {useMediaQuery} from "@/hooks/useMediaQuery";

const SnsLinks = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <SectionContainer>
      <SectionTitle>OFFICIAL LINKS</SectionTitle>
      <div className="grid grid-cols-5 gap-2 sm:gap-6 max-w-5xl mx-auto sm:px-4 mt-5 bg-amber-20">
        {snsLinks.map((sns, i) => {
          const src = isMobile
            ? sns.icon.replace(".", "_sp.") // 例：creema.jpg → creema-sp.jpg に変換
            : sns.icon;

          return (
            <a
              key={i}
              href={sns.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:shadow-lg transition p-4 rounded-xl text-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={sns.name}
                className="h-8 sm:h-12 md:h-14 lg:h-16 w-auto mx-auto object-contain"
              />
            </a>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default SnsLinks;
