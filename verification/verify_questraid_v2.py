from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Desktop
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto("http://localhost:5173/")
        # Scroll to trigger whileInView animations
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(2)
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(1)
        page.screenshot(path="verification/landing_page_desktop.png", full_page=True)

        # Mobile
        mobile_page = browser.new_page(
            viewport={'width': 375, 'height': 667},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        )
        mobile_page.goto("http://localhost:5173/")
        time.sleep(2)
        mobile_page.screenshot(path="verification/landing_page_mobile.png")
        # Check bottom nav
        mobile_page.screenshot(path="verification/landing_page_mobile_bottom.png", clip={'x': 0, 'y': 600, 'width': 375, 'height': 67})

        browser.close()

if __name__ == "__main__":
    run()
