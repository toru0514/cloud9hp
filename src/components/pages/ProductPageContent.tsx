"use client";

import React, {useState} from "react";
import {ProductCard} from "@/components/home/product/ProductCard";
import {Locale, defaultLocale} from "@/lib/i18n";

const bgColors = ["bg-white", "bg-neutral-100"];

type LightboxImage = { src: string; alt?: string } | null;

function Lightbox({
                    image,
                    onClose,
                  }: {
  image: { src: string; alt?: string };
  onClose: () => void;
}) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-describedby="lightbox-help"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <p id="lightbox-help" className="sr-only">
        画像または背景をクリック、あるいはEscキーで閉じます。
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt ?? ""}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl cursor-zoom-out"
      />
    </div>
  );
}

export type ProductItemData = {
  id: number;
  enName: string;
  jpName: string;
  description: string;
  descriptionEn?: string;
  image: string;
  url: string;
  mUrl: string;
  slug?: string;
  hasDetail?: boolean;
  sectionPath?: string;
};

export type ProductSectionData = {
  id?: string;
  title: string;
  items: ProductItemData[];
};

type ProductSectionProps = {
  id?: string;
  title: string;
  items: ProductItemData[];
  index: number;
  locale: Locale;
  onImageClick: (src: string, alt?: string) => void;
};

const ProductSection = ({
                          id,
                          title,
                          items,
                          index,
                          locale,
                          onImageClick,
                        }: ProductSectionProps) => (
  <div id={id} className={`px-4 py-12 ${bgColors[index % bgColors.length]}`}>
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pb-2 text-2xl font-semibold text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const shouldShowDetailLink = Boolean(item.hasDetail && item.sectionPath && locale === "jp");

            const detailHref = shouldShowDetailLink && item.slug
              ? `/product/${item.sectionPath}/${item.slug}`
              : undefined;

            return (
              <ProductCard
              key={item.id}
              enName={item.enName}
              jpName={item.jpName}
              description={
                locale === "en" && item.descriptionEn
                  ? item.descriptionEn
                  : item.description
              }
              image={item.image}
              url={item.url}
              murl={item.mUrl}
              detailHref={shouldShowDetailLink ? detailHref : undefined}
              showExternalLinks={!shouldShowDetailLink}
              onImageClick={(src, alt) => onImageClick(src, alt)}
            />
          );
        })}
      </div>
    </div>
  </div>
);

type ProductPageContentProps = {
  locale?: Locale;
  sections: ProductSectionData[];
};

const ProductPageContent = ({locale = defaultLocale, sections}: ProductPageContentProps) => {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage>(null);

  return (
    <>
      <div className="px-4 py-12 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">PRODUCTS</h1>
      </div>

      {sections.map((section, index) => (
        <ProductSection
          key={section.title}
          index={index}
          locale={locale}
          onImageClick={(src, alt) => setLightboxImage({src, alt})}
          {...section}
        />
      ))}

      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)}/>
      )}
    </>
  );
};

export default ProductPageContent;
