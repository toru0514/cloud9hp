"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/features.css";

import {featureData} from "@/data/featureData";
import {FeatureSlide} from "@/components/Features/FeatureSlide";
import Button from "@/components/ui/Button";

const FeaturesArea = () => (
  <div className="p-6 lg:p-8 xl:p-10 bg-neutral-200 relative">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">FEATURES</h2>

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
        {featureData.map((feature, index) => (
          <SwiperSlide key={index}>
            <FeatureSlide feature={feature}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="flex justify-center pt-4">
      <Button link="/features"/>
    </div>

    <div className="custom-pagination pt-6 flex justify-center"/>
  </div>
);

export default FeaturesArea;
