/*
  Mitti GO blog posts.
  To add a post, copy one object below, give it a new unique `slug` and fill in the fields.
  Newest posts are shown first (sorted by `date`, format YYYY-MM-DD).

  slug    — internal id of the post (also used by the old post.html?p=<slug> links)
  slugs   — public URL per language: /ru/blog/<slugs.ru>/ … (latin letters, digits, dashes)
  seo     — optional { title:{ru,uz,en}, description:{ru,uz,en} }; defaults: "<title> | Mitti GO" and the excerpt
  updated — optional YYYY-MM-DD, used as dateModified (defaults to date)
  imageAlt— optional {ru,uz,en} alt text for the cover (defaults to the title)
  After editing run:  node tools/build.mjs   — it writes the pages, sitemap.xml and the redirects.
  date    — publication date
  icon    — Material Symbols icon name for the cover (https://fonts.google.com/icons)
  color   — cover colour: blue | green | yellow | purple | pink | cyan
  cover   — optional image instead of the icon cover, e.g. "/assets/images/blog/my-post.webp"
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
   mgCards([[icon, color, title, text], …])                                — grid of cards with an icon
   mgAlert(title, [[iconImg, label], …], kidImg?)                         — pink "what it can lead to" panel
   mgTodo(title, [[iconImg, title, text], …])                             — green "what you can do" panel
   mgTips(title, [[iconImg, title, text], …])                             — yellow "tips" panel
   mgTags(label, [tag, …])                                                — "good for:" chips
   mgSay([phrase, …])                                                     — English example phrases as speech bubbles
   mgDevices([{cls, icon, title, img, sticker, items:[[isPro, text]], tip:[icon, text]}, …]) — phone / tablet / TV cards
   mgDistance(title, [[icon, label, value, img], …])                      — "recommended distance" row
   mgRow(cls, title, [[iconImg, title, text], …])                         — titled row of small cards (cls: effects | rules)
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
function mgCards(items){
  return `<div class="icards">${items.map(([ic,c,t,s])=>`<div class="icard" style="--c:${c}"><span class="ms">${ic}</span><div><b>${t}</b><p>${s}</p></div></div>`).join("")}</div>`;
}
function mgAlert(title, items, kid){
  return `<div class="panel-box alert"><div class="pb-h"><span class="pb-ic">!</span><h2>${title}</h2></div><div class="pb-row">${items.map(([img,t])=>`<div class="pb-card"><img src="${img}" alt=""><b>${t}</b></div>`).join("")}</div>${kid?`<img class="pb-kid" src="${kid}" alt="">`:""}</div>`;
}
function mgTodo(title, items){
  return `<div class="panel-box todo"><div class="pb-h"><span class="pb-ic ms">check</span><h2>${title}</h2></div><div class="pb-row">${items.map(([img,t,s])=>`<div class="pb-card"><img src="${img}" alt=""><div><b>${t}</b><p>${s}</p></div></div>`).join("")}</div></div>`;
}
function mgTips(title, items){
  return `<div class="panel-box tips"><div class="pb-h"><span class="pb-ic ms">lightbulb</span><h2>${title}</h2></div><div class="pb-row">${items.map(([img,t,s])=>`<div class="pb-card"><img src="${img}" alt=""><div><b>${t}</b><p>${s}</p></div></div>`).join("")}</div></div>`;
}
function mgTags(label, tags){
  return `<div class="tags"><span class="tags-l">${label}</span>${tags.map(t=>`<span class="tg">${t}</span>`).join("")}</div>`;
}
function mgSay(lines){
  return `<div class="say">${lines.map(l=>`<span lang="en">${l}</span>`).join("")}</div>`;
}
function mgDevices(cards){
  return `<div class="devices">${cards.map(c=>`<div class="dev ${c.cls}"><div class="dev-h"><span class="ms">${c.icon}</span>${c.title}</div><div class="dev-ph"><img src="${c.img}" alt="" loading="lazy"><span class="dev-st">${c.sticker}</span></div><ul>${c.items.map(([ok,t])=>`<li class="${ok?"pro":"con"}">${t}</li>`).join("")}</ul><div class="dev-tip"><span class="ms">${c.tip[0]}</span>${c.tip[1]}</div></div>`).join("")}</div>`;
}
function mgDistance(title, items){
  return `<div class="dist"><b class="dist-t">${title}</b>${items.map(([ic,label,val,img])=>`<div class="dist-i"><span class="ms">${ic}</span><span class="dist-v">${label}<b>${val}</b></span><img src="${img}" alt="" loading="lazy"></div>`).join("")}</div>`;
}
function mgRow(cls, title, items){
  return `<div class="row-box ${cls}"><h2>${title}</h2><div class="rb-row">${items.map(([img,t,s])=>`<div class="rb-card"><div class="rb-h"><img src="${img}" alt=""><b>${t}</b></div><p>${s}</p></div>`).join("")}</div></div>`;
}
function mgCallout(o){
  return `<div class="mg-callout${o.img?" photo":""}"><img src="${o.img||"/assets/images/mascot.png"}" alt=""><div><b>${o.title}</b><p>${o.text}</p><span class="pill"><span class="ms">verified_user</span>${o.pill}</span>${o.link?`<a href="${o.href||"index.html"}">${o.link} →</a>`:""}</div></div>`;
}
const MG_CH = [
  {n:"Super Simple Songs", c:"#E0457B", bg:"var(--ppink)"},
  {n:"Ms Rachel",          c:"#0A8C4B", bg:"var(--pgreen)"},
  {n:"Sesame Street",      c:"var(--blue)", bg:"var(--pblue)"},
  {n:"PBS KIDS",           c:"var(--purple)", bg:"var(--ppurple)"}
];
const mgCh = (texts) => MG_CH.map((c,i)=>({...c, ...texts[i]}));

/* "Phone, tablet or TV?" post: one layout, texts per language */
const DEV_TXT = {
ru: {
 intro: `<p>Если выбирать именно для мультфильмов и детских видео, для глаз обычно лучше <b>большой экран на большем расстоянии</b>. Телевизор при правильной дистанции — более удачный вариант для длительного просмотра, планшет — компромисс, а телефон лучше оставлять для коротких ситуаций.</p>
<p>Но дело не в том, что один экран «безопасный», а другой «портит зрение». Для детских глаз важнее расстояние до экрана, продолжительность непрерывного просмотра, время на улице и перерывы.</p>
<p>Американская ассоциация детской офтальмологии и косоглазия (AAPOS) советует по возможности смотреть фильмы и передачи на телевизоре с дивана, а не на смартфоне или планшете: при близком экране глазам приходится больше работать, чтобы сфокусироваться.</p>`,
 cards: [
  {title:"Телефон", sticker:"Самая большая нагрузка", items:[[0,"Маленький экран — ребёнок держит его очень близко"],[0,"Сильная нагрузка на глаза"],[0,"Чаще вызывает усталость и сухость глаз"]], tip:"Лучше только для короткого просмотра (до 10–15 минут)"},
  {title:"Планшет", sticker:"Хороший компромисс", items:[[1,"Экран больше, чем у телефона"],[1,"Меньшая нагрузка при правильном расстоянии"],[1,"Удобно использовать на подставке"],[0,"Всё равно считается просмотром на близком расстоянии"]], tip:"Подходит для умеренного просмотра с перерывами"},
  {title:"Телевизор", sticker:"Лучший вариант для глаз", items:[[1,"Большой экран и большее расстояние"],[1,"Меньше нагрузка на фокусировку"],[1,"Подходит для семейного просмотра"],[0,"При длительном просмотре всё равно нужны перерывы"]], tip:"Хороший выбор для длинного мультфильма при правильной дистанции (2–3 метра)"}
 ],
 distT: "Рекомендуемое расстояние до экрана", dist: [["Телефон","30–40 см"],["Планшет","40–60 см"],["Телевизор","2–3 метра"]],
 nearH: "Почему близкий экран сильнее нагружает глаза?",
 near: `<p>Когда ребёнок смотрит вдаль, глаза находятся в более расслабленном состоянии. А когда экран совсем близко, глаз постоянно фокусируется на небольшом расстоянии. Это относится не только к телефону — то же происходит при долгом чтении, рисовании и другой работе вблизи.</p>
<p>Исследования связывают большое количество такой работы вблизи (near work) с более высокой вероятностью близорукости у детей. Метаанализ 33 исследований тоже нашёл эту связь, хотя результаты отдельных работ заметно различались.</p>`,
 nearNote: "Проблема телефона не столько в самом телефоне, сколько в типичном способе его использования: маленький экран → ребёнок подносит его ближе → долго смотрит в одну точку.",
 phoneH: "Телефон",
 phone: `<p>Самый удобный вариант для взрослого: дал ребёнку устройство в машине, очереди или кафе — и готово. Но для длительного просмотра это наименее удачный вариант: смартфон обычно держат намного ближе к лицу, а мелкие детали заставляют приближать экран ещё сильнее.</p>
<p>Долгое использование цифровых устройств может вызывать так называемое цифровое зрительное напряжение:</p>`,
 strain: ["усталость глаз","сухость и жжение","головная боль","временное затуманивание зрения","трудно переключать взгляд с близкого на дальнее"],
 phoneTip: "Телефон лучше оставить для короткого видео, видеозвонка или ситуации, когда другого экрана действительно нет. Несколько серий подряд лучше смотреть на экране побольше.",
 tabletH: "Планшет",
 tablet: `<p>Средний вариант. Экран заметно больше, поэтому держать устройство прямо перед глазами не нужно. Но это всё равно просмотр вблизи.</p>
<p>AAPOS советует не приближать экран слишком сильно и по возможности держать его примерно на расстоянии вытянутой руки; рекомендации по профилактике миопии также советуют не подносить книги и экраны ближе 30 см.</p>`,
 tabletTip: "Особенно полезна подставка: в руках ребёнок постепенно подносит планшет к лицу, а на столе расстояние контролировать намного легче. Планшет хорош для обучающих приложений и умеренного просмотра с перерывами.",
 tvH: "Телевизор",
 tv: `<p>Для мультфильма или длинного видео телевизор обычно самый удобный вариант для глаз — экран просто находится значительно дальше, и глазам не приходится долго фокусироваться на 20–30 сантиметрах.</p>
<p>Но и тут есть условие: не нужно смотреть с метра только потому, что экран большой. В исследовании китайских школьников просмотр телевизора с 3 метров и ближе был связан с более высокой вероятностью миопии. Это наблюдательное исследование — оно не доказывает, что причина именно в расстоянии, но подчёркивает важность привычек.</p>`,
 tvNote: "Значит, телевизор можно смотреть сколько угодно? Нет. Большой экран решает только часть проблемы — расстояние. Несколько часов подряд перед телевизором всё равно вытесняют движение, прогулки, игры и сон. ВОЗ рекомендует детям 2–4 лет не больше часа экранного времени в день (меньше — лучше), а для годовалых сидячее экранное время не рекомендует.",
 fxT: "Как экраны могут влиять на ребёнка?",
 fx: [["Усталость и сухость глаз","Во время просмотра ребёнок реже моргает."],["Более высокий риск близорукости","Частая работа на близком расстоянии связана с повышенным риском миопии (по данным научных исследований)."],["Нагрузка на осанку","Долгое сидение в одной позе может вызывать напряжение в шее и спине."],["Проблемы со сном","Яркие экраны вечером могут мешать выработке мелатонина и ухудшать сон."]],
 myoH: "А экраны действительно вызывают близорукость?",
 myo: `<p>Здесь важно не запугивать. Наука пока не позволяет сказать: «посмотрел телефон два часа → испортил зрение». Связь намного сложнее.</p>
<p>Крупный метаанализ 45 исследований (более 335 000 участников) показал: каждый дополнительный час экранного времени в день был связан с большей вероятностью миопии, заметнее всего — примерно между 1 и 4 часами в день. Но авторы подчёркивают, что уверенность в доказательствах низкая: исследования в основном наблюдательные, и прямую причинно-следственную связь они не доказывают.</p>
<p>К тому же ребёнок, который много сидит с телефоном, часто одновременно меньше бывает на улице и больше работает глазами вблизи — разделить вклад каждого фактора сложно. Поэтому современные рекомендации делают упор не на борьбу с конкретным устройством, а на перерывы, расстояние и время на улице.</p>`,
 outH: "Прогулки действительно важны для зрения",
 out: `<p>Это один из самых убедительно подтверждённых факторов. Метаанализ семи рандомизированных исследований (более 9 400 детей) показал, что программы с увеличением времени на улице снижали частоту появления миопии. И другие крупные исследования говорят о том же: дети, которые больше гуляют, в среднем реже становятся близорукими.</p>`,
 outNote: "Иногда лучший способ «защитить глаза от телефона» — не специальный фильтр, а просто закончить мультфильм и пойти гулять.",
 eyesH: "Почему после экрана ребёнок трёт глаза?",
 eyes: `<p>При внимательном просмотре мы реже моргаем, и слёзная плёнка быстрее высыхает. Отсюда цепочка: сухость → жжение → ощущение песка → покраснение → временное затуманивание. Это ещё одна причина не смотреть экран подолгу без остановки.</p>`,
 r20H: "Правило 20–20–20",
 r20: `<p>AAPOS рекомендует: <b>каждые 20 минут — смотреть примерно на 6 метров вдаль — минимум 20 секунд</b>. Так глаза ненадолго перестают фокусироваться вблизи. С малышом не нужен строгий таймер: мультфильм закончился → встали → посмотрели в окно → попили воды → подвигались.</p>`,
 blueH: "А что насчёт синего света?",
 blue: `<p>Здесь много мифов. Не доказано, что синий свет обычных экранов повреждает сетчатку. Американская академия офтальмологии пишет, что нет научных доказательств необходимости специальных очков от света экранов, а Кокрейновский обзор 17 рандомизированных исследований не нашёл убедительной пользы очков, блокирующих синий свет, против цифрового зрительного напряжения.</p>
<p>Гораздо полезнее отодвинуть экран, сделать перерыв и выйти на улицу, чем покупать ребёнку «очки от телефона».</p>`,
 rulesT: "4 простых правила для безопасного просмотра",
 rules: [["Ограничивайте время","Для детей 2–4 лет ВОЗ рекомендует не более 1 часа в день."],["Делайте перерывы","Правило 20–20–20: каждые 20 минут — 20 секунд смотрим на 6 метров вдаль."],["Больше гуляйте","Ежедневное время на улице снижает риск близорукости."],["Следите за светом","Смотрите при хорошем освещении, без бликов и не в полной темноте."]],
 pickH: "Что же выбрать?",
 pick: [["Телевизор","Лучший вариант для длинного мультфильма: большой экран и большое расстояние."],["Планшет","Хороший компромисс — особенно на подставке и на нормальном расстоянии."],["Телефон","Для короткого использования: маленький экран чаще держат ближе всего к глазам."]],
 pickNote: "Но это не значит, что 10 минут телефона опаснее двух часов телевизора. Продолжительность и привычки просмотра важнее названия устройства.",
 mainH: "Главное правило для родителей",
 main: `<p>Не нужно бояться экранов. Следите за четырьмя вещами: <b>расстояние, перерывы, время на улице и продолжительность просмотра</b>. Телефон не «посадит зрение» за один мультфильм, а телевизор не становится полезным только потому, что он большой.</p>`,
 call: {title:"Главное — баланс", text:"Хороший экранный режим — когда ребёнок посмотрел качественный контент, отложил устройство и без проблем вернулся к игре, прогулке и обычной жизни. Именно так мы делаем Mitti GO: технология должна помогать выбирать хороший контент, а не удерживать ребёнка у экрана.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает"},
 src: "Рекомендации ВОЗ для детей до 5 лет (2019)"
},
uz: {
 intro: `<p>Aynan multfilm va bolalar videolari uchun tanlansa, ko‘zlar uchun odatda <b>kattaroq masofadagi katta ekran</b> yaxshiroq. To‘g‘ri masofadagi televizor uzoq tomosha uchun qulayroq variant, planshet — murosa, telefonni esa qisqa vaziyatlarga qoldirgan ma’qul.</p>
<p>Lekin gap bitta ekran «xavfsiz», boshqasi «ko‘zni buzadi» degani emas. Bolaning ko‘zlari uchun ekrangacha masofa, uzluksiz tomosha davomiyligi, ochiq havoda o‘tkazilgan vaqt va tanaffuslar muhimroq.</p>
<p>Amerika bolalar oftalmologiyasi va g‘ilaylik assotsiatsiyasi (AAPOS) imkon qadar film va ko‘rsatuvlarni smartfon yoki planshetda emas, divandan turib televizorda ko‘rishni maslahat beradi: ekran yaqin bo‘lsa, ko‘zlar fokuslash uchun ko‘proq ishlashga majbur.</p>`,
 cards: [
  {title:"Telefon", sticker:"Eng katta yuklama", items:[[0,"Ekran kichik — bola uni juda yaqin tutadi"],[0,"Ko‘zga kuchli yuklama"],[0,"Ko‘zlarning charchashi va qurishiga ko‘proq sabab bo‘ladi"]], tip:"Faqat qisqa tomosha uchun yaxshi (10–15 daqiqagacha)"},
  {title:"Planshet", sticker:"Yaxshi murosa", items:[[1,"Ekran telefonnikidan katta"],[1,"To‘g‘ri masofada yuklama kamroq"],[1,"Tagliq bilan ishlatish qulay"],[0,"Baribir yaqin masofadan tomosha hisoblanadi"]], tip:"Tanaffuslar bilan me’yorida tomosha qilish uchun mos"},
  {title:"Televizor", sticker:"Ko‘zlar uchun eng yaxshisi", items:[[1,"Katta ekran va kattaroq masofa"],[1,"Fokuslashga yuklama kamroq"],[1,"Oila bilan birga ko‘rish uchun mos"],[0,"Uzoq tomoshada baribir tanaffus kerak"]], tip:"To‘g‘ri masofada (2–3 metr) uzun multfilm uchun yaxshi tanlov"}
 ],
 distT: "Ekrangacha tavsiya etilgan masofa", dist: [["Telefon","30–40 sm"],["Planshet","40–60 sm"],["Televizor","2–3 metr"]],
 nearH: "Nega yaqin ekran ko‘zni ko‘proq charchatadi?",
 near: `<p>Bola uzoqqa qaraganda ko‘zlar bo‘shashgan holatda bo‘ladi. Ekran juda yaqin bo‘lsa, ko‘z doimo yaqin masofaga fokuslanadi. Bu faqat telefonga emas — uzoq o‘qish, rasm chizish va yaqindagi boshqa ishlarda ham shunday bo‘ladi.</p>
<p>Tadqiqotlar yaqin masofadagi bunday ishning (near work) ko‘pligini bolalarda yaqinni ko‘rishning (miopiya) yuqoriroq ehtimoli bilan bog‘laydi. 33 ta tadqiqot meta-tahlili ham bu bog‘liqlikni topgan, garchi alohida ishlarning natijalari ancha farq qilsa-da.</p>`,
 nearNote: "Telefonning muammosi telefonning o‘zida emas, uni odatda qanday ishlatishda: kichik ekran → bola uni yaqinroq tutadi → uzoq vaqt bir nuqtaga qaraydi.",
 phoneH: "Telefon",
 phone: `<p>Kattalar uchun eng qulay variant: mashinada, navbatda yoki kafeda bolaga berdingiz — tamom. Lekin uzoq tomosha uchun bu eng omadsiz variant: smartfonni odatda yuzga ancha yaqin tutishadi, mayda detallar esa ekranni yanada yaqinlashtirishga majbur qiladi.</p>
<p>Raqamli qurilmalardan uzoq foydalanish raqamli ko‘z charchog‘ini keltirib chiqarishi mumkin:</p>`,
 strain: ["ko‘z charchashi","qurish va achishish","bosh og‘rig‘i","vaqtincha xira ko‘rish","nigohni yaqindan uzoqqa o‘tkazish qiyinligi"],
 phoneTip: "Telefonni qisqa video, video qo‘ng‘iroq yoki boshqa ekran haqiqatan bo‘lmagan vaziyat uchun qoldiring. Ketma-ket bir nechta qismni kattaroq ekranda ko‘rgan ma’qul.",
 tabletH: "Planshet",
 tablet: `<p>O‘rtacha variant. Ekran ancha katta, shuning uchun qurilmani ko‘z oldida tutish shart emas. Lekin bu baribir yaqindan tomosha.</p>
<p>AAPOS ekranni haddan tashqari yaqinlashtirmaslikni va imkon qadar uni taxminan cho‘zilgan qo‘l masofasida tutishni maslahat beradi; miopiyaning oldini olish bo‘yicha tavsiyalar ham kitob va ekranlarni 30 sm dan yaqin keltirmaslikni maslahat beradi.</p>`,
 tabletTip: "Tagliq ayniqsa foydali: qo‘lda bola planshetni asta-sekin yuziga yaqinlashtiradi, stolda esa masofani nazorat qilish ancha oson. Planshet o‘quv ilovalari va tanaffuslar bilan me’yorida tomosha uchun yaxshi.",
 tvH: "Televizor",
 tv: `<p>Multfilm yoki uzun video uchun televizor odatda ko‘zlar uchun eng qulay variant — ekran shunchaki ancha uzoqda, ko‘zlar 20–30 santimetrda uzoq fokuslanishi shart emas.</p>
<p>Lekin bu yerda ham shart bor: ekran katta deb bir metrdan ko‘rish kerak emas. Xitoylik o‘quvchilar ishtirokidagi tadqiqotda televizorni 3 metr va undan yaqindan ko‘rish miopiyaning yuqoriroq ehtimoli bilan bog‘langan. Bu kuzatuv tadqiqoti — u sabab aynan masofada ekanini isbotlamaydi, lekin odatlar muhimligini ko‘rsatadi.</p>`,
 tvNote: "Demak, televizorni xohlagancha ko‘rish mumkinmi? Yo‘q. Katta ekran muammoning faqat bir qismini — masofani hal qiladi. Televizor oldida ketma-ket bir necha soat baribir harakat, sayr, o‘yin va uyquni siqib chiqaradi. JSST 2–4 yoshli bolalarga kuniga 1 soatdan ko‘p ekran vaqtini tavsiya etmaydi (qancha kam, shuncha yaxshi), bir yoshlilarga esa o‘tirib ekran ko‘rish tavsiya etilmaydi.",
 fxT: "Ekranlar bolaga qanday ta’sir qilishi mumkin?",
 fx: [["Ko‘z charchashi va qurishi","Tomosha paytida bola kamroq ko‘z qisadi."],["Yaqinni ko‘rish xavfi yuqoriroq","Yaqin masofada tez-tez ishlash miopiya xavfining ortishi bilan bog‘liq (ilmiy tadqiqotlarga ko‘ra)."],["Qomatga yuklama","Bir holatda uzoq o‘tirish bo‘yin va belda zo‘riqish keltirib chiqarishi mumkin."],["Uyqu muammolari","Kechqurun yorqin ekranlar melatonin ishlab chiqarilishiga xalaqit berib, uyquni yomonlashtirishi mumkin."]],
 myoH: "Ekranlar haqiqatan yaqinni ko‘rishga sabab bo‘ladimi?",
 myo: `<p>Bu yerda qo‘rqitmaslik muhim. Fan hozircha «telefonni ikki soat ko‘rdi → ko‘zini buzdi» deya olmaydi. Bog‘liqlik ancha murakkab.</p>
<p>45 ta tadqiqotning yirik meta-tahlili (335 000 dan ortiq ishtirokchi) kuniga har bir qo‘shimcha soat ekran vaqti miopiyaning yuqoriroq ehtimoli bilan bog‘liqligini ko‘rsatdi, eng sezilarlisi — kuniga taxminan 1 dan 4 soatgacha. Lekin mualliflar dalillarga ishonch past ekanini ta’kidlaydi: tadqiqotlar asosan kuzatuv xarakterida va to‘g‘ridan-to‘g‘ri sabab-oqibat bog‘liqligini isbotlamaydi.</p>
<p>Bundan tashqari, telefon bilan ko‘p o‘tiradigan bola ko‘pincha bir vaqtning o‘zida ochiq havoda kamroq bo‘ladi va ko‘zlari bilan yaqinda ko‘proq ishlaydi — har bir omilning hissasini ajratish qiyin. Shuning uchun zamonaviy tavsiyalar muayyan qurilmaga qarshi kurashga emas, tanaffuslar, masofa va ochiq havodagi vaqtga urg‘u beradi.</p>`,
 outH: "Sayr ko‘rish uchun haqiqatan muhim",
 out: `<p>Bu eng ishonchli tasdiqlangan omillardan biri. Yettita randomizatsiyalangan tadqiqot meta-tahlili (9 400 dan ortiq bola) ochiq havodagi vaqtni oshiruvchi dasturlar miopiya paydo bo‘lishini kamaytirganini ko‘rsatdi. Boshqa yirik tadqiqotlar ham shuni aytadi: ko‘proq sayr qiladigan bolalar o‘rtacha kamroq yaqinni ko‘radigan bo‘lib qoladi.</p>`,
 outNote: "Ba’zan «ko‘zni telefondan himoya qilish»ning eng yaxshi usuli — maxsus filtr emas, shunchaki multfilmni tugatib, sayrga chiqish.",
 eyesH: "Nega ekrandan keyin bola ko‘zini ishqalaydi?",
 eyes: `<p>Diqqat bilan tomosha qilganda biz kamroq ko‘z qisamiz va ko‘z yosh pardasi tezroq quriydi. Shundan zanjir: qurish → achishish → ko‘zga qum tushgandek his → qizarish → vaqtincha xira ko‘rish. Bu ekranni to‘xtovsiz uzoq ko‘rmaslik uchun yana bir sabab.</p>`,
 r20H: "20–20–20 qoidasi",
 r20: `<p>AAPOS tavsiya qiladi: <b>har 20 daqiqada — taxminan 6 metr uzoqqa — kamida 20 soniya qarang</b>. Shunda ko‘zlar qisqa vaqtga yaqinga fokuslanishdan to‘xtaydi. Kichkintoy bilan qat’iy taymer shart emas: multfilm tugadi → turdik → derazaga qaradik → suv ichdik → biroz harakat qildik.</p>`,
 blueH: "Ko‘k yorug‘lik-chi?",
 blue: `<p>Bu yerda afsonalar ko‘p. Oddiy ekranlarning ko‘k yorug‘ligi to‘r pardaga zarar yetkazishi isbotlanmagan. Amerika oftalmologiya akademiyasi ekran yorug‘ligidan maxsus ko‘zoynak kerakligiga ilmiy dalil yo‘qligini yozadi, 17 ta randomizatsiyalangan tadqiqotning Cochrane sharhi esa ko‘k yorug‘likni to‘suvchi ko‘zoynaklarning raqamli ko‘z charchog‘iga qarshi ishonchli foydasini topmagan.</p>
<p>Bolaga «telefon ko‘zoynagi» sotib olishdan ko‘ra ekranni uzoqlashtirish, tanaffus qilish va ochiq havoga chiqish ancha foydaliroq.</p>`,
 rulesT: "Xavfsiz tomosha uchun 4 ta oddiy qoida",
 rules: [["Vaqtni cheklang","2–4 yoshli bolalarga JSST kuniga 1 soatdan ko‘p emas deb tavsiya qiladi."],["Tanaffus qiling","20–20–20 qoidasi: har 20 daqiqada 20 soniya 6 metr uzoqqa qarang."],["Ko‘proq sayr qiling","Har kuni ochiq havoda bo‘lish yaqinni ko‘rish xavfini kamaytiradi."],["Yorug‘likka e’tibor bering","Yaxshi yorug‘likda, yaltirashsiz va to‘liq qorong‘ida emas tomosha qiling."]],
 pickH: "Xo‘sh, nimani tanlash kerak?",
 pick: [["Televizor","Uzun multfilm uchun eng yaxshi variant: katta ekran va katta masofa."],["Planshet","Yaxshi murosa — ayniqsa tagliqda va normal masofada."],["Telefon","Qisqa foydalanish uchun: kichik ekranni ko‘pincha ko‘zga eng yaqin tutishadi."]],
 pickNote: "Lekin bu 10 daqiqa telefon ikki soat televizordan xavfliroq degani emas. Davomiylik va tomosha odatlari qurilma nomidan muhimroq.",
 mainH: "Ota-onalar uchun asosiy qoida",
 main: `<p>Ekranlardan qo‘rqish shart emas. To‘rt narsaga e’tibor bering: <b>masofa, tanaffuslar, ochiq havodagi vaqt va tomosha davomiyligi</b>. Telefon bitta multfilmda «ko‘zni buzmaydi», televizor esa katta bo‘lgani uchungina foydali bo‘lib qolmaydi.</p>`,
 call: {title:"Eng muhimi — muvozanat", text:"Yaxshi ekran rejimi — bola sifatli kontentni ko‘rib, qurilmani qo‘yib, o‘yin, sayr va oddiy hayotga bemalol qaytganida. Mitti GO’ni aynan shunday qilyapmiz: texnologiya bolani ekran oldida ushlab turish uchun emas, yaxshi kontent tanlashga yordam berishi kerak.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi"},
 src: "JSSTning 5 yoshgacha bolalar uchun tavsiyalari (2019)"
},
en: {
 intro: `<p>For cartoons and kids' videos specifically, the eyes usually do better with <b>a big screen further away</b>. A TV at the right distance is the better choice for longer watching, a tablet is a compromise, and a phone is best kept for short moments.</p>
<p>But it's not that one screen is "safe" and another "ruins eyesight". For children's eyes, what matters more is the distance to the screen, how long they watch without a break, time outdoors and breaks.</p>
<p>The American Association for Pediatric Ophthalmology and Strabismus (AAPOS) advises watching shows and films on a TV from the couch rather than on a phone or tablet when possible: a close screen makes the eyes work harder to focus.</p>`,
 cards: [
  {title:"Phone", sticker:"Heaviest strain", items:[[0,"Small screen — kids hold it very close"],[0,"Heavy strain on the eyes"],[0,"More often causes tired, dry eyes"]], tip:"Best only for short viewing (up to 10–15 minutes)"},
  {title:"Tablet", sticker:"A good compromise", items:[[1,"Bigger screen than a phone"],[1,"Less strain at the right distance"],[1,"Easy to use on a stand"],[0,"Still counts as close-up viewing"]], tip:"Fine for moderate watching with breaks"},
  {title:"TV", sticker:"Best for the eyes", items:[[1,"Big screen and more distance"],[1,"Less focusing strain"],[1,"Great for watching as a family"],[0,"Long viewing still needs breaks"]], tip:"A good pick for a long cartoon at the right distance (2–3 metres)"}
 ],
 distT: "Recommended distance to the screen", dist: [["Phone","30–40 cm"],["Tablet","40–60 cm"],["TV","2–3 metres"]],
 nearH: "Why does a close screen strain the eyes more?",
 near: `<p>When a child looks into the distance, the eyes are more relaxed. When the screen is very close, the eye keeps focusing at a short distance. This isn't only about phones — the same happens with long reading, drawing and other close work.</p>
<p>Research links lots of such near work with a higher chance of myopia (short-sightedness) in children. A meta-analysis of 33 studies found this link too, although results varied a lot between studies.</p>`,
 nearNote: "The problem with a phone isn't so much the phone itself as how it's typically used: small screen → the child brings it closer → stares at one spot for a long time.",
 phoneH: "Phone",
 phone: `<p>The most convenient option for adults: hand it over in the car, a queue or a café — done. But for longer watching it's the least suitable: phones are usually held much closer to the face, and small details make kids bring the screen closer still.</p>
<p>Long use of digital devices can cause what's called digital eye strain:</p>`,
 strain: ["tired eyes","dryness and burning","headaches","temporarily blurred vision","trouble shifting focus from near to far"],
 phoneTip: "Keep the phone for a short video, a video call or when there's really no other screen. Several episodes in a row are better on a bigger screen.",
 tabletH: "Tablet",
 tablet: `<p>The middle option. The screen is much bigger, so there's no need to hold the device right in front of the eyes. But it's still close-up viewing.</p>
<p>AAPOS advises not holding screens too close and, where possible, keeping them about an arm's length away; myopia-prevention guidance also suggests keeping books and screens no closer than about 30 cm.</p>`,
 tabletTip: "A stand helps a lot: in their hands kids gradually bring the tablet to their face, while on a table the distance is much easier to control. Tablets are good for learning apps and moderate watching with breaks.",
 tvH: "TV",
 tv: `<p>For a cartoon or a long video, a TV is usually the easiest on the eyes — the screen is simply much further away, so the eyes don't have to focus at 20–30 centimetres for long.</p>
<p>There's a condition, though: don't sit a metre away just because the screen is big. In a study of Chinese schoolchildren, watching TV from 3 metres or closer was linked to a higher chance of myopia. It's an observational study, so it doesn't prove distance was the cause, but it underlines the importance of habits.</p>`,
 tvNote: "So a TV can be watched as much as you like? No. A big screen only solves part of the problem — distance. Hours in front of the TV still push out movement, walks, play and sleep. The WHO recommends no more than one hour of screen time a day for children aged 2–4 (less is better), and no sedentary screen time for one-year-olds.",
 fxT: "How can screens affect a child?",
 fx: [["Tired, dry eyes","Children blink less while watching."],["Higher myopia risk","Frequent close-up work is linked to a higher risk of myopia (according to research)."],["Strain on posture","Sitting in one position for long can strain the neck and back."],["Sleep problems","Bright screens in the evening can interfere with melatonin and worsen sleep."]],
 myoH: "Do screens really cause short-sightedness?",
 myo: `<p>It's important not to scare parents. Science can't say "watched a phone for two hours → ruined eyesight". The link is far more complex.</p>
<p>A large meta-analysis of 45 studies (over 335,000 participants) found that each extra daily hour of screen time was linked to a higher chance of myopia, most noticeably between about 1 and 4 hours a day. But the authors stress that confidence in the evidence is low: most studies were observational and can't prove direct cause and effect.</p>
<p>Also, a child who spends a lot of time on a phone often spends less time outdoors and more time doing close work at the same time — it's hard to separate the factors. That's why current guidance focuses not on fighting a particular device but on breaks, distance and time outdoors.</p>`,
 outH: "Time outdoors really matters for eyesight",
 out: `<p>This is one of the most convincingly supported factors. A meta-analysis of seven randomised trials (over 9,400 children) showed that programmes adding time outdoors reduced new cases of myopia. Other large studies agree: children who spend more time outside are, on average, less likely to become short-sighted.</p>`,
 outNote: "Sometimes the best way to \"protect the eyes from the phone\" isn't a special filter — it's finishing the cartoon and going outside.",
 eyesH: "Why does a child rub their eyes after a screen?",
 eyes: `<p>When we watch attentively, we blink less and the tear film dries faster. Hence the chain: dryness → burning → a gritty feeling → redness → temporary blur. One more reason not to watch for long stretches without stopping.</p>`,
 r20H: "The 20–20–20 rule",
 r20: `<p>AAPOS recommends: <b>every 20 minutes, look about 6 metres (20 feet) away for at least 20 seconds</b>. That gives the eyes a short break from focusing up close. With a little one there's no need for a strict timer: the cartoon ends → stand up → look out of the window → have some water → move around.</p>`,
 blueH: "What about blue light?",
 blue: `<p>There are lots of myths here. It hasn't been shown that blue light from ordinary screens damages the retina. The American Academy of Ophthalmology says there's no scientific evidence that special glasses are needed for screen light, and a Cochrane review of 17 randomised trials found no convincing benefit of blue-light-blocking glasses for digital eye strain.</p>
<p>Moving the screen back, taking a break and going outside is far more useful than buying your child "phone glasses".</p>`,
 rulesT: "4 simple rules for safer watching",
 rules: [["Limit time","For children aged 2–4 the WHO recommends no more than 1 hour a day."],["Take breaks","The 20–20–20 rule: every 20 minutes, look 6 metres away for 20 seconds."],["Play outside more","Daily time outdoors lowers the risk of myopia."],["Mind the light","Watch in good light, without glare, and not in complete darkness."]],
 pickH: "So what should you choose?",
 pick: [["TV","Best for a long cartoon: big screen, big distance."],["Tablet","A good compromise — especially on a stand at a normal distance."],["Phone","For short use: its small screen is usually held closest to the eyes."]],
 pickNote: "That doesn't mean 10 minutes on a phone is worse than two hours of TV. How long and how kids watch matters more than the name of the device.",
 mainH: "The key rule for parents",
 main: `<p>There's no need to fear screens. Keep an eye on four things: <b>distance, breaks, time outdoors and how long they watch</b>. A phone won't "ruin eyesight" in one cartoon, and a TV doesn't become good for kids just because it's big.</p>`,
 call: {title:"It's all about balance", text:"A healthy screen routine is when a child watches good content, puts the device down and happily goes back to play, walks and everyday life. That's how we build Mitti GO: technology should help parents choose good content, not keep kids in front of the screen.", pill:"Parents choose. Kids watch.", link:"How it works"},
 src: "WHO guidelines for children under 5 (2019)"
}};
function mgDevBody(l){
  const t = DEV_TXT[l], B = "/assets/images/blog/";
  const meta = [["d-phone","smartphone","dev-phone.webp","timer"],["d-tablet","tablet_mac","dev-tablet.webp","hourglass_top"],["d-tv","tv","dev-tv.webp","weekend"]];
  const cards = t.cards.map((c,i)=>({cls:meta[i][0], icon:meta[i][1], img:B+meta[i][2], title:c.title, sticker:c.sticker, items:c.items, tip:[meta[i][3], c.tip]}));
  const distImg = ["dist-phone.png","dist-tablet.png","dist-tv.png"], distIc = ["smartphone","tablet_mac","tv"];
  const fxImg = ["fx-eyes.png","fx-myopia.png","fx-posture.png","fx-sleep.png"], ruleImg = ["rule-time.png","rule-breaks.png","rule-outside.png","rule-light.png"];
  const medal = ["#E8A800","#8A9BB8","#C07A3A"];
  return `${t.intro}
${mgDevices(cards)}
${mgDistance(t.distT, t.dist.map((d,i)=>[distIc[i], d[0], d[1], B+distImg[i]]))}
<h2>${t.nearH}</h2>
${t.near}
<div class="note"><span class="ms">lightbulb</span><p>${t.nearNote}</p></div>
<h2>${t.phoneH}</h2>
${t.phone}
<ul>${t.strain.map(s=>`<li>${s}</li>`).join("")}</ul>
<div class="note"><span class="ms">smartphone</span><p>${t.phoneTip}</p></div>
<h2>${t.tabletH}</h2>
${t.tablet}
<div class="note"><span class="ms">tablet_mac</span><p>${t.tabletTip}</p></div>
<h2>${t.tvH}</h2>
${t.tv}
<div class="note"><span class="ms">help</span><p>${t.tvNote}</p></div>
<p class="source"><a href="https://www.who.int/publications/i/item/9789241550536" target="_blank" rel="noopener">${t.src}</a></p>
${mgRow("effects", t.fxT, t.fx.map((f,i)=>[B+fxImg[i], f[0], f[1]]))}
<h2>${t.myoH}</h2>
${t.myo}
<h2>${t.outH}</h2>
${t.out}
<div class="note"><span class="ms">park</span><p>${t.outNote}</p></div>
<h2>${t.eyesH}</h2>
${t.eyes}
<h2>${t.r20H}</h2>
${t.r20}
<h2>${t.blueH}</h2>
${t.blue}
${mgRow("rules", t.rulesT, t.rules.map((r,i)=>[B+ruleImg[i], r[0], r[1]]))}
<h2>${t.pickH}</h2>
${mgCards(t.pick.map((p,i)=>["emoji_events", medal[i], (i+1)+". "+p[0], p[1]])).replace('class="icards"','class="icards three"')}
<div class="note"><span class="ms">info</span><p>${t.pickNote}</p></div>
<h2>${t.mainH}</h2>
${t.main}
${mgCallout({img:B+"dev-balance.webp", title:t.call.title, text:t.call.text, pill:t.call.pill, link:t.call.link, href:"index.html#how"})}`;
}

