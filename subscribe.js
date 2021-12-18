import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false, recordVideo:{dir:'videos'}})
const subscribe = await context.newPage()
for (const _ of ['sonuker', 'subpals', 'ytpals'])
{     
    await subscribe.goto(`https://www.${_}.com/login/final/UCkKr6PX7hPxw0E7vYXeDbvg/`)
    await subscribe.fill('input[name="password"]', process.argv.at(2))
    await globalThis.Promise.all([subscribe.waitForNavigation(), subscribe.click('button[type="submit"]')])
    await subscribe.evaluateHandle(() => globalThis.document.starter.submit())
    for (const _ of globalThis.Array(6).keys())
    {
        const [popup] = await globalThis.Promise.all([subscribe.waitForEvent('popup'), subscribe.click('a[onclick^="openWin"]')])
        try
        {
            await popup.click('yt-formatted-string.ytd-subscribe-button-renderer')
        }
        catch {}
        await subscribe.waitForTimeout(1000 * 40)
        await popup.close()
        await globalThis.Promise.all([subscribe.waitForNavigation(), subscribe.click('a[onclick^="confirmAll"]')])
    }
}
await context.close()
