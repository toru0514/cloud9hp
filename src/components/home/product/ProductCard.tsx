import Image from "next/image";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

type ProductCardProps = {
  enName: string;
  jpName: string;
  description: string;
  image: string;
  url: string;
  murl: string;
  onImageClick?: (src: string, alt?: string) => void; // 追加
};

export const ProductCard = ({
                              enName,
                              jpName,
                              description,
                              image,
                              url,
                              murl,
                              onImageClick,
                            }: ProductCardProps) => {
  const alt = jpName || enName;

  return (
    <div className="flex items-stretch flex-col p-6 shadow-sm hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{enName}</h3>
      <h3 className="text-lg font-semibold mb-2">{jpName}</h3>

      {/* 画像ブロック */}
      <div className="relative w-full aspect-square mb-4">
        <Image src={image} alt={alt} fill className="object-cover"/>
        {/* 透明のボタンを上に重ねて、どこをクリックしても拡大 */}
        {onImageClick && (
          <button
            type="button"
            aria-label="画像を拡大"
            className="absolute inset-0 cursor-zoom-in focus:outline-none"
            onClick={() => onImageClick(image, alt)}
          />
        )}
      </div>

      <p className="text-md text-gray-700 mb-2">{description}</p>
      <ReadMoreButton link={url} label="READ MORE for Creema"/>
      <ReadMoreButton link={murl} label="READ MORE for minne"/>
    </div>
  );
};
