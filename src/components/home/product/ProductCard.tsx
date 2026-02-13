import Image from "next/image";
import Link from "next/link";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

type ProductCardProps = {
  enName: string;
  jpName: string;
  description: string;
  image: string;
  url: string;
  murl: string;
  detailHref?: string;
  showExternalLinks?: boolean;
  onImageClick?: (src: string, alt?: string) => void;
};

export const ProductCard = ({
                              enName,
                              jpName,
                              description,
                              image,
                              url,
                              murl,
                              detailHref,
                              showExternalLinks = true,
                              onImageClick,
                            }: ProductCardProps) => {
  const alt = jpName || enName;

  const cardInner = (
    <div className="flex items-stretch flex-col p-6 shadow-sm hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{enName}</h3>
      <h3 className="text-lg font-semibold mb-2">{jpName}</h3>

      <div className="relative w-full aspect-square mb-4">
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover"/>
        {onImageClick && (
          <button
            type="button"
            aria-label="画像を拡大"
            className="absolute inset-0 cursor-zoom-in focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onImageClick(image, alt);
            }}
          />
        )}
      </div>

      <p className="text-md text-gray-700 mb-2">{description}</p>
      {showExternalLinks && (
        <>
          <ReadMoreButton link={url} label="READ MORE for Creema"/>
          <ReadMoreButton link={murl} label="READ MORE for minne"/>
        </>
      )}
    </div>
  );

  if (detailHref) {
    return (
      <Link href={detailHref} className="block">
        {cardInner}
      </Link>
    );
  }

  return cardInner;
};
