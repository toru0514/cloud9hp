"use client";

import {useEffect, useState} from "react";
import {GalleryImageData} from "@/data/imageData";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const getRandomImage = (excludeUrls: string[]): (typeof GalleryImageData)[0] => {
    const filtered = GalleryImageData.filter((img) => !excludeUrls.includes(img.url));
    return filtered[Math.floor(Math.random() * filtered.length)];
};

const GalleryImageGrid = () => {
    const [images, setImages] = useState(() => GalleryImageData.slice(0, 4));
    const [fade, setFade] = useState([true, true, true, true]);
    const [activeIndex, setActiveIndex] = useState(0);

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
                    const excludeUrls = prev.map((img) => img.url);
                    next[activeIndex] = getRandomImage(excludeUrls);
                    return next;
                });

                setFade((prev) => {
                    const next = [...prev];
                    next[activeIndex] = true;
                    return next;
                });

                setActiveIndex((prev) => (prev + 1) % 4); // 0→1→2→3→0…
            }, 1500);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="grid grid-cols-2 grid-rows-2 sm:px-2 md:px-10 lg:px-20 gap-1.5 sm:gap-3 md:gap-4">
            {images.map((image, index) => (
                <div key={index} className="aspect-square relative overflow-hidden">
                    <Link href={image.link}>
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className={clsx(
                                "object-cover w-full h-full transition-opacity duration-1500",
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
