const thanks = [
  "терпение и мудрость",
  "доброту и заботу",
  "веру в каждого из нас",
  "увлекательные уроки",
  "честность и поддержку",
  "умение видеть таланты",
  "свет, который вы дарите",
  "ваш труд и сердце"
];
const wishes = [
  "крепкого здоровья",
  "душевного тепла",
  "благодарных учеников",
  "вдохновения каждый день",
  "уважения и признания",
  "ярких открытий",
  "светлых и тёплых дней",
  "счастья и спокойствия"
];
const INTERVAL = 5600;

function swap(id, text) {
  const box = document.getElementById(id);
  const [s0, s1] = box.children;
  const cur = box.querySelector('.on');
  const next = cur === s0 ? s1 : s0;
  next.textContent = text;
  next.classList.add('on');
  cur.classList.remove('on');
}

let i = 0;
setInterval(() => {
  i = (i + 1) % thanks.length;
  swap('a', thanks[i]);
  swap('b', wishes[i]);
}, INTERVAL);