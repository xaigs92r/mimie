import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false, recordVideo:{dir:'videos'}})
const colab = await context.newPage()
await colab.goto('https://colab.research.google.com/github/chaowenGUOorg/pal/blob/main/colab.ipynb')
await colab.waitForTimeout(10 * 1000)
await colab.keyboard.press('Control+F9')
await colab.click('#ok')
await colab.waitForTimeout(10 * 1000)
await colab.goto('https://www.intel.com/content/www/us/en/my-intel/devcloud-sign-in.html')
await colab.fill('input#txtUsername', 'chaowen.guo1@gmail.com')
await colab.fill('input#txtPassword', process.argv.at(2))
await globalThis.Promise.all([colab.waitForNavigation(), colab.click('input#formSubmit')])
await colab.goto('https://notebooks.edge.devcloud.intel.com/user/u126480/lab')
await colab.waitForTimeout(10 * 1000)
await context.close()
