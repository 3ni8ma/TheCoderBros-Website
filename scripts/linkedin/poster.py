#!/usr/bin/env python3
"""Render an informational poster (1080x1350) for a topic using the brand design."""

import base64
import html
import sys
from pathlib import Path

LOGO = Path(__file__).parent.parent.parent / "public" / "images" / "logo.png"
OUT_DIR = Path(__file__).parent / "out"

BRAND = {
    "bg": "#0A0A0F",
    "card": "#111118",
    "border": "#1E1E2E",
    "indigo": "#6366F1",
    "violet": "#8B5CF6",
    "amber": "#F59E0B",
    "text": "#F8FAFC",
    "muted": "#94A3B8",
}


def esc(s):
    return html.escape(str(s))


def build_html(topic, logo_b64):
    points = "".join(
        f"""
        <div class="point">
          <div class="point-num">{i:02d}</div>
          <div class="point-text">{esc(p)}</div>
        </div>"""
        for i, p in enumerate(topic["points"], 1)
    )

    code_html = ""
    if topic.get("code"):
        lines = topic["code"]["lines"]
        rendered = []
        for line in lines:
            line = esc(line)
            if not line.strip():
                rendered.append("<div class='code-line'>&nbsp;</div>")
                continue
            if line.lstrip().startswith("#"):
                rendered.append(f"<div class='code-line'><span class='c-comment'>{line}</span></div>")
            else:
                rendered.append(f"<div class='code-line'>{line}</div>")
        code_html = f"""
        <div class="code-card">
          <div class="code-head">
            <span class="dot" style="background:#F87171"></span>
            <span class="dot" style="background:#FBBF24"></span>
            <span class="dot" style="background:#34D399"></span>
            <span class="code-lang">{esc(topic['code']['lang'])}</span>
          </div>
          <div class="code-body">{''.join(rendered)}</div>
        </div>"""

    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{
    width: 1080px; height: 1350px;
    background: {BRAND['bg']};
    color: {BRAND['text']};
    font-family: -apple-system, "SF Pro Display", Inter, "Segoe UI", Roboto, sans-serif;
    display: flex; flex-direction: column;
    padding: 64px 72px 56px;
    overflow: hidden;
    position: relative;
  }}
  /* ambient glow */
  body::before {{
    content: ""; position: absolute; inset: 0;
    background:
      radial-gradient(640px 420px at 85% -8%, rgba(99,102,241,0.28), transparent 60%),
      radial-gradient(560px 380px at -10% 108%, rgba(139,92,246,0.22), transparent 60%);
    pointer-events: none;
  }}
  .top {{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 48px; position: relative; z-index: 1; }}
  .brand {{ display: flex; align-items: center; gap: 16px; }}
  .brand img {{ width: 54px; height: 54px; border-radius: 14px; }}
  .brand-name {{ font-size: 28px; font-weight: 800; letter-spacing: 2px; }}
  .brand-name span {{ color: {BRAND['muted']}; font-weight: 500; }}
  .badge {{
    font-size: 20px; font-weight: 700; letter-spacing: 3px;
    color: {BRAND['amber']};
    border: 2px solid {BRAND['amber']};
    border-radius: 999px; padding: 10px 26px;
  }}
  .chip {{
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 22px; font-weight: 600; color: #C7D2FE;
    background: linear-gradient(135deg, {BRAND['indigo']}22, {BRAND['violet']}22);
    border: 1px solid {BRAND['indigo']}55;
    border-radius: 999px; padding: 10px 26px; margin-bottom: 30px;
    position: relative; z-index: 1;
  }}
  .chip::before {{ content: ""; width: 14px; height: 14px; border-radius: 50%;
    background: linear-gradient(135deg, {BRAND['indigo']}, {BRAND['violet']}); }}
  h1 {{
    font-size: 76px; line-height: 1.04; font-weight: 800; letter-spacing: -2px;
    margin-bottom: 22px; position: relative; z-index: 1;
  }}
  h1 em {{
    font-style: normal;
    background: linear-gradient(90deg, {BRAND['indigo']}, {BRAND['violet']});
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }}
  .tagline {{
    font-size: 27px; line-height: 1.4; color: {BRAND['muted']};
    margin-bottom: 40px; position: relative; z-index: 1;
  }}
  .points {{
    background: {BRAND['card']};
    border: 1px solid {BRAND['border']};
    border-radius: 24px; padding: 30px 34px;
    display: flex; flex-direction: column; gap: 20px;
    position: relative; z-index: 1; margin-bottom: 32px;
  }}
  .point {{ display: flex; gap: 20px; align-items: flex-start; }}
  .point-num {{
    flex: none; width: 46px; height: 46px; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; font-weight: 800; color: white;
    background: linear-gradient(135deg, {BRAND['indigo']}, {BRAND['violet']});
  }}
  .point-text {{ font-size: 26px; line-height: 1.35; color: #E2E8F0; padding-top: 6px; }}
  .code-card {{
    background: #0D0D16;
    border: 1px solid {BRAND['border']};
    border-radius: 20px; overflow: hidden;
    position: relative; z-index: 1; margin-bottom: 34px;
  }}
  .code-head {{ display: flex; align-items: center; gap: 8px; padding: 14px 20px;
    background: {BRAND['card']}; border-bottom: 1px solid {BRAND['border']}; }}
  .dot {{ width: 13px; height: 13px; border-radius: 50%; }}
  .code-lang {{ margin-left: auto; font-family: "JetBrains Mono", ui-monospace, Menlo, monospace;
    font-size: 16px; color: {BRAND['muted']}; letter-spacing: 1px; }}
  .code-body {{ padding: 22px 26px; font-family: "JetBrains Mono", ui-monospace, Menlo, monospace;
    font-size: 22px; line-height: 1.55; color: #E2E8F0; overflow: hidden; }}
  .c-comment {{ color: #64748B; }}
  .footer {{
    margin-top: auto; position: relative; z-index: 1;
    display: flex; align-items: center; gap: 24px;
  }}
  .takeaway {{
    flex: 1;
    background: linear-gradient(135deg, {BRAND['indigo']}1A, {BRAND['violet']}1A);
    border-left: 6px solid {BRAND['amber']};
    border-radius: 16px; padding: 20px 26px;
    font-size: 25px; line-height: 1.35; color: #F1F5F9; font-weight: 500;
  }}
  .handle {{ font-size: 22px; color: {BRAND['muted']}; font-weight: 600; white-space: nowrap; }}
</style>
</head>
<body>
  <div class="top">
    <div class="brand">
      <img src="data:image/png;base64,{logo_b64}" alt="">
      <div class="brand-name">THE CODER <span>BROS</span></div>
    </div>
    <div class="badge">DAILY LESSON</div>
  </div>

  <div class="chip">{esc(topic['category'])}</div>
  <h1>{esc(topic['headline']).replace(' ', ' <em>', 1)}</h1>
  <div class="tagline">{esc(topic['tagline'])}</div>

  <div class="points">{points}</div>
  {code_html}

  <div class="footer">
    <div class="takeaway">{esc(topic['takeaway'])}</div>
    <div class="handle">FOLLOW FOR<br>DAILY LESSONS</div>
  </div>
</body>
</html>"""


def render(topic, out_path):
    logo_b64 = base64.b64encode(LOGO.read_bytes()).decode() if LOGO.exists() else ""
    html_doc = build_html(topic, logo_b64)
    html_path = OUT_DIR / f"{topic['slug']}.html"
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    html_path.write_text(html_doc)

    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", headless=True)
        page = browser.new_page(viewport={"width": 1080, "height": 1350})
        page.goto(html_path.as_uri())
        page.wait_for_timeout(400)
        page.screenshot(path=str(out_path), full_page=True)
        browser.close()
    return out_path


if __name__ == "__main__":
    from topics import TOPICS

    topic = TOPICS[int(sys.argv[1])] if len(sys.argv) > 1 else TOPICS[0]
    out = render(topic, OUT_DIR / f"{topic['slug']}.png")
    print(out)
