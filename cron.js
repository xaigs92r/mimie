import {promises as fs} from 'fs'
import {JWT} from 'google-auth-library'

const keys = globalThis.JSON.parse(await fs.readFile('gcloud'))
const client = new JWT({email: keys.client_email, key: keys.private_key, scopes: ['https://www.googleapis.com/auth/cloud-platform']})
const url = 'https://dns.googleapis.com/dns/v1/projects/chaowenguo'
const res = await client.request({url})
console.log(client.credentials.access_token)
