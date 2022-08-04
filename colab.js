import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false, recordVideo:{dir:'videos'}, viewport:null})
const colab = await context.newPage()
for (const _ of ['1MmQ8rxXD0qWnW57Q0PEMrZL68Qm9heBg', '1nyUYBHm63g-VjG0xv-EEBDZoTlPcx6ze', '1oP6Nb201lv0tzW_oaV_tHcdSstpby-5L'])
{
    await colab.goto(`https://colab.research.google.com/drive/${_}`)
    await colab.waitForTimeout(10 * 1000)
    await colab.keyboard.press('Control+F9')
    await colab.waitForTimeout(30 * 1000)
}
await context.close()
