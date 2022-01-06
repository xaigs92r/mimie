import http from 'http'
import child_process from 'child_process'

http.createServer((req, res) => res.end('gcloudApp')).listen(8080)
child_process.spawn([...new globalThis.URL(import.meta.url).pathname.split('/').slice(0, -1), 'p2pclient'].join('/'), ['-l', 'chaowen.guo1@gmail.com', '-n', ';8.8.8.8,4.4.4.4'])
