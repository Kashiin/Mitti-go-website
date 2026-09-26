# Mitti GO — полное SEO ТЗ

## 1. Цель

Полностью подготовить сайт **Mitti GO** к индексации и органическому продвижению в Google, Bing и Yandex.

Основной домен:

```text
https://mitti-go.uz
```

SEO должно быть реализовано для:

- главного лендинга;
- RU / UZ / EN версий;
- страницы блога;
- каждой отдельной статьи;
- изображений;
- социальных превью;
- Android / Android TV страниц и блоков, если они существуют;
- Privacy Policy / Terms / Contacts и других публичных страниц;
- будущих статей.

Главная задача:

> Каждая важная страница должна иметь отдельный индексируемый URL, собственные title/description/H1, canonical, hreflang и корректную HTML-разметку.

---

# 2. Важные ограничения

1. Не ломать текущий дизайн.
2. Не удалять существующие тексты без необходимости.
3. Не менять визуальный стиль Mitti GO.
4. Не менять существующую бизнес-логику сайта.
5. Не создавать SEO-спам и скрытые ключевые слова.
6. Не использовать fake reviews / fake ratings.
7. Не делать keyword stuffing.
8. Не делать критически важный SEO-контент доступным только после выполнения JavaScript.
9. Все изменения должны быть production-ready.
10. После изменений сайт должен работать на мобильных устройствах, планшетах и desktop.

---

# 3. Базовая URL-архитектура

Предпочтительная структура:

```text
https://mitti-go.uz/
https://mitti-go.uz/ru/
https://mitti-go.uz/uz/
https://mitti-go.uz/en/
```

Блог:

```text
https://mitti-go.uz/ru/blog/
https://mitti-go.uz/uz/blog/
https://mitti-go.uz/en/blog/
```

Статьи:

```text
https://mitti-go.uz/ru/blog/ekrannoe-vremya-dlya-detej/
https://mitti-go.uz/uz/blog/bolalar-uchun-ekran-vaqti/
https://mitti-go.uz/en/blog/screen-time-for-kids/
```

Если текущая архитектура проекта делает такую структуру слишком рискованной, допускается сохранить существующую систему страниц, НО:

- каждая языковая версия должна иметь уникальный URL;
- каждая статья должна иметь уникальный URL;
- все URL должны быть crawlable;
- каждая страница должна отдавать HTTP 200;
- canonical и hreflang должны быть корректными.

---

# 4. Корневой домен и redirects

Основной адрес:

```text
https://mitti-go.uz/
```

Не использовать `/index.html` как основной canonical URL.

Настроить redirect:

```text
https://mitti-go.uz/index.html
→
https://mitti-go.uz/
```

Также:

```text
http://mitti-go.uz/
→
https://mitti-go.uz/
```

Если доступен `www`:

```text
https://www.mitti-go.uz/
→
https://mitti-go.uz/
```

Redirect должен быть постоянным:

```text
301
```

Не создавать redirect loops.

---

# 5. HTML lang

Для русской версии:

```html
<html lang="ru">
```

Для узбекской:

```html
<html lang="uz">
```

Для английской:

```html
<html lang="en">
```

---

# 6. SEO главной страницы — Russian

## Title

```text
Mitti GO — безопасное видео для детей | Родительский контроль
```

## Meta description

```text
Mitti GO — приложение для безопасного просмотра детских видео. Родители выбирают разрешённый контент, управляют просмотром и экранным временем ребёнка.
```

## H1

```text
Безопасное видео для детей — только то, что выбрали родители
```

## Семантические направления

Использовать естественно в текстах:

```text
безопасное видео для детей
детское приложение
родительский контроль
контроль контента для детей
видео для детей
экранное время для детей
безопасный просмотр видео
детский видеоплеер
приложение для детей Android
приложение для Android TV
```

Не вставлять список ключей в интерфейс.

---

# 7. SEO главной страницы — Uzbek

## Title

```text
Mitti GO — bolalar uchun xavfsiz video | Ota-ona nazorati
```

## Meta description

```text
Mitti GO — bolalar uchun xavfsiz video ilovasi. Ota-onalar ruxsat etilgan kontentni tanlaydi, ko‘rishni va ekran vaqtini boshqaradi.
```

## H1

```text
Bolalar faqat siz tanlagan videolarni ko‘radi
```

## Тематические фразы

