import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import fetch from 'node-fetch'
import url from 'url'
import process from 'process'
import {Buffer} from 'buffer'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile('gcloud')))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']
await client.request({url:'https://dns.googleapis.com/dns/v1/projects/chaowenguo'})
console.log(client.credentials.access_token)
console.log(client.credentials.access_token)

const job = 'https://cloudscheduler.googleapis.com/v1/projects/chaowenguo/locations/us-central1/jobs'
const response = await fetch(job + 'colab', {headers:{'authorization':`Bearer ${client.credentials.access_token}`}})
console.log(await response.json())
if (response.ok) await fetch(job + 'colab', {method:'DELETE', headers:{'authorization':`Bearer ${client.credentials.access_token}`}})
const a = await fetch(job, {method:'POST', headers:{'authorization':`Bearer ${client.credentials.token}`}, body:globalThis.JSON.stringify({name:url.parse(job).pathname, schedule:'*/10 * * * *', httpTarget:{uri:`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`, headers:{Authorization:`token ${process.argv[2]}`}, body:Buffer.from(globalThis.JSON.stringify({'event_type':'colab'})).toString('base64')}})})
console.log(await a.json())
