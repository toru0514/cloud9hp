"use client";

import Image from "next/image";
import Link from "next/link";
import {GalleryImageData} from "@/data/imageData";

const GalleryPage = () => {
  return (
    <div className="min-h-screen px-4 py-12 max-w-screen-xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">GALLERY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GalleryImageData.map((item, index) => (
          <Link href={item.link} key={index} className="block">
            <div className="relative w-full pt-[100%]">
              <Image
                src={item.url}
                alt={item.alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
