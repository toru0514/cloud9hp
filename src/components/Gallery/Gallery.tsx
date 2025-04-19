import Button from "@/components/ui/Button";
import GalleryImageGrid from "@/components/Image/GalleryImageGrid";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

const GalleryArea = () => {
  return (
    <SectionContainer className="bg-amber-20">
      <SectionTitle>GALLERY</SectionTitle>
      <div className="lg:px-30 pt-2">
        <GalleryImageGrid/>
      </div>
      <div className="items-center flex justify-center pt-6">
        <Button link="/gallery"/>
      </div>
    </SectionContainer>
  );
};

export default GalleryArea;
