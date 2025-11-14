import {Locale, defaultLocale} from "@/lib/i18n";

type ReviewEntry = {
  platform: string;
  rating: number;
  copy: Record<Locale, string>;
};

const reviewEntries: ReviewEntry[] = [
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "結婚指輪として注文させて頂きました。木の温もりが優しく、作りも丁寧で美しい指輪です。結婚指輪ということで、作り手さんのお心遣いからサプライズで、一つの木から二つの指輪を生み出して下さいました。感激です！どうもありがとうございました。",
      en: "We ordered these as our wedding rings. The warmth of the wood feels gentle and the craftsmanship is exquisite. As a surprise, the artist even carved both rings from the same piece of wood for us. We were so moved—thank you!",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "木婚式にサプライズで使わせてもらいます！",
      en: "I'm planning to surprise my partner with this for our wooden anniversary!",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "この度は素敵なリングをありがとうございました。私の不手際で数度やりとりさせていただきましたが、いつもあたたかく迅速に対応していただき感謝の気持ちでいっぱいです。\nリングも落ち着いた木の温もりとクリスタルの煌めきがとても美しく、すごく嬉しいです。パートナーとのペアリングにしたいと思っております。またご縁がございましたら、どうぞよろしくお願いいたします。",
      en: "Thank you for the beautiful ring. Even though I had to contact you several times because of my own mistakes, you always responded warmly and quickly. The calm warmth of the wood and the sparkle of the crystal are stunning. I plan to wear it as a pair with my partner. I hope we can order again someday.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "とても素敵なお品で大満足しています。\n梱包も丁寧にしていただき、ありがとうございました。\n夫婦でペアで購入しましたが色合いが少しずつ違ってそれもまた素敵です。\nただ、なぜか私だけ木だからなのか他の手持ちの指輪と同じサイズなのに窮屈に感じます。もうワンサイズあげるべきだったのかな。",
      en: "It's a wonderful piece and I'm beyond satisfied. The packaging was very careful too—thank you. We bought a matching set as a couple and even the subtle difference in color between them is charming. I personally feel mine is slightly snug, so maybe I should have gone one size up.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "金属アレルギーの為このような指輪を探していました！とても味があって、素敵でした！大切に使用します！",
      en: "I was looking for a ring like this because I have metal allergies. It has so much character and is absolutely lovely. I'll treasure it!",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "迅速な発送対応ありがとうございました。\n妻の誕生日が数日後で、中身の確認は未だですが、開封を楽しみにしております。",
      en: "Thank you for shipping so quickly. My wife's birthday is in a few days so we haven't opened it yet, but we're excited to see it.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "金属アレルギーの友人でも付けることができ、とても喜んでくれました꒰⑅ •̥ ·̮ •̥ ⑅꒱ ♥︎·°\nありがとうございます",
      en: "My friend who has metal allergies can wear it comfortably and was so happy. Thank you!",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "対応も丁寧で何より素敵なデザインすぎてつけてる時がすごくワクワクします🥺彼が、はじめてこういう指輪がいいと言ってくれたことでこちらの指輪に出会えました。2人で大切にしていきます💍",
      en: "Your support was so considerate, and the design is beautiful—it makes me excited every time I wear it. This is the first time my partner ever said he wanted a ring like this, and that's how we discovered you. We'll cherish them together.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "イベントで購入させていただき、今回二つめの購入になります。\n今回は小指につけるための指輪を購入。\n個人的に今回購入した小指のがしっくりきました。\n木目もハッキリしていて、ちょっとしたアクセントにとてもいい。\n外箱などもしっかりしています。また好みなものが見つかれば購入させていただきたいです。",
      en: "After buying one at an event, this is my second purchase. I chose one for my little finger this time and it feels just right. The grain is vivid and makes a great accent. Even the packaging is solid. I'll definitely buy again when I find another favorite.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "遅くなってしまい申し訳ございません。妻も私もとても気に入っています。",
      en: "Sorry for the late review. My wife and I both love it.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "こちらの実物を見る機会があり、久々にアクセサリーが欲しいと思いました。ウッドと金属の融合がカッコいいです！大切に使います♪",
      en: "I saw one of these in person and it made me want an accessory for the first time in a while. The fusion of wood and metal is so cool! I'll use it with care.",
    },
  },
  {
    platform: "Creema",
    rating: 5,
    copy: {
      jp: "存在感アリアリなのに軽くて使いやすそうです。ありがとうございました",
      en: "It has a striking presence yet feels light and easy to wear. Thank you!",
    },
  },
  {
    platform: "minne",
    rating: 5,
    copy: {
      jp: "この度はありがとうございます。とってもデザインが気に入りました!!大切にします。",
      en: "Thank you so much. I absolutely love the design and will cherish it!",
    },
  },
  {
    platform: "minne",
    rating: 5,
    copy: {
      jp: "パープルハートのアクセサリーが欲しくて、ずっと探していました。素敵なお品をお迎えできて嬉しいです(*^^*)",
      en: "I've been searching for a purpleheart accessory for so long. I'm thrilled to finally welcome such a beautiful piece.",
    },
  },
];

export type Review = {
  platform: string;
  rating: number;
  comment: string;
};

export const getReviewData = (locale: Locale = defaultLocale): Review[] =>
  reviewEntries.map((entry) => ({
    platform: entry.platform,
    rating: entry.rating,
    comment: entry.copy[locale] ?? entry.copy[defaultLocale],
  }));
