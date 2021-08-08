import {chromium} from 'playwright-chromium'

const browser = await chromium.launch({executablePath:'/usr/bin/google-chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext()
const alexamaster = await context.newPage()
await alexamaster.goto('https://cashmining.me/')
await alexamaster.click('a.nav-link')
await alexamaster.fill('input[name="user"]', 'chaowen.guo1@gmail.com')
await alexamaster.fill('input[name="password"]', 'HL798820y+')
await alexamaster.click('button[name="connect"]')
await alexamaster.evaluate(() => globalThis.scrollTo(0, globalThis.document.body.scrollHeight))
await alexamaster.waitForEvent('a#wmp-start')
const [popup] = await globalThis.Promise.all([alexamaster.waitForEvent('popup'), alexamaster.click('button[onclick]')])
await popup.bringToFront()
globalThis.setInterval(async () => globalThis.console.log(await alexamaster.innerText('a#wmp-hashes')), 1000 * 60 * 2)
//await alexamaster.waitForTimeout(1000 * 60 * 2)
//await popup.screenshot({path:'ha.png'})
//await browser.close()
