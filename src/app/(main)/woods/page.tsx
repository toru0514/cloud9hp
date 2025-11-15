// app/woods/page.tsx
import type {Metadata} from "next";
import {woods} from "./_data/woods";
import {WoodCard} from "./_components/WoodCard";

export const metadata: Metadata = {
  title: "木材紹介 – Wood Catalog",
  description: "メープル、パープルハート、シカモア、パドック、ウェンジ、スネークウッド、ピンクアイボリー、カリン、パロサント、エボニー、ローズウッド、オリーブウッド、ココボロ、ジリコテ の紹介一覧。",
};

export default function WoodsCatalogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">木材紹介</h1>
      <p className="mb-6 text-neutral-700">
        当店で使用している木材の紹介になります。クリックで詳細ページに移動します。
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {woods.map((w) => (
          <WoodCard key={w.slug} wood={w}/>
        ))}
      </div>
    </main>
  );
}
