import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false, recordVideo:{dir:'videos'}, viewport:null})
const colab = await context.newPage()
for (const _ of ['1NG6jXbYo09JWIPDD6JpQL9XphdSbZ0B1'])
{
    await colab.goto(`https://colab.research.google.com/drive/${_}`)
    await colab.waitForTimeout(10 * 1000)
    await colab.keyboard.press('Control+F9')
    await colab.click('#ok')
    await colab.waitForTimeout(10 * 1000)
}
await context.close()
