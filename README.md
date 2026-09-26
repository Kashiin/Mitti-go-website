# Mitti GO Website

Official site of Mitti GO — https://mitti-go.uz/ (GitHub Pages, custom domain in `CNAME`).

The site is **static HTML generated from sources**. Every language and every blog post is its own crawlable page.

## Structure

```text
src/
  templates/landing.html   landing page (Russian text = master copy)
  templates/blog.html      blog index template
  templates/post.html      article template
  i18n.js                  landing translations (uz / en), keys match data-i="…"
  posts.js                 blog posts: slugs per language, SEO fields, content
  blog-lib.js              shared pieces: cards, footer, dates, URLs
tools/
  build.mjs                generates all pages, sitemap.xml, robots.txt, site.webmanifest
  images.py                logos, favicons, Android icons, Open Graph images (Pillow)
assets/                    css, js (script.js = landing demo, site.js = blog pages), images, og
/index.html                x-default language chooser (generated)
/{uz,ru,en}/…              generated pages — do not edit by hand
```

## Build

```powershell
node tools/build.mjs          # after any change in src/
python tools/images.py        # only when a new post cover / logo / mascot is added
```

## Add a blog post

1. Put the cover (1400×600) and pictures into `assets/images/blog/`.
2. Add an object to `window.MG_POSTS` in `src/posts.js`: `slug`, `slugs` (uz/ru/en), `date`, `cover`, `tag`, `title`, `excerpt`, `body` (uz/ru/en). Optional: `seo`, `updated`, `imageAlt`, `related`.
3. Run `python tools/images.py` (Open Graph image) and `node tools/build.mjs`.

The build creates the three article pages with canonical, hreflang, Open Graph, Twitter card, BlogPosting + BreadcrumbList JSON-LD, adds them to the blog, the footer, related posts, the old `post.html?p=` redirect map and `sitemap.xml`.

## Run locally

```powershell
python -m http.server 4180
```

Open `http://localhost:4180/` (redirects to `/ru/`, `/uz/` or `/en/`).

See `SEO_IMPLEMENTATION_REPORT.md` for the SEO setup and the manual steps after deploy.
