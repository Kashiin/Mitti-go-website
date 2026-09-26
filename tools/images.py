"""Mitti GO image assets: optimized logos/mascot, favicons, Android icons and Open Graph images (1200x630).
Run from the project root:  python tools/images.py   (needs Pillow)
Re-run after adding a post with a new cover — it writes assets/og/post-<id>.jpg for every cover it finds in src/posts.js."""
import re
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "assets" / "images"
OG = ROOT / "assets" / "og"
OG.mkdir(parents=True, exist_ok=True)


def fit_height(path, h):
    im = Image.open(path)
    if im.height > h:
        im = im.resize((round(im.width * h / im.height), h), Image.LANCZOS)
        im.save(path, optimize=True)
    return Image.open(path).size


def fit_width(path, w):
    im = Image.open(path)
    if im.width > w:
        im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        im.save(path, optimize=True)
    return Image.open(path).size


# 1) logos are shown 24–44 px high: keep ~3x for sharp retina rendering
print("logo-main", fit_height(IMG / "logo-main.png", 150))
print("logo-white", fit_height(IMG / "logo-white.png", 150))
print("mascot", fit_width(IMG / "mascot.png", 640))

# 2) icons from the mascot (trimmed, centred on a square)
src = Image.open(IMG / "mascot.png").convert("RGBA")
src = src.crop(src.getchannel("A").point(lambda a: 255 if a > 16 else 0).getbbox())
side = max(src.size)
sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
sq.paste(src, ((side - src.width) // 2, (side - src.height) // 2))
for n in (16, 32):
    sq.resize((n, n), Image.LANCZOS).save(ROOT / f"favicon-{n}x{n}.png", optimize=True)
for n in (192, 512):
    sq.resize((n, n), Image.LANCZOS).save(ROOT / f"android-chrome-{n}x{n}.png", optimize=True)
sq.save(ROOT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])


def on_white(size, pad):
    bg = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    inner = size - 2 * pad
    bg.alpha_composite(sq.resize((inner, inner), Image.LANCZOS), (pad, pad))
    return bg.convert("RGB")


on_white(180, 12).save(ROOT / "apple-touch-icon.png", optimize=True)
on_white(512, 90).save(ROOT / "maskable-512x512.png", optimize=True)  # safe zone for Android adaptive icons

# 3) Open Graph images 1200x630
W, H = 1200, 630


def gradient(a, b):
    g = Image.linear_gradient("L").rotate(90, expand=True).resize((W, H))
    return Image.composite(Image.new("RGB", (W, H), b), Image.new("RGB", (W, H), a), g).convert("RGBA")


def paste_fit(bg, im, box):
    x0, y0, x1, y1 = box
    im = im.copy()
    im.thumbnail((x1 - x0, y1 - y0), Image.LANCZOS)
    bg.alpha_composite(im, (x0 + (x1 - x0 - im.width) // 2, y0 + (y1 - y0 - im.height) // 2))


logo = Image.open(IMG / "logo-main.png").convert("RGBA")
mascot = Image.open(IMG / "mascot.png").convert("RGBA")
kid = Image.open(IMG / "kid-tablet.webp").convert("RGB")

# landing: logo + mascot on the left, girl with tablet on the right
bg = gradient((233, 250, 240), (236, 245, 255))
k = kid.crop((0, 60, 979, 1100))
k = k.resize((round(k.width * H / k.height), H), Image.LANCZOS)
m = Image.new("L", k.size, 0)
ImageDraw.Draw(m).rectangle((90, -40, k.width + 40, H + 40), fill=255)
bg.paste(k, (W - k.width, 0), m.filter(ImageFilter.GaussianBlur(45)))
paste_fit(bg, logo, (70, 90, 560, 250))
paste_fit(bg, mascot, (90, 280, 540, 560))
bg.convert("RGB").save(OG / "mitti-go.jpg", quality=86, optimize=True, progressive=True)

# blog: mascot centred on the brand gradient with the logo
bg = gradient((233, 250, 240), (255, 244, 226))
d = ImageDraw.Draw(bg)
for cx, cy, r, col in [(160, 120, 90, (0, 120, 255, 40)), (1050, 520, 120, (254, 190, 6, 50)), (1080, 120, 60, (22, 200, 105, 45))]:
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=col)
paste_fit(bg, logo, (350, 60, 850, 200))
paste_fit(bg, mascot, (260, 230, 940, 590))
bg.convert("RGB").save(OG / "blog.jpg", quality=86, optimize=True, progressive=True)

# every post cover (1400x600) -> 1200x630 centre crop
posts = (ROOT / "src" / "posts.js").read_text(encoding="utf-8")
for pid, cov in re.findall(r'slug: "([a-z0-9-]+)",[\s\S]*?cover: "([^"]+)"', posts):
    im = Image.open(ROOT / cov.lstrip("/")).convert("RGB")
    s = H / im.height
    im = im.resize((round(im.width * s), H), Image.LANCZOS)
    x = (im.width - W) // 2
    im.crop((x, 0, x + W, H)).save(OG / f"post-{pid}.jpg", quality=85, optimize=True, progressive=True)
    print("og", pid)
