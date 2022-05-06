import {chromium} from 'playwright-chromium'
import os from 'os'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false})
const inboxdollars = await browser.newPage({recordVideo:{dir:'videos'}, viewport:null})
await inboxdollars.goto('https://www.inboxdollars.com')
await inboxdollars.click('a#guestLoginButton')
await inboxdollars.fill('input#guestLoginEmail', 'chaowen.guo1@gmail.com')
await inboxdollars.fill('input#guestLoginPassword', process.argv.at(2))
await inboxdollars.click('input[name="loginSubmit"]')
await inboxdollars.waitForNavigation()
await inboxdollars.goto('https://www.inboxdollars.com/videos')
await inboxdollars.click('a.ibdCta.ncrave_trigger[href=^"https://pf.inboxdollars.com]')
await inboxdollars.waitForTimeout(1000 * 60)
await browser.close()
