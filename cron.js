import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile('gcloud')))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']
//const res = await client.request({'https://dns.googleapis.com/dns/v1/projects/chaowenguo'})
console.log(client.credentials.access_token)
