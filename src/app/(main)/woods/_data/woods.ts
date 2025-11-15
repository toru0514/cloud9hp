// app/woods/_data/woods.ts
// そのまま app 配下に追加して使えます。
// 画像は /public/woods/<slug>.jpg に配置してください（なければ自動フォールバック表示）。

export type WoodFeature = {
  label: string;
  text: string;
};

export type Wood = {
  slug: string;                // 例: "maple"
  nameJa: string;              // 例: "メープル"
  nameEn: string;              // 例: "Maple"
  catch: string;               // 見出しコピー（日本語）
  catchEn?: string;            // 見出しコピー（英語・任意）
  lead: string[];              // 冒頭の紹介（段落・日本語）
  leadEn?: string[];           // 冒頭の紹介（英語・任意）
  features: WoodFeature[];     // 主な特徴（日本語）
  featuresEn?: WoodFeature[];  // 主な特徴（英語・任意）
  uses: string[];              // 主な用途（日本語）
  usesEn?: string[];           // 主な用途（英語・任意）
  body?: string[];             // 追記・締めの段落（日本語）
  bodyEn?: string[];           // 追記・締めの段落（英語・任意）
  notes?: string[];            // 補足・注意書き（日本語）
  notesEn?: string[];          // 補足・注意書き（英語・任意）
};

