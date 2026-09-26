/* Mitti GO static site build.
   Run from the project root:   node tools/build.mjs
   Sources:  src/templates/*.html, src/i18n.js (landing UZ/EN), src/posts.js (blog), src/blog-lib.js (shared pieces)
   Output:   /index.html (x-default language chooser), /{uz,ru,en}/index.html, /{lang}/blog/index.html,
             /{lang}/blog/<slug>/index.html, /404.html, legacy /blog.html + /post.html redirects,
             /sitemap.xml, /robots.txt, /site.webmanifest
   Every generated page has its own title, description, canonical, hreflang, Open Graph, Twitter card and JSON-LD. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const lib = require(path.join(ROOT, "src/blog-lib.js"));
const T = require(path.join(ROOT, "src/i18n.js"));
const { SITE, LANGS, LANG_NAMES, L, pick, esc, fmtDate, readMin, homePath, blogPath, postPath, abs, card, asidePost, cover, footerHTML } = lib;

const read = p => fs.readFileSync(path.join(ROOT, p), "utf8");
const write = (p, s) => { const f = path.join(ROOT, p); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, s); written.push(p); };
const written = [];
const TODAY = new Date().toISOString().slice(0, 10);
const OG_LOCALE = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };
const fill = (tpl, map) => {
  const out = tpl.replace(/\{\{([A-Z0-9_]+)\}\}/g, (m, k) => { if (!(k in map)) throw new Error("no value for " + k); return map[k]; });
  const left = tpl.match(/\{\{[^}]*\}\}/g)?.filter(t => !/^\{\{[A-Z0-9_]+\}\}$/.test(t));
  if (left && left.length) throw new Error("bad template tokens: " + left.join(", "));
  return out;
};

/* ---------- posts ---------- */
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(read("src/posts.js"), ctx, { filename: "src/posts.js" });
const POSTS = ctx.window.MG_POSTS.slice().sort((a, b) => b.date.localeCompare(a.date));
const seenSlugs = new Set();
for (const p of POSTS) {
  for (const l of LANGS) {
    const s = p.slugs && p.slugs[l];
    if (!s || !/^[a-z0-9-]+$/.test(s)) throw new Error(`post ${p.slug}: bad slugs.${l}`);
    if (seenSlugs.has(l + s)) throw new Error("duplicate slug " + l + "/" + s);
    seenSlugs.add(l + s);
    for (const f of ["title", "excerpt", "body"]) if (!pick(p[f], l)) throw new Error(`post ${p.slug}: missing ${f}.${l}`);
  }
}

