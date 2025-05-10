// BangleGallery.tsx
import {BangleImageData} from "@/data/imageData";
import ImageGridWithLightbox from "@/components/image/ImageGridCommon";

const BangleGallery = () => (
  <ImageGridWithLightbox images={BangleImageData} columns={2}/>
);

export default BangleGallery;
