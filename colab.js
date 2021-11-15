import {chromium} from 'playwright-chromium'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false, recordVideo:{dir:'videos'}})
const colab = await context.newPage()
await colab.goto('https://colab.research.google.com/github/chaowenGUOorg/surf/blob/main/colab.ipynb')
await colab.click('iron-icon#icon')
await colab.screenshot({path:'screenshot.png'})
await context.close()
