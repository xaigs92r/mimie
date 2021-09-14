import {chromium} from 'playwright-chromium'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext({recordVideo:{dir:'videos'}})
const alexamaster = await context.newPage()
await alexamaster.goto('https://www.ytpals.com/login/final/UCkKr6PX7hPxw0E7vYXeDbvg/')
await alexamaster.fill('input[name="password"]', 'HL798820y+')
await alexamaster.click('button[type="submit"]')
await alexamaster.evaluateHandle(() => globalThis.document.starter.submit())
await alexamaster.click('a[onclick^="openWin"]')
await alexamaster.waitForTimeout(1000 * 60 * 2)
await browser.close()
