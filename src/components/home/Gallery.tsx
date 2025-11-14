import Button from "@/components/ui/Button";
import GalleryImageGrid from "@/components/image/GalleryImageGrid";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getHomeDictionary} from "@/locales/home";

type GalleryAreaProps = {
  locale?: Locale;
};

const GalleryArea = ({locale = defaultLocale}: GalleryAreaProps) => {
  const dictionary = getHomeDictionary(locale).gallery;

  return (
    <SectionContainer className="bg-amber-20">
      <SectionTitle>{dictionary.title}</SectionTitle>
      <div className="lg:px-30 pt-2">
        <GalleryImageGrid/>
      </div>
      <div className="items-center flex justify-center pt-6">
        <Button link="/gallery" label={dictionary.buttonLabel}/>
      </div>
    </SectionContainer>
  );
};

export default GalleryArea;
