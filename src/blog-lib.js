/* Shared HTML pieces for tools/build.mjs: post cards, footer, dates and URLs.
   Everything here is rendered at build time, so the pages work (and are crawlable) without JavaScript. */
const SITE = "https://mitti-go.uz";
const LANGS = ["uz", "ru", "en"];
const LANG_NAMES = { uz: "O‘zbekcha", ru: "Русский", en: "English" };
const COLORS = { blue: ["var(--blue)", "var(--pblue)"], green: ["#0A8C4B", "var(--pgreen)"], yellow: ["#B07A00", "var(--pyellow)"], purple: ["var(--purple)", "var(--ppurple)"], pink: ["var(--pink)", "var(--ppink)"], cyan: ["var(--sky)", "var(--pcyan)"] };

const L = {
  ru: {
    min: "мин чтения", other: "Другие статьи", promoT: "Попробуйте Mitti GO", promoS: "Безопасное детское видео, которое выбираете вы.", promoB: "Узнать больше", read: "Читать", all: "Все статьи", more: "Читайте также",
    home: "Главная", blog: "Блог", updated: "Обновлено",
    blogTitle: "Блог для родителей — дети, экранное время и безопасность | Mitti GO",
    blogDesc: "Советы для родителей о детском контенте, экранном времени, безопасности в интернете и здоровых цифровых привычках ребёнка.",
    blogH1: "Блог Mitti GO для родителей", blogLede: "Советы для родителей о детском контенте, экранном времени и безопасном просмотре видео.",
    nav: { how: "Как это работает", model: "Разрешения", parents: "Для родителей", privacy: "Приватность", plans: "Тарифы", blog: "Блог", faq: "Вопросы" },
    theme: "Светлая / тёмная тема", menu: "Меню", langLabel: "Язык", crumbs: "Навигация по разделам"
  },
  uz: {
    min: "daqiqa o‘qish", other: "Boshqa maqolalar", promoT: "Mitti GO’ni sinab ko‘ring", promoS: "Siz tanlagan xavfsiz bolalar videolari.", promoB: "Batafsil", read: "O‘qish", all: "Barcha maqolalar", more: "Shuningdek o‘qing",
    home: "Bosh sahifa", blog: "Blog", updated: "Yangilangan",
    blogTitle: "Ota-onalar uchun blog — bolalar, ekran vaqti va xavfsizlik | Mitti GO",
    blogDesc: "Bolalar kontenti, ekran vaqti, internetdagi xavfsizlik va bolaning sog‘lom raqamli odatlari haqida ota-onalar uchun maslahatlar.",
    blogH1: "Ota-onalar uchun Mitti GO blogi", blogLede: "Bolalar kontenti, ekran vaqti va videolarni xavfsiz tomosha qilish haqida ota-onalar uchun maslahatlar.",
    nav: { how: "Qanday ishlaydi", model: "Ruxsatlar", parents: "Ota-onalar uchun", privacy: "Maxfiylik", plans: "Tariflar", blog: "Blog", faq: "Savollar" },
    theme: "Yorug‘ / qorong‘i mavzu", menu: "Menyu", langLabel: "Til", crumbs: "Bo‘limlar bo‘yicha navigatsiya"
  },
  en: {
    min: "min read", other: "More posts", promoT: "Try Mitti GO", promoS: "Safe kids' video, chosen by you.", promoB: "Learn more", read: "Read", all: "All posts", more: "Read next",
    home: "Home", blog: "Blog", updated: "Updated",
    blogTitle: "Blog for Parents — Kids, Screen Time and Online Safety | Mitti GO",
    blogDesc: "Tips for parents on kids' content, screen time, online safety and healthy digital habits for children.",
    blogH1: "The Mitti GO blog for parents", blogLede: "Tips for parents on kids' content, screen time and safer video watching.",
    nav: { how: "How it works", model: "Permissions", parents: "For parents", privacy: "Privacy", plans: "Plans", blog: "Blog", faq: "FAQ" },
    theme: "Light / dark theme", menu: "Menu", langLabel: "Language", crumbs: "Breadcrumbs"
  }
};

const FT = {
  ru: { tag: "Детское видео, которое выбираете вы. Безопасный контент — счастливые дети.", soon: "Скоро", product: "Продукт", parents: "Родителям", blog: "Блог", all: "Все статьи", top: "Наверх", langs: "Язык сайта",
    links: { home: "Главная", how: "Как это работает", model: "Разрешения", player: "Плеер", screentime: "Экранное время", plans: "Тарифы", parents: "Для родителей", privacy: "Безопасность и приватность", devices: "Android TV и устройства", faq: "Вопросы и ответы" },
    note: "Сделано для семей в Узбекистане. YouTube — товарный знак Google LLC." },
  uz: { tag: "Siz tanlagan bolalar videolari. Xavfsiz kontent — baxtli bolalar.", soon: "Tez kunda", product: "Mahsulot", parents: "Ota-onalar uchun", blog: "Blog", all: "Barcha maqolalar", top: "Yuqoriga", langs: "Sayt tili",
    links: { home: "Bosh sahifa", how: "Qanday ishlaydi", model: "Ruxsatlar", player: "Pleyer", screentime: "Ekran vaqti", plans: "Tariflar", parents: "Ota-onalar uchun", privacy: "Xavfsizlik va maxfiylik", devices: "Android TV va qurilmalar", faq: "Savol-javoblar" },
    note: "O‘zbekistondagi oilalar uchun yaratilgan. YouTube — Google LLC’ning savdo belgisi." },
  en: { tag: "Kids' video you choose. Safe content, happy kids.", soon: "Coming soon", product: "Product", parents: "For parents", blog: "Blog", all: "All posts", top: "Back to top", langs: "Site language",
    links: { home: "Home", how: "How it works", model: "Permissions", player: "Player", screentime: "Screen Time", plans: "Plans", parents: "For parents", privacy: "Safety & privacy", devices: "Android TV & devices", faq: "FAQ" },
    note: "Made for families in Uzbekistan. YouTube is a trademark of Google LLC." }
};

