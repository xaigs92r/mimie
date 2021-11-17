import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile('gcloud')))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']
console.log(client.credentials.access_token)