export const woods: Wood[] = [
  {
    slug: "maple",
    nameJa: "メープル",
    nameEn: "Maple",
    catch: "— 清潔感と優しさを併せ持つ、やさしい木材 —",
    catchEn: "— A gentle wood with a calm, clean presence —",
    lead: [
      "「カエデ」といえば聞いたことがあるのではないでしょうか？メープルシロップ、野球のバット、ギターなど、私たちの生活の中でも馴染み深い存在です。",
      "古くから人々の暮らしに寄り添ってきたメープルは、その明るく滑らかな質感で、今もなお多くの人々に選ばれています。"
    ],
    leadEn: [
      "Maple is a wood many people know from everyday life: maple syrup, baseball bats, guitars and more.",
      "For generations it has been a familiar companion in our homes, loved for its bright color and smooth, gentle feel.",
    ],
    features: [
      {
        label: "色合い",
        text: "明るく淡い乳白色〜クリーム色。時折、ほんのり赤みや褐色を帯びることもあり、清潔感とあたたかさを感じさせます。"
      },
      {
        label: "杢目（もくめ）",
        text: "非常に緻密で滑らかな肌理。希少な「バーズアイ（鳥眼杢）」や「フレイム（縮杢）」など装飾性の高い杢目が現れることがあります。"
      },
      {label: "硬さと耐久性", text: "広葉樹の中でも比較的硬質で、反りや割れに強く長く使うアイテムに最適です。"}
    ],
    featuresEn: [
      {
        label: "Color",
        text: "Soft, pale tones from milky white to cream. Occasional hints of reddish or brownish color give a warm, clean impression.",
      },
      {
        label: "Grain",
        text: "Very fine and smooth texture. Rare, highly decorative figures such as bird’s‑eye and flame can appear in some boards.",
      },
      {
        label: "Hardness & durability",
        text: "Relatively hard and stable for a hardwood, with good resistance to warping and cracking—ideal for items made to last.",
      },
    ],
    uses: ["家具", "床材", "キッチン用品", "野球バット", "ギター", "バイオリン"],
    usesEn: ["Furniture", "Flooring", "Kitchenware", "Baseball bats", "Guitars", "Violins"],
    body: [
      "やさしく上品な色味、自然が生んだ美しい杢目。ナチュラルな空間にも、洗練された空間にも馴染みます。",
      "落ち着きの中に個性が光る、使うほどに愛着が湧く木材です。"
    ],
    bodyEn: [
      "Its gentle, refined color and naturally beautiful grain fit seamlessly into both casual and sophisticated spaces.",
      "Quiet at first glance yet full of character, maple is a wood that grows more charming the longer you live with it.",
    ],
  },
  {
    slug: "padauk",
    nameJa: "パドック",
    nameEn: "Padauk",
    catch: "— 深紅にきらめく、情熱の木 —",
    catchEn: "— A deep crimson wood that radiates passion —",
    lead: [
      "ひと目見ただけで印象に残る鮮やかな赤。伐採直後はやや朱色がかった明るい赤色で、時が経つにつれて落ち着いた赤褐色へと深みを増します。",
      "天然の赤色を持つ木材は希少で、その存在感は格別です。"
    ],
    leadEn: [
      "Padauk grabs your attention at first glance with its vivid red. Freshly cut, it shows a bright, slightly orange‑tinted red that gradually deepens into a calm reddish brown over time.",
      "Naturally red woods are rare, and the presence of padauk is truly exceptional.",
    ],
    features: [
      {label: "色合い", text: "鮮やかなオレンジレッド〜ディープレッド。経年で深い赤褐色へ。"},
      {label: "杢目（もくめ）", text: "通直杢が多く、材によっては美しいリボン杢。"},
      {label: "重さと硬さ", text: "比較的硬く重厚で耐久性が高い。"}
    ],
    featuresEn: [
      {
        label: "Color",
        text: "Bright orange‑red to deep crimson that matures into a rich reddish brown with age.",
      },
      {
        label: "Grain",
        text: "Mostly straight grain, sometimes revealing beautiful ribbon figure depending on the board.",
      },
      {
        label: "Weight & hardness",
        text: "Relatively hard and heavy with excellent durability.",
      },
    ],
    uses: ["家具", "フローリング", "楽器", "インテリア装飾", "アクセサリー", "工芸品"],
    usesEn: [
      "Furniture",
      "Flooring",
      "Musical instruments",
      "Interior accents",
      "Accessories",
      "Craft objects",
    ],
    body: [
      "大胆でありながらどこか落ち着きのある風合い。空間や作品に「情熱」と「品格」を。"
    ],
    bodyEn: [
      "Bold yet composed, padauk brings both passion and dignity to any space or piece.",
    ],
  },
  {
    slug: "purpleheart",
    nameJa: "パープルハート",
    nameEn: "Purpleheart",
    catch: "— 深く、美しく、変化する紫の木 —",
    catchEn: "— A richly colored purple wood that changes over time —",
    lead: [
      "名前の通り紫色の木材を使用していますが、実は少し不思議な木。切った直後はやや茶色っぽく、時間とともに空気や光に触れることで、鮮やかな紫色へと変化していきます。",
      "木材といえば茶色や白を思い浮かべる方が多いかもしれませんが、パープルハートはその常識を覆す、美しい天然の紫色を持った希少材です。"
    ],
    leadEn: [
      "As its name suggests, purpleheart is a wood known for its striking purple color—but it behaves in a rather mysterious way.",
      "Freshly cut, it appears more brownish, then slowly shifts to a vivid purple as it reacts with air and light, overturning the common image of wood as simply brown or pale.",
    ],
    features: [
      {
        label: "色合いの変化",
        text: "加工直後はこげ茶〜赤褐色。時間の経過や紫外線の影響で、深みのある紫〜赤紫へと変化し、さらに年月とともに落ち着いた暗紫色へと移ろいます。"
      },
      {label: "杢目（もくめ）", text: "比較的おとなしい直線的な杢目が多いが、まれに波状やリボン杢が現れることも。"},
      {label: "硬さと重さ", text: "非常に硬く重厚。耐久性に優れる一方で割れやすさもあるため丁寧な扱いが必要です。"}
    ],
    featuresEn: [
      {
        label: "Color change",
        text: "Starts out as a dark brown to reddish brown after machining, then shifts to deep purples and violet‑reds under light, finally mellowing into a dignified dark purple over the years.",
      },
      {
        label: "Grain",
        text: "Typically shows a calm, straight grain, though wavy or ribbon figure can occasionally appear, adding visual drama.",
      },
      {
        label: "Hardness & weight",
        text: "Extremely hard and dense, offering excellent durability but requiring careful handling to avoid cracking.",
      },
    ],
    uses: ["アクセサリー", "装飾小物", "高級家具のポイント使い", "楽器", "寄木細工"],
    usesEn: [
      "Accessories",
      "Decorative objects",
      "Accent parts in fine furniture",
      "Musical instruments",
      "Marquetry and inlay work",
    ],
    body: [
      "パープルハートの木言葉は「やさしい愛情」「誠実」「変わらぬ愛」。深い紫には気品と静かな情熱が宿ります。",
      "大切な人へのギフトや、一生使い続けたいアイテムに。"
    ],
    bodyEn: [
      "Purpleheart is often associated with meanings like gentle affection, sincerity, and unwavering love. Its deep purple hue carries both elegance and quiet passion.",
      "It is a wonderful choice for a special gift or a piece you want to keep by your side for a lifetime.",
    ],
  },
  {
    slug: "sycamore",
    nameJa: "シカモア",
    nameEn: "Sycamore",
    catch: "— 静かな輝きを放つ、気品ある白木 —",
    catchEn: "— A refined pale wood with a quiet glow —",
    lead: [
      "シカモアは、淡くやわらかな色合いと繊細な杢目が美しい木材。どこか上品で優しく、空間に静かな明るさを添えてくれます。",
      "その美しさと音響特性の良さから、名器「ストラディバリウス」の裏板などにも使用されたと伝えられ、長い年月を超えて愛されてきました。"
    ],
    leadEn: [
      "Sycamore is known for its soft, pale color and delicate grain. It brings a gentle, refined brightness to any space.",
      "Because of its beauty and excellent acoustic properties, it is said to have been used for the backs and sides of legendary instruments such as Stradivarius violins, and has been loved for generations.",
    ],
    features: [
      {
        label: "色合い",
        text: "明るくクリーミーな白〜黄白色。ややシルキーな光沢感があり、時間が経つとわずかに黄味を帯びます。"
      },
      {label: "杢目（もくめ）", text: "個体差が大きい。とくに「フレイム杢」「縮杢」は美術的価値が高く、高級楽器や工芸品に。"},
      {label: "音響特性と用途", text: "振動をほどよく伝え、柔らかく澄んだ音を響かせます。"}
    ],
    featuresEn: [
      {
        label: "Color",
        text: "Light, creamy white to yellowish tones with a subtle silky sheen that gently warms over time.",
      },
      {
        label: "Grain",
        text: "Highly variable; prized flame and fiddleback figures have great artistic value and are sought after for fine instruments and craftwork.",
      },
      {
        label: "Acoustics",
        text: "Carries vibration well and produces a soft, clear tone, making it a favored wood for stringed instruments.",
      },
    ],
    uses: ["弦楽器（ヴァイオリン、チェロ）", "家具", "木製小物", "内装材", "工芸品"],
    usesEn: [
      "Violins and cellos",
      "Furniture",
      "Small wooden objects",
      "Interior paneling",
      "Artisanal craft items",
    ],
    body: [
      "控えめな中にも確かな個性。ナチュラルで落ち着いた空間演出に最適。",
      "まさに「静かに語りかけてくる」ような存在です。"
    ],
    bodyEn: [
      "Understated yet full of character, sycamore is ideal for creating natural, tranquil spaces.",
      "It feels as if the wood is quietly speaking to you—subtle, but deeply expressive.",
    ],
  },
  {
    slug: "wenge",
    nameJa: "ウェンジ",
    nameEn: "Wenge",
    catch: "— 漆黒と灰の織りなす、静謐な存在感 —",
    catchEn: "— Deep black and grey grain that exudes calm strength —",
    lead: [
      "深みのある黒に繊細なグレイッシュラインが浮かぶ。独特な色調と力強いコントラストで重厚な美しさをもたらします。"
    ],
    features: [
      {label: "色合い", text: "ダークブラウン〜黒。灰白色のラインが天然のストライプ模様のように出現。"},
      {label: "杢目（もくめ）", text: "通直な木理と縞杢が特徴で現代的なデザインに映えます。"},
      {label: "重さと強度", text: "非常に硬く重厚で耐久性と耐摩耗性に優れます。"}
    ],
    uses: ["高級家具", "フローリング", "カウンター材", "内装仕上げ", "楽器", "アクセサリー", "木工芸品"],
    body: [
      "和・洋問わず空間の印象を引き締め高級感を演出。黒基調のデザインに自然の息吹を取り入れるなら。"
    ]
  },
  {
    slug: "snakewood",
    nameJa: "スネークウッド",
    nameEn: "Snakewood",
    catch: "— 威厳と美を併せ持つ、木の王 —",
    catchEn: "— The “king of woods”, combining dignity and beauty —",
    lead: [
      "蛇の鱗を思わせる独特の模様。圧倒的な存在感と重厚な質感で希少木材の中でも際立つ存在です。",
      "世界でも特に重厚な木材のひとつとして知られ、手に伝わる“詰まり”が特徴。"
    ],
    features: [
      {label: "色合い", text: "赤褐色〜ダークブラウンを基調に、黒や焦げ茶の蛇柄のような斑紋。"},
      {label: "杢目（もくめ）", text: "まだら状・網目状の“蛇柄”が一本一本異なる。装飾価値がとても高い。"},
      {label: "重さと密度", text: "非常に硬質かつ重厚。乾燥も難しいが強靭で高い耐久性。"}
    ],
    uses: ["ナイフや万年筆のグリップ", "アクセサリー", "チェス駒", "装飾小物", "楽器パーツ"],
    body: [
      "自然が生んだ芸術品。視覚・触覚の両面で圧倒的な印象を残す唯一無二の素材。"
    ]
  },
  {
    slug: "pink-ivory",
    nameJa: "ピンクアイボリー",
    nameEn: "Pink Ivory",
    catch: "— 気高く、美しく。木の女王 —",
    catchEn: "— Noble and beautiful, often called the queen of woods —",
    lead: [
      "華やかで可憐なピンク色。天然木とは思えないほど鮮やかな色合いを持ち、「木の女王」と称される気品と美しさを備える特別な木材。"
    ],
    features: [
      {label: "色合い", text: "鮮やかなローズピンク〜深みのある紅色。紫外線の影響を受けやすいため取り扱いに配慮が必要。"},
      {label: "杢目（もくめ）", text: "緻密で滑らかな通直杢が主。色そのものが際立つため均整の取れた美しい調和を生む。"},
      {label: "重さと密度", text: "非常に目が詰まり硬くて重厚。加工難易度は高いが仕上がりは抜群。"}
    ],
    uses: ["高級アクセサリー", "万年筆・ナイフのグリップ", "ジュエリーボックス", "象嵌", "木工芸品"],
    body: [
      "可憐さ・優美さ・華やかさを併せ持ち、手に取る人の心を惹きつけます。"
    ]
  },
  {
    slug: "karin",
    nameJa: "カリン",
    nameEn: "Karin",
    catch: "— 格式と親しみを備えた、和の名材 —",
    catchEn: "— A classic Japanese hardwood with both dignity and warmth —",
    lead: [
      "床柱や仏壇、フローリング、家具など、古くから暮らしに根づいてきた木材。美しい赤みと上品な艶、高い耐久性で幅広く用いられます。"
    ],
    features: [
      {label: "色合い", text: "赤褐色〜深紅色。経年で艶やかに深みが出ます。"},
      {label: "杢目（もくめ）", text: "明瞭で整った通直杢が多く、まれに玉杢や縮杢も。"},
      {label: "重さと堅牢性", text: "比較的硬く重厚。耐久性・寸法安定性に優れ、反りや割れもしにくい。"}
    ],
    uses: ["床柱", "仏壇", "床の間", "フローリング", "和家具", "テーブル", "楽器", "彫刻材"],
    body: [
      "格式とぬくもりを併せ持ち、暮らしに静かな彩りを添えます。"
    ]
  },
  {
    slug: "palo-santo",
    nameJa: "パロサント",
    nameEn: "Palo Santo",
    catch: "— 聖なる香りと癒しを宿す、神秘の木 —",
    catchEn: "— A sacred wood carrying a gentle, healing fragrance —",
    lead: [
      "スペイン語で「聖なる木」。古代インカの時代から“空間と心を清める特別な木”として大切にされてきました。",
      "手に取れば、甘くウッディな香りがふわり。祈りの気配が宿っているかのようです。"
    ],
    features: [
      {label: "香り", text: "甘く、ほんのりスパイシーで深みのあるウッディ。焚かなくても自然に香ります。"},
      {label: "色合い", text: "黄褐色〜黄金色の地に濃茶の縞模様。磨くとしっとりとした光沢。"},
      {label: "杢目（もくめ）", text: "おだやかな通直杢で、グラデーションのような色味変化が特徴。"},
      {label: "重さと密度", text: "非常に硬質で目が詰まっており小さくても重厚感。"}
    ],
    uses: ["アロマグッズ", "スティック・インセンス", "アクセサリー", "小物", "儀式用のお守り", "工芸品"],
    notes: [
      "自然への敬意から伐採には厳格なルールがあり、倒木や自然枯死した木のみ採取する伝統が守られています。"
    ],
    body: [
      "見て美しく、香って癒される。日常に“整う時間”を添えてくれる唯一無二の存在。"
    ]
  },
  {
    slug: "ebony",
    nameJa: "エボニー（黒檀）",
    nameEn: "Ebony",
    catch: "— 漆黒の気品と圧倒的な硬質感 —",
    catchEn: "— Jet‑black elegance with exceptional hardness —",
    lead: [
      "まるで墨を流したような深い黒。漆黒の美しさと比類なき硬さを持つ高級木材。",
      "ギターやバイオリンの指板材として世界中の音楽家に愛され、日本でも高級家具に重用されてきました。"
    ],
    features: [
      {label: "色合い", text: "深い黒〜黒褐色。天然でこれほど黒い木材は稀で、磨くと金属のような光沢。"},
      {label: "杢目（もくめ）", text: "非常に緻密で滑らかな通直杢が主。木目は目立たず黒一色に近い表情の個体も。"},
      {label: "重さと硬さ", text: "世界でも屈指の重さと硬さ。摩耗に強く変形しにくい。"}
    ],
    uses: ["弦楽器の指板・駒・ペグ", "ピアノの黒鍵", "日本家具", "仏壇", "彫刻材", "杖", "アクセサリー"],
    body: [
      "「黒＝高級」の原点的存在。手触りの滑らかさ、安定性、耐摩耗性を兼ね備えたプロフェッショナルのための木材。"
    ]
  },
  {
    slug: "rosewood",
    nameJa: "ローズウッド",
    nameEn: "Rosewood",
    catch: "— 香りと響き、美しさを宿す華やかな木 —",
    catchEn: "— A vibrant wood known for its aroma, sound and beauty —",
    lead: [
      "切り出した瞬間に漂う甘い香り。見た目・香り・音の響きで人々を魅了してきた世界的名材。"
    ],
    features: [
      {label: "香り", text: "ほんのり甘く華やか。名の由来でもある芳香。"},
      {label: "色合い", text: "深い赤褐色〜紫がかったブラウンに縞模様。時間とともに落ち着いた色へ。"},
      {label: "杢目（もくめ）", text: "明瞭な縞状模様から波状の装飾杢まで幅広い。"},
      {label: "重さと音響性", text: "硬く重く高密度で、音の伝導性・残響性に優れます。"}
    ],
    uses: ["ギター", "ピアノ", "クラリネット", "家具", "フローリング", "彫刻", "ナイフグリップ", "装飾"],
    body: [
      "香り・色合い・音を兼ね備えた、感性のための木。使うほどに魅了される逸材です。"
    ]
  },
  {
    slug: "olivewood",
    nameJa: "オリーブウッド",
    nameEn: "Olivewood",
    catch: "— 美しき曲線模様と、あたたかな生命力 —",
    catchEn: "— Flowing grain patterns full of warmth and life —",
    lead: [
      "ひと目で分かるダイナミックな木目のうねり。はちみつのような明るい色合いで、人を惹きつける魅力に溢れます。"
    ],
    features: [
      {label: "色合い", text: "黄褐色〜黄金色をベースに、濃茶〜黒の筋や渦模様。磨くと艶が増し立体感が際立ちます。"},
      {label: "杢目（もくめ）", text: "渦巻き状・波状・斜め縞など同じ模様は二つとなく一点物の価値。"},
      {label: "重さと硬さ", text: "比較的硬く密度が高いが粘りもあり加工性は良好。耐久性・安定性にも優れます。"},
      {label: "香り", text: "加工時にほんのりスパイシーでオイリーな香り。"}
    ],
    uses: ["カトラリー", "カッティングボード", "食器", "家具", "装飾小物", "アクセサリー", "彫刻材"],
    notes: [
      "オリーブは古くから「平和・知恵・神聖さ」の象徴。木材は寿命を終えた古木や剪定材を無駄なく活用します。"
    ],
    body: [
      "自然が描いたアート。使うほどに深まる艶と色味が“あなただけの味わい”へ育ちます。"
    ]
  },
  {
    slug: "cocobolo",
    nameJa: "ココボロ",
    nameEn: "Cocobolo",
    catch: "— 情熱と艶を宿す、音を奏でる宝石 —",
    catchEn: "— A jewel‑like wood that carries both passion and rich tone —",
    lead: [
      "赤・橙・黒が幾重にも重なる宝石のような色合い。削ると甘くスパイシーな香り。存在感と音の深みが際立ちます。"
    ],
    features: [
      {label: "色合い", text: "赤や橙を基調に紫・黒・濃茶が入り混じる独特のマーブル。磨けば濡れたような艶。"},
      {label: "杢目（もくめ）", text: "力強い通直杢や波状・リボン杢などダイナミック。"},
      {label: "香り", text: "バニラやスパイスを思わせる甘い芳香。"},
      {label: "重さと密度", text: "非常に硬く油分が多い。耐水性・耐久性に優れるが接着・塗装に工夫が必要。"}
    ],
    uses: ["ギター（バック＆サイド）", "木管楽器", "ナイフハンドル", "万年筆", "アクセサリー", "小型工芸品"],
    notes: [
      "CITES（ワシントン条約）附属書IIに登録される非常に希少な木材で、伐採・輸出に厳しい制限があります。"
    ],
    body: [
      "五感すべてに訴える“木の中の芸術品”。名前だけで心が高鳴る存在です。"
    ]
  },
  {
    slug: "ziricote",
    nameJa: "ジリコテ",
    nameEn: "Ziricote",
    catch: "— 木が描くアート。幻想的な模様を纏う響きの名材 —",
    catchEn: "— Natural artwork with otherworldly patterns and resonant tone —",
    lead: [
      "グレーの地に水墨画のように広がる複雑な模様。自然が生んだ“アートピース”のような木材です。",
      "音響特性と美しさから高級ギター材としての評価が高まり、注目を集めています。"
    ],
    features: [
      {label: "色合い", text: "灰色の地に黒・淡茶・緑がかった筋が不規則に走り幻想的なコントラスト。"},
      {label: "杢目（もくめ）", text: "波打つ複雑な縞模様が特徴で一枚ごとに異なる表情。"},
      {
        label: "重さと音響性",
        text: "重量感があり密度も高め。ローズウッドに似た深みと広がりに、よりシャープな輪郭を持つと言われます。"
      },
      {label: "香り", text: "加工時にほのかにスモーキーでスパイシー。"}
    ],
    uses: ["ギター（バック＆サイド）", "小型家具", "木工芸品", "インレイ", "装飾小物"],
    body: [
      "視覚的な美しさだけでなく、演奏者のタッチに繊細に応える表現力。見た目も音も“こだわる”方へ。",
      "同じ模様は二つとなく、唯一無二の作品が生まれます。"
    ]
  }
];
