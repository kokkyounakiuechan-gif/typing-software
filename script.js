// =========================================================
// タイピング練習アプリ 本体プログラム
// ---------------------------------------------------------
// 初心者の方でも編集しやすいように、
// 「① 設定・お題データ」→「② 画面部品の取得」→「③ ゲームの動き」
// の順番で書いています。
// お題を追加・変更したいときは、下の WORD_LIST だけ書き換えればOKです。
// =========================================================


// ---------------------------------------------------------
// ① 設定・お題データ
// ---------------------------------------------------------

// 出題する単語のリストです。
// display : 画面に表示する日本語
// romaji  : 入力してもらうローマ字(すべて小文字で書いてください)
// 好きなだけ増やしたり、書き換えたりしてOKです。
//
// キーボードのいろいろなキーを練習できるように、
// a〜z のほとんどの文字が登場するよう単語を選んでいます。
// (ただし l, q, x の3文字は、日本語のローマ字入力では
//  基本的に使わないため、この単語リストには登場しません)
const WORD_LIST = [
  { display: "あいさつ", romaji: "aisatsu" },
  { display: "こんにちは", romaji: "konnichiha" },
  { display: "ありがとう", romaji: "arigatou" },
  { display: "たいぴんぐ", romaji: "taipingu" },
  { display: "がっこう", romaji: "gakkou" },
  { display: "せんせい", romaji: "sensei" },
  { display: "ねこ", romaji: "neko" },
  { display: "いぬ", romaji: "inu" },
  { display: "さくら", romaji: "sakura" },
  { display: "にほん", romaji: "nihon" },
  { display: "べんきょう", romaji: "benkyou" },
  { display: "ぱそこん", romaji: "pasokon" },
  { display: "でんしゃ", romaji: "densha" },
  { display: "おんがく", romaji: "ongaku" },
  { display: "うんどう", romaji: "undou" },

  // ここから追加分(f, j, m, w, z, v などをカバーする単語)
  { display: "ふうせん", romaji: "fuusen" },     // 風船(ふうせん)
  { display: "ふゆ", romaji: "fuyu" },           // 冬
  { display: "ふね", romaji: "fune" },           // 船
  { display: "じてんしゃ", romaji: "jitensha" }, // 自転車
  { display: "じかん", romaji: "jikan" },        // 時間
  { display: "じしょ", romaji: "jisho" },        // 辞書
  { display: "たまご", romaji: "tamago" },       // 卵
  { display: "やま", romaji: "yama" },           // 山
  { display: "みず", romaji: "mizu" },           // 水
  { display: "めがね", romaji: "megane" },       // 眼鏡
  { display: "わたし", romaji: "watashi" },      // 私
  { display: "かわ", romaji: "kawa" },           // 川
  { display: "でんわ", romaji: "denwa" },        // 電話
  { display: "ぞう", romaji: "zou" },            // 象
  { display: "かぞく", romaji: "kazoku" },       // 家族
  { display: "れいぞうこ", romaji: "reizouko" }, // 冷蔵庫
  { display: "なつ", romaji: "natsu" },          // 夏
  { display: "はる", romaji: "haru" },           // 春
  { display: "あき", romaji: "aki" },            // 秋
  { display: "ゆき", romaji: "yuki" },           // 雪
  { display: "つき", romaji: "tsuki" },          // 月
  { display: "ほし", romaji: "hoshi" },          // 星
  { display: "そら", romaji: "sora" },           // 空
  { display: "うみ", romaji: "umi" },            // 海
  { display: "くだもの", romaji: "kudamono" },   // 果物
  { display: "くるま", romaji: "kuruma" },       // 車
  { display: "ひこうき", romaji: "hikouki" },    // 飛行機
  { display: "てがみ", romaji: "tegami" },       // 手紙
  { display: "とけい", romaji: "tokei" },        // 時計
  { display: "ぼうし", romaji: "boushi" },       // 帽子
  { display: "くつ", romaji: "kutsu" },          // 靴
  { display: "ヴァイオリン", romaji: "vaiorin" }, // バイオリン(vの練習用)
];