window.MG_POSTS = [
{
  slug: "phone-tablet-or-tv",
  slugs: { ru: "telefon-planshet-ili-televizor", uz: "telefon-planshet-yoki-televizor", en: "phone-tablet-or-tv-for-kids" },
  date: "2026-09-24",
  icon: "devices",
  color: "pink",
  cover: "/assets/images/blog/devices-cover.webp",
  tag: { ru: "Полезно родителям", uz: "Ota-onalar uchun foydali", en: "For parents" },
  title: {
    ru: "Телефон, планшет или телевизор: на чём ребёнку лучше смотреть видео?",
    uz: "Telefon, planshet yoki televizor: bola videoni nimada ko‘rgani yaxshi?",
    en: "Phone, tablet or TV: what's best for kids to watch videos on?"
  },
  excerpt: {
    ru: "Как разные экраны влияют на глаза, осанку и сон, какое расстояние считается нормальным и почему прогулки важнее «очков от телефона».",
    uz: "Turli ekranlar ko‘z, qomat va uyquga qanday ta’sir qiladi, qanday masofa normal hisoblanadi va nega sayr «telefon ko‘zoynagi»dan muhimroq.",
    en: "How different screens affect eyes, posture and sleep, what distance is right, and why time outdoors beats \"phone glasses\"."
  },
  body: { ru: mgDevBody("ru"), uz: mgDevBody("uz"), en: mgDevBody("en") }
},
{
  slug: "english-channels",
  slugs: { ru: "youtube-kanaly-dlya-izucheniya-anglijskogo", uz: "ingliz-tilini-organish-uchun-youtube-kanallar", en: "youtube-channels-to-learn-english" },
  date: "2026-09-24",
  icon: "translate",
  color: "blue",
  cover: "/assets/images/blog/english-cover.webp",
  tag: { ru: "Полезно родителям", uz: "Ota-onalar uchun foydali", en: "For parents" },
  title: {
    ru: "Какие YouTube-каналы помогают учить английский детям?",
    uz: "Qaysi YouTube kanallari bolalarga ingliz tilini o‘rganishda yordam beradi?",
    en: "Which YouTube channels help kids learn English?"
  },
  excerpt: {
    ru: "7 каналов, где английский — не просто язык озвучки, а часть обучения. И как сделать так, чтобы просмотр действительно помогал.",
    uz: "Ingliz tili shunchaki ovoz tili emas, balki o‘rganishning bir qismi bo‘lgan 7 ta kanal. Va tomosha haqiqatan foyda berishi uchun nima qilish kerak.",
    en: "7 channels where English isn't just the voice-over language but part of the learning — and how to make watching actually help."
  },
  body: {
    ru: `<p>Английский можно знакомить ребёнку не только через уроки и карточки. Песни, короткие истории, мультфильмы и простые диалоги помогают услышать живую речь и постепенно запоминать слова в контексте.</p>
<p>Но есть важный момент: далеко не любой англоязычный детский канал действительно помогает учить язык. Если ребёнок просто смотрит яркую анимацию и почти не взаимодействует с речью, пользы может быть меньше, чем кажется.</p>
<p>Поэтому мы собрали каналы, где английский — не просто язык озвучки, а часть обучения.</p>
<h2>7 каналов для изучения английского</h2>
${mgQ(1, "#16C869", "Super Simple Songs", "Один из самых понятных вариантов для первого знакомства с английским. Проект создавали преподаватели английского в Японии — они специально делали песни медленнее и проще для маленьких учеников. Сейчас здесь песни про цвета, животных, части тела, счёт, погоду, семью и действия.", mgTags("Подходит для:", ["первых слов","алфавита","цветов и цифр","животных","простых действий"]) + `<p>Полезно не включать песню фоном, а повторять движения и слова вместе: звучит <i lang="en">jump</i> — прыгните, <i lang="en">clap</i> — похлопайте. Так ребёнок связывает слово с действием, а не только с переводом.</p>`)}
${mgQ(2, "var(--blue)", "LearnEnglish Kids от British Council", "Если хочется более системного обучения. Песни, короткие истории, видео и упражнения на лексику, произношение, чтение и грамматику. Ресурс рассчитан в основном на детей 5–12 лет.", mgTags("Подходит для:", ["тех, кто уже знает пару слов","словарного запаса","коротких историй","понимания на слух","первой грамматики"]))}
${mgQ(3, "#E8A800", "Dream English Kids", "Много песен и обучающих видео с повторением слов и выражений: ABC, числа, цвета, животные, еда, погода, транспорт, семья, одежда. На сайте есть карточки и материалы для занятий.", `<p>Ребёнок не просто учит слово <i lang="en">dog</i>, а слышит простые конструкции:</p>` + mgSay(["It’s a dog.","One, two, three…"]) + `<p>Короткие повторяющиеся фразы особенно удобны в начале.</p>`)}
${mgQ(4, "#E0457B", "Maple Leaf Learning", "Материалы именно для обучения английскому как второму или иностранному языку (ESL/EFL): песни, фонетика, карточки, игры и задания. Особенно полезны ролики, где одна конструкция повторяется несколько раз с понятной картинкой.", mgSay(["What color is it?","It’s red."]) + `<p>Ребёнок начинает узнавать всю фразу целиком, а не только слово <i lang="en">red</i>.</p>`)}
${mgQ(5, "var(--purple)", "Fun Kids English", "Для детей, которым нравятся музыка и движение: фонетика, алфавит, простые предложения, глаголы, числа, животные, части тела.", `<p>Используйте видео как маленькую игру: включите песню про части тела, поставьте на паузу и спросите:</p>` + mgSay(["Where is your nose?"]) + `<p>Ребёнок показывает нос — и смотрите дальше. Экран превращается в совместное занятие.</p>`)}
${mgQ(6, "#0A8C4B", "English Singsing", "Не только песни, но и простые диалоги: форматы Nursery Rhymes, Dialogue, Story, Phonics, Rap и Vocabulary. Хорош, когда ребёнок уже знает отдельные слова и пора переходить к предложениям.", mgSay(["What’s your name? — My name is…","How are you? — I’m fine.","What are you doing?"]))}
${mgQ(7, "var(--sky)", "Steve and Maggie", "Английский через мини-истории, игру и живого ведущего — для детей, которые начинают учить язык как иностранный. Это хороший переход от обучающих песен к более живой речи: ребёнок слышит уже не только «Blue. Red. Green.», но и фразы.", mgSay(["Where is it?","Look!","Come here!","What is this?"]))}
<h2>Какой канал выбрать?</h2>
<div class="table-wrap"><table>
<thead><tr><th>Что нужно ребёнку</th><th>Что попробовать</th></tr></thead>
<tbody>
<tr><td>Первые слова и песни</td><td>Super Simple Songs</td></tr>
<tr><td>ABC, цифры и базовые слова</td><td>Dream English Kids</td></tr>
<tr><td>Фонетика и тематические слова</td><td>Fun Kids English</td></tr>
<tr><td>Простые диалоги</td><td>English Singsing</td></tr>
<tr><td>Английский через истории и игру</td><td>Steve and Maggie</td></tr>
<tr><td>Более системные занятия</td><td>British Council LearnEnglish Kids</td></tr>
<tr><td>ESL/EFL-песни и упражнения</td><td>Maple Leaf Learning</td></tr>
</tbody></table></div>
<div class="note"><span class="ms">lightbulb</span><p>Не нужно подписываться сразу на десять каналов. Выберите 2–3 подходящих и какое-то время смотрите именно их.</p></div>
${mgTips("Как сделать просмотр действительно полезным", [
 ["/assets/images/blog/en-tip-together.png","Смотрите вместе","Иногда смотрите видео с ребёнком и обсуждайте, что он увидел."],
 ["/assets/images/blog/en-tip-repeat.png","Повторяйте слова","Просите повторить простые слова и фразы из видео."],
 ["/assets/images/blog/en-tip-use.png","Используйте в жизни","Применяйте новые слова в обычных ситуациях."],
 ["/assets/images/blog/en-tip-level.png","Выбирайте уровень","Начинайте с простых песен и постепенно переходите к диалогам и историям."]
])}
<p>Сам по себе просмотр мультфильмов ещё не гарантирует, что ребёнок заговорит по-английски. Но не превращайте мультфильм в экзамен — достаточно иногда повторять слова и использовать знакомые фразы в жизни. После видео про цвета, животных или еду:</p>
${mgSay(["Give me the red car.","Where is the dog?","Do you like bananas?"])}
<p>Так английский постепенно перестаёт быть просто звуком из телефона.</p>
<h2>А что с обычным YouTube?</h2>
<p>Даже если вы нашли хороший образовательный канал, после видео YouTube может предложить ребёнку совершенно другой контент. Поэтому важно выбирать не только что смотреть, но и куда ребёнок сможет перейти дальше.</p>
${mgCallout({img:"/assets/images/blog/en-girl.webp", title:"Английская подборка в Mitti GO", text:"Добавьте разрешённые каналы заранее — например, Super Simple Songs + British Council + Dream English + English Singsing — и ребёнок будет смотреть только их, а не путешествовать по ленте рекомендаций. Новые каналы можно добавлять по мере взросления.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}
<h2>Главное — не количество видео</h2>
<p>Не нужно превращать каждый свободный час в урок языка. Гораздо полезнее регулярно смотреть понятные видео подходящего уровня, повторять несколько слов и использовать их потом в жизни.</p>
<div class="note"><span class="ms">favorite</span><p>Пять хорошо запомнившихся слов лучше, чем час английского видео, после которого ребёнок ничего не может повторить.</p></div>`,
    uz: `<p>Bolani ingliz tili bilan faqat darslar va kartochkalar orqali tanishtirish shart emas. Qo‘shiqlar, qisqa hikoyalar, multfilmlar va oddiy dialoglar jonli nutqni eshitishga va so‘zlarni kontekstda asta-sekin eslab qolishga yordam beradi.</p>
<p>Lekin muhim jihat bor: har qanday inglizcha bolalar kanali ham tilni o‘rganishga yordam beravermaydi. Agar bola shunchaki yorqin animatsiyani ko‘rib, nutq bilan deyarli ishlamasa, foyda o‘ylagandan kamroq bo‘lishi mumkin.</p>
<p>Shuning uchun biz ingliz tili shunchaki ovoz tili emas, balki o‘rganishning bir qismi bo‘lgan kanallarni to‘pladik.</p>
<h2>Ingliz tilini o‘rganish uchun 7 ta kanal</h2>
${mgQ(1, "#16C869", "Super Simple Songs", "Ingliz tili bilan birinchi tanishuv uchun eng tushunarli variantlardan biri. Loyihani Yaponiyadagi ingliz tili o‘qituvchilari yaratgan — ular qo‘shiqlarni kichkintoylar uchun ataylab sekinroq va soddaroq qilishgan. Ranglar, hayvonlar, tana a’zolari, sanash, ob-havo, oila va harakatlar haqida qo‘shiqlar bor.", mgTags("Mos keladi:", ["birinchi so‘zlar","alifbo","ranglar va raqamlar","hayvonlar","oddiy harakatlar"]) + `<p>Qo‘shiqni shunchaki fon qilib qo‘ymang — harakat va so‘zlarni birga takrorlang: <i lang="en">jump</i> eshitilsa — sakrang, <i lang="en">clap</i> — qarsak chaling. Shunda bola so‘zni tarjima bilan emas, harakat bilan bog‘laydi.</p>`)}
${mgQ(2, "var(--blue)", "British Council’dan LearnEnglish Kids", "Tizimliroq o‘rganish uchun. Qo‘shiqlar, qisqa hikoyalar, videolar hamda so‘z boyligi, talaffuz, o‘qish va grammatika bo‘yicha mashqlar. Asosan 5–12 yoshli bolalar uchun mo‘ljallangan.", mgTags("Mos keladi:", ["bir nechta so‘z biladiganlar","so‘z boyligi","qisqa hikoyalar","eshitib tushunish","ilk grammatika"]))}
${mgQ(3, "#E8A800", "Dream English Kids", "So‘z va iboralar takrorlanadigan ko‘plab qo‘shiq va o‘quv videolari: ABC, raqamlar, ranglar, hayvonlar, ovqat, ob-havo, transport, oila, kiyim. Saytda kartochkalar va mashg‘ulot materiallari bor.", `<p>Bola shunchaki <i lang="en">dog</i> so‘zini emas, oddiy tuzilmalarni eshitadi:</p>` + mgSay(["It’s a dog.","One, two, three…"]) + `<p>Qisqa takrorlanuvchi iboralar boshida ayniqsa qulay.</p>`)}
${mgQ(4, "#E0457B", "Maple Leaf Learning", "Aynan ingliz tilini ikkinchi yoki chet tili sifatida (ESL/EFL) o‘rgatish uchun materiallar: qo‘shiqlar, fonetika, kartochkalar, o‘yinlar va topshiriqlar. Bitta tuzilma tushunarli rasm bilan bir necha marta takrorlanadigan videolar ayniqsa foydali.", mgSay(["What color is it?","It’s red."]) + `<p>Bola faqat <i lang="en">red</i> so‘zini emas, butun iborani taniy boshlaydi.</p>`)}
${mgQ(5, "var(--purple)", "Fun Kids English", "Musiqa va harakatni yaxshi ko‘radigan bolalar uchun: fonetika, alifbo, oddiy gaplar, fe’llar, raqamlar, hayvonlar, tana a’zolari.", `<p>Videoni kichik o‘yinga aylantiring: tana a’zolari haqidagi qo‘shiqni qo‘ying, pauza qiling va so‘rang:</p>` + mgSay(["Where is your nose?"]) + `<p>Bola burnini ko‘rsatadi — va tomoshani davom ettiring. Ekran birgalikdagi mashg‘ulotga aylanadi.</p>`)}
${mgQ(6, "#0A8C4B", "English Singsing", "Nafaqat qo‘shiqlar, balki oddiy dialoglar ham: Nursery Rhymes, Dialogue, Story, Phonics, Rap va Vocabulary formatlari. Bola alohida so‘zlarni bilib, gaplarga o‘tish vaqti kelganda juda mos.", mgSay(["What’s your name? — My name is…","How are you? — I’m fine.","What are you doing?"]))}
${mgQ(7, "var(--sky)", "Steve and Maggie", "Mini-hikoyalar, o‘yin va jonli boshlovchi orqali ingliz tili — tilni chet tili sifatida o‘rganishni boshlagan bolalar uchun. O‘quv qo‘shiqlaridan jonliroq nutqqa yaxshi o‘tish: bola endi faqat «Blue. Red. Green.» emas, iboralarni ham eshitadi.", mgSay(["Where is it?","Look!","Come here!","What is this?"]))}
<h2>Qaysi kanalni tanlash kerak?</h2>
<div class="table-wrap"><table>
<thead><tr><th>Bolaga nima kerak</th><th>Nimani sinab ko‘rish</th></tr></thead>
<tbody>
<tr><td>Birinchi so‘zlar va qo‘shiqlar</td><td>Super Simple Songs</td></tr>
<tr><td>ABC, raqamlar va asosiy so‘zlar</td><td>Dream English Kids</td></tr>
<tr><td>Fonetika va mavzuli so‘zlar</td><td>Fun Kids English</td></tr>
<tr><td>Oddiy dialoglar</td><td>English Singsing</td></tr>
<tr><td>Hikoya va o‘yin orqali ingliz tili</td><td>Steve and Maggie</td></tr>
<tr><td>Tizimliroq mashg‘ulotlar</td><td>British Council LearnEnglish Kids</td></tr>
<tr><td>ESL/EFL qo‘shiqlar va mashqlar</td><td>Maple Leaf Learning</td></tr>
</tbody></table></div>
<div class="note"><span class="ms">lightbulb</span><p>Birdaniga o‘nta kanalga obuna bo‘lish shart emas. 2–3 ta mosini tanlang va bir muddat aynan ularni ko‘ring.</p></div>
${mgTips("Tomoshani qanday qilib haqiqatan foydali qilish mumkin", [
 ["/assets/images/blog/en-tip-together.png","Birga ko‘ring","Ba’zan videoni bola bilan ko‘ring va u ko‘rganini muhokama qiling."],
 ["/assets/images/blog/en-tip-repeat.png","So‘zlarni takrorlang","Videodagi oddiy so‘z va iboralarni takrorlashni so‘rang."],
 ["/assets/images/blog/en-tip-use.png","Hayotda qo‘llang","Yangi so‘zlarni kundalik vaziyatlarda ishlating."],
 ["/assets/images/blog/en-tip-level.png","Darajani tanlang","Oddiy qo‘shiqlardan boshlang va asta-sekin dialog va hikoyalarga o‘ting."]
])}
<p>Multfilm ko‘rishning o‘zi bola ingliz tilida gapirishini kafolatlamaydi. Lekin multfilmni imtihonga aylantirmang — ba’zan so‘zlarni takrorlash va tanish iboralarni hayotda ishlatish kifoya. Ranglar, hayvonlar yoki ovqat haqidagi videodan keyin:</p>
${mgSay(["Give me the red car.","Where is the dog?","Do you like bananas?"])}
<p>Shunday qilib ingliz tili asta-sekin telefondagi oddiy tovush bo‘lmay qoladi.</p>
<h2>Oddiy YouTube-chi?</h2>
<p>Yaxshi ta’limiy kanal topgan bo‘lsangiz ham, videodan keyin YouTube bolaga butunlay boshqa kontentni taklif qilishi mumkin. Shuning uchun nimani ko‘rishni emas, bola keyin qayerga o‘tishi mumkinligini ham tanlash muhim.</p>
${mgCallout({img:"/assets/images/blog/en-girl.webp", title:"Mitti GO’da inglizcha to‘plam", text:"Ruxsat berilgan kanallarni oldindan qo‘shing — masalan, Super Simple Songs + British Council + Dream English + English Singsing — va bola tavsiyalar lentasida sayr qilmay, faqat ularni ko‘radi. Bola ulg‘aygan sari yangi kanallar qo‘shish mumkin.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}
<h2>Eng muhimi — videolar soni emas</h2>
<p>Har bir bo‘sh soatni til darsiga aylantirish shart emas. Mos darajadagi tushunarli videolarni muntazam ko‘rish, bir nechta so‘zni takrorlash va keyin ularni hayotda ishlatish ancha foydaliroq.</p>
<div class="note"><span class="ms">favorite</span><p>Yaxshi eslab qolingan beshta so‘z bola hech narsani takrorlay olmaydigan bir soatlik inglizcha videodan yaxshiroq.</p></div>`,
    en: `<p>Children can meet English not only through lessons and flashcards. Songs, short stories, cartoons and simple dialogues let them hear real speech and gradually pick up words in context.</p>
<p>But here's the catch: not every English-language kids' channel actually helps with learning. If a child just watches bright animation and barely engages with the speech, the benefit may be smaller than it seems.</p>
<p>So we've picked channels where English isn't just the voice-over language but part of the learning.</p>
<h2>7 channels for learning English</h2>
${mgQ(1, "#16C869", "Super Simple Songs", "One of the clearest options for a first encounter with English. It was created by English teachers in Japan who deliberately made songs slower and simpler for young learners. There are songs about colours, animals, body parts, counting, weather, family and actions.", mgTags("Good for:", ["first words","the alphabet","colours and numbers","animals","simple actions"]) + `<p>Don't just play songs in the background — do the moves and say the words together: hear <i>jump</i>, jump; hear <i>clap</i>, clap. Your child links the word to an action, not just a translation.</p>`)}
${mgQ(2, "var(--blue)", "LearnEnglish Kids by British Council", "For more structured learning. Songs, short stories, videos and exercises on vocabulary, pronunciation, reading and grammar. Aimed mainly at children aged 5–12.", mgTags("Good for:", ["kids who know a few words","vocabulary","short stories","listening","first grammar"]))}
${mgQ(3, "#E8A800", "Dream English Kids", "Lots of songs and learning videos that repeat words and phrases: ABC, numbers, colours, animals, food, weather, transport, family, clothes. The website has flashcards and class materials.", `<p>Your child doesn't just learn the word <i>dog</i> — they hear simple patterns:</p>` + mgSay(["It’s a dog.","One, two, three…"]) + `<p>Short, repeated phrases are especially handy at the start.</p>`)}
${mgQ(4, "#E0457B", "Maple Leaf Learning", "Materials made specifically for teaching English as a second or foreign language (ESL/EFL): songs, phonics, flashcards, games and worksheets. Videos that repeat one pattern several times with a clear picture are especially useful.", mgSay(["What color is it?","It’s red."]) + `<p>Your child starts recognising the whole phrase, not just the word <i>red</i>.</p>`)}
${mgQ(5, "var(--purple)", "Fun Kids English", "For kids who love music and movement: phonics, the alphabet, simple sentences, verbs, numbers, animals, body parts.", `<p>Turn a video into a mini game: play the body-parts song, pause it and ask:</p>` + mgSay(["Where is your nose?"]) + `<p>Your child points to their nose — then carry on. The screen becomes something you do together.</p>`)}
${mgQ(6, "#0A8C4B", "English Singsing", "Not just songs but simple dialogues too: Nursery Rhymes, Dialogue, Story, Phonics, Rap and Vocabulary. Great once your child knows single words and is ready for sentences.", mgSay(["What’s your name? — My name is…","How are you? — I’m fine.","What are you doing?"]))}
${mgQ(7, "var(--sky)", "Steve and Maggie", "English through mini stories, play and a live host — for children starting English as a foreign language. A good step from learning songs to more natural speech: not only “Blue. Red. Green.” but real phrases.", mgSay(["Where is it?","Look!","Come here!","What is this?"]))}
<h2>Which channel to choose?</h2>
<div class="table-wrap"><table>
<thead><tr><th>What your child needs</th><th>What to try</th></tr></thead>
<tbody>
<tr><td>First words and songs</td><td>Super Simple Songs</td></tr>
<tr><td>ABC, numbers and basic words</td><td>Dream English Kids</td></tr>
<tr><td>Phonics and topic words</td><td>Fun Kids English</td></tr>
<tr><td>Simple dialogues</td><td>English Singsing</td></tr>
<tr><td>English through stories and play</td><td>Steve and Maggie</td></tr>
<tr><td>More structured learning</td><td>British Council LearnEnglish Kids</td></tr>
<tr><td>ESL/EFL songs and exercises</td><td>Maple Leaf Learning</td></tr>
</tbody></table></div>
<div class="note"><span class="ms">lightbulb</span><p>No need to subscribe to ten channels at once. Pick 2–3 that fit and stick with them for a while.</p></div>
${mgTips("How to make watching actually useful", [
 ["/assets/images/blog/en-tip-together.png","Watch together","Sometimes watch with your child and talk about what they saw."],
 ["/assets/images/blog/en-tip-repeat.png","Repeat words","Ask your child to repeat simple words and phrases from the video."],
 ["/assets/images/blog/en-tip-use.png","Use it in real life","Bring new words into everyday situations."],
 ["/assets/images/blog/en-tip-level.png","Pick the right level","Start with simple songs and move on to dialogues and stories."]
])}
<p>Watching cartoons alone doesn't guarantee your child will start speaking English. But don't turn a cartoon into an exam — just repeat words now and then and use familiar phrases in everyday life. After a video about colours, animals or food:</p>
${mgSay(["Give me the red car.","Where is the dog?","Do you like bananas?"])}
<p>Bit by bit, English stops being just a sound coming out of the phone.</p>
<h2>What about regular YouTube?</h2>
<p>Even if you've found a great learning channel, after a video YouTube may suggest something completely different. So it matters not only what your child watches, but where they can go next.</p>
${mgCallout({img:"/assets/images/blog/en-girl.webp", title:"An English set in Mitti GO", text:"Add the allowed channels in advance — for example Super Simple Songs + British Council + Dream English + English Singsing — and your child watches only those instead of wandering through the recommendation feed. Add new channels as they grow.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}
<h2>It's not about the number of videos</h2>
<p>There's no need to turn every free hour into a language lesson. It's far more useful to regularly watch clear videos at the right level, repeat a few words and then use them in real life.</p>
<div class="note"><span class="ms">favorite</span><p>Five words remembered well beat an hour of English video your child can't repeat a word from.</p></div>`
  }
},
{
  slug: "too-much-screen",
  slugs: { ru: "rebenok-mnogo-smotrit-telefon", uz: "bola-telefonni-kop-koradi", en: "too-much-phone-time-signs" },
  date: "2026-09-24",
  icon: "smartphone",
  color: "pink",
  cover: "/assets/images/blog/too-much-cover.webp",
  tag: { ru: "Полезно родителям", uz: "Ota-onalar uchun foydali", en: "For parents" },
  title: {
    ru: "Как понять, что ребёнок слишком много смотрит телефон?",
    uz: "Bola telefonni juda ko‘p ko‘rayotganini qanday bilish mumkin?",
    en: "How to tell if your child spends too much time on the phone"
  },
  excerpt: {
    ru: "Экранное время само по себе не всегда вредно. Важно замечать изменения в поведении и привычках ребёнка — вот на что смотреть.",
    uz: "Ekran vaqti o‘z-o‘zidan har doim ham zararli emas. Bolaning xulqi va odatlaridagi o‘zgarishlarni payqash muhim — nimaga e’tibor berish kerak.",
    en: "Screen time isn't always harmful in itself. What matters is noticing changes in your child's behaviour and habits — here's what to look for."
  },
  body: {
    ru: `<p>Экранное время само по себе не всегда вредно. Важнее другое — как меняются поведение ребёнка и его привычки.</p>
<h2>8 признаков, что экрана стало слишком много</h2>
${mgCards([
 ["bedtime","var(--purple)","Проблемы со сном","Тяжело засыпает, просит «ещё немного посмотреть», устаёт утром."],
 ["bolt","#E0457B","Раздражительность","Капризничает, когда нужно выключить мультфильм или забрать телефон."],
 ["toys","#0A8C4B","Нет интереса к другим занятиям","Раньше с удовольствием играл, рисовал, гулял — а сейчас всё меньше."],
 ["center_focus_strong","var(--blue)","Сложно сосредоточиться","Быстрее отвлекается и хуже слушает, особенно на длинных задачах."],
 ["sentiment_dissatisfied","#E8A800","Перепады настроения","Плачет, злится или замыкается, когда нет доступа к телефону."],
 ["visibility","var(--sky)","Жалобы на здоровье","Чаще жалуется на глаза или головную боль, близко наклоняется к экрану."],
 ["forum","#E0457B","Меньше общения","Избегает семьи и сверстников, предпочитает экран живым играм."],
 ["restaurant","#0A8C4B","Проблемы с едой","Просит телефон за столом или ест только под мультфильмы."]
])}
<div class="note"><span class="ms">lightbulb</span><p>Один признак — ещё не повод для тревоги. Обратите внимание, если замечаете несколько сразу и они держатся неделями. Если беспокоят зрение, сон или головные боли — посоветуйтесь с педиатром.</p></div>
${mgAlert("К чему это может привести?", [["/assets/images/blog/risk-attention.png","Снижение внимания"],["/assets/images/blog/risk-sleep.png","Проблемы со сном"],["/assets/images/blog/risk-movement.png","Меньше движения"],["/assets/images/blog/risk-emotions.png","Сложнее контролировать эмоции"]], "/assets/images/blog/risk-kid.webp")}
${mgTodo("Что можно сделать?", [
 ["/assets/images/blog/todo-rules.png","Договоритесь о правилах заранее","Объясните, сколько времени в день можно смотреть мультфильмы."],
 ["/assets/images/blog/todo-limits.png","Установите чёткие рамки","Выберите конкретное время для просмотра и придерживайтесь его."],
 ["/assets/images/blog/todo-alternatives.png","Предложите альтернативы","Совместные игры, прогулки, книги, творчество."],
 ["/assets/images/blog/todo-example.png","Будьте примером","Дети легче соблюдают правила, когда видят то же самое у взрослых."]
])}
${mgCallout({img:"/assets/images/blog/too-much-balance.webp", title:"Главное — баланс", text:"Телефон может быть полезным и интересным, если использовать его осознанно. Mitti GO помогает родителям создать спокойную и безопасную среду для просмотра.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}`,
    uz: `<p>Ekran vaqti o‘z-o‘zidan har doim ham zararli emas. Muhimi boshqa — bolaning xulqi va odatlari qanday o‘zgarmoqda.</p>
<h2>Ekran haddan oshganining 8 belgisi</h2>
${mgCards([
 ["bedtime","var(--purple)","Uyqu muammolari","Qiyin uxlaydi, «yana ozgina ko‘ray» deb so‘raydi, ertalab charchagan bo‘ladi."],
 ["bolt","#E0457B","Asabiylik","Multfilmni o‘chirish yoki telefonni olish kerak bo‘lganda injiqlik qiladi."],
 ["toys","#0A8C4B","Boshqa mashg‘ulotlarga qiziqish yo‘q","Avval zavq bilan o‘ynardi, rasm chizardi, sayr qilardi — endi kamroq."],
 ["center_focus_strong","var(--blue)","Diqqatni jamlash qiyin","Tezroq chalg‘iydi va yomonroq tinglaydi, ayniqsa uzoq vazifalarda."],
 ["sentiment_dissatisfied","#E8A800","Kayfiyat keskin o‘zgaradi","Telefon bo‘lmaganda yig‘laydi, jahli chiqadi yoki o‘ziga yopiladi."],
 ["visibility","var(--sky)","Sog‘liqdan shikoyat","Ko‘z yoki bosh og‘rig‘idan tez-tez shikoyat qiladi, ekranga yaqin engashadi."],
 ["forum","#E0457B","Kamroq muloqot","Oila va tengdoshlaridan qochadi, jonli o‘yinlardan ko‘ra ekranni afzal ko‘radi."],
 ["restaurant","#0A8C4B","Ovqatlanishdagi muammolar","Dasturxonda telefon so‘raydi yoki faqat multfilm bilan ovqatlanadi."]
])}
<div class="note"><span class="ms">lightbulb</span><p>Bitta belgi hali xavotirga sabab emas. Bir nechtasini birdaniga payqasangiz va ular haftalab davom etsa, e’tibor bering. Ko‘rish, uyqu yoki bosh og‘rig‘i bezovta qilsa — pediatr bilan maslahatlashing.</p></div>
${mgAlert("Bu nimaga olib kelishi mumkin?", [["/assets/images/blog/risk-attention.png","Diqqat pasayishi"],["/assets/images/blog/risk-sleep.png","Uyqu muammolari"],["/assets/images/blog/risk-movement.png","Kamroq harakat"],["/assets/images/blog/risk-emotions.png","His-tuyg‘ularni boshqarish qiyinlashadi"]], "/assets/images/blog/risk-kid.webp")}
${mgTodo("Nima qilish mumkin?", [
 ["/assets/images/blog/todo-rules.png","Qoidalarni oldindan kelishib oling","Kuniga qancha vaqt multfilm ko‘rish mumkinligini tushuntiring."],
 ["/assets/images/blog/todo-limits.png","Aniq chegaralar qo‘ying","Tomosha uchun aniq vaqtni tanlang va unga amal qiling."],
 ["/assets/images/blog/todo-alternatives.png","Muqobil mashg‘ulot taklif qiling","Birgalikdagi o‘yinlar, sayr, kitoblar, ijod."],
 ["/assets/images/blog/todo-example.png","O‘rnak bo‘ling","Kattalar ham shunday qilishini ko‘rsa, bolalar qoidalarga osonroq amal qiladi."]
])}
${mgCallout({img:"/assets/images/blog/too-much-balance.webp", title:"Eng muhimi — muvozanat", text:"Telefondan ongli foydalanilsa, u foydali va qiziqarli bo‘lishi mumkin. Mitti GO ota-onalarga tomosha uchun sokin va xavfsiz muhit yaratishda yordam beradi.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}`,
    en: `<p>Screen time isn't always harmful in itself. What matters more is how your child's behaviour and habits change.</p>
<h2>8 signs of too much screen time</h2>
${mgCards([
 ["bedtime","var(--purple)","Sleep problems","Struggles to fall asleep, asks to \"watch a bit more\", tired in the morning."],
 ["bolt","#E0457B","Irritability","Gets upset when it's time to turn off a cartoon or hand back the phone."],
 ["toys","#0A8C4B","Losing interest in other things","Used to love playing, drawing and going out — now less and less."],
 ["center_focus_strong","var(--blue)","Trouble focusing","Gets distracted faster and listens less, especially on longer tasks."],
 ["sentiment_dissatisfied","#E8A800","Mood swings","Cries, gets angry or withdraws when the phone isn't available."],
 ["visibility","var(--sky)","Health complaints","Complains about eyes or headaches more often, leans in close to the screen."],
 ["forum","#E0457B","Less social","Avoids family and friends, prefers the screen to real play."],
 ["restaurant","#0A8C4B","Mealtime trouble","Asks for the phone at the table or only eats with cartoons on."]
])}
<div class="note"><span class="ms">lightbulb</span><p>One sign alone is no reason to worry. Pay attention if you see several at once and they last for weeks. If eyesight, sleep or headaches concern you, talk to your paediatrician.</p></div>
${mgAlert("What can it lead to?", [["/assets/images/blog/risk-attention.png","Lower attention"],["/assets/images/blog/risk-sleep.png","Sleep problems"],["/assets/images/blog/risk-movement.png","Less movement"],["/assets/images/blog/risk-emotions.png","Harder to manage emotions"]], "/assets/images/blog/risk-kid.webp")}
${mgTodo("What can you do?", [
 ["/assets/images/blog/todo-rules.png","Agree on rules in advance","Explain how much cartoon time there is each day."],
 ["/assets/images/blog/todo-limits.png","Set clear limits","Pick a specific time for watching and stick to it."],
 ["/assets/images/blog/todo-alternatives.png","Offer alternatives","Playing together, walks, books, crafts."],
 ["/assets/images/blog/todo-example.png","Lead by example","Kids follow rules more easily when they see adults do the same."]
])}
${mgCallout({img:"/assets/images/blog/too-much-balance.webp", title:"It's all about balance", text:"A phone can be useful and fun when used mindfully. Mitti GO helps parents create a calm, safe space for watching.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}`
  }
},
{
  slug: "youtube-channels-3-years",
  slugs: { ru: "youtube-kanaly-dlya-rebenka-3-let", uz: "3-yoshli-bola-uchun-youtube-kanallar", en: "youtube-channels-for-3-year-olds" },
  date: "2026-09-22",
  icon: "smart_display",
  color: "green",
  cover: "/assets/images/blog/channels-3-years.webp",
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
  slugs: { ru: "kak-vybrat-kanal-dlya-rebenka", uz: "bola-uchun-kanal-tanlash", en: "how-to-choose-a-channel-for-kids" },
  date: "2026-09-20",
  icon: "subscriptions",
  color: "blue",
  cover: "/assets/images/blog/five-questions-cover.webp",
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
${mgQ(3, "#E0457B", "Нет ли «кликбейта»?", "Кричащие обложки и заголовки — плохой знак.", mgCompare(["/assets/images/blog/clickbait-bad.webp", "Слишком ярко и странные темы"], ["/assets/images/blog/clickbait-good.webp", "Спокойная и понятная обложка"]))}
${mgQ(4, "#E8A800", "Все ли плейлисты подходят?", "Если на канале есть плейлисты с разным контентом — проверьте их. Лишние можно скрыть или разрешить только нужные плейлисты.", mgPlaylists("Плейлисты канала", [["Мультики", "25 видео", true], ["Песни для детей", "18 видео", true], ["Игры", "12 видео", false]], "Скрыт"))}
${mgQ(5, "var(--purple)", "Интересно ли это ребёнку?", "Самый полезный канал не сработает, если он скучный. Хорошие знаки:", `<ul class="checklist"><li>Смотрит с интересом</li><li>Просит включить ещё</li><li>Спокойно досматривает до конца</li></ul>`)}
<div class="note"><span class="ms">lightbulb</span><p>Начните с 2–3 каналов и понаблюдайте неделю. Добавить новые можно в любой момент в разделе «Профиль».</p></div>
${mgCallout({title:"Создайте безопасное пространство в Mitti GO", text:"Добавляйте только те каналы, которым доверяете. Ребёнок будет смотреть любимые видео без лишних рекомендаций и нежелательного контента.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}`,
    uz: `<p>Kanalga ruxsat berishdan oldin uning bir-ikkita videosini o‘zingiz ko‘ring va o‘zingizga beshta savol bering.</p>
${mgQ(1, "#16C869", "Kanal qaysi yosh uchun?", "Sur’at, so‘zlar va mavzular aynan farzandingizga mos bo‘lishi kerak.", `<ul class="checklist"><li>Oddiy va tushunarli til</li><li>Sokin sur’at</li><li>Yoshga mos mavzular: ranglar, hayvonlar, qo‘shiqlar, kundalik vaziyatlar</li></ul>`)}
${mgQ(2, "var(--blue)", "Videolar qanchalik tez-tez chiqadi?", "Ruxsat berilgan kanalning yangi videolari bolada o‘zi paydo bo‘ladi. Kanaldagi «Videolar» bo‘limiga qarang: qanchalik tez-tez va aynan nima chiqadi.")}
${mgQ(3, "#E0457B", "«Klikbeyt» yo‘qmi?", "Baqiroq muqovalar va sarlavhalar — yomon belgi.", mgCompare(["/assets/images/blog/clickbait-bad.webp", "Juda yorqin va g‘alati mavzular"], ["/assets/images/blog/clickbait-good.webp", "Sokin va tushunarli muqova"]))}
${mgQ(4, "#E8A800", "Barcha pleylistlar mosmi?", "Kanalda turli mazmundagi pleylistlar bo‘lsa — ularni tekshiring. Ortiqchalarini yashirish yoki faqat keraklilariga ruxsat berish mumkin.", mgPlaylists("Kanal pleylistlari", [["Multfilmlar", "25 ta video", true], ["Bolalar qo‘shiqlari", "18 ta video", true], ["O‘yinlar", "12 ta video", false]], "Yashirin"))}
${mgQ(5, "var(--purple)", "Bu bolaga qiziqmi?", "Eng foydali kanal ham zerikarli bo‘lsa, ish bermaydi. Yaxshi belgilar:", `<ul class="checklist"><li>Qiziqish bilan ko‘radi</li><li>Yana qo‘yib berishni so‘raydi</li><li>Oxirigacha xotirjam ko‘radi</li></ul>`)}
<div class="note"><span class="ms">lightbulb</span><p>2–3 ta kanaldan boshlang va bir hafta kuzating. Yangilarini istalgan payt «Profil» bo‘limida qo‘shish mumkin.</p></div>
${mgCallout({title:"Mitti GO’da xavfsiz makon yarating", text:"Faqat o‘zingiz ishonadigan kanallarni qo‘shing. Bola sevimli videolarini ortiqcha tavsiyalar va nomaqbul kontentsiz ko‘radi.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}`,
    en: `<p>Before allowing a channel, watch a couple of its videos yourself and ask five questions.</p>
${mgQ(1, "#16C869", "Which age is it for?", "Pace, vocabulary and topics should suit your child.", `<ul class="checklist"><li>Simple, clear language</li><li>Calm pace</li><li>Age-appropriate topics: colours, animals, songs, everyday situations</li></ul>`)}
${mgQ(2, "var(--blue)", "How often are new videos posted?", "New videos from an allowed channel appear for your child on their own. Check the channel's Videos tab: how often, and what exactly gets posted.")}
${mgQ(3, "#E0457B", "Any clickbait?", "Loud thumbnails and titles are a bad sign.", mgCompare(["/assets/images/blog/clickbait-bad.webp", "Too loud, odd topics"], ["/assets/images/blog/clickbait-good.webp", "Calm, clear thumbnail"]))}
${mgQ(4, "#E8A800", "Do all the playlists fit?", "If a channel mixes different kinds of playlists, check them. Hide the extra ones or allow only the playlists you need.", mgPlaylists("Channel playlists", [["Cartoons", "25 videos", true], ["Songs for kids", "18 videos", true], ["Games", "12 videos", false]], "Hidden"))}
${mgQ(5, "var(--purple)", "Does your child enjoy it?", "Even the most useful channel won't work if it's boring. Good signs:", `<ul class="checklist"><li>Watches with interest</li><li>Asks for more</li><li>Calmly watches to the end</li></ul>`)}
<div class="note"><span class="ms">lightbulb</span><p>Start with 2–3 channels and watch for a week. You can add more any time in Profile.</p></div>
${mgCallout({title:"Build a safe space in Mitti GO", text:"Add only the channels you trust. Your child watches favourite videos without extra recommendations or unwanted content.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}`
  }
},
{
  slug: "screen-time-preschool",
  slugs: { ru: "ekrannoe-vremya-dlya-detej", uz: "bolalar-uchun-ekran-vaqti", en: "screen-time-for-kids" },
  seo: {
    title: {
      ru: "Экранное время для детей 2–5 лет: нормы и советы | Mitti GO",
      uz: "2–5 yoshli bolalar uchun ekran vaqti: me’yorlar va maslahatlar | Mitti GO",
      en: "Screen Time for Kids Aged 2–5: Guidelines and Tips | Mitti GO"
    },
    description: {
      ru: "Сколько экранного времени можно ребёнку? Разбираем рекомендации для детей 2–5 лет и рассказываем, как спокойно закончить просмотр.",
      uz: "Bolaga qancha ekran vaqti mumkin? 2–5 yoshli bolalar uchun tavsiyalarni ko‘rib chiqamiz va tomoshani qanday xotirjam tugatishni aytamiz.",
      en: "How much screen time is right for a child? We go through the guidelines for ages 2–5 and how to end watching calmly."
    }
  },
  date: "2026-09-12",
  icon: "schedule",
  color: "yellow",
  cover: "/assets/images/blog/screen-time-cover.webp",
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
${mgVs({title:"Спокойный просмотр", img:"/assets/images/blog/screen-calm.webp", items:["Заранее выбранные каналы","Спокойный темп","Понятные сюжеты"]}, {title:"Бесконечная лента коротких роликов", img:"/assets/images/blog/screen-scroll.webp", items:["Очень быстрая смена кадров","Сложно контролировать, что покажут","Труднее остановиться — больше слёз"]})}
<h2>Как это работает в Mitti GO</h2>
<p>Экранное время — часть Pro. На бесплатном тарифе ничего не считается и ничего не блокируется.</p>
<ol class="steps">
<li><span><b>Вы задаёте дневной лимит</b> — от 15 минут до 2 часов или своё значение. Лимит обнуляется в полночь.</span></li>
<li><span><b>За 5 минут до конца</b> маскот говорит «Скоро перерыв!» — без обратного отсчёта и не закрывая видео.</span></li>
<li><span><b>Текущее видео можно досмотреть</b> — не больше 15 минут сверху. Потом появляется мягкий экран «Время вышло».</span></li>
</ol>
${mgCallout({img:"/assets/images/blog/screen-balance.webp", title:"Главное — найти баланс", text:"Экранное время — лишь часть дня. Для гармоничного развития ребёнку также важны игры, общение, прогулки и полноценный сон.", pill:"Здоровые привычки сегодня — счастливое детство завтра", link:"Экранное время в Mitti GO", href:"index.html#screentime"})}`,
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
${mgVs({title:"Sokin tomosha", img:"/assets/images/blog/screen-calm.webp", items:["Oldindan tanlangan kanallar","Sokin sur’at","Tushunarli syujetlar"]}, {title:"Qisqa videolarning cheksiz lentasi", img:"/assets/images/blog/screen-scroll.webp", items:["Kadrlar juda tez almashadi","Nima ko‘rsatilishini nazorat qilish qiyin","To‘xtash qiyinroq — ko‘z yoshlari ko‘proq"]})}
<h2>Mitti GO’da bu qanday ishlaydi</h2>
<p>Ekran vaqti — Pro’ning bir qismi. Bepul tarifda hech narsa hisoblanmaydi va hech narsa bloklanmaydi.</p>
<ol class="steps">
<li><span><b>Siz kunlik limitni belgilaysiz</b> — 15 daqiqadan 2 soatgacha yoki o‘z qiymatingiz. Limit yarim tunda yangilanadi.</span></li>
<li><span><b>Tugashiga 5 daqiqa qolganda</b> maskot «Tez orada tanaffus!» deydi — orqaga sanashsiz va videoni yopmasdan.</span></li>
<li><span><b>Joriy videoni oxirigacha ko‘rish mumkin</b> — ustiga 15 daqiqadan ko‘p emas. Keyin yumshoq «Vaqt tugadi» ekrani chiqadi.</span></li>
</ol>
${mgCallout({img:"/assets/images/blog/screen-balance.webp", title:"Eng muhimi — muvozanat", text:"Ekran vaqti — kunning faqat bir qismi. Bolaning uyg‘un rivojlanishi uchun o‘yinlar, muloqot, sayr va to‘liq uyqu ham muhim.", pill:"Bugungi sog‘lom odatlar — ertangi baxtli bolalik", link:"Mitti GO’da ekran vaqti", href:"index.html#screentime"})}`,
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
${mgVs({title:"Calm watching", img:"/assets/images/blog/screen-calm.webp", items:["Channels chosen in advance","Calm pace","Clear stories"]}, {title:"An endless feed of short clips", img:"/assets/images/blog/screen-scroll.webp", items:["Very rapid cuts","Hard to control what shows up","Harder to stop — more tears"]})}
<h2>How it works in Mitti GO</h2>
<p>Screen Time is part of Pro. On the free plan nothing is counted and nothing is blocked.</p>
<ol class="steps">
<li><span><b>You set a daily limit</b> — from 15 minutes to 2 hours, or your own. It resets at midnight.</span></li>
<li><span><b>5 minutes before the end</b> the mascot says "Break soon!" — no countdown, and the video keeps playing.</span></li>
<li><span><b>The current video can finish</b> — up to 15 extra minutes. Then a gentle Time's Up screen appears.</span></li>
</ol>
${mgCallout({img:"/assets/images/blog/screen-balance.webp", title:"It's all about balance", text:"Screen time is just one part of the day. Play, talking, walks and good sleep matter just as much for healthy development.", pill:"Healthy habits today, a happy childhood tomorrow", link:"Screen Time in Mitti GO", href:"index.html#screentime"})}`
  }
},
{
  slug: "why-shorts-off",
  slugs: { ru: "vredny-li-shorts-detyam", uz: "shorts-bolalarga-zararlimi", en: "are-shorts-bad-for-kids" },
  date: "2026-09-05",
  icon: "play_circle",
  color: "purple",
  cover: "/assets/images/blog/shorts-cover.webp",
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
${mgIconList([["psychology","#E0457B","Снижают концентрацию","Ребёнку сложнее долго заниматься одним делом."],["bedtime","#B07A00","Сбивают режим","Легко смотреть дольше, чем планировали."],["bolt","#E8A800","Приучают к быстрым стимулам","Обычные длинные видео начинают казаться скучными."],["sms_failed","var(--purple)","Могут показать лишнее","Даже в Shorts бывают сцены, которые вы не хотели бы видеть."]], "/assets/images/blog/shorts-girl.webp")}
<h2>Как это устроено в Mitti GO</h2>
<ol class="steps">
<li><span><b>Shorts выключены с самого начала.</b> У ребёнка нет даже вкладки Shorts.</span></li>
<li><span><b>Если вы их включите</b> — появятся Shorts только с разрешённых каналов, без общей ленты и случайных видео.</span></li>
<li><span><b>Включить и выключить</b> можно в «Профиль» → Shorts, а ещё отдельно для каждого канала.</span></li>
</ol>
${mgCallout({img:"/assets/images/blog/shorts-family.webp", title:"Такие решения должны принимать родители", text:"В Mitti GO вы решаете, что смотрит ваш ребёнок. Никаких навязанных алгоритмов и бесконечной ленты — только осознанный выбор.", pill:"Родитель выбирает. Ребёнок смотрит.", link:"Как это работает", href:"index.html#how"})}`,
    uz: `<p>Qisqa vertikal videolar «yana bittasini» ko‘rish uchun yaratilgan. Kattalar uchun bu shunchaki yo‘qotilgan yarim soat, bolaga esa to‘xtash yanada qiyin.</p>
<h2>Shorts nima</h2>
<p>Cheksiz lentada bir-birini o‘zi almashtiradigan qisqa vertikal videolar.</p>
${mgFacts([["timer","3 daqiqagacha","juda qisqa videolar"],["all_inclusive","Cheksiz lenta","yangi videolar to‘xtovsiz keladi"],["psychology","Kuchli jalb qilish","diqqatni keragidan uzoqroq ushlaydi"]])}
<h2>Shorts bolaga qanday zarar qilishi mumkin</h2>
${mgIconList([["psychology","#E0457B","Diqqatni pasaytiradi","Bolaga bitta ish bilan uzoq shug‘ullanish qiyinlashadi."],["bedtime","#B07A00","Kun tartibini buzadi","Rejalashtirilganidan uzoqroq ko‘rib qo‘yish oson."],["bolt","#E8A800","Tez taassurotlarga o‘rgatadi","Oddiy uzun videolar zerikarli tuyula boshlaydi."],["sms_failed","var(--purple)","Keraksiz narsani ko‘rsatishi mumkin","Shorts’da ham siz ko‘rishni istamagan sahnalar uchraydi."]], "/assets/images/blog/shorts-girl.webp")}
<h2>Mitti GO’da bu qanday ishlaydi</h2>
<ol class="steps">
<li><span><b>Shorts boshidanoq o‘chiq.</b> Bolada hatto Shorts yorlig‘i ham yo‘q.</span></li>
<li><span><b>Agar ularni yoqsangiz</b> — umumiy lenta va tasodifiy videolarsiz, faqat ruxsat berilgan kanallarning Shorts’lari chiqadi.</span></li>
<li><span><b>Yoqish va o‘chirish</b> «Profil» → Shorts bo‘limida, shuningdek har bir kanal uchun alohida mumkin.</span></li>
</ol>
${mgCallout({img:"/assets/images/blog/shorts-family.webp", title:"Bunday qarorlarni ota-onalar qabul qilishi kerak", text:"Mitti GO’da farzandingiz nimani ko‘rishini siz hal qilasiz. Majburiy algoritmlar va cheksiz lenta yo‘q — faqat ongli tanlov.", pill:"Ota-ona tanlaydi. Bola tomosha qiladi.", link:"Qanday ishlaydi", href:"index.html#how"})}`,
    en: `<p>Short vertical videos are built to make you watch "just one more". For an adult that's a lost half hour; for a child, stopping is even harder.</p>
<h2>What Shorts are</h2>
<p>Short vertical videos that replace each other automatically in an endless feed.</p>
${mgFacts([["timer","Up to 3 minutes","very short clips"],["all_inclusive","Endless feed","new videos keep coming"],["psychology","Highly engaging","hold attention longer than needed"]])}
<h2>How Shorts can harm kids</h2>
${mgIconList([["psychology","#E0457B","Weaker focus","It gets harder to stay with one activity for long."],["bedtime","#B07A00","Broken routines","It's easy to watch longer than planned."],["bolt","#E8A800","Hooked on quick thrills","Regular, longer videos start to feel boring."],["sms_failed","var(--purple)","Unwanted content","Even Shorts can include scenes you'd rather your child didn't see."]], "/assets/images/blog/shorts-girl.webp")}
<h2>How it works in Mitti GO</h2>
<ol class="steps">
<li><span><b>Shorts are off from the start.</b> Your child doesn't even see a Shorts tab.</span></li>
<li><span><b>If you turn them on</b>, only Shorts from allowed channels appear — no shared feed, no random videos.</span></li>
<li><span><b>Switch them on or off</b> in Profile → Shorts, and for each channel separately.</span></li>
</ol>
${mgCallout({img:"/assets/images/blog/shorts-family.webp", title:"Parents should make these decisions", text:"In Mitti GO you decide what your child watches. No pushy algorithms, no endless feed — just a conscious choice.", pill:"Parents choose. Kids watch.", link:"How it works", href:"index.html#how"})}`
  }
}
];
