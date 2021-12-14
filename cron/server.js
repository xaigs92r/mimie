import http from 'http'
import process from 'process'
import fetch from 'node-fetch'

http.createServer((req, res) => res.end(process.env.haha)).listen(80)
