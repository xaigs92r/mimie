import {chromium} from 'playwright-chromium'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const starClicks = await browser.newPage({recordVideo:{dir:'videos'}})
await starClicks.goto('https://www.star-clicks.com/login')
await starClicks.fill('input#Email', 'chaowen.guo1@gmail.com')
await starClicks.fill('input#Password', process.argv.at(2))
console.log(await starClicks.locator('img#Captcha2_CaptchaImage').getAttribute('src'))
await starClicks.waitForTimeout(1000 * 60)
await browser.close()
