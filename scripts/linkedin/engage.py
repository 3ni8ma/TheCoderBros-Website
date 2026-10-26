#!/usr/bin/env python3
"""Find posts worth replying to, then publish comments you approved.

Scanning is read-only. Publishing only ever touches entries marked
`approved`, because unattended commenting is the fastest way to get a page
restricted and the comments it produces are worth nothing anyway.

  python3 engage.py scan --limit 12   # harvest the feed into queue.json
  python3 engage.py review            # show drafts
  python3 engage.py post --limit 3    # publish approved drafts

Each queued post keeps its permalink. The feed re-sorts constantly, so a post
that was on screen during the scan is often gone by the time you approve it.
"""

import argparse
import hashlib
import json
import random
import re
import sys
import tempfile
import time
from datetime import date
from pathlib import Path

BASE = Path(__file__).parent
QUEUE = BASE / "queue.json"
FEED_URL = "https://www.linkedin.com/feed/"
COMMENT_EDITOR = 'div[role="textbox"][aria-label="Text editor for creating comment"]'


def log(msg):
    print(f"[{date.today().isoformat()}] {msg}", flush=True)


def load_queue():
    if QUEUE.exists():
        return json.loads(QUEUE.read_text())
    return {"posts": []}


def save_queue(q):
    QUEUE.write_text(json.dumps(q, indent=2))


