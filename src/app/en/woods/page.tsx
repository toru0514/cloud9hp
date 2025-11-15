import type {Metadata} from "next";
import {woods} from "../../(main)/woods/_data/woods";
import {WoodCard} from "../../(main)/woods/_components/WoodCard";

export const metadata: Metadata = {
  title: "Wood Catalog",
  description:
    "Meet the woods we use for our accessories – maple, purpleheart, sycamore, padauk, wenge, snakewood, pink ivory, karin, palo santo, ebony, rosewood, olive wood, cocobolo, ziricote and more.",
};

export default function WoodsCatalogEnPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">WOOD CATALOG</h1>
      <p className="mb-6 text-neutral-700">
        A quick introduction to the woods we work with. Tap a card to see photos and a more detailed story for each
        material.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {woods.map((w) => (
          <WoodCard key={w.slug} wood={w} locale="en"/>
        ))}
      </div>
    </main>
  );
}

