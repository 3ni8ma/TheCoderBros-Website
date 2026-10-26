#!/usr/bin/env python3
"""The Coder Bros — daily LinkedIn lesson post.

Flow: pick today's topic (rotation) -> build poster -> build caption ->
post to the company page -> log. Idempotent: exits 0 if already posted today.
"""

import json
import sys
from datetime import date
from pathlib import Path

import fcntl

BASE = Path(__file__).parent
REPO = BASE.parent.parent
sys.path.insert(0, str(BASE))

from topics import TOPICS  # noqa: E402
import poster as poster_mod  # noqa: E402
from post import post_to_linkedin  # noqa: E402

OUT_DIR = BASE / "out"
STATE_FILE = BASE / "state.json"
LOG_FILE = Path.home() / ".local" / "var" / "log" / "thecoderbros-linkedin.log"

SITE = "https://thecoderbros.vercel.app"

# Explicit, because keyword matching linked "How HTTPS Works" to the Git
# internals post. A wrong deep link is worse than sending people to the index.
BLOG_FOR_TOPIC = {
    "big-o-time-complexity": "understanding-big-o-notation",
    "recursion-explained": "recursion-simply-explained",
    "git-internals": "git-internals-how-it-actually-works",
    "css-specificity": "css-specificity-once-and-for-all",
    "http-status-codes": "http-status-codes-you-need-to-know",
    "rest-api-design": "rest-api-design-best-practices",
    "sql-joins": "sql-joins-visual-explained",
    "python-generators": "python-generators-and-lazy-evaluation",
    "async-await": "javascript-async-await",
    "docker-basics": "docker-containers-simply-explained",
}


def log(msg):
    line = f"[{date.today().isoformat()} {__import__('time').strftime('%H:%M:%S')}] {msg}"
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG_FILE, "a") as f:
        f.write(line + "\n")
    # launchd points stdout at this same file, so echoing would double every line.
    if sys.stdout.isatty():
        print(line, flush=True)


def topic_url(topic):
    slug = BLOG_FOR_TOPIC.get(topic["slug"])
    return f"{SITE}/blog/{slug}" if slug else f"{SITE}/blog"


def tracked(url, slug):
    """Without these the LinkedIn traffic is indistinguishable from direct."""
    return f"{url}?utm_source=linkedin&utm_medium=social&utm_campaign={slug}"


def build_caption(topic):
    """Short, plain, first-person. Labels like 'Key takeaway:' are what make
    a caption read as generated, so the structure carries the emphasis."""
    c = topic["caption"]
    body = c["body"][0] if c["body"] else ""
    tags = " ".join(c["hashtags"][:3])

    link = tracked(topic_url(topic), topic["slug"])
    parts = [c["hook"], "", body, "", topic["takeaway"], "", f"Longer version: {link}"]
    if tags:
        parts.extend(["", tags])
    return "\n".join(parts)


def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {}


def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2))


def pick_topic(state):
    today = date.today().isoformat()
    if state.get("last_post_date") == today:
        log("ALREADY_POSTED_TODAY — exiting")
        sys.exit(0)
    idx = state.get("topic_index", 0)
    return TOPICS[idx % len(TOPICS)], idx, today


def main():
    # launchd fires every missed trigger when the laptop wakes, so two copies
    # can start in the same second. Only one may reach the posting code.
    lock = open(BASE / ".post.lock", "w")
    try:
        fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError:
        log("ALREADY_RUNNING — exiting")
        sys.exit(0)

    state = load_state()
    topic, idx, today = pick_topic(state)
    log(f"TOPIC: {topic['slug']} ({topic['category']})")

    image = poster_mod.render(topic, OUT_DIR / f"{topic['slug']}.png")
    log(f"POSTER: {image}")

    caption = build_caption(topic)
    caption_path = OUT_DIR / f"{topic['slug']}.txt"
    caption_path.write_text(caption)
    log(f"CAPTION: {caption_path} ({len(caption)} chars)")

    try:
        post_to_linkedin(caption, str(image))
    except Exception as e:
        log(f"POST_FAILED: {e}")
        state["last_error"] = str(e)
        # Do NOT save last_post_date — let it retry on next cron run
        save_state(state)
        sys.exit(3)

    state["last_post_date"] = today
    state["last_post_slug"] = topic["slug"]
    state["topic_index"] = (idx + 1) % len(TOPICS)
    save_state(state)
    log("POST_SUCCESS")
    log("--- " + "-" * 40)


if __name__ == "__main__":
    main()