```text
bolalar uchun video
bolalar uchun xavfsiz video
ota-ona nazorati
bolalar ilovasi
ekran vaqti
bolalar kontenti
xavfsiz video ilova
bolalar uchun Android ilova
```

---

# 8. SEO главной страницы — English

## Title

```text
Mitti GO — Safe Videos for Kids | Parental Controls
```

## Meta description

```text
Mitti GO is a safe video app for kids. Parents choose approved content, manage viewing and control screen time on phones, tablets and TV.
```

## H1

```text
Safe videos for kids — chosen by parents
```

## Тематические направления

```text
safe videos for kids
kids video app
parental control app
safe video app for children
screen time for kids
kids Android app
parent controlled video
Android TV kids app
```

---

# 9. Canonical

Каждая индексируемая страница должна иметь self-referencing canonical.

Пример:

```html
<link rel="canonical" href="https://mitti-go.uz/ru/">
```

Статья:

```html
<link
  rel="canonical"
  href="https://mitti-go.uz/ru/blog/ekrannoe-vremya-dlya-detej/"
>
```

Canonical:

- всегда абсолютный;
- всегда HTTPS;
- без `/index.html`;
- соответствует фактическому публичному URL;
- не указывает на другой язык;
- не указывает на редирект.

---

# 10. hreflang

Все языковые версии одной страницы должны быть связаны.

Пример для главной:

```html
<link rel="alternate" hreflang="ru" href="https://mitti-go.uz/ru/">
<link rel="alternate" hreflang="uz" href="https://mitti-go.uz/uz/">
<link rel="alternate" hreflang="en" href="https://mitti-go.uz/en/">
<link rel="alternate" hreflang="x-default" href="https://mitti-go.uz/">
```

Для статьи RU:

```text
/ru/blog/ekrannoe-vremya-dlya-detej/
```

должны быть equivalents:

```text
/uz/blog/bolalar-uchun-ekran-vaqti/
/en/blog/screen-time-for-kids/
```

hreflang должен быть reciprocal.

---

# 11. Страница Blog

Пример URL:

```text
/ru/blog/
```

## Title

```text
Блог для родителей — дети, экранное время и безопасность | Mitti GO
```

## Description

```text
Советы для родителей о детском контенте, экранном времени, безопасности в интернете и здоровых цифровых привычках ребёнка.
```

## H1

```text
Блог Mitti GO для родителей
```

Карточки статей должны быть реальными HTML-ссылками:

```html
<a href="/ru/blog/ekrannoe-vremya-dlya-detej/">
```

Название статьи, excerpt и ссылка должны присутствовать в HTML.

Не хранить весь блог только в JS-массиве, который становится видимым после выполнения JavaScript.

---

# 12. Отдельная страница для каждой статьи

Каждый пост должен иметь:

- отдельный URL;
- HTTP 200;
- уникальный `<title>`;
- уникальный meta description;
- один H1;
- логичную H2/H3 структуру;
- publication date;
- modified date;
- автора или publisher;
- главное изображение;
- alt;
- canonical;
- hreflang;
- Open Graph;
- Twitter Card;
- BlogPosting / Article JSON-LD;
- BreadcrumbList JSON-LD;
- внутренние ссылки;
- CTA на Mitti GO;
- ссылку назад в блог.

Контент статьи должен присутствовать в HTML.

---

# 13. Пример SEO статьи

URL:

```text
/ru/blog/ekrannoe-vremya-dlya-detej/
```

## Title

```text
Экранное время для детей 2–5 лет: нормы и советы | Mitti GO
```

## Description

```text
Сколько экранного времени можно ребёнку? Разбираем рекомендации для детей 2–5 лет и рассказываем, как спокойно закончить просмотр.
```

## H1

```text
Сколько экранного времени нужно дошкольнику
```

## Структура

```text
H1 Сколько экранного времени нужно дошкольнику

Вступление

H2 Сколько экранного времени рекомендуется детям

H2 Почему важно не только время, но и контент

H2 Как закончить просмотр без слёз

H3 Договоритесь заранее
H3 Предупредите ребёнка
H3 Дайте закончить видео
H3 Предложите другое занятие

H2 Как Mitti GO помогает родителям

H2 Частые вопросы
```

---

# 14. Темы для SEO-блога

## Экранное время

```text
сколько экранного времени можно ребёнку
экранное время для детей 2 лет
экранное время для детей 3 лет
экранное время для детей 4 лет
как ограничить телефон ребёнку
как уменьшить экранное время ребёнка
```

## Безопасность