def open_session():
    """Reuse the logged-in profile the poster script already drives."""
    from playwright.sync_api import sync_playwright

    sys.path.insert(0, str(BASE))
    from post import prepare_profile

    work_dir = tempfile.mkdtemp(prefix="tc-engage-")
    pw = sync_playwright().start()
    ctx = pw.chromium.launch_persistent_context(
        user_data_dir=prepare_profile(work_dir),
        headless=True,
        args=["--disable-blink-features=AutomationControlled"],
        viewport={"width": 1440, "height": 1000},
    )
    ctx.grant_permissions(["clipboard-read", "clipboard-write"])
    page = ctx.pages[0] if ctx.pages else ctx.new_page()
    page.goto(FEED_URL, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(6000)
    if "authwall" in page.url or "/login" in page.url:
        raise SystemExit("AUTH_FAILED: LinkedIn session not logged in")
    return pw, ctx, page


def post_cards(page):
    return page.locator("div[role=listitem][componentkey]")


def card_text(card):
    box = card.locator('[data-testid="expandable-text-box"]')
    return box.first.inner_text().strip() if box.count() else ""


def card_author(card):
    try:
        links = card.locator('a[href*="/in/"]')
        for j in range(min(links.count(), 6)):
            name = links.nth(j).inner_text(timeout=800).strip().split("\n")[0].strip()
            if name:
                return name
    except Exception:
        pass
    return ""


def copy_permalink(page, card):
    """The menu label shifts between locales and post types, so try the
    variants before giving up - a post without a permalink can't be revisited."""
    for attempt in range(2):
        try:
            card.locator('button[aria-label*="control menu" i]').first.click(timeout=8000)
            page.wait_for_timeout(1100)
            clicked = False
            for pattern in (r"Copy link to post", r"Copy link", r"Copy URL"):
                item = page.get_by_role("menuitem", name=re.compile(pattern, re.I))
                if item.count() == 0:
                    item = page.get_by_text(re.compile(pattern, re.I))
                if item.count():
                    item.first.click(timeout=6000)
                    clicked = True
                    break
            if not clicked:
                page.keyboard.press("Escape")
                page.wait_for_timeout(700)
                continue
            page.wait_for_timeout(1000)
            url = page.evaluate("navigator.clipboard.readText()").strip()
            if url.startswith("http"):
                return url
        except Exception as e:
            log(f"PERMALINK_ATTEMPT_{attempt}: {str(e).splitlines()[0]}")
            page.keyboard.press("Escape")
            page.wait_for_timeout(700)
    return ""


def scan(limit=12):
    pw, ctx, page = open_session()
    try:
        q = load_queue()
        known = {p["key"] for p in q["posts"]}
        added = 0

        for _ in range(10):
            for i in range(post_cards(page).count()):
                card = post_cards(page).nth(i)
                text = card_text(card)
                if len(text) < 140:
                    continue
                author = card_author(card)
                key = hashlib.sha1(f"{author}|{text[:200]}".encode()).hexdigest()[:12]
                if key in known:
                    continue
                url = copy_permalink(page, card)
                known.add(key)
                q["posts"].append({
                    "key": key,
                    "author": author or "(unknown)",
                    "url": url,
                    "excerpt": text[:90],
                    "text": text[:1400],
                    "comment": "",
                    "approved": False,
                    "posted": False,
                })
                added += 1
                if added >= limit:
                    break
            if added >= limit:
                break
            page.mouse.wheel(0, 1600)
            page.wait_for_timeout(2200)

        save_queue(q)
        log(f"SCANNED: +{added} new, {len(q['posts'])} in queue")
        return 0
    finally:
        ctx.close()
        pw.stop()


def review():
    q = load_queue()
    pending = [p for p in q["posts"] if p.get("comment") and not p.get("posted")]
    if not pending:
        print("No drafts yet. Run `scan`, then fill in `comment` in queue.json.")
        return 0
    for p in pending:
        state = "APPROVED" if p.get("approved") else "draft"
        print(f"\n[{state}] {p['author']} — {p.get('url') or 'no permalink'}")
        print(f"  {p['text'][:260]}")
        print(f"  -> {p['comment']}")
    return 0


def leave_comment(page, url, text):
    page.goto(url, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(4500)

    page.locator('button[aria-label="Comment"]').first.click(timeout=15000)
    page.wait_for_selector(COMMENT_EDITOR, timeout=15000)
    page.wait_for_timeout(700)

    editor = page.locator(COMMENT_EDITOR).last
    editor.click()
    lines = text.split("\n")
    for i, line in enumerate(lines):
        page.keyboard.type(line, delay=16)
        if i < len(lines) - 1:
            page.keyboard.press("Shift+Enter")
    page.wait_for_timeout(900)

    # Not Enter: on a focused contenteditable it can insert a newline instead of
    # submitting, which is how the first run produced drafts that went nowhere.
    page.get_by_role("button", name="Comment", exact=True).last.click(timeout=15000)

    # The post page always keeps a comment box mounted, so its disappearance is
    # not a signal. The box clearing itself is.
    for _ in range(20):
        page.wait_for_timeout(500)
        if page.locator(COMMENT_EDITOR).count() == 0:
            return True
        try:
            if page.locator(COMMENT_EDITOR).last.inner_text().strip() == "":
                return True
        except Exception:
            return True
    return False


def post_approved(limit=3):
    q = load_queue()
    batch = [p for p in q["posts"] if p.get("approved") and not p.get("posted")][:limit]
    if not batch:
        log("Nothing approved to post.")
        return 0

    pw, ctx, page = open_session()
    try:
        for p in batch:
            if not p.get("url"):
                log(f"NO_PERMALINK: {p['author']} — rescan")
                continue
            try:
                ok = leave_comment(page, p["url"], p["comment"])
            except Exception as e:
                log(f"ERROR: {p['author']} — {e}")
                ok = False
            if ok:
                p["posted"] = True
                p["posted_on"] = date.today().isoformat()
                log(f"COMMENTED: {p['author']}")
            else:
                log(f"SUBMIT_UNCONFIRMED: {p['author']} — check the post before retrying")
            save_queue(q)
            time.sleep(random.uniform(25, 50))
        return 0
    finally:
        ctx.close()
        pw.stop()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["scan", "review", "post"])
    ap.add_argument("--limit", type=int, default=None)
    args = ap.parse_args()

    if args.cmd == "scan":
        sys.exit(scan(args.limit or 12))
    if args.cmd == "review":
        sys.exit(review())
    sys.exit(post_approved(args.limit or 3))


if __name__ == "__main__":
    main()