/* ---------- image sizes (width/height on every <img> to avoid layout shift) ---------- */
const sizeCache = {};
function imgSize(src) {
  if (sizeCache[src] !== undefined) return sizeCache[src];
  let r = null;
  try {
    const b = fs.readFileSync(path.join(ROOT, src.replace(/^\//, "")));
    if (b.toString("ascii", 1, 4) === "PNG") r = [b.readUInt32BE(16), b.readUInt32BE(20)];
    else if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
      const kind = b.toString("ascii", 12, 16);
      if (kind === "VP8 ") r = [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
      else if (kind === "VP8L") { const v = b.readUInt32LE(21); r = [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
      else if (kind === "VP8X") r = [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    } else if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i < b.length) { const m = b[i + 1], len = b.readUInt16BE(i + 2); if (m >= 0xc0 && m <= 0xc3) { r = [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; break; } i += 2 + len; }
    }
  } catch (e) { r = null; }
  return (sizeCache[src] = r);
}
function sizeImages(html) {
  return html.replace(/<img\b([^>]*)>/g, (m, attrs) => {
    let a = attrs;
    const src = (a.match(/\ssrc="([^"]+)"/) || [])[1];
    if (src && src.startsWith("/") && !/\swidth=/.test(a)) { const s = imgSize(src); if (s) a += ` width="${s[0]}" height="${s[1]}"`; }
    if (!/\sloading=/.test(a) && !/fetchpriority/.test(a)) a += ' loading="lazy"';
    if (!/\sdecoding=/.test(a)) a += ' decoding="async"';
    if (!/\salt=/.test(a)) a += ' alt=""';
    return `<img${a}>`;
  });
}

/* ---------- <head> ---------- */
const ORG = { "@type": "Organization", "@id": SITE + "/#organization", name: "Mitti GO", url: SITE + "/", logo: { "@type": "ImageObject", url: SITE + "/assets/images/logo-main.png" } };
function head(o) {
  const alt = o.alternates ? LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${abs(o.alternates[l])}">`).join("\n") + `\n<link rel="alternate" hreflang="x-default" href="${abs(o.xdefault)}">` : "";
  const img = o.image || "/assets/og/mitti-go.jpg";
  const tags = [
    `<meta charset="utf-8">`,
    `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    `<title>${esc(o.title)}</title>`,
    `<meta name="description" content="${esc(o.desc)}">`,
    `<meta name="robots" content="${o.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}">`,
    o.canonical ? `<link rel="canonical" href="${abs(o.canonical)}">` : "",
    alt,
    `<meta name="theme-color" content="#0078FF">`,
    `<meta name="google-site-verification" content="rJNAsnwTCOdMKbBCNrRhRH9m7SymnOPFsV2at637qJI">`,
    `<link rel="icon" href="/favicon.ico" sizes="any">`,
    `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">`,
    `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<meta property="og:site_name" content="Mitti GO">`,
    `<meta property="og:type" content="${o.ogType || "website"}">`,
    `<meta property="og:title" content="${esc(o.ogTitle || o.title)}">`,
    `<meta property="og:description" content="${esc(o.desc)}">`,
    o.canonical ? `<meta property="og:url" content="${abs(o.canonical)}">` : "",
    `<meta property="og:image" content="${abs(img)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(o.imageAlt || "Mitti GO")}">`,
    o.lang ? `<meta property="og:locale" content="${OG_LOCALE[o.lang]}">` + LANGS.filter(l => l !== o.lang).map(l => `\n<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join("") : "",
    o.published ? `<meta property="article:published_time" content="${o.published}">\n<meta property="article:modified_time" content="${o.modified}">\n<meta property="article:publisher" content="${SITE}/">` : "",
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(o.ogTitle || o.title)}">`,
    `<meta name="twitter:description" content="${esc(o.desc)}">`,
    `<meta name="twitter:image" content="${abs(img)}">`,
    `<meta name="twitter:image:alt" content="${esc(o.imageAlt || "Mitti GO")}">`,
    // apply the saved theme before first paint (no light/dark flash)
    `<script>try{var t=localStorage.getItem("mg-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800;900&family=Caveat:wght@600;700&display=swap">`,
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,500,1,0&display=block">`,
    `<link rel="stylesheet" href="/assets/css/styles.css?v=${BUILD_ID}">`,
    ...(o.jsonld || []).map(j => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`)
  ];
  return tags.filter(Boolean).join("\n");
}
const BUILD_ID = Date.now().toString(36);

/* ---------- shared header for blog / article pages ---------- */
function langNav(l, alternates) {
  return `<nav class="lang" aria-label="${L[l].langLabel}">` + LANGS.map(x => `<a href="${alternates[x]}" hreflang="${x}" lang="${x}"${x === l ? ' aria-current="page"' : ""} title="${LANG_NAMES[x]}">${x.toUpperCase()}</a>`).join("") + `</nav>`;
}
function navLinks(l, onBlog) {
  const n = L[l].nav, h = homePath(l);
  return [["how", `${h}#how`], ["model", `${h}#model`], ["parents", `${h}#parents`], ["privacy", `${h}#privacy`], ["plans", `${h}#plans`], ["blog", blogPath(l)], ["faq", `${h}#faq`]]
    .map(([k, href]) => `<a href="${href}"${k === "blog" && onBlog ? ' aria-current="page"' : ""}>${n[k]}</a>`).join("\n      ");
}
function siteHeader(l, alternates, onBlog) {
  const links = navLinks(l, onBlog);
  return `<header class="top">
  <div class="wrap">
    <a href="${homePath(l)}" aria-label="Mitti GO"><img class="logo l" src="/assets/images/logo-main.png" alt="Mitti GO" width="449" height="150"><img class="logo d" src="/assets/images/logo-white.png" alt="Mitti GO" width="439" height="150"></a>
    <nav class="nav" aria-label="Main">
      ${links}
    </nav>
    <button class="tbtn" id="themeBtn" type="button" aria-label="${L[l].theme}"><span class="ms" id="themeIc">dark_mode</span></button>
    ${langNav(l, alternates)}
    <button class="burger" id="burger" type="button" aria-label="${L[l].menu}" aria-expanded="false"><span class="ms" id="burgerIc">menu</span></button>
  </div>
  <nav class="mnav" id="mnav" aria-label="Mobile">${links.replace(/\n\s+/g, "")}</nav>
</header>`;
}
function crumbs(l, items) {
  return `<nav class="crumbs" aria-label="${L[l].crumbs}"><ol>` + items.map((it, i) => i < items.length - 1 ? `<li><a href="${it.href}">${esc(it.name)}</a></li>` : `<li aria-current="page">${esc(it.name)}</li>`).join("") + `</ol></nav>`;
}
const breadcrumbLD = items => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.href) })) });

/* ---------- landing pages ---------- */
const HOME_SEO = {
  ru: { title: "Mitti GO — безопасное видео для детей | Родительский контроль", desc: "Mitti GO — приложение для безопасного просмотра детских видео. Родители выбирают разрешённый контент, управляют просмотром и экранным временем ребёнка.", appDesc: "Приложение для безопасного просмотра детских видео: ребёнок видит только каналы и плейлисты, которые разрешили родители." },
  uz: { title: "Mitti GO — bolalar uchun xavfsiz video | Ota-ona nazorati", desc: "Mitti GO — bolalar uchun xavfsiz video ilovasi. Ota-onalar ruxsat etilgan kontentni tanlaydi, ko‘rishni va ekran vaqtini boshqaradi.", appDesc: "Bolalar uchun xavfsiz video ilovasi: bola faqat ota-onasi ruxsat bergan kanal va pleylistlarni ko‘radi." },
  en: { title: "Mitti GO — Safe Videos for Kids | Parental Controls", desc: "Mitti GO is a safe video app for kids. Parents choose approved content, manage viewing and control screen time on phones, tablets and TV.", appDesc: "A safe video app for kids: children see only the channels and playlists their parents approved." }
};
const HOME_ALT = { uz: "/uz/", ru: "/ru/", en: "/en/" };
const landingTpl = read("src/templates/landing.html");
const missing = {};
function translateLanding(l) {
  let h = landingTpl;
  if (l !== "ru") {
    h = h.replace(/(<([a-z0-9]+)\b[^>]*\sdata-i="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g, (m, open, tag, key, inner, close) => {
      if (T[l][key] === undefined) { (missing[l] ||= []).push(key); return m; }
      return open + T[l][key] + close;
    });
    h = h.replace(/alt="[^"]*" data-ialt="([^"]+)"/g, (m, key) => `alt="${esc(T[l][key] ?? "")}" data-ialt="${key}"`);
  }
  h = h.replace('aria-label="Светлая / тёмная тема"', `aria-label="${L[l].theme}"`).replace('aria-label="Меню"', `aria-label="${L[l].menu}"`);
  return h;
}
function faqLD(html, l) {
  const qa = [...html.matchAll(/<summary><span data-i="[^"]+">([\s\S]*?)<\/span>[\s\S]*?<\/summary><p data-i="[^"]+">([\s\S]*?)<\/p>/g)];
  return { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: l, mainEntity: qa.map(m => ({ "@type": "Question", name: m[1].replace(/<[^>]+>/g, ""), acceptedAnswer: { "@type": "Answer", text: m[2].replace(/<[^>]+>/g, "") } })) };
}
for (const l of LANGS) {
  const seo = HOME_SEO[l];
  let h = translateLanding(l);
  const navInner = (h.match(/<nav class="nav" aria-label="Main">([\s\S]*?)<\/nav>/) || [])[1] || "";
  const jsonld = [
    { "@context": "https://schema.org", "@graph": [
      ORG,
      { "@type": "WebSite", "@id": SITE + "/#website", name: "Mitti GO", url: SITE + "/", inLanguage: LANGS, publisher: { "@id": ORG["@id"] } },
      { "@type": "WebPage", "@id": abs(homePath(l)) + "#webpage", url: abs(homePath(l)), name: seo.title, description: seo.desc, inLanguage: l, isPartOf: { "@id": SITE + "/#website" }, about: { "@id": SITE + "/#app" } },
      { "@type": "SoftwareApplication", "@id": SITE + "/#app", name: "Mitti GO", applicationCategory: "EducationalApplication", operatingSystem: "Android, iOS, Android TV", description: seo.appDesc, inLanguage: LANGS, url: abs(homePath(l)), image: SITE + "/assets/og/mitti-go.jpg", publisher: { "@id": ORG["@id"] }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: l === "ru" ? "Бесплатный тариф" : l === "uz" ? "Bepul tarif" : "Free plan" } }
    ] },
    faqLD(h, l)
  ];
  h = fill(h, {
    LANG: l,
    HEAD: head({ lang: l, title: seo.title, desc: seo.desc, canonical: homePath(l), alternates: HOME_ALT, xdefault: "/", image: "/assets/og/mitti-go.jpg", imageAlt: "Mitti GO", jsonld }),
    HOME: homePath(l) + "#top",
    BLOG: blogPath(l),
    LANGNAV: langNav(l, HOME_ALT),
    MNAV: navInner.replace(/\n\s*/g, "").replace("{{BLOG}}", blogPath(l)).replace(/ data-i="[^"]+"/g, ""),
    HOME_POSTS: POSTS.slice(0, 3).map(p => card(p, l, "h3")).join(""),
    FOOTER: footerHTML(l, POSTS, HOME_ALT)
  });
  write(`${l}/index.html`, sizeImages(h));
}

/* ---------- blog index pages ---------- */
const BLOG_ALT = { uz: "/uz/blog/", ru: "/ru/blog/", en: "/en/blog/" };
const blogTpl = read("src/templates/blog.html");
for (const l of LANGS) {
  const t = L[l];
  const items = [{ name: t.home, href: homePath(l) }, { name: t.blog, href: blogPath(l) }];
  const jsonld = [
    { "@context": "https://schema.org", "@type": "Blog", "@id": abs(blogPath(l)) + "#blog", name: t.blogH1, description: t.blogDesc, url: abs(blogPath(l)), inLanguage: l, publisher: ORG,
      blogPost: POSTS.map(p => ({ "@type": "BlogPosting", headline: pick(p.title, l), url: abs(postPath(p, l)), datePublished: p.date, dateModified: p.updated || p.date, image: p.cover ? abs(p.cover) : undefined })) },
    breadcrumbLD(items)
  ];
  const h = fill(blogTpl, {
    LANG: l,
    HEAD: head({ lang: l, title: t.blogTitle, desc: t.blogDesc, canonical: blogPath(l), alternates: BLOG_ALT, xdefault: "/ru/blog/", image: "/assets/og/blog.jpg", imageAlt: t.blogH1, jsonld }),
    HEADER: siteHeader(l, BLOG_ALT, true),
    CRUMBS: crumbs(l, items),
    EYEBROW: t.blog, H1: esc(t.blogH1), LEDE: esc(t.blogLede),
    POSTS: POSTS.map(p => card(p, l, "h2")).join(""),
    FOOTER: footerHTML(l, POSTS, BLOG_ALT)
  });
  write(`${l}/blog/index.html`, sizeImages(h));
}

/* ---------- article pages ---------- */
const postTpl = read("src/templates/post.html");
const COLORS = lib.COLORS;
function related(p) {
  // explicit relatedPosts first, then the newest others
  const ids = (p.related || []).concat(POSTS.map(x => x.slug)).filter((id, i, a) => id !== p.slug && a.indexOf(id) === i);
  return ids.map(id => POSTS.find(x => x.slug === id)).filter(Boolean);
}
for (const p of POSTS) {
  const alts = Object.fromEntries(LANGS.map(l => [l, postPath(p, l)]));
  for (const l of LANGS) {
    const t = L[l];
    const title = pick(p.title, l);
    const seoTitle = (p.seo && pick(p.seo.title, l)) || `${title} | Mitti GO`;
    const desc = (p.seo && pick(p.seo.description, l)) || pick(p.excerpt, l);
    const modified = p.updated || p.date;
    const og = `/assets/og/post-${p.slug}.jpg`;
    const imageAlt = pick(p.imageAlt, l) || title;
    const items = [{ name: t.home, href: homePath(l) }, { name: t.blog, href: blogPath(l) }, { name: title, href: postPath(p, l) }];
    let body = pick(p.body, l)
      .replace(/href="index\.html#/g, `href="${homePath(l)}#`)
      .replace(/href="index\.html"/g, `href="${homePath(l)}"`);
    const [c, bg] = COLORS[p.color] || COLORS.blue;
    const rel = related(p);
    const jsonld = [
      { "@context": "https://schema.org", "@type": "BlogPosting", "@id": abs(postPath(p, l)) + "#article", headline: title.slice(0, 110), description: desc,
        image: [abs(og)].concat(p.cover ? [abs(p.cover)] : []), datePublished: p.date, dateModified: modified, inLanguage: l,
        articleSection: pick(p.tag, l), wordCount: body.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length,
        author: { "@type": "Organization", name: "Mitti GO", url: SITE + "/" }, publisher: ORG,
        mainEntityOfPage: { "@type": "WebPage", "@id": abs(postPath(p, l)) }, url: abs(postPath(p, l)), isPartOf: { "@id": abs(blogPath(l)) + "#blog" } },
      breadcrumbLD(items)
    ];
    const h = fill(postTpl, {
      LANG: l,
      HEAD: head({ lang: l, title: seoTitle, ogTitle: title, desc, canonical: postPath(p, l), alternates: alts, xdefault: alts.ru, ogType: "article", image: og, imageAlt, published: p.date, modified, jsonld }),
      HEADER: siteHeader(l, alts, true),
      CRUMBS: crumbs(l, items),
      COVER: cover(p, l, true),
      META_STYLE: `--c:${c};--bgc:${bg}`,
      TAG: esc(pick(p.tag, l)), DATE: p.date, DATE_TEXT: fmtDate(p.date, l),
      UPDATED: modified !== p.date ? `<span class="post-upd">${t.updated} <time datetime="${modified}">${fmtDate(modified, l)}</time></span>` : "",
      READ: `${readMin(body)} ${t.min}`,
      H1: esc(title), LEDE: esc(pick(p.excerpt, l)), BODY: body,
      OTHER_T: t.other, OTHER: rel.slice(0, 4).map(o => asidePost(o, l)).join(""),
      PROMO_T: t.promoT, PROMO_S: t.promoS, PROMO_B: t.promoB, HOME: homePath(l), BLOG: blogPath(l), ALL: t.all,
      MORE_T: t.more, MORE: rel.slice(0, 3).map(o => card(o, l, "h3")).join(""),
      FOOTER: footerHTML(l, POSTS, alts)
    });
    write(`${l}/blog/${p.slugs[l]}/index.html`, sizeImages(h));
  }
}

/* ---------- root: x-default language chooser ---------- */
const CHOOSER = {
  uz: { name: "O‘zbekcha", line: "Bolalar faqat siz tanlagan videolarni ko‘radi" },
  ru: { name: "Русский", line: "Безопасное видео для детей — только то, что выбрали родители" },
  en: { name: "English", line: "Safe videos for kids — chosen by parents" }
};
write("index.html", `<!doctype html>
<html lang="ru">
<head>
${head({ title: "Mitti GO — безопасное видео для детей · Bolalar uchun xavfsiz video · Safe videos for kids", desc: "Mitti GO — безопасное видео для детей с родительским контролем. Bolalar uchun xavfsiz video ilovasi. A safe video app for kids with parental controls. Выберите язык · Tilni tanlang · Choose a language.", canonical: "/", alternates: HOME_ALT, xdefault: "/", image: "/assets/og/mitti-go.jpg", jsonld: [{ "@context": "https://schema.org", "@graph": [ORG, { "@type": "WebSite", "@id": SITE + "/#website", name: "Mitti GO", url: SITE + "/", inLanguage: LANGS, publisher: { "@id": ORG["@id"] } }] }] })}
<script>
/* send visitors to their language: saved choice → browser language → Russian; keeps #anchors from old links */
(function(){var ls=["uz","ru","en"],l=null;try{l=localStorage.getItem("mg-lang")}catch(e){}
if(ls.indexOf(l)<0){var n=(navigator.languages||[navigator.language||""]);for(var i=0;i<n.length&&!l;i++){var c=String(n[i]).slice(0,2).toLowerCase();if(ls.indexOf(c)>=0)l=c}}
if(ls.indexOf(l)<0)l="ru";location.replace("/"+l+"/"+location.hash)})();
</script>
</head>
<body class="chooser">
<main class="chooser-main">
  <img class="chooser-logo" src="/assets/images/logo-main.png" alt="Mitti GO" width="449" height="150">
  <img class="chooser-mascot" src="/assets/images/mascot.png" alt="" width="640" height="378">
  <h1>Mitti GO</h1>
  <nav class="chooser-langs" aria-label="Language">
${LANGS.map(l => `    <a href="/${l}/" hreflang="${l}" lang="${l}"><b>${CHOOSER[l].name}</b><span>${CHOOSER[l].line}</span></a>`).join("\n")}
  </nav>
  <p class="chooser-blog">${LANGS.map(l => `<a href="${blogPath(l)}" hreflang="${l}" lang="${l}">${L[l].blog} · ${LANG_NAMES[l]}</a>`).join(" ")}</p>
</main>
</body>
</html>
`);

/* ---------- 404 ---------- */
/* GitHub Pages serves this file (with HTTP 404) for any unknown URL, so it can't know the language in advance:
   all three language versions are in the HTML and a tiny script keeps the one that matches the URL
   (/uz/… → uz, /en/… → en, otherwise the saved language or Russian). */
const NF = {
  ru: { title: "Страница не найдена — Mitti GO", eyebrow: "Ошибка 404", h1: "Страница потерялась", sub: "Кажется, такой страницы нет или её переместили. Зато у нас много полезного для родителей — загляните на главную или в блог.", home: "На главную", blog: "Открыть блог", more: "Может пригодиться" },
  uz: { title: "Sahifa topilmadi — Mitti GO", eyebrow: "404 xatosi", h1: "Sahifa adashib qoldi", sub: "Bunday sahifa yo‘q yoki u ko‘chirilgan. Lekin bizda ota-onalar uchun foydali narsalar ko‘p — bosh sahifaga yoki blogga o‘ting.", home: "Bosh sahifaga", blog: "Blogni ochish", more: "Foydali bo‘lishi mumkin" },
  en: { title: "Page not found — Mitti GO", eyebrow: "Error 404", h1: "This page got lost", sub: "The page doesn't exist or has moved. But there's plenty for parents here — head to the home page or the blog.", home: "Go home", blog: "Open the blog", more: "You might find useful" }
};
const nfVariant = l => {
  const t = NF[l];
  return `<div class="nf-lang" data-nf="${l}" lang="${l}">
${siteHeader(l, HOME_ALT, false)}
<main id="top" class="nf-page">
<section class="nf-hero">
  <div class="blob b1"></div><div class="blob b2"></div>
  <div class="wrap nf-grid">
    <div class="nf-copy">
      <span class="eyebrow"><span class="ms">explore_off</span>${t.eyebrow}</span>
      <h1>${t.h1}</h1>
      <p class="lede">${t.sub}</p>
      <div class="nf-actions">
        <a class="btn primary" href="${homePath(l)}"><span class="ms">home</span>${t.home}</a>
        <a class="btn ghost" href="${blogPath(l)}"><span class="ms">auto_stories</span>${t.blog}</a>
      </div>
    </div>
    <div class="nf-art" aria-hidden="true">
      <span class="nf-digit">4</span><img src="/assets/images/mascot-sad.png" alt="" width="640" height="373"><span class="nf-digit">4</span>
      <span class="nf-star s1 ms">star</span><span class="nf-star s2 ms">auto_awesome</span><span class="nf-star s3 ms">star</span>
    </div>
  </div>
</section>
<section class="blog-sec nf-more">
  <div class="wrap">
    <h2>${t.more}</h2>
    <div class="post-grid">${POSTS.slice(0, 3).map(p => card(p, l, "h3")).join("")}</div>
  </div>
</section>
</main>
<footer class="site-foot">${footerHTML(l, POSTS, HOME_ALT)}</footer>
</div>`;
};
write("404.html", sizeImages(`<!doctype html>
<html lang="ru">
<head>
${head({ title: NF.ru.title, desc: "Такой страницы нет. Вернитесь на главную Mitti GO или откройте блог для родителей.", noindex: true })}
</head>
<body class="nf-body">
${LANGS.map(nfVariant).join("\n")}
<script>
(function(){var ls=["uz","ru","en"],m=location.pathname.match(/^\\/(uz|ru|en)(\\/|$)/),l=m?m[1]:null;
try{if(!l){var s=localStorage.getItem("mg-lang");if(ls.indexOf(s)>=0)l=s}}catch(e){}
if(ls.indexOf(l)<0)l="ru";
var T=${JSON.stringify(Object.fromEntries(LANGS.map(x => [x, NF[x].title])))};
/* keep the three versions aside and show one; the language switch swaps them in place (the URL stays the same) */
var stash={},anchor=document.createComment("nf");
[].slice.call(document.querySelectorAll(".nf-lang")).forEach(function(n){stash[n.getAttribute("data-nf")]=n;n.parentNode.insertBefore(anchor,n);n.parentNode.removeChild(n)});
function show(x){var cur=document.querySelector(".nf-lang");if(cur)cur.parentNode.removeChild(cur);anchor.parentNode.insertBefore(stash[x],anchor.nextSibling);
document.documentElement.lang=x;document.title=T[x];if(window.MGSite)MGSite.syncThemeIcon()}
show(l);document.body.classList.add("nf-ready");
document.addEventListener("click",function(e){var a=e.target.closest(".lang a[hreflang], .ft-langs a[hreflang]");if(!a)return;
var x=a.getAttribute("hreflang");if(!stash[x])return;e.preventDefault();try{localStorage.setItem("mg-lang",x)}catch(err){}show(x);scrollTo({top:0,behavior:"instant"})})})();
</script>
<script src="/assets/js/site.js" defer></script>
</body>
</html>
`));

/* ---------- legacy URLs (old blog.html / post.html?p=…) ---------- */
const legacy = (title, target, script) => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex, follow">
<title>${title}</title>
<link rel="canonical" href="${abs(target)}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>${script}</script>
</head>
<body><p><a href="${target}">${title}</a></p></body>
</html>
`;
write("blog.html", legacy("Блог Mitti GO", "/ru/blog/", `(function(){var l="ru";try{var s=localStorage.getItem("mg-lang");if(["uz","ru","en"].indexOf(s)>=0)l=s}catch(e){}location.replace("/"+l+"/blog/")})();`));
const map = Object.fromEntries(POSTS.map(p => [p.slug, Object.fromEntries(LANGS.map(l => [l, postPath(p, l)]))]));
write("post.html", legacy("Блог Mitti GO", "/ru/blog/", `(function(){var m=${JSON.stringify(map)},id=new URLSearchParams(location.search).get("p"),l="ru";try{var s=localStorage.getItem("mg-lang");if(["uz","ru","en"].indexOf(s)>=0)l=s}catch(e){}location.replace(m[id]?m[id][l]:"/"+l+"/blog/")})();`));

/* ---------- sitemap / robots / manifest ---------- */
const urlEntry = (loc, alternates, xdef, lastmod, prio) => `  <url>
    <loc>${abs(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates ? LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(alternates[l])}"/>`).join("\n") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(xdef)}"/>\n` : ""}    <priority>${prio}</priority>
  </url>`;
const newest = POSTS.reduce((m, p) => ((p.updated || p.date) > m ? (p.updated || p.date) : m), "0000");
const entries = [urlEntry("/", HOME_ALT, "/", TODAY, "1.0")];
for (const l of LANGS) entries.push(urlEntry(homePath(l), HOME_ALT, "/", TODAY, "1.0"));
for (const l of LANGS) entries.push(urlEntry(blogPath(l), BLOG_ALT, "/ru/blog/", newest, "0.8"));
for (const p of POSTS) {
  const alts = Object.fromEntries(LANGS.map(l => [l, postPath(p, l)]));
  for (const l of LANGS) entries.push(urlEntry(postPath(p, l), alts, alts.ru, p.updated || p.date, "0.7"));
}
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`);
write("robots.txt", `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
write("site.webmanifest", JSON.stringify({
  name: "Mitti GO", short_name: "Mitti GO", description: HOME_SEO.en.appDesc, lang: "ru", start_url: "/", scope: "/", display: "standalone",
  background_color: "#FFFFFF", theme_color: "#0078FF",
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { src: "/maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
  ]
}, null, 2) + "\n");

for (const [l, keys] of Object.entries(missing)) console.warn(`! ${l}: no translation for ${[...new Set(keys)].join(", ")} (Russian text kept)`);
console.log(`built ${written.length} files, ${POSTS.length} posts × ${LANGS.length} languages`);
