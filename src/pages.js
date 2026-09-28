/* Content of the stand-alone pages: /{lang}/pricing/ and /{lang}/faq/ (UZ / RU / EN).
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
}
};
