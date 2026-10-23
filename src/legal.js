/* Legal pages: /{lang}/privacy/ (Privacy Policy) and /{lang}/terms/ (Terms of Use), UZ / RU / EN.
   Written from what the Mitti GO app really does (app repo docs/APP_AND_BUSINESS_LOGIC.md §18, docs/BACKEND_MVP.md §1.3, §5)
   and the YouTube API Services / Google Play requirements (app repo docs/PROGRESS.md B4).
   Russian is the master copy. A section is { id, h, body }: a string in body is a paragraph, an array is a bullet list.
   {{PRIVACY}} {{TERMS}} {{FAQ}} {{PRICING}} {{HOME}} → the page in the same language; {{CONTACTS}} → the contact list below. */

/* The owner of the service. Fill in the real details; an empty field is left out of the pages (never invent them).
   Until name / inn / address are filled, the pages say the details are given on request. */
const OPERATOR = {
  name: "",     // e.g. the full legal name of the company or the individual entrepreneur
  inn: "",      // tax ID (ИНН / STIR)
  address: "",  // legal address
  email: ""     // privacy and support e-mail, e.g. support@mitti-go.uz (only once the mailbox exists)
};

/* Public contacts the app already shows (app repo core/data/support/SupportConfig.kt). */
const CONTACTS = { telegram: "mitti_go", instagram: "mitti_go", website: "mitti-go.uz" };

const UPDATED = "2026-10-23";

const YT_TERMS = "https://www.youtube.com/t/terms";
const G_PRIVACY = "https://policies.google.com/privacy";
const G_PERMISSIONS = "https://myaccount.google.com/permissions";
const PLAY_SUBS = "https://play.google.com/store/account/subscriptions";
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

