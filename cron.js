import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import fetch from 'node-fetch'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile('gcloud')))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']
await client.request({url:'https://dns.googleapis.com/dns/v1/projects/chaowenguo'})
console.log(client.credentials.access_token)

job = 'https://cloudscheduler.googleapis.com/v1/projects/chaowenguo/locations/us-central1/jobs'
const response = await fetch(job + '/short', {headers:{'authorization':`Bearer ${client.credentials.access_token}`}})
console.log(response.status)
