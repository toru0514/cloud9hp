import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {woodringItems} from "@/components/home/product/productData";
import ProductWoodRingDetailContent from "@/components/pages/ProductWoodRingDetailContent";
import {productDetailPages} from "@/data/productDetails";

type WoodRingItem = (typeof woodringItems)[number] & { slug?: string };

export function generateStaticParams() {
  return Object.entries(productDetailPages)
    .filter(([, info]) => info.sectionPath === "wood-ring")
    .map(([slug]) => ({slug}));
}

export function generateMetadata(
  {params}: { params: { slug: string } },
): Metadata {
  const product = (woodringItems as WoodRingItem[]).find((item) => item.slug === params.slug);
  if (!product) {
    return {
      title: "商品が見つかりません | cloud9woodwork",
    };
  }

  return {
    title: `${product.jpName} | cloud9woodwork`,
    description: product.description,
  };
}

export default function WoodRingDetailPage({params}: { params: { slug: string } }) {
  const product = (woodringItems as WoodRingItem[]).find((item) => item.slug === params.slug);
  const detailInfo = productDetailPages[params.slug];
  if (detailInfo?.sectionPath !== "wood-ring") {
    return notFound();
  }

  if (!product || !detailInfo) {
    return notFound();
  }

  return (
    <ProductWoodRingDetailContent
      product={{
        enName: product.enName,
        jpName: product.jpName,
        image: product.image,
        url: product.url,
        mUrl: product.mUrl,
      }}
      detailText={detailInfo.detailText}
      images={detailInfo.images}
    />
  );
}
