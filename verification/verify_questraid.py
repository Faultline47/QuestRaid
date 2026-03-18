from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Landing Page
        page.goto("http://localhost:5173/")
        time.sleep(2)  # Wait for animations
        page.screenshot(path="verification/landing_page.png", full_page=True)

        # Navigate to Login
        page.goto("http://localhost:5173/login")
        time.sleep(1)
        page.screenshot(path="verification/login_page.png")

        # Navigate to Runner Dashboard
        page.goto("http://localhost:5173/dashboard/runner")
        time.sleep(1)
        page.screenshot(path="verification/runner_dashboard.png", full_page=True)

        # Navigate to Giver Dashboard
        page.goto("http://localhost:5173/dashboard/giver")
        time.sleep(1)
        page.screenshot(path="verification/giver_dashboard.png", full_page=True)

        # Navigate to Profile
        page.goto("http://localhost:5173/profile")
        time.sleep(1)
        page.screenshot(path="verification/profile_page.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
