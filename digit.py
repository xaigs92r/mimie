import asyncio, playwright.async_api, cv2, numpy, argparse, tensorflow

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
        mat = cv2.imdecode(numpy.frombuffer(await page.locator('img#Captcha2_CaptchaImage').screenshot(), numpy.uint8), 0)
        mat = cv2.threshold(mat, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)[1]
        mat = cv2.morphologyEx(mat, cv2.MORPH_OPEN, None)     
        shape = tensorflow.keras.datasets.mnist.load_data()[0][0].shape[1:]
        for index, _ in enumerate(cv2.findContours(mat, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)[0]):
            x,y,w,h = cv2.boundingRect(_)
            model = tensorflow.keras.Sequential([tensorflow.keras.models.load_model('ocrDigit'), tensorflow.keras.layers.Softmax()])
            predictions = model.predict(numpy.array([cv2.resize(mat[y:y + h, x:x + w], shape)]))
            cv2.imwrite(f'{index}.png', mat[y:y + h, x:x + w], shape))
            print([numpy.argmax(_) for _ in predictions])
        await page.screenshot(path='hahaha.png')
        await browser.close()

asyncio.run(main())
