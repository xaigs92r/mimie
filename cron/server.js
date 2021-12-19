import http from 'http'
import process from 'process'
import fetch from 'node-fetch'

http.createServer((req, res) => res.end('subscribe')).listen(80)
globalThis.setInterval(async () => await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`, {method:'post', headers:{authorization:`token ${process.env.github}`}, body:globalThis.JSON.stringify({event_type:'subscribe'})}), 1000 * 60 * 60 * 13)
globalThis.setInterval(async () => await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`, {method:'post', headers:{authorization:`token ${process.env.github}`}, body:globalThis.JSON.stringify({event_type:'ptc'})}), 1000 * 60 * 60 * 25)
