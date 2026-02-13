import type {Metadata} from "next";
import {notFound} from "next/navigation";
import ProductWoodRingDetailContent from "@/components/pages/ProductWoodRingDetailContent";
import {getCategoryValue, getProductBySlug, getProductsWithDetail} from "@/lib/microcms";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getProductsWithDetail("wood-ring");
  return products.map((p) => ({slug: p.slug}));
}

export async function generateMetadata(
  {params}: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const {slug} = await params;
  const product = await getProductBySlug(slug);
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

export default async function WoodRingDetailPage({params}: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const product = await getProductBySlug(slug);

  if (!product || !product.detailText || getCategoryValue(product) !== "woodring") {
    return notFound();
  }

  return (
    <ProductWoodRingDetailContent
      product={{
        enName: product.enName,
        jpName: product.jpName,
        image: product.image.url,
        url: product.creemaUrl,
        mUrl: product.minneUrl,
      }}
      detailText={product.detailText}
      images={product.detailImages?.map((di) => di.image.url) ?? [product.image.url]}
    />
  );
}
