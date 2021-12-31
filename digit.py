import asyncio, playwright.async_api, cv2, numpy, argparse

parser = argparse.ArgumentParser()
parser.add_argument('password')

async def main():
    async with playwright.async_api.async_playwright() as _:
        browser = await _.chromium.launch(channel='chrome', args=['--disable-blink-features=AutomationControlled'], headless=False)
        context = await browser.new_context(record_video_dir='videos')
        page = await context.new_page()
        await page.goto('https://www.star-clicks.com/login')
        email = page.locator('input#Email')
        await email.click()
        await email.fill('chaowen.guo1@gmail.com')        
        await page.fill('input#Password', parser.parse_args().password)
        mat = cv2.imdecode(numpy.frombuffer(await alexamaster.locator('img#Captcha2_CaptchaImage').screenshot(), numpy.uint8), 0)
        cv2.imwrite('haha.png', mat)
        await alexamaster.screenshot(path='hahaha.png')
        await browser.close()

asyncio.run(main())
