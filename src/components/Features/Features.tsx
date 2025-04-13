import Image from "next/image";
import Button from "@/components/ui/Button";

const FeaturesArea = () => {
    return (
        <div className="p-6 lg:p-8 xl:p-10 bg-neutral-200">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold">FEATURES</h2>
            <div className="px-6 lg:px-30 py-5">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/features/image1.jpeg" // 実際の画像パスに変更してください
                            alt="特徴イメージ"
                            width={600}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="sm:text-md md:text-lg lg:text-3xl leading-relaxed p-1">◆着け心地・木の温もり</p>
                        <p className="text-xs sm:text-sm md:text-base lg:text-[20px] xl:text-2xl leading-relaxed p-1 max-w-prose">
                            ウッドアクセサリーの魅力は、<br/>何と言ってもそのやさしい着け心地にあります。<br/>
                            金属とは異なり、木は軽くて肌に馴染みやすく、<br/>
                            肌にふれたときのひんやり感もなく、<br/>まるで身体の一部のように自然に寄り添ってくれます。<br/><br/>
                            さらに、木のアクセサリーは時間とともに<br/>変化を楽しめるのも大きな特徴です。<br/>
                            使い続けるほどに、自分だけの風合いへと育っていきます。<br/>
                            木という自然素材が持つ温もりと個性を、<br/>ぜひ日常に取り入れてみてください。
                        </p>
                    </div>
                </div>
                <div className="items-center flex justify-center pt-6">
                    <Button link="/features"/>
                </div>
            </div>
        </div>
    );
};

export default FeaturesArea;
