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
        title: "◆ Comfort & Warmth",
        description: `Think about how a wooden table, a timber house, or a floor under bare feet instantly makes you feel at ease.
Wooden accessories deliver that same gentle comfort. They never feel cold or rigid like metal
and they pick up your body heat in seconds.

The more you wear them, the more the grain and tone evolve, creating a patina that belongs only to you.
Invite that quiet, reassuring presence into your everyday life.`,
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
        description: `Many people wonder whether wooden accessories can handle water.
We seal each piece with a light layer of natural beeswax, so light splashes are no problem.
Even in our soak tests the pieces showed no visible change, allowing you to wear them with confidence.
If the wax gradually fades, simply apply any beeswax balm at home for quick maintenance.`,
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
        title: "◆ Allergy-Friendly",
        description: `Rings, bangles, and ear accessories are usually made of metal, so people with metal allergies often have to avoid them.
Our pieces are crafted primarily from carefully selected wood so that more people can wear them comfortably.
They feel smooth and warm against the skin, bringing a natural sense of ease every time you put them on.

*Some items such as piercings include minimal surgical stainless parts.`,
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
        title: "◆ Rare Materials",
        description: `While species like zelkova or cypress are familiar in Japan, our accessories also feature rare timbers gathered from around the world.
Some are already difficult to source, which means a design may never be recreated in the exact same way twice.

Every piece of wood is unique—no identical grain, no identical story.
Enjoy the once-in-a-lifetime encounter with these beautiful and fleeting materials.`,
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
        title: "◆ Natural Colors",
        description: `Many people imagine wood as simply brown or pale beige, but nature offers far more colors.
We select timbers that naturally show purple, pink, jet-black, monochrome stripes, deep browns, and more.

We never add artificial dyes. Instead we polish each piece through more than ten steps to reveal the original glow of the wood.
Enjoy the colors and textures that only nature can create.`,
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
