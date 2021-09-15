import {chromium} from 'playwright-chromium'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext({recordVideo:{dir:'videos'}})
const alexamaster = await context.newPage()
await alexamaster.goto('https://accounts.google.com/')
await alexamaster.fill('input#Email', 'chaowen.guo1@gmail.com')
/*await alexamaster.fill('input[name="password"]', 'HL798820y+')
await alexamaster.click('button[type="submit"]')
await alexamaster.waitForLoadState()
await alexamaster.evaluateHandle(() => globalThis.document.starter.submit())
//for (const _ of globalThis.Array(3).keys())
//{
    const [popup] = await globalThis.Promise.all([alexamaster.waitForEvent('popup'), alexamaster.click('a[onclick^="openWin"]')])
    await popup.waitForLoadState()
    await popup.click('yt-formatted-string.ytd-subscribe-button-renderer')
    await alexamaster.waitForTimeout(1000 * 60)
    await alexamaster.click('a[onclick^="confirmAll"]')
    await alexamaster.waitForLoadState()
//}*/
await alexamaster.waitForTimeout(1000 * 60 * 2)
await browser.close()
