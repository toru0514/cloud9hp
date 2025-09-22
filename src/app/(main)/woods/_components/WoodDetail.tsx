// app/woods/_components/WoodDetail.tsx
import Image from "next/image";
import type {Wood} from "../_data/woods";

export function WoodDetail({wood}: { wood: Wood }) {
  const imgSrc = `/woods/${wood.slug}.jpg`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">{wood.nameJa} <span
          className="text-base text-neutral-500">/ {wood.nameEn}</span></h1>
        <p className="mt-2 text-neutral-700">{wood.catch}</p>
      </header>

      <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={imgSrc}
          alt={`${wood.nameJa} (${wood.nameEn})`}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <section className="prose prose-neutral max-w-none ">
        {wood.lead.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {!!wood.features?.length && (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-semibold">主な特徴</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {wood.features.map((f, i) => (
              <li key={i} className="rounded-lg border border-neutral-200 bg-white p-4">
                <p className="text-sm font-medium">{f.label}</p>
                <p className="mt-1 text-sm text-neutral-700">{f.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!wood.uses?.length && (
        <section className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">主な用途</h2>
          <ul className="list-inside list-disc text-neutral-800">
            {wood.uses.map((u, i) => (
              <li key={i}>{u}</li>
            ))}
          </ul>
        </section>
      )}

      {!!wood.notes?.length && (
        <section className="mt-8">
          <h2 className="mb-2 text-xl font-semibold">補足</h2>
          <ul className="list-inside list-disc text-neutral-800">
            {wood.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </section>
      )}

      {!!wood.body?.length && (
        <section className="prose prose-neutral mt-8 max-w-none">
          {wood.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}
    </article>
  );
}
