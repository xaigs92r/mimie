import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false, recordVideo:{dir:'videos'}, viewport:null})

async function f(_)
{
    const colab = await context.newPage()
    await colab.goto(`https://colab.research.google.com/drive/${_}`)
    await colab.waitForTimeout(10 * 1000)
    await colab.keyboard.press('Control+F9')
    await colab.waitForTimeout(60 * 1000)
}

await globalThis.Promise.all(['1MmQ8rxXD0qWnW57Q0PEMrZL68Qm9heBg', '1nyUYBHm63g-VjG0xv-EEBDZoTlPcx6ze', '1oP6Nb201lv0tzW_oaV_tHcdSstpby-5L'].map(f))
await context.close()
