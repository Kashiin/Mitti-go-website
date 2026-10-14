/* Content of the stand-alone pages: /{lang}/pricing/, /{lang}/faq/ and /{lang}/how-it-works/ (UZ / RU / EN).
   Rendered by tools/build.mjs. Answers may contain simple HTML (<b>, <a>).
   Links: use {{PRICING}}, {{FAQ}}, {{BLOG}}, {{HOME}} — the build replaces them with the page in the same language. */
module.exports = {

/* ---------------------------------------------------------------- pricing */
pricing: {
ru: {
  title: "Тарифы Mitti GO: что бесплатно и что даёт Pro",
  desc: "Тарифы Mitti GO: бесплатно — до 5 каналов, 10 плейлистов и вся защита ребёнка. Pro добавляет экранное время: дневной лимит, режим сна и мягкий экран «Время вышло».",
  crumb: "Тарифы", eyebrow: "Тарифы", h1: "Тарифы Mitti GO",
  lede: "Защита и безопасность никогда не бывают платными. Бесплатного тарифа хватает для спокойного просмотра, а Pro добавляет экранное время.",
  free: "Бесплатно", ch: "Каналы", pl: "Плейлисты", price: "Цены — к запуску",
  freeList: ["5 каналов целиком", "10 отдельных плейлистов", "Плейлисты добавленных каналов, скрытие и Избранное — без лимита", "PIN, биометрия и вся защита"],
  proList: ["Экранное время: дневной лимит", "Досмотреть текущее видео — до 15 минут сверху", "Режим сна: отдельно для будней и выходных", "Мягкий экран «Время вышло» со спящим маскотом"],
  proNote: "Ребёнок никогда не видит слов «Pro» и «лимит». Лимиты и цены Pro объявим отдельно.",
  cmpH: "Сравнение тарифов", cmpFeature: "Возможность",
  more: "Больше",
  cmp: [
    ["Каналы целиком", "5", "more"],
    ["Отдельные плейлисты", "10", "more"],
    ["Плейлисты добавленных каналов, скрытие, Избранное", "∞", "∞"],
    ["Только разрешённый контент, без ленты рекомендаций", 1, 1],
    ["Все выходы из плеера на YouTube закрыты", 1, 1],
    ["Shorts выключены, включает только родитель", 1, 1],
    ["PIN, биометрия и защита от подбора", 1, 1],
    ["Android TV, три языка, светлая и тёмная тема", 1, 1],
    ["Дневной лимит экранного времени", 0, 1],
    ["Досмотреть видео — до 15 минут сверху", 0, 1],
    ["Режим сна: будни и выходные отдельно", 0, 1],
    ["Экран «Время вышло» и +время от родителя", 0, 1]
  ],
  limH: "Как работают лимиты",
  lims: [
    ["block", "#B07A00", "var(--pyellow)", "Упёрлись в лимит", "Добавлять новое нельзя, но управлять можно всем: скрывать, отмечать звёздочкой, удалять. Или выберите отдельные плейлисты вместо целого канала."],
    ["pause_circle", "var(--purple)", "var(--ppurple)", "Если Pro закончится", "Ничего не удаляется. У вас будет 7 дней, чтобы выбрать, какие 5 каналов и 10 плейлистов оставить. Остальное встанет на паузу и вернётся при продлении."],
    ["visibility_off", "var(--blue)", "var(--pblue)", "Скрытые плейлисты не считаются", "Скрыли плейлист в добавленном канале — он пропадает у ребёнка и не входит в лимит."],
    ["star", "#0A8C4B", "var(--pgreen)", "Звёздочка бесплатна", "Избранное ставит канал первым у ребёнка. Доступ оно не открывает и в лимит не входит."]
  ],
  faqH: "Вопросы о тарифах",
  faq: [
    ["Нужно ли платить, чтобы пользоваться Mitti GO?", "Нет. На бесплатном тарифе доступны до 5 каналов, 10 плейлистов и вся защита ребёнка. Pro нужен только тем, кто хочет управлять экранным временем."],
    ["Сколько будет стоить Pro?", "Цены и лимиты Pro мы объявим к запуску приложения в Google Play и App Store."],
    ["Есть ли экранное время на бесплатном тарифе?", "Нет, экранное время — часть Pro. На бесплатном тарифе ничего не считается и ничего не блокируется."],
    ["Что будет с каналами, если Pro закончится?", "Ничего не удалится. У вас будет 7 дней, чтобы выбрать, какие 5 каналов и 10 плейлистов оставить. Остальное встанет на паузу и вернётся при продлении."],
    ["Ребёнок узнает, что у нас бесплатный тариф или лимит?", "Нет. Ребёнок никогда не видит слов «Pro» и «лимит». Когда время вышло, он видит мягкий экран со спящим маскотом."]
  ],
  endT: "Остались вопросы?", endS: "Мы собрали ответы на всё, что обычно спрашивают родители: каналы, Shorts, PIN, приватность и устройства.", endB: "Все вопросы и ответы"
},
uz: {
  title: "Tariflar: Mitti GO’da nima bepul va Pro nima beradi",
  desc: "Mitti GO tariflari: bepul — 5 tagacha kanal, 10 ta pleylist va bolani to‘liq himoya qilish. Pro ekran vaqtini qo‘shadi: kunlik limit, uyqu rejimi va yumshoq «Vaqt tugadi» ekrani.",
  crumb: "Tariflar", eyebrow: "Tariflar", h1: "Mitti GO tariflari",
  lede: "Himoya va xavfsizlik hech qachon pullik bo‘lmaydi. Xotirjam tomosha uchun bepul tarif yetarli, Pro esa ekran vaqtini qo‘shadi.",
  free: "Bepul", ch: "Kanallar", pl: "Pleylistlar", price: "Narxlar — ishga tushirishda",
  freeList: ["5 ta butun kanal", "10 ta alohida pleylist", "Qo‘shilgan kanallar pleylistlari, yashirish va Sevimlilar — cheklovsiz", "PIN, biometriya va barcha himoya"],
  proList: ["Ekran vaqti: kunlik limit", "Joriy videoni tugatish — ustiga 15 daqiqagacha", "Uyqu rejimi: ish va dam olish kunlari uchun alohida", "Uxlayotgan maskot bilan yumshoq «Vaqt tugadi» ekrani"],
  proNote: "Bola hech qachon «Pro» va «limit» so‘zlarini ko‘rmaydi. Pro limitlari va narxlarini alohida e’lon qilamiz.",
  cmpH: "Tariflarni solishtirish", cmpFeature: "Imkoniyat",
  more: "Ko‘proq",
  cmp: [
    ["Butun kanallar", "5", "more"],
    ["Alohida pleylistlar", "10", "more"],
    ["Qo‘shilgan kanallar pleylistlari, yashirish, Sevimlilar", "∞", "∞"],
    ["Faqat ruxsat berilgan kontent, tavsiyalar lentasisiz", 1, 1],
    ["Pleyerdan YouTube’ga barcha chiqishlar yopiq", 1, 1],
    ["Shorts o‘chiq, faqat ota-ona yoqadi", 1, 1],
    ["PIN, biometriya va terib topishdan himoya", 1, 1],
    ["Android TV, uch til, yorug‘ va qorong‘i mavzu", 1, 1],
    ["Kunlik ekran vaqti limiti", 0, 1],
    ["Videoni tugatish — ustiga 15 daqiqagacha", 0, 1],
    ["Uyqu rejimi: ish va dam olish kunlari alohida", 0, 1],
    ["«Vaqt tugadi» ekrani va ota-onadan qo‘shimcha vaqt", 0, 1]
  ],
  limH: "Limitlar qanday ishlaydi",
  lims: [
    ["block", "#B07A00", "var(--pyellow)", "Limitga yetdingiz", "Yangi qo‘shib bo‘lmaydi, lekin hammasini boshqarish mumkin: yashirish, yulduzcha qo‘yish, o‘chirish. Yoki butun kanal o‘rniga alohida pleylistlarni tanlang."],
    ["pause_circle", "var(--purple)", "var(--ppurple)", "Pro tugasa", "Hech narsa o‘chirilmaydi. Qaysi 5 kanal va 10 pleylist qolishini tanlash uchun 7 kuningiz bo‘ladi. Qolganlari pauzaga qo‘yiladi va uzaytirilganda qaytadi."],
    ["visibility_off", "var(--blue)", "var(--pblue)", "Yashirilgan pleylistlar hisoblanmaydi", "Qo‘shilgan kanaldagi pleylistni yashirsangiz, u boladan yo‘qoladi va limitga kirmaydi."],
    ["star", "#0A8C4B", "var(--pgreen)", "Yulduzcha bepul", "Sevimlilar kanalni bolada birinchi o‘ringa qo‘yadi. U ruxsat bermaydi va limitga kirmaydi."]
  ],
  faqH: "Tariflar haqida savollar",
  faq: [
    ["Mitti GO’dan foydalanish uchun pul to‘lash kerakmi?", "Yo‘q. Bepul tarifda 5 tagacha kanal, 10 ta pleylist va bolaning barcha himoyasi mavjud. Pro faqat ekran vaqtini boshqarmoqchi bo‘lganlar uchun kerak."],
    ["Pro qancha turadi?", "Pro narxlari va limitlarini ilova Google Play va App Store’da ishga tushirilganda e’lon qilamiz."],
    ["Bepul tarifda ekran vaqti bormi?", "Yo‘q, ekran vaqti — Pro’ning bir qismi. Bepul tarifda hech narsa hisoblanmaydi va hech narsa bloklanmaydi."],
    ["Pro tugasa, kanallar bilan nima bo‘ladi?", "Hech narsa o‘chirilmaydi. Qaysi 5 kanal va 10 pleylist qolishini tanlash uchun 7 kuningiz bo‘ladi. Qolganlari pauzaga qo‘yiladi va uzaytirilganda qaytadi."],
    ["Bola bepul tarif yoki limit borligini biladimi?", "Yo‘q. Bola hech qachon «Pro» va «limit» so‘zlarini ko‘rmaydi. Vaqt tugaganda u uxlayotgan maskot bilan yumshoq ekranni ko‘radi."]
  ],
  endT: "Savollaringiz qoldimi?", endS: "Ota-onalar odatda so‘raydigan hamma narsaga javob to‘pladik: kanallar, Shorts, PIN, maxfiylik va qurilmalar.", endB: "Barcha savol-javoblar"
},
en: {
  title: "Plans and Pricing: What's Free in Mitti GO and What Pro Adds",
  desc: "Mitti GO plans: free includes up to 5 channels, 10 playlists and every child-safety feature. Pro adds Screen Time — a daily limit, bedtime hours and a gentle Time's Up screen.",
  crumb: "Plans", eyebrow: "Plans", h1: "Mitti GO plans",
  lede: "Protection and security are never behind a paywall. The free plan is enough for calm, safe watching; Pro adds Screen Time.",
  free: "Free", ch: "Channels", pl: "Playlists", price: "Pricing at launch",
  freeList: ["5 whole channels", "10 separate playlists", "Playlists of added channels, hiding and Favorites — unlimited", "PIN, biometrics and every security feature"],
  proList: ["Screen Time: a daily limit", "Finish the current video — up to 15 extra minutes", "Bedtime, with separate weekday and weekend hours", "A gentle Time's Up screen with the sleeping mascot"],
  proNote: "Your child never sees the words “Pro” or “limit”. Pro limits and pricing will be announced separately.",
  cmpH: "Compare plans", cmpFeature: "Feature",
  more: "More",
  cmp: [
    ["Whole channels", "5", "more"],
    ["Separate playlists", "10", "more"],
    ["Playlists of added channels, hiding, Favorites", "∞", "∞"],
    ["Only approved content, no recommendation feed", 1, 1],
    ["Every exit from the player to YouTube is closed", 1, 1],
    ["Shorts off; only a parent can turn them on", 1, 1],
    ["PIN, biometrics and protection from guessing", 1, 1],
    ["Android TV, three languages, light and dark themes", 1, 1],
    ["Daily Screen Time limit", 0, 1],
    ["Finish a video — up to 15 extra minutes", 0, 1],
    ["Bedtime, weekdays and weekends separately", 0, 1],
    ["Time's Up screen and extra time from a parent", 0, 1]
  ],
  limH: "How limits work",
  lims: [
    ["block", "#B07A00", "var(--pyellow)", "Hit the limit", "You can't add more, but you can still manage everything: hide, star, remove. Or pick separate playlists instead of a whole channel."],
    ["pause_circle", "var(--purple)", "var(--ppurple)", "If Pro ends", "Nothing is deleted. You get 7 days to choose which 5 channels and 10 playlists stay. The rest are paused and come back when you renew."],
    ["visibility_off", "var(--blue)", "var(--pblue)", "Hidden playlists don't count", "Hide a playlist in an added channel and it disappears for your child — and doesn't count toward the limit."],
    ["star", "#0A8C4B", "var(--pgreen)", "Stars are free", "A Favorite puts a channel first for your child. It grants no access and doesn't count toward limits."]
  ],
  faqH: "Questions about plans",
  faq: [
    ["Do I have to pay to use Mitti GO?", "No. The free plan includes up to 5 channels, 10 playlists and every child-safety feature. Pro is only for families who want to manage Screen Time."],
    ["How much will Pro cost?", "We'll announce Pro pricing and limits when the app launches on Google Play and the App Store."],
    ["Is Screen Time part of the free plan?", "No, Screen Time is part of Pro. On the free plan nothing is counted and nothing is blocked."],
    ["What happens to my channels if Pro ends?", "Nothing is deleted. You get 7 days to choose which 5 channels and 10 playlists stay. The rest are paused and come back when you renew."],
    ["Will my child know we're on a free plan or hit a limit?", "No. Your child never sees the words “Pro” or “limit”. When time is up, they see a gentle screen with the sleeping mascot."]
  ],
  endT: "Still have questions?", endS: "We've gathered answers to what parents usually ask: channels, Shorts, the PIN, privacy and devices.", endB: "All questions and answers"
}
},

/* ---------------------------------------------------------------- FAQ */
faq: {
ru: {
  title: "Вопросы и ответы о Mitti GO — каналы, Shorts, PIN и приватность",
  desc: "Ответы на частые вопросы родителей о Mitti GO: как добавить канал, отключить Shorts, что делать, если забыли PIN, какие данные мы не собираем и на каких устройствах работает приложение.",
  crumb: "Вопросы", eyebrow: "Вопросы и ответы", h1: "Вопросы и ответы о Mitti GO",
  lede: "Всё, что обычно спрашивают родители: каналы и плейлисты, просмотр, родительский контроль, приватность и устройства.",
  jump: "Разделы",
  groups: [
    { id: "channels", icon: "subscriptions", c: "var(--blue)", bg: "var(--pblue)", t: "Каналы и плейлисты", items: [
      ["Как добавить канал?", "Откройте родительский раздел → «Управление контентом» и добавьте канал из подборки Mitti GO или свой — по названию, @имени или ссылке. Можно разрешить весь канал или только нужные плейлисты."],
      ["Можно добавить плейлисты без всего канала?", "Да. Выберите «Только плейлисты» — остальной канал останется закрытым, а ребёнок не сможет открыть его страницу."],
      ["Можно разрешить или запретить одно видео?", "Нет, только каналы и плейлисты. Так проще следить, а новые видео появляются сами. Если в канале есть лишний плейлист — скройте его."],
      ["Новые видео с канала появятся сами?", "Да. Если разрешён весь канал или плейлист, новые видео этого автора появятся у ребёнка автоматически — добавлять их вручную не нужно."],
      ["Что делает звёздочка?", "Это Избранное: канал встаёт первым на главной и в библиотеке ребёнка. Звёздочка не открывает доступ и не входит в лимит."],
      ["Можно удалить канал, но оставить пару плейлистов?", "Да: «Удалить» → «Оставить некоторые плейлисты». Отмеченные плейлисты останутся отдельными и сохранят звёздочку."],
      ["Сколько каналов можно добавить бесплатно?", "До 5 каналов целиком и до 10 отдельных плейлистов. Плейлисты уже добавленных каналов, скрытие и Избранное — без лимита. Подробнее — на странице <a href=\"{{PRICING}}\">Тарифы</a>."]
    ]},
    { id: "watching", icon: "smart_display", c: "var(--purple)", bg: "var(--ppurple)", t: "Для ребёнка и просмотр", items: [
      ["Как отключить Shorts?", "Они выключены с самого начала. Включить или выключить их можно в «Профиль» → Shorts, а ещё отдельно для каждого канала."],
      ["Может ли ребёнок уйти из плеера на YouTube?", "Нет. Видео играет в официальном плеере YouTube, но Mitti GO закрывает из него все выходы: логотип, ссылки и подсказки в конце видео не нажимаются."],
      ["Можно включить автовоспроизведение?", "По умолчанию оно выключено: следующее видео ребёнок выбирает сам. Хотите иначе — включите его в родительском разделе → «Воспроизведение»."],
      ["Что увидит ребёнок, если я уберу канал?", "Ничего пугающего: канал просто тихо исчезнет. Никаких надписей «Заблокировано родителем»."],
      ["Ребёнок увидит рекламу?", "Mitti GO сам рекламу не показывает. Реклама, которую YouTube иногда включает в своём плеере, остаётся: скрывать её запрещают правила YouTube."],
      ["Видео не запускается — что делать?", "Некоторые авторы запрещают показывать свои видео в других приложениях, а прямые эфиры не поддерживаются — такие видео Mitti GO просто не показывает. Если видео не грузится, проверьте интернет и нажмите «Повторить»."]
    ]},
    { id: "parents", icon: "shield_person", c: "#0A8C4B", bg: "var(--pgreen)", t: "Родительский контроль", items: [
      ["Как открыть родительский раздел?", "Во вкладке «Профиль». Для входа нужен PIN или, по желанию, отпечаток пальца или Face ID. PIN всегда остаётся запасным ключом."],
      ["Как закрыть раздел, прежде чем отдать телефон?", "Нажмите «Готово». Раздел закрывается и сам — если перейти в детскую часть или свернуть приложение."],
      ["Может ли ребёнок подобрать PIN?", "Нет. После пяти неверных попыток клавиатура берёт паузу, а перезапуск приложения или смена времени её не сбрасывают."],
      ["Что, если я забуду PIN?", "Обходного пути внутри приложения нет — именно это защищает от детей. Переустановите приложение: оно начнётся с чистого листа, каналы нужно будет добавить заново."],
      ["Как работает экранное время?", "Это функция Pro: дневной лимит, предупреждение за 5 минут, возможность досмотреть видео (не больше 15 минут сверху) и режим сна. Родитель может добавить время на сегодня. Подробнее — на странице <a href=\"{{PRICING}}\">Тарифы</a>."]
    ]},
    { id: "privacy", icon: "lock", c: "var(--sky)", bg: "var(--pcyan)", t: "Приватность и данные", items: [
      ["Собирает ли Mitti GO данные о ребёнке?", "Нет. У ребёнка нет профиля: ни имени, ни фото, ни даты рождения."],
      ["Куда уходит история просмотров?", "Никуда. История просмотров, прогресс и поиск ребёнка остаются на телефоне и никуда не отправляются."],
      ["Как хранится PIN?", "PIN надёжно зашифрован: он хранится в защищённом хранилище устройства и нигде не записывается в логи."],
      ["Какую статистику вы собираете?", "Только анонимную — вроде «добавлен канал». Без рекламных идентификаторов и без данных о том, что смотрел ребёнок."]
    ]},
    { id: "devices", icon: "devices", c: "#B07A00", bg: "var(--pyellow)", t: "Устройства и язык", items: [
      ["На каких устройствах работает?", "Android и iOS, телефоны и планшеты, а также Android TV. На планшете — две колонки видео и плеер со списком «Дальше» сбоку. Есть светлая и тёмная тема."],
      ["Можно смотреть на телевизоре?", "Да, есть версия для Android TV: те же разрешённые каналы на большом экране. Всё управляется пультом, без лишних меню и выходов на YouTube."],
      ["Какие языки поддерживает приложение?", "Узбекский, русский и английский. Язык приложения и язык подборки каналов настраиваются отдельно — удобно для двуязычных семей."],
      ["Нужен ли интернет?", "Для просмотра и добавления каналов — да. Убрать канал, скрыть плейлист или поставить звёздочку можно и без сети. Без интернета ребёнок видит уже сохранённый список."],
      ["Когда выйдет приложение?", "Mitti GO готовится к запуску в Google Play и App Store. Следите за новостями в нашем <a href=\"{{BLOG}}\">блоге</a>."]
    ]}
  ],
  endT: "Не нашли ответ?", endS: "Посмотрите, как устроен Mitti GO, или загляните в блог — там советы для родителей о детском контенте и экранном времени.", endB: "Как это работает", endB2: "Открыть блог"
},
uz: {
  title: "Savol-javoblar: Mitti GO kanallari, Shorts, PIN va maxfiylik",
  desc: "Ota-onalarning Mitti GO haqidagi ko‘p beriladigan savollariga javoblar: kanal qanday qo‘shiladi, Shorts qanday o‘chiriladi, PIN unutilsa nima qilish kerak, qanday ma’lumotlarni to‘plamaymiz va ilova qaysi qurilmalarda ishlaydi.",
  crumb: "Savollar", eyebrow: "Savol-javoblar", h1: "Mitti GO haqida savol-javoblar",
  lede: "Ota-onalar odatda so‘raydigan hamma narsa: kanal va pleylistlar, tomosha, ota-ona nazorati, maxfiylik va qurilmalar.",
  jump: "Bo‘limlar",
  groups: [
    { id: "channels", icon: "subscriptions", c: "var(--blue)", bg: "var(--pblue)", t: "Kanallar va pleylistlar", items: [
      ["Kanal qanday qo‘shiladi?", "Ota-ona bo‘limini oching → «Kontentni boshqarish» va Mitti GO tanlovidan yoki o‘zingiz tanlagan kanalni qo‘shing — nomi, @nomi yoki havolasi bo‘yicha. Butun kanalga yoki faqat kerakli pleylistlarga ruxsat berish mumkin."],
      ["Butun kanalsiz pleylist qo‘shish mumkinmi?", "Ha. «Faqat pleylistlar»ni tanlang — kanalning qolgan qismi yopiq qoladi va bola uning sahifasini ocha olmaydi."],
      ["Bitta videoga ruxsat berish yoki taqiqlash mumkinmi?", "Yo‘q, faqat kanallar va pleylistlar. Shunday kuzatish oson, yangi videolar esa o‘zi paydo bo‘ladi. Kanalda ortiqcha pleylist bo‘lsa — uni yashiring."],
      ["Kanalning yangi videolari o‘zi paydo bo‘ladimi?", "Ha. Agar butun kanal yoki pleylistga ruxsat berilgan bo‘lsa, shu muallifning yangi videolari bolada avtomatik paydo bo‘ladi — ularni qo‘lda qo‘shish shart emas."],
      ["Yulduzcha nima qiladi?", "Bu Sevimlilar: kanal bolaning bosh sahifasi va kutubxonasida birinchi turadi. Yulduzcha ruxsat bermaydi va limitga kirmaydi."],
      ["Kanalni o‘chirib, bir nechta pleylistni qoldirsa bo‘ladimi?", "Ha: «O‘chirish» → «Ba’zi pleylistlarni qoldirish». Belgilangan pleylistlar alohida qoladi va yulduzchasini saqlaydi."],
      ["Bepul nechta kanal qo‘shish mumkin?", "5 tagacha butun kanal va 10 tagacha alohida pleylist. Qo‘shilgan kanallar pleylistlari, yashirish va Sevimlilar — cheklovsiz. Batafsil — <a href=\"{{PRICING}}\">Tariflar</a> sahifasida."]
    ]},
    { id: "watching", icon: "smart_display", c: "var(--purple)", bg: "var(--ppurple)", t: "Bola uchun va tomosha", items: [
      ["Shorts’ni qanday o‘chirish mumkin?", "Ular boshidanoq o‘chiq. «Profil» → Shorts bo‘limida yoqish yoki o‘chirish mumkin, shuningdek har bir kanal uchun alohida."],
      ["Bola pleyerdan YouTube’ga chiqib keta oladimi?", "Yo‘q. Video YouTube’ning rasmiy pleyerida ijro etiladi, lekin Mitti GO undan barcha chiqishlarni yopadi: logotip, havolalar va video oxiridagi tavsiyalar bosilmaydi."],
      ["Avtoijroni yoqish mumkinmi?", "Odatda u o‘chiq: keyingi videoni bola o‘zi tanlaydi. Boshqacha xohlasangiz — ota-ona bo‘limi → «Ijro» bo‘limida yoqing."],
      ["Kanalni olib tashlasam, bola nimani ko‘radi?", "Qo‘rqinchli hech narsa: kanal shunchaki jimgina yo‘qoladi. «Ota-ona tomonidan bloklangan» yozuvlari yo‘q."],
      ["Bola reklama ko‘radimi?", "Mitti GO o‘zi reklama ko‘rsatmaydi. YouTube o‘z pleerida ba’zan ko‘rsatadigan reklama qoladi: uni yashirishni YouTube qoidalari taqiqlaydi."],
      ["Video ishga tushmayapti — nima qilish kerak?", "Ba’zi mualliflar videolarini boshqa ilovalarda ko‘rsatishni taqiqlaydi, jonli efirlar esa qo‘llab-quvvatlanmaydi — Mitti GO bunday videolarni shunchaki ko‘rsatmaydi. Video yuklanmasa, internetni tekshiring va «Qayta urinish»ni bosing."]
    ]},
    { id: "parents", icon: "shield_person", c: "#0A8C4B", bg: "var(--pgreen)", t: "Ota-ona nazorati", items: [
      ["Ota-ona bo‘limi qanday ochiladi?", "«Profil» yorlig‘idan. Kirish uchun PIN yoki, xohishga ko‘ra, barmoq izi yoki Face ID kerak. PIN har doim zaxira kalit bo‘lib qoladi."],
      ["Telefonni berishdan oldin bo‘limni qanday yopish mumkin?", "«Tayyor»ni bosing. Bo‘lim bolalar qismiga o‘tganda yoki ilovani yig‘ib qo‘yganda ham o‘zi yopiladi."],
      ["Bola PIN’ni terib topa oladimi?", "Yo‘q. Besh marta noto‘g‘ri urinishdan so‘ng klaviatura pauza qiladi, ilovani qayta ishga tushirish yoki vaqtni o‘zgartirish uni bekor qilmaydi."],
      ["PIN’ni unutib qo‘ysam-chi?", "Ilova ichida chetlab o‘tish yo‘li yo‘q — aynan shu bolalardan himoya qiladi. Ilovani qayta o‘rnating: u noldan boshlanadi, kanallarni qaytadan qo‘shish kerak bo‘ladi."],
      ["Ekran vaqti qanday ishlaydi?", "Bu Pro funksiyasi: kunlik limit, 5 daqiqa oldin ogohlantirish, videoni tugatish imkoniyati (ustiga 15 daqiqagacha) va uyqu rejimi. Ota-ona bugun uchun vaqt qo‘sha oladi. Batafsil — <a href=\"{{PRICING}}\">Tariflar</a> sahifasida."]
    ]},
    { id: "privacy", icon: "lock", c: "var(--sky)", bg: "var(--pcyan)", t: "Maxfiylik va ma’lumotlar", items: [
      ["Mitti GO bola haqida ma’lumot to‘playdimi?", "Yo‘q. Bolaning profili yo‘q: ism ham, rasm ham, tug‘ilgan sana ham yo‘q."],
      ["Ko‘rish tarixi qayerga yuboriladi?", "Hech qayerga. Ko‘rish tarixi, jarayon va bolaning qidiruvlari telefonda qoladi va hech qayerga yuborilmaydi."],
      ["PIN qanday saqlanadi?", "PIN ishonchli shifrlangan: u qurilmaning himoyalangan xotirasida saqlanadi va hech qayerda qayd etilmaydi."],
      ["Qanday statistika to‘playsiz?", "Faqat anonim statistika — masalan, «kanal qo‘shildi». Reklama identifikatorlarisiz va bola nima ko‘rgani haqida ma’lumotsiz."]
    ]},
    { id: "devices", icon: "devices", c: "#B07A00", bg: "var(--pyellow)", t: "Qurilmalar va til", items: [
      ["Qaysi qurilmalarda ishlaydi?", "Android va iOS, telefon va planshetlar, shuningdek Android TV. Planshetda — ikki ustun video va yon tomonda «Keyingi» ro‘yxati bilan pleyer. Yorug‘ va qorong‘i mavzu bor."],
      ["Televizorda ko‘rish mumkinmi?", "Ha, Android TV versiyasi bor: o‘sha ruxsat berilgan kanallar katta ekranda. Hammasi pult bilan boshqariladi, ortiqcha menyular va YouTube’ga chiqishlar yo‘q."],
      ["Ilova qaysi tillarni qo‘llab-quvvatlaydi?", "O‘zbek, rus va ingliz tillarini. Ilova tili va kanallar tanlovi tili alohida sozlanadi — ikki tilli oilalar uchun qulay."],
      ["Internet kerakmi?", "Tomosha qilish va kanal qo‘shish uchun — ha. Kanalni olib tashlash, pleylistni yashirish yoki yulduzcha qo‘yish internetsiz ham ishlaydi. Internetsiz bola saqlangan ro‘yxatni ko‘radi."],
      ["Ilova qachon chiqadi?", "Mitti GO Google Play va App Store’da ishga tushirishga tayyorlanmoqda. Yangiliklarni <a href=\"{{BLOG}}\">blogimizda</a> kuzating."]
    ]}
  ],
  endT: "Javob topmadingizmi?", endS: "Mitti GO qanday ishlashini ko‘ring yoki blogga kiring — u yerda bolalar kontenti va ekran vaqti haqida ota-onalar uchun maslahatlar bor.", endB: "Qanday ishlaydi", endB2: "Blogni ochish"
},
en: {
  title: "FAQ About Mitti GO: Channels, Shorts, PIN and Privacy",
  desc: "Answers to parents' common questions about Mitti GO: how to add a channel, turn off Shorts, what to do if you forget the PIN, what data we don't collect and which devices the app runs on.",
  crumb: "FAQ", eyebrow: "Questions & answers", h1: "Mitti GO questions and answers",
  lede: "Everything parents usually ask: channels and playlists, watching, parental controls, privacy and devices.",
  jump: "Sections",
  groups: [
    { id: "channels", icon: "subscriptions", c: "var(--blue)", bg: "var(--pblue)", t: "Channels and playlists", items: [
      ["How do I add a channel?", "Open the parent area → Manage Content and add a channel from Mitti GO's suggestions or your own — by name, @handle or link. You can allow the whole channel or only the playlists you want."],
      ["Can I add playlists without the whole channel?", "Yes. Choose “Playlists only” — the rest of the channel stays closed and your child can't open its page."],
      ["Can I allow or block a single video?", "No — only channels and playlists. It's easier to keep track, and new videos arrive on their own. If a channel has a playlist you don't want, hide it."],
      ["Do new videos from a channel appear on their own?", "Yes. If a whole channel or a playlist is allowed, that creator's new videos show up for your child automatically — no need to add them by hand."],
      ["What does the star do?", "It's a Favorite: the channel comes first on your child's Home and Library. A star grants nothing and doesn't count toward limits."],
      ["Can I remove a channel but keep a few playlists?", "Yes: Remove → Keep some playlists. The ones you tick stay as separate items and keep their star."],
      ["How many channels can I add for free?", "Up to 5 whole channels and up to 10 separate playlists. Playlists of added channels, hiding and Favorites are unlimited. More on the <a href=\"{{PRICING}}\">Plans</a> page."]
    ]},
    { id: "watching", icon: "smart_display", c: "var(--purple)", bg: "var(--ppurple)", t: "For kids and watching", items: [
      ["How do I turn Shorts off?", "They're off from the start. Switch them in Profile → Shorts, and separately for each channel."],
      ["Can my child leave the player for YouTube?", "No. Videos play in YouTube's official player, but Mitti GO closes every exit: the logo, links and end-screen suggestions can't be tapped."],
      ["Can I turn on autoplay?", "It's off by default — your child picks what plays next. Prefer otherwise? Switch it on in the parent area → Playback."],
      ["What does my child see if I remove a channel?", "Nothing scary: the channel simply disappears. No “Blocked by your parent” messages."],
      ["Will my child see ads?", "Mitti GO shows no ads of its own. Ads YouTube sometimes plays inside its player stay — YouTube's rules forbid hiding them."],
      ["A video won't play — what now?", "Some creators don't allow their videos in other apps, and live streams aren't supported — Mitti GO simply doesn't show those. If a video won't load, check the connection and tap Try again."]
    ]},
    { id: "parents", icon: "shield_person", c: "#0A8C4B", bg: "var(--pgreen)", t: "Parental controls", items: [
      ["How do I open the parent area?", "From the Profile tab. You'll need the PIN or, if you like, your fingerprint or Face ID. The PIN is always the fallback."],
      ["How do I close it before handing over the phone?", "Tap Done. The area also closes by itself when you switch to the kids' side or minimize the app."],
      ["Can my child guess the PIN?", "No. After five wrong tries the keypad pauses, and restarting the app or changing the clock won't reset it."],
      ["What if I forget my PIN?", "There's no back door inside the app — that's exactly what keeps kids out. Reinstall it: Mitti GO starts fresh and you add your channels again."],
      ["How does Screen Time work?", "It's a Pro feature: a daily limit, a 5-minute heads-up, the option to finish a video (up to 15 extra minutes) and bedtime hours. A parent can add time for today. More on the <a href=\"{{PRICING}}\">Plans</a> page."]
    ]},
    { id: "privacy", icon: "lock", c: "var(--sky)", bg: "var(--pcyan)", t: "Privacy and data", items: [
      ["Does Mitti GO collect data about my child?", "No. There's no child profile: no name, no photo, no birthday."],
      ["Where does watch history go?", "Nowhere. Watch history, progress and your child's searches stay on the phone and are never sent anywhere."],
      ["How is the PIN stored?", "The PIN is protected: it's kept hashed in the device's secure storage and never logged."],
      ["What statistics do you collect?", "Anonymous stats only — things like “channel added”. No ad IDs, and nothing about what your child watched."]
    ]},
    { id: "devices", icon: "devices", c: "#B07A00", bg: "var(--pyellow)", t: "Devices and language", items: [
      ["Which devices does it run on?", "Android and iOS, phones and tablets, plus Android TV. On a tablet you get two columns of videos and the player with Up Next beside it. Light and dark themes included."],
      ["Can we watch on a TV?", "Yes, there's an Android TV version: the same approved channels on the big screen. Everything works with the remote — no extra menus, no way out to YouTube."],
      ["Which languages does the app support?", "Uzbek, Russian and English. The app language and the channel suggestions language are set separately — handy for bilingual families."],
      ["Does it need the internet?", "To watch and to add channels — yes. Removing a channel, hiding a playlist or starring work offline. Offline, your child sees the list that's already saved."],
      ["When will the app be released?", "Mitti GO is getting ready for Google Play and the App Store. Follow the news on our <a href=\"{{BLOG}}\">blog</a>."]
    ]}
  ],
  endT: "Didn't find your answer?", endS: "See how Mitti GO works, or visit the blog for tips on kids' content and screen time.", endB: "How it works", endB2: "Open the blog"
}
},

/* ---------------------------------------------------------------- how it works
   flow: [icon, colour, background, title, text] — parent → Mitti GO → child
   steps: [title, text] — the first setup, one app screenshot each (the last one is "done"); alt: screenshot alt texts
   sections: { id, h, sub, items: [icon, colour, background, title, text] }
   Which screenshots go where: HOW_STEP_SHOTS / HOW_SHOTS in tools/build.mjs (files in assets/images/how/) */
how: {
ru: {
  title: "Как работает Mitti GO: разрешённые каналы, плеер и родительский контроль",
  desc: "Как устроен Mitti GO: родитель разрешает каналы и плейлисты, приложение убирает рекомендации, комментарии и выходы на YouTube, а ребёнок смотрит только выбранное. Настройка за пару минут.",
  crumb: "Как это работает", eyebrow: "Как это работает", h1: "Как работает Mitti GO",
  lede: "Родитель выбирает каналы и плейлисты, Mitti GO убирает всё лишнее, а ребёнок смотрит только разрешённое. Вот как это устроено — от первой настройки до экранного времени.",
  flow: [
    ["playlist_add_check", "var(--blue)", "var(--pblue)", "Родитель выбирает", "Добавляет каналы и плейлисты, которым доверяет, — из подборки Mitti GO или свои."],
    ["verified_user", "var(--purple)", "var(--ppurple)", "Mitti GO фильтрует", "Оставляет только разрешённое: без ленты рекомендаций, комментариев, лайков и выходов на YouTube."],
    ["smart_display", "#0A8C4B", "var(--pgreen)", "Ребёнок смотрит", "Видит знакомые каналы крупными карточками, а новые видео от них появляются сами."]
  ],
  stepsH: "Настройка за пару минут",
  shotsNote: "Экраны приложения; каналы и видео на них — образцы.",
  alt: { splash: "Экран загрузки Mitti GO", language: "Выбор языка приложения", pin: "Создание родительского PIN-кода", channels: "Выбор каналов из подборки Mitti GO", ready: "Экран «Всё готово» после настройки", "add-channel": "Поиск и добавление канала для ребёнка", home: "Главный экран ребёнка с видео", search: "Поиск только по добавленным видео", library: "Библиотека каналов ребёнка", player: "Плеер со списком «Дальше»", parent: "Родительский раздел: контент, Shorts, экранное время" },
  steps: [
    ["Откройте Mitti GO", "Сначала — короткая настройка из трёх шагов."],
    ["Выберите язык", "Для всего приложения — и для подборки каналов."],
    ["Придумайте PIN", "Четыре цифры закрывают родительский раздел. Детская часть открывается без PIN."],
    ["Добавьте каналы", "Из подборки Mitti GO или свои — по названию, @имени или ссылке. Шаг можно пропустить."],
    ["Отдайте телефон ребёнку", "Он увидит только то, что вы выбрали. Новые видео с этих каналов появятся сами."]
  ],
  sections: [
    { id: "permissions", h: "Что решает родитель", sub: "Отдельные видео не добавляются — только каналы и плейлисты. Так проще следить, а новые видео от разрешённых авторов появляются сами.", items: [
      ["subscriptions", "var(--blue)", "var(--pblue)", "Весь канал", "Разрешены все видео и все плейлисты канала. Для авторов, которым вы доверяете. <b>Бесплатно — до 5 каналов.</b>"],
      ["playlist_play", "var(--purple)", "var(--ppurple)", "Только плейлисты", "Разрешаете конкретный плейлист, а остальной канал остаётся закрытым. <b>Бесплатно — до 10 плейлистов.</b>"],
      ["visibility_off", "var(--sky)", "var(--pcyan)", "Скрыть плейлист", "Не нравится плейлист в добавленном канале? Скройте его — эти видео исчезнут у ребёнка отовсюду."],
      ["star", "#B07A00", "var(--pyellow)", "Звёздочка — это Избранное", "Канал встаёт первым у ребёнка. Доступ она не открывает и в лимит не входит."]
    ]},
    { id: "kids", h: "Что видит ребёнок", sub: "Большие картинки, крупные кнопки и значки вместо слов — понятно даже тем, кто ещё не читает.", items: [
      ["view_agenda", "var(--blue)", "var(--pblue)", "Одно большое видео в строке", "Без каруселей и бесконечных полок. Сверху — то, что ребёнок не досмотрел."],
      ["visibility_off", "var(--purple)", "var(--ppurple)", "Без просмотров и лайков", "Картинка, название и длительность — и никаких счётчиков популярности."],
      ["search", "#0A8C4B", "var(--pgreen)", "Поиск только по своему", "Ищет только среди того, что добавил родитель, прямо на устройстве."],
      ["play_circle", "var(--sky)", "var(--pcyan)", "Shorts — только если вы решите", "По умолчанию выключены. Включите — и появятся Shorts только разрешённых каналов, без общей ленты."],
      ["touch_app", "var(--blue)", "var(--pblue)", "Автовоспроизведение выключено", "Следующее видео ребёнок выбирает сам. Хотите иначе — включите в настройках."],
      ["sentiment_satisfied", "#B07A00", "var(--pyellow)", "Ничего пугающего", "Если что-то перестало быть разрешено, оно просто тихо исчезает. Никаких «Заблокировано родителем»."]
    ]},
    { id: "player", h: "Из плеера не уйти", sub: "Видео играет в официальном плеере YouTube, а Mitti GO закрывает из него все выходы.", items: [
      ["replay", "var(--blue)", "var(--pblue)", "Свой экран в конце видео", "«Ещё раз» и следующие видео — только из разрешённых. Подсказки YouTube не нажимаются."],
      ["queue_play_next", "var(--purple)", "var(--ppurple)", "«Дальше» — по смыслу", "Смотрит плейлист — дальше идёт этот плейлист. Открыл канал — видео этого канала."],
      ["bookmark_added", "#0A8C4B", "var(--pgreen)", "Помнит, где остановились", "Недосмотренное видео ждёт первым на главной с меткой «Продолжить»."],
      ["screen_rotation", "#B07A00", "var(--pyellow)", "Пауза, когда свернули", "Свернули приложение — видео на паузе. Повернули телефон — полный экран."]
    ]},
    { id: "parents", h: "Родительский раздел под PIN", sub: "Он открывается из вкладки «Профиль». Внутри всё под рукой: контент, Shorts, язык, тема, безопасность.", items: [
      ["fingerprint", "var(--blue)", "var(--pblue)", "PIN или биометрия", "Отпечаток или Face ID — по желанию. PIN всегда остаётся запасным ключом."],
      ["lock_clock", "#0A8C4B", "var(--pgreen)", "«Готово» закрывает всё", "Нажали «Готово», перешли в детскую часть или свернули приложение — раздел сразу закрыт."],
      ["password", "var(--purple)", "var(--ppurple)", "Подобрать PIN не выйдет", "После пяти неверных попыток клавиатура берёт паузу. Перезапуск или смена времени её не сбрасывают."],
      ["donut_large", "#B07A00", "var(--pyellow)", "Всё видно сразу", "Счётчики вроде «3 / 5» и понятные метки: Включён, Скрыт, На паузе."]
    ]},
    { id: "screen-time", h: "Экранное время · Pro", sub: "Экранное время — часть Pro. На бесплатном тарифе ничего не считается и ничего не блокируется. Подробнее — на странице <a href=\"{{PRICING}}\">Тарифы</a>.", items: [
      ["schedule", "var(--blue)", "var(--pblue)", "Дневной лимит", "Сколько можно смотреть в день. Обнуляется в полночь."],
      ["timer", "var(--purple)", "var(--ppurple)", "Предупреждение за 5 минут", "Маскот говорит «Скоро перерыв!» — без обратного отсчёта и поверх видео не выскакивает."],
      ["hourglass_bottom", "#0A8C4B", "var(--pgreen)", "Можно досмотреть", "Если время кончилось посреди видео, его можно досмотреть — но не больше 15 минут сверху."],
      ["bedtime", "#B07A00", "var(--pyellow)", "Режим сна", "Разрешённые часы, например 08:00–20:00, — отдельно для будней и выходных."]
    ]}
  ],
  faqH: "Вопросы о том, как всё устроено",
  faq: [
    ["Можно разрешить или запретить одно видео?", "Нет, только каналы и плейлисты. Так проще следить, а новые видео появляются сами. Если в канале есть лишний плейлист — скройте его."],
    ["Нужен ли интернет?", "Для просмотра и добавления каналов — да. Убрать канал, скрыть плейлист или поставить звёздочку можно и без сети. Без интернета ребёнок видит уже сохранённый список."],
    ["Ребёнок увидит рекламу?", "Mitti GO сам рекламу не показывает. Реклама, которую YouTube иногда включает в своём плеере, остаётся: скрывать её запрещают правила YouTube."],
    ["Видео не запускается — что делать?", "Некоторые авторы запрещают показывать свои видео в других приложениях, а прямые эфиры не поддерживаются — такие видео Mitti GO просто не показывает. Если видео не грузится, проверьте интернет и нажмите «Повторить»."]
  ],
  endT: "Остались вопросы?", endS: "Посмотрите, что входит в бесплатный тариф, или загляните в ответы на частые вопросы родителей.", endB: "Тарифы", endB2: "Все вопросы и ответы"
},
uz: {
  title: "Mitti GO qanday ishlaydi: ruxsat etilgan kanallar, pleyer va ota-ona nazorati",
  desc: "Mitti GO qanday tuzilgan: ota-ona kanal va pleylistlarga ruxsat beradi, ilova tavsiyalar, izohlar va YouTube’ga chiqishlarni olib tashlaydi, bola esa faqat tanlanganini ko‘radi. Bir-ikki daqiqada sozlash.",
  crumb: "Qanday ishlaydi", eyebrow: "Qanday ishlaydi", h1: "Mitti GO qanday ishlaydi",
  lede: "Ota-ona kanal va pleylistlarni tanlaydi, Mitti GO ortiqcha narsalarni olib tashlaydi, bola esa faqat ruxsat etilganini ko‘radi. Birinchi sozlashdan ekran vaqtigacha — hammasi qanday tuzilgan.",
  flow: [
    ["playlist_add_check", "var(--blue)", "var(--pblue)", "Ota-ona tanlaydi", "O‘zi ishonadigan kanal va pleylistlarni qo‘shadi — Mitti GO tanlovidan yoki o‘zinikini."],
    ["verified_user", "var(--purple)", "var(--ppurple)", "Mitti GO saralaydi", "Faqat ruxsat etilganini qoldiradi: tavsiyalar lentasi, izohlar, layklar va YouTube’ga chiqishlarsiz."],
    ["smart_display", "#0A8C4B", "var(--pgreen)", "Bola tomosha qiladi", "Tanish kanallarni katta kartochkalarda ko‘radi, ulardagi yangi videolar esa o‘zi paydo bo‘ladi."]
  ],
  stepsH: "Bir-ikki daqiqada sozlash",
  shotsNote: "Ilova ekranlari; ulardagi kanal va videolar — namuna.",
  alt: { splash: "Mitti GO yuklanish ekrani", language: "Ilova tilini tanlash", pin: "Ota-ona PIN-kodini yaratish", channels: "Mitti GO tanlovidan kanallarni tanlash", ready: "Sozlashdan keyingi «Hammasi tayyor» ekrani", "add-channel": "Bola uchun kanal qidirish va qo‘shish", home: "Bolaning videolar bilan bosh ekrani", search: "Faqat qo‘shilgan videolar bo‘yicha qidiruv", library: "Bolaning kanallar kutubxonasi", player: "«Keyingi» ro‘yxatli pleyer", parent: "Ota-ona bo‘limi: kontent, Shorts, ekran vaqti" },
  steps: [
    ["Mitti GO’ni oching", "Avval — uch qadamdan iborat qisqa sozlash."],
    ["Tilni tanlang", "Butun ilova va kanallar tanlovi uchun."],
    ["PIN o‘ylab toping", "To‘rt raqam ota-onalar bo‘limini yopadi. Bolalar qismi PIN’siz ochiladi."],
    ["Kanallar qo‘shing", "Mitti GO tanlovidan yoki o‘zingiznikini — nomi, @nomi yoki havolasi bo‘yicha. Bu qadamni o‘tkazib yuborish mumkin."],
    ["Telefonni bolaga bering", "U faqat siz tanlagan narsani ko‘radi. Bu kanallardagi yangi videolar o‘zi paydo bo‘ladi."]
  ],
  sections: [
    { id: "permissions", h: "Ota-ona nimani hal qiladi", sub: "Alohida videolar qo‘shilmaydi — faqat kanallar va pleylistlar. Shunday kuzatish oson, ruxsat berilgan mualliflarning yangi videolari esa o‘zi paydo bo‘ladi.", items: [
      ["subscriptions", "var(--blue)", "var(--pblue)", "Butun kanal", "Kanalning barcha videolari va pleylistlari ruxsat etiladi. Siz ishonadigan mualliflar uchun. <b>Bepul — 5 tagacha kanal.</b>"],
      ["playlist_play", "var(--purple)", "var(--ppurple)", "Faqat pleylistlar", "Aniq bir pleylistga ruxsat berasiz, kanalning qolgan qismi yopiq qoladi. <b>Bepul — 10 tagacha pleylist.</b>"],
      ["visibility_off", "var(--sky)", "var(--pcyan)", "Pleylistni yashirish", "Qo‘shilgan kanaldagi pleylist yoqmadimi? Uni yashiring — bu videolar bolada hamma joydan yo‘qoladi."],
      ["star", "#B07A00", "var(--pyellow)", "Yulduzcha — bu Sevimlilar", "Kanal bolada birinchi turadi. U ruxsat bermaydi va limitga kirmaydi."]
    ]},
    { id: "kids", h: "Bola nimani ko‘radi", sub: "Katta rasmlar, yirik tugmalar va so‘z o‘rniga belgilar — hali o‘qiy olmaydiganlarga ham tushunarli.", items: [
      ["view_agenda", "var(--blue)", "var(--pblue)", "Har qatorda bitta katta video", "Karusellar va cheksiz javonlarsiz. Tepada — bola oxirigacha ko‘rmagan video."],
      ["visibility_off", "var(--purple)", "var(--ppurple)", "Ko‘rishlar va layklar yo‘q", "Rasm, nom va davomiylik — mashhurlik hisoblagichlarisiz."],
      ["search", "#0A8C4B", "var(--pgreen)", "Qidiruv faqat o‘zinikida", "Faqat ota-ona qo‘shgan narsalar ichidan, to‘g‘ridan-to‘g‘ri qurilmada qidiradi."],
      ["play_circle", "var(--sky)", "var(--pcyan)", "Shorts — faqat siz qaror qilsangiz", "Odatda o‘chiq. Yoqsangiz — umumiy lentasiz, faqat ruxsat berilgan kanallarning Shorts’lari chiqadi."],
      ["touch_app", "var(--blue)", "var(--pblue)", "Avtoijro o‘chiq", "Keyingi videoni bola o‘zi tanlaydi. Boshqacha xohlasangiz — sozlamalarda yoqing."],
      ["sentiment_satisfied", "#B07A00", "var(--pyellow)", "Qo‘rqinchli narsa yo‘q", "Biror narsaga ruxsat bekor qilinsa, u shunchaki jimgina yo‘qoladi. «Ota-ona tomonidan bloklangan» yozuvlari yo‘q."]
    ]},
    { id: "player", h: "Pleyerdan chiqib bo‘lmaydi", sub: "Video rasmiy YouTube pleerida ijro etiladi, Mitti GO esa undan barcha chiqish yo‘llarini yopadi.", items: [
      ["replay", "var(--blue)", "var(--pblue)", "Video oxirida o‘z ekrani", "«Yana» va keyingi videolar — faqat ruxsat etilganlardan. YouTube tavsiyalari bosilmaydi."],
      ["queue_play_next", "var(--purple)", "var(--ppurple)", "«Keyingi» — mazmunga ko‘ra", "Pleylist ko‘ryapti — keyin shu pleylist davom etadi. Kanalni ochdi — shu kanal videolari."],
      ["bookmark_added", "#0A8C4B", "var(--pgreen)", "Qayerda to‘xtaganini eslaydi", "Oxirigacha ko‘rilmagan video bosh sahifada «Davom etish» belgisi bilan birinchi turadi."],
      ["screen_rotation", "#B07A00", "var(--pyellow)", "Yig‘ilganda pauza", "Ilovani yig‘dingiz — video pauzada. Telefonni burdingiz — to‘liq ekran."]
    ]},
    { id: "parents", h: "PIN ortidagi ota-ona bo‘limi", sub: "U «Profil» yorlig‘idan ochiladi. Ichida hammasi qo‘l ostida: kontent, Shorts, til, mavzu, xavfsizlik.", items: [
      ["fingerprint", "var(--blue)", "var(--pblue)", "PIN yoki biometriya", "Barmoq izi yoki Face ID — ixtiyoriy. PIN har doim zaxira kalit bo‘lib qoladi."],
      ["lock_clock", "#0A8C4B", "var(--pgreen)", "«Tayyor» hammasini yopadi", "«Tayyor»ni bosdingiz, bolalar qismiga o‘tdingiz yoki ilovani yig‘dingiz — bo‘lim darhol yopiladi."],
      ["password", "var(--purple)", "var(--ppurple)", "PIN’ni terib topib bo‘lmaydi", "Besh marta noto‘g‘ri urinishdan so‘ng klaviatura pauza qiladi. Qayta ishga tushirish yoki vaqtni o‘zgartirish uni bekor qilmaydi."],
      ["donut_large", "#B07A00", "var(--pyellow)", "Hammasi darhol ko‘rinadi", "«3 / 5» kabi hisoblagichlar va tushunarli belgilar: Ko‘rinadi, Yashirin, Pauzada."]
    ]},
    { id: "screen-time", h: "Ekran vaqti · Pro", sub: "Ekran vaqti — Pro’ning bir qismi. Bepul tarifda hech narsa hisoblanmaydi va hech narsa bloklanmaydi. Batafsil — <a href=\"{{PRICING}}\">Tariflar</a> sahifasida.", items: [
      ["schedule", "var(--blue)", "var(--pblue)", "Kunlik limit", "Kuniga qancha ko‘rish mumkin. Yarim tunda nolga tushadi."],
      ["timer", "var(--purple)", "var(--ppurple)", "5 daqiqa oldin ogohlantirish", "Maskot «Tez orada tanaffus!» deydi — orqaga sanashsiz va videoni yopmasdan."],
      ["hourglass_bottom", "#0A8C4B", "var(--pgreen)", "Oxirigacha ko‘rish mumkin", "Vaqt video o‘rtasida tugasa, uni oxirigacha ko‘rish mumkin — ustiga 15 daqiqadan oshmasdan."],
      ["bedtime", "#B07A00", "var(--pyellow)", "Uyqu rejimi", "Ruxsat etilgan soatlar, masalan 08:00–20:00 — ish va dam olish kunlari uchun alohida."]
    ]}
  ],
  faqH: "Hammasi qanday tuzilgani haqida savollar",
  faq: [
    ["Bitta videoga ruxsat berish yoki taqiqlash mumkinmi?", "Yo‘q, faqat kanallar va pleylistlar. Shunday kuzatish oson, yangi videolar esa o‘zi paydo bo‘ladi. Kanalda ortiqcha pleylist bo‘lsa — uni yashiring."],
    ["Internet kerakmi?", "Tomosha qilish va kanal qo‘shish uchun — ha. Kanalni olib tashlash, pleylistni yashirish yoki yulduzcha qo‘yish internetsiz ham ishlaydi. Internetsiz bola saqlangan ro‘yxatni ko‘radi."],
    ["Bola reklama ko‘radimi?", "Mitti GO o‘zi reklama ko‘rsatmaydi. YouTube o‘z pleerida ba’zan ko‘rsatadigan reklama qoladi: uni yashirishni YouTube qoidalari taqiqlaydi."],
    ["Video ishga tushmayapti — nima qilish kerak?", "Ba’zi mualliflar videolarini boshqa ilovalarda ko‘rsatishni taqiqlaydi, jonli efirlar esa qo‘llab-quvvatlanmaydi — Mitti GO bunday videolarni shunchaki ko‘rsatmaydi. Video yuklanmasa, internetni tekshiring va «Qayta urinish»ni bosing."]
  ],
  endT: "Savollaringiz qoldimi?", endS: "Bepul tarifga nima kirishini ko‘ring yoki ota-onalarning ko‘p beriladigan savollariga javoblarni o‘qing.", endB: "Tariflar", endB2: "Barcha savol-javoblar"
},
en: {
  title: "How Mitti GO Works: Approved Channels, the Player and Parental Controls",
  desc: "How Mitti GO works: a parent allows channels and playlists, the app removes recommendations, comments and ways out to YouTube, and the child watches only what was chosen. Set up in a couple of minutes.",
  crumb: "How it works", eyebrow: "How it works", h1: "How Mitti GO works",
  lede: "A parent chooses channels and playlists, Mitti GO strips out everything else, and the child watches only what's allowed. Here's how it fits together — from first setup to Screen Time.",
  flow: [
    ["playlist_add_check", "var(--blue)", "var(--pblue)", "The parent chooses", "Adds the channels and playlists they trust — from Mitti GO's suggestions or their own."],
    ["verified_user", "var(--purple)", "var(--ppurple)", "Mitti GO filters", "Keeps only what's allowed: no recommendation feed, comments, likes or ways out to YouTube."],
    ["smart_display", "#0A8C4B", "var(--pgreen)", "The child watches", "Sees familiar channels as big cards, and new videos from them appear on their own."]
  ],
  stepsH: "Set up in a couple of minutes",
  shotsNote: "App screens; the channels and videos on them are placeholders.",
  alt: { splash: "Mitti GO loading screen", language: "Choosing the app language", pin: "Creating the parent PIN", channels: "Picking channels from Mitti GO's suggestions", ready: "The “You're all set” screen after setup", "add-channel": "Finding and adding a channel for your child", home: "The child's Home screen with videos", search: "Search through added videos only", library: "The child's channel Library", player: "The player with Up Next", parent: "The parent area: content, Shorts, Screen Time" },
  steps: [
    ["Open Mitti GO", "First comes a short three-step setup."],
    ["Pick a language", "For the whole app — and for channel suggestions."],
    ["Create a PIN", "Four digits lock the parent area. The child's side opens without one."],
    ["Add channels", "From Mitti GO's suggestions or your own — by name, @handle or link. You can skip this step."],
    ["Hand the phone over", "Your child sees only what you chose. New videos from those channels appear on their own."]
  ],
  sections: [
    { id: "permissions", h: "What the parent decides", sub: "Single videos can't be added — only channels and playlists. It's easier to keep track, and new videos from allowed sources appear on their own.", items: [
      ["subscriptions", "var(--blue)", "var(--pblue)", "Whole channel", "Every video and playlist on the channel is allowed. For creators you trust. <b>Free: up to 5 channels.</b>"],
      ["playlist_play", "var(--purple)", "var(--ppurple)", "Playlists only", "Allow one playlist; the rest of the channel stays closed. <b>Free: up to 10 playlists.</b>"],
      ["visibility_off", "var(--sky)", "var(--pcyan)", "Hide a playlist", "Don't like a playlist on an added channel? Hide it — those videos disappear everywhere for your child."],
      ["star", "#B07A00", "var(--pyellow)", "The star is a Favorite", "The channel comes first for your child. It grants nothing and doesn't count toward limits."]
    ]},
    { id: "kids", h: "What your child sees", sub: "Big pictures, big buttons and icons instead of words — clear even before they can read.", items: [
      ["view_agenda", "var(--blue)", "var(--pblue)", "One big video per row", "No carousels, no endless shelves. The unfinished video sits on top."],
      ["visibility_off", "var(--purple)", "var(--ppurple)", "No views, no likes", "A picture, a title and a duration — and no popularity counters."],
      ["search", "#0A8C4B", "var(--pgreen)", "Search stays inside", "It looks only through what a parent added, right on the device."],
      ["play_circle", "var(--sky)", "var(--pcyan)", "Shorts only if you say so", "Off by default. Turn them on and only Shorts from allowed channels appear — never a global feed."],
      ["touch_app", "var(--blue)", "var(--pblue)", "Autoplay is off", "Your child picks what plays next. Prefer otherwise? Switch it on in settings."],
      ["sentiment_satisfied", "#B07A00", "var(--pyellow)", "Nothing scary", "When something is no longer allowed, it simply disappears. No “Blocked by your parent”."]
    ]},
    { id: "player", h: "No way out of the player", sub: "Videos play in YouTube's official player, and Mitti GO closes every way out of it.", items: [
      ["replay", "var(--blue)", "var(--pblue)", "Our own end screen", "“Watch again” and what's next — only from allowed videos. YouTube's suggestions can't be tapped."],
      ["queue_play_next", "var(--purple)", "var(--ppurple)", "Up Next that makes sense", "Watching a playlist? The playlist continues. Opened a channel? That channel's videos."],
      ["bookmark_added", "#0A8C4B", "var(--pgreen)", "Remembers where they stopped", "The unfinished video waits first on Home with a Keep watching tag."],
      ["screen_rotation", "#B07A00", "var(--pyellow)", "Pauses in the background", "Leave the app and the video pauses. Turn the phone for full screen."]
    ]},
    { id: "parents", h: "A parent area behind a PIN", sub: "It opens from the Profile tab. Everything is at hand: content, Shorts, language, theme, security.", items: [
      ["fingerprint", "var(--blue)", "var(--pblue)", "PIN or biometrics", "Fingerprint or Face ID if you like. The PIN is always the fallback."],
      ["lock_clock", "#0A8C4B", "var(--pgreen)", "Done locks everything", "Press Done, step into the child area or leave the app — the parent area locks at once."],
      ["password", "var(--purple)", "var(--ppurple)", "Guessing doesn't work", "After five wrong tries the keypad pauses. A restart or a clock change won't reset it."],
      ["donut_large", "#B07A00", "var(--pyellow)", "Everything at a glance", "Counters like “3 / 5” and plain labels: Included, Hidden, Paused."]
    ]},
    { id: "screen-time", h: "Screen Time · Pro", sub: "Screen Time is part of Pro. On Free nothing is counted and nothing is locked. More on the <a href=\"{{PRICING}}\">Plans</a> page.", items: [
      ["schedule", "var(--blue)", "var(--pblue)", "Daily limit", "How long your child can watch each day. Resets at midnight."],
      ["timer", "var(--purple)", "var(--ppurple)", "A 5-minute heads-up", "The mascot says “Almost time for a break!” — no countdown, never over the video."],
      ["hourglass_bottom", "#0A8C4B", "var(--pgreen)", "They can finish", "If time runs out mid-video, it may finish — up to 15 extra minutes."],
      ["bedtime", "#B07A00", "var(--pyellow)", "Bedtime", "Allowed hours like 08:00–20:00, separate for weekdays and weekends."]
    ]}
  ],
  faqH: "Questions about how it works",
  faq: [
    ["Can I allow or block a single video?", "No — only channels and playlists. It's easier to keep track, and new videos arrive on their own. If a channel has a playlist you don't want, hide it."],
    ["Does it need the internet?", "To watch and to add channels — yes. Removing a channel, hiding a playlist or starring work offline. Offline, your child sees the list that's already saved."],
    ["Will my child see ads?", "Mitti GO shows no ads of its own. Ads YouTube sometimes plays inside its player stay — YouTube's rules forbid hiding them."],
    ["A video won't play — what now?", "Some creators don't allow their videos in other apps, and live streams aren't supported — Mitti GO simply doesn't show those. If a video won't load, check the connection and tap Try again."]
  ],
  endT: "Still have questions?", endS: "See what the free plan includes, or read answers to what parents usually ask.", endB: "Plans", endB2: "All questions and answers"
}
}
};
