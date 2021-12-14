import http from 'http'
import process from 'process'
import fetch from 'node-fetch'

http.createServer((req, res) => res.end(process.env.github)).listen(80)
await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`, {method:'post', headers:{authorization:`token ${process.env.github}`}, body:globalThis.JSON.stringify({event_type:'subscribe'})})
