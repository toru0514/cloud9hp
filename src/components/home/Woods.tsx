// app/_components/WoodsIntroArea.tsx
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";

import {woods} from "@/app/(main)/woods/_data/woods";

const FEATURED_SLUGS = [
  "maple",
  "padauk",
  "purpleheart",
  "sycamore",
  "wenge",
  "ziricote",
] as const;

export default function WoodsIntroArea() {
  const featured = FEATURED_SLUGS
    .map((slug) => woods.find((w) => w.slug === slug))
    .filter(Boolean)!;

  return (
    <SectionContainer className="bg-neutral-100">
      <SectionTitle>WOOD MATERIALS</SectionTitle>
      <div className="px-6 lg:px-30 py-8">
        <div className="flex flex-col items-start gap-8">
          {/* 上：サンプルのグリッド（6件） */}
          <div className="w-full">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* スマホ用（最初の2件だけ表示） */}
              {featured.slice(0, 2).map((w) => (
                <li key={w!.slug} className="block sm:hidden">
                  <Link
                    href={`/woods/${w!.slug}`}
                    className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={`/woods/${w!.slug}.jpg`}
                        alt={`${w!.nameJa} (${w!.nameEn})`}
                        fill
                        sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="sm:text-md md:text-lg lg:text-3xl font-semibold">
                        {w!.nameJa}
                        <span className="ml-1 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-500">
                / {w!.nameEn}
              </span>
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-neutral-600">
                        {w!.catch.replace(/^—\s*|\s*—$/g, "")}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}

              {/* PC用（6件表示） */}
              {featured.slice(0, 3).map((w) => (
                <li key={w!.slug} className="hidden sm:block">
                  <Link
                    href={`/woods/${w!.slug}`}
                    className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={`/woods/${w!.slug}.jpg`}
                        alt={`${w!.nameJa} (${w!.nameEn})`}
                        fill
                        sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <p className="sm:text-md md:text-lg lg:text-3xl font-semibold">
                        {w!.nameJa}
                        <span className="ml-1 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-500">
                / {w!.nameEn}
              </span>
                      </p>
                      <p
                        className="mt-1 line-clamp-2 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-600">
                        {w!.catch.replace(/^—\s*|\s*—$/g, "")}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* 下：紹介テキスト＋ボタン */}
          <div className="w-full">
            <h3 className="sm:text-md md:text-lg lg:text-3xl  font-semibold mb-3">
              「木の個性 – 写真と解説で魅力に触れる」
            </h3>
            <p
              className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-neutral-700 leading-relaxed">
              メープル、パドック、パープルハート…。
              木材工房cloud9で扱う代表的な木材を、カード形式で分かりやすく紹介します。<br/>
              詳しく知りたい木材をクリックして詳細ページへ。
            </p>

            <div className="items-center flex justify-center pt-6">
              <Button link="/woods"/>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
