import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import path from 'path'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile(path.join(path.dirname(new globalThis.URL(import.meta.url).pathname), 'gcloud'))))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']

const job = 'https://cloudscheduler.googleapis.com/v1/projects/chaowenguo/locations/us-central1/jobs'
await client.request({url:job, method:'post', body:globalThis.JSON.stringify({name:new globalThis.URL(job).pathname.split('/').slice(2).join('/') + '/build', schedule:'0 0 * * *', httpTarget:{uri:'https://us-central1-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/chaowenguo/jobs/build:run', oauthToken:{serviceAccountEmail:'chaowenguo@chaowenguo.iam.gserviceaccount.com'}}})})