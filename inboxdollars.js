import {chromium} from 'playwright-chromium'
import os from 'os'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false})
const inboxdollars = await browser.newPage({recordVideo:{dir:'videos'}, viewport:null})
await inboxdollars.goto('https://www.inboxdollars.com')
await inboxdollars.fill('input#user_email', 'chaowen.guo1@gmail.com')
await inboxdollars.fill('input#user_password', process.argv.at(2))
await browser.close()
