// app/components/FeatureSlide.tsx

import Image from "next/image";

type Feature = {
  image: string;
  title: string;
  description: string;
};

export const FeatureSlide = ({feature}: { feature: Feature }) => (
  <div className="flex flex-col md:flex-row items-center gap-6">
    <div className="w-full md:w-1/2 pl-10">
      <Image
        src={feature.image}
        alt={feature.title}
        width={600}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
    <div className="w-full md:w-1/2 pr-10">
      <p className="sm:text-md md:text-lg lg:text-3xl font-semibold p-1">{feature.title}</p>
      <p
        className="text-sm sm:text-sm md:text-base lg:text-[20px] xl:text-xl 2xl:text-2xl leading-relaxed p-1 whitespace-pre-line">
        {feature.description}
      </p>
    </div>
  </div>
);
