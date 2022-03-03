import {chromium} from 'playwright-chromium'
import process from 'process'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext({recordVideo:{dir:'videos'}})
const devcloud = await context.newPage()
await devcloud.goto('https://www.intel.com/content/www/us/en/my-intel/devcloud-sign-in.html')
await devcloud.fill('input#txtUsername', 'chaowen.guo1@gmail.com')
await devcloud.fill('input#txtPassword', process.argv.at(2))
await devcloud.click('input#formSubmit')
await devcloud.click('h3#promo-main-heading-2>a')
await devcloud.click('h3#promo-main-heading-2~p:nth-child(4)>a')
await devcloud.dblclick('li[title^="Name: devcloud.ipynb"]', {timeout:0})
await devcloud.click('button[title="Restart the kernel, then re-run the whole notebook"]')
await devcloud.click('button.jp-mod-accept')
await devcloud.waitForTimeout(10 * 1000)
await browser.close()
