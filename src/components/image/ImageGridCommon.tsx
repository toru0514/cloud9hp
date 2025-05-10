// components/ui/ImageGridWithLink.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type ImageItem = {
  url: string;
  alt: string;
  link: string;
};

type Props = {
  images: ImageItem[];
  columns?: number;
};

const ImageGridWithLink = ({images, columns = 2}: Props) => {
  return (
    <div
      className={`grid sm:items-center sm:justify-center grid-cols-${columns} sm:px-2 md:px-10 lg:px-20 gap-1.5 sm:gap-3 md:gap-4`}
    >
      {images.map((img, i) => (
        <div key={i} className="flex flex-col">
          <Link href={img.link}>
            <Image
              src={img.url}
              alt={img.alt}
              width={600}
              height={600}
              className="object-cover w-full h-full min-w-[80px] min-h-[80px]"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGridWithLink;
