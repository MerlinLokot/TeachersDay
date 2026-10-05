const pairs = [
  { thanks: "ваше терпение", wish: "крепкого здоровья" },
  { thanks: "вашу мудрость", wish: "душевного тепла" },
  { thanks: "вашу доброту", wish: "благодарных учеников" },
  { thanks: "ваши увлекательные уроки", wish: "вдохновения каждый день" },
  { thanks: "вашу поддержку", wish: "счастья и спокойствия" },
  { thanks: "ваше умение видеть таланты", wish: "удачи и процветания" },
  { thanks: "свет, который вы дарите", wish: "радости и смеха" },
  { thanks: "ваш труд", wish: "лёгких рабочих дней" },
  { thanks: "вашу любовь к детям", wish: "гармонии" },
  { thanks: "пример, который вы подаёте", wish: "отсутствия преград" },
  { thanks: "вашу веру в каждого из нас", wish: "уважения и признания" },
  { thanks: "вашу чуткость", wish: "мира" },
  { thanks: "вклад в наше будущее", wish: "успехов" },
  { thanks: "вашу отзывчивость", wish: "творческих идей" },
  { thanks: "ваше мастерство", wish: "профессионального роста" },
  { thanks: "вашу искренность", wish: "стабильности" },
  { thanks: "вашу энергию", wish: "сил и упорства" },
  { thanks: "вашу заботу", wish: "добра" },
  { thanks: "вашу справедливость", wish: "уверенности и стойкости" },
  { thanks: "ваши добрые советы", wish: "исполнения желаний" },
  { thanks: "то, что открываете нам мир", wish: "разнообразия в жизни" },
  { thanks: "вашу помощь", wish: "попутного ветра" },
];

const INTERVAL = 3600;

function swap(id, text) {
  const box = document.getElementById(id);
  const [s0, s1] = box.children;
  const cur = box.querySelector(".on");
  const next = cur === s0 ? s1 : s0;

  next.textContent = text;
  next.classList.add("on");
  cur.classList.remove("on");
}

let i = 0;

setInterval(() => {
  i = (i + 1) % pairs.length;
  const pair = pairs[i];

  swap("a", pair.thanks);
  swap("b", pair.wish);
}, INTERVAL);
