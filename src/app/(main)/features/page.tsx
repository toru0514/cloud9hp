"use client";

import Image from "next/image";
import {featureData} from "@/data/featureData";

const bgColors = [
  "bg-white",
  "bg-neutral-100",
  "bg-white",
  "bg-neutral-100",
  "bg-white",
];

const FeaturesPage = () => {
  return (
    <div className="text-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-12">FEATURES</h1>

      <div className="flex flex-col">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 px-6 py-12 ${bgColors[index % bgColors.length]}`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2">{feature.title}</h2>
              <p
                className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl whitespace-pre-line leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
