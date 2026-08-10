// =========================================================
// 問題データ(ホームポジション練習)
// ---------------------------------------------------------
// 一番はじめに練習する、超短いレッスンです。
// ホームポジションの8つのキー "a" "s" "d" "f" "j" "k" "l" だけを
// 使った、ごく短いお題だけを集めています。
// (a:左小指 s:左薬指 d:左中指 f:左人差し指
//  j:右人差し指 k:右中指 l:右薬指 で打つキーです)
//
// display : 画面に表示する「打つべきキー」の案内
// romaji  : 実際に入力してもらう文字(a, s, d, f, j, k, l のみ)
// =========================================================

const HOME_POSITION_WORD_LIST = [
  // ---- 1キーずつ ----
  { display: "F", romaji: "f" },
  { display: "J", romaji: "j" },
  { display: "D", romaji: "d" },
  { display: "K", romaji: "k" },
  { display: "S", romaji: "s" },
  { display: "L", romaji: "l" },
  { display: "A", romaji: "a" },

  // ---- 2キーの組み合わせ(人差し指・中指) ----
  { display: "F → J", romaji: "fj" },
  { display: "K → D", romaji: "kd" },

  // ---- 2キーの組み合わせ(薬指・小指も含む) ----
  { display: "A → S", romaji: "as" },
  { display: "S → D", romaji: "sd" },
  { display: "K → L", romaji: "kl" },
  { display: "A → F", romaji: "af" },
  { display: "J → L", romaji: "jl" },

  // ---- 4キーの組み合わせ ----
  { display: "F → J → K → D", romaji: "fjkd" },
  { display: "D → K → J → F", romaji: "dkjf" },
  { display: "A → S → D → F", romaji: "asdf" },
  { display: "J → K → L", romaji: "jkl" },

  // ---- 8キー全部を使う長めのお題 ----
  { display: "A → S → D → F → J → K → L", romaji: "asdfjkl" },
  { display: "L → K → J → F → D → S → A", romaji: "lkjfdsa" },
];


// =========================================================
// 問題データ(初級レベル)
// ---------------------------------------------------------
// ここには「初級」レベルの問題だけをまとめています。
// display : 画面に表示する日本語
// romaji  : 入力してもらうローマ字(すべて小文字で書いてください)
//
// このファイルは script.js から読み込まれ、
// 既存の WORD_LIST に追加されます。
// (script.js 側のゲームの動きなどは変更していません)
//
// 今後「中級」「上級」を追加するときも、
// このファイルに新しい配列を増やしていく形で管理できます。
// =========================================================

