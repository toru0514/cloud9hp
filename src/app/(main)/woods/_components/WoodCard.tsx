// app/(main)/woods/_components/WoodCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import type {Wood} from "../_data/woods";
import {Locale, defaultLocale} from "@/lib/i18n";

function FallbackThumb({title}: { title: string }) {
  return (
    <div className="flex h-40 w-full items-center justify-center rounded-md bg-neutral-200 text-neutral-500">
      <span className="text-sm">{title}</span>
    </div>
  );
}

type WoodCardProps = {
  wood: Wood;
  locale?: Locale;
};

export function WoodCard({wood, locale = defaultLocale}: WoodCardProps) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = `/woods/${wood.slug}.jpg`;

  const primaryName = locale === "en" ? wood.nameEn : wood.nameJa;
  const secondaryName = locale === "en" ? wood.nameJa : wood.nameEn;
  const alt = `${primaryName} (${secondaryName})`;
  const ariaLabel =
    locale === "en" ? `View details for ${primaryName}` : `${wood.nameJa}の詳細を見る`;

  const rawCatch =
    locale === "en"
      ? `Learn more about ${wood.nameEn} wood.`
      : wood.catch;
  const displayCatch = rawCatch.replace(/^—\s*|\s*—$/g, "");

  return (
    <Link
      href={`/woods/${wood.slug}`}
      className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
      aria-label={ariaLabel}
    >
      <div className="relative">
        <div className="relative h-40 w-full">
          {imgError ? (
            <FallbackThumb title={primaryName}/>
          ) : (
            <Image
              src={imgSrc}
              alt={alt}
              fill
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 300px, 100vw"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="p-3">
          <h3 className="text-base sm:text-lg font-bold">
            {primaryName}
            <span className="ml-1 text-sm text-neutral-500 font-medium">
              / {secondaryName}
            </span>
          </h3>
          <p className="mt-1 line-clamp-2 text-sm sm:text-base text-neutral-600">
            {displayCatch}
          </p>
        </div>
      </div>
    </Link>
  );
}