// 難易度ごとの問題リストです(questions.js で読み込んだデータを使っています)
// 「初級」は、もともとのWORD_LISTと、questions.jsの初級問題をあわせたものです
const DIFFICULTY_WORD_LISTS = {
  home: HOME_POSITION_WORD_LIST,
  beginner: [...WORD_LIST, ...BEGINNER_WORD_LIST],
  intermediate: INTERMEDIATE_WORD_LIST,
  advanced: ADVANCED_WORD_LIST,
};

// 今、選ばれている難易度で出題する単語リスト(難易度を選ぶと切り替わります)
// 最初は一番かんたんな「ホームポジション」レッスンから始まります
let currentWordList = DIFFICULTY_WORD_LISTS.home;

// 1問正解するごとの待ち時間(ミリ秒)。数字を大きくするとゆっくり進みます。
const NEXT_QUESTION_DELAY = 400;

// 1回のプレイで出題する問題数。WORD_LISTの中からランダムにこの数だけ選びます。
const QUESTIONS_PER_GAME = 10;

// スタート前のカウントダウンの秒数(3, 2, 1 の3秒間)
const COUNTDOWN_SECONDS = 3;

// 音の高さ(Hz)。数字を変えると音の高さが変わります。
const COUNTDOWN_BEEP_FREQUENCY = 440; // カウントダウン中の「ピッ」
const START_BEEP_FREQUENCY = 880;     // スタートした瞬間の「ピピッ」
const END_BEEP_FREQUENCY = 660;       // 終わったときの「ポーン」


// ---------------------------------------------------------
// ② 画面部品(HTMLの要素)を取得
// ---------------------------------------------------------
const timerEl = document.getElementById("timer");
const correctCountEl = document.getElementById("correctCount");
const missCountEl = document.getElementById("missCount");
const progressEl = document.getElementById("progress");

const questionCardEl = document.getElementById("questionCard");
const questionJapaneseEl = document.getElementById("questionJapanese");
const questionRomajiEl = document.getElementById("questionRomaji");
const typingInputEl = document.getElementById("typingInput");

const countdownOverlayEl = document.getElementById("countdownOverlay");
const countdownNumberEl = document.getElementById("countdownNumber");

const resultCardEl = document.getElementById("resultCard");
const resultTimeEl = document.getElementById("resultTime");
const resultCorrectEl = document.getElementById("resultCorrect");
const resultMissEl = document.getElementById("resultMiss");
const resultSpeedEl = document.getElementById("resultSpeed");
const resultAccuracyEl = document.getElementById("resultAccuracy");

const startButtonEl = document.getElementById("startButton");
const retryButtonEl = document.getElementById("retryButton");
const stopButtonEl = document.getElementById("stopButton");

const difficultySelectEl = document.getElementById("difficultySelect");
const difficultyRadioEls = document.querySelectorAll('input[name="difficulty"]');

const fingerEls = document.querySelectorAll("[data-finger]");
const handGuideCaptionEl = document.getElementById("handGuideCaption");

const keyEls = document.querySelectorAll("[data-key]");


// ---------------------------------------------------------
// 手のイラスト:キーとゆびの対応表
// ---------------------------------------------------------
// ローマ字の1文字ごとに、どの指で打つのが正しいかをまとめた表です。
// (タッチタイピングの標準的な指使いにもとづいています)
const FINGER_MAP = {
  q: "left-pinky", a: "left-pinky", z: "left-pinky",
  w: "left-ring", s: "left-ring", x: "left-ring",
  e: "left-middle", d: "left-middle", c: "left-middle",
  r: "left-index", f: "left-index", v: "left-index",
  t: "left-index", g: "left-index", b: "left-index",
  y: "right-index", h: "right-index", n: "right-index",
  u: "right-index", j: "right-index", m: "right-index",
  i: "right-middle", k: "right-middle",
  o: "right-ring", l: "right-ring",
  p: "right-pinky",
  " ": "both-thumb",
};

