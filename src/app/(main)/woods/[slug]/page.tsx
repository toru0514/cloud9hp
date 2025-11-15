// app/woods/[slug]/page.tsx
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {woods} from "../_data/woods";
import {WoodDetail} from "../_components/WoodDetail";

export async function generateStaticParams() {
  return woods.map((w) => ({slug: w.slug}));
}

export function generateMetadata({params}: { params: { slug: string } }): Metadata {
  const wood = woods.find((w) => w.slug === params.slug);
  if (!wood) return {title: "木材詳細"};
  return {
    title: `${wood.nameJa} / ${wood.nameEn} – 木材紹介`,
    description: wood.catch.replace(/^—\s*|\s*—$/g, ""),
  };
}

export default function WoodDetailPage({params}: { params: { slug: string } }) {
  const wood = woods.find((w) => w.slug === params.slug);
  if (!wood) return notFound();
  return <WoodDetail wood={wood} locale="jp"/>;
}
