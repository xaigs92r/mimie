import http from 'http'

http.createServer((req, res) => res.end('js')).listen(80)
//child_process.spawn([...new globalThis.URL(import.meta.url).pathname.split('/').slice(0, -1), 'p2pclient'].join('/'), ['-l', 'chaowen.guo1@gmail.com', '-n', ';8.8.8.8,4.4.4.4'], {stdio:'inherit'})