// 指の名前を、ひらがなで表示するための対応表です
const FINGER_DISPLAY_NAMES = {
  "left-pinky": "ひだり手・こゆび",
  "left-ring": "ひだり手・くすりゆび",
  "left-middle": "ひだり手・なかゆび",
  "left-index": "ひだり手・ひとさしゆび",
  "left-thumb": "ひだり手・おやゆび",
  "right-pinky": "みぎ手・こゆび",
  "right-ring": "みぎ手・くすりゆび",
  "right-middle": "みぎ手・なかゆび",
  "right-index": "みぎ手・ひとさしゆび",
  "right-thumb": "みぎ手・おやゆび",
};


// ---------------------------------------------------------
// ③ ゲームの状態(今どうなっているか)を持っておく変数
// ---------------------------------------------------------
let questionOrder = [];   // 出題する順番(番号のリスト)
let currentQuestionIndex = 0; // 今何問目か
let typedLength = 0;      // 今の問題で、何文字打ち終わったか

let correctCount = 0;     // 正解した文字数
let missCount = 0;        // ミスした回数

let startTime = 0;        // ゲーム開始時刻
let gameInProgress = false; // カウントダウンが終わって、実際にプレイ中かどうか
let timerIntervalId = null; // タイマー用のID(止めるときに使う)

let countdownIntervalId = null;    // カウントダウン用のID(中断で止めるときに使う)
let nextQuestionTimeoutId = null;  // 次の問題へ進むタイマーのID(中断で止めるときに使う)


// ---------------------------------------------------------
// 効果音を鳴らす処理(Web Audio API を使って音を作っています)
// ---------------------------------------------------------
// 音声ファイルを用意しなくても、プログラムだけで「ピッ」という音を
// 鳴らすことができます。frequency(音の高さ)と duration(長さ・秒)を
// 変えるだけで、音の雰囲気を変えられます。
let audioContext = null;

function playBeep(frequency, duration) {
  // ブラウザによっては音を鳴らす前に一度だけ AudioContext を作る必要があるため、
  // 最初に使うタイミングでまとめて作成しています
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const oscillator = audioContext.createOscillator(); // 音そのものを作る部品
  const gainNode = audioContext.createGain();          // 音量を調整する部品

  oscillator.type = "sine";               // やわらかい電子音
  oscillator.frequency.value = frequency; // 音の高さ

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  gainNode.gain.value = 0.2; // 音量(0〜1の範囲。大きすぎない音量にしています)

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
}


// ---------------------------------------------------------
// 今、画面で選ばれている難易度(初級・中級・上級)を取得する関数
// ---------------------------------------------------------
function getSelectedDifficulty() {
  for (const radio of difficultyRadioEls) {
    if (radio.checked) return radio.value;
  }
  return "home";
}


// ---------------------------------------------------------
// 難易度の選択肢を、選べる/選べない状態に切り替える関数
// (プレイ中に難易度が変わってしまわないようにするために使います)
// ---------------------------------------------------------
function setDifficultyControlsDisabled(disabled) {
  for (const radio of difficultyRadioEls) {
    radio.disabled = disabled;
  }
  difficultySelectEl.classList.toggle("difficulty-select-disabled", disabled);
}


// ---------------------------------------------------------
// 選ばれている難易度の単語リストから、1プレイ分の問題をランダムに選ぶ関数
// (並びをシャッフルしてから、先頭の QUESTIONS_PER_GAME 個だけ使います)
// ---------------------------------------------------------
function pickQuestionOrder() {
  const order = currentWordList.map((_, index) => index);

  // 配列の中身をランダムに入れ替える(シャッフル)
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  return order.slice(0, QUESTIONS_PER_GAME);
}


