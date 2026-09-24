/*
  Mitti GO blog posts.
  To add a post, copy one object below, give it a new unique `slug` and fill in the fields.
  Newest posts are shown first (sorted by `date`, format YYYY-MM-DD).

  slug    — address of the post: post.html?p=<slug> (latin letters, digits, dashes)
  date    — publication date
  icon    — Material Symbols icon name for the cover (https://fonts.google.com/icons)
  color   — cover colour: blue | green | yellow | purple | pink | cyan
  cover   — optional image instead of the icon cover, e.g. "assets/images/blog/my-post.webp"
  tag, title, excerpt — short texts, one per language (ru / uz / en)
  body    — post text in HTML: <p>, <h2>, <ul><li>, <b>… one per language
  If a language is missing, the Russian version is shown.
*/
/* Building blocks you can use inside `body`:
   <div class="note"><span class="ms">lightbulb</span><p>…</p></div>   — tip box
   <ul class="checklist">…</ul>                                          — list with check marks
   <ol class="steps">…</ol>                                              — numbered steps
   mgChannels(labels, items)                                             — channel cards (see the 3-year-olds post)
   mgFacts([[icon, title, subtitle], …])                                  — row of short facts
   mgIconList([[icon, color, title, text], …], image?)                    — list with icons, optional picture on the right
   mgQ(number, color, title, text, extraHtml?)                            — numbered question card
   mgCompare([badImg, caption], [goodImg, caption])                       — "bad vs good" pictures
   mgPlaylists(title, [[name, count, shown], …], hiddenLabel)             — mini list of a channel's playlists
   mgAges([[age, rule, subtitle, isAllowed], …])                          — age recommendation cards
   mgVs({title, img, items}, {title, img, items})                         — good vs bad, photo + list each
   mgCallout({title, text, pill, link, href, img?})                      — Mitti GO promo box (img replaces the mascot) */
function mgChannels(l, items){
  return `<div class="channels">${items.map((c,i)=>`<div class="channel" style="--c:${c.c};--bgc:${c.bg}"><div class="ch-h"><span class="ch-n">${i+1}</span><div><b>${c.n}</b><small>${c.s}</small></div></div><p>${c.d}</p><div class="ch-meta"><span><span class="ms">cake</span>${l.age}: <b>${c.a}</b></span><span><span class="ms">translate</span>${l.lang}: <b>${c.l}</b></span></div></div>`).join("")}</div>`;
}
function mgFacts(items){
  return `<div class="facts">${items.map(([ic,t,s])=>`<div><span class="ms">${ic}</span><b>${t}</b><small>${s}</small></div>`).join("")}</div>`;
}
function mgIconList(items, img){
  const list=`<ul class="iconlist">${items.map(([ic,c,t,s])=>`<li style="--c:${c}"><span class="ms">${ic}</span><div><b>${t}</b>${s}</div></li>`).join("")}</ul>`;
  return img?`<div class="split">${list}<img src="${img}" alt="" loading="lazy"></div>`:list;
}
function mgQ(n, color, title, text, extra){
  return `<div class="qcard" style="--c:${color}"><div class="q-h"><span class="q-n">${n}</span><h2>${title}</h2></div><p>${text}</p>${extra||""}</div>`;
}
function mgCompare(bad, good){
  return `<div class="compare"><figure class="bad"><img src="${bad[0]}" alt="" loading="lazy"><figcaption>${bad[1]}</figcaption></figure><figure class="good"><img src="${good[0]}" alt="" loading="lazy"><figcaption>${good[1]}</figcaption></figure></div>`;
}
function mgPlaylists(title, rows, hiddenLabel){
  return `<div class="pl-mock"><b>${title}</b>${rows.map(([name,count,on])=>`<div class="pl-row${on?"":" off"}"><span class="ms">${on?"check_box":"check_box_outline_blank"}</span><span>${name}<small>${count}</small></span>${on?"":`<em><span class="ms">visibility_off</span>${hiddenLabel}</em>`}</div>`).join("")}</div>`;
}
function mgAges(items){
  return `<div class="ages">${items.map(([age,rule,sub,ok])=>`<div class="age ${ok?"ok":"no"}"><span class="ms">${ok?"schedule":"tv_off"}</span><b>${age}</b><span>${rule}</span>${sub?`<small>${sub}</small>`:""}</div>`).join("")}</div>`;
}
function mgVs(good, bad){
  const col=(o,cls,ic)=>`<div class="vs-col ${cls}"><div class="vs-h"><span class="ms">${ic}</span>${o.title}</div><img src="${o.img}" alt="" loading="lazy"><ul>${o.items.map(t=>`<li>${t}</li>`).join("")}</ul></div>`;
  return `<div class="vs">${col(good,"good","check_circle")}${col(bad,"bad","cancel")}</div>`;
}
function mgCallout(o){
  return `<div class="mg-callout${o.img?" photo":""}"><img src="${o.img||"assets/images/mascot.png"}" alt=""><div><b>${o.title}</b><p>${o.text}</p><span class="pill"><span class="ms">verified_user</span>${o.pill}</span>${o.link?`<a href="${o.href||"index.html"}">${o.link} →</a>`:""}</div></div>`;
}
const MG_CH = [
  {n:"Super Simple Songs", c:"#E0457B", bg:"var(--ppink)"},
  {n:"Ms Rachel",          c:"#0A8C4B", bg:"var(--pgreen)"},
  {n:"Sesame Street",      c:"var(--blue)", bg:"var(--pblue)"},
  {n:"PBS KIDS",           c:"var(--purple)", bg:"var(--ppurple)"}
];
const mgCh = (texts) => MG_CH.map((c,i)=>({...c, ...texts[i]}));

