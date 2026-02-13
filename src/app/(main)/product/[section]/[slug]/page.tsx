import type {Metadata} from "next";
import {notFound} from "next/navigation";
import ProductWoodRingDetailContent from "@/components/pages/ProductWoodRingDetailContent";
import {
  getCategoryFromSection,
  getCategoryValue,
  getProductBySlug,
  getProductsWithDetail,
  getSectionPath,
} from "@/lib/microcms";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getProductsWithDetail();
  return products.map((p) => ({
    section: getSectionPath(getCategoryValue(p)),
    slug: p.slug,
  }));
}

export async function generateMetadata(
  {params}: { params: Promise<{ section: string; slug: string }> },
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

export default async function ProductDetailPage(
  {params}: { params: Promise<{ section: string; slug: string }> },
) {
  const {section, slug} = await params;
  const category = getCategoryFromSection(section);
  if (!category) return notFound();

  const product = await getProductBySlug(slug);

  if (!product || !product.detailText || getCategoryValue(product) !== category) {
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