// ---------------------------------------------------------
// 「スタート」「もう一度」を押したときの入り口の処理
// まずは3秒のカウントダウンを表示してから、ゲームを始めます
// ---------------------------------------------------------
function startCountdown() {
  // 選ばれている難易度の単語リストに切り替える
  currentWordList = DIFFICULTY_WORD_LISTS[getSelectedDifficulty()];

  // 結果画面やボタンを隠して、問題カード(とカウントダウン)を表示する
  resultCardEl.classList.add("hidden");
  questionCardEl.classList.remove("hidden");
  startButtonEl.classList.add("hidden");
  retryButtonEl.classList.add("hidden");

  // カウントダウン中・プレイ中は「中断」ボタンを表示しておく
  stopButtonEl.classList.remove("hidden");

  // カウントダウン中・プレイ中は難易度を変更できないようにしておく
  setDifficultyControlsDisabled(true);

  // カウントダウン中は入力できないようにしておく
  typingInputEl.disabled = true;

  countdownOverlayEl.classList.remove("hidden");

  let count = COUNTDOWN_SECONDS;
  showCountdownNumber(count);

  countdownIntervalId = setInterval(() => {
    count--;

    if (count > 0) {
      // まだカウントダウン中
      showCountdownNumber(count);
    } else {
      // カウントダウン終了 → ゲームスタート
      clearInterval(countdownIntervalId);
      countdownIntervalId = null;
      countdownOverlayEl.classList.add("hidden");
      playBeep(START_BEEP_FREQUENCY, 0.2); // 開始の合図の音
      beginGame();
    }
  }, 1000);
}


// ---------------------------------------------------------
// カウントダウンの数字を画面に表示して、音を鳴らす処理
// ---------------------------------------------------------
function showCountdownNumber(number) {
  countdownNumberEl.textContent = number;

  // アニメーションを毎回最初から再生させるためのおまじない
  countdownNumberEl.style.animation = "none";
  void countdownNumberEl.offsetWidth;
  countdownNumberEl.style.animation = "";

  playBeep(COUNTDOWN_BEEP_FREQUENCY, 0.15);
}


// ---------------------------------------------------------
// ゲームを最初から始める処理(カウントダウンが終わった後に呼ばれます)
// ---------------------------------------------------------
function beginGame() {
  // 状態をリセット
  questionOrder = pickQuestionOrder();
  currentQuestionIndex = 0;
  typedLength = 0;
  correctCount = 0;
  missCount = 0;

  correctCountEl.textContent = "0";
  missCountEl.textContent = "0";

  // 結果画面を隠して、問題画面を表示する
  resultCardEl.classList.add("hidden");
  questionCardEl.classList.remove("hidden");
  retryButtonEl.classList.add("hidden");
  startButtonEl.classList.add("hidden");

  // 入力欄を使えるようにして、フォーカス(カーソル)を当てる
  typingInputEl.disabled = false;
  typingInputEl.value = "";
  typingInputEl.focus();

  // タイマーをスタート
  gameInProgress = true;
  startTime = Date.now();
  if (timerIntervalId) clearInterval(timerIntervalId);
  timerIntervalId = setInterval(updateTimerDisplay, 1000);

  showQuestion();
}


// ---------------------------------------------------------
// 現在の問題を画面に表示する処理
// ---------------------------------------------------------
function showQuestion() {
  const wordIndex = questionOrder[currentQuestionIndex];
  const word = currentWordList[wordIndex];

  questionJapaneseEl.textContent = word.display;
  renderRomaji(word.romaji);

  progressEl.textContent = (currentQuestionIndex + 1) + " / " + questionOrder.length;
}


// ---------------------------------------------------------
// ローマ字を1文字ずつ「打ち終わった／今から打つ／まだ」の
// 3色に分けて表示する処理
// ---------------------------------------------------------
function renderRomaji(romaji) {
  let html = "";

  for (let i = 0; i < romaji.length; i++) {
    const char = romaji[i];

    if (i < typedLength) {
      html += `<span class="typed-char">${char}</span>`;
    } else if (i === typedLength) {
      html += `<span class="current-char">${char}</span>`;
    } else {
      html += `<span class="untyped-char">${char}</span>`;
    }
  }

  questionRomajiEl.innerHTML = html;

  // 次に打つべき文字にあわせて、手のイラストの指をハイライトする
  updateFingerHighlight(romaji[typedLength]);
}


