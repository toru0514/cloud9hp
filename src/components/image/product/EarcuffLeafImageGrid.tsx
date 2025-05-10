"use client";

import {WoodringImageData} from "@/data/imageData";
import ImageGridWithLightbox from "@/components/image/ImageGridCommon";

const WoodringImageGrid = () => {
  return <ImageGridWithLightbox images={WoodringImageData}/>;
};

export default WoodringImageGrid;
