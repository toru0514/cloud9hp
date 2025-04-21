// src/components/Header/SimpleHeader.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import SideMenu from "@/components/layout/SideMenu";
import HamburgerMenu from "@/components/layout/HamburgerMenu";

const SimpleHeader = () => {
  return (
    <header className="relative w-full bg-white shadow-md px-4 pt-2 pb-4 min-h-[10rem]">
      {/* ナビゲーション：右上（PC） */}
      <div className="hidden md:flex justify-end">
        <SideMenu variant="simple"/>
      </div>

      {/* ハンバーガー：右上（モバイル） */}
      <div className="md:hidden flex justify-end">
        <HamburgerMenu/>
      </div>

      {/* ロゴ：中央に絶対配置 */}
      <Link
        href="/"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative w-24 h-24 sm:w-24 sm:h-24 lg:w-28 lg:h-28 p-10">
          <Image
            src="/header/logo.png"
            alt="Cloud9 Logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
    </header>
  );
};

export default SimpleHeader;
