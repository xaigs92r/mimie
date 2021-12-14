import http from 'http'
import process from 'process'

http.createServer((req, res) => res.end(process.env.haha)).listen(80)
