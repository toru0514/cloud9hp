// src/app/(main)/order-made/[slug]/page.tsx

import {orderMadeData} from "@/data/orderMadeData";
import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {Metadata} from "next";

export async function generateMetadata({
                                         params,
                                       }: {
  params: { slug: string };
}): Promise<Metadata> {
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

// ページコンポーネント
export default async function OrderMadeDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await props.params;

  const index = orderMadeData.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const order = orderMadeData[index];
  const prevOrder = orderMadeData[index - 1];
  const nextOrder = orderMadeData[index + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 戻るリンク */}
      <div className="mb-6">
        <Link href="/order-made" className="text-blue-500 hover:underline text-sm">
          ← ORDER MADE一覧に戻る
        </Link>
      </div>

      {/* タイトル */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        {order.title}
      </h1>

      {/* 画像 */}
      {order.images.length === 1 ? (
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src={order.images[0]}
              alt={`${order.title} - image`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {order.images.map((src, idx) => (
            <div key={idx} className="relative w-full aspect-square">
              <Image
                src={src}
                alt={`${order.title} - image ${idx + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      {/* 詳細 */}
      <div className="text-gray-700 text-base mb-6 whitespace-pre-line">
        {order.detail}
      </div>

      {/* 情報 */}
      <div className="text-gray-600 text-sm mb-10 space-y-1">
        <div>使用木材: {order.wood}</div>
        <div>
          制作目安日数:{" "}
          {order.days !== undefined ? `${order.days}日` : <span className="text-gray-400">要相談</span>}
        </div>
        <div>
          {order.price !== undefined
            ? `目安価格: ¥${order.price.toLocaleString()}〜（税込）`
            : <span className="text-gray-400">目安価格: 応相談</span>}
        </div>
      </div>

      {/* 前後リンク */}
      <div className="flex justify-between text-sm">
        {prevOrder ? (
          <Link href={`/order-made/${prevOrder.slug}`} className="text-blue-500 hover:underline">
            ← {prevOrder.title}
          </Link>
        ) : (
          <div/>
        )}
        {nextOrder ? (
          <Link href={`/order-made/${nextOrder.slug}`} className="text-blue-500 hover:underline ml-auto">
            {nextOrder.title} →
          </Link>
        ) : (
          <div/>
        )}
      </div>
    </div>
  );
}
