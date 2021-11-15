import {chromium} from 'playwright-chromium'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const colab = await context.newPage()
await colab.goto('https://colab.research.google.com/github/chaowenGUOorg/pal/blob/main/colab.ipynb')
await colab.keyboard.press('Control+F9')
//await colab.click('#ok')
await colab.waitForTimeout(60)
await colab.screenshot({path:'screenshot.png'})
await context.close()