// ---------------------------------------------------------
// 手のイラストの指と、キーボードのキーを、次に打つ文字にあわせて光らせる処理
// ---------------------------------------------------------
function updateFingerHighlight(char) {
  fingerEls.forEach((el) => el.classList.remove("active-finger"));
  keyEls.forEach((el) => el.classList.remove("active-key"));

  if (char === undefined) {
    handGuideCaptionEl.textContent = "👉 スタートを押すと、ここで指をおしえてくれるよ";
    return;
  }

  const lowerChar = char.toLowerCase();

  // キーボードイラストの、次に打つキーを光らせる
  document
    .querySelectorAll(`[data-key="${lowerChar}"]`)
    .forEach((el) => el.classList.add("active-key"));

  const finger = FINGER_MAP[lowerChar];
  if (!finger) return;

  if (finger === "both-thumb") {
    document
      .querySelectorAll('[data-finger="left-thumb"], [data-finger="right-thumb"]')
      .forEach((el) => el.classList.add("active-finger"));
    handGuideCaptionEl.textContent = "👉 おやゆび でスペースをおそう!";
    return;
  }

  document
    .querySelectorAll(`[data-finger="${finger}"]`)
    .forEach((el) => el.classList.add("active-finger"));

  handGuideCaptionEl.textContent = `👉 ${FINGER_DISPLAY_NAMES[finger]} でうつよ!`;
}


// ---------------------------------------------------------
// キーを打つたびに呼ばれる処理(入力チェックの中心部分)
// ---------------------------------------------------------
function handleTypingInput() {
  const wordIndex = questionOrder[currentQuestionIndex];
  const word = currentWordList[wordIndex];
  const romaji = word.romaji;

  // 入力欄に打たれた最後の1文字を取り出す
  const typedValue = typingInputEl.value;
  const typedChar = typedValue[typedValue.length - 1];

  // 入力欄は毎回空っぽに戻す(次の1文字だけを見るため)
  typingInputEl.value = "";

  if (typedChar === undefined) return;

  const expectedChar = romaji[typedLength];

  if (typedChar.toLowerCase() === expectedChar) {
    // ------ 正解の場合 ------
    typedLength++;
    correctCount++;
    correctCountEl.textContent = correctCount;
    renderRomaji(romaji);

    // 単語をすべて打ち終わったら、次の問題へ
    if (typedLength >= romaji.length) {
      goToNextQuestion();
    }
  } else {
    // ------ ミスの場合 ------
    missCount++;
    missCountEl.textContent = missCount;
    flashMiss();
  }
}


// ---------------------------------------------------------
// ミスしたときに画面を一瞬赤くする演出
// ---------------------------------------------------------
function flashMiss() {
  questionCardEl.classList.remove("miss-flash");
  // 一度クラスを外してから付け直すことで、アニメーションを再生させる
  void questionCardEl.offsetWidth; // 再描画させるためのおまじない
  questionCardEl.classList.add("miss-flash");
}


// ---------------------------------------------------------
// 次の問題に進む処理(最後の問題ならゲーム終了)
// ---------------------------------------------------------
function goToNextQuestion() {
  typingInputEl.disabled = true;

  // 最後の問題だった場合は、キーを押した瞬間にすぐ終了音を鳴らす
  // (結果画面への切り替え自体は、少し待ってから行う)
  const isLastQuestion = currentQuestionIndex + 1 >= questionOrder.length;
  if (isLastQuestion) {
    playBeep(END_BEEP_FREQUENCY, 0.4);
  }

  nextQuestionTimeoutId = setTimeout(() => {
    nextQuestionTimeoutId = null;
    currentQuestionIndex++;
    typedLength = 0;

    if (currentQuestionIndex >= questionOrder.length) {
      endGame();
    } else {
      typingInputEl.disabled = false;
      typingInputEl.focus();
      showQuestion();
    }
  }, NEXT_QUESTION_DELAY);
}