/* ================================================================ privacy */
const privacy = {
ru: {
  title: "Политика конфиденциальности Mitti GO",
  desc: "Какие данные собирает и не собирает Mitti GO: история просмотров ребёнка остаётся на телефоне, аккаунт Google необязателен, без рекламы и сторонней аналитики. Плеер YouTube, оплата, удаление данных.",
  crumb: "Политика конфиденциальности", eyebrow: "Документы", h1: "Политика конфиденциальности",
  lede: "Mitti GO сделан так, чтобы о ребёнке не собиралось ничего. Здесь честно и по пунктам: что остаётся на телефоне, что получает наш сервер и зачем.",
  updated: "Действует с", toc: "Содержание",
  sections: [
    { id: "about", h: "1. О чём этот документ", body: [
      "Mitti GO — приложение для родителей (Android, iOS, Android TV). Родитель выбирает каналы и плейлисты YouTube, а ребёнок смотрит только их в простом детском интерфейсе. Политика описывает, как обрабатываются данные в приложении Mitti GO и на сайте mitti-go.uz.",
      "Пользуясь приложением, вы соглашаетесь с этой политикой и с {{TERMS}}. Политика составлена в соответствии с Законом Республики Узбекистан «О персональных данных», а также с правилами Google Play, App Store и YouTube API Services."
    ]},
    { id: "short", h: "2. Коротко о главном", body: [[
      "О ребёнке мы ничего не собираем: у ребёнка нет профиля — ни имени, ни фото, ни возраста.",
      "Что смотрел ребёнок, его прогресс, поиск и экранное время хранятся только на устройстве и никуда не отправляются.",
      "PIN не покидает устройство: он хранится в защищённом хранилище в виде стойкого хэша.",
      "Аккаунт Google необязателен. Он нужен только для восстановления PIN, Pro и связанных устройств.",
      "В приложении нет рекламы Mitti GO, сторонней аналитики и рекламных идентификаторов. Мы не продаём данные."
    ]]},
    { id: "device", h: "3. Что хранится только на устройстве", body: [
      "Эти данные создаются и хранятся на вашем телефоне, планшете или телевизоре. Наш сервер их не получает:",
      [
        "разрешённые каналы и плейлисты, скрытые плейлисты, «Избранное» и настройки (язык, тема, Shorts, автовоспроизведение);",
        "история просмотров, прогресс видео и «Досмотреть», поиск ребёнка;",
        "экранное время: сколько ребёнок смотрел сегодня, лимит и время сна;",
        "PIN и счётчик неверных попыток — в защищённом хранилище устройства (Android Keystore, iOS Keychain), PIN хранится только в виде хэша PBKDF2."
      ],
      "Удаление приложения удаляет эти данные. Из резервной копии устройства PIN и данные защиты не восстанавливаются."
    ]},
    { id: "server", h: "4. Что получает наш сервер", body: [
      "Сервер Mitti GO нужен, чтобы получать общедоступные данные YouTube, проверять тариф и (по желанию) подключать аккаунт. Он получает:",
      [
        "<b>Анонимный идентификатор установки</b> — случайный ключ, по которому сервер ограничивает частоту запросов. Он не связан с вашим аккаунтом и не содержит данных об устройстве.",
        "<b>Запросы к YouTube</b> — идентификаторы общедоступных каналов, плейлистов и видео, а также текст поиска, когда родитель ищет канал. Эти запросы не связаны с аккаунтом.",
        "<b>Аккаунт Google (если вы его подключили)</b> — идентификатор Google, адрес почты и имя. Токены входа хранятся только в виде хэшей.",
        "<b>Тариф и промокоды</b> — статус Pro и срок его действия, активации промокодов и пробного периода. Чтобы один промокод или пробный период нельзя было использовать повторно, хранится хэш идентификатора Google и случайный ключ устройства.",
        "<b>Связанные устройства (если вы их используете)</b> — настройки семьи, которые нужно передать на детское устройство (разрешённые каналы и плейлисты, скрытые плейлисты, «Избранное», настройки Shorts и воспроизведения, экранное время каждого устройства), список устройств (название, модель, платформа, время последней синхронизации), хэш токена детского устройства и одноразовый код привязки, который действует 10 минут и хранится как хэш."
      ],
      "Сервер никогда не получает историю просмотров, прогресс, поиск ребёнка, использование экранного времени, PIN и что-либо введённое ребёнком."
    ]},
    { id: "youtube", h: "5. YouTube и сервисы Google", body: [
      "Mitti GO использует YouTube API Services. Видео воспроизводятся в официальном плеере YouTube (домен youtube-nocookie.com) без изменений: YouTube сам показывает в плеере свой логотип, субтитры и рекламу.",
      "Плеер YouTube и Google могут сохранять на устройстве файлы cookie и похожие данные и обрабатывать сведения о воспроизведении по своим правилам. Подробнее — в " + a(G_PRIVACY, "Политике конфиденциальности Google") + ". Пользуясь Mitti GO, вы также соглашаетесь с " + a(YT_TERMS, "Условиями использования YouTube") + ".",
      "Вход через Google обрабатывается Google. Отозвать у Mitti GO доступ к аккаунту можно на странице " + a(G_PERMISSIONS, "«Сторонние приложения» в аккаунте Google") + ". Mitti GO не получает доступ к вашему каналу, подпискам и истории YouTube.",
      "Ссылки из плеера на другие сайты ребёнок открыть не может: сначала нужен PIN родителя."
    ]},
    { id: "payments", h: "6. Оплата", body: [
      "Подписку Pro оформляют через Google Play (и App Store, когда приложение там появится). Оплату принимает магазин. Mitti GO получает только сведения о покупке и сроке подписки. Данные карты мы не видим и не храним.",
      "Промокоды можно приобрести у Mitti GO по договору. Для такой покупки мы обрабатываем данные, которые нужны по договору и для бухгалтерского и налогового учёта: название и реквизиты покупателя, контактное лицо, сведения об оплате. Эти документы хранятся столько, сколько требует законодательство Республики Узбекистан."
    ]},
    { id: "children", h: "7. Дети", body: [
      "Mitti GO — приложение для родителей. Его устанавливает и настраивает взрослый, а ребёнок только смотрит то, что разрешил родитель. Ребёнок не создаёт аккаунт и не вводит личные данные. Поиск в детской части работает на устройстве и не отправляется в сеть.",
      "Покупки, вход в аккаунт, внешние ссылки и раздел для родителей защищены PIN. Если вы считаете, что мы получили данные ребёнка по ошибке, напишите нам — мы удалим их."
    ]},
    { id: "purposes", h: "8. Зачем мы обрабатываем данные", body: [[
      "чтобы приложение работало: показывало разрешённые видео и обновляло каналы;",
      "чтобы восстановить PIN и подключить Pro к аккаунту;",
      "чтобы передавать настройки на связанные детские устройства;",
      "чтобы защищать сервис от злоупотреблений: ограничивать частоту запросов и повторное использование кодов;",
      "чтобы выполнять требования закона: учёт платежей по договорам и налоги."
    ]]},
    { id: "share", h: "9. Кому передаются данные", body: [
      "Мы не продаём и не сдаём данные в аренду. Данные получают только те, без кого сервис не работает:",
      [
        "Google — вход через Google, YouTube API Services, Google Play;",
        "Apple — App Store, когда приложение там появится;",
        "хостинг-провайдер, на серверах которого работает Mitti GO;",
        "государственные органы — только когда этого требует закон."
      ]
    ]},
    { id: "retention", h: "10. Сколько хранятся данные", body: [[
      "аккаунт — пока вы его не удалите;",
      "токены входа — не дольше 60 дней после последнего использования;",
      "общедоступные данные YouTube — удаляются, если их не обновляли 30 дней;",
      "устройство, которым не пользовались 60 дней, освобождает своё место в тарифе;",
      "сведения о промокоде — до конца срока его действия;",
      "документы по договорам и платежам — столько, сколько требует законодательство Республики Узбекистан."
    ]]},
    { id: "rights", h: "11. Ваши права и удаление данных", body: [
      "Вы можете узнать, какие данные о вас мы храним, исправить или удалить их и отозвать согласие. Для этого напишите нам — контакты ниже.",
      "<b>Как удалить данные:</b>",
      [
        "аккаунт: в приложении «Профиль» → «Аккаунт» → «Удалить аккаунт» — аккаунт, токены и привязанные к нему данные удаляются с сервера, связанные устройства отключаются;",
        "данные на устройстве: удалите приложение;",
        "подписку отменяют в магазине: " + a(PLAY_SUBS, "Google Play → Подписки") + ". Удаление аккаунта не отменяет подписку в магазине."
      ]
    ]},
    { id: "security", h: "12. Безопасность", body: [
      "Обмен с сервером идёт по HTTPS. Токены и коды хранятся на сервере только в виде хэшей, PIN не покидает устройство. Экраны для родителей не попадают в снимки переключателя приложений. Если мы узнаем об утечке, которая касается вас, мы сообщим об этом."
    ]},
    { id: "changes", h: "13. Изменения", body: [
      "Мы обновляем политику, когда меняется приложение. Дата вверху страницы показывает, с какого дня действует текущая редакция. О существенных изменениях сообщим в приложении или на сайте."
    ]},
    { id: "contacts", h: "14. Контакты", body: ["{{CONTACTS}}"] }
  ]
},

uz: {
  title: "Mitti GO maxfiylik siyosati",
  desc: "Mitti GO qanday ma’lumotlarni to‘playdi va to‘plamaydi: bolaning tomosha tarixi telefonda qoladi, Google akkaunti majburiy emas, reklama va uchinchi tomon analitikasi yo‘q. YouTube pleyeri, to‘lov, ma’lumotlarni o‘chirish.",
  crumb: "Maxfiylik siyosati", eyebrow: "Hujjatlar", h1: "Maxfiylik siyosati",
  lede: "Mitti GO bola haqida hech narsa to‘planmaydigan qilib yaratilgan. Bu yerda bandma-band: telefonda nima qoladi, serverimiz nimani oladi va nima uchun.",
  updated: "Amal qiladi", toc: "Mundarija",
  sections: [
    { id: "about", h: "1. Hujjat nima haqida", body: [
      "Mitti GO — ota-onalar uchun ilova (Android, iOS, Android TV). Ota-ona YouTube kanallari va pleylistlarini tanlaydi, bola esa oddiy bolalar interfeysida faqat ularni tomosha qiladi. Siyosat Mitti GO ilovasi va mitti-go.uz saytida ma’lumotlar qanday qayta ishlanishini tushuntiradi.",
      "Ilovadan foydalanib, siz ushbu siyosat va {{TERMS}} bilan rozilik bildirasiz. Siyosat O‘zbekiston Respublikasining «Shaxsga doir ma’lumotlar to‘g‘risida»gi Qonuni hamda Google Play, App Store va YouTube API Services qoidalariga muvofiq tuzilgan."
    ]},
    { id: "short", h: "2. Qisqacha", body: [[
      "Bola haqida hech narsa to‘plamaymiz: bolaning profili yo‘q — na ismi, na surati, na yoshi.",
      "Bola nimani ko‘rgani, tomosha davomi, qidiruvi va ekran vaqti faqat qurilmada saqlanadi va hech qayerga yuborilmaydi.",
      "PIN qurilmadan chiqmaydi: u himoyalangan xotirada mustahkam xesh ko‘rinishida saqlanadi.",
      "Google akkaunti majburiy emas. U faqat PINni tiklash, Pro va bog‘langan qurilmalar uchun kerak.",
      "Ilovada Mitti GO reklamasi, uchinchi tomon analitikasi va reklama identifikatorlari yo‘q. Biz ma’lumotlarni sotmaymiz."
    ]]},
    { id: "device", h: "3. Faqat qurilmada saqlanadigan ma’lumotlar", body: [
      "Bu ma’lumotlar telefon, planshet yoki televizoringizda yaratiladi va saqlanadi. Serverimiz ularni olmaydi:",
      [
        "ruxsat berilgan kanal va pleylistlar, yashirilgan pleylistlar, «Sevimlilar» va sozlamalar (til, mavzu, Shorts, avtomatik ijro);",
        "tomosha tarixi, video davomi va «Davom ettirish», bolaning qidiruvi;",
        "ekran vaqti: bola bugun qancha ko‘rgani, limit va uyqu vaqti;",
        "PIN va noto‘g‘ri urinishlar hisoblagichi — qurilmaning himoyalangan xotirasida (Android Keystore, iOS Keychain); PIN faqat PBKDF2 xeshi ko‘rinishida saqlanadi."
      ],
      "Ilovani o‘chirish bu ma’lumotlarni o‘chiradi. PIN va himoya ma’lumotlari qurilmaning zaxira nusxasidan tiklanmaydi."
    ]},
    { id: "server", h: "4. Serverimiz nimani oladi", body: [
      "Mitti GO serveri YouTube’ning ochiq ma’lumotlarini olish, tarifni tekshirish va (xohlasangiz) akkauntni ulash uchun kerak. U quyidagilarni oladi:",
      [
        "<b>O‘rnatishning anonim identifikatori</b> — server so‘rovlar tezligini cheklaydigan tasodifiy kalit. U akkauntingizga bog‘lanmagan va qurilma haqida ma’lumotga ega emas.",
        "<b>YouTube so‘rovlari</b> — ochiq kanallar, pleylistlar va videolar identifikatorlari hamda ota-ona kanal qidirganda qidiruv matni. Bu so‘rovlar akkauntga bog‘lanmagan.",
        "<b>Google akkaunti (agar ulagan bo‘lsangiz)</b> — Google identifikatori, elektron pochta manzili va ism. Kirish tokenlari faqat xesh ko‘rinishida saqlanadi.",
        "<b>Tarif va promokodlar</b> — Pro holati va amal qilish muddati, promokod va sinov muddati faollashtirilishi. Bitta promokod yoki sinov muddatidan qayta foydalanib bo‘lmasligi uchun Google identifikatorining xeshi va qurilmaning tasodifiy kaliti saqlanadi.",
        "<b>Bog‘langan qurilmalar (agar foydalansangiz)</b> — bola qurilmasiga yetkazilishi kerak bo‘lgan oila sozlamalari (ruxsat berilgan kanal va pleylistlar, yashirilgan pleylistlar, «Sevimlilar», Shorts va ijro sozlamalari, har bir qurilmaning ekran vaqti), qurilmalar ro‘yxati (nomi, modeli, platformasi, oxirgi sinxronlash vaqti), bola qurilmasi tokenining xeshi va 10 daqiqa amal qiladigan, xesh ko‘rinishida saqlanadigan bir martalik bog‘lash kodi."
      ],
      "Server hech qachon tomosha tarixi, davomi, bolaning qidiruvi, ekran vaqtidan foydalanish, PIN va bola kiritgan biror narsani olmaydi."
    ]},
    { id: "youtube", h: "5. YouTube va Google xizmatlari", body: [
      "Mitti GO YouTube API Services’dan foydalanadi. Videolar YouTube’ning rasmiy pleyerida (youtube-nocookie.com domeni) o‘zgarishsiz ijro etiladi: pleyerda YouTube o‘z logotipi, subtitrlari va reklamasini o‘zi ko‘rsatadi.",
      "YouTube pleyeri va Google qurilmada cookie fayllari va shunga o‘xshash ma’lumotlarni saqlashi hamda ijro haqidagi ma’lumotlarni o‘z qoidalari bo‘yicha qayta ishlashi mumkin — batafsil " + a(G_PRIVACY, "Google maxfiylik siyosatida") + ". Mitti GO’dan foydalanib, siz " + a(YT_TERMS, "YouTube foydalanish shartlariga") + " ham rozilik bildirasiz.",
      "Google orqali kirishni Google qayta ishlaydi. Mitti GO’ning akkauntingizga kirish huquqini " + a(G_PERMISSIONS, "Google akkauntidagi «Uchinchi tomon ilovalari»") + " sahifasida bekor qilish mumkin. Mitti GO YouTube kanalingiz, obunalaringiz va tarixingizga kira olmaydi.",
      "Bola pleyerdan boshqa saytlarga havolalarni ocha olmaydi: avval ota-onaning PIN kodi kerak."
    ]},
    { id: "payments", h: "6. To‘lov", body: [
      "Pro obunasi Google Play orqali (ilova App Store’da paydo bo‘lganda — u yerda ham) rasmiylashtiriladi. To‘lovni do‘kon qabul qiladi, Mitti GO faqat xarid va obuna muddati haqidagi ma’lumotni oladi. Karta ma’lumotlarini biz ko‘rmaymiz va saqlamaymiz.",
      "Promokodlarni Mitti GO’dan shartnoma asosida sotib olish mumkin. Bunday xarid uchun shartnoma, buxgalteriya va soliq hisobi talab qiladigan ma’lumotlarni qayta ishlaymiz: xaridorning nomi va rekvizitlari, aloqa uchun shaxs, to‘lov haqidagi ma’lumotlar. Bu hujjatlar O‘zbekiston Respublikasi qonunchiligi talab qilgan muddat davomida saqlanadi."
    ]},
    { id: "children", h: "7. Bolalar", body: [
      "Mitti GO — ota-onalar uchun ilova. Uni kattalar o‘rnatadi va sozlaydi, bola esa faqat ota-ona ruxsat bergan narsani ko‘radi. Bola akkaunt yaratmaydi va shaxsiy ma’lumot kiritmaydi. Bolalar qismidagi qidiruv qurilmada ishlaydi va tarmoqqa yuborilmaydi.",
      "Xaridlar, akkauntga kirish, tashqi havolalar va ota-onalar bo‘limi PIN bilan himoyalangan. Agar bola ma’lumotlarini xato bilan olgan deb hisoblasangiz, bizga yozing — o‘chirib tashlaymiz."
    ]},
    { id: "purposes", h: "8. Ma’lumotlarni nima uchun qayta ishlaymiz", body: [[
      "ilova ishlashi uchun: ruxsat berilgan videolarni ko‘rsatish va kanallarni yangilash;",
      "PINni tiklash va Pro’ni akkauntga ulash uchun;",
      "sozlamalarni bog‘langan bola qurilmalariga yetkazish uchun;",
      "xizmatni suiiste’moldan himoya qilish uchun: so‘rovlar tezligini va kodlardan qayta foydalanishni cheklash;",
      "qonun talablarini bajarish uchun: shartnomalar bo‘yicha to‘lovlar hisobi va soliqlar."
    ]]},
    { id: "share", h: "9. Ma’lumotlar kimga beriladi", body: [
      "Biz ma’lumotlarni sotmaymiz va ijaraga bermaymiz. Ma’lumotlarni faqat xizmat ularsiz ishlay olmaydiganlar oladi:",
      [
        "Google — Google orqali kirish, YouTube API Services, Google Play;",
        "Apple — ilova App Store’da paydo bo‘lganda;",
        "Mitti GO serverlari ishlaydigan xosting provayderi;",
        "davlat organlari — faqat qonun talab qilganda."
      ]
    ]},
    { id: "retention", h: "10. Ma’lumotlar qancha saqlanadi", body: [[
      "akkaunt — uni o‘chirguningizcha;",
      "kirish tokenlari — oxirgi foydalanishdan keyin 60 kundan ko‘p emas;",
      "YouTube’ning ochiq ma’lumotlari — 30 kun yangilanmasa o‘chiriladi;",
      "60 kun foydalanilmagan qurilma tarifdagi o‘rnini bo‘shatadi;",
      "promokod haqidagi ma’lumot — uning amal qilish muddati tugaguncha;",
      "shartnoma va to‘lov hujjatlari — O‘zbekiston Respublikasi qonunchiligi talab qilgan muddat davomida."
    ]]},
    { id: "rights", h: "11. Huquqlaringiz va ma’lumotlarni o‘chirish", body: [
      "Siz haqingizda qanday ma’lumotlar saqlanayotganini bilish, ularni tuzatish yoki o‘chirish va roziligingizni qaytarib olish huquqiga egasiz. Buning uchun bizga yozing — aloqa ma’lumotlari quyida.",
      "<b>Ma’lumotlarni qanday o‘chirish mumkin:</b>",
      [
        "akkaunt: ilovada «Profil» → «Akkaunt» → «Akkauntni o‘chirish» — akkaunt, tokenlar va unga bog‘langan ma’lumotlar serverdan o‘chiriladi, bog‘langan qurilmalar uziladi;",
        "qurilmadagi ma’lumotlar: ilovani o‘chiring;",
        "obuna do‘konda bekor qilinadi: " + a(PLAY_SUBS, "Google Play → Obunalar") + ". Akkauntni o‘chirish do‘kondagi obunani bekor qilmaydi."
      ]
    ]},
    { id: "security", h: "12. Xavfsizlik", body: [
      "Server bilan aloqa HTTPS orqali amalga oshiriladi. Tokenlar va kodlar serverda faqat xesh ko‘rinishida saqlanadi, PIN qurilmadan chiqmaydi. Ota-onalar ekranlari ilovalar almashtirgichi suratlariga tushmaydi. Agar sizga tegishli ma’lumotlar sizib chiqqanini bilsak, sizga xabar beramiz."
    ]},
    { id: "changes", h: "13. O‘zgarishlar", body: [
      "Ilova o‘zgarganda siyosatni yangilaymiz. Sahifa tepasidagi sana amaldagi tahrir qaysi kundan kuchga kirganini ko‘rsatadi. Muhim o‘zgarishlar haqida ilovada yoki saytda xabar beramiz."
    ]},
    { id: "contacts", h: "14. Aloqa", body: ["{{CONTACTS}}"] }
  ]
},

en: {
  title: "Mitti GO Privacy Policy",
  desc: "What Mitti GO does and doesn't collect: your child's watch history stays on the phone, a Google account is optional, no ads and no third-party analytics. The YouTube player, payments, data deletion.",
  crumb: "Privacy Policy", eyebrow: "Legal", h1: "Privacy Policy",
  lede: "Mitti GO is built so that nothing is collected about your child. Here it is, point by point: what stays on the phone, what our server receives and why.",
  updated: "Effective from", toc: "Contents",
  sections: [
    { id: "about", h: "1. What this document covers", body: [
      "Mitti GO is an app for parents (Android, iOS, Android TV). The parent chooses YouTube channels and playlists, and the child watches only those in a simple kids' interface. This policy explains how data is handled in the Mitti GO app and on the mitti-go.uz website.",
      "By using the app you agree to this policy and to the {{TERMS}}. The policy follows the Law of the Republic of Uzbekistan “On Personal Data” and the rules of Google Play, the App Store and the YouTube API Services."
    ]},
    { id: "short", h: "2. In short", body: [[
      "We collect nothing about your child: the child has no profile — no name, photo or age.",
      "What the child watched, their progress, searches and screen time stay on the device and are never sent anywhere.",
      "The PIN never leaves the device: it is kept in secure storage as a strong hash.",
      "A Google account is optional. It is needed only for PIN recovery, Pro and linked devices.",
      "The app has no ads of its own, no third-party analytics and no advertising IDs. We don't sell data."
    ]]},
    { id: "device", h: "3. What stays on the device only", body: [
      "This data is created and kept on your phone, tablet or TV. Our server never receives it:",
      [
        "allowed channels and playlists, hidden playlists, Favorites and settings (language, theme, Shorts, autoplay);",
        "watch history, video progress and “Keep watching”, the child's searches;",
        "screen time: how long the child watched today, the limit and bedtime;",
        "the PIN and the wrong-attempt counter — in the device's secure storage (Android Keystore, iOS Keychain); the PIN is stored only as a PBKDF2 hash."
      ],
      "Uninstalling the app deletes this data. The PIN and security data are not restored from a device backup."
    ]},
    { id: "server", h: "4. What our server receives", body: [
      "The Mitti GO server fetches public YouTube data, checks your plan and, if you want, connects an account. It receives:",
      [
        "<b>An anonymous install ID</b> — a random key the server uses to limit how often requests are made. It is not linked to your account and contains no device data.",
        "<b>YouTube requests</b> — IDs of public channels, playlists and videos, and the search text when a parent looks for a channel. These requests are not linked to an account.",
        "<b>Your Google account (if you connect it)</b> — your Google ID, e-mail address and name. Sign-in tokens are stored only as hashes.",
        "<b>Plan and promo codes</b> — your Pro status and its end date, promo-code and trial activations. So that a code or the trial can't be used twice, a hash of your Google ID and a random device key are kept.",
        "<b>Linked devices (if you use them)</b> — the family settings that have to reach the child's device (allowed channels and playlists, hidden playlists, Favorites, Shorts and playback settings, each device's screen time), the device list (name, model, platform, last sync time), a hash of the child device's token and a one-time linking code, valid for 10 minutes and stored as a hash."
      ],
      "The server never receives watch history, progress, the child's searches, screen-time usage, the PIN or anything the child types."
    ]},
    { id: "youtube", h: "5. YouTube and Google services", body: [
      "Mitti GO uses the YouTube API Services. Videos play in YouTube's official player (youtube-nocookie.com), unchanged: YouTube itself shows its logo, captions and ads in the player.",
      "The YouTube player and Google may store cookies and similar data on the device and process playback information under their own rules — see the " + a(G_PRIVACY, "Google Privacy Policy") + ". By using Mitti GO you also agree to the " + a(YT_TERMS, "YouTube Terms of Service") + ".",
      "Sign-in with Google is handled by Google. You can remove Mitti GO's access to your account on the " + a(G_PERMISSIONS, "Google account “Third-party apps” page") + ". Mitti GO gets no access to your YouTube channel, subscriptions or history.",
      "The child can't open links from the player to other sites: the parent's PIN is needed first."
    ]},
    { id: "payments", h: "6. Payments", body: [
      "Pro is purchased through Google Play (and the App Store once the app is there). The store takes the payment. Mitti GO receives only the purchase and subscription period; we never see or store card details.",
      "Promo codes can be bought from Mitti GO under an agreement. For such a purchase we process what the agreement and accounting and tax records require: the buyer's name and details, a contact person and payment information. These records are kept as long as the law of the Republic of Uzbekistan requires."
    ]},
    { id: "children", h: "7. Children", body: [
      "Mitti GO is an app for parents. An adult installs and sets it up; the child only watches what the parent allowed. The child creates no account and enters no personal data. Search in the kids' area runs on the device and is not sent over the network.",
      "Purchases, sign-in, external links and the parent area are protected by the PIN. If you believe we received a child's data by mistake, write to us and we will delete it."
    ]},
    { id: "purposes", h: "8. Why we process data", body: [[
      "to make the app work: show allowed videos and refresh channels;",
      "to recover the PIN and link Pro to an account;",
      "to pass settings to linked child devices;",
      "to protect the service from abuse: rate limits and one-time use of codes;",
      "to meet legal duties: records of payments under agreements and taxes."
    ]]},
    { id: "share", h: "9. Who receives data", body: [
      "We don't sell or rent data. Data goes only to those the service can't run without:",
      [
        "Google — Sign-in with Google, the YouTube API Services, Google Play;",
        "Apple — the App Store, once the app is there;",
        "the hosting provider whose servers run Mitti GO;",
        "public authorities — only when the law requires it."
      ]
    ]},
    { id: "retention", h: "10. How long data is kept", body: [[
      "your account — until you delete it;",
      "sign-in tokens — no longer than 60 days after last use;",
      "public YouTube data — deleted if not refreshed for 30 days;",
      "a device unused for 60 days frees its place in the plan;",
      "promo-code records — until the code's validity ends;",
      "agreement and payment records — as long as the law of the Republic of Uzbekistan requires."
    ]]},
    { id: "rights", h: "11. Your rights and deleting data", body: [
      "You can ask what data we hold about you, correct or delete it, and withdraw your consent. Write to us — the contacts are below.",
      "<b>How to delete data:</b>",
      [
        "your account: in the app, Profile → Account → Delete account — the account, tokens and the data linked to it are deleted from the server and linked devices are disconnected;",
        "data on the device: uninstall the app;",
        "a subscription is cancelled in the store: " + a(PLAY_SUBS, "Google Play → Subscriptions") + ". Deleting the account doesn't cancel a store subscription."
      ]
    ]},
    { id: "security", h: "12. Security", body: [
      "The app talks to the server over HTTPS. Tokens and codes are stored on the server only as hashes, and the PIN never leaves the device. Parent screens are kept out of the app-switcher snapshots. If we learn of a breach that affects you, we will tell you."
    ]},
    { id: "changes", h: "13. Changes", body: [
      "We update this policy when the app changes. The date at the top shows when the current version took effect. We'll tell you about significant changes in the app or on the website."
    ]},
    { id: "contacts", h: "14. Contacts", body: ["{{CONTACTS}}"] }
  ]
}
};

