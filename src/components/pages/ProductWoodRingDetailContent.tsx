"use client";

import {useCallback, useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

type WoodRingDetailProduct = {
  enName: string;
  jpName: string;
  image: string;
  url: string;
  mUrl: string;
};

type ProductWoodRingDetailContentProps = {
  product: WoodRingDetailProduct;
  detailText: string;
  images: string[];
};

const ProductWoodRingDetailContent = ({
                                        product,
                                        detailText,
                                        images,
                                      }: ProductWoodRingDetailContentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);

  const alt = product.jpName || product.enName;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, images.length, showNext, showPrev]);

  return (
    <SectionContainer>
      <SectionTitle>- WOOD RING -</SectionTitle>

      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          {product.enName} / {product.jpName}
        </h1>

        {images[previewIndex] && (
          <div className="flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center overflow-visible">
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewIndex((prev) => (prev - 1 + images.length) % images.length);
                  }}
                  aria-label="前の画像"
                  className="absolute left-[-3.5rem] z-10 h-14 w-14 rounded-full border border-neutral-300 bg-white p-1 shadow hover:bg-neutral-50"
                >
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={images[(previewIndex - 1 + images.length) % images.length]}
                      alt={alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                </button>
              )}

              <button
                type="button"
                className="relative h-[400px] w-[400px] overflow-hidden rounded-2xl bg-neutral-100 sm:h-[480px] sm:w-[480px]"
                onClick={() => openLightbox(previewIndex)}
                aria-label="画像を拡大"
              >
                <Image
                  src={images[previewIndex]}
                  alt={alt}
                  fill
                  sizes="(min-width: 640px) 480px, 400px"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </button>

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewIndex((prev) => (prev + 1) % images.length);
                  }}
                  aria-label="次の画像"
                  className="absolute right-[-3.5rem] z-10 h-14 w-14 rounded-full border border-neutral-300 bg-white p-1 shadow hover:bg-neutral-50"
                >
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={images[(previewIndex + 1) % images.length]}
                      alt={alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                </button>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={`indicator-${idx}`}
                    type="button"
                    onClick={() => setPreviewIndex(idx)}
                    aria-label={`画像 ${idx + 1}`}
                    className={`h-2 w-2 rounded-full transition ${previewIndex === idx ? "bg-neutral-800" : "bg-neutral-400"}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
            {detailText}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <ReadMoreButton link={product.url} label="READ MORE for Creema"/>
          <ReadMoreButton link={product.mUrl} label="READ MORE for minne"/>
        </div>

        <div className="mt-10">
          <Link href="/product" className="text-sm text-blue-500 hover:underline">
            ← PRODUCT一覧に戻る
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-6 px-4">
              <button
                type="button"
                onClick={showPrev}
                aria-label="前の画像へ"
                className="rounded-full border border-white/60 bg-white/90 px-5 py-4 text-3xl font-bold text-black shadow-xl transition hover:border-white hover:bg-white"
              >
                ‹
              </button>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[currentIndex]}
                alt={alt}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
              />

              <button
                type="button"
                onClick={showNext}
                aria-label="次の画像へ"
                className="rounded-full border border-white/60 bg-white/90 px-5 py-4 text-3xl font-bold text-black shadow-xl transition hover:border-white hover:bg-white"
              >
                ›
              </button>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="閉じる"
              className="absolute top-2 right-2 p-2 text-white hover:text-neutral-200"
            >
              ✕
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white/80">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default ProductWoodRingDetailContent;
