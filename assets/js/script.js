(function(){
const MASCOT="/assets/images/mascot.png";
const UI={
 ru:{libT:"Библиотека",libCh:"Каналы",libPl:"Плейлисты",libEmpty:"Родитель ещё не добавил каналы",onlyYours:"Только с ваших каналов",noShorts:"Включите канал, чтобы появились Shorts",all:"Все",keep:"Продолжить",empty:"Пока нечего смотреть",emptySub:"Попросите родителя добавить каналы",tabs:["Главная","Shorts","Библиотека","Профиль"],inc:"Включён",hid:"Скрыт",vids:"видео"},
 uz:{libT:"Kutubxona",libCh:"Kanallar",libPl:"Pleylistlar",libEmpty:"Ota-ona hali kanal qo‘shmagan",onlyYours:"Faqat sizning kanallaringizdan",noShorts:"Shorts chiqishi uchun kanalni yoqing",all:"Hammasi",keep:"Davom etish",empty:"Hozircha ko‘radigan narsa yo‘q",emptySub:"Ota-onangizdan kanal qo‘shishni so‘rang",tabs:["Bosh sahifa","Shorts","Kutubxona","Profil"],inc:"Ko‘rinadi",hid:"Yashirin",vids:"video"},
 en:{libT:"Library",libCh:"Channels",libPl:"Playlists",libEmpty:"No channels added yet",onlyYours:"Only from your channels",noShorts:"Turn on a channel to see Shorts",all:"All",keep:"Keep watching",empty:"Nothing to watch yet",emptySub:"Ask a parent to add channels",tabs:["Home","Shorts","Library","Profile"],inc:"Included",hid:"Hidden",vids:"videos"}
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
/* demo Shorts: two per channel, only channels that are switched on get shown */
const SH={
 stars:[{t:{ru:"Как взлетает ракета?",uz:"Raketa qanday uchadi?",en:"How does a rocket take off?"},art:"rocket"},{t:{ru:"Луна за 30 секунд",uz:"30 soniyada Oy",en:"The Moon in 30 seconds"},art:"moon"}],
 draw:[{t:{ru:"Кит одной линией",uz:"Bir chiziqda kit",en:"A whale in one line"},art:"whale"},{t:{ru:"Радуга за минуту",uz:"Bir daqiqada kamalak",en:"A rainbow in a minute"},art:"rainbow"}],
 abc:[{t:{ru:"Песенка про букву А",uz:"A harfi haqida qo‘shiq",en:"The letter A song"},art:"letter"},{t:{ru:"Считаем кружочки",uz:"Doirachalarni sanaymiz",en:"Let’s count the dots"},art:"dots"}],
 forest:[{t:{ru:"Ёжик и яблоко",uz:"Tipratikan va olma",en:"The hedgehog and the apple"},art:"hill"},{t:{ru:"Кто живёт в дупле?",uz:"Kovakda kim yashaydi?",en:"Who lives in the hollow?"},art:"tree"}]
};
const calmMotion=matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang="ru", shorts=false, filter="all", view="home", svTimer=null;

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
  if(!shorts&&view==="shorts")view="home";
  setView(view);
}
function renderTabbar(){
  const icons=["home","play_circle","video_library","shield_person"], keys=["home","shorts","lib","prof"];
  $("#tabbar").innerHTML=UI[lang].tabs.map((t,i)=>(i===1&&!shorts)?"":`<button type="button" class="tab ${keys[i]===view?"on":""} ${i===1?"sh":""}" data-tab="${keys[i]}"><span class="ms">${icons[i]}</span>${t}</button>`).join("");
}
function setView(v){
  view=v;
  $(".screen").classList.toggle("sv-on",v==="shorts");
  $(".screen").classList.toggle("lib-on",v==="lib");
  $("#shortsView").hidden=v!=="shorts";
  $(".screen").classList.toggle("prof-on",v==="prof");
  $("#libView").hidden=v!=="lib";
  $("#profView").hidden=v!=="prof";
  renderTabbar();
  clearTimeout(svTimer);
  if(v==="shorts")renderShorts();
  if(v==="lib")renderLibrary();
  if(v==="prof")renderProfile();
}
/* Profile: the parent panel ("Родитель") — same card as in the "Для родителей" section, but live */
const DASH_TXT={
 ru:{shOn:"Включены",shOff:"Выключены",sum:(c,p)=>`${c} ${plRu(c,"канал","канала","каналов")} • ${p} ${plRu(p,"плейлист","плейлиста","плейлистов")}`},
 uz:{shOn:"Yoqilgan",shOff:"O‘chiq",sum:(c,p)=>`${c} kanal • ${p} pleylist`},
 en:{shOn:"On",shOff:"Off",sum:(c,p)=>`${c} ${c===1?"channel":"channels"} • ${p} ${p===1?"playlist":"playlists"}`}
};
function plRu(n,one,few,many){const m=n%10,h=n%100;return m===1&&h!==11?one:m>=2&&m<=4&&(h<12||h>14)?few:many}
function renderProfile(){
  const src=document.querySelector(".dash");if(!src)return;
  const box=$("#profView");
  box.innerHTML=`<div class="pdash">${src.innerHTML.replace(/ data-i="[^"]*"/g,"")}</div>`;
  const t=DASH_TXT[lang], stars=CH.find(c=>c.id==="stars");
  const nCh=CH.filter(c=>c.on).length, nPl=stars.on?PL.filter(p=>p.on).length:0;
  box.querySelector(".dash-sum small").textContent=t.sum(nCh,nPl);
  const rows=box.querySelectorAll(".drow");
  rows[0].querySelector("small").textContent=shorts?t.shOn:t.shOff;
  rows[0].dataset.act="shorts";rows[3].dataset.act="lang";
  box.querySelector(".done-btn").dataset.act="done";
  box.querySelectorAll(".dash-sum,.drow").forEach((r,i)=>r.style.animationDelay=i*40+"ms");
}
/* Library: the channels the parent switched on (favourite first) and the visible playlists */
const PL_COUNT=[8,6,5];
function renderLibrary(){
  const on=CH.filter(c=>c.on).sort((a,b)=>(b.fav?1:0)-(a.fav?1:0));
  const stars=CH.find(c=>c.id==="stars");
  const pls=stars.on?PL.map((p,i)=>({...p,i})).filter(p=>p.on):[];
  const u=UI[lang];
  $("#libView").innerHTML=`<b class="lib-t">${u.libT}</b>`+(on.length?
    `<div class="lib-h">${u.libCh}<span>${on.length}</span></div>`+on.map((c,i)=>`<button type="button" class="lib-row" data-lib="${c.id}" style="animation-delay:${i*50}ms">${av(c)}<span class="nm">${c.n[lang]}<small>${c.v.length} ${u.vids}</small></span>${c.fav?'<span class="ms lib-fav">star</span>':'<span class="ms lib-go">chevron_right</span>'}</button>`).join("")+
    (pls.length?`<div class="lib-h">${u.libPl}<span>${pls.length}</span></div>`+pls.map((p,i)=>`<div class="lib-row lib-pl" style="animation-delay:${(on.length+i)*50}ms"><span class="lib-plic"><span class="ms">playlist_play</span></span><span class="nm">${p.n[lang]}<small>${stars.n[lang]} · ${PL_COUNT[p.i]} ${u.vids}</small></span></div>`).join(""):"")
    :`<div class="empty"><img src="${MASCOT}" alt=""><b>${u.libEmpty}</b></div>`);
}
function renderShorts(){
  const lists=CH.filter(c=>c.on).map(c=>SH[c.id].map(s=>({...s,ch:c})));
  const items=[];for(let i=0;i<2;i++)lists.forEach(l=>l[i]&&items.push(l[i]));
  $("#shortsView").innerHTML=`<div class="sv-top"><b>Shorts</b><span class="sv-badge"><span class="ms">verified_user</span>${UI[lang].onlyYours}</span></div>`+
    (items.length?`<div class="sv-feed" id="svFeed">${items.map(s=>`<div class="sv-item"><svg viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ART[s.art]()}</svg><div class="sv-info"><div class="vch">${av(s.ch)}${s.ch.n[lang]}</div><b>${s.t[lang]}</b></div><div class="sv-prog"><i></i></div></div>`).join("")}</div><span class="sv-hint ms">keyboard_arrow_up</span>`
    :`<div class="empty sv-empty"><img src="${MASCOT}" alt=""><b>${UI[lang].noShorts}</b></div>`);
  const f=$("#svFeed");
  if(f)f.addEventListener("scroll",()=>{clearTimeout(f._t);f._t=setTimeout(svActivate,140)});
  svActivate();
}
function svActivate(){
  const f=$("#svFeed");clearTimeout(svTimer);if(!f||view!=="shorts")return;
  const idx=Math.round(f.scrollTop/f.clientHeight);
  f.querySelectorAll(".sv-item").forEach((el,i)=>el.classList.toggle("on",i===idx));
  if(!calmMotion)svTimer=setTimeout(()=>f.scrollTo({top:((idx+1)%f.children.length)*f.clientHeight,behavior:"smooth"}),4000);
}
function renderTree(){
  $("#plRows").innerHTML=PL.map((p,i)=>`<div class="pl ${p.on?"":"hid"}"><span class="t">${p.n[lang]}</span><button type="button" class="pill ${p.on?"inc":"hdn"}" data-p="${i}" aria-pressed="${!p.on}"><span class="ms">${p.on?"visibility":"visibility_off"}</span>${p.on?UI[lang].inc:UI[lang].hid}</button></div>`).join("");
  document.querySelectorAll("[data-ch='stars']").forEach(e=>{if(e.tagName==="B")e.textContent=CH[0].n[lang]});
}
function renderPlayer(){
  const v=CH[0].v[0], up=[CH[0].v[1],CH[1].v[0],CH[1].v[1],CH[3].v[0]];
  const th=$("#pmThumb"); const ov=th.querySelector(".endov");
  th.querySelectorAll("svg").forEach(e=>e.remove()); th.insertAdjacentHTML("afterbegin",thumb(v));
  $("#pmTitle").textContent=v.t[lang];
  $("#pmUp").innerHTML=up.map(u=>{const ch=CH.find(c=>c.v.includes(u));return `<div class="upn"><div class="th">${thumb(u)}<span class="dur">${u.d}</span></div><div><b>${u.t[lang]}</b><small>${ch.n[lang]}</small></div></div>`}).join("");
}
/* page text is already translated in the HTML (/uz/, /ru/, /en/); only the interactive demo is rendered here */
function setLang(l){
  lang=l;
  renderPanel();renderPhone(false);renderTree();renderPlayer();
  if(!$("#mnav").children.length)buildMnav();
}
document.addEventListener("click",e=>{
  const r=e.target.closest("#chRows .row");
  if(r){const ch=CH.find(c=>c.id===r.dataset.ch);ch.on=!ch.on;renderPanel();renderPhone(true);return}
  if(e.target.closest("#shortsSw")){shorts=!shorts;view=shorts?"shorts":"home";renderPanel();renderPhone(false);return}
  const tb=e.target.closest("#tabbar .tab");
  if(tb){setView(tb.dataset.tab);return}
  const pa=e.target.closest(".pdash [data-act]");
  if(pa){
    const a=pa.dataset.act;
    if(a==="done")setView("home");
    if(a==="shorts"){shorts=!shorts;renderPanel();renderPhone(false)}
    if(a==="lang"){const ls=["uz","ru","en"],n=ls[(ls.indexOf(lang)+1)%3];try{localStorage.setItem("mg-lang",n)}catch(x){}location.href="/"+n+"/"}
    return;
  }
  const lr=e.target.closest(".lib-row[data-lib]");
  if(lr){filter=lr.dataset.lib;view="home";renderPhone(true);return}
  const c=e.target.closest(".chip");
  if(c){filter=c.dataset.f;renderPhone(true);return}
  const p=e.target.closest(".pill");
  if(p){PL[+p.dataset.p].on=!PL[+p.dataset.p].on;renderTree();if(view==="lib")renderLibrary();return}
  const la=e.target.closest(".lang a[hreflang]");
  if(la){try{localStorage.setItem("mg-lang",la.getAttribute("hreflang"))}catch(x){}}
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
/* FAQ: smooth open/close and a staggered fade-in when the list scrolls into view */
const faqList=$(".faq-list");
if(faqList){
  const calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
  faqList.querySelectorAll("details").forEach((d,i)=>{
    d.style.setProperty("--i",i);
    const s=d.querySelector("summary"), p=d.querySelector("p");
    s.addEventListener("click",e=>{
      if(calm||!p.animate)return;
      e.preventDefault();
      if(d.open){
        const a=p.animate([{height:p.offsetHeight+"px",opacity:1},{height:"0px",opacity:0,paddingBottom:"0px"}],{duration:260,easing:"ease"});
        a.onfinish=()=>{d.open=false};
      }else{
        d.open=true;
        p.animate([{height:"0px",opacity:0,paddingBottom:"0px"},{height:p.offsetHeight+"px",opacity:1}],{duration:320,easing:"cubic-bezier(.2,.8,.2,1)"});
      }
    });
  });
  if("IntersectionObserver" in window&&!calm){
    const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){faqList.classList.add("in");io.disconnect()}},{threshold:.15});
    io.observe(faqList);
  }else faqList.classList.add("in");
}
const pageLang=document.documentElement.lang;
setLang(UI[pageLang]?pageLang:"ru");
})();
