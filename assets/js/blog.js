/* Blog: post cards (used on the home page) and the blog.html / post.html pages. Posts live in posts.js. */
(function(){
const POSTS=(window.MG_POSTS||[]).slice().sort((a,b)=>b.date.localeCompare(a.date));
const COLORS={blue:["var(--blue)","var(--pblue)"],green:["#0A8C4B","var(--pgreen)"],yellow:["#B07A00","var(--pyellow)"],purple:["var(--purple)","var(--ppurple)"],pink:["var(--pink)","var(--ppink)"],cyan:["var(--sky)","var(--pcyan)"]};
const L={
 ru:{min:"мин чтения",other:"Другие статьи",promoT:"Mitti GO скоро в магазинах",promoS:"Безопасное детское видео, которое выбираете вы.",promoB:"Узнать больше",read:"Читать",all:"Все статьи",back:"Все статьи",more:"Читайте также",notFound:"Статья не найдена",notFoundSub:"Возможно, её удалили или ссылка неверная.",
   title:"Блог Mitti GO",lede:"Советы для родителей, новости приложения и ответы на частые вопросы.",
   nav:{how:"Как это работает",model:"Разрешения",parents:"Для родителей",privacy:"Приватность",plans:"Тарифы",blog:"Блог",faq:"Вопросы"},
   ft:"Сделано для семей в Узбекистане. YouTube — товарный знак Google LLC."},
 uz:{min:"daqiqa o‘qish",other:"Boshqa maqolalar",promoT:"Mitti GO tez kunda do‘konlarda",promoS:"Siz tanlagan xavfsiz bolalar videolari.",promoB:"Batafsil",read:"O‘qish",all:"Barcha maqolalar",back:"Barcha maqolalar",more:"Shuningdek o‘qing",notFound:"Maqola topilmadi",notFoundSub:"Ehtimol, u o‘chirilgan yoki havola noto‘g‘ri.",
   title:"Mitti GO blogi",lede:"Ota-onalar uchun maslahatlar, ilova yangiliklari va ko‘p beriladigan savollarga javoblar.",
   nav:{how:"Qanday ishlaydi",model:"Ruxsatlar",parents:"Ota-onalar uchun",privacy:"Maxfiylik",plans:"Tariflar",blog:"Blog",faq:"Savollar"},
   ft:"O‘zbekistondagi oilalar uchun yaratilgan. YouTube — Google LLC’ning savdo belgisi."},
 en:{min:"min read",other:"More posts",promoT:"Mitti GO is coming soon",promoS:"Safe kids' video, chosen by you.",promoB:"Learn more",read:"Read",all:"All posts",back:"All posts",more:"Read next",notFound:"Post not found",notFoundSub:"It may have been removed, or the link is wrong.",
   title:"Mitti GO blog",lede:"Tips for parents, app news and answers to common questions.",
   nav:{how:"How it works",model:"Permissions",parents:"For parents",privacy:"Privacy",plans:"Plans",blog:"Blog",faq:"FAQ"},
   ft:"Made for families in Uzbekistan. YouTube is a trademark of Google LLC."}
};
const pick=(o,l)=>o?(o[l]??o.ru??""):"";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const UZ_MONTHS=["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentabr","oktabr","noyabr","dekabr"];
function fmtDate(d,l){
  const dt=new Date(d+"T00:00:00");
  // browsers often lack Uzbek month names, so format it by hand
  if(l==="uz")return `${dt.getDate()}-${UZ_MONTHS[dt.getMonth()]}, ${dt.getFullYear()}`;
  try{return dt.toLocaleDateString(l==="en"?"en-GB":"ru-RU",{day:"numeric",month:"long",year:"numeric"})}catch(e){return d}
}
function readMin(html){const w=html.replace(/<[^>]+>/g," ").trim().split(/\s+/).length;return Math.max(1,Math.round(w/170))}
function cover(p,big){
  const [c,bg]=COLORS[p.color]||COLORS.blue;
  return `<div class="post-cover${big?" big":""}" style="--c:${c};--bgc:${bg}">${p.cover?`<img src="${esc(p.cover)}" alt="" loading="lazy">`:`<span class="ms">${esc(p.icon||"article")}</span>`}</div>`;
}
function card(p,l){
  const [c,bg]=COLORS[p.color]||COLORS.blue;
  return `<a class="post-card" href="post.html?p=${encodeURIComponent(p.slug)}" style="--c:${c};--bgc:${bg}">${cover(p)}
<div class="post-body"><div class="post-meta"><span class="post-tag">${esc(pick(p.tag,l))}</span><time datetime="${p.date}">${fmtDate(p.date,l)}</time></div>
<h3>${esc(pick(p.title,l))}</h3><p>${esc(pick(p.excerpt,l))}</p><span class="post-more">${L[l].read}<span class="ms">arrow_forward</span></span></div></a>`;
}
function renderList(el,l,limit,skip){
  if(!el)return;
  const list=POSTS.filter(p=>p.slug!==skip).slice(0,limit||POSTS.length);
  el.innerHTML=list.map(p=>card(p,l)).join("");
}
/* ---- site footer (same on every page) ---- */
const FT={
 ru:{tag:"Детское видео, которое выбираете вы. Безопасный контент — счастливые дети.",soon:"Скоро",product:"Продукт",parents:"Родителям",blog:"Блог",all:"Все статьи",top:"Наверх",
   links:{how:"Как это работает",model:"Разрешения",player:"Плеер",screentime:"Экранное время",plans:"Тарифы",parents:"Для родителей",privacy:"Приватность",devices:"Устройства и языки",faq:"Вопросы"},
   note:"Сделано для семей в Узбекистане. YouTube — товарный знак Google LLC."},
 uz:{tag:"Siz tanlagan bolalar videolari. Xavfsiz kontent — baxtli bolalar.",soon:"Tez kunda",product:"Mahsulot",parents:"Ota-onalar uchun",blog:"Blog",all:"Barcha maqolalar",top:"Yuqoriga",
   links:{how:"Qanday ishlaydi",model:"Ruxsatlar",player:"Pleyer",screentime:"Ekran vaqti",plans:"Tariflar",parents:"Ota-onalar uchun",privacy:"Maxfiylik",devices:"Qurilmalar va tillar",faq:"Savollar"},
   note:"O‘zbekistondagi oilalar uchun yaratilgan. YouTube — Google LLC’ning savdo belgisi."},
 en:{tag:"Kids' video you choose. Safe content, happy kids.",soon:"Coming soon",product:"Product",parents:"For parents",blog:"Blog",all:"All posts",top:"Back to top",
   links:{how:"How it works",model:"Permissions",player:"Player",screentime:"Screen Time",plans:"Plans",parents:"For parents",privacy:"Privacy",devices:"Devices & languages",faq:"FAQ"},
   note:"Made for families in Uzbekistan. YouTube is a trademark of Google LLC."}
};
function renderFooter(l){
  const el=document.getElementById("siteFoot");if(!el)return;
  const t=FT[l]||FT.ru, home=document.body.dataset.page?"index.html":"";
  const link=k=>`<li><a href="${home}#${k}">${t.links[k]}</a></li>`;
  const store=(logo,name)=>`<span class="soon store-badge"><img class="store-logo" src="assets/images/${logo}" alt="" decoding="async"><span class="store-copy"><span>${t.soon}</span><b>${name}</b></span></span>`;
  el.innerHTML=`<div class="wrap">
<div class="ft-top">
 <div class="ft-brand"><a href="${home||"#top"}" aria-label="Mitti GO"><img class="logo l" src="assets/images/logo-main.png" alt="Mitti GO"><img class="logo d" src="assets/images/logo-white.png" alt="Mitti GO"></a>
  <p>${t.tag}</p><div class="stores">${store("google-play.svg","Google Play")}${store("app-store.svg","App Store")}</div></div>
 <nav class="ft-col" aria-label="${t.product}"><h4>${t.product}</h4><ul>${["how","model","player","screentime","plans"].map(link).join("")}</ul></nav>
 <nav class="ft-col" aria-label="${t.parents}"><h4>${t.parents}</h4><ul>${["parents","privacy","devices","faq"].map(link).join("")}</ul></nav>
 <nav class="ft-col ft-blog" aria-label="${t.blog}"><h4>${t.blog}</h4><ul>${POSTS.slice(0,3).map(p=>`<li><a href="post.html?p=${encodeURIComponent(p.slug)}">${esc(pick(p.title,l))}</a></li>`).join("")}<li><a class="ft-all" href="blog.html">${t.all} →</a></li></ul></nav>
</div>
<div class="ft-bottom"><span>© ${new Date().getFullYear()} Mitti GO</span><span>${t.note}</span><a href="#top" class="ft-up" onclick="window.scrollTo({top:0,behavior:'smooth'});return false">${t.top}<span class="ms">arrow_upward</span></a></div>
</div>`;
}
window.MGBlog={posts:POSTS,renderList,renderFooter,L};

/* ---- standalone blog pages ---- */
const page=document.body.dataset.page;
if(page!=="blog"&&page!=="post")return;
const $=s=>document.querySelector(s);
const root=document.documentElement;
let lang="ru";

function renderPage(){
  const t=L[lang];
  document.querySelectorAll("[data-nav]").forEach(a=>a.textContent=t.nav[a.dataset.nav]);
  renderFooter(lang);
  $("#mnav").innerHTML=[...document.querySelectorAll(".nav a")].map(a=>`<a href="${a.getAttribute("href")}">${a.textContent}</a>`).join("");
  if(page==="blog"){
    $("#bTitle").textContent=t.title;$("#bLede").textContent=t.lede;
    document.title=t.title;
    renderList($("#allPosts"),lang);
    return;
  }
  const slug=new URLSearchParams(location.search).get("p");
  const p=POSTS.find(x=>x.slug===slug);
  document.querySelectorAll("[data-t='back']").forEach(e=>e.textContent=t.back);
  $("#promoT").textContent=t.promoT;$("#promoS").textContent=t.promoS;$("#promoB").textContent=t.promoB;$("#otherT").textContent=t.other;
  const others=POSTS.filter(x=>x!==p).slice(0,4);
  $("#otherPosts").innerHTML=others.map(o=>{const [oc,obg]=COLORS[o.color]||COLORS.blue;return `<a class="aside-post" href="post.html?p=${encodeURIComponent(o.slug)}" style="--c:${oc};--bgc:${obg}"><span class="aside-ic">${o.cover?`<img src="${esc(o.cover)}" alt="">`:`<span class="ms">${esc(o.icon||"article")}</span>`}</span><span><b>${esc(pick(o.title,lang))}</b><time datetime="${o.date}">${fmtDate(o.date,lang)}</time></span></a>`}).join("");
  $("#otherPosts").parentElement.hidden=!others.length;
  if(!p){
    $("#article").innerHTML=`<div class="post-404"><h1>${t.notFound}</h1><p>${t.notFoundSub}</p></div>`;
    $("#moreWrap").hidden=true;document.title=t.notFound+" — Mitti GO";return;
  }
  const [c,bg]=COLORS[p.color]||COLORS.blue;
  $("#article").innerHTML=`${cover(p,true)}<div class="post-meta" style="--c:${c};--bgc:${bg}"><span class="post-tag">${esc(pick(p.tag,lang))}</span><time datetime="${p.date}">${fmtDate(p.date,lang)}</time><span class="post-read"><span class="ms">schedule</span>${readMin(pick(p.body,lang))} ${t.min}</span></div>
<h1>${esc(pick(p.title,lang))}</h1><p class="lede">${esc(pick(p.excerpt,lang))}</p><div class="article-body">${pick(p.body,lang)}</div>`;
  document.title=pick(p.title,lang)+" — Mitti GO";
  $("#moreT").textContent=t.more;
  renderList($("#morePosts"),lang,3,p.slug);
  $("#moreWrap").hidden=POSTS.length<2;
}
function setLang(l){
  lang=l;root.lang=l;
  document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
  renderPage();
  try{localStorage.setItem("mg-lang",l)}catch(e){}
}
document.addEventListener("click",e=>{const b=e.target.closest(".lang button");if(b)setLang(b.dataset.l)});

function closeMnav(){$("#mnav").classList.remove("open");$("#burger").setAttribute("aria-expanded","false");$("#burgerIc").textContent="menu"}
$("#burger").addEventListener("click",()=>{const o=$("#mnav").classList.toggle("open");$("#burger").setAttribute("aria-expanded",o);$("#burgerIc").textContent=o?"close":"menu"});
$("#mnav").addEventListener("click",e=>{if(e.target.closest("a"))closeMnav()});

function isDark(){const t=root.getAttribute("data-theme");return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
function syncThemeIcon(){$("#themeIc").textContent=isDark()?"light_mode":"dark_mode"}
$("#themeBtn").addEventListener("click",()=>{const t=isDark()?"light":"dark";root.setAttribute("data-theme",t);syncThemeIcon();try{localStorage.setItem("mg-theme",t)}catch(e){}});
try{const st=localStorage.getItem("mg-theme");if(st==="light"||st==="dark")root.setAttribute("data-theme",st)}catch(e){}
syncThemeIcon();
try{matchMedia("(prefers-color-scheme: dark)").addEventListener("change",syncThemeIcon)}catch(e){}

let init="ru";
try{const s=localStorage.getItem("mg-lang");if(s&&L[s])init=s;else if((navigator.language||"").slice(0,2)==="uz")init="uz"}catch(e){}
setLang(init);
})();
