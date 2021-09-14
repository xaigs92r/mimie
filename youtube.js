import {chromium} from 'playwright-chromium'
import os from 'os'

console.log(os.cpus().length)
const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext({recordVideo:{dir:'videos'}})
const alexamaster = await context.newPage()
await alexamaster.goto('https://www.ytpals.com/login/final/UCkKr6PX7hPxw0E7vYXeDbvg/')
await alexamaster.waitForTimeout(1000 * 60 * 2)
await browser.close()
