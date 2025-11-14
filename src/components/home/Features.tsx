"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/features.css";

import {FeatureSlide} from "@/components/home/features/FeatureSlide";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import {getFeatureData} from "@/data/featureData";
import {Locale, defaultLocale} from "@/lib/i18n";
import {getFeaturesDictionary} from "@/locales/features";

type FeaturesAreaProps = {
  locale?: Locale;
};

const FeaturesArea = ({locale = defaultLocale}: FeaturesAreaProps) => {
  const slides = getFeatureData(locale);
  const dictionary = getFeaturesDictionary(locale);

  return (
    <SectionContainer className="bg-neutral-200 relative">
      <SectionTitle>{dictionary.sectionTitle}</SectionTitle>

      <div className="px-6 sm:pt-10 sm:pb-10 relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{el: ".custom-pagination", clickable: true}}
          autoplay={{delay: 10000, disableOnInteraction: false}}
          speed={1000}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {slides.map((feature, index) => (
            <SwiperSlide key={`${feature.title}-${index}`}>
              <FeatureSlide feature={feature}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center pt-4">
        <Button link="/features" label={dictionary.buttonLabel}/>
      </div>

      <div className="custom-pagination pt-6 flex justify-center"/>
    </SectionContainer>
  );
};

export default FeaturesArea;
