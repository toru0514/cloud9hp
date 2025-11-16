"use client";

import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import {orderMadeData, OrderMadeItem} from "@/data/orderMadeData";
import {Locale, defaultLocale} from "@/lib/i18n";

type OrderMadeListPageContentProps = {
  locale?: Locale;
};

const getTitle = (order: OrderMadeItem, locale: Locale) =>
  locale === "en" && order.titleEn ? order.titleEn : order.title;

const getDescription = (order: OrderMadeItem, locale: Locale) =>
  locale === "en" && order.descriptionEn ? order.descriptionEn : order.description;

const getWoodLabel = (locale: Locale) =>
  locale === "en" ? "Wood:" : "使用木材:";

const getDaysLabel = (locale: Locale) =>
  locale === "en" ? "Estimated production time:" : "制作目安日数:";

const getPriceLabel = (locale: Locale) =>
  locale === "en" ? "Estimated price:" : "目安価格:";

const getDaysValue = (order: OrderMadeItem, locale: Locale) => {
  if (order.days === undefined) {
    return locale === "en" ? "To be discussed" : "要相談";
  }
  return locale === "en" ? `${order.days} days` : `${order.days}日`;
};

const getPriceValue = (order: OrderMadeItem, locale: Locale) => {
  if (order.price === undefined) {
    return locale === "en" ? "To be discussed" : "応相談";
  }
  const priceText = `¥${order.price.toLocaleString()}〜`;
  return locale === "en" ? `${priceText} (tax included)` : `${priceText}（税込）`;
};

const getHref = (order: OrderMadeItem, locale: Locale) =>
  locale === "en" ? `/en/order-made/${order.slug}` : `/order-made/${order.slug}`;

const OrderMadeListPageContent = ({
                                    locale = defaultLocale,
                                  }: OrderMadeListPageContentProps) => {
  return (
    <SectionContainer>
      <SectionTitle>ORDER MADE</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {orderMadeData.map((order, index) => (
          <Link
            href={getHref(order, locale)}
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={order.image}
                alt={getTitle(order, locale)}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">
                {getTitle(order, locale)}
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                {getDescription(order, locale)}
              </p>
              <div className="text-gray-500 text-sm mt-auto space-y-1">
                <div>
                  {getWoodLabel(locale)}{" "}
                  {locale === "en" && order.woodEn ? order.woodEn : order.wood}
                </div>
                <div>
                  {getDaysLabel(locale)}{" "}
                  {getDaysValue(order, locale)}
                </div>
                <div>
                  {getPriceLabel(locale)}{" "}
                  {getPriceValue(order, locale)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OrderMadeListPageContent;

