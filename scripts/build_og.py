"""Render the 1200x630 OpenGraph share image to public/og.png.

Usage:  python scripts/build_og.py
"""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
HEADSHOT = ROOT / "src" / "assets" / "headshot.jpg"
OUTPUT = ROOT / "public" / "og.png"
FONT_DIR = Path(os.environ.get("FONT_DIR", r"C:\Windows\Fonts"))
W, H = 1200, 630
PAPER, INK, INK_2, ACCENT, RULE = "#ffffff", "#282828", "#4a4a4a", "#676767", "#e6e6e6"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    path = FONT_DIR / name
    if not path.exists():
        raise FileNotFoundError(
            f"Font {path} not found. Set FONT_DIR to a folder containing it."
        )
    return ImageFont.truetype(str(path), size)


def main() -> None:
    art = Image.open(ROOT / "src" / "assets" / "dusk.jpg").convert("RGB")
    # Crop the band with the sun and the ridgeline, then darken the bottom for the name.
    canvas = ImageOps.fit(art, (W, H), centering=(0.5, 0.66))
    shade = Image.linear_gradient("L").resize((W, H))
    canvas = Image.composite(Image.new("RGB", (W, H), "#070910"), canvas, shade.point(lambda v: int(max(0, v - 110) * 1.6) if v > 110 else 0))
    d = ImageDraw.Draw(canvas)
    d.text((72, 430), "Noel John", font=font("segoeuib.ttf", 84), fill="#ece6dc")
    d.text((76, 535), "Data & ML engineer in Vancouver", font=font("segoeui.ttf", 30), fill="#c4bdb2")
    canvas.save(OUTPUT, optimize=True)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
