#!/usr/bin/env python3
"""Render a 1080x1350 reference card for a topic.

Deliberately quiet: one page, white, hairline rules, no gradients, no
badges. The previous version used the gradient-glow-and-pill-badge look
that every automated dev account produces, which is the thing that made
these read as machine output rather than a person's notes.
"""

import html
import sys
from pathlib import Path

OUT_DIR = Path(__file__).parent / "out"

PAPER = "#FFFFFF"
INK = "#141414"
BODY = "#2E2E2E"
MUTED = "#767676"
RULE = "#DEDEDE"
CODE_BG = "#F7F7F5"

SITE = "thecoderbros.vercel.app"


def esc(s):
    return html.escape(str(s))


def headline_size(text):
    """Longer headlines need to come down or they wrap into the body."""
    n = len(text)
    if n <= 22:
        return 88
    if n <= 32:
        return 74
    if n <= 44:
        return 62
    return 54


def build_html(topic):
    points = "".join(
        f'<div class="row"><div class="idx">{i}</div>'
        f'<div class="txt">{esc(p)}</div></div>'
        for i, p in enumerate(topic["points"], 1)
    )

    code_html = ""
    if topic.get("code"):
        rendered = []
        for line in topic["code"]["lines"]:
            line = esc(line)
            if not line.strip():
                rendered.append("&nbsp;")
            elif line.lstrip().startswith("#"):
                rendered.append(f'<span class="c">{line}</span>')
            else:
                rendered.append(line)
        # Skip the label when it repeats the category line right above it.
        same_lang = topic["code"]["lang"].strip().lower() == topic["category"].strip().lower()
        label = "" if same_lang else f'<div class="code-label">{esc(topic["code"]["lang"])}</div>'
        code_html = f'{label}<pre class="code">{"<br>".join(rendered)}</pre>'

    return f"""<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{
    width:1080px; height:1350px; background:{PAPER}; color:{INK};
    font-family:-apple-system, "SF Pro Text", "Segoe UI", Roboto, sans-serif;
    padding:76px 84px 64px; display:flex; flex-direction:column;
    -webkit-font-smoothing:antialiased;
  }}
  .main {{ flex:1; display:flex; flex-direction:column; justify-content:center; min-height:0; }}
  .masthead {{
    display:flex; justify-content:space-between; align-items:baseline;
    font-family:"SF Mono", Menlo, ui-monospace, monospace;
    font-size:17px; color:{MUTED}; letter-spacing:.02em;
    padding-bottom:18px;
  }}
  .cat {{
    font-family:"SF Mono", Menlo, ui-monospace, monospace;
    font-size:16px; color:{MUTED}; text-transform:uppercase;
    letter-spacing:.14em; margin:52px 0 22px;
  }}
  h1 {{
    font-size:{headline_size(topic["headline"])}px; line-height:1.06;
    font-weight:700; letter-spacing:-.028em; color:{INK}; margin-bottom:22px;
  }}
  .tagline {{ font-size:27px; line-height:1.42; color:{MUTED}; margin-bottom:44px; max-width:860px; }}
  .rows {{ margin-bottom:40px; }}
  .row {{ display:flex; gap:22px; padding:14px 0; border-top:1px solid {RULE}; }}
  .row:first-child {{ border-top:none; }}
  .idx {{
    flex:none; width:26px; font-family:"SF Mono", Menlo, ui-monospace, monospace;
    font-size:19px; color:{MUTED}; padding-top:5px;
  }}
  .txt {{ font-size:26px; line-height:1.42; color:{BODY}; }}
  .code-label {{
    font-family:"SF Mono", Menlo, ui-monospace, monospace; font-size:15px;
    color:{MUTED}; text-transform:uppercase; letter-spacing:.12em; margin-bottom:10px;
  }}
  .code {{
    background:{CODE_BG}; border:1px solid {RULE}; border-radius:4px;
    padding:26px 30px; font-family:"SF Mono", Menlo, ui-monospace, monospace;
    font-size:21px; line-height:1.62; color:{BODY};
    white-space:pre-wrap; word-break:break-word; margin-bottom:36px;
  }}
  .code .c {{ color:#8A8A8A; }}
  .takeaway {{ font-size:25px; line-height:1.45; color:{INK}; padding-top:24px; }}
  .takeaway .lead {{
    font-family:"SF Mono", Menlo, ui-monospace, monospace; font-size:15px;
    color:{MUTED}; text-transform:uppercase; letter-spacing:.12em; display:block; margin-bottom:10px;
  }}
  .foot {{
    margin-top:auto; padding-top:26px; display:flex; justify-content:space-between;
    font-family:"SF Mono", Menlo, ui-monospace, monospace;
    font-size:17px; color:{MUTED};
  }}
</style></head><body>
  <div class="masthead"><span>{SITE}</span><span>The Coder Bros</span></div>
  <div class="rule"></div>

  <div class="cat">{esc(topic["category"])}</div>
  <h1>{esc(topic["headline"])}</h1>
  <div class="tagline">{esc(topic["tagline"])}</div>

  <div class="rows">{points}</div>
  {code_html}

  <div class="takeaway"><span class="lead">Worth remembering</span>{esc(topic["takeaway"])}</div>

  <div class="foot"><span>Code, explained plainly.</span><span>{SITE}/blog</span></div>
</body></html>"""


def render(topic, out_path):
    html_path = OUT_DIR / f"{topic['slug']}.html"
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    html_path.write_text(build_html(topic))

    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1080, "height": 1350})
        page.goto(html_path.as_uri())
        page.wait_for_timeout(400)
        page.screenshot(path=str(out_path), full_page=True, timeout=60000)
        browser.close()
    return out_path


if __name__ == "__main__":
    from topics import TOPICS

    topic = TOPICS[int(sys.argv[1])] if len(sys.argv) > 1 else TOPICS[0]
    print(render(topic, OUT_DIR / f"{topic['slug']}.png"))