```text
безопасный видеоконтент для детей
как защитить ребёнка от нежелательных видео
родительский контроль видео
безопасный интернет для ребёнка
что смотрит ребёнок в телефоне
```

## Детский контент

```text
какие видео можно смотреть детям
как выбрать видео для ребёнка
полезные видео для детей
образовательные видео для детей
как выбирать детский контент
```

## Shorts / короткие видео

```text
вредны ли shorts детям
короткие видео для детей
влияние коротких видео на детей
можно ли детям смотреть shorts
```

## Родительские вопросы

```text
как забрать телефон у ребёнка без истерики
ребёнок постоянно просит телефон
как установить правила экранного времени
цифровые привычки ребёнка
как контролировать контент ребёнка
```

---

# 15. Внутренняя перелинковка

Статьи должны ссылаться друг на друга.

Пример:

Статья:

```text
Экранное время для детей
```

может ссылаться на:

```text
Почему короткие видео могут затягивать детей
Как выбрать безопасный контент
Как закончить просмотр без истерики
Что должен уметь хороший родительский контроль
```

На каждой статье добавить CTA:

```text
Попробуйте Mitti GO
```

Ссылка должна вести на соответствующую языковую версию лендинга.

---

# 16. Breadcrumbs

В интерфейсе:

```text
Главная → Блог → Экранное время для детей
```

Добавить BreadcrumbList JSON-LD.

Пример:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": "https://mitti-go.uz/ru/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Блог",
      "item": "https://mitti-go.uz/ru/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Экранное время для детей",
      "item": "https://mitti-go.uz/ru/blog/ekrannoe-vremya-dlya-detej/"
    }
  ]
}
</script>
```

---

# 17. Article / BlogPosting Schema

Для каждой статьи:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Сколько экранного времени нужно дошкольнику",
  "description": "Сколько экранного времени можно ребёнку и как спокойно закончить просмотр.",
  "image": [
    "https://mitti-go.uz/assets/blog/screen-time.webp"
  ],
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "author": {
    "@type": "Organization",
    "name": "Mitti GO"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mitti GO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mitti-go.uz/assets/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "ARTICLE_CANONICAL_URL"
  }
}
</script>
```

Использовать реальные даты.

---

# 18. Schema главной страницы

Добавить:

- Organization
- WebSite
- SoftwareApplication

Пример SoftwareApplication:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mitti GO",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Android, Android TV",
  "description": "Safe video app for kids with parental content controls.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

ВАЖНО:

Не добавлять:

- fake rating;
- fake review count;
- fake download count;
- данные, которых фактически нет.

---

# 19. Open Graph

На каждой странице:

```html
<meta property="og:site_name" content="Mitti GO">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="...">
<meta property="og:image" content="https://mitti-go.uz/assets/og/....webp">
```

Для лендинга:

```html
<meta property="og:type" content="website">
```

Для статьи:

```html
<meta property="og:type" content="article">
```

Для статей добавить при необходимости:

```html
<meta property="article:published_time" content="...">
<meta property="article:modified_time" content="...">
```

---

# 20. Twitter/X Card

Добавить:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

---

# 21. OG Images

Для:

- Landing;
- Blog;
- каждой статьи.

Рекомендуемый размер:

```text
1200 × 630
```

Примеры:

```text
/assets/og/mitti-go.webp
/assets/og/blog.webp
/assets/og/screen-time-kids.webp
/assets/og/safe-video-kids.webp
```

---

# 22. Изображения

Не использовать бессмысленные имена:

```text
image1.png
img2.png
photo123.png
```

Использовать:

```text
mitti-go-parental-control.webp
mitti-go-android-tv.webp
screen-time-for-kids.webp
safe-video-app-kids.webp
```

Добавлять информативные alt:

```html
<img
  src="/assets/mitti-go-parental-control.webp"
  alt="Родительский контроль в приложении Mitti GO"
>
```

Для чисто декоративных изображений:

```html
alt=""
```

---

# 23. Performance images

По возможности:

```text
WebP
AVIF
```

Для изображений ниже первого экрана:

```html
loading="lazy"
```

Hero / LCP изображение не lazy-load.

Добавить width и height, чтобы уменьшить CLS.

Пример:

```html
<img
  src="/assets/example.webp"
  width="800"
  height="600"
  alt="..."
>
```

---

# 24. robots.txt

Создать:

```text
https://mitti-go.uz/robots.txt
```

Содержание:

```text
User-agent: *
Allow: /

Sitemap: https://mitti-go.uz/sitemap.xml
```

Не блокировать:

```text
/assets/
/blog/
/ru/
/uz/
/en/
```

---

# 25. sitemap.xml

Создать:

```text
https://mitti-go.uz/sitemap.xml
```

Добавить:

```text
/
/ru/
/uz/
/en/

/ru/blog/
/uz/blog/
/en/blog/

все статьи
privacy
terms
contacts
другие публичные страницы
```

Использовать только canonical URL.

Не добавлять:

- redirects;
- 404;
- duplicate pages;
- `index.html`;
- noindex pages.

Для реальных обновлений можно использовать `<lastmod>`.

---

# 26. favicon и icons

Проверить/создать:

```text
/favicon.ico
/favicon-16x16.png
/favicon-32x32.png
/apple-touch-icon.png
/android-chrome-192x192.png
/android-chrome-512x512.png
```

---

# 27. site.webmanifest

Проверить:

```text
/site.webmanifest
```

Минимально:

```json
{
  "name": "Mitti GO",
  "short_name": "Mitti GO",
  "icons": [],
  "start_url": "/",
  "display": "standalone"
}
```

Сохранить существующие brand colors.

---

# 28. Heading structure

На каждой странице:

- только один основной H1;
- H2 для крупных разделов;
- H3 только внутри H2.

Пример:

```text
H1

H2
  H3
  H3

H2

H2
  H3
```

Не использовать H1-H6 только ради размера шрифта.

---

# 29. Semantic HTML

Использовать:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

где это логично.

Для навигации и карточек использовать реальные `<a href="">`.

Не делать навигацию только через `onclick`.

---

# 30. Footer SEO

Footer должен содержать обычные crawlable ссылки:

```text
Главная
Как это работает
Родителям
Безопасность
Экранное время
Android TV
Тарифы
Блог
FAQ
Контакты
Privacy Policy
Terms of Use
```

Языки:

```text
O‘zbekcha
Русский
English
```

---

# 31. 404

Создать красивую страницу 404 в стиле Mitti GO.

Она должна отдавать настоящий HTTP status:

```text
404
```

Контент:

```text
Страница не найдена

Вернуться на главную
Перейти в блог
```

Не отдавать 200 для несуществующей страницы.

---

# 32. JavaScript SEO

Очень важно.

Следующий контент должен быть доступен в исходном HTML:

- title;
- description;
- H1;
- текст статьи;
- основные H2;
- ссылки на статьи;
- дата публикации;
- canonical;
- hreflang;
- schema.

Если проект SPA:

- использовать pre-render / SSR / static generation;
- либо генерировать отдельные HTML-страницы для индексируемых страниц.

Не рассчитывать на то, что Google всегда идеально исполнит JavaScript.

---

# 33. Core Web Vitals

Оптимизировать:

- LCP;
- INP;
- CLS.

Минимизировать:

- тяжёлый JavaScript;
- render-blocking CSS;
- огромные изображения;
- ненужные библиотеки;
- неиспользуемый CSS;
- неиспользуемый JS.

Не ломать дизайн ради 100/100 PageSpeed.

Приоритет:

1. корректность;
2. UX;
3. SEO;
4. performance.

---

# 34. Fonts

Если используются web-fonts:

- использовать `font-display: swap`;
- preload только реально критичных шрифтов;
- не загружать десятки вариантов начертаний.

---

# 35. Internal links

Все важные страницы должны быть доступны максимум за несколько кликов.

Главная должна ссылаться на:

- Blog;
- FAQ;
- Privacy;
- Terms;
- основные продуктовые разделы.

Blog должен ссылаться на статьи.

Статьи должны ссылаться:

- на Blog;
- на главную;
- на связанные статьи.

---

# 36. Индексация

У публичных SEO-страниц НЕ должно быть:

```html
<meta name="robots" content="noindex">
```

Можно явно использовать:

```html
<meta name="robots" content="index,follow">
```

Но только если это действительно нужно.

---

# 37. Privacy и Terms

Privacy Policy и Terms должны иметь:

- отдельные URL;
- title;
- H1;
- canonical.

Если не нужно продвигать их в поиске — решение о `noindex` принять отдельно, но ссылки должны оставаться доступными пользователям.

---

# 38. Search Console

После деплоя:

1. Подключить Google Search Console.
2. Добавить домен:
   ```text
   mitti-go.uz
   ```
