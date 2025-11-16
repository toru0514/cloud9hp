import Link from "next/link";
import Image from "next/image";
import {OrderMadeItem} from "@/data/orderMadeData";
import {Locale, defaultLocale} from "@/lib/i18n";

type OrderMadeDetailPageContentProps = {
  order: OrderMadeItem;
  prevOrder?: OrderMadeItem;
  nextOrder?: OrderMadeItem;
  locale?: Locale;
};

const getTitle = (order: OrderMadeItem, locale: Locale) =>
  locale === "en" && order.titleEn ? order.titleEn : order.title;

const getDetail = (order: OrderMadeItem, locale: Locale) =>
  locale === "en" && order.detailEn ? order.detailEn : order.detail;

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

const getListHref = (locale: Locale) =>
  locale === "en" ? "/en/order-made" : "/order-made";

const getDetailHref = (order: OrderMadeItem, locale: Locale) =>
  locale === "en" ? `/en/order-made/${order.slug}` : `/order-made/${order.slug}`;

const getBackText = (locale: Locale) =>
  locale === "en" ? "← Back to ORDER MADE list" : "← ORDER MADE一覧に戻る";

const OrderMadeDetailPageContent = ({
                                      order,
                                      prevOrder,
                                      nextOrder,
                                      locale = defaultLocale,
                                    }: OrderMadeDetailPageContentProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href={getListHref(locale)} className="text-blue-500 hover:underline text-sm">
          {getBackText(locale)}
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        {getTitle(order, locale)}
      </h1>

      {order.images.length === 1 ? (
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src={order.images[0]}
              alt={`${getTitle(order, locale)} - image`}
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
                alt={`${getTitle(order, locale)} - image ${idx + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}

      <div className="text-gray-700 text-base mb-6 whitespace-pre-line">
        {getDetail(order, locale)}
      </div>

      <div className="text-gray-600 text-sm mb-10 space-y-1">
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

      <div className="flex justify-between text-sm">
        {prevOrder ? (
          <Link
            href={getDetailHref(prevOrder, locale)}
            className="text-blue-500 hover:underline"
          >
            ← {getTitle(prevOrder, locale)}
          </Link>
        ) : (
          <div/>
        )}
        {nextOrder ? (
          <Link
            href={getDetailHref(nextOrder, locale)}
            className="text-blue-500 hover:underline ml-auto"
          >
            {getTitle(nextOrder, locale)} →
          </Link>
        ) : (
          <div/>
        )}
      </div>
    </div>
  );
};

export default OrderMadeDetailPageContent;
