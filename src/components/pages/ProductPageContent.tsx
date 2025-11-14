"use client";

import React, {useState} from "react";
import {
  bangleItems,
  crystalwoodringItems,
  earcuffItems,
  earcuffleafItems,
  earringItems,
  woodringItems,
  woodtiepinItems,
} from "@/components/home/product/productData";
import {ProductCard} from "@/components/home/product/ProductCard";

const productSections = [
  {id: undefined, title: "- WOOD RING -", items: woodringItems},
  {id: "crystalwoodring", title: "- CRYSTAL & WOOD RING -", items: crystalwoodringItems},
  {id: "bangle", title: "- WOOD BANGLE -", items: bangleItems},
  {id: "earcuff", title: "- WOOD EARCUFF -", items: earcuffItems},
  {id: "earcuffleaf", title: "- WOOD EARCUFF LEAF -", items: earcuffleafItems},
  {id: "earring", title: "- WOOD EARRING -", items: earringItems},
  {id: "tiepin", title: "- WOOD TIE PIN -", items: woodtiepinItems},
];

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

const ProductSection = ({
                          id,
                          title,
                          items,
                          index,
                          onImageClick,
                        }: {
  id?: string;
  title: string;
  items: typeof woodringItems;
  index: number;
  onImageClick: (src: string, alt?: string) => void;
}) => (
  <div id={id} className={`px-4 py-12 ${bgColors[index % bgColors.length]}`}>
    <div className="max-w-screen-xl mx-auto">
      <h2 className="pb-2 text-2xl font-semibold text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            enName={item.enName}
            jpName={item.jpName}
            description={item.description}
            image={item.image}
            url={item.url}
            murl={item.mUrl}
            onImageClick={(src, alt) => onImageClick(src, alt)}
          />
        ))}
      </div>
    </div>
  </div>
);

const ProductPageContent = () => {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage>(null);

  return (
    <>
      <div className="px-4 py-12 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">PRODUCTS</h1>
      </div>

      {productSections.map((section, index) => (
        <ProductSection
          key={section.title}
          index={index}
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