const BEGINNER_WORD_LIST = [
  // ---- 数字 ----
  { display: "いち", romaji: "ichi" },
  { display: "に", romaji: "ni" },
  { display: "さん", romaji: "san" },
  { display: "よん", romaji: "yon" },
  { display: "ご", romaji: "go" },
  { display: "ろく", romaji: "roku" },
  { display: "なな", romaji: "nana" },
  { display: "はち", romaji: "hachi" },
  { display: "きゅう", romaji: "kyuu" },
  { display: "じゅう", romaji: "juu" },

  // ---- 曜日 ----
  { display: "げつようび", romaji: "getsuyoubi" },
  { display: "かようび", romaji: "kayoubi" },
  { display: "すいようび", romaji: "suiyoubi" },
  { display: "もくようび", romaji: "mokuyoubi" },
  { display: "きんようび", romaji: "kinnyoubi" },
  { display: "どようび", romaji: "doyoubi" },
  { display: "にちようび", romaji: "nichiyoubi" },

  // ---- 家族 ----
  { display: "おとうさん", romaji: "otousan" },
  { display: "おかあさん", romaji: "okaasan" },
  { display: "おにいさん", romaji: "oniisan" },
  { display: "おねえさん", romaji: "oneesan" },
  { display: "あに", romaji: "ani" },
  { display: "あね", romaji: "ane" },
  { display: "いもうと", romaji: "imouto" },
  { display: "おとうと", romaji: "otouto" },

  // ---- 動物 ----
  { display: "うさぎ", romaji: "usagi" },
  { display: "とり", romaji: "tori" },
  { display: "さかな", romaji: "sakana" },
  { display: "むし", romaji: "mushi" },
  { display: "かめ", romaji: "kame" },
  { display: "かえる", romaji: "kaeru" },
  { display: "くま", romaji: "kuma" },
  { display: "さる", romaji: "saru" },
  { display: "うま", romaji: "uma" },
  { display: "ぶた", romaji: "buta" },

  // ---- 体 ----
  { display: "あたま", romaji: "atama" },
  { display: "かお", romaji: "kao" },
  { display: "め", romaji: "me" },
  { display: "みみ", romaji: "mimi" },
  { display: "くち", romaji: "kuchi" },
  { display: "て", romaji: "te" },
  { display: "あし", romaji: "ashi" },
  { display: "ゆび", romaji: "yubi" },
  { display: "おなか", romaji: "onaka" },
  { display: "からだ", romaji: "karada" },

  // ---- 食べ物 ----
  { display: "りんご", romaji: "ringo" },
  { display: "みかん", romaji: "mikan" },
  { display: "ぶどう", romaji: "budou" },
  { display: "いちご", romaji: "ichigo" },
  { display: "すいか", romaji: "suika" },
  { display: "もも", romaji: "momo" },
  { display: "ぱん", romaji: "pan" },
  { display: "ごはん", romaji: "gohan" },
  { display: "みそしる", romaji: "misoshiru" },
  { display: "おにぎり", romaji: "onigiri" },

  // ---- 学校用品 ----
  { display: "ほん", romaji: "hon" },
  { display: "えんぴつ", romaji: "enpitsu" },
  { display: "けしごむ", romaji: "keshigomu" },
  { display: "じょうぎ", romaji: "jougi" },
  { display: "つくえ", romaji: "tsukue" },
  { display: "いす", romaji: "isu" },

  // ---- 家 ----
  { display: "いえ", romaji: "ie" },
  { display: "まど", romaji: "mado" },
  { display: "にわ", romaji: "niwa" },
  { display: "かぎ", romaji: "kagi" },
  { display: "かさ", romaji: "kasa" },
  { display: "げんかん", romaji: "genkan" },
  { display: "おふろ", romaji: "ofuro" },
  { display: "へや", romaji: "heya" },

  // ---- 色 ----
  { display: "あか", romaji: "aka" },
  { display: "あお", romaji: "ao" },
  { display: "きいろ", romaji: "kiiro" },
  { display: "みどり", romaji: "midori" },
  { display: "しろ", romaji: "shiro" },
  { display: "くろ", romaji: "kuro" },
  { display: "ちゃいろ", romaji: "chairo" },
  { display: "むらさき", romaji: "murasaki" },

  // ---- 自然・天気 ----
  { display: "あめ", romaji: "ame" },
  { display: "かぜ", romaji: "kaze" },
  { display: "くも", romaji: "kumo" },
  { display: "ひ", romaji: "hi" },
  { display: "つち", romaji: "tsuchi" },
  { display: "いし", romaji: "ishi" },
  { display: "はな", romaji: "hana" },
  { display: "にじ", romaji: "niji" },

  // ---- 乗り物 ----
  { display: "ばす", romaji: "basu" },
  { display: "とらっく", romaji: "torakku" },
  { display: "ろけっと", romaji: "roketto" },

  // ---- あいさつ・表現 ----
  { display: "さようなら", romaji: "sayounara" },
  { display: "おやすみ", romaji: "oyasumi" },
  { display: "おはよう", romaji: "ohayou" },
  { display: "ただいま", romaji: "tadaima" },
  { display: "おかえり", romaji: "okaeri" },
  { display: "すみません", romaji: "sumimasen" },
  { display: "ごめんなさい", romaji: "gomennasai" },
  { display: "おねがいします", romaji: "onegaishimasu" },

  // ---- かんたんな形容詞 ----
  { display: "おおきい", romaji: "ookii" },
  { display: "ちいさい", romaji: "chiisai" },
  { display: "たのしい", romaji: "tanoshii" },
  { display: "うれしい", romaji: "ureshii" },
];


// =========================================================
// 問題データ(中級レベル)
// ---------------------------------------------------------
// 初級より少し長い単語や、動詞・形容詞の活用前の形(辞書形)、
// 促音(っ)・拗音(ゃゅょ)を含む単語などを集めています。
// =========================================================