/* ================================================================ terms */
const terms = {
ru: {
  title: "Условия использования Mitti GO",
  desc: "Условия использования Mitti GO: как работает приложение, обязанности родителя, тарифы Free и Pro, оплата через Google Play, промокоды по договору, налоги и ответственность.",
  crumb: "Условия использования", eyebrow: "Документы", h1: "Условия использования",
  lede: "Правила, по которым работает Mitti GO: что делает приложение, за что отвечает родитель и как устроены Pro, оплата и промокоды.",
  updated: "Действует с", toc: "Содержание",
  sections: [
    { id: "accept", h: "1. Принятие условий", body: [
      "Эти условия — соглашение между вами и Mitti GO об использовании приложения Mitti GO и сайта mitti-go.uz. Устанавливая или используя приложение, вы принимаете эти условия и {{PRIVACY}}. Если вы не согласны, не пользуйтесь приложением.",
      "Пользоваться Mitti GO и принимать условия может только взрослый (18 лет и старше) — родитель, законный представитель или другой взрослый, который настраивает приложение для ребёнка."
    ]},
    { id: "service", h: "2. Что такое Mitti GO", body: [
      "Mitti GO — приложение для родителей. Оно показывает ребёнку видео YouTube только с тех каналов и плейлистов, которые разрешил родитель: целый канал или отдельные плейлисты. Отдельные видео не добавляются. Раздел для родителей защищён PIN, а в детской части нет комментариев, лайков, подписок и выходов на YouTube.",
      "Mitti GO — не YouTube и не сервис Google. Приложение не связано с Google LLC и не одобрено ею. YouTube — товарный знак Google LLC."
    ]},
    { id: "youtube", h: "3. Видео YouTube", body: [
      "Видео принадлежат их авторам и показываются через YouTube API Services в официальном плеере YouTube. Mitti GO не хранит и не изменяет видео. Пользуясь Mitti GO, вы соглашаетесь с " + a(YT_TERMS, "Условиями использования YouTube") + " и " + a(G_PRIVACY, "Политикой конфиденциальности Google") + ".",
      "YouTube может показывать в плеере свою рекламу. Mitti GO её не скрывает и не меняет. Видео может стать недоступным по решению автора или YouTube, например если автор запретил показ в других приложениях. Тогда Mitti GO его просто не показывает.",
      "Mitti GO не проверяет каждое видео и не отвечает за его содержание. Вы сами решаете, какие каналы и плейлисты разрешить ребёнку."
    ]},
    { id: "parent", h: "4. Что делает родитель", body: [[
      "выбирает источники и следит, подходят ли они ребёнку;",
      "держит PIN в секрете и нажимает «Готово», прежде чем отдать устройство ребёнку: открытый раздел для родителей сам не блокируется;",
      "понимает, что экранное время и другие инструменты помогают, но не заменяют присмотр взрослого;",
      "использует приложение только для своей семьи."
    ]]},
    { id: "pin", h: "5. PIN и аккаунт", body: [
      "PIN хранится только на устройстве. Если аккаунт не подключён, забытый PIN можно сбросить только переустановкой приложения — при этом удаляются все настройки на устройстве. С подключённым аккаунтом Google PIN восстанавливается после повторного входа в аккаунт.",
      "Аккаунт Google необязателен для бесплатного тарифа и обязателен для Pro и связанных устройств. Удалить аккаунт можно в приложении: «Профиль» → «Аккаунт»."
    ]},
    { id: "plans", h: "6. Тарифы", body: [
      "<b>Free</b> — бесплатно: до 5 каналов, до 10 отдельных плейлистов и до 3 устройств вместе с телефоном родителя. Защита ребёнка, PIN и все функции безопасности бесплатны всегда.",
      "<b>Pro</b> добавляет больше каналов, плейлистов и устройств, экранное время (дневной лимит, время сна) и раздел «Обучение». Точные значения и цены показаны в приложении и в магазине в момент покупки. Pro привязан к аккаунту Google и сохраняется после переустановки.",
      "<b>Пробный период</b> — 7 дней Pro бесплатно, один раз на аккаунт Google и одно устройство. Он ничего не списывает и не продлевается сам: потом вы просто остаётесь на Free.",
      "<b>Когда Pro заканчивается</b>, ничего не удаляется. В течение 3 дней можно убрать лишнее. После этого всё сверх бесплатных лимитов приостанавливается и снова становится доступным, когда Pro вернётся."
    ]},
    { id: "payments", h: "7. Оплата через магазин", body: [
      "Подписку Pro покупают в приложении через Google Play (и App Store, когда приложение там появится). Оплату принимает магазин: он же продлевает подписку, обрабатывает отмену и возврат денег по своим правилам. Подписка продлевается автоматически, пока вы её не отмените. Отменить её можно в любой момент в " + a(PLAY_SUBS, "Google Play → Подписки") + ": доступ сохраняется до конца оплаченного периода.",
      "Цена показывается в магазине до оплаты в валюте магазина и с налогами, которые магазин применяет в вашей стране. Mitti GO получает выручку от магазина за вычетом его комиссии и сам платит налоги с этого дохода по законодательству Республики Узбекистан."
    ]},
    { id: "promo", h: "8. Промокоды", body: [
      "Промокоды выпускает Mitti GO. Код начинается с «MITTI-» и даёт Pro на срок, указанный при выпуске (например, 1, 3, 6 или 12 месяцев либо бессрочно). Код вводят в приложении — в разделе для родителей, после входа в аккаунт Google.",
      "<b>Покупка по договору.</b> Промокоды можно купить у Mitti GO по договорным ценам — организациям (школам, детским садам, компаниям, партнёрам) и частным лицам. Цена, количество кодов, срок их действия и порядок оплаты указываются в договоре или счёте. Оплата — безналичным переводом на счёт Mitti GO в сумах или другим способом, указанным в договоре. Покупатель получает документы, предусмотренные договором и законодательством (договор, счёт, акт). Mitti GO отражает эти продажи в учёте и уплачивает налоги по Налоговому кодексу Республики Узбекистан. Входит ли НДС в цену — указывается в договоре.",
      "Промокоды не продаются внутри приложения, и приложение не ведёт на сторонние способы оплаты.",
      [
        "один код можно активировать на устройстве один раз; несколько кодов складываются, а бессрочный перекрывает остальные;",
        "у кода может быть последний день активации и лимит активаций;",
        "код нельзя обменять на деньги, кроме случаев, предусмотренных договором или законом;",
        "перепродавать коды без согласия Mitti GO нельзя;",
        "код, полученный обманным путём, может быть отключён."
      ]
    ]},
    { id: "rules", h: "9. Что нельзя делать", body: [[
      "обходить лимиты тарифа, PIN или другие ограничения приложения;",
      "разбирать, изменять и копировать приложение, кроме случаев, которые прямо разрешает закон;",
      "делать автоматические запросы к серверу Mitti GO, перегружать его или пытаться получить чужие данные;",
      "использовать Mitti GO так, что это нарушает закон или правила YouTube."
    ]]},
    { id: "ip", h: "10. Интеллектуальная собственность", body: [
      "Приложение, его дизайн, логотип и маскот Mitti GO принадлежат Mitti GO. Мы даём вам личное неисключительное право пользоваться приложением для своей семьи. Видео и названия каналов принадлежат их владельцам."
    ]},
    { id: "liability", h: "11. Ответственность", body: [
      "Приложение предоставляется «как есть». Мы делаем всё, чтобы Mitti GO работал надёжно, но не гарантируем, что он будет работать без перерывов: многое зависит от YouTube, интернета и магазинов приложений.",
      "В пределах, которые допускает законодательство Республики Узбекистан, Mitti GO не отвечает за содержание видео YouTube, за решения YouTube и Google и за косвенный ущерб. Права потребителя, которые нельзя ограничить по закону, сохраняются."
    ]},
    { id: "end", h: "12. Прекращение", body: [
      "Вы можете в любой момент перестать пользоваться приложением, удалить аккаунт и само приложение. Мы можем ограничить доступ к серверу, если условия нарушаются, например при злоупотреблении промокодами или атаке на сервис."
    ]},
    { id: "law", h: "13. Применимое право и споры", body: [
      "К этим условиям применяется законодательство Республики Узбекистан. Сначала мы стараемся решить спор переговорами — напишите нам. Если договориться не удалось, спор рассматривается в суде по законодательству Республики Узбекистан."
    ]},
    { id: "changes", h: "14. Изменения", body: [
      "Мы можем обновлять условия, когда меняется приложение. Дата вверху страницы показывает, с какого дня действует текущая редакция. О существенных изменениях сообщим в приложении или на сайте. Если вы продолжаете пользоваться приложением, значит, вы согласны с новой редакцией."
    ]},
    { id: "contacts", h: "15. Контакты", body: ["{{CONTACTS}}"] }
  ]
},

uz: {
  title: "Mitti GO foydalanish shartlari",
  desc: "Mitti GO foydalanish shartlari: ilova qanday ishlaydi, ota-onaning vazifalari, Free va Pro tariflari, Google Play orqali to‘lov, shartnoma bo‘yicha promokodlar, soliqlar va javobgarlik.",
  crumb: "Foydalanish shartlari", eyebrow: "Hujjatlar", h1: "Foydalanish shartlari",
  lede: "Mitti GO qaysi qoidalar asosida ishlaydi: ilova nima qiladi, ota-ona nimaga javob beradi, Pro, to‘lov va promokodlar qanday ishlaydi.",
  updated: "Amal qiladi", toc: "Mundarija",
  sections: [
    { id: "accept", h: "1. Shartlarni qabul qilish", body: [
      "Ushbu shartlar — Mitti GO ilovasi va mitti-go.uz saytidan foydalanish bo‘yicha siz bilan Mitti GO o‘rtasidagi kelishuv. Ilovani o‘rnatib yoki undan foydalanib, siz ushbu shartlar va {{PRIVACY}}ni qabul qilasiz. Rozi bo‘lmasangiz, ilovadan foydalanmang.",
      "Mitti GO’dan foydalanish va shartlarni qabul qilish faqat kattalarga (18 yosh va undan katta) ruxsat etiladi — ota-ona, qonuniy vakil yoki ilovani bola uchun sozlayotgan boshqa katta yoshli shaxs."
    ]},
    { id: "service", h: "2. Mitti GO nima", body: [
      "Mitti GO — ota-onalar uchun ilova. U bolaga YouTube videolarini faqat ota-ona ruxsat bergan kanal va pleylistlardan ko‘rsatadi: butun kanal yoki alohida pleylistlar; alohida videolar qo‘shilmaydi. Ota-onalar bo‘limi PIN bilan himoyalangan, bolalar qismida esa izohlar, layklar, obunalar va YouTube’ga chiqish yo‘q.",
      "Mitti GO — YouTube emas va Google xizmati emas. Ilova Google LLC bilan bog‘liq emas va u tomonidan ma’qullanmagan. YouTube — Google LLC’ning savdo belgisi."
    ]},
    { id: "youtube", h: "3. YouTube videolari", body: [
      "Videolar mualliflariga tegishli va YouTube API Services orqali YouTube’ning rasmiy pleyerida ko‘rsatiladi. Mitti GO videolarni saqlamaydi va o‘zgartirmaydi. Mitti GO’dan foydalanib, siz " + a(YT_TERMS, "YouTube foydalanish shartlari") + " va " + a(G_PRIVACY, "Google maxfiylik siyosatiga") + " rozilik bildirasiz.",
      "YouTube pleyerda o‘z reklamasini ko‘rsatishi mumkin, Mitti GO uni yashirmaydi va o‘zgartirmaydi. Video muallif yoki YouTube qarori bilan mavjud bo‘lmay qolishi mumkin (masalan, muallif boshqa ilovalarda ko‘rsatishni taqiqlagan bo‘lsa) — bunda Mitti GO uni shunchaki ko‘rsatmaydi.",
      "Mitti GO har bir videoni tekshirmaydi va uning mazmuni uchun javob bermaydi. Bolaga qaysi kanal va pleylistlarga ruxsat berishni o‘zingiz hal qilasiz."
    ]},
    { id: "parent", h: "4. Ota-onaning vazifalari", body: [[
      "manbalarni tanlaydi va ular bolaga mosligini kuzatadi;",
      "PINni sir saqlaydi va qurilmani bolaga berishdan oldin «Tayyor» tugmasini bosadi — ochiq qolgan ota-onalar bo‘limi o‘zi qulflanmaydi;",
      "ekran vaqti va boshqa vositalar yordam berishini, lekin kattalar nazoratini almashtirmasligini tushunadi;",
      "ilovadan faqat o‘z oilasi uchun foydalanadi."
    ]]},
    { id: "pin", h: "5. PIN va akkaunt", body: [
      "PIN faqat qurilmada saqlanadi. Akkaunt ulanmagan bo‘lsa, unutilgan PINni faqat ilovani qayta o‘rnatib tiklash mumkin — bunda qurilmadagi barcha sozlamalar o‘chadi. Google akkaunti ulangan bo‘lsa, PIN akkauntga qayta kirgandan so‘ng tiklanadi.",
      "Google akkaunti bepul tarifda majburiy emas, Pro va bog‘langan qurilmalar uchun esa majburiy. Akkauntni ilovada o‘chirish mumkin: «Profil» → «Akkaunt»."
    ]},
    { id: "plans", h: "6. Tariflar", body: [
      "<b>Free</b> — bepul: 5 tagacha kanal, 10 tagacha alohida pleylist va ota-ona telefoni bilan birga 3 tagacha qurilma. Bolani himoya qilish, PIN va barcha xavfsizlik funksiyalari doim bepul.",
      "<b>Pro</b> ko‘proq kanal, pleylist va qurilma, ekran vaqti (kunlik limit, uyqu vaqti) va «Ta’lim» bo‘limini qo‘shadi. Aniq qiymatlar va narxlar xarid paytida ilovada va do‘konda ko‘rsatiladi. Pro Google akkauntiga bog‘lanadi va qayta o‘rnatishdan keyin ham saqlanadi.",
      "<b>Sinov muddati</b> — 7 kunlik bepul Pro, Google akkaunti va qurilma uchun bir marta. Hech narsa yechilmaydi va o‘zi uzaytirilmaydi: keyin shunchaki Free’da qolasiz.",
      "<b>Pro tugaganda</b> hech narsa o‘chirilmaydi. 3 kun ichida keraksizini olib tashlash mumkin, shundan so‘ng bepul limitlardan ortiqcha hamma narsa to‘xtatiladi va Pro qaytganda yana ochiladi."
    ]},
    { id: "payments", h: "7. Do‘kon orqali to‘lov", body: [
      "Pro obunasi ilovada Google Play orqali (ilova App Store’da paydo bo‘lganda — u yerda ham) sotib olinadi. To‘lovni do‘kon qabul qiladi, obunani uzaytiradi, bekor qilish va pulni qaytarishni o‘z qoidalari bo‘yicha amalga oshiradi. Obuna bekor qilinmaguncha avtomatik uzaytiriladi. Uni istalgan vaqtda " + a(PLAY_SUBS, "Google Play → Obunalar") + " bo‘limida bekor qilish mumkin — kirish to‘langan davr oxirigacha saqlanadi.",
      "Narx to‘lovdan oldin do‘konda, do‘kon valyutasida va do‘kon mamlakatingizda qo‘llaydigan soliqlar bilan ko‘rsatiladi. Mitti GO do‘kondan uning komissiyasi chegirilgan tushumni oladi va bu daromaddan O‘zbekiston Respublikasi qonunchiligiga muvofiq soliq to‘laydi."
    ]},
    { id: "promo", h: "8. Promokodlar", body: [
      "Promokodlarni Mitti GO chiqaradi. Kod «MITTI-» bilan boshlanadi va chiqarilganda belgilangan muddatga (masalan, 1, 3, 6 yoki 12 oyga yoki muddatsiz) Pro beradi. Kod ilovada, ota-onalar bo‘limida, Google akkauntiga kirgandan keyin kiritiladi.",
      "<b>Shartnoma bo‘yicha xarid.</b> Promokodlarni Mitti GO’dan kelishilgan narxlarda sotib olish mumkin — tashkilotlar (maktablar, bog‘chalar, kompaniyalar, hamkorlar) va jismoniy shaxslar uchun. Narx, kodlar soni, amal qilish muddati va to‘lov tartibi shartnoma yoki hisob-fakturada ko‘rsatiladi. To‘lov Mitti GO hisobiga so‘mda pul o‘tkazish yo‘li bilan yoki shartnomada ko‘rsatilgan boshqa usulda amalga oshiriladi. Xaridor shartnoma va qonunchilikda nazarda tutilgan hujjatlarni (shartnoma, hisob-faktura, dalolatnoma) oladi. Mitti GO bu savdolarni hisobda aks ettiradi va O‘zbekiston Respublikasi Soliq kodeksiga muvofiq soliqlarni to‘laydi; QQS narxga kiritilgan-kiritilmagani shartnomada ko‘rsatiladi.",
      "Promokodlar ilova ichida sotilmaydi va ilova boshqa to‘lov usullariga yo‘naltirmaydi.",
      [
        "bitta kodni qurilmada bir marta faollashtirish mumkin; bir nechta kod qo‘shiladi, muddatsiz kod esa qolganlarini qoplaydi;",
        "kodning oxirgi faollashtirish kuni va faollashtirishlar limiti bo‘lishi mumkin;",
        "shartnoma yoki qonunda nazarda tutilgan hollardan tashqari kodni pulga almashtirib bo‘lmaydi;",
        "Mitti GO roziligisiz kodlarni qayta sotish mumkin emas;",
        "aldov yo‘li bilan olingan kod o‘chirib qo‘yilishi mumkin."
      ]
    ]},
    { id: "rules", h: "9. Nima qilish mumkin emas", body: [[
      "tarif limitlari, PIN yoki ilovaning boshqa cheklovlarini chetlab o‘tish;",
      "qonun bevosita ruxsat bergan hollardan tashqari ilovani qismlarga ajratish, o‘zgartirish va nusxalash;",
      "Mitti GO serveriga avtomatik so‘rovlar yuborish, uni haddan tashqari yuklash yoki boshqalarning ma’lumotlarini olishga urinish;",
      "Mitti GO’dan qonun yoki YouTube qoidalarini buzadigan tarzda foydalanish."
    ]]},
    { id: "ip", h: "10. Intellektual mulk", body: [
      "Ilova, uning dizayni, Mitti GO logotipi va maskoti Mitti GO’ga tegishli. Biz sizga ilovadan oilangiz uchun foydalanish bo‘yicha shaxsiy, mutlaq bo‘lmagan huquq beramiz. Videolar va kanal nomlari ularning egalariga tegishli."
    ]},
    { id: "liability", h: "11. Javobgarlik", body: [
      "Ilova «boricha» taqdim etiladi. Mitti GO ishonchli ishlashi uchun hamma narsani qilamiz, lekin uzilishsiz ishlashini kafolatlay olmaymiz: ko‘p narsa YouTube, internet va ilovalar do‘konlariga bog‘liq.",
      "O‘zbekiston Respublikasi qonunchiligi yo‘l qo‘ygan doirada Mitti GO YouTube videolari mazmuni, YouTube va Google qarorlari hamda bilvosita zarar uchun javob bermaydi. Qonunga ko‘ra cheklab bo‘lmaydigan iste’molchi huquqlari saqlanib qoladi."
    ]},
    { id: "end", h: "12. Foydalanishni to‘xtatish", body: [
      "Istalgan vaqtda ilovadan foydalanishni to‘xtatishingiz, akkaunt va ilovaning o‘zini o‘chirishingiz mumkin. Shartlar buzilganda, masalan promokodlar suiiste’mol qilinganda yoki xizmatga hujum bo‘lganda, biz serverga kirishni cheklashimiz mumkin."
    ]},
    { id: "law", h: "13. Qo‘llaniladigan huquq va nizolar", body: [
      "Ushbu shartlarga O‘zbekiston Respublikasi qonunchiligi qo‘llaniladi. Avval nizoni muzokaralar yo‘li bilan hal qilishga harakat qilamiz — bizga yozing. Kelishib bo‘lmasa, nizo O‘zbekiston Respublikasi qonunchiligiga muvofiq sudda ko‘riladi."
    ]},
    { id: "changes", h: "14. O‘zgarishlar", body: [
      "Ilova o‘zgarganda shartlarni yangilashimiz mumkin. Sahifa tepasidagi sana amaldagi tahrir qaysi kundan kuchga kirganini ko‘rsatadi. Muhim o‘zgarishlar haqida ilovada yoki saytda xabar beramiz. Ilovadan foydalanishda davom etsangiz, yangi tahrirga rozi bo‘lasiz."
    ]},
    { id: "contacts", h: "15. Aloqa", body: ["{{CONTACTS}}"] }
  ]
},

en: {
  title: "Mitti GO Terms of Use",
  desc: "Mitti GO Terms of Use: how the app works, the parent's part, the Free and Pro plans, payment through Google Play, promo codes under an agreement, taxes and liability.",
  crumb: "Terms of Use", eyebrow: "Legal", h1: "Terms of Use",
  lede: "The rules Mitti GO works by: what the app does, what the parent is responsible for, and how Pro, payments and promo codes work.",
  updated: "Effective from", toc: "Contents",
  sections: [
    { id: "accept", h: "1. Accepting these terms", body: [
      "These terms are an agreement between you and Mitti GO on using the Mitti GO app and the mitti-go.uz website. By installing or using the app you accept these terms and the {{PRIVACY}}. If you don't agree, don't use the app.",
      "Only an adult (18 or older) may use Mitti GO and accept these terms — a parent, legal guardian or another adult who sets the app up for a child."
    ]},
    { id: "service", h: "2. What Mitti GO is", body: [
      "Mitti GO is an app for parents. It shows the child YouTube videos only from the channels and playlists the parent allowed — a whole channel or single playlists; single videos can't be added. The parent area is protected by a PIN, and the kids' area has no comments, likes, subscriptions or ways out to YouTube.",
      "Mitti GO is not YouTube and not a Google service. It is not affiliated with or endorsed by Google LLC. YouTube is a trademark of Google LLC."
    ]},
    { id: "youtube", h: "3. YouTube videos", body: [
      "Videos belong to their creators and are shown through the YouTube API Services in YouTube's official player. Mitti GO doesn't store or change videos. By using Mitti GO you agree to the " + a(YT_TERMS, "YouTube Terms of Service") + " and the " + a(G_PRIVACY, "Google Privacy Policy") + ".",
      "YouTube may show its own ads in the player; Mitti GO doesn't hide or change them. A video may become unavailable by the creator's or YouTube's decision (for example, if the creator turned off playback in other apps) — Mitti GO then simply doesn't show it.",
      "Mitti GO doesn't review every video and isn't responsible for its content. You decide which channels and playlists to allow."
    ]},
    { id: "parent", h: "4. The parent's part", body: [[
      "choose the sources and check that they suit your child;",
      "keep the PIN secret and press Done before handing the device to the child — an open parent area doesn't lock by itself;",
      "remember that screen time and other tools help but don't replace adult supervision;",
      "use the app only for your own family."
    ]]},
    { id: "pin", h: "5. PIN and account", body: [
      "The PIN is stored only on the device. Without a connected account, a forgotten PIN can only be reset by reinstalling the app, which deletes all settings on the device. With a connected Google account the PIN is recovered after signing in again.",
      "A Google account is optional on Free and required for Pro and linked devices. You can delete the account in the app: Profile → Account."
    ]},
    { id: "plans", h: "6. Plans", body: [
      "<b>Free</b> costs nothing: up to 5 channels, up to 10 separate playlists and up to 3 devices including the parent's phone. Child protection, the PIN and every security feature are always free.",
      "<b>Pro</b> adds more channels, playlists and devices, Screen Time (daily limit, bedtime) and Learning. The exact numbers and prices are shown in the app and in the store at the time of purchase. Pro belongs to the Google account and survives a reinstall.",
      "<b>The trial</b> — 7 days of Pro for free, once per Google account and per device. Nothing is charged and nothing renews: afterwards you simply stay on Free.",
      "<b>When Pro ends</b>, nothing is deleted. For 3 days you can remove what you don't need; after that, everything above the Free limits is paused and comes back when Pro returns."
    ]},
    { id: "payments", h: "7. Paying through the store", body: [
      "Pro is bought in the app through Google Play (and the App Store once the app is there). The store takes the payment, renews the subscription and handles cancellations and refunds under its own rules. The subscription renews automatically until you cancel it. You can cancel any time in " + a(PLAY_SUBS, "Google Play → Subscriptions") + "; access stays until the end of the paid period.",
      "The price is shown in the store before you pay, in the store's currency and with the taxes the store applies in your country. Mitti GO receives the proceeds from the store minus its fee and pays tax on that income under the law of the Republic of Uzbekistan."
    ]},
    { id: "promo", h: "8. Promo codes", body: [
      "Promo codes are issued by Mitti GO. A code starts with “MITTI-” and gives Pro for the period set when it was issued (for example 1, 3, 6 or 12 months, or for good). It is entered in the app, in the parent area, after signing in with Google.",
      "<b>Buying under an agreement.</b> Promo codes can be bought from Mitti GO at agreed prices — by organisations (schools, kindergartens, companies, partners) and by individuals. The price, number of codes, their validity and how to pay are set out in the agreement or invoice. Payment is by bank transfer to Mitti GO's account in Uzbek soums, or another way stated in the agreement. The buyer receives the documents the agreement and the law provide for (agreement, invoice, act of acceptance). Mitti GO records these sales and pays taxes under the Tax Code of the Republic of Uzbekistan; whether VAT is included in the price is stated in the agreement.",
      "Promo codes are not sold inside the app, and the app doesn't send you to other ways of paying.",
      [
        "a code can be activated once per device; several codes add up, and a code “for good” covers the rest;",
        "a code may have a last activation day and an activation limit;",
        "a code can't be exchanged for money except where the agreement or the law provides for it;",
        "codes may not be resold without Mitti GO's consent;",
        "a code obtained by fraud may be switched off."
      ]
    ]},
    { id: "rules", h: "9. What you may not do", body: [[
      "get around plan limits, the PIN or other restrictions of the app;",
      "decompile, modify or copy the app, except where the law expressly allows it;",
      "send automated requests to the Mitti GO server, overload it or try to get other people's data;",
      "use Mitti GO in a way that breaks the law or YouTube's rules."
    ]]},
    { id: "ip", h: "10. Intellectual property", body: [
      "The app, its design, the Mitti GO logo and mascot belong to Mitti GO. We give you a personal, non-exclusive right to use the app for your family. Videos and channel names belong to their owners."
    ]},
    { id: "liability", h: "11. Liability", body: [
      "The app is provided “as is”. We do our best to keep Mitti GO reliable, but we can't promise it will work without interruption: a lot depends on YouTube, the internet and the app stores.",
      "To the extent the law of the Republic of Uzbekistan allows, Mitti GO is not liable for the content of YouTube videos, for decisions of YouTube and Google, or for indirect loss. Consumer rights that the law doesn't allow to be limited stay in force."
    ]},
    { id: "end", h: "12. Ending use", body: [
      "You can stop using the app, delete your account and the app at any time. We may limit access to the server if these terms are broken, for example when promo codes are abused or the service is attacked."
    ]},
    { id: "law", h: "13. Governing law and disputes", body: [
      "These terms are governed by the law of the Republic of Uzbekistan. We first try to settle a dispute by talking — write to us. If that doesn't work, the dispute goes to court under the law of the Republic of Uzbekistan."
    ]},
    { id: "changes", h: "14. Changes", body: [
      "We may update these terms when the app changes. The date at the top shows when the current version took effect. We'll tell you about significant changes in the app or on the website. If you keep using the app, you accept the new version."
    ]},
    { id: "contacts", h: "15. Contacts", body: ["{{CONTACTS}}"] }
  ]
}
};

