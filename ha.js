import {chromium} from 'playwright-chromium'

const browser = await chromium.launch({executablePath:'/usr/bin/google-chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext()
let alexamaster = await context.newPage()
await alexamaster.goto('https://cashmining.me/')
await alexamaster.click('a.nav-link')
await alexamaster.fill('input[name="user"]', 'chaowen.guo1@gmail.com')
await alexamaster.fill('input[name="password"]', 'HL798820y+')
await alexamaster.click('button[name="connect"]')
await alexamaster.click('button[onclick]')
await alexamaster.waitForTimeout(1000 * 60 * 2)
await alexamaster.screenshot({path:'ha.png'})
await browser.close()
