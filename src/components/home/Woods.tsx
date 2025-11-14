// app/_components/WoodsIntroArea.tsx
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

import {woods} from "@/app/(main)/woods/_data/woods";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getHomeDictionary} from "@/locales/home";

const FEATURED_SLUGS = [
  "maple",
  "padauk",
  "purpleheart",
  "sycamore",
  "wenge",
  "ziricote",
] as const;

type WoodsIntroAreaProps = {
  locale?: Locale;
};

export default function WoodsIntroArea({locale = defaultLocale}: WoodsIntroAreaProps) {
  const featured = FEATURED_SLUGS
    .map((slug) => woods.find((w) => w.slug === slug))
    .filter(Boolean)!;
  const dictionary = getHomeDictionary(locale).woods;

  const formatAlt = (woodNamePrimary: string, woodNameSecondary: string) =>
    `${woodNamePrimary} (${woodNameSecondary})`;

  const getCatchCopy = (slug: (typeof FEATURED_SLUGS)[number], fallback: string) =>
    (dictionary.featuredCatch[slug] ?? fallback).replace(/^—\s*|\s*—$/g, "");

  return (
    <SectionContainer className="bg-neutral-100">
      <SectionTitle>{dictionary.title}</SectionTitle>
      <div className="px-6 lg:px-30 py-8">
        <div className="flex flex-col items-start gap-8">
          <div className="w-full">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {featured.slice(0, 2).map((w) => {
                const primaryName = locale === "en" ? w!.nameEn : w!.nameJa;
                const secondaryName = locale === "en" ? w!.nameJa : w!.nameEn;

                return (
                  <li key={w!.slug} className="block sm:hidden">
                    <Link
                      href={`/woods/${w!.slug}`}
                      className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={`/woods/${w!.slug}.jpg`}
                          alt={formatAlt(primaryName, secondaryName)}
                          fill
                          sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="sm:text-md md:text-lg lg:text-3xl font-semibold">
                          {primaryName}
                          <span className="ml-1 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-500">
                            / {secondaryName}
                          </span>
                        </p>
                        <p className="mt-1 line-clamp-2 text-xs text-neutral-600">
                          {getCatchCopy(w!.slug, w!.catch)}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}

              {featured.slice(0, 3).map((w) => {
                const primaryName = locale === "en" ? w!.nameEn : w!.nameJa;
                const secondaryName = locale === "en" ? w!.nameJa : w!.nameEn;

                return (
                  <li key={w!.slug} className="hidden sm:block">
                    <Link
                      href={`/woods/${w!.slug}`}
                      className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={`/woods/${w!.slug}.jpg`}
                          alt={formatAlt(primaryName, secondaryName)}
                          fill
                          sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="sm:text-md md:text-lg lg:text-3xl font-semibold">
                          {primaryName}
                          <span className="ml-1 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-500">
                            / {secondaryName}
                          </span>
                        </p>
                        <p className="mt-1 line-clamp-2 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-600">
                          {getCatchCopy(w!.slug, w!.catch)}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full">
            <h3 className="sm:text-md md:text-lg lg:text-3xl font-semibold mb-3">
              {dictionary.headline}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-700 leading-relaxed whitespace-pre-line">
              {dictionary.description}
            </p>

            <div className="items-center flex justify-center pt-6">
              <Button link="/woods" label={dictionary.buttonLabel}/>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
