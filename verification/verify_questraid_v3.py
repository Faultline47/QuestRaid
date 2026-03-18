from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # 1. Login Page
        page.goto("http://localhost:5173/login")
        time.sleep(1)
        page.screenshot(path="verification/login_page_v2.png")

        # 2. Test Protected Redirect (should go to login)
        page.goto("http://localhost:5173/profile")
        time.sleep(1)
        if "login" in page.url:
            print("Redirect working")
        page.screenshot(path="verification/protected_redirect.png")

        browser.close()

if __name__ == "__main__":
    run()
