"use client";

import {reviewData} from "@/data/reviewData";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionContainer from "@/components/ui/SectionContainer";

const ReviewArea = () => {
  return (
    <SectionContainer>
      <SectionTitle className="pb-4">CUSTOMER REVIEWS</SectionTitle>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2, // タブレット以上で2枚
          },
          1024: {
            slidesPerView: 3, // PC以上で3枚
          },
        }}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        loop
        className="max-w-6xl mx-auto"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-between text-center h-full min-h-[400px]">
              <div className="text-yellow-400 mb-1 text-lg">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="text-gray-700 text-sm sm:text-base mt-4">{review.comment}</p>
              <div className="text-sm text-gray-500">{review.platform}より</div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default ReviewArea;
