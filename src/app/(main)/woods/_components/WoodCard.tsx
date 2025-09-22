// app/woods/_components/WoodCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "./cn";
import type { Wood } from "../_data/woods";

function FallbackThumb({ title }: { title: string }) {
  return (
    <div className="flex h-40 w-full items-center justify-center rounded-md bg-neutral-200 text-neutral-500">
      <span className="text-sm">{title}</span>
    </div>
  );
}

export function WoodCard({ wood }: { wood: Wood }) {
  const imgSrc = `/woods/${wood.slug}.jpg`;
  return (
    <Link
      href={`/woods/${wood.slug}`}
      className={cn(
        "group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
      )}
    >
      <div className="relative">
        {/* Try image, fallback to placeholder */}
        <div className="relative h-40 w-full">
          <Image
            src={imgSrc}
            alt={`${wood.nameJa} (${wood.nameEn})`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            onError={(e) => {
              const container = (e.target as HTMLImageElement).closest(".relative");
              if (container) {
                container.replaceWith(FallbackThumb({ title: wood.nameJa }) as any);
              }
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">
            {wood.nameJa} <span className="text-sm text-neutral-500">/ {wood.nameEn}</span>
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{wood.catch.replace(/^—\s*|\s*—$/g, "")}</p>
        </div>
      </div>
    </Link>
  );
}
