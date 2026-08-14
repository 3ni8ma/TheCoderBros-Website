#!/usr/bin/env python3
"""The Coder Bros — daily LinkedIn lesson post.

Flow: pick today's topic (rotation) -> build poster -> build caption ->
post to the company page -> log. Idempotent: exits 0 if already posted today.
"""

import json
import sys
from datetime import date
from pathlib import Path

BASE = Path(__file__).parent
sys.path.insert(0, str(BASE))

from topics import TOPICS  # noqa: E402
import poster as poster_mod  # noqa: E402
from post import post_to_linkedin  # noqa: E402

OUT_DIR = BASE / "out"
STATE_FILE = BASE / "state.json"
LOG_FILE = Path.home() / ".local" / "var" / "log" / "thecoderbros-linkedin.log"

HASHTAG_BASE = "#TheCoderBros #CodingLife"


def log(msg):
    line = f"[{date.today().isoformat()} {__import__('time').strftime('%H:%M:%S')}] {msg}"
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(LOG_FILE, "a") as f:
        f.write(line + "\n")
    print(line, flush=True)


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


def build_caption(topic):
    def nbsp_indent(line):
        stripped = line.lstrip(" ")
        return "\u00A0" * (len(line) - len(stripped)) + stripped

    c = topic["caption"]
    parts = [c["hook"], ""]
    for p in c["body"]:
        parts.extend([p, ""])
    if topic.get("code"):
        parts.append("Code:")
        for line in topic["code"]["lines"]:
            parts.append("  " + nbsp_indent(line))
        parts.append("")
    parts.append(f"Key takeaway: {topic['takeaway']}")
    parts.append("")
    parts.append(f"Tip: {c['tip']}")
    parts.append("")
    parts.append("Follow The Coder Bros for a daily coding lesson.")
    parts.append("")
    parts.append(" ".join(c["hashtags"] + [HASHTAG_BASE]))
    return "\n".join(parts)


def main():
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
