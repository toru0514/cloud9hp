// src/components/Product/ProductCard.tsx

import Image from "next/image";
import ReadMoreButton from "@/components/ui/ReadMoreButton";

type ProductCardProps = {
    enName: string;
    jpName: string;
    description: string;
    image: string;
    url: string;
    murl: string;
};

export const ProductCard = ({enName, jpName, description, image, url, murl}: ProductCardProps) => {
    return (
        <div className="flex items-stretch flex-col p-6 shadow-sm hover:shadow-lg transition ">
            <h3 className="text-lg font-semibold">{enName}</h3>
            <h3 className="text-lg font-semibold mb-2">{jpName}</h3>
            <div className="relative w-full aspect-square mb-4">
                <Image
                    src={image}
                    alt={enName}
                    fill
                    className="object-cover"
                />
            </div>
            <p className="text-md text-gray-700 mb-2">{description}</p>
            <ReadMoreButton link={url} label="READ MORE for Creema"/>
            <ReadMoreButton link={murl} label="READ MORE for minne"/>
        </div>
    );
};