const INTERMEDIATE_WORD_LIST = [
  // ---- 動詞 ----
  { display: "たべる", romaji: "taberu" },
  { display: "のむ", romaji: "nomu" },
  { display: "いく", romaji: "iku" },
  { display: "くる", romaji: "kuru" },
  { display: "もどる", romaji: "modoru" },
  { display: "はしる", romaji: "hashiru" },
  { display: "あるく", romaji: "aruku" },
  { display: "およぐ", romaji: "oyogu" },
  { display: "とぶ", romaji: "tobu" },
  { display: "のぼる", romaji: "noboru" },
  { display: "わらう", romaji: "warau" },
  { display: "なく", romaji: "naku" },
  { display: "あそぶ", romaji: "asobu" },
  { display: "つかう", romaji: "tsukau" },
  { display: "つくる", romaji: "tsukuru" },
  { display: "はたらく", romaji: "hataraku" },
  { display: "やすむ", romaji: "yasumu" },
  { display: "おぼえる", romaji: "oboeru" },
  { display: "わすれる", romaji: "wasureru" },
  { display: "しらべる", romaji: "shiraberu" },

  // ---- 形容詞 ----
  { display: "たかい", romaji: "takai" },
  { display: "ひくい", romaji: "hikui" },
  { display: "ながい", romaji: "nagai" },
  { display: "みじかい", romaji: "mijikai" },
  { display: "あたたかい", romaji: "atatakai" },
  { display: "つめたい", romaji: "tsumetai" },
  { display: "むずかしい", romaji: "muzukashii" },
  { display: "かんたん", romaji: "kantan" },
  { display: "しずか", romaji: "shizuka" },
  { display: "にぎやか", romaji: "nigiyaka" },
  { display: "きれい", romaji: "kirei" },
  { display: "げんき", romaji: "genki" },
  { display: "しんせつ", romaji: "shinsetsu" },
  { display: "だいじょうぶ", romaji: "daijoubu" },
  { display: "ざんねん", romaji: "zannen" },

  // ---- 職業 ----
  { display: "いしゃ", romaji: "isha" },
  { display: "かんごし", romaji: "kangoshi" },
  { display: "けいさつかん", romaji: "keisatsukan" },
  { display: "しょうぼうし", romaji: "shouboushi" },
  { display: "きょうし", romaji: "kyoushi" },
  { display: "うんてんしゅ", romaji: "untenshu" },
  { display: "かしゅ", romaji: "kashu" },
  { display: "がか", romaji: "gaka" },
  { display: "だいく", romaji: "daiku" },
  { display: "のうか", romaji: "nouka" },

  // ---- 乗り物・交通 ----
  { display: "じどうしゃ", romaji: "jidousha" },
  { display: "しんかんせん", romaji: "shinkansen" },
  { display: "こうそくどうろ", romaji: "kousokudouro" },
  { display: "しんごう", romaji: "shingou" },
  { display: "こうさてん", romaji: "kousaten" },
  { display: "ちかてつ", romaji: "chikatetsu" },
  { display: "くうこう", romaji: "kuukou" },
  { display: "えきまえ", romaji: "ekimae" },

  // ---- 楽器・スポーツ ----
  { display: "ぴあの", romaji: "piano" },
  { display: "たいこ", romaji: "taiko" },
  { display: "ふえ", romaji: "fue" },
  { display: "すず", romaji: "suzu" },
  { display: "らっぱ", romaji: "rappa" },
  { display: "やきゅう", romaji: "yakyuu" },
  { display: "しあい", romaji: "shiai" },
  { display: "すいえい", romaji: "suiei" },
  { display: "じゅうどう", romaji: "juudou" },
  { display: "けんどう", romaji: "kendou" },

  // ---- 料理・食べ物 ----
  { display: "すきやき", romaji: "sukiyaki" },
  { display: "てんぷら", romaji: "tenpura" },
  { display: "やきとり", romaji: "yakitori" },
  { display: "しゃぶしゃぶ", romaji: "shabushabu" },
  { display: "おこのみやき", romaji: "okonomiyaki" },
  { display: "たこやき", romaji: "takoyaki" },
  { display: "ちゃわんむし", romaji: "chawanmushi" },
  { display: "なっとう", romaji: "nattou" },
  { display: "とうふ", romaji: "toufu" },
  { display: "しょうゆ", romaji: "shouyu" },
  { display: "さしみ", romaji: "sashimi" },
  { display: "ぎょうざ", romaji: "gyouza" },

  // ---- 場所・建物 ----
  { display: "としょかん", romaji: "toshokan" },
  { display: "びょういん", romaji: "byouin" },
  { display: "ゆうびんきょく", romaji: "yuubinkyoku" },
  { display: "どうぶつえん", romaji: "doubutsuen" },
  { display: "すいぞくかん", romaji: "suizokukan" },
  { display: "はくぶつかん", romaji: "hakubutsukan" },
  { display: "びじゅつかん", romaji: "bijutsukan" },
  { display: "ゆうえんち", romaji: "yuuenchi" },
  { display: "しょうてんがい", romaji: "shoutengai" },
  { display: "こうじょう", romaji: "koujou" },
  { display: "じむしょ", romaji: "jimusho" },
  { display: "きょうかい", romaji: "kyoukai" },

  // ---- 気持ち・状態 ----
  { display: "きんちょう", romaji: "kinchou" },
  { display: "あんしん", romaji: "anshin" },
  { display: "しんぱい", romaji: "shinpai" },
  { display: "かんどう", romaji: "kandou" },
  { display: "こうかい", romaji: "koukai" },
  { display: "どりょく", romaji: "doryoku" },
  { display: "がまん", romaji: "gaman" },
  { display: "しっぱい", romaji: "shippai" },

  // ---- カタカナ語 ----
  { display: "かめら", romaji: "kamera" },
  { display: "てにす", romaji: "tenisu" },
  { display: "ぴざ", romaji: "piza" },
  { display: "たおる", romaji: "taoru" },
  { display: "かふぇ", romaji: "kafe" },
];