const pick = (o, l) => (o ? (o[l] ?? o.ru ?? "") : "");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const UZ_MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const RU_MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function fmtDate(d, l) {
  const [y, m, day] = d.split("-").map(Number);
  if (l === "uz") return `${day}-${UZ_MONTHS[m - 1]}, ${y}`;
  if (l === "en") return `${day} ${EN_MONTHS[m - 1]} ${y}`;
  return `${day} ${RU_MONTHS[m - 1]} ${y} г.`;
}
function readMin(html) { const w = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length; return Math.max(1, Math.round(w / 170)); }

const homePath = l => `/${l}/`;
const blogPath = l => `/${l}/blog/`;
const postPath = (p, l) => `/${l}/blog/${p.slugs[l]}/`;
const abs = path => SITE + path;

function cover(p, l, big) {
  const [c, bg] = COLORS[p.color] || COLORS.blue;
  const img = p.cover
    ? `<img src="${esc(p.cover)}" alt="${esc(pick(p.imageAlt, l) || pick(p.title, l))}" width="1400" height="600"${big ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`
    : `<span class="ms">${esc(p.icon || "article")}</span>`;
  return `<div class="post-cover${big ? " big" : ""}" style="--c:${c};--bgc:${bg}">${img}</div>`;
}
/* hx: heading level of the card title — h2 on the blog page (under the H1), h3 inside an H2 section */
function card(p, l, hx = "h3") {
  const [c, bg] = COLORS[p.color] || COLORS.blue;
  return `<a class="post-card" href="${postPath(p, l)}" style="--c:${c};--bgc:${bg}">${cover(p, l)}
<div class="post-body"><div class="post-meta"><span class="post-tag">${esc(pick(p.tag, l))}</span><time datetime="${p.date}">${fmtDate(p.date, l)}</time></div>
<${hx}>${esc(pick(p.title, l))}</${hx}><p>${esc(pick(p.excerpt, l))}</p><span class="post-more">${L[l].read}<span class="ms">arrow_forward</span></span></div></a>`;
}
function asidePost(o, l) {
  const [oc, obg] = COLORS[o.color] || COLORS.blue;
  return `<a class="aside-post" href="${postPath(o, l)}" style="--c:${oc};--bgc:${obg}"><span class="aside-ic">${o.cover ? `<img src="${esc(o.cover)}" alt="" width="52" height="52" loading="lazy" decoding="async">` : `<span class="ms">${esc(o.icon || "article")}</span>`}</span><span><b>${esc(pick(o.title, l))}</b><time datetime="${o.date}">${fmtDate(o.date, l)}</time></span></a>`;
}

/* alternates: { uz: "/uz/…", ru: "/ru/…", en: "/en/…" } — the same page in each language */
function footerHTML(l, posts, alternates) {
  const t = FT[l], home = homePath(l);
  const link = k => `<li><a href="${home}#${k}">${t.links[k]}</a></li>`;
  const store = (logo, name) => `<span class="soon store-badge"><img class="store-logo" src="/assets/images/${logo}" alt="" width="32" height="32" decoding="async"><span class="store-copy"><span>${t.soon}</span><b>${name}</b></span></span>`;
  const langs = LANGS.map(x => `<a href="${alternates[x]}" hreflang="${x}" lang="${x}"${x === l ? ' aria-current="page"' : ""}>${LANG_NAMES[x]}</a>`).join("");
  return `<div class="wrap">
<div class="ft-top">
 <div class="ft-brand"><a href="${home}" aria-label="Mitti GO"><img class="logo l" src="/assets/images/logo-main.png" alt="Mitti GO" width="449" height="150" loading="lazy"><img class="logo d" src="/assets/images/logo-white.png" alt="Mitti GO" width="439" height="150" loading="lazy"></a>
  <p>${t.tag}</p><div class="stores">${store("google-play.svg", "Google Play")}${store("app-store.svg", "App Store")}</div></div>
 <nav class="ft-col" aria-label="${t.product}"><h2>${t.product}</h2><ul><li><a href="${home}">${t.links.home}</a></li>${["how", "model", "player", "screentime", "plans"].map(link).join("")}</ul></nav>
 <nav class="ft-col" aria-label="${t.parents}"><h2>${t.parents}</h2><ul>${["parents", "privacy", "devices", "faq"].map(link).join("")}</ul></nav>
 <nav class="ft-col ft-blog" aria-label="${t.blog}"><h2>${t.blog}</h2><ul>${posts.slice(0, 3).map(p => `<li><a href="${postPath(p, l)}">${esc(pick(p.title, l))}</a></li>`).join("")}<li><a class="ft-all" href="${blogPath(l)}">${t.all} →</a></li></ul></nav>
</div>
<div class="ft-bottom"><span>© ${new Date().getFullYear()} Mitti GO</span><span>${t.note}</span><nav class="ft-langs" aria-label="${t.langs}">${langs}</nav><a href="#top" class="ft-up">${t.top}<span class="ms">arrow_upward</span></a></div>
</div>`;
}

module.exports = { SITE, LANGS, LANG_NAMES, COLORS, L, FT, pick, esc, fmtDate, readMin, homePath, blogPath, postPath, abs, cover, card, asidePost, footerHTML };
