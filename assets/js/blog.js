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
window.MGBlog={posts:POSTS,renderList,L};

/* ---- standalone blog pages ---- */
const page=document.body.dataset.page;
if(page!=="blog"&&page!=="post")return;
const $=s=>document.querySelector(s);
const root=document.documentElement;
let lang="ru";

function renderPage(){
  const t=L[lang];
  document.querySelectorAll("[data-nav]").forEach(a=>a.textContent=t.nav[a.dataset.nav]);
  $("#ft").textContent=t.ft;
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