/* {{PRIVACY}} / {{TERMS}} in running text, in the grammatical form the sentences above need; contact list labels. */
const LABELS = {
  ru: { PRIVACY: "Политику конфиденциальности", TERMS: "Условиями использования", owner: "Владелец сервиса", inn: "ИНН", address: "Адрес", email: "Почта",
    onRequest: "Реквизиты владельца сервиса сообщаем по запросу — напишите нам по любому из каналов ниже.", reply: "Отвечаем на обращения по данным в течение 30 дней." },
  uz: { PRIVACY: "Maxfiylik siyosati", TERMS: "Foydalanish shartlari", owner: "Xizmat egasi", inn: "STIR", address: "Manzil", email: "Pochta",
    onRequest: "Xizmat egasining rekvizitlarini so‘rov bo‘yicha taqdim etamiz — quyidagi istalgan kanal orqali yozing.", reply: "Ma’lumotlar bo‘yicha murojaatlarga 30 kun ichida javob beramiz." },
  en: { PRIVACY: "Privacy Policy", TERMS: "Terms of Use", owner: "Service owner", inn: "Tax ID", address: "Address", email: "E-mail",
    onRequest: "The service owner's details are available on request — write to us through any of the channels below.", reply: "We answer data requests within 30 days." }
};

module.exports = { OPERATOR, CONTACTS, UPDATED, LABELS, privacy, terms };
