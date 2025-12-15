import {Locale, defaultLocale} from "@/lib/i18n";

type FeatureCopy = {
  title: string;
  description: string;
};

type FeatureEntry = {
  image: string;
  copy: Record<Locale, FeatureCopy>;
};

export type FeatureContent = FeatureCopy & {
  image: string;
};

const featureEntries: FeatureEntry[] = [
  {
    image:
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/bdbfbabb5e88406ba649ea69851a2808/image1.jpeg",
    copy: {
      jp: {
        title: "◆着け心地・木の温もり",
        description: `木のテーブルや木造の家、素足で触れた床。
そんなときに、どこかホッとするような安心感を感じたことはありませんか？

木のアクセサリーもまた、自然素材ならではのやさしい着け心地が魅力です。
金属のような冷たさや硬さがなく、肌にすっとなじみ、温もりを感じられます。

さらに、使うほどに風合いが変化し、自分だけの色へと育っていくのも木ならでは。
そっと寄り添うような存在を、ぜひ日常に取り入れてみてください。`,
      },
      en: {
        title: "◆ Comfort & Warmth of Wood",
        description: `Have you ever felt a sense of comfort when touching a wooden table, a wooden home, or a wooden floor with bare feet?
Wooden accessories carry the same gentle warmth of nature.
Unlike metal, they are neither cold nor rigid, blending seamlessly with your skin while radiating warmth.
Moreover, as you use them, they develop character and grow into a color unique to you—something only wood can offer.
Embrace this gentle presence in your everyday life.`,
      },
    },
  },
  {
    image:
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/77d7fd3c6c1f4696916a73178a5f0217/image2.jpeg",
    copy: {
      jp: {
        title: "◆防水性",
        description: `木のアクセサリーは「濡れても大丈夫？」とご心配される方もいらっしゃるかもしれません。
当製品には蜜蝋ワックスを少量塗布しており、軽い水濡れ程度であれば問題ありません。
また、水に沈めるテストでも変化は見られず、安心してご使用いただけます。
ワックスは自然素材のため、落ちてきた際は市販の蜜蝋ワックスで簡単にお手入れが可能です。`,
      },
      en: {
        title: "◆ Water Resistance",
        description: `Some may worry, “Is it okay if wood accessories get wet?”
Our products are coated with a small amount of beeswax, making them resistant to light water exposure.
Even in immersion tests, no changes were observed, ensuring safe use.
Since beeswax is a natural material, you can easily reapply commercially available beeswax for maintenance if it wears off.`,
      },
    },
  },
  {
    image:
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/223ad0b336374259991981e913e16762/image3.jpeg",
    copy: {
      jp: {
        title: "◆金属アレルギー対応",
        description: `指輪やイヤーアクセサリー、バングルなどは一般的に金属製のものが多く、
金属アレルギーのために身につけられない方も少なくありません。
当製品は、そんな方にも安心してご使用いただけるよう、木材をメインに使用したウッドアクセサリーです。
肌あたりもやさしく、身につけるたびに自然な温もりを感じていただけます。

※ピアスなど、一部アイテムには金属パーツ（サージカルステンレス）を使用しております。`,
      },
      en: {
        title: "◆Suitable for Metal Allergy",
        description: `Many rings, earrings, and bangles are typically made of metal, making them unsuitable for people with metal allergies.
Our products are wood-based accessories designed for such individuals to wear with peace of mind.
They are gentle on the skin and provide a natural warmth every time you wear them.
Note: Some items, such as earrings, use metal parts (surgical stainless steel).`,
      },
    },
  },
  {
    image:
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/e96d410e42d349a9a65911aaa1213dcc/image4.jpeg",
    copy: {
      jp: {
        title: "◆希少性",
        description: `日本では欅や檜などが知られ、SPF材やホワイトウッドなどが身近にありますが、当製品には、世界中で育まれた希少な木材を使用しています。
中には現在ではほとんど手に入らないものもあり、同じ製品を再び作れない可能性もあります。

木材はすべて自然素材。
ひとつとして同じものはなく、出会いはまさに一期一会。
そんな儚くも美しい木の世界を、ぜひお楽しみください。`,
      },
      en: {
        title: "◆ Rarity",
        description: `In Japan, woods like zelkova and cypress are well-known, and SPF or whitewood is common.
However, our products feature rare woods sourced from around the world.
Some of these woods are now nearly impossible to obtain, making it unlikely that identical pieces can ever be reproduced.
Each piece of wood is a natural material, unique and unrepeatable—every encounter is truly once-in-a-lifetime.
Please enjoy the fleeting yet beautiful world of wood.`,
      },
    },
  },
  {
    image:
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/16322b3520cd46be877817656849e926/image5.jpeg",
    copy: {
      jp: {
        title: "◆無着色",
        description: `木材といえば茶色や白を思い浮かべる方も多いかもしれませんが、
当製品では、紫・ピンク・黒・白黒・茶黒など、
自然が育んだ個性豊かな色合いの木材を使用しています。

着色は一切行わず、素材本来の色を活かしたまま、
十数段階の工程で丁寧に磨き上げ、自然な艶と輝きを引き出しています。
木が本来持つ美しさを、ぜひお楽しみください。`,
      },
      en: {
        title: "◆ Naturally Uncolored",
        description: `When people think of wood, they often imagine brown or white.
However, our products use woods with naturally rich and unique colors, such as purple, pink, black, black-and-white, and dark brown.
We do not apply any artificial coloring. Instead, the natural colors of the wood are preserved and carefully polished through multiple stages to bring out its natural luster and shine.
Please enjoy the inherent beauty of wood itself.`,
      },
    },
  },
];

export const getFeatureData = (locale: Locale = defaultLocale): FeatureContent[] =>
  featureEntries.map(({image, copy}) => {
    const localizedCopy = copy[locale] ?? copy[defaultLocale];
    return {
      image,
      ...localizedCopy,
    };
  });
