import Button from "@/components/ui/Button";
import GalleryImageGrid from "@/components/Image/GalleryImageGrid";

const GalleryArea = () => {
  return (
    <div className="p-6 lg:p-8 xl:p-10 bg-amber-20">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">GALLERY</h2>
      <div className="lg:px-30 pt-2">
        <GalleryImageGrid/>
      </div>
      <div className="items-center flex justify-center pt-6">
        <Button link="/features"/>
      </div>
    </div>
  );
};

export default GalleryArea;
