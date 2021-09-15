import {chromium} from 'playwright-chromium'

const browser = await chromium.launch({channel:'chrome', args:['--disable-blink-features=AutomationControlled'], headless:false})
const context = await browser.newContext({recordVideo:{dir:'videos'}})
const ytuner = await context.newPage()
await ytuner.goto('https://www.ytuner.com/user/login')
await ytuner.click('a.tos-agree')
await ytuner.fill('input#email','ga0961663@otc.edu')
await ytuner.fill('input#pass', 'HL798820y+')
await ytuner.click('a.form-submit')
await ytuner.waitForLoadState()
await ytuner.goto('https://www.ytuner.com/dashboard/credits/work')
await ytuner.waitForTimeout(1000 * 60 * 2)
/*await ytuner.click('a:has-text("Get Credits")')
await new globalThis.Promise(_ => globalThis.setTimeout(_, 10 * 1000))
await ytuner.click('a[href="https://www.ytuner.com/dashboard/credits/work"]')
await ytuner.click('a:text-is("Start Now Here")')
while (true)
{
    if (globalThis.Object.is(await ytuner.title(), 'No More Work Today!')) break
    const id = await ytuner.waitForSelector('input#code').then(_ => _.getAttribute('value'))
    const startStep = await ytuner.$('button#start_step')
    await startStep.getProperty('classList').then(_ => _.evaluateHandle(_ => _.remove('disabled')))
    await startStep.click()
    await ytuner.evaluate(() => globalThis.scrollTo(0, globalThis.document.body.scrollHeight))
    await new globalThis.Promise(_ => globalThis.setTimeout(_, 1000))
    const restart = await ytuner.waitForSelector('button:text-is("Restart")')
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=${process.argv[3]}`).then(_ => _.json())
    if (!response.items.length)
    {
        await restart.click()
        continue
    }
    await restart.evaluateHandle(_ => _.parentElement.nextElementSibling.querySelector('button')).then(_ => _.asElement().click())
    await ytuner.evaluate(() => globalThis.scrollTo(0, globalThis.document.body.scrollHeight))
    await await new globalThis.Promise(_ => globalThis.setTimeout(_, 1000))
    await ytuner.fill('input#url','https://youtu.be/' + id)
    await ytuner.click('button#validate-url')
    await ytuner.click('button#openForm')
    const industry = await ytuner.$('select#industry')
    await industry.evaluateHandle(_ => _.style.display = 'block')
    await industry.selectOption('CP')
    let option = [null, globalThis.Number.POSITIVE_INFINITY]
    const select = await ytuner.$('select#time')
    await select.evaluateHandle(_ => _.style.display = 'block')
    for await (const _ of await select.$$(':scope>option').then(_ => _.map(_ => _.getAttribute('value'))))
    {
        const distance = globalThis.Math.abs(moment.duration(_) - moment.duration(response.items[0].contentDetails.duration))
        if (distance < option[1]) option = [_, distance]
    }
    await select.selectOption(option[0])
    await ytuner.waitForSelector('input#form-agree').then(_ => _.evaluateHandle(_ => _.click()))
    await ytuner.click('a:text-is("Complete Work")')
}*/
await browser.close()//
//https://www.ytuner.com/dashboard/credits/work/finish//
