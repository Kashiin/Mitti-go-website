(function(){
const MASCOT="assets/images/mascot.png";
const T={
uz:{
"nav.how":"Qanday ishlaydi","nav.model":"Ruxsatlar","nav.parents":"Ota-onalar uchun","nav.privacy":"Maxfiylik","nav.plans":"Tariflar","nav.faq":"Savollar",
"hero.eyebrow":"Siz tanlagan bolalar videolari","hero.title":"Kanallarni siz tanlaysiz. <em>Bola faqat ularni ko‘radi.</em>",
"hero.sub":"Mitti GO — YouTube asosidagi bolalar uchun yorqin va sodda ilova. Ota-ona kanal va pleylistlarga ruxsat beradi, bola esa faqat ularni ko‘radi — telefon, planshet va Android TV’da: tavsiyalar lentasi, izohlar va YouTube’ga chiqib ketish yo‘q.",
"hero.cta":"Qanday ishlaydi","soon":"Tez orada","hero.try":"Kanalni yoqing",
"demo.channels":"Kanallar","demo.shortsSub":"Odatda o‘chiq","demo.sample":"Bu yerdagi kanal va videolar — namuna",
"s1.t":"Ko‘rishlar va layklar yo‘q","s1.p":"Rasm, nom va davomiylik — mashhurlik hisoblagichlarisiz.",
"s2.t":"Pleyerdan chiqib bo‘lmaydi","s2.p":"Logotip, havolalar, video oxiridagi tavsiyalar — YouTube’ga barcha o‘tishlar jimgina bloklanadi.",
"s3.t":"Qidiruv faqat o‘zinikida","s3.p":"Faqat ota-ona qo‘shgan narsalar ichidan, to‘g‘ridan-to‘g‘ri qurilmada qidiradi.",
"s4.t":"Bizning reklamamiz yo‘q","s4.p":"Mitti GO reklama ko‘rsatmaydi. YouTube pleerining o‘zidagi reklamani yashirmaymiz — buni YouTube qoidalari talab qiladi.",
"how.e":"Bir-ikki daqiqada sozlash","how.t":"Uch qadam — va tomosha qilish mumkin",
"h1.t":"Tilni tanlang","h1.p":"Butun ilova va kanallar tanlovi uchun.",
"h2.t":"PIN o‘ylab toping","h2.p":"To‘rt raqam ota-onalar bo‘limini yopadi. Bolalar qismi PIN’siz ochiladi.",
"h3.t":"Kanallar qo‘shing","h3.p":"Mitti GO tanlovidan yoki o‘zingiznikini — nomi, @nomi yoki havolasi bo‘yicha. Bu qadamni o‘tkazib yuborish mumkin.",
"h4.t":"Telefonni bolaga bering","h4.p":"U faqat siz tanlagan narsani ko‘radi. Bu kanallardagi yangi videolar o‘zi paydo bo‘ladi.",
"m.e":"Ruxsatlar qanday ishlaydi","m.t":"Butun kanal yoki faqat kerakli pleylistlar","m.s":"Alohida videolar qo‘shilmaydi — faqat kanallar va pleylistlar. Shunday kuzatish oson, ruxsat berilgan mualliflarning yangi videolari esa o‘zi paydo bo‘ladi.",
"m1.t":"Butun kanal","m1.p":"Kanalning barcha videolari va pleylistlari ruxsat etiladi. Siz ishonadigan mualliflar uchun. Bepul — 5 tagacha kanal.",
"m2.t":"Faqat pleylistlar","m2.p":"Aniq bir pleylistga ruxsat berasiz, kanalning qolgan qismi yopiq qoladi. Bepul — 10 tagacha pleylist.",
"m3.t":"Pleylistni yashirish","m3.p":"Qo‘shilgan kanaldagi pleylist yoqmadimi? Uni yashiring — bu videolar bolada hamma joydan yo‘qoladi.",
"t.added":"Kanal qo‘shilgan","t.note":"Pleylistni yoqish yoki yashirish uchun belgini bosing. Yashirin pleylistlar limitga kirmaydi.",
"fav":"Yulduzcha — bu Sevimlilar: kanal bolada birinchi turadi. U ruxsat bermaydi va limitga kirmaydi.",
"k.e":"Bola uchun","k.t":"Hali o‘qiy olmaydiganlarga ham tushunarli","k.s":"Katta rasmlar, yirik tugmalar va so‘z o‘rniga belgilar. Kichkintoylar uchun oson, kattaroqlar uchun esa «go‘dakona» emas.",
"k1.t":"Har qatorda bitta katta video","k1.p":"Karusellar va cheksiz javonlarsiz. Tepada — bola oxirigacha ko‘rmagan video.",
"k2.t":"Shorts — faqat siz qaror qilsangiz","k2.p":"Odatda o‘chiq. Yoqsangiz — umumiy lentasiz, faqat ruxsat berilgan kanallarning Shorts’lari chiqadi.",
"k3.t":"Avtoijro o‘chiq","k3.p":"Keyingi videoni bola o‘zi tanlaydi. Boshqacha xohlasangiz — sozlamalarda yoqing.",
"k4.t":"Qo‘rqinchli narsa yo‘q","k4.p":"Biror narsaga ruxsat bekor qilinsa, u shunchaki jimgina yo‘qoladi. «Ota-ona tomonidan bloklangan» yozuvlari yo‘q.",
"p.e":"Ota-onalar uchun","p.t":"PIN-kod ortidagi xotirjam boshqaruv","p.s":"Ota-onalar bo‘limi «Profil» yorlig‘idan ochiladi. Ichida hammasi qo‘l ostida: kontent, Shorts, til, mavzu, xavfsizlik.",
"p1.t":"PIN yoki biometriya","p1.p":"Barmoq izi yoki Face ID — ixtiyoriy. PIN har doim zaxira kalit bo‘lib qoladi.",
"p2.t":"«Tayyor» hammasini yopadi","p2.p":"«Tayyor»ni bosdingiz, bolalar qismiga o‘tdingiz yoki ilovani yig‘dingiz — bo‘lim darhol yopiladi.",
"p3.t":"PIN’ni terib topib bo‘lmaydi","p3.p":"Besh marta noto‘g‘ri urinishdan so‘ng klaviatura pauza qiladi. Qayta ishga tushirish yoki vaqtni o‘zgartirish uni bekor qilmaydi.",
"p4.t":"Hammasi darhol ko‘rinadi","p4.p":"«3 / 5» kabi hisoblagichlar va tushunarli belgilar: Ko‘rinadi, Yashirin, Pauzada.",
"d.title":"Ota-ona","d.done":"Tayyor","d.mc":"Kontentni boshqarish","d.mcv":"3 kanal • 4 pleylist","d.g1":"Bola uchun","d.shv":"O‘chiq","d.pb":"Ijro","d.pbv":"Avtoijro o‘chiq","d.st":"Ekran vaqti","d.stv":"Kuniga 1 soat 30 daqiqa","d.g2":"Ilova va himoya","d.lg":"Til","d.lgv":"O‘zbekcha","d.sec":"Xavfsizlik","d.secv":"PIN yoqilgan • Face ID o‘chiq","d.foot":"Telefonni bolaga berishdan oldin «Tayyor»ni bosing — bu ota-onalar bo‘limini yopadi.",
"q.e":"Maxfiylik","q.t":"Biz bola haqida hech narsa to‘plamaymiz",
"q1.t":"Bola profili yo‘q","q1.p":"Ism ham, rasm ham, tug‘ilgan sana ham yo‘q.",
"q2.t":"Hammasi telefonda qoladi","q2.p":"Ko‘rish tarixi, jarayon va bolaning qidiruvlari hech qayerga yuborilmaydi.",
"q3.t":"PIN ishonchli shifrlangan","q3.p":"Qurilmaning himoyalangan xotirasida saqlanadi va hech qayerda qayd etilmaydi.",
"q4.t":"Faqat anonim statistika","q4.p":"Masalan, «kanal qo‘shildi». Reklama identifikatorlarisiz va bola nima ko‘rgani haqida ma’lumotsiz.",
"pl.e":"Tariflar","pl.t":"Eng asosiysi — bepul","pl.s":"Himoya va xavfsizlik hech qachon pullik bo‘lmaydi. Pro ekran vaqtini qo‘shadi.",
"pl.free":"Bepul","pl.ch":"Kanallar","pl.pl":"Pleylistlar","f1":"5 ta butun kanal","f2":"10 ta alohida pleylist","f3":"Qo‘shilgan kanallar pleylistlari, yashirish va Sevimlilar — cheklovsiz","f4":"PIN, biometriya va barcha himoya",
"pl.price":"Narxlar — ishga tushirishda","r1":"Ekran vaqti: kunlik limit","r2":"Joriy videoni tugatish — ustiga 15 daqiqagacha","r3":"Uyqu rejimi: ish va dam olish kunlari uchun alohida","r4":"Uxlayotgan maskot bilan yumshoq «Vaqt tugadi» ekrani",
"pl.note":"Bola hech qachon «Pro» va «limit» so‘zlarini ko‘rmaydi. Pro limitlari va narxlarini alohida e’lon qilamiz.",
"fq.e":"Savollar","fq.t":"Ota-onalar odatda nimani so‘rashadi",
"fq1.q":"Butun kanalsiz pleylist qo‘shish mumkinmi?","fq1.a":"Ha. «Faqat pleylistlar»ni tanlang — kanalning qolgan qismi yopiq qoladi va bola uning sahifasini ocha olmaydi.",
"fq2.q":"Bitta videoga ruxsat berish yoki taqiqlash mumkinmi?","fq2.a":"Yo‘q, faqat kanallar va pleylistlar. Shunday kuzatish oson, yangi videolar esa o‘zi paydo bo‘ladi. Kanalda ortiqcha pleylist bo‘lsa — uni yashiring.",
"fq3.q":"Yulduzcha nima qiladi?","fq3.a":"Bu Sevimlilar: kanal bolaning bosh sahifasi va kutubxonasida birinchi turadi. Yulduzcha ruxsat bermaydi va limitga kirmaydi.",
"fq4.q":"PIN’ni unutib qo‘ysam-chi?","fq4.a":"Ilova ichida chetlab o‘tish yo‘li yo‘q — aynan shu bolalardan himoya qiladi. Ilovani qayta o‘rnating: u noldan boshlanadi, kanallarni qaytadan qo‘shish kerak bo‘ladi.",
"fq5.q":"Internet kerakmi?","fq5.a":"Tomosha qilish va kanal qo‘shish uchun — ha. Kanalni olib tashlash, pleylistni yashirish yoki yulduzcha qo‘yish internetsiz ham ishlaydi. Internetsiz bola saqlangan ro‘yxatni ko‘radi.",
"fq6.q":"Qaysi qurilmalarda ishlaydi?","fq6.a":"Android va iOS, telefon va planshetlar, shuningdek Android TV. Planshetda — ikki ustun video va yon tomonda «Keyingi» ro‘yxati bilan pleyer. Yorug‘ va qorong‘i mavzu bor.",
"n1":"ta kanal bepul","n2":"ta pleylist bepul","n3":"ta interfeys tili",
"cmp.e":"Nega oddiy YouTube emas","cmp.t":"YouTube kattalar uchun yaratilgan. Mitti GO — farzandingiz uchun.","cmp.s":"Oddiy YouTube ilovasi tomoshabinni uzoqroq ushlab turishga intiladi. Mitti GO buning aksini qiladi: faqat siz tanlaganni ko‘rsatadi va ko‘proq ko‘rishga undamaydi.",
"cmp.yt":"Oddiy YouTube","c1":"Bola nimani ko‘radi","c1y":"Algoritm tanlagan hamma narsani","c1m":"Faqat siz ruxsat bergan kanal va pleylistlarni","c2":"Qidiruv","c2y":"Butun YouTube bo‘yicha","c2m":"Faqat kutubxonangiz bo‘yicha, qurilmaning o‘zida","c3":"Keyingi video","c3y":"Tavsiyalar istalgan joyga olib ketishi mumkin","c3m":"Faqat ruxsat etilgani, avtoijro o‘chiq","c4":"Izohlar, layklar, ko‘rishlar","c4y":"Hamma joyda","c4m":"Hech qayerda","c5y":"Cheksiz umumiy lenta","c5m":"O‘chiq; yoqilsa — faqat sizning kanallaringizdan","c6":"Tashqariga o‘tish","c6y":"Havolalar, boshqa kanallar, boshqa ilovalar","c6m":"Hammasi bloklangan",
"pv.e":"Pleyer","pv.t":"Tomosha qilish — ha. YouTube’ga ketish — yo‘q.","pv.s":"Video rasmiy YouTube pleerida ijro etiladi, Mitti GO esa undan barcha chiqish yo‘llarini yopadi.",
"pv1.t":"Video oxirida o‘z ekrani","pv1.p":"«Yana» va keyingi videolar — faqat ruxsat etilganlardan. YouTube tavsiyalari bosilmaydi.","pv2.t":"«Keyingi» — mazmunga ko‘ra","pv2.p":"Pleylist ko‘ryapti — keyin shu pleylist davom etadi. Kanalni ochdi — shu kanal videolari.","pv3.t":"Qayerda to‘xtaganini eslaydi","pv3.p":"Oxirigacha ko‘rilmagan video bosh sahifada «Davom etish» belgisi bilan birinchi turadi.","pv4.t":"Yig‘ilganda pauza","pv4.p":"Ilovani yig‘dingiz — video pauzada. Telefonni burdingiz — to‘liq ekran.",
"pm.again":"Yana","pm.next":"Keyingisi","pm.up":"Keyingi",
"st.e":"Ekran vaqti · Pro","st.t":"Multfilm o‘rtasida emas, yumshoq yakunlaymiz","st.s":"Ekran vaqti — Pro’ning bir qismi. Bepul tarifda hech narsa hisoblanmaydi va hech narsa bloklanmaydi.",
"st1.t":"Kunlik limit","st1.p":"Kuniga qancha ko‘rish mumkin. Yarim tunda nolga tushadi.","m.off":"O‘chiq","m.own":"O‘zingiz…","st2.t":"5 daqiqa oldin ogohlantirish","st2.p":"Maskot «Tez orada tanaffus!» deydi — orqaga sanashsiz va videoni yopmasdan.","st3.t":"Oxirigacha ko‘rish mumkin","st3.p":"Vaqt video o‘rtasida tugasa, uni oxirigacha ko‘rish mumkin — ustiga 15 daqiqadan oshmasdan.","st4.t":"Uyqu rejimi","st4.p":"Ruxsat etilgan soatlar, masalan 08:00–20:00 — ish va dam olish kunlari uchun alohida.","st5.t":"Vaqt halol hisoblanadi","st5.p":"Faqat bolalar ekranlaridagi vaqt hisoblanadi. Telefondagi soatni o‘zgartirish limitni tiklamaydi.",
"tu.t":"Vaqt tugadi! Ertaga ko‘rishamiz.","tu.for":"Ota-onalar uchun","tu.ext":"Ota-ona bugun uchun vaqt qo‘shishi mumkin:","tu.e1":"+15 daq","tu.e2":"+30 daq","tu.e3":"+1 soat","tu.e4":"Bugun cheklovsiz",
"lim2.t":"Limitga yetdingiz","lim2.p":"Yangi qo‘shib bo‘lmaydi, lekin hammasini boshqarish mumkin: yashirish, yulduzcha qo‘yish, o‘chirish. Yoki butun kanal o‘rniga alohida pleylistlarni tanlang.","lim.t":"Pro tugasa","lim.p":"Hech narsa o‘chirilmaydi. Qaysi 5 kanal va 10 pleylist qolishini tanlash uchun 7 kuningiz bo‘ladi. Qolganlari pauzaga qo‘yiladi va uzaytirilganda qaytadi.",
"dv.e":"Qurilmalar va tillar","dv0.p":"O‘sha ruxsat etilgan kanallar — katta ekranda. Hammasi pult bilan boshqariladi: yo‘nalish tugmalari va OK, tanlangan kartochka aniq ramka bilan ajraladi. Ortiqcha menyular va YouTube’ga chiqishlar yo‘q.","dv.t":"Telefon, planshet, televizor — va uch til","dv1.t":"Android va iOS","dv1.p":"Telefon va planshetlar. Planshetda — ikki ustun video va yon tomonda «Keyingi» ro‘yxatli pleyer.","dv2.p":"Ilova tili va kanallar tanlovi tili alohida sozlanadi — ikki tilli oilalar uchun qulay.","dv3.t":"Yorug‘ va qorong‘i mavzu","dv3.p":"Tizimdagidek, yorug‘ yoki qorong‘i — butun ilova uchun darhol, bola uchun ham, ota-ona uchun ham.","dv4.t":"Tarmoqsiz ham bo‘sh emas","dv4.p":"Qo‘shilganlar ro‘yxati internetsiz ham ko‘rinadi, kanalni olib tashlash yoki pleylistni yashirish oflayn ishlaydi.",
"fq7.q":"Bola reklama ko‘radimi?","fq7.a":"Mitti GO o‘zi reklama ko‘rsatmaydi. YouTube o‘z pleerida ba’zan ko‘rsatadigan reklama qoladi: uni yashirishni YouTube qoidalari taqiqlaydi.","fq8.q":"Shorts’ni qanday o‘chirish mumkin?","fq8.a":"Ular boshidanoq o‘chiq. «Profil» → Shorts bo‘limida yoqish yoki o‘chirish mumkin, shuningdek har bir kanal uchun alohida.","fq9.q":"Kanalni o‘chirib, bir nechta pleylistni qoldirsa bo‘ladimi?","fq9.a":"Ha: «O‘chirish» → «Ba’zi pleylistlarni qoldirish». Belgilangan pleylistlar alohida qoladi va yulduzchasini saqlaydi.","fq10.q":"Video ishga tushmayapti — nima qilish kerak?","fq10.a":"Ba’zi mualliflar videolarini boshqa ilovalarda ko‘rsatishni taqiqlaydi, jonli efirlar esa qo‘llab-quvvatlanmaydi — Mitti GO bunday videolarni shunchaki ko‘rsatmaydi. Video yuklanmasa, internetni tekshiring va «Qayta urinish»ni bosing.",
"e.t":"Mitti GO tez orada do‘konlarda","e.s":"Ilova Google Play va App Store’da ishga tushirishga tayyorlanmoqda. Xavfsiz kontent — baxtli bolalar.",
"ft":"O‘zbekistondagi oilalar uchun yaratilgan. YouTube — Google LLC’ning savdo belgisi."
},
en:{
"nav.how":"How it works","nav.model":"Permissions","nav.parents":"For parents","nav.privacy":"Privacy","nav.plans":"Plans","nav.faq":"FAQ",
"hero.eyebrow":"Kids' video, chosen by you","hero.title":"You pick the channels. <em>Your child sees only those.</em>",
"hero.sub":"Mitti GO is a bright, simple app for kids, built on YouTube. Parents allow channels and playlists, and the child sees only those — on phone, tablet and Android TV. No recommendation feed, no comments, no way out to YouTube.",
"hero.cta":"How it works","soon":"Coming soon","hero.try":"Switch a channel on",
"demo.channels":"Channels","demo.shortsSub":"Off by default","demo.sample":"Channels and videos here are examples",
"s1.t":"No views, no likes","s1.p":"A picture, a title and a duration — and no popularity counters.",
"s2.t":"No way out of the player","s2.p":"Logo, links, end-screen suggestions — every jump to YouTube is quietly blocked.",
"s3.t":"Search stays inside","s3.p":"It looks only through what a parent added, right on the device.",
"s4.t":"No ads from us","s4.p":"Mitti GO shows no ads. Ads inside YouTube's own player stay as they are — YouTube's rules require it.",
"how.e":"Set up in a couple of minutes","how.t":"Three steps, then press play",
"h1.t":"Pick a language","h1.p":"For the whole app — and for channel suggestions.",
"h2.t":"Create a PIN","h2.p":"Four digits lock the parent area. The child's side opens without one.",
"h3.t":"Add channels","h3.p":"From Mitti GO's suggestions or your own — by name, @handle or link. You can skip this step.",
"h4.t":"Hand the phone over","h4.p":"Your child sees only what you chose. New videos from those channels appear on their own.",
"m.e":"How permissions work","m.t":"A whole channel, or just the playlists you want","m.s":"Single videos can't be added — only channels and playlists. It's easier to keep track, and new videos from allowed sources appear on their own.",
"m1.t":"Whole channel","m1.p":"Every video and playlist on the channel is allowed. For creators you trust. Free: up to 5 channels.",
"m2.t":"Playlists only","m2.p":"Allow one playlist; the rest of the channel stays closed. Free: up to 10 playlists.",
"m3.t":"Hide a playlist","m3.p":"Don't like a playlist on an added channel? Hide it — those videos disappear everywhere for your child.",
"t.added":"Channel added","t.note":"Tap a pill to include or hide a playlist. Hidden playlists don't count toward limits.",
"fav":"The star is a Favorite: the channel comes first for your child. It grants nothing and doesn't count toward limits.",
"k.e":"For your child","k.t":"Clear even before they can read","k.s":"Big pictures, big buttons and icons instead of words. Easy for little ones, never babyish for older kids.",
"k1.t":"One big video per row","k1.p":"No carousels, no endless shelves. The unfinished video sits on top.",
"k2.t":"Shorts only if you say so","k2.p":"Off by default. Turn them on and only Shorts from allowed channels appear — never a global feed.",
"k3.t":"Autoplay is off","k3.p":"Your child picks what plays next. Prefer otherwise? Switch it on in settings.",
"k4.t":"Nothing scary","k4.p":"When something is no longer allowed, it simply disappears. No “Blocked by your parent”.",
"p.e":"For parents","p.t":"A calm control centre behind a PIN","p.s":"The parent area opens from the Profile tab. Everything is at hand: content, Shorts, language, theme, security.",
"p1.t":"PIN or biometrics","p1.p":"Fingerprint or Face ID if you like. The PIN is always the fallback.",
"p2.t":"Done locks everything","p2.p":"Press Done, step into the child area or leave the app — the parent area locks at once.",
"p3.t":"Guessing doesn't work","p3.p":"After five wrong tries the keypad pauses. A restart or a clock change won't reset it.",
"p4.t":"Everything at a glance","p4.p":"Counters like “3 / 5” and plain labels: Included, Hidden, Paused.",
"d.title":"Parent","d.done":"Done","d.mc":"Manage Content","d.mcv":"3 channels • 4 playlists","d.g1":"Child experience","d.shv":"Off","d.pb":"Playback","d.pbv":"Autoplay off","d.st":"Screen Time","d.stv":"1 h 30 m a day","d.g2":"App & security","d.lg":"Language","d.lgv":"English","d.sec":"Security","d.secv":"PIN on • Face ID off","d.foot":"Press Done before handing the phone back — it locks the parent area.",
"q.e":"Privacy","q.t":"We collect nothing about your child",
"q1.t":"No child profile","q1.p":"No name, no photo, no birthday.",
"q2.t":"It stays on the phone","q2.p":"Watch history, progress and your child's searches never leave the device.",
"q3.t":"The PIN is protected","q3.p":"Kept hashed in the device's secure storage and never logged.",
"q4.t":"Anonymous stats only","q4.p":"Things like “channel added”. No ad IDs, and nothing about what your child watched.",
"pl.e":"Plans","pl.t":"The essentials are free","pl.s":"Protection and security are never behind a paywall. Pro adds Screen Time.",
"pl.free":"Free","pl.ch":"Channels","pl.pl":"Playlists","f1":"5 whole channels","f2":"10 separate playlists","f3":"Playlists of added channels, hiding and Favorites — unlimited","f4":"PIN, biometrics and every security feature",
"pl.price":"Pricing at launch","r1":"Screen Time: a daily limit","r2":"Finish the current video — up to 15 extra minutes","r3":"Bedtime, with separate weekday and weekend hours","r4":"A gentle Time's Up screen with the sleeping mascot",
"pl.note":"Your child never sees the words “Pro” or “limit”. Pro limits and pricing will be announced separately.",
"fq.e":"FAQ","fq.t":"What parents usually ask",
"fq1.q":"Can I add playlists without the whole channel?","fq1.a":"Yes. Choose “Playlists only” — the rest of the channel stays closed and your child can't open its page.",
"fq2.q":"Can I allow or block a single video?","fq2.a":"No — only channels and playlists. It's easier to keep track, and new videos arrive on their own. If a channel has a playlist you don't want, hide it.",
"fq3.q":"What does the star do?","fq3.a":"It's a Favorite: the channel comes first on your child's Home and Library. A star grants nothing and doesn't count toward limits.",
"fq4.q":"What if I forget my PIN?","fq4.a":"There's no back door inside the app — that's exactly what keeps kids out. Reinstall it: Mitti GO starts fresh and you add your channels again.",
"fq5.q":"Does it need the internet?","fq5.a":"To watch and to add channels — yes. Removing a channel, hiding a playlist or starring work offline. Offline, your child sees the list that's already saved.",
"fq6.q":"Which devices does it run on?","fq6.a":"Android and iOS, phones and tablets, plus Android TV. On a tablet you get two columns of videos and the player with Up Next beside it. Light and dark themes included.",
"n1":"channels on Free","n2":"playlists on Free","n3":"app languages",
"cmp.e":"Why not just YouTube","cmp.t":"YouTube is built for grown-ups. Mitti GO is built for your child.","cmp.s":"The regular YouTube app is designed to keep people watching. Mitti GO does the opposite: it shows only what you chose and never nudges for more.",
"cmp.yt":"Regular YouTube","c1":"What your child sees","c1y":"Whatever the algorithm picks","c1m":"Only the channels and playlists you allowed","c2":"Search","c2y":"All of YouTube","c2m":"Only your library, right on the device","c3":"What plays next","c3y":"Suggestions can lead anywhere","c3m":"Only allowed videos, autoplay off","c4":"Comments, likes, views","c4y":"Everywhere","c4m":"Nowhere","c5y":"An endless global feed","c5m":"Off; if on, only from your channels","c6":"Links out","c6y":"Links, other channels, other apps","c6m":"All blocked",
"pv.e":"The player","pv.t":"Watch, yes. Wander off to YouTube, no.","pv.s":"Videos play in YouTube's official player, and Mitti GO closes every way out of it.",
"pv1.t":"Our own end screen","pv1.p":"\u201cWatch again\u201d and what's next — only from allowed videos. YouTube's suggestions can't be tapped.","pv2.t":"Up Next that makes sense","pv2.p":"Watching a playlist? The playlist continues. Opened a channel? That channel's videos.","pv3.t":"Remembers where they stopped","pv3.p":"The unfinished video waits first on Home with a Keep watching tag.","pv4.t":"Pauses in the background","pv4.p":"Leave the app and the video pauses. Turn the phone for full screen.",
"pm.again":"Watch again","pm.next":"Play next","pm.up":"Up next",
"st.e":"Screen Time · Pro","st.t":"A gentle goodbye, not a cut-off mid-cartoon","st.s":"Screen Time is part of Pro. On Free nothing is counted and nothing is locked.",
"st1.t":"Daily limit","st1.p":"How long your child can watch each day. Resets at midnight.","m.off":"Off","m.own":"Custom…","st2.t":"A 5-minute heads-up","st2.p":"The mascot says \u201cAlmost time for a break!\u201d — no countdown, never over the video.","st3.t":"They can finish","st3.p":"If time runs out mid-video, it may finish — up to 15 extra minutes.","st4.t":"Bedtime","st4.p":"Allowed hours like 08:00–20:00, separate for weekdays and weekends.","st5.t":"Honest counting","st5.p":"Only time on the child's screens counts. Changing the phone's clock won't reset it.",
"tu.t":"Time's up for today! See you tomorrow.","tu.for":"For parents","tu.ext":"A parent can add time for today:","tu.e1":"+15 min","tu.e2":"+30 min","tu.e3":"+1 hour","tu.e4":"No limit today",
"lim2.t":"Hit the limit","lim2.p":"You can't add more, but you can still manage everything: hide, star, remove. Or pick separate playlists instead of a whole channel.","lim.t":"If Pro ends","lim.p":"Nothing is deleted. You get 7 days to choose which 5 channels and 10 playlists stay. The rest are paused and come back when you renew.",
"dv.e":"Devices & languages","dv0.p":"The same allowed channels, on the big screen. Everything works with the remote: the D-pad and OK, with a clear frame around the selected card. No extra menus, no way out to YouTube.","dv.t":"Phone, tablet, TV — and three languages","dv1.t":"Android and iOS","dv1.p":"Phones and tablets. On a tablet: two columns of videos and the player with Up Next beside it.","dv2.p":"The app language and the suggestions language are set separately — handy for bilingual families.","dv3.t":"Light and dark themes","dv3.p":"Follow the system, or pick light or dark — for the whole app at once, child and parent sides alike.","dv4.t":"Offline isn't empty","dv4.p":"Your saved list shows without internet, and removing a channel or hiding a playlist works offline.",
"fq7.q":"Will my child see ads?","fq7.a":"Mitti GO shows no ads of its own. Ads YouTube sometimes plays inside its player stay — YouTube's rules forbid hiding them.","fq8.q":"How do I turn Shorts off?","fq8.a":"They're off from the start. Switch them in Profile → Shorts, and separately for each channel.","fq9.q":"Can I remove a channel but keep a few playlists?","fq9.a":"Yes: Remove → Keep some playlists. The ones you tick stay as separate items and keep their star.","fq10.q":"A video won't play — what now?","fq10.a":"Some creators don't allow their videos in other apps, and live streams aren't supported — Mitti GO simply doesn't show those. If a video won't load, check the connection and tap Try again.",
"e.t":"Mitti GO is coming soon","e.s":"The app is getting ready for Google Play and the App Store. Safe content, happy kids.",
"ft":"Made for families in Uzbekistan. YouTube is a trademark of Google LLC."
}};
const UI={
 ru:{all:"Все",keep:"Продолжить",empty:"Пока нечего смотреть",emptySub:"Попросите родителя добавить каналы",tabs:["Главная","Shorts","Библиотека","Профиль"],inc:"Включён",hid:"Скрыт",vids:"видео"},
 uz:{all:"Hammasi",keep:"Davom etish",empty:"Hozircha ko‘radigan narsa yo‘q",emptySub:"Ota-onangizdan kanal qo‘shishni so‘rang",tabs:["Bosh sahifa","Shorts","Kutubxona","Profil"],inc:"Ko‘rinadi",hid:"Yashirin",vids:"video"},
 en:{all:"All",keep:"Keep watching",empty:"Nothing to watch yet",emptySub:"Ask a parent to add channels",tabs:["Home","Shorts","Library","Profile"],inc:"Included",hid:"Hidden",vids:"videos"}
};
const CH=[
 {id:"stars",c:"#0078FF",ring:"#9CCBFF",ic:"rocket_launch",on:true,fav:true,n:{ru:"Звёздная лаборатория",uz:"Yulduzli laboratoriya",en:"Star Lab"},
  v:[{t:{ru:"Почему Луна меняет форму?",uz:"Nega Oy shaklini o‘zgartiradi?",en:"Why does the Moon change shape?"},d:"7:12",age:3,resume:true,art:"moon"},
     {t:{ru:"Строим ракету из картона",uz:"Kartondan raketa yasaymiz",en:"Building a cardboard rocket"},d:"9:40",age:6,art:"rocket"}]},
 {id:"draw",c:"#956DFB",ring:"#CDB9FD",ic:"brush",on:false,n:{ru:"Рисуем вместе",uz:"Birga chizamiz",en:"Let's Draw"},
  v:[{t:{ru:"Рисуем кита за 5 шагов",uz:"5 qadamda kit chizamiz",en:"Draw a whale in 5 steps"},d:"6:05",age:1,art:"whale"},
     {t:{ru:"Радуга из акварели",uz:"Akvareldan kamalak",en:"A watercolour rainbow"},d:"8:31",age:7,art:"rainbow"}]},
 {id:"abc",c:"#16C869",ring:"#9BE8BE",ic:"abc",on:true,n:{ru:"Весёлый алфавит",uz:"Quvnoq alifbo",en:"Happy Alphabet"},
  v:[{t:{ru:"Песенка про букву А",uz:"A harfi haqida qo‘shiq",en:"A song about the letter A"},d:"3:18",age:2,art:"letter"},
     {t:{ru:"Считаем до десяти",uz:"O‘ngacha sanaymiz",en:"Counting to ten"},d:"4:50",age:5,art:"dots"}]},
 {id:"forest",c:"#00B1FE",ring:"#99DFFF",ic:"forest",on:false,n:{ru:"Лесные друзья",uz:"O‘rmon do‘stlari",en:"Forest Friends"},
  v:[{t:{ru:"Как ёжик готовится к зиме",uz:"Tipratikan qishga qanday tayyorlanadi",en:"How a hedgehog gets ready for winter"},d:"5:47",age:4,art:"hill"},
     {t:{ru:"Кто живёт в дупле?",uz:"Kovakda kim yashaydi?",en:"Who lives in the hollow tree?"},d:"6:22",age:8,art:"tree"}]}
];
const PL=[
 {n:{ru:"Космос для малышей",uz:"Kichkintoylar uchun koinot",en:"Space for little ones"},on:true},
 {n:{ru:"Опыты на кухне",uz:"Oshxonadagi tajribalar",en:"Kitchen experiments"},on:true},
 {n:{ru:"Вулканы и землетрясения",uz:"Vulqonlar va zilzilalar",en:"Volcanoes and earthquakes"},on:false}
];
let lang="ru", shorts=false, filter="all";
const ruCache={};
document.querySelectorAll("[data-i]").forEach(el=>{ruCache[el.dataset.i]=el.innerHTML});

const ART={
 moon:(c)=>`<rect width="160" height="90" fill="#172B6B"/><circle cx="30" cy="20" r="1.6" fill="#fff"/><circle cx="60" cy="12" r="1.2" fill="#fff"/><circle cx="130" cy="18" r="1.6" fill="#fff"/><circle cx="118" cy="70" r="1.2" fill="#fff"/><circle cx="80" cy="46" r="24" fill="#FEBE06"/><circle cx="92" cy="40" r="22" fill="#172B6B"/><circle cx="40" cy="64" r="3" fill="#0DD1FE"/>`,
 rocket:(c)=>`<rect width="160" height="90" fill="#EEF5FD"/><circle cx="130" cy="20" r="30" fill="#CFE4FF"/><path d="M80 14c12 10 14 30 10 46H70c-4-16-2-36 10-46z" fill="#0078FF"/><circle cx="80" cy="36" r="6" fill="#fff"/><path d="M70 56l-10 12 12-2zM90 56l10 12-12-2z" fill="#16C869"/><path d="M74 62h12l-6 16z" fill="#FEBE06"/>`,
 whale:(c)=>`<rect width="160" height="90" fill="#F3EEFE"/><path d="M0 70q20-8 40 0t40 0 40 0 40 0V90H0z" fill="#CDB9FD"/><ellipse cx="78" cy="50" rx="34" ry="20" fill="#956DFB"/><path d="M110 46l18-12-4 18z" fill="#956DFB"/><circle cx="62" cy="46" r="3" fill="#fff"/><path d="M74 26q0-10 6-12M74 26q-6-8-12-8" stroke="#0DD1FE" stroke-width="3" fill="none" stroke-linecap="round"/>`,
 rainbow:(c)=>`<rect width="160" height="90" fill="#FFF6E0"/><path d="M30 80a50 50 0 0 1 100 0" stroke="#F2609B" stroke-width="9" fill="none"/><path d="M40 80a40 40 0 0 1 80 0" stroke="#FEBE06" stroke-width="9" fill="none"/><path d="M50 80a30 30 0 0 1 60 0" stroke="#16C869" stroke-width="9" fill="none"/><path d="M60 80a20 20 0 0 1 40 0" stroke="#0078FF" stroke-width="9" fill="none"/>`,
 letter:(c)=>`<rect width="160" height="90" fill="#E9F9F0"/><circle cx="30" cy="22" r="10" fill="#FEBE06"/><circle cx="138" cy="70" r="14" fill="#9BE8BE"/><text x="80" y="70" text-anchor="middle" font-family="Nunito,sans-serif" font-weight="900" font-size="64" fill="#16C869">A</text>`,
 dots:(c)=>`<rect width="160" height="90" fill="#E6F8FB"/>${[0,1,2,3,4].map(i=>`<circle cx="${32+i*24}" cy="34" r="8" fill="${["#0078FF","#16C869","#FEBE06","#956DFB","#F2609B"][i]}"/><circle cx="${32+i*24}" cy="60" r="8" fill="${["#F2609B","#956DFB","#FEBE06","#16C869","#0078FF"][i]}"/>`).join("")}`,
 hill:(c)=>`<rect width="160" height="90" fill="#E6F8FB"/><circle cx="128" cy="22" r="12" fill="#FEBE06"/><path d="M0 70q40-30 80-6t80-4V90H0z" fill="#16C869"/><ellipse cx="66" cy="62" rx="16" ry="10" fill="#8A5A2B"/><circle cx="80" cy="62" r="6" fill="#C98B55"/><circle cx="82" cy="60" r="1.5" fill="#1b1b1b"/>`,
 tree:(c)=>`<rect width="160" height="90" fill="#E9F9F0"/><rect x="70" y="40" width="20" height="50" rx="6" fill="#8A5A2B"/><circle cx="80" cy="32" r="26" fill="#16C869"/><circle cx="60" cy="40" r="14" fill="#12A85A"/><circle cx="100" cy="40" r="14" fill="#12A85A"/><ellipse cx="80" cy="58" rx="5" ry="7" fill="#3B2410"/><circle cx="78" cy="56" r="1.4" fill="#FEBE06"/><circle cx="82" cy="56" r="1.4" fill="#FEBE06"/>`
};
function thumb(v){return `<svg viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ART[v.art]()}</svg>`}
function av(ch,size){return `<span class="av" style="background:${ch.c};--ring:${ch.ring}"><span class="ms">${ch.ic}</span></span>`}

const $=s=>document.querySelector(s);
function renderPanel(){
  $("#chRows").innerHTML=CH.map(ch=>`<button class="row" type="button" role="switch" aria-checked="${ch.on}" data-ch="${ch.id}">${av(ch)}<span class="nm">${ch.n[lang]}<small>${ch.v.length} ${UI[lang].vids}</small></span><span class="sw"></span></button>`).join("");
  $("#count").textContent=CH.filter(c=>c.on).length+" / 5";
  $("#shortsSw").setAttribute("aria-checked",shorts);
}
function renderPhone(anim){
  const on=CH.filter(c=>c.on);
  if(filter!=="all"&&!on.find(c=>c.id===filter))filter="all";
  const favs=[...on].sort((a,b)=>(b.fav?1:0)-(a.fav?1:0));
  $("#chips").innerHTML=on.length>1?`<button class="chip ${filter==="all"?"on":""}" data-f="all" type="button">${UI[lang].all}</button>`+favs.map(c=>`<button class="chip ${filter===c.id?"on":""}" data-f="${c.id}" type="button">${c.fav?'<span class="ms">star</span>':""}${c.n[lang]}</button>`).join(""):"";
  let vids=[];on.forEach(c=>c.v.forEach(v=>vids.push({...v,ch:c})));
  if(filter!=="all")vids=vids.filter(v=>v.ch.id===filter);
  vids.sort((a,b)=>(b.resume?1:0)-(a.resume?1:0)||a.age-b.age);
  $("#feed").innerHTML=vids.length?vids.map((v,i)=>`<div class="vc" style="animation-delay:${anim?i*50:0}ms"><div class="th">${thumb(v)}${v.resume?`<span class="tag"><span class="ms">replay</span>${UI[lang].keep}</span><span class="prog"><i></i></span>`:""}<span class="dur">${v.d}</span></div><div class="vt">${v.t[lang]}</div><div class="vch">${av(v.ch)}${v.ch.n[lang]}</div></div>`).join("")
    :`<div class="empty"><img src="${MASCOT}" alt=""><b>${UI[lang].empty}</b><span>${UI[lang].emptySub}</span></div>`;
  if(!anim)$("#feed").querySelectorAll(".vc").forEach(e=>e.style.animation="none");
  const icons=["home","play_circle","video_library","shield_person"];
  $("#tabbar").innerHTML=UI[lang].tabs.map((t,i)=>(i===1&&!shorts)?"":`<span class="tab ${i===0?"on":""} ${i===1?"sh":""}"><span class="ms">${icons[i]}</span>${t}</span>`).join("");
}
function renderTree(){
  $("#plRows").innerHTML=PL.map((p,i)=>`<div class="pl ${p.on?"":"hid"}"><span class="t">${p.n[lang]}</span><button type="button" class="pill ${p.on?"inc":"hdn"}" data-p="${i}" aria-pressed="${!p.on}"><span class="ms">${p.on?"visibility":"visibility_off"}</span>${p.on?UI[lang].inc:UI[lang].hid}</button></div>`).join("");
  document.querySelectorAll("[data-ch='stars']").forEach(e=>{if(e.tagName==="B")e.textContent=CH[0].n[lang]});
}
function renderPlayer(){
  const v=CH[0].v[0], up=[CH[0].v[1],CH[1].v[0]];
  const th=$("#pmThumb"); const ov=th.querySelector(".endov");
  th.querySelectorAll("svg").forEach(e=>e.remove()); th.insertAdjacentHTML("afterbegin",thumb(v));
  $("#pmTitle").textContent=v.t[lang];
  $("#pmUp").innerHTML=up.map(u=>{const ch=CH.find(c=>c.v.includes(u));return `<div class="upn"><div class="th">${thumb(u)}<span class="dur">${u.d}</span></div><div><b>${u.t[lang]}</b><small>${ch.n[lang]}</small></div></div>`}).join("");
}
function setLang(l){
  lang=l;document.documentElement.lang=l;
  document.querySelectorAll("[data-i]").forEach(el=>{const k=el.dataset.i;el.innerHTML=l==="ru"?ruCache[k]:(T[l][k]??ruCache[k])});
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
  if(l==="ru"&&ruCache["d.lgv"])document.querySelector("[data-i='d.lgv']").innerHTML="Русский";
  renderPanel();renderPhone(false);renderTree();renderPlayer();buildMnav();
  try{localStorage.setItem("mg-lang",l)}catch(e){}
}
document.addEventListener("click",e=>{
  const r=e.target.closest("#chRows .row");
  if(r){const ch=CH.find(c=>c.id===r.dataset.ch);ch.on=!ch.on;renderPanel();renderPhone(true);return}
  if(e.target.closest("#shortsSw")){shorts=!shorts;renderPanel();renderPhone(false);return}
  const c=e.target.closest(".chip");
  if(c){filter=c.dataset.f;renderPhone(true);return}
  const p=e.target.closest(".pill");
  if(p){PL[+p.dataset.p].on=!PL[+p.dataset.p].on;renderTree();return}
  const lb=e.target.closest(".lang button");
  if(lb)setLang(lb.dataset.l);
});
function buildMnav(){$("#mnav").innerHTML=[...document.querySelectorAll(".nav a")].map(a=>`<a href="${a.getAttribute("href")}">${a.textContent}</a>`).join("")}
function closeMnav(){$("#mnav").classList.remove("open");$("#burger").setAttribute("aria-expanded","false");$("#burgerIc").textContent="menu"}
$("#burger").addEventListener("click",()=>{const o=$("#mnav").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o);$("#burgerIc").textContent=o?"close":"menu"});
$("#mnav").addEventListener("click",e=>{if(e.target.closest("a"))closeMnav()});
const root=document.documentElement;
function isDark(){const t=root.getAttribute("data-theme");return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
function syncThemeIcon(){$("#themeIc").textContent=isDark()?"light_mode":"dark_mode"}
function setTheme(t){root.setAttribute("data-theme",t);syncThemeIcon();try{localStorage.setItem("mg-theme",t)}catch(e){}}
$("#themeBtn").addEventListener("click",()=>setTheme(isDark()?"light":"dark"));
try{const st=localStorage.getItem("mg-theme");if(st==="light"||st==="dark")root.setAttribute("data-theme",st)}catch(e){}
syncThemeIcon();
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",syncThemeIcon)}catch(e){}
try{new MutationObserver(syncThemeIcon).observe(root,{attributes:true,attributeFilter:["data-theme"]})}catch(e){}
let init="ru";
try{const s=localStorage.getItem("mg-lang");if(s&&UI[s])init=s;else{const n=(navigator.language||"").slice(0,2);if(n==="uz")init=n;}}catch(e){}
setLang(init);
})();
