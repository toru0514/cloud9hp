import ProductPageContent from "@/components/pages/ProductPageContent";
import {getCategoryValue, getProductSections, getSectionPath} from "@/lib/microcms";

export const revalidate = 60;

export default async function ProductEnPage() {
  const sections = await getProductSections();

  const serializedSections = sections.map((section) => ({
    id: section.id,
    title: section.title,
    items: section.items.map((item) => ({
      id: item.sortOrder,
      slug: item.slug,
      enName: item.enName,
      jpName: item.jpName,
      description: item.description,
      descriptionEn: item.descriptionEn,
      image: item.image.url,
      url: item.creemaUrl,
      mUrl: item.minneUrl,
      hasDetail: Boolean(item.detailText),
      sectionPath: getSectionPath(getCategoryValue(item)),
    })),
  }));

  return <ProductPageContent locale="en" sections={serializedSections}/>;
}
