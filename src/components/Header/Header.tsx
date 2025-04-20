"use client";

import SideMenu from "@/components/SideMenu/SideMenu";
import HamburgerMenu from "@/components/Navigation/HamburgerMenu"; // ✅ ここを修正！
import Image from "next/image";
import {useEffect, useState} from "react";
import {HeaderImageData} from "@/data/imageData";

const HeaderMenu = () => {
  const headerImg = HeaderImageData[0];
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsZoomed(true), 100); // ページが読み込まれて 0.1秒後にズーム開始
  }, []);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // 200ms 後にアニメーション開始
  }, []);

  return (
    <div className="text-white p-0 relative">
      {/* ヘッダー画像 */}
      <div
        className="w-full relative overflow-hidden h-[400px] sm:h-[500px] md:h-[500px] lg:aspect-[1280/630] lg:h-auto">
        <Image
          src={headerImg.url}
          alt={headerImg.alt}
          fill
          className={`object-cover object-center transition-transform duration-[5000ms] ease-in-out ${
            isZoomed ? "scale-100" : "scale-200"
          }`}
        />
      </div>

      {/* ロゴ */}
      <div className="absolute top-0 left-1 lg:left-2 w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-42 lg:h-42">
        <Image src="/header/logo.png" alt="Overlay Logo" fill className="object-contain"/>
      </div>

      {/* キャッチコピー */}
      <div
        className={`absolute bottom-0 right-0 text-black bg-[rgba(217,217,217,0.6)] px-4 pt-2 pb-4 sm:px-8 sm:pt-2 sm:pb-4 md:px-12 md:pt-4 md:pb-6 lg:px-16 lg:pt-6 lg:pb-8 w-fit max-w-full transition-transform duration-[4000ms] ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-[100%] opacity-0"
        }`}
      >
        <p className="text-lg sm:text-[24px] md:text-2xl lg:text-4xl font-[650] md:leading-8 lg:leading-12">
          木のぬくもりと、<br/>最高の幸せをあなたに。
        </p>
        <p
          className="text-sm sm:text-base md:text-xl lg:text-2xl font-[500] sm:mt-[5px] md:mt-1.5 leading-tight sm:leading-relaxed">
                    <span className="block md:inline">
                        身につけるだけで温もりが感じられて、
                        <br className="block md:hidden"/>
                        あたたかい気持ちになれる
                    </span>
          <br className="hidden md:block"/>
          <span className="block md:inline">
                        あなたの日常に寄り添う、ウッドアクセサリー
                    </span>
        </p>
      </div>

      <nav className="hidden md:flex absolute top-4 right-4 space-x-6">
        <SideMenu/>
      </nav>
      <HamburgerMenu/>
    </div>
  );
};

export default HeaderMenu;
