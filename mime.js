import {chromium} from 'playwright-chromium'
import os from 'os'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false})
globalThis.setTimeout(async () => await browser.close(), 1000 * 60 * 60 * 2)
/*const context = await browser.newContext({recordVideo:{dir:'videos'}, viewport:null})
const me = await context.newPage()
const client = await context.newCDPSession(me)
await client.send('Emulation.setScriptExecutionDisabled', {value:true})
await me.goto('https://cashmining.me/')
const form = await me.locator('form').elementHandle()
await form.evaluateHandle(_ => {_.style.opacity = 1; _.style.display = 'block'})
const body = me.locator('body')
await body.evaluateHandle(_ => _.innerHTML = '')
await body.evaluateHandle((_, form) => _.append(form), form)
await me.fill('input[name="user"]', 'chaowen.guo1@gmail.com')
await me.fill('input[name="password"]', process.argv.at(2))
await me.click('button[name="connect"]')
await client.send('Emulation.setScriptExecutionDisabled', {value:false})
//const client = await context.newCDPSession(me)
//const {result} = await client.send('Runtime.evaluate', {expression:'globalThis', includeCommandLineAPI:true, objectGroup:'handler'}) //https://stackoverflow.com/questions/63059096/chrome-devtools-protocol-how-to-get-click-event-handler-name-of-a-node
//const {listeners} = await client.send('DOMDebugger.getEventListeners', {objectId:result.objectId})
//console.log(listeners)
//await client.send('Runtime.releaseObjectGroup', {objectGroup:'handler'})
const popup = await context.newPage()
await popup.goto('http://cashmining.me/mining.php')
//await me.evaluateHandle(cpus => globalThis.WMP.User(globalThis.document.querySelector('div#wmp-container').getAttribute('wmp-site-key'), globalThis.document.querySelector('div#wmp-container').getAttribute('wmp-username'), {threads:cpus,autoThreads:false,throttle:globalThis.document.querySelector('div#wmp-container').getAttribute('wmp-throttle'),forceASMJS:false}).start(), os.cpus().length)
const it = await browser.newPage({recordVideo:{dir:'videos'}, viewport:null})
await it.goto('https://cashmining.forumforyou.it/')
await it.click('a.nav-link')
await it.fill('input[name="user"]', 'chaowen.guo1@gmail.com')
await it.fill('input[name="password"]', process.argv.at(2))
await it.click('button[name="connect"]')
await globalThis.Promise.all([it.waitForEvent('popup'), it.click('button[onclick]')])*/
const adfreeway = await browser.newPage({recordVideo:{dir:'videos'}, viewport:null})
await adfreeway.goto('https://adfreeway.com/users/sign_in')
await adfreeway.fill('input#user_email', 'chaowen.guo1@gmail.com')
await adfreeway.fill('input#user_password', process.argv.at(2))
await adfreeway.click('input#access-wifi-btn')
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
