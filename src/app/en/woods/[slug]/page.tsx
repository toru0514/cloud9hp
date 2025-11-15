import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {woods} from "../../../(main)/woods/_data/woods";
import {WoodDetail} from "../../../(main)/woods/_components/WoodDetail";

export async function generateStaticParams() {
  return woods.map((w) => ({slug: w.slug}));
}

export function generateMetadata({params}: { params: { slug: string } }): Metadata {
  const wood = woods.find((w) => w.slug === params.slug);
  if (!wood) {
    return {title: "Wood Detail"};
  }
  return {
    title: `${wood.nameEn} / ${wood.nameJa} – Wood Detail`,
    description: wood.catch.replace(/^—\s*|\s*—$/g, ""),
  };
}

export default function WoodDetailEnPage({params}: { params: { slug: string } }) {
  const wood = woods.find((w) => w.slug === params.slug);
  if (!wood) return notFound();
  return <WoodDetail wood={wood}/>;
}

