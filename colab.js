import {chromium} from 'playwright-chromium'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false, recordVideo:{dir:'videos'}})
const colab = await context.newPage()
await colab.goto('https://colab.research.google.com/github/chaowenGUOorg/pal/blob/main/colab.ipynb')
await colab.waitForTimeout(10 * 1000)
await colab.keyboard.press('Control+F9')
await colab.click('#ok')
await colab.waitForTimeout(10 * 1000)
await context.close()
