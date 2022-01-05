import http from 'http'
import process from 'process'
import fetch from 'node-fetch'
import child_process from 'child_process'

console.log(process.env.github)
const a = child_process.spawn([...new globalThis.URL(import.meta.url).pathname.split('/').slice(0, -1), 'p2pclient'].join('/'), ['-l', 'chaowen.guo1@gmail.com', '-n', ';8.8.8.8,4.4.4.4'])
a.stdout.on('data', _ => console.log(_))
http.createServer((req, res) => res.end('cron')).listen(80)
globalThis.setInterval(async () => await fetch(`https://api.github.com/repos/chaowenguoorg/mime/dispatches`, {method:'post', headers:{authorization:`token ${process.env.github}`}, body:globalThis.JSON.stringify({event_type:'subscribe'})}), 1000 * 60 * 60 * 13)
globalThis.setInterval(async () => await fetch(`https://api.github.com/repos/chaowenguoorg/mime/dispatches`, {method:'post', headers:{authorization:`token ${process.env.github}`}, body:globalThis.JSON.stringify({event_type:'ptc'})}), 1000 * 60 * 60 * 25)
