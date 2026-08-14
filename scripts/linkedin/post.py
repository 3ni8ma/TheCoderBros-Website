#!/usr/bin/env python3
"""Post to The Coder Bros LinkedIn company page via Playwright.

Reuses the chrome-devtools-mcp persistent Chrome profile (already logged in).
If the live profile is locked (browser running), falls back to a copy.
"""

import glob
import os
import shutil
import sys
import tempfile
import time
from pathlib import Path

PROFILE = Path.home() / ".cache" / "chrome-devtools-mcp" / "chrome-profile"
COMPANY_POSTS = "https://www.linkedin.com/company/108031530/admin/page-posts/published/?share=true"
FEED_URL = "https://www.linkedin.com/feed/"


def prepare_profile(work_dir):
    if not PROFILE.exists():
        print("PROFILE_MISSING: chrome-devtools-mcp profile not found", flush=True)
        sys.exit(1)
    copy = Path(work_dir) / "profile-copy"
    copy.mkdir(parents=True, exist_ok=True)
    shutil.copy(PROFILE / "Local State", copy / "Local State")
    shutil.copytree(
        PROFILE / "Default", copy / "Default",
        ignore=shutil.ignore_patterns("Singleton*", "*.lock", "*.log", "Cache*"),
    )
    for f in glob.glob(str(copy / "Default" / "Singleton*")):
        os.remove(f)
    print(f"PROFILE_COPY: {copy}", flush=True)
    return str(copy)


def post_to_linkedin(caption, image_path):
    from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

    with tempfile.TemporaryDirectory() as work_dir:
        user_data_dir = prepare_profile(work_dir)
        with sync_playwright() as p:
            ctx = p.chromium.launch_persistent_context(
                user_data_dir=user_data_dir,
                channel="chrome",
                headless=True,
                args=["--disable-blink-features=AutomationControlled"],
                viewport={"width": 1440, "height": 900},
            )
            page = ctx.pages[0] if ctx.pages else ctx.new_page()

            page.goto(FEED_URL, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(4000)
            if "authwall" in page.url or "login" in page.url:
                print("AUTH_FAILED: not logged in", flush=True)
                ctx.close()
                sys.exit(2)
            print("LOGIN_OK", flush=True)

            page.goto(COMPANY_POSTS, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(6000)
            print("PAGE_TITLE:", page.title(), flush=True)

            dialog = page.locator('div[role="dialog"]').first
            dialog.wait_for(timeout=30000)
            if "The Coder Bros" in dialog.inner_text():
                print("IDENTITY_OK: posting as The Coder Bros", flush=True)
            else:
                print("WARN: composer identity is NOT The Coder Bros", flush=True)

            editor = page.locator('div[role="textbox"][contenteditable="true"]').first
            editor.wait_for(timeout=20000)
            editor.click()
            page.keyboard.type(caption, delay=8)
            print("TEXT_TYPED", flush=True)
            page.wait_for_timeout(1000)

            with page.expect_file_chooser(timeout=30000) as fc_info:
                page.get_by_role("button", name="Add media").first.click()
            fc_info.value.set_files(str(image_path))
            print("IMAGE_SET", flush=True)
            page.wait_for_timeout(9000)

            try:
                next_btn = dialog.get_by_role("button", name="Next", exact=True).first
                if next_btn.is_visible(timeout=5000):
                    next_btn.click()
                    page.wait_for_timeout(3000)
                    print("CAROUSEL_NEXTED", flush=True)
            except Exception:
                pass

            post_btn = dialog.get_by_role("button", name="Post", exact=True).first
            post_btn.wait_for(state="visible", timeout=30000)
            post_btn.click()
            print("POST_CLICKED", flush=True)

            page.wait_for_timeout(6000)
            try:
                dialog.wait_for(state="detached", timeout=20000)
                print("DIALOG_CLOSED", flush=True)
            except PWTimeout:
                print("WARN: dialog still open after post", flush=True)
            ctx.close()
    print("DONE", flush=True)


if __name__ == "__main__":
    caption_path, image_path = sys.argv[1], sys.argv[2]
    caption = Path(caption_path).read_text()
    post_to_linkedin(caption, image_path)
