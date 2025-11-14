import WoodringArea from "@/components/home/product/Woodring/Woodring";
import CrystalWoodringArea from "@/components/home/product/CrystalWoodRing/CrystalWoodRing";
import BangleArea from "@/components/home/product/Bangle/Bangle";
import EarcuffArea from "@/components/home/product/Earcuff/Earcuff";
import EarcuffLeafArea from "@/components/home/product/EarcuffLeaf/EarcuffLeaf";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import WOODTiePinArea from "@/components/home/product/WoodTiePin/WoodTiePin";
import WoodEarringArea from "@/components/home/product/WoodEarring/WoodEaring";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getProductDictionary} from "@/locales/product";

type ProductAreaProps = {
  locale?: Locale;
};

const ProductArea = ({locale = defaultLocale}: ProductAreaProps) => {
  const dictionary = getProductDictionary(locale);

  return (
    <SectionContainer>
      <SectionTitle>{dictionary.sectionTitle}</SectionTitle>
      <WoodringArea
        title={dictionary.headings.woodring}
        buttonLabel={dictionary.buttonLabel}
      />
      <CrystalWoodringArea
        title={dictionary.headings.crystalWoodring}
        buttonLabel={dictionary.buttonLabel}
      />
      <BangleArea
        title={dictionary.headings.bangle}
        buttonLabel={dictionary.buttonLabel}
      />
      <EarcuffArea
        title={dictionary.headings.earcuff}
        buttonLabel={dictionary.buttonLabel}
      />
      <EarcuffLeafArea
        title={dictionary.headings.earcuffLeaf}
        buttonLabel={dictionary.buttonLabel}
      />
      <WoodEarringArea
        title={dictionary.headings.woodEarring}
        buttonLabel={dictionary.buttonLabel}
      />
      <WOODTiePinArea
        title={dictionary.headings.woodTiePin}
        buttonLabel={dictionary.buttonLabel}
      />
    </SectionContainer>
  );
};

export default ProductArea;
