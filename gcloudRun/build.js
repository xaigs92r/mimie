import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import path from 'path'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile(path.join(path.dirname(new globalThis.URL(import.meta.url).pathname), 'gcloud'))))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']

await client.request({url:'https://cloudbuild.googleapis.com/v1/projects/chaowenguo/locations/us-central1/builds', method:'post', body:globalThis.JSON.stringify({source:{storageSource:{bucket:'storagestorage', object:'build.tar.gz'}}, steps:[{name:'gcr.io/cloud-builders/docker', args:['build', '-t', 'gcr.io/chaowenguo/build', '.']}], timeout:'6900s'})})
