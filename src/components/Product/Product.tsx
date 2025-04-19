import WoodringArea from "@/components/Product/Woodring/Woodring";
import CrystalWoodringArea from "@/components/Product/CrystalWoodRing/CrystalWoodRing";
import BangleArea from "@/components/Product/Bangle/Bangle";
import EarcuffArea from "@/components/Product/Earcuff/Earcuff";
import EarcuffLeafArea from "@/components/Product/EarcuffLeaf/EarcuffLeaf";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

const ProductArea = () => {
  return (
    <SectionContainer>
      <SectionTitle>PRODUCT</SectionTitle>
      <WoodringArea/>
      <CrystalWoodringArea/>
      <BangleArea/>
      <EarcuffArea/>
      <EarcuffLeafArea/>
    </SectionContainer>
  );
};

export default ProductArea;
