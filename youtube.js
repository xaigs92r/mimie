import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false, recordVideo:{dir:'videos'}})
const alexamaster = await context.newPage()
for (const _ of ['sonuker', 'subpals'])
{     
    await alexamaster.goto(`https://www.${_}.com/login/final/UCkKr6PX7hPxw0E7vYXeDbvg/`)
    await alexamaster.fill('input[name="password"]', process.argv.at(2))
    await alexamaster.click('button[type="submit"]')
    await alexamaster.waitForNavigation()
    await alexamaster.evaluateHandle(() => globalThis.document.starter.submit())
    for (const _ of globalThis.Array(20).keys())
    {
        const [popup] = await globalThis.Promise.all([alexamaster.waitForEvent('popup'), alexamaster.click('a[onclick^="openWin"]')])
        await popup.click('yt-formatted-string.ytd-subscribe-button-renderer')
        await alexamaster.waitForTimeout(1000 * 40)
        await popup.close()
        await alexamaster.click('a[onclick^="confirmAll"]')
        await alexamaster.waitForNavigation()
    }
}
await context.close()
