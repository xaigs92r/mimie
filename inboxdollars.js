import {chromium} from 'playwright-chromium'
import os from 'os'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false})
const inboxdollars = await browser.newPage({recordVideo:{dir:'videos'}, viewport:null})
await inboxdollars.goto('https://adfreeway.com/users/sign_in')
await inboxdollars.fill('input#user_email', 'chaowen.guo1@gmail.com')
await inboxdollars.fill('input#user_password', process.argv.at(2))
await inboxdollars.click('input#access-wifi-btn')
for (;;)
{
    await adfreeway.waitForTimeout(1000)
    const onviewport = adfreeway.locator('div.fp.onviewport')
    try
    {
        await onviewport.first().locator(':scope>div.ugc-wrap').last().scrollIntoViewIfNeeded()
    }
    catch
    {
        await adfreeway.screenshot({path:'screenshot.png'})
        await browser.close()
        process.exit(0)
    }
    await adfreeway.waitForTimeout(1000)
    const like = onviewport.first().locator(':scope input[alt="Like ugc"]')
    for (const _ of globalThis.Array(await like.count()).keys())
    {
        await like.nth(_).click()
        await adfreeway.waitForTimeout(1000)
    }
    await onviewport.first().evaluateHandle(_ => _.remove())
}
await browser.close()
