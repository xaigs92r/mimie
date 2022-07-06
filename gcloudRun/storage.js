import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import path from 'path'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile(path.join(path.dirname(new globalThis.URL(import.meta.url).pathname), 'gcloud'))))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']

await client.request({url:'https://storage.googleapis.com/storagestorage/build.tar.gz', method:'put', body:await fs.readFile(path.join(path.dirname(new globalThis.URL(import.meta.url).pathname), 'build.tar.gz'))})