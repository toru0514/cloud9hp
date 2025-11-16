"use client";

import Image from "next/image";
import {AboutImageData} from "@/data/imageData";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getHomeDictionary} from "@/locales/home";

type AboutPageContentProps = {
  locale?: Locale;
};

const AboutPageContent = ({locale = defaultLocale}: AboutPageContentProps) => {
  const aboutImg = AboutImageData[0];
  const dictionary = getHomeDictionary(locale).about;

  return (
    <div className="text-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-12">
        {dictionary.title}
      </h1>

      <div className="p-3 lg:p-8 xl:p-10 bg-neutral-200">
        <div className="px-6 lg:px-30 py-5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src={aboutImg.url}
                alt={aboutImg.alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="sm:text-md md:text-lg lg:text-3xl leading-relaxed p-1 font-semibold">
                {dictionary.tagline}
              </p>
              <p className="text-md sm:text-md md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed p-1 max-w-prose font-medium whitespace-pre-line">
                {dictionary.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;

