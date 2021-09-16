import {chromium} from 'playwright-chromium'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false, recordVideo:{dir:'videos'}})
const alexamaster = await context.newPage()
await alexamaster.goto('https://www.ytpals.com/login/final/UCkKr6PX7hPxw0E7vYXeDbvg/')
await alexamaster.fill('input[name="password"]', 'HL798820y+')
await alexamaster.click('button[type="submit"]')
await alexamaster.waitForNavigation()
await alexamaster.evaluateHandle(() => globalThis.document.starter.submit())
for (const _ of globalThis.Array(2).keys())
{
    const [popup] = await globalThis.Promise.all([alexamaster.waitForEvent('popup'), alexamaster.click('a[onclick^="openWin"]')])
    await popup.click('yt-formatted-string.ytd-subscribe-button-renderer')
    await alexamaster.waitForTimeout(1000 * 40)
    await alexamaster.click('a[onclick^="confirmAll"]')
    await alexamaster.waitForTimeout(1000 * 60)
}
await alexamaster.waitForTimeout(1000 * 60)
await context.close()
