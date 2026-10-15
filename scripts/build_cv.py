"""Render scripts/cv.html to public/Noel-John-CV.pdf with headless Chrome.

Fonts are inlined as base64 @font-face rules because headless Chrome only
embeds webfonts it can read locally; a linked font leaves the PDF to reflow
in whatever the reader substitutes.

Usage:  python scripts/build_cv.py
"""

from __future__ import annotations

import base64
import os
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "scripts" / "cv.html"
OUTPUT = ROOT / "public" / "Noel-John-CV.pdf"
CHROME = Path(
    os.environ.get(
        "CHROME_PATH", r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    )
)
FONT_DIR = Path(os.environ.get("FONT_DIR", r"C:\Windows\Fonts"))
# (family, weight, style) -> file. Palatino matches the site's serif.
FONTS: dict[tuple[str, int, str], str] = {
    ("CV Serif", 400, "normal"): "pala.ttf",
    ("CV Serif", 700, "normal"): "palab.ttf",
    ("CV Serif", 400, "italic"): "palai.ttf",
}


def font_css() -> str:
    rules = []
    for (family, weight, style), name in FONTS.items():
        path = FONT_DIR / name
        if not path.exists():
            raise FileNotFoundError(f"Font not found: {path}. Set FONT_DIR.")
        data = base64.b64encode(path.read_bytes()).decode("ascii")
        rules.append(
            f'@font-face {{ font-family: "{family}"; font-weight: {weight}; font-style: {style}; '
            f'src: url(data:font/ttf;base64,{data}) format("truetype"); }}'
        )
    return "\n".join(rules)


def render(html: str) -> None:
    if not CHROME.exists():
        raise FileNotFoundError(f"Chrome not found at {CHROME}. Set CHROME_PATH.")
    OUTPUT.unlink(
        missing_ok=True
    )  # so a silent Chrome failure can't pass on a stale PDF
    with tempfile.TemporaryDirectory() as tmp:
        page = Path(tmp) / "cv.html"
        page.write_text(html, encoding="utf-8")
        try:
            result = subprocess.run(
                [
                    str(CHROME),
                    "--headless=new",
                    "--disable-gpu",
                    "--no-pdf-header-footer",
                    f"--print-to-pdf={OUTPUT}",
                    page.as_uri(),
                ],
                capture_output=True,
                text=True,
                timeout=120,
            )
        except subprocess.TimeoutExpired as exc:
            raise RuntimeError("Chrome timed out while printing the CV") from exc
    if result.returncode != 0 or not OUTPUT.exists():
        raise RuntimeError(
            f"Chrome failed ({result.returncode}): {result.stderr[-800:]}"
        )


def main() -> int:
    html = SOURCE.read_text(encoding="utf-8").replace("/*FONTS*/", font_css(), 1)
    render(html)
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size // 1024} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
