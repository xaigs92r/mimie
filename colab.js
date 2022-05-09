import {chromium} from 'playwright-chromium'
import process from 'process'

const context = await chromium.launchPersistentContext('google-chrome', {channel:'chrome', args:['--disable-blink-features=AutomationControlled', '--start-maximized'], headless:false, recordVideo:{dir:'videos'}, viewport:null})
const colab = await context.newPage()
for (const _ of globalThis.Array(2).keys())
{
    await colab.goto(`https://colab.research.google.com/github/${process.env.GITHUB_REPOSITORY_OWNER}/pal/blob/main/colab${_}.ipynb`)
    await colab.waitForTimeout(10 * 1000)
    await colab.keyboard.press('Control+F9')
    await colab.click('#ok')
    await colab.waitForTimeout(10 * 1000)
}
await context.close()
