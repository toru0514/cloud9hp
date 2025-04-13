"use client";

import {useEffect, useState} from "react";
import {GalleryImageData} from "@/data/imageData";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const getRandomImage = (excludeUrl: string): (typeof GalleryImageData)[0] => {
    const filtered = GalleryImageData.filter((img) => img.url !== excludeUrl);
    return filtered[Math.floor(Math.random() * filtered.length)];
};

const GalleryImageGrid = () => {
    const [images, setImages] = useState(() => [
        GalleryImageData[0],
        GalleryImageData[1],
    ]);
    const [fade, setFade] = useState([true, true]); // 画像ごとのフェード状態
    const [activeIndex, setActiveIndex] = useState(0); // 0か1を交互に切り替える

    useEffect(() => {
        const interval = setInterval(() => {
            setFade((prev) => {
                const next = [...prev];
                next[activeIndex] = false;
                return next;
            });

            setTimeout(() => {
                setImages((prev) => {
                    const next = [...prev];
                    next[activeIndex] = getRandomImage(prev[activeIndex].url);
                    return next;
                });
                setFade((prev) => {
                    const next = [...prev];
                    next[activeIndex] = true;
                    return next;
                });
                setActiveIndex((prev) => (prev === 0 ? 1 : 0));
            }, 1500); // フェードアウト後に変更
        }, 5000); // 4秒ごとに交互に切り替え

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="grid grid-cols-2 sm:px-2 md:px-10 lg:px-20 gap-1.5 sm:gap-3 md:gap-4">
            {images.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <Link href={image.link}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={600}
                            height={600}
                            className={clsx(
                                "object-cover w-full h-full min-w-[80px] min-h-[80px] transition-opacity duration-1500",
                                fade[index] ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GalleryImageGrid;
