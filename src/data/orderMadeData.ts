//app/data/orderMadeData.ts

export type OrderMadeItem = {
  slug: string;
  title: string;
  titleEn?: string;
  image: string;
  images: string[];
  days?: number;
  price?: number;
  wood: string;
  woodEn?: string;
  description: string;
  descriptionEn?: string;
  detail: string;
  detailEn?: string;
};

export const orderMadeData: OrderMadeItem[] = [
  {
    slug: "order-made-1",
    title: "特注額縁(アクリル板、塗装無し)",
    titleEn: "Custom Frame (Acrylic, Unfinished Wood)",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/bc088ec1d1c64b87b2683f8330bb81d3/IMG_5707.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/bc088ec1d1c64b87b2683f8330bb81d3/IMG_5707.jpeg",
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/169b425baea74f5cbe48c55634815c9d/IMG_5708.jpeg",
    ],
    days: 5,
    price: 5000,
    wood: "白木材",
    woodEn: "Untreated softwood",
    description:
      "お客様からのご依頼で、230mm×230mmのキャンバス用の特注額縁を製作しました。小さなキャンバスは多くの種類がありますが、額が対応していない場合が多いです。当店では、小さなキャンバスに対応したオーダーの額を安価、短納期で対応いたします。",
    descriptionEn:
      "We created a custom 230mm × 230mm frame for a customer's canvas. There are many small canvas sizes, but ready-made frames often don't fit. We offer affordable, quick-turnaround custom frames tailored to small canvases.",
    detail:
      "お客様からのご依頼で、230mm×230mmのキャンバス用の特注額縁を製作しました。それ以外にも、160mm×230mm,180mm×240mm等も合わせて複数オーダーいただきました。小さなキャンバスは多くの種類がありますが、額が対応していない場合が多いです。当店では、小さなキャンバスに対応したオーダーの額を安価、短納期で対応いたします。数割もご用意いたしております。お気軽にご相談ください。",
    detailEn:
      "We created a custom 230mm × 230mm frame for a customer's canvas, along with several other sizes such as 160mm × 230mm and 180mm × 240mm. There are many types of small canvases, but frames that fit them are often hard to find. We provide affordable, short-lead-time custom frames designed specifically for small canvases, including bulk orders. Please feel free to contact us.",
  },
  {
    slug: "order-made-2",
    title: "特注額縁(アクリル板、塗装有り)",
    titleEn: "Custom Frame (Acrylic, Painted Finish)",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/b23b3ddd01e14f06afdf87e414e79a50/IMG_5312.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/b23b3ddd01e14f06afdf87e414e79a50/IMG_5312.jpeg",
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/89d0253784614245923afc94ef358efa/_albumtemp.jpeg",
    ],
    days: 7,
    price: 15000,
    wood: "白木材+水性塗料",
    woodEn: "Softwood + water-based paint",
    description:
      "お客様からのご依頼で、725mm×480mmのポスター用の額を作成しました。お客様から、ポスターを購入したがちょうどいいサイズの額がなく飾れないとの相談がありました。当店では、お客様のご要望に合わせて特注の額縁を製作いたします。額縁のサイズやデザインについてはお気軽にご相談ください。",
    descriptionEn:
      "We made a custom 725mm × 480mm frame for a poster. The customer had purchased the poster but couldn't find a frame in the right size. We create bespoke frames to match your artwork and display needs. Please feel free to discuss sizes and design with us.",
    detail:
      "お客様からのご依頼で、725mm×480mmのポスター用の額を作成しました。お客様から、ポスターを購入したがちょうどいいサイズの額がなく飾れないとの相談がありました。額縁のデザインはシンプルに、塗装も簡易なものをサンプルからお選びいただきました。塗装やデザイン等で価格の幅を調整することが可能です。当店では、お客様のご要望に合わせて特注の額縁を製作いたします。額縁のサイズやデザインについてはお気軽にご相談ください。",
    detailEn:
      "We created a custom 725mm × 480mm frame for a poster after the customer told us they couldn't find a ready-made frame that fit. The design was kept simple, and the paint was selected from our sample options as a modest finish. By adjusting the finish and design, we can tailor the overall cost to your budget. We are happy to create custom frames to suit your needs, so please feel free to consult us about size and design.",
  },
  {
    slug: "order-made-3",
    title: "特注ウッドパネル",
    titleEn: "Custom Wood Panel",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/aedd44a13c1349128b041b2e420b66d5/IMG_5308.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/aedd44a13c1349128b041b2e420b66d5/IMG_5308.jpeg",
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/77283154dcdf464a9f81c8a5baabe2e8/IMG_5307.jpeg",
    ],
    days: 5,
    price: 5000,
    wood: "白木材+ベニヤ板",
    woodEn: "Softwood + veneer board",
    description:
      "お客様からのご依頼で、315mm×315mmのウッドパネルを制作いたしました。画家様からのご依頼で、和紙を貼ってご使用になられるそうです。当店では、お客様のご要望に合わせて特注の木パネルも制作いたします。サイズに関してはお気軽にご相談ください。四角以外にも、丸やオーバル、その他の形状でも対応可能です。お気軽にご相談ください。",
    descriptionEn:
      "We produced a 315mm × 315mm wood panel at the request of a painter who planned to mount washi paper on it. We also create custom wood panels in various sizes and shapes—square, circular, oval, and more—according to your needs.",
    detail:
      "画家様からのご依頼で、315mm×315mmのウッドパネルを制作いたしました。和紙を貼ってご使用になられるそうです。簡易なパネルは短納期かつ安価で製作可能です。数割もご利用いただけます。当店では、お客様のご要望に合わせて特注のウッドパネルも制作いたします。サイズに関してはお気軽にご相談ください。四角以外にも、丸やオーバル、その他の形状でも対応可能です。お気軽にご相談ください。",
    detailEn:
      "We produced a 315mm × 315mm wood panel for a painter who planned to adhere washi paper to its surface. Simple panels like this can be made quickly and at reasonable cost, and we can also supply them in small batches. We create custom wood panels tailored to your requirements in both size and shape—square, circular, oval, or more unusual forms. Please feel free to consult us.",
  },
  {
    slug: "order-made-4",
    title: "ステンドグラス用の木枠",
    titleEn: "Wooden Frame for Stained Glass",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/a56a2d4981244c7e8c267ed9b55e15f2/IMG_4825.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/a56a2d4981244c7e8c267ed9b55e15f2/IMG_4825.jpeg",
    ],
    days: 7,
    price: 8000,
    wood: "SPF+水性塗料",
    woodEn: "SPF + water-based paint",
    description:
      "お客様からのご依頼で、ステンドグラスの木枠を制作いたしました。サイズやデザインはもちろん、安価な木材を使用して価格を下げたいなどの相談にも対応しています。お気軽にご相談ください。",
    descriptionEn:
      "We made a wooden frame for a stained glass piece. In addition to size and design, we can also work with you to choose materials that help keep costs down. Please feel free to consult us.",
    detail:
      "お客様からのご依頼で、ステンドグラスの木枠を制作いたしました。複数枚分必要とのことで、なるべく安価にしたいとご相談いただき、材料を選定させていただきました。このような、サイズやデザインはもちろん、安価な木材を使用して価格を下げたいなどの相談にも対応しています。お気軽にご相談ください。",
    detailEn:
      "We produced a wooden frame for stained glass at the customer's request. Because multiple pieces were needed and the customer wanted to keep costs as low as possible, we carefully selected cost-effective materials. We are happy to discuss not only the size and design, but also how to balance material choice and price. Please feel free to contact us.",
  },
  {
    slug: "order-made-5",
    title: "特注包丁の柄",
    titleEn: "Custom Knife Handle",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/6194016abb7e4a6daa45b3428ab95ffb/IMG_6347.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/6194016abb7e4a6daa45b3428ab95ffb/IMG_6347.jpeg",
    ],
    days: undefined,
    price: undefined,
    wood: "黒檀+メープル+オイルフィニッシュ",
    woodEn: "Ebony + maple + oil finish",
    description:
      "お客様からのご依頼で、包丁の柄を制作いたしました。包丁の柄には挟むタイプと差し込むタイプがありますが、この包丁はそのどちらでもないため、対応いたしました。",
    descriptionEn:
      "We crafted a custom knife handle. While most handles are either clamped between scales or fitted onto a tang, this knife did not follow either common structure, so we designed a custom solution.",
    detail:
      "お客様からのご依頼で、包丁の柄を制作いたしました。包丁の柄には挟むタイプと差し込むタイプがありますが、この包丁はそのどちらでもないタイプでした。そのため、間にメープル材を使用して黒檀で挟めるように加工し、オイルフィニッシュで制作いたしました。このようなご依頼も、木材の選定からお選びいただき、デザインも相談の上、進めさせていただきます。お気軽にご相談ください。",
    detailEn:
      "We created a custom handle for a knife whose structure did not match the usual clamped or inserted types. To solve this, we sandwiched a piece of maple between ebony pieces so the blade could be securely held, and finished the handle with an oil finish. For commissions like this, we can consult with you on wood selection and design details. Please feel free to get in touch.",
  },
  {
    slug: "order-made-6",
    title: "ギターのピックガード制作+ピックアップ交換",
    titleEn: "Guitar Pickguard Fabrication & Pickup Swap",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/288689b980f742b4ada7d272b64396ed/IMG_4828.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/288689b980f742b4ada7d272b64396ed/IMG_4828.jpeg",
    ],
    days: undefined,
    price: 10000,
    wood: "応相談",
    woodEn: "To be discussed",
    description:
      "お客様からのご依頼で、YAMAHA[Pacifica]のピックガードを制作いたしました。ピックアップを交換したいとの相談で、ピックガードの制作も追加工や新規制作の必要がありますが、対応可能です。ギターやベースについても対応いたします。",
    descriptionEn:
      "We fabricated a new pickguard for a YAMAHA Pacifica at a customer's request to change pickups. Modifying or recreating the pickguard is often necessary in such cases, and we can handle both guitars and basses.",
    detail:
      "お客様からのご依頼で、YAMAHA[Pacifica]のピックガードを制作いたしました。ピックアップを交換したいとの相談で、お持ち込みいただいたピックアップのサイズに合うようにピックガードの制作も実施いたしました。ピックガード自体やボディへの追加工、ピックガード等の新規制作の必要がある場合も、対応可能です。ギター以外にベースについても対応いたしますので、お気軽にご相談ください。",
    detailEn:
      "We produced a custom pickguard for a YAMAHA Pacifica in order to install customer-supplied pickups that differed from the original size. We adjusted the pickguard design so it would fit the new pickups precisely. When pickup swaps require additional routing, body work, or completely new pickguards, we can accommodate those needs as well—for both guitars and basses. Please feel free to consult us.",
  },
  {
    slug: "order-made-7",
    title: "トランクケース用の木箱",
    titleEn: "Wooden Box for Trunk Case",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/8ecd2630b0214f7cb67f1f61f8d8f1ba/IMG_4903.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/8ecd2630b0214f7cb67f1f61f8d8f1ba/IMG_4903.jpeg",
    ],
    days: undefined,
    price: 10000,
    wood: "持ち込み",
    woodEn: "Customer-supplied wood",
    description:
      "鞄職人様からのご依頼で、トランクケースに使用するための木箱を制作いたしました。木材は持ち込みで、詳細を決めながら対応いたしました。木材の持ち込みも可能ですので、お気軽にご相談ください。",
    descriptionEn:
      "We created a wooden inner box for a trunk case at the request of a bag maker. The wood itself was supplied by the client, and we worked out the detailed dimensions together. We can also work with customer-supplied lumber.",
    detail:
      "鞄職人様からのご依頼で、トランクケースに使用するための木箱を制作いたしました。厚み、形状を理想的に行うため、木材は持ち込みで、詳細を決めながら対応いたしました。精度が必要とのことで、詳細までご相談いただき、制作をさせていただきました。木材の持ち込み、詳細のご要望等も可能ですので、お気軽にご相談ください。",
    detailEn:
      "We built a wooden box to be used inside a trunk case for a professional bag maker. To achieve the ideal thickness and shape, the client brought their own lumber, and we adjusted the specifications together as we went. Since dimensional accuracy was important, we discussed the details thoroughly before fabrication. We welcome projects that involve customer-supplied wood and detailed requirements, so please feel free to reach out.",
  },
  {
    slug: "order-made-8",
    title: "直径2m丸ウッドパネル用コンパス",
    titleEn: "Compass Jig for 2m Round Wood Panel",
    image: "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/c9b5e22e987c46f3bed85d015d3bef62/IMG_6304.jpeg",
    images: [
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/c9b5e22e987c46f3bed85d015d3bef62/IMG_6304.jpeg",
      "https://images.microcms-assets.io/assets/f76a4988862a4d59968538e5355a57d3/e844169838b74da0aba6d5d516042498/_albumtemp.jpeg",
    ],
    days: undefined,
    price: 5000,
    wood: "無し",
    woodEn: "N/A",
    description:
      "日本画家様からのご依頼で、2mのウッドパネルを作成したいとのことで、穴を開けずに綺麗に円を描くコンパスを制作いたしました。こういった治具も制作可能ですので、お気軽にご相談ください。",
    descriptionEn:
      "At the request of a Japanese painter who wanted to make a 2m wood panel, we created a compass jig that can draw a clean circle without drilling a hole in the workpiece. We also produce custom jigs like this.",
    detail:
      "日本画家様からのご依頼で、2mのウッドパネルを作成したいとのことで、穴を開けずに綺麗に円を描くコンパスを制作いたしました。紐とペンを使用しても描くことができますが、ブレたり綺麗にかけないおそれがありました。最初はカットまでのご相談でしたが、カットはご本人が実施されたそうです。こういった治具のみの制作も可能ですので、お気軽にご相談ください。",
    detailEn:
      "We produced a compass jig for a Japanese-style painter who wanted to create a 2m round wood panel. Although it is possible to draw a circle with a string and pen, there is a higher risk of wobble and uneven lines, so we designed a jig that allows a smooth circle to be drawn without making a center hole in the material. Initially we were also consulted about cutting the panel itself, but in the end the client did that work personally. We can also fabricate jigs alone, so please feel free to consult us.",
  },
];
