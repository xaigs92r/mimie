import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import process from 'process'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile('gcloud')))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']

const job = 'https://cloudscheduler.googleapis.com/v1/projects/chaowenguo/locations/us-central1/jobs'
const response = await client.request({url:job + '/colab'})
if (globalThis.Object.is(response.status, 200)) await client.request({url:job + '/colab', method:'delete'})
await client.request({url:job, method:'post', body:globalThis.JSON.stringify({name:new globalThis.URL(job).pathname.split('/').slice(2).join('/') + '/colab', schedule:'*/10 * * * *', httpTarget:{uri:`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/dispatches`, headers:{authorization:`token ${process.argv.at(2)}`}, body:globalThis.btoa(globalThis.JSON.stringify({event_type:'colab'}))}})})
