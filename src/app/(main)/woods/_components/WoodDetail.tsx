// app/woods/_components/WoodDetail.tsx
import Image from "next/image";
import type {Wood} from "../_data/woods";
import {Locale, defaultLocale} from "@/lib/i18n";

type WoodDetailProps = {
  wood: Wood;
  locale?: Locale;
};

export function WoodDetail({wood, locale = defaultLocale}: WoodDetailProps) {
  const imgSrc = `/woods/${wood.slug}.jpg`;

  const primaryName = locale === "en" ? wood.nameEn : wood.nameJa;
  const secondaryName = locale === "en" ? wood.nameJa : wood.nameEn;
  const catchText =
    locale === "en" && wood.catchEn ? wood.catchEn : wood.catch;
  const lead = locale === "en" && wood.leadEn ? wood.leadEn : wood.lead;
  const features =
    locale === "en" && wood.featuresEn ? wood.featuresEn : wood.features;
  const uses = locale === "en" && wood.usesEn ? wood.usesEn : wood.uses;
  const body = locale === "en" && wood.bodyEn ? wood.bodyEn : wood.body;
  const notes = locale === "en" && wood.notesEn ? wood.notesEn : wood.notes;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">
          {primaryName}{" "}
          <span className="text-base text-neutral-500">/ {secondaryName}</span>
        </h1>
        <p className="mt-2 text-neutral-700">{catchText}</p>
      </header>

      <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={imgSrc}
          alt={`${primaryName} (${secondaryName})`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="prose prose-neutral max-w-none ">
        {lead.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {!!features?.length && (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-semibold">
            {locale === "en" ? "Key features" : "主な特徴"}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <li
                key={`${f.label}-${i}`}
                className="rounded-lg border border-neutral-200 bg-white p-4"
              >
                <p className="text-sm font-medium">{f.label}</p>
                <p className="mt-1 text-sm text-neutral-700">{f.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!uses?.length && (
        <section className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">
            {locale === "en" ? "Typical uses" : "主な用途"}
          </h2>
          <ul className="list-inside list-disc text-neutral-800">
            {uses.map((u, i) => (
              <li key={`${u}-${i}`}>{u}</li>
            ))}
          </ul>
        </section>
      )}

      {!!notes?.length && (
        <section className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">
            {locale === "en" ? "Notes" : "補足"}
          </h2>
          <ul className="list-inside list-disc text-neutral-800">
            {notes.map((n, i) => (
              <li key={`${n}-${i}`}>{n}</li>
            ))}
          </ul>
        </section>
      )}

      {!!body?.length && (
        <section className="prose prose-neutral mt-8 max-w-none">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}
    </article>
  );
}
