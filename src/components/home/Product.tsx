import WoodringArea from "@/components/home/product/Woodring/Woodring";
import CrystalWoodringArea from "@/components/home/product/CrystalWoodRing/CrystalWoodRing";
import BangleArea from "@/components/home/product/Bangle/Bangle";
import EarcuffArea from "@/components/home/product/Earcuff/Earcuff";
import EarcuffLeafArea from "@/components/home/product/EarcuffLeaf/EarcuffLeaf";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import WOODTiePinArea from "@/components/home/product/WoodTiePin/WoodTiePin";
import WoodEarringArea from "@/components/home/product/WoodEarring/WoodEaring";

const ProductArea = () => {
  return (
    <SectionContainer>
      <SectionTitle>PRODUCT</SectionTitle>
      <WoodringArea/>
      <CrystalWoodringArea/>
      <BangleArea/>
      <EarcuffArea/>
      <EarcuffLeafArea/>
      <WoodEarringArea/>
      <WOODTiePinArea/>
    </SectionContainer>
  );
};

export default ProductArea;
