import aiohttp.web, asyncio, uvloop, pathlib, math
asyncio.set_event_loop_policy(uvloop.EventLoopPolicy())

async def main():
    app = aiohttp.web.Application()
    app.add_routes([aiohttp.web.get('/', lambda _: aiohttp.web.Response(text='py'))])
    runner = aiohttp.web.AppRunner(app)
    await runner.setup()
    site = aiohttp.web.TCPSite(runner, port=8080)
    await site.start()
    await asyncio.sleep(math.inf)
    #p2pclient = await asyncio.create_subprocess_exec(pathlib.Path(__file__).resolve().parent.joinpath('p2pclient'), '-l', 'chaowen.guo1@gmail.com', '-n', ';8.8.8.8,4.4.4.4')
    #await p2pclient.wait()

asyncio.run(main())
