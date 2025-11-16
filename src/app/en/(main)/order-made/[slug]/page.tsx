import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {orderMadeData} from "@/data/orderMadeData";
import OrderMadeDetailPageContent from "@/components/pages/OrderMadeDetailPageContent";

export async function generateStaticParams() {
  return orderMadeData.map((item) => ({slug: item.slug}));
}

export function generateMetadata({params}: { params: { slug: string } }): Metadata {
  const order = orderMadeData.find((item) => item.slug === params.slug);
  if (!order) {
    return {
      title: "Page not found | cloud9woodwork",
    };
  }

  const title = order.titleEn ?? order.title;
  const description = order.descriptionEn ?? order.description;

  return {
    title: `${title} | cloud9woodwork`,
    description: description.slice(0, 100),
  };
}

export default function OrderMadeDetailEnPage({params}: { params: { slug: string } }) {
  const orderIndex = orderMadeData.findIndex((item) => item.slug === params.slug);
  if (orderIndex === -1) return notFound();

  const order = orderMadeData[orderIndex];
  const prevOrder = orderMadeData[orderIndex - 1];
  const nextOrder = orderMadeData[orderIndex + 1];

  return (
    <OrderMadeDetailPageContent
      order={order}
      prevOrder={prevOrder}
      nextOrder={nextOrder}
      locale="en"
    />
  );
}

