'use client'

import SectionTitle from "@/components/ui/SectionTitle";
import SectionContainer from "@/components/ui/SectionContainer";
import {shopLinks} from "@/data/shopLinks";

const OnlineShopArea = () => {
  return (
    <SectionContainer className="block md:hidden bg-neutral-200">
      <SectionTitle>ONLINE SHOP</SectionTitle>
      <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mt-5">
        {shopLinks.map((shop, i) => (
          <a
            key={i}
            href={shop.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:shadow-lg transition bg-white p-2 rounded-xl text-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shop.icon}
              alt={shop.name}
              className="h-12 w-auto mx-auto object-contain"
            />
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OnlineShopArea;