// ---------------------------------------------------------
// ゲーム終了時の処理(結果画面を表示する)
// ---------------------------------------------------------
function endGame() {
  clearInterval(timerIntervalId);

  questionCardEl.classList.add("hidden");
  resultCardEl.classList.remove("hidden");

  resultTimeEl.textContent = timerEl.textContent;
  resultCorrectEl.textContent = correctCount;
  resultMissEl.textContent = missCount;

  const elapsedSeconds = gameInProgress ? (Date.now() - startTime) / 1000 : 0;
  gameInProgress = false;
  const { speed, accuracy } = calculateStats(elapsedSeconds);
  resultSpeedEl.textContent = speed;
  resultAccuracyEl.textContent = accuracy;

  retryButtonEl.classList.remove("hidden");
  stopButtonEl.classList.add("hidden");
  // 終了音は、最後のキーを押した瞬間(goToNextQuestion内)で鳴らし済みです

  // ゲームが終わったので、難易度をまた選べるようにする
  setDifficultyControlsDisabled(false);

  // 手のイラストのハイライトを消しておく
  updateFingerHighlight(undefined);
}


// ---------------------------------------------------------
// 「中断」ボタンを押したときの処理
// カウントダウン中でもプレイ中でも、その時点でゲームを止めて
// 結果画面(そこまでの記録)を表示します
// ---------------------------------------------------------
function abortGame() {
  // カウントダウン中だった場合は、カウントダウンを止める
  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
    countdownIntervalId = null;
    countdownOverlayEl.classList.add("hidden");
  }

  // 「次の問題へ進む」待ち時間の途中だった場合は、それも止める
  if (nextQuestionTimeoutId) {
    clearTimeout(nextQuestionTimeoutId);
    nextQuestionTimeoutId = null;
  }

  // タイマーを止める
  clearInterval(timerIntervalId);

  // 入力できないようにする
  typingInputEl.disabled = true;

  // 問題画面を隠して、結果画面(中断した時点の記録)を表示する
  questionCardEl.classList.add("hidden");
  resultCardEl.classList.remove("hidden");

  resultTimeEl.textContent = timerEl.textContent;
  resultCorrectEl.textContent = correctCount;
  resultMissEl.textContent = missCount;

  const elapsedSeconds = gameInProgress ? (Date.now() - startTime) / 1000 : 0;
  gameInProgress = false;
  const { speed, accuracy } = calculateStats(elapsedSeconds);
  resultSpeedEl.textContent = speed;
  resultAccuracyEl.textContent = accuracy;

  retryButtonEl.classList.remove("hidden");
  stopButtonEl.classList.add("hidden");

  // ゲームを中断したので、難易度をまた選べるようにする
  setDifficultyControlsDisabled(false);

  // 手のイラストのハイライトを消しておく
  updateFingerHighlight(undefined);
}


// ---------------------------------------------------------
// 速度(1分あたりの正解文字数)と正確率(%)を計算する処理
// endGame・abortGame の両方から呼ばれます
// ---------------------------------------------------------
function calculateStats(elapsedSeconds) {
  const totalTyped = correctCount + missCount;

  // 文字/分 = 正解文字数 ÷ かかった秒数 × 60
  const speed = elapsedSeconds > 0 ? Math.round((correctCount / elapsedSeconds) * 60) : 0;

  // 正確率 = 正解文字数 ÷ (正解文字数 + ミス数) × 100
  // 1文字も打っていない場合は100%として扱う
  const accuracy = totalTyped > 0 ? Math.round((correctCount / totalTyped) * 100) : 100;

  return { speed, accuracy };
}


// ---------------------------------------------------------
// タイマー表示を更新する処理(1秒ごとに呼ばれる)
// ---------------------------------------------------------
function updateTimerDisplay() {
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  // 2桁になるように "0" を付け足す(例: 5秒 → 05)
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  timerEl.textContent = mm + ":" + ss;
}


// ---------------------------------------------------------
// ボタンや入力欄に、動きを結びつける(イベント登録)
// ---------------------------------------------------------
startButtonEl.addEventListener("click", startCountdown);
retryButtonEl.addEventListener("click", startCountdown);
stopButtonEl.addEventListener("click", abortGame);
typingInputEl.addEventListener("input", handleTypingInput);

// スマホでキーボードの候補表示などにより意図しない挙動が起きた場合に備え、
// 画面(問題カード)をタップしたら入力欄にフォーカスが戻るようにしておく
questionCardEl.addEventListener("click", () => {
  if (!typingInputEl.disabled) {
    typingInputEl.focus();
  }
});
