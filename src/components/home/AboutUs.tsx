import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import {AboutImageData} from "@/data/imageData";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getHomeDictionary} from "@/locales/home";

type AboutUsAreaProps = {
  locale?: Locale;
};

const AboutusArea = ({locale = defaultLocale}: AboutUsAreaProps) => {
  const aboutImg = AboutImageData[0];
  const dictionary = getHomeDictionary(locale).about;

  return (
    <SectionContainer className="bg-neutral-200">
      <SectionTitle>{dictionary.title}</SectionTitle>
      <div className="px-6 lg:px-30 py-5">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <Image
              src={aboutImg.url}
              alt={aboutImg.alt}
              width={600}
              height={600}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="sm:text-md md:text-lg lg:text-3xl leading-relaxed p-1 font-semibold">
              {dictionary.tagline}
            </p>
            <p
              className="text-md sm:text-md md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed p-1 max-w-prose font-medium whitespace-pre-line">
              {dictionary.description}
            </p>
          </div>
        </div>
        <div className="items-center flex justify-center pt-6">
          <Button link="/about" label={dictionary.buttonLabel}/>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutusArea;
