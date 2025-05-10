"use client";

import {EarcuffImageData} from "@/data/imageData";
import ImageGridWithLightbox from "@/components/image/ImageGridCommon";

const EarcuffImageGrid = () => {
  return <ImageGridWithLightbox images={EarcuffImageData}/>;
};

export default EarcuffImageGrid;
