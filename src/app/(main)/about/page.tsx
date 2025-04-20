"use client";

import Image from "next/image";
import {AboutImageData} from "@/data/imageData";


const AboutPage = () => {
  const aboutImg = AboutImageData[0];
  return (
    <div className="text-gray-800">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-12">ABOUTUS</h1>

      <div className="p-3 lg:p-8 xl:p-10 bg-neutral-200">
        <div className="px-6 lg:px-30 py-5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src={aboutImg.url}
                alt={aboutImg.alt}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="sm:text-md md:text-lg lg:text-3xl leading-relaxed p-1 font-semibold">
                -『cloud9(クラウドナイン)』とは -
              </p>
              <p
                className="text-md sm:text-md md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed p-1 max-w-prose font-medium">
                「I am on cloud9!!」という風に使われ、<br/>
                「意気揚々」「最高の幸せ」「至福」<br/>
                という意味があります。<br/><br/>

                我々が提供する商品で、<br/>
                「cloud9な気持ちになっていただきたい」<br/>
                という想いを込めたブランドです。<br/>

                木材を使用した指輪や、イヤーカフ、<br/>
                バングル等のアクセサリーを制作/販売を行なっています。<br/>
                どの商品も、最高の幸せを感じていただけるよう、<br/>
                1点1点大切に作り上げています。<br/><br/>

                アクセサリー以外にも、木を使用したパネルや<br/>額縁等の依頼や相談も受け付けております。<br/>
                お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
