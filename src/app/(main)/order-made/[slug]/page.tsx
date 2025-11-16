// src/app/(main)/order-made/[slug]/page.tsx

import {orderMadeData} from "@/data/orderMadeData";
import {notFound} from "next/navigation";
import {Metadata} from "next";
import OrderMadeDetailPageContent from "@/components/pages/OrderMadeDetailPageContent";

export async function generateMetadata(
  {params}: { params: { slug: string } }
): Promise<Metadata> {
  const order = orderMadeData.find((item) => item.slug === params.slug);

  if (!order) {
    return {
      title: "ページが見つかりません | cloud9woodwork",
    };
  }

  return {
    title: `${order.title} | cloud9woodwork`,
    description: order.description?.slice(0, 100),
  };
}

// 静的パスを生成
export async function generateStaticParams() {
  return orderMadeData.map((item) => ({
    slug: item.slug,
  }));
}

// ✅ 修正済: Promise<{ slug: string }> → { slug: string }
export default async function OrderMadeDetailPage({
                                                    params,
                                                  }: {
  params: { slug: string };
}) {
  const {slug} = params;

  const index = orderMadeData.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const order = orderMadeData[index];
  const prevOrder = orderMadeData[index - 1];
  const nextOrder = orderMadeData[index + 1];

  return (
    <OrderMadeDetailPageContent
      order={order}
      prevOrder={prevOrder}
      nextOrder={nextOrder}
      locale="jp"
    />
  );
}