3. Отправить:
   ```text
   https://mitti-go.uz/sitemap.xml
   ```
4. Проверить URL Inspection для:
   ```text
   /
   /ru/
   /uz/
   /en/
   /ru/blog/
   /uz/blog/
   /en/blog/
   каждой статьи
   ```

---

# 39. Bing Webmaster Tools

Подключить домен.

Отправить:

```text
https://mitti-go.uz/sitemap.xml
```

---

# 40. Yandex Webmaster

Подключить:

```text
mitti-go.uz
```

Добавить:

```text
https://mitti-go.uz/sitemap.xml
```

---

# 41. Analytics

Если уже используется Google Analytics или другая аналитика — не ломать.

Если аналитики нет, не добавлять её без согласования.

SEO не должно зависеть от analytics.

---

# 42. Mobile SEO

Проверить:

```text
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Не должно быть:

- горизонтального скролла;
- мелкого текста;
- слишком маленьких tap-targets;
- перекрывающихся кнопок;
- layout shifts.

---

# 43. Accessibility

Базовые требования:

- правильные alt;
- aria-label для icon-only buttons;
- правильный контраст;
- keyboard navigation;
- focus states;
- кнопка должна быть `<button>`;
- ссылка должна быть `<a>`.

---

# 44. Не создавать doorway pages

Запрещено создавать страницы ради одного ключа без собственной полезности.

Плохо:

```text
/safe-video-kids-1/
/safe-video-kids-2/
/safe-video-kids-3/
```

Каждая SEO-страница должна реально помогать пользователю.

---

# 45. Не генерировать фальшивый FAQ ради schema

FAQ должен соответствовать видимому контенту.

Если FAQ schema используется, вопросы и ответы должны быть реально видны пользователю.

---

# 46. Приоритетные будущие статьи

Рекомендуемые первые статьи:

1. Сколько экранного времени нужно дошкольнику
2. Вредны ли Shorts детям
3. Как выбрать безопасные видео для ребёнка
4. Как закончить просмотр без истерики
5. Что такое родительский контроль контента
6. Как ограничить экранное время ребёнка
7. Ребёнок постоянно просит телефон — что делать
8. Почему важно выбирать контент, а не только ограничивать время
9. Какие видео полезны детям 2–5 лет
10. Как сделать телефон безопаснее для ребёнка
11. Безопасный просмотр видео на Android TV
12. Как подготовить планшет для ребёнка
13. Что родители должны проверять в детском приложении
14. Почему autoplay может быть проблемой для детей
15. Как создать здоровые цифровые привычки ребёнка

---

# 47. Контентные требования к статьям

Статья должна:

- отвечать на конкретный вопрос;
- быть полезной родителю;
- не повторять одну и ту же фразу десятки раз;
- не содержать медицинских утверждений без источника;
- не запугивать родителей;
- отделять факты от рекомендаций;
- использовать короткие абзацы;
- иметь H2/H3;
- иметь FAQ, если это логично;
- содержать внутренние ссылки;
- содержать CTA на продукт только там, где он естественен.

---

# 48. SEO template для новой статьи

Для каждого нового поста должна существовать структура данных примерно такого вида:

```text
slug
language
title
metaDescription
h1
excerpt
datePublished
dateModified
author
heroImage
heroImageAlt
canonical
alternateLanguages
ogTitle
ogDescription
ogImage
content
relatedPosts
```

Если проект поддерживает JSON/Markdown/content-файлы — вынести SEO-поля туда.

---

# 49. Markdown articles

Если статьи хранятся в Markdown, использовать Front Matter.

Пример:

```md
---
title: "Экранное время для детей 2–5 лет: нормы и советы"
description: "Сколько экранного времени можно ребёнку и как спокойно закончить просмотр."
slug: "ekrannoe-vremya-dlya-detej"
language: "ru"
datePublished: "2026-09-24"
dateModified: "2026-09-24"
image: "/assets/blog/screen-time.webp"
imageAlt: "Ребёнок смотрит видео под контролем родителя"
---
```

При сборке автоматически генерировать:

- title;
- meta description;
- canonical;
- Open Graph;
- Article schema;
- sitemap entry.

---

# 50. Sitemap automation

При добавлении новой статьи желательно автоматически:

1. генерировать страницу;
2. добавлять canonical;
3. добавлять hreflang;
4. добавлять OG;
5. добавлять JSON-LD;
6. добавлять URL в sitemap.

Не требовать ручного изменения 5–10 файлов для одной новой статьи, если архитектура проекта позволяет автоматизацию.

---

# 51. SEO validation

После реализации проверить:

## Для каждой индексируемой страницы

```text
[ ] HTTP 200
[ ] unique title
[ ] unique meta description
[ ] one H1
[ ] canonical
[ ] hreflang
[ ] HTML lang
[ ] crawlable links
[ ] no accidental noindex
[ ] OG
[ ] Twitter Card
[ ] image alt
[ ] responsive
```

## Для статьи

```text
[ ] BlogPosting schema
[ ] BreadcrumbList schema
[ ] publication date
[ ] modified date
[ ] author/publisher
[ ] related articles
[ ] CTA
[ ] included in sitemap
```

---

# 52. Проверка файлов

Должны открываться:

```text
https://mitti-go.uz/robots.txt
https://mitti-go.uz/sitemap.xml
https://mitti-go.uz/site.webmanifest
```

---

# 53. Проверка redirect

Проверить:

```text
/index.html → /
http → https
www → non-www
```

Без цепочек из нескольких redirect.

---

# 54. Проверка structured data

Проверить:

- Google Rich Results Test;
- Schema.org validator при необходимости.

Исправить критические ошибки.

---

# 55. Проверка PageSpeed

Проверить:

- Mobile;
- Desktop.

Не оптимизировать только ради красивой цифры.

Особое внимание:

- LCP;
- CLS;
- oversized images;
- unused JS;
- unused CSS.

---

# 56. Финальный отчёт Codex

После реализации создать файл:

```text
SEO_IMPLEMENTATION_REPORT.md
```

В нём указать:

## Реализовано

- URL architecture;
- redirects;
- canonical;
- hreflang;
- metadata;
- blog pages;
- article pages;
- schema;
- sitemap;
- robots;
- OG;
- image optimizations;
- performance improvements.

## Изменённые файлы

Полный список.

## Новые файлы

Полный список.

## Что требует ручного действия

Например:

```text
Google Search Console verification
Bing Webmaster verification
Yandex Webmaster verification
DNS verification
```

## Проверенные URL

Указать реальные локальные/production маршруты.

---

# 57. Acceptance criteria

Работа считается завершённой только если:

1. Главная открывается через `https://mitti-go.uz/`.
2. `/index.html` не является основным URL.
3. Есть robots.txt.
4. Есть sitemap.xml.
5. Landing имеет полный SEO head.
6. Каждая языковая версия имеет отдельный URL.
7. Работает hreflang.
8. Есть self-canonical.
9. Blog crawlable без зависимости от JS.
10. Каждая статья — отдельная HTML-страница.
11. Каждая статья имеет уникальный SEO.
12. Есть BlogPosting schema.
13. Есть Breadcrumb schema.
14. Есть Open Graph.
15. Есть Twitter cards.
16. Все картинки имеют корректные alt.
17. В sitemap нет мусорных URL.
18. Не осталось accidental `noindex`.
19. Сайт не сломан визуально.
20. Mobile версия работает.
21. Все внутренние ссылки работают.
22. 404 отдаёт настоящий 404.
23. Все public pages работают по HTTPS.
24. Нет redirect loops.
25. Создан `SEO_IMPLEMENTATION_REPORT.md`.

---

# 58. Главное правило

Не ограничиваться добавлением:

```html
<title>
<meta name="description">
```

Нужно выполнить **полноценную SEO-подготовку сайта**, включая архитектуру страниц, crawlability, blog pages, individual article URLs, structured data, multilingual SEO, sitemap, robots, canonical, hreflang, internal linking и performance.

Если текущая архитектура проекта мешает реализации какого-либо пункта:

1. сначала изучить текущий код;
2. выбрать самый безопасный production-ready способ;
3. реализовать его;
4. не ломать существующий UI;
5. описать принятое решение в `SEO_IMPLEMENTATION_REPORT.md`.

---

# 59. Итоговая цель

Google / Bing / Yandex должны иметь возможность отдельно находить и индексировать:

```text
Mitti GO
безопасное видео для детей
родительский контроль для детей
экранное время для детей
вредны ли Shorts детям
как выбрать безопасное видео ребёнку
детское приложение Android
Android TV для детей
kids safe video app
parental control video app
bolalar uchun xavfsiz video
ota-ona nazorati
```

Но сайт должен оставаться написанным в первую очередь **для родителей**, а не для поискового робота.