// =========================================================
// 問題データ(上級レベル)
// ---------------------------------------------------------
// 複合動詞・丁寧な長い言い回し・四字熟語・専門用語・
// 複雑な音のカタカナ語など、文字数が多く難しい単語を集めています。
// =========================================================

const ADVANCED_WORD_LIST = [
  // ---- 複合動詞 ----
  { display: "たちあがる", romaji: "tachiagaru" },
  { display: "ふりかえる", romaji: "furikaeru" },
  { display: "もちかえる", romaji: "mochikaeru" },
  { display: "はなしあう", romaji: "hanashiau" },
  { display: "たすけあう", romaji: "tasukeau" },
  { display: "おいかける", romaji: "oikakeru" },
  { display: "みおくる", romaji: "miokuru" },
  { display: "うけつぐ", romaji: "uketsugu" },
  { display: "とりかえす", romaji: "torikaesu" },
  { display: "もちあげる", romaji: "mochiageru" },
  { display: "はしりまわる", romaji: "hashirimawaru" },
  { display: "つみかさねる", romaji: "tsumikasaneru" },
  { display: "おもいだす", romaji: "omoidasu" },
  { display: "うけいれる", romaji: "ukeireru" },
  { display: "とりくむ", romaji: "torikumu" },

  // ---- 敬語・丁寧な表現 ----
  { display: "いらっしゃいませ", romaji: "irasshaimase" },
  { display: "おつかれさまでした", romaji: "otsukaresamadeshita" },
  { display: "しつれいします", romaji: "shitsureishimasu" },
  { display: "おせわになりました", romaji: "osewaninarimashita" },
  { display: "かしこまりました", romaji: "kashikomarimashita" },
  { display: "もうしわけございません", romaji: "moushiwakegozaimasen" },
  { display: "よろしくおねがいします", romaji: "yoroshikuonegaishimasu" },
  { display: "おまたせしました", romaji: "omataseshimashita" },
  { display: "しょうちしました", romaji: "shouchishimashita" },
  { display: "おめでとうございます", romaji: "omedetougozaimasu" },

  // ---- 長い熟語・複合名詞 ----
  { display: "こうつうじゅうたい", romaji: "koutsuujuutai" },
  { display: "かんきょうもんだい", romaji: "kankyoumondai" },
  { display: "こくさいこうりゅう", romaji: "kokusaikouryuu" },
  { display: "じょうほうしゃかい", romaji: "jouhoushakai" },
  { display: "せいかつしゅうかん", romaji: "seikatsushuukan" },
  { display: "きょういくせいど", romaji: "kyouikuseido" },
  { display: "けいざいせいちょう", romaji: "keizaiseichou" },
  { display: "ぎじゅつかくしん", romaji: "gijutsukakushin" },
  { display: "しぜんかんきょう", romaji: "shizenkankyou" },
  { display: "じんこうげんしょう", romaji: "jinkougenshou" },
  { display: "こくさいかんけい", romaji: "kokusaikankei" },
  { display: "ちいききょうどうたい", romaji: "chiikikyoudoutai" },
  { display: "かがくぎじゅつ", romaji: "kagakugijutsu" },
  { display: "じんこうちのう", romaji: "jinkouchinou" },
  { display: "じぞくかのうせい", romaji: "jizokukanousei" },

  // ---- 抽象的な名詞 ----
  { display: "かのうせい", romaji: "kanousei" },
  { display: "ひつようせい", romaji: "hitsuyousei" },
  { display: "じゅうようせい", romaji: "juuyousei" },
  { display: "せきにんかん", romaji: "sekininkan" },
  { display: "どくりつしん", romaji: "dokuritsushin" },
  { display: "こうきしん", romaji: "koukishin" },
  { display: "そうぞうりょく", romaji: "souzouryoku" },
  { display: "はんだんりょく", romaji: "handanryoku" },
  { display: "しゅうちゅうりょく", romaji: "shuuchuuryoku" },
  { display: "にんたいりょく", romaji: "nintairyoku" },
  { display: "きょうちょうせい", romaji: "kyouchousei" },
  { display: "こうへいせい", romaji: "kouheisei" },
  { display: "とうめいせい", romaji: "toumeisei" },
  { display: "しんらいかんけい", romaji: "shinraikankei" },
  { display: "たすうけつ", romaji: "tasuuketsu" },

  // ---- 自然科学・専門用語 ----
  { display: "じゅうりょく", romaji: "juuryoku" },
  { display: "でんじは", romaji: "denjiha" },
  { display: "こうごうせい", romaji: "kougousei" },
  { display: "せいたいけい", romaji: "seitaikei" },
  { display: "びせいぶつ", romaji: "biseibutsu" },
  { display: "いでんし", romaji: "idenshi" },
  { display: "さいぼう", romaji: "saibou" },
  { display: "ぶんしこうぞう", romaji: "bunshikouzou" },
  { display: "かせきねんりょう", romaji: "kasekinenryou" },
  { display: "たいようこうはつでん", romaji: "taiyoukouhatsuden" },
  { display: "きこうへんどう", romaji: "kikouhendou" },
  { display: "おんだんか", romaji: "ondanka" },
  { display: "せいぶつたようせい", romaji: "seibutsutayousei" },
  { display: "げんしりょく", romaji: "genshiryoku" },
  { display: "うちゅうたんさ", romaji: "uchuutansa" },

  // ---- カタカナ語(複雑な音) ----
  { display: "ヴァイキング", romaji: "vaikingu" },
  { display: "ティッシュ", romaji: "tisshu" },
  { display: "フィルム", romaji: "firumu" },
  { display: "ファイル", romaji: "fairu" },
  { display: "フェンシング", romaji: "fenshingu" },
  { display: "フォント", romaji: "fonto" },
  { display: "ジェット", romaji: "jetto" },
  { display: "チェック", romaji: "chekku" },
  { display: "シェア", romaji: "shea" },
  { display: "ウィンドウ", romaji: "windou" },
  { display: "ウェブサイト", romaji: "webusaito" },
  { display: "ウォッチ", romaji: "wocchi" },
  { display: "ディスク", romaji: "disuku" },
  { display: "フィギュア", romaji: "figyua" },
  { display: "シェフ", romaji: "shefu" },

  // ---- 四字熟語・慣用表現 ----
  { display: "いっしょうけんめい", romaji: "isshoukenmei" },
  { display: "じゅうにんといろ", romaji: "juunintoiro" },
  { display: "しんきいってん", romaji: "shinkiitten" },
  { display: "じがじさん", romaji: "jigajisan" },
  { display: "いちごいちえ", romaji: "ichigoichie" },
  { display: "しこうさくご", romaji: "shikousakugo" },
  { display: "おんこちしん", romaji: "onkochishin" },
  { display: "きしかいせい", romaji: "kishikaisei" },
  { display: "じゅうおうむじん", romaji: "juuoumujin" },
  { display: "たいきばんせい", romaji: "taikibansei" },
  { display: "ゆうめいむじつ", romaji: "yuumeimujitsu" },
  { display: "りんきおうへん", romaji: "rinkiouhen" },
  { display: "せいてんはくじつ", romaji: "seitenhakujitsu" },
  { display: "じゅんぷうまんぱん", romaji: "junpuumanpan" },
  { display: "いくどうおん", romaji: "ikudouon" },
];
