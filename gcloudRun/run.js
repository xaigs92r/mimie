import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import path from 'path'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile(path.join(path.dirname(new globalThis.URL(import.meta.url).pathname), 'gcloud'))))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']

await client.request({url:'https://us-central1-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/chaowenguo/jobs', method:'post', body:globalThis.JSON.stringify({
    apiVersion:'run.googleapis.com/v1', kind:'Job', metadata:{name:'build', annotations:{'run.googleapis.com/launch-stage':'BETA'}},
    spec:{template:{spec:{template:{spec:{containers:[{image:'gcr.io/chaowenguo/gcloudrun'}], serviceAccountName:'chaowenguo@chaowenguo.iam.gserviceaccount.com'}}}}}
})})

await client.request({url:'https://us-central1-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/chaowenguo/jobs', method:'post', body:globalThis.JSON.stringify({
    apiVersion:'run.googleapis.com/v1', kind:'Job', metadata:{name:'pal', annotations:{'run.googleapis.com/launch-stage':'BETA'}},
    spec:{template:{spec:{template:{spec:{containers:[{image:'gcr.io/chaowenguo/pal', resources:{limits:{memory:'2Gi'}}}], timeoutSeconds:'3600', serviceAccountName:'chaowenguo@chaowenguo.iam.gserviceaccount.com'}}}}}
})})

async function scheduler(_)
{
    const job = 'https://cloudscheduler.googleapis.com/v1/projects/chaowenguo/locations/us-central1/jobs'
    await client.request({url:job, method:'post', body:globalThis.JSON.stringify({name:new globalThis.URL(job).pathname.split('/').slice(2).join('/') + _, schedule:'0 0 * * *', httpTarget:{uri:`https://us-central1-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/chaowenguo/jobs/${_}:run`, oauthToken:{serviceAccountEmail:'chaowenguo@chaowenguo.iam.gserviceaccount.com'}}})})
}

await globalThis.Promise.all(['build', 'pal'].map(scheduler))