window.MG_POSTS = [
{
  slug: "youtube-channels-3-years",
  date: "2026-09-22",
  icon: "smart_display",
  color: "green",
  cover: "assets/images/blog/channels-3-years.webp",
  tag: { ru: "Полезная статья", uz: "Foydali maqola", en: "Guide" },
  title: {
    ru: "Какие YouTube-каналы можно ребёнку 3 лет?",
    uz: "3 yoshli bolaga qaysi YouTube kanallarini ko‘rsatish mumkin?",
    en: "Which YouTube channels are right for a 3-year-old?"
  },
  excerpt: {
    ru: "Четыре проверенных канала для малышей и простой чек-лист: как понять, что канал подходит именно вашему ребёнку.",
    uz: "Kichkintoylar uchun to‘rtta ishonchli kanal va oddiy nazorat ro‘yxati: kanal aynan farzandingizga mosligini qanday bilish mumkin.",
    en: "Four trusted channels for little ones and a simple checklist to tell whether a channel suits your child."
  },
  body: {
    ru: `<p>В 3 года ребёнок активно познаёт мир: повторяет то, что видит, и очень быстро запоминает. Поэтому видео должны быть понятными, добрыми и подходить по возрасту. Надпись «для детей» ещё не значит, что канал подойдёт именно вашему ребёнку.</p>
<div class="note"><span class="ms">lightbulb</span><p>Прежде чем добавить канал, посмотрите 2–3 его видео сами.</p></div>
<h2>4 проверенных канала</h2>
<p>Популярные и качественные каналы для детей около 3 лет. Все они на английском — для малыша это ещё и мягкое знакомство с языком. Если ребёнок пока не понимает английский, начните с тех, где больше музыки и картинок, чем слов.</p>
${mgChannels({age:"Возраст",lang:"Язык"}, mgCh([
  {s:"Песни и обучение", d:"Простые песни про цвета, животных, счёт и части тела.", a:"2–5 лет", l:"английский"},
  {s:"Развитие речи", d:"Спокойный темп: ведущая обращается прямо к ребёнку и предлагает повторять.", a:"1–4 года", l:"английский"},
  {s:"Любимые герои", d:"Добрые истории и песни про буквы, цифры, эмоции и дружбу.", a:"3–5 лет", l:"английский"},
  {s:"Развивающие мультфильмы", d:"Большая библиотека: можно выбрать спокойные сериалы вроде Daniel Tiger’s Neighborhood.", a:"2–8 лет", l:"английский"}
]))}
<h2>Как понять, подходит ли канал</h2>
<ul class="checklist">
<li>Спокойный темп, без быстрой смены кадров</li>
<li>Понятная речь и простой сюжет</li>
<li>Нет пугающих или странных сцен</li>
<li>Контент подходит по возрасту</li>
<li>Вы спокойны, если ребёнок сам откроет следующее видео этого канала</li>
</ul>
<h2>Не нужно десятков каналов</h2>
<p>Для начала хватит нескольких любимых каналов. Ребёнку проще выбирать, а вам — видеть, что именно он смотрит.</p>
<h2>Что происходит после окончания видео</h2>
<p>Даже после хорошего ролика обычный YouTube предлагает другие видео и рекомендации — и ребёнок может случайно уйти совсем не туда.</p>
${mgCallout({title:"Поэтому мы и делаем Mitti GO", text:"Родитель сам выбирает каналы и плейлисты, а ребёнок видит только их: без случайных рекомендаций и без выхода на YouTube.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}
<h2>С чего начать</h2>
<ol class="steps">
<li>Выберите 2–3 канала, которые нравятся вам и ребёнку.</li>
<li>Посмотрите несколько видео сами.</li>
<li>Добавьте каналы в Mitti GO.</li>
<li>Понаблюдайте неделю и обновляйте подборку.</li>
</ol>`,
    uz: `<p>3 yoshda bola dunyoni faol o‘rganadi: ko‘rganini takrorlaydi va juda tez eslab qoladi. Shuning uchun videolar tushunarli, mehribon va yoshiga mos bo‘lishi kerak. «Bolalar uchun» yozuvi kanal aynan sizning farzandingizga mos kelishini anglatmaydi.</p>
<div class="note"><span class="ms">lightbulb</span><p>Kanalni qo‘shishdan oldin uning 2–3 ta videosini o‘zingiz ko‘ring.</p></div>
<h2>4 ta ishonchli kanal</h2>
<p>Taxminan 3 yoshli bolalar uchun mashhur va sifatli kanallar. Ularning barchasi ingliz tilida — bu kichkintoy uchun tilga yumshoq kirish hamdir. Agar bola hali inglizchani tushunmasa, so‘zdan ko‘ra musiqa va rasmlar ko‘proq bo‘lganlaridan boshlang.</p>
${mgChannels({age:"Yoshi",lang:"Tili"}, mgCh([
  {s:"Qo‘shiqlar va o‘rganish", d:"Ranglar, hayvonlar, sanash va tana a’zolari haqida oddiy qo‘shiqlar.", a:"2–5 yosh", l:"ingliz"},
  {s:"Nutqni rivojlantirish", d:"Sokin sur’at: boshlovchi to‘g‘ridan-to‘g‘ri bolaga murojaat qiladi va takrorlashni taklif qiladi.", a:"1–4 yosh", l:"ingliz"},
  {s:"Sevimli qahramonlar", d:"Harflar, raqamlar, his-tuyg‘ular va do‘stlik haqida mehribon hikoyalar va qo‘shiqlar.", a:"3–5 yosh", l:"ingliz"},
  {s:"Rivojlantiruvchi multfilmlar", d:"Katta kutubxona: Daniel Tiger’s Neighborhood kabi sokin seriallarni tanlash mumkin.", a:"2–8 yosh", l:"ingliz"}
]))}
<h2>Kanal mosligini qanday bilish mumkin</h2>
<ul class="checklist">
<li>Sokin sur’at, kadrlar tez almashmaydi</li>
<li>Tushunarli nutq va oddiy syujet</li>
<li>Qo‘rqinchli yoki g‘alati sahnalar yo‘q</li>
<li>Kontent bolaning yoshiga mos</li>
<li>Bola shu kanalning keyingi videosini o‘zi ochsa, siz xotirjamsiz</li>
</ul>
<h2>O‘nlab kanal shart emas</h2>
<p>Boshlash uchun bir nechta sevimli kanal yetarli. Bolaga tanlash osonroq, sizga esa u nimani ko‘rayotganini kuzatish qulayroq.</p>
<h2>Video tugagach nima bo‘ladi</h2>
<p>Yaxshi videodan keyin ham oddiy YouTube boshqa videolar va tavsiyalarni taklif qiladi — bola tasodifan umuman boshqa joyga ketib qolishi mumkin.</p>
${mgCallout({title:"Shuning uchun biz Mitti GO’ni yaratyapmiz", text:"Ota-ona kanal va pleylistlarni o‘zi tanlaydi, bola esa faqat ularni ko‘radi: tasodifiy tavsiyalarsiz va YouTube’ga chiqib ketmasdan.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}
<h2>Nimadan boshlash kerak</h2>
<ol class="steps">
<li>Sizga va bolaga yoqadigan 2–3 ta kanalni tanlang.</li>
<li>Bir nechta videoni o‘zingiz ko‘ring.</li>
<li>Kanallarni Mitti GO’ga qo‘shing.</li>
<li>Bir hafta kuzating va tanlovni yangilab boring.</li>
</ol>`,
    en: `<p>At three, children explore the world at full speed: they copy what they see and remember it fast. So videos should be clear, kind and right for their age. A "for kids" label doesn't mean a channel suits your child.</p>
<div class="note"><span class="ms">lightbulb</span><p>Before adding a channel, watch 2–3 of its videos yourself.</p></div>
<h2>4 trusted channels</h2>
<p>Popular, high-quality channels for children around three. All of them are in English — a gentle first step into the language, too. If your child doesn't understand English yet, start with the ones built on music and pictures rather than words.</p>
${mgChannels({age:"Age",lang:"Language"}, mgCh([
  {s:"Songs and learning", d:"Simple songs about colours, animals, counting and body parts.", a:"2–5", l:"English"},
  {s:"Speech development", d:"Calm pace: the host talks straight to your child and invites them to repeat.", a:"1–4", l:"English"},
  {s:"Beloved characters", d:"Kind stories and songs about letters, numbers, feelings and friendship.", a:"3–5", l:"English"},
  {s:"Learning cartoons", d:"A big library — pick calm series such as Daniel Tiger’s Neighborhood.", a:"2–8", l:"English"}
]))}
<h2>How to tell if a channel fits</h2>
<ul class="checklist">
<li>Calm pace, no rapid cuts</li>
<li>Clear speech and a simple story</li>
<li>No scary or strange scenes</li>
<li>Content matches your child's age</li>
<li>You'd be fine with your child opening the next video on this channel</li>
</ul>
<h2>You don't need dozens of channels</h2>
<p>A few favourites are plenty to start. It's easier for your child to choose — and easier for you to see what they watch.</p>
<h2>What happens when a video ends</h2>
<p>Even after a good video, regular YouTube suggests more videos and recommendations — and a child can easily drift somewhere you didn't intend.</p>
${mgCallout({title:"That's why we're building Mitti GO", text:"Parents choose the channels and playlists, and the child sees only those — no random recommendations and no way out to YouTube.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}
<h2>Where to start</h2>
<ol class="steps">
<li>Pick 2–3 channels that both you and your child like.</li>
<li>Watch a few videos yourself.</li>
<li>Add the channels to Mitti GO.</li>
<li>Watch for a week and keep the list fresh.</li>
</ol>`
  }
},
{
  slug: "first-channels",
  date: "2026-09-20",
  icon: "subscriptions",
  color: "blue",
  cover: "assets/images/blog/five-questions-cover.webp",
  tag: { ru: "Полезная статья", uz: "Foydali maqola", en: "Guide" },
  title: {
    ru: "5 простых вопросов: стоит ли разрешать канал",
    uz: "5 ta oddiy savol: kanalga ruxsat berish kerakmi",
    en: "5 simple questions: should you allow this channel?"
  },
  excerpt: {
    ru: "Бесплатно в Mitti GO можно добавить до 5 каналов целиком — поэтому хочется выбрать их с умом. Вот что проверить перед тем, как разрешить канал.",
    uz: "Mitti GO’da bepul 5 tagacha butun kanal qo‘shish mumkin — shuning uchun ularni oqilona tanlagan ma’qul. Kanalga ruxsat berishdan oldin nimani tekshirish kerak.",
    en: "Mitti GO lets you add up to 5 whole channels for free, so it pays to choose well. Here's what to check before you allow a channel."
  },
  body: {
    ru: `<p>Перед тем как разрешить канал, посмотрите пару его видео сами и задайте себе пять вопросов.</p>
${mgQ(1, "#16C869", "Для какого возраста канал?", "Темп, лексика и темы должны подходить именно вашему ребёнку.", `<ul class="checklist"><li>Простой и понятный язык</li><li>Спокойный темп</li><li>Темы по возрасту: цвета, животные, песни, повседневные ситуации</li></ul>`)}
${mgQ(2, "var(--blue)", "Как часто выходят видео?", "Новые ролики с разрешённого канала появятся у ребёнка сами. Загляните во вкладку «Видео» на канале: как часто и что именно там выходит.")}
${mgQ(3, "#E0457B", "Нет ли «кликбейта»?", "Кричащие обложки и заголовки — плохой знак.", mgCompare(["assets/images/blog/clickbait-bad.webp", "Слишком ярко и странные темы"], ["assets/images/blog/clickbait-good.webp", "Спокойная и понятная обложка"]))}
${mgQ(4, "#E8A800", "Все ли плейлисты подходят?", "Если на канале есть плейлисты с разным контентом — проверьте их. Лишние можно скрыть или разрешить только нужные плейлисты.", mgPlaylists("Плейлисты канала", [["Мультики", "25 видео", true], ["Песни для детей", "18 видео", true], ["Игры", "12 видео", false]], "Скрыт"))}
${mgQ(5, "var(--purple)", "Интересно ли это ребёнку?", "Самый полезный канал не сработает, если он скучный. Хорошие знаки:", `<ul class="checklist"><li>Смотрит с интересом</li><li>Просит включить ещё</li><li>Спокойно досматривает до конца</li></ul>`)}
<div class="note"><span class="ms">lightbulb</span><p>Начните с 2–3 каналов и понаблюдайте неделю. Добавить новые можно в любой момент в разделе «Профиль».</p></div>
${mgCallout({title:"Создайте безопасное пространство в Mitti GO", text:"Добавляйте только те каналы, которым доверяете. Ребёнок будет смотреть любимые видео без лишних рекомендаций и нежелательного контента.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}`,
    uz: `<p>Kanalga ruxsat berishdan oldin uning bir-ikkita videosini o‘zingiz ko‘ring va o‘zingizga beshta savol bering.</p>
${mgQ(1, "#16C869", "Kanal qaysi yosh uchun?", "Sur’at, so‘zlar va mavzular aynan farzandingizga mos bo‘lishi kerak.", `<ul class="checklist"><li>Oddiy va tushunarli til</li><li>Sokin sur’at</li><li>Yoshga mos mavzular: ranglar, hayvonlar, qo‘shiqlar, kundalik vaziyatlar</li></ul>`)}
${mgQ(2, "var(--blue)", "Videolar qanchalik tez-tez chiqadi?", "Ruxsat berilgan kanalning yangi videolari bolada o‘zi paydo bo‘ladi. Kanaldagi «Videolar» bo‘limiga qarang: qanchalik tez-tez va aynan nima chiqadi.")}
${mgQ(3, "#E0457B", "«Klikbeyt» yo‘qmi?", "Baqiroq muqovalar va sarlavhalar — yomon belgi.", mgCompare(["assets/images/blog/clickbait-bad.webp", "Juda yorqin va g‘alati mavzular"], ["assets/images/blog/clickbait-good.webp", "Sokin va tushunarli muqova"]))}
${mgQ(4, "#E8A800", "Barcha pleylistlar mosmi?", "Kanalda turli mazmundagi pleylistlar bo‘lsa — ularni tekshiring. Ortiqchalarini yashirish yoki faqat keraklilariga ruxsat berish mumkin.", mgPlaylists("Kanal pleylistlari", [["Multfilmlar", "25 ta video", true], ["Bolalar qo‘shiqlari", "18 ta video", true], ["O‘yinlar", "12 ta video", false]], "Yashirin"))}
${mgQ(5, "var(--purple)", "Bu bolaga qiziqmi?", "Eng foydali kanal ham zerikarli bo‘lsa, ish bermaydi. Yaxshi belgilar:", `<ul class="checklist"><li>Qiziqish bilan ko‘radi</li><li>Yana qo‘yib berishni so‘raydi</li><li>Oxirigacha xotirjam ko‘radi</li></ul>`)}
<div class="note"><span class="ms">lightbulb</span><p>2–3 ta kanaldan boshlang va bir hafta kuzating. Yangilarini istalgan payt «Profil» bo‘limida qo‘shish mumkin.</p></div>
${mgCallout({title:"Mitti GO’da xavfsiz makon yarating", text:"Faqat o‘zingiz ishonadigan kanallarni qo‘shing. Bola sevimli videolarini ortiqcha tavsiyalar va nomaqbul kontentsiz ko‘radi.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}`,
    en: `<p>Before allowing a channel, watch a couple of its videos yourself and ask five questions.</p>
${mgQ(1, "#16C869", "Which age is it for?", "Pace, vocabulary and topics should suit your child.", `<ul class="checklist"><li>Simple, clear language</li><li>Calm pace</li><li>Age-appropriate topics: colours, animals, songs, everyday situations</li></ul>`)}
${mgQ(2, "var(--blue)", "How often are new videos posted?", "New videos from an allowed channel appear for your child on their own. Check the channel's Videos tab: how often, and what exactly gets posted.")}
${mgQ(3, "#E0457B", "Any clickbait?", "Loud thumbnails and titles are a bad sign.", mgCompare(["assets/images/blog/clickbait-bad.webp", "Too loud, odd topics"], ["assets/images/blog/clickbait-good.webp", "Calm, clear thumbnail"]))}
${mgQ(4, "#E8A800", "Do all the playlists fit?", "If a channel mixes different kinds of playlists, check them. Hide the extra ones or allow only the playlists you need.", mgPlaylists("Channel playlists", [["Cartoons", "25 videos", true], ["Songs for kids", "18 videos", true], ["Games", "12 videos", false]], "Hidden"))}
${mgQ(5, "var(--purple)", "Does your child enjoy it?", "Even the most useful channel won't work if it's boring. Good signs:", `<ul class="checklist"><li>Watches with interest</li><li>Asks for more</li><li>Calmly watches to the end</li></ul>`)}
<div class="note"><span class="ms">lightbulb</span><p>Start with 2–3 channels and watch for a week. You can add more any time in Profile.</p></div>
${mgCallout({title:"Build a safe space in Mitti GO", text:"Add only the channels you trust. Your child watches favourite videos without extra recommendations or unwanted content.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}`
  }
},
{
  slug: "screen-time-preschool",
  date: "2026-09-12",
  icon: "schedule",
  color: "yellow",
  cover: "assets/images/blog/screen-time-cover.webp",
  tag: { ru: "Экранное время", uz: "Ekran vaqti", en: "Screen time" },
  title: {
    ru: "Сколько экранного времени нужно дошкольнику",
    uz: "Maktabgacha yoshdagi bolaga qancha ekran vaqti kerak",
    en: "How much screen time does a preschooler need"
  },
  excerpt: {
    ru: "Что советует ВОЗ, почему не все 30 минут одинаковые и как закончить просмотр без слёз.",
    uz: "JSST nima maslahat beradi, nega hamma 30 daqiqa bir xil emas va tomoshani ko‘z yoshlarisiz qanday tugatish mumkin.",
    en: "What the WHO recommends, why not every 30 minutes is the same, and how to end watching without tears."
  },
  body: {
    ru: `<p>Для детей постарше важна не только точная цифра, но и то, <b>что</b> и <b>как</b> они смотрят. Но начнём с рекомендаций.</p>
<h2>Что советует ВОЗ</h2>
${mgAges([["До 1 года","Экран не рекомендуется","",false],["1 год","Сидячее экранное время не рекомендуется","",false],["2 года","Не больше 1 часа в день","Меньше — лучше",true],["3–4 года","Не больше 1 часа в день","Меньше — лучше",true]])}
<p class="source">Источник: <a href="https://www.who.int/publications/i/item/9789241550536" target="_blank" rel="noopener">рекомендации ВОЗ для детей до 5 лет (2019)</a></p>
<h2>Как закончить просмотр без слёз</h2>
<ol class="steps">
<li><span><b>Договоритесь заранее.</b> Ребёнку легче, когда он знает правило до начала просмотра.</span></li>
<li><span><b>Предупредите за 5 минут.</b> В Mitti GO это делает маскот: «Скоро перерыв!»</span></li>
<li><span><b>Дайте досмотреть текущий ролик.</b> Обрыв на середине мультика — главная причина слёз.</span></li>
<li><span><b>Предложите, что дальше.</b> Прогулка, игра или книжка после экрана.</span></li>
</ol>
<h2>Не все 30 минут одинаковые</h2>
<p>Важно не только сколько, но и что именно смотрит ребёнок.</p>
${mgVs({title:"Спокойный просмотр", img:"assets/images/blog/screen-calm.webp", items:["Заранее выбранные каналы","Спокойный темп","Понятные сюжеты"]}, {title:"Бесконечная лента коротких роликов", img:"assets/images/blog/screen-scroll.webp", items:["Очень быстрая смена кадров","Сложно контролировать, что покажут","Труднее остановиться — больше слёз"]})}
<h2>Как это работает в Mitti GO</h2>
<p>Экранное время — часть Pro. На бесплатном тарифе ничего не считается и ничего не блокируется.</p>
<ol class="steps">
<li><span><b>Вы задаёте дневной лимит</b> — от 15 минут до 2 часов или своё значение. Лимит обнуляется в полночь.</span></li>
<li><span><b>За 5 минут до конца</b> маскот говорит «Скоро перерыв!» — без обратного отсчёта и не закрывая видео.</span></li>
<li><span><b>Текущее видео можно досмотреть</b> — не больше 15 минут сверху. Потом появляется мягкий экран «Время вышло».</span></li>
</ol>
${mgCallout({img:"assets/images/blog/screen-balance.webp", title:"Главное — найти баланс", text:"Экранное время — лишь часть дня. Для гармоничного развития ребёнку также важны игры, общение, прогулки и полноценный сон.", pill:"Здоровые привычки сегодня — счастливое детство завтра", link:"Экранное время в Mitti GO", href:"index.html#screentime"})}`,
    uz: `<p>Kattaroq bolalar uchun aniq raqamdan tashqari ular <b>nimani</b> va <b>qanday</b> ko‘rishi ham muhim. Lekin avval tavsiyalardan boshlaylik.</p>
<h2>JSST nima maslahat beradi</h2>
${mgAges([["1 yoshgacha","Ekran tavsiya etilmaydi","",false],["1 yosh","O‘tirib ekran ko‘rish tavsiya etilmaydi","",false],["2 yosh","Kuniga 1 soatdan ko‘p emas","Qancha kam bo‘lsa, shuncha yaxshi",true],["3–4 yosh","Kuniga 1 soatdan ko‘p emas","Qancha kam bo‘lsa, shuncha yaxshi",true]])}
<p class="source">Manba: <a href="https://www.who.int/publications/i/item/9789241550536" target="_blank" rel="noopener">JSSTning 5 yoshgacha bolalar uchun tavsiyalari (2019)</a></p>
<h2>Tomoshani ko‘z yoshlarisiz qanday tugatish mumkin</h2>
<ol class="steps">
<li><span><b>Oldindan kelishib oling.</b> Bola qoidani tomosha boshlanishidan oldin bilsa, unga osonroq.</span></li>
<li><span><b>5 daqiqa oldin ogohlantiring.</b> Mitti GO’da buni maskot qiladi: «Tez orada tanaffus!»</span></li>
<li><span><b>Joriy videoni oxirigacha ko‘rishga imkon bering.</b> Multfilmning o‘rtasida uzilish — ko‘z yoshlarining asosiy sababi.</span></li>
<li><span><b>Keyin nima qilishni taklif qiling.</b> Sayr, o‘yin yoki kitob.</span></li>
</ol>
<h2>Hamma 30 daqiqa bir xil emas</h2>
<p>Faqat qancha emas, bola aynan nimani ko‘rayotgani ham muhim.</p>
${mgVs({title:"Sokin tomosha", img:"assets/images/blog/screen-calm.webp", items:["Oldindan tanlangan kanallar","Sokin sur’at","Tushunarli syujetlar"]}, {title:"Qisqa videolarning cheksiz lentasi", img:"assets/images/blog/screen-scroll.webp", items:["Kadrlar juda tez almashadi","Nima ko‘rsatilishini nazorat qilish qiyin","To‘xtash qiyinroq — ko‘z yoshlari ko‘proq"]})}
<h2>Mitti GO’da bu qanday ishlaydi</h2>
<p>Ekran vaqti — Pro’ning bir qismi. Bepul tarifda hech narsa hisoblanmaydi va hech narsa bloklanmaydi.</p>
<ol class="steps">
<li><span><b>Siz kunlik limitni belgilaysiz</b> — 15 daqiqadan 2 soatgacha yoki o‘z qiymatingiz. Limit yarim tunda yangilanadi.</span></li>
<li><span><b>Tugashiga 5 daqiqa qolganda</b> maskot «Tez orada tanaffus!» deydi — orqaga sanashsiz va videoni yopmasdan.</span></li>
<li><span><b>Joriy videoni oxirigacha ko‘rish mumkin</b> — ustiga 15 daqiqadan ko‘p emas. Keyin yumshoq «Vaqt tugadi» ekrani chiqadi.</span></li>
</ol>
${mgCallout({img:"assets/images/blog/screen-balance.webp", title:"Eng muhimi — muvozanat", text:"Ekran vaqti — kunning faqat bir qismi. Bolaning uyg‘un rivojlanishi uchun o‘yinlar, muloqot, sayr va to‘liq uyqu ham muhim.", pill:"Bugungi sog‘lom odatlar — ertangi baxtli bolalik", link:"Mitti GO’da ekran vaqti", href:"index.html#screentime"})}`,
    en: `<p>For older kids, the exact number matters less than <b>what</b> and <b>how</b> they watch. But let's start with the guidelines.</p>
<h2>What the WHO recommends</h2>
${mgAges([["Under 1","No screen time","",false],["1 year","No sedentary screen time","",false],["2 years","No more than 1 hour a day","Less is better",true],["3–4 years","No more than 1 hour a day","Less is better",true]])}
<p class="source">Source: <a href="https://www.who.int/publications/i/item/9789241550536" target="_blank" rel="noopener">WHO guidelines for children under 5 (2019)</a></p>
<h2>Ending without tears</h2>
<ol class="steps">
<li><span><b>Agree in advance.</b> It's easier when your child knows the rule before watching starts.</span></li>
<li><span><b>Give a 5-minute heads-up.</b> In Mitti GO the mascot does it: "Break soon!"</span></li>
<li><span><b>Let them finish the current video.</b> Stopping mid-cartoon is the main cause of tears.</span></li>
<li><span><b>Offer what's next.</b> A walk, a game or a book after the screen.</span></li>
</ol>
<h2>Not every 30 minutes is the same</h2>
<p>It's not just how long — it's also what your child watches.</p>
${mgVs({title:"Calm watching", img:"assets/images/blog/screen-calm.webp", items:["Channels chosen in advance","Calm pace","Clear stories"]}, {title:"An endless feed of short clips", img:"assets/images/blog/screen-scroll.webp", items:["Very rapid cuts","Hard to control what shows up","Harder to stop — more tears"]})}
<h2>How it works in Mitti GO</h2>
<p>Screen Time is part of Pro. On the free plan nothing is counted and nothing is blocked.</p>
<ol class="steps">
<li><span><b>You set a daily limit</b> — from 15 minutes to 2 hours, or your own. It resets at midnight.</span></li>
<li><span><b>5 minutes before the end</b> the mascot says "Break soon!" — no countdown, and the video keeps playing.</span></li>
<li><span><b>The current video can finish</b> — up to 15 extra minutes. Then a gentle Time's Up screen appears.</span></li>
</ol>
${mgCallout({img:"assets/images/blog/screen-balance.webp", title:"It's all about balance", text:"Screen time is just one part of the day. Play, talking, walks and good sleep matter just as much for healthy development.", pill:"Healthy habits today, a happy childhood tomorrow", link:"Screen Time in Mitti GO", href:"index.html#screentime"})}`
  }
},
{
  slug: "why-shorts-off",
  date: "2026-09-05",
  icon: "play_circle",
  color: "purple",
  cover: "assets/images/blog/shorts-cover.webp",
  tag: { ru: "Родительский контроль", uz: "Ota-ona nazorati", en: "Parental control" },
  title: {
    ru: "Почему в Mitti GO Shorts выключены по умолчанию",
    uz: "Nega Mitti GO’da Shorts odatda o‘chiq",
    en: "Why Shorts are off by default in Mitti GO"
  },
  excerpt: {
    ru: "Бесконечная лента коротких видео и детское внимание — плохое сочетание. Разбираемся почему и как это устроено в Mitti GO.",
    uz: "Qisqa videolarning cheksiz lentasi va bola diqqati — yomon uyg‘unlik. Nega shundayligini va Mitti GO’da bu qanday ishlashini ko‘rib chiqamiz.",
    en: "An endless feed of short videos and a child's attention don't mix well. Here's why — and how Mitti GO handles it."
  },
  body: {
    ru: `<p>Короткие вертикальные видео сделаны так, чтобы смотреть «ещё одно». Для взрослого это просто потерянные полчаса, а ребёнку остановиться ещё сложнее.</p>
<h2>Что такое Shorts</h2>
<p>Короткие вертикальные ролики, которые сами сменяют друг друга в бесконечной ленте.</p>
${mgFacts([["timer","До 3 минут","очень короткие ролики"],["all_inclusive","Бесконечная лента","новые видео идут без остановки"],["psychology","Сильное вовлечение","держат внимание дольше, чем нужно"]])}
<h2>Чем Shorts могут навредить ребёнку</h2>
${mgIconList([["psychology","#E0457B","Снижают концентрацию","Ребёнку сложнее долго заниматься одним делом."],["bedtime","#B07A00","Сбивают режим","Легко смотреть дольше, чем планировали."],["bolt","#E8A800","Приучают к быстрым стимулам","Обычные длинные видео начинают казаться скучными."],["sms_failed","var(--purple)","Могут показать лишнее","Даже в Shorts бывают сцены, которые вы не хотели бы видеть."]], "assets/images/blog/shorts-girl.webp")}
<h2>Как это устроено в Mitti GO</h2>
<ol class="steps">
<li><span><b>Shorts выключены с самого начала.</b> У ребёнка нет даже вкладки Shorts.</span></li>
<li><span><b>Если вы их включите</b> — появятся Shorts только с разрешённых каналов, без общей ленты и случайных видео.</span></li>
<li><span><b>Включить и выключить</b> можно в «Профиль» → Shorts, а ещё отдельно для каждого канала.</span></li>
</ol>
${mgCallout({img:"assets/images/blog/shorts-family.webp", title:"Такие решения должны принимать родители", text:"В Mitti GO вы решаете, что смотрит ваш ребёнок. Никаких навязанных алгоритмов и бесконечной ленты — только осознанный выбор.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}`,
    uz: `<p>Qisqa vertikal videolar «yana bittasini» ko‘rish uchun yaratilgan. Kattalar uchun bu shunchaki yo‘qotilgan yarim soat, bolaga esa to‘xtash yanada qiyin.</p>
<h2>Shorts nima</h2>
<p>Cheksiz lentada bir-birini o‘zi almashtiradigan qisqa vertikal videolar.</p>
${mgFacts([["timer","3 daqiqagacha","juda qisqa videolar"],["all_inclusive","Cheksiz lenta","yangi videolar to‘xtovsiz keladi"],["psychology","Kuchli jalb qilish","diqqatni keragidan uzoqroq ushlaydi"]])}
<h2>Shorts bolaga qanday zarar qilishi mumkin</h2>
${mgIconList([["psychology","#E0457B","Diqqatni pasaytiradi","Bolaga bitta ish bilan uzoq shug‘ullanish qiyinlashadi."],["bedtime","#B07A00","Kun tartibini buzadi","Rejalashtirilganidan uzoqroq ko‘rib qo‘yish oson."],["bolt","#E8A800","Tez taassurotlarga o‘rgatadi","Oddiy uzun videolar zerikarli tuyula boshlaydi."],["sms_failed","var(--purple)","Keraksiz narsani ko‘rsatishi mumkin","Shorts’da ham siz ko‘rishni istamagan sahnalar uchraydi."]], "assets/images/blog/shorts-girl.webp")}
<h2>Mitti GO’da bu qanday ishlaydi</h2>
<ol class="steps">
<li><span><b>Shorts boshidanoq o‘chiq.</b> Bolada hatto Shorts yorlig‘i ham yo‘q.</span></li>
<li><span><b>Agar ularni yoqsangiz</b> — umumiy lenta va tasodifiy videolarsiz, faqat ruxsat berilgan kanallarning Shorts’lari chiqadi.</span></li>
<li><span><b>Yoqish va o‘chirish</b> «Profil» → Shorts bo‘limida, shuningdek har bir kanal uchun alohida mumkin.</span></li>
</ol>
${mgCallout({img:"assets/images/blog/shorts-family.webp", title:"Bunday qarorlarni ota-onalar qabul qilishi kerak", text:"Mitti GO’da farzandingiz nimani ko‘rishini siz hal qilasiz. Majburiy algoritmlar va cheksiz lenta yo‘q — faqat ongli tanlov.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}`,
    en: `<p>Short vertical videos are built to make you watch "just one more". For an adult that's a lost half hour; for a child, stopping is even harder.</p>
<h2>What Shorts are</h2>
<p>Short vertical videos that replace each other automatically in an endless feed.</p>
${mgFacts([["timer","Up to 3 minutes","very short clips"],["all_inclusive","Endless feed","new videos keep coming"],["psychology","Highly engaging","hold attention longer than needed"]])}
<h2>How Shorts can harm kids</h2>
${mgIconList([["psychology","#E0457B","Weaker focus","It gets harder to stay with one activity for long."],["bedtime","#B07A00","Broken routines","It's easy to watch longer than planned."],["bolt","#E8A800","Hooked on quick thrills","Regular, longer videos start to feel boring."],["sms_failed","var(--purple)","Unwanted content","Even Shorts can include scenes you'd rather your child didn't see."]], "assets/images/blog/shorts-girl.webp")}
<h2>How it works in Mitti GO</h2>
<ol class="steps">
<li><span><b>Shorts are off from the start.</b> Your child doesn't even see a Shorts tab.</span></li>
<li><span><b>If you turn them on</b>, only Shorts from allowed channels appear — no shared feed, no random videos.</span></li>
<li><span><b>Switch them on or off</b> in Profile → Shorts, and for each channel separately.</span></li>
</ol>
${mgCallout({img:"assets/images/blog/shorts-family.webp", title:"Parents should make these decisions", text:"In Mitti GO you decide what your child watches. No pushy algorithms, no endless feed — just a conscious choice.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}`
  }
}
];
