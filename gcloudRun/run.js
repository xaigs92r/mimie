import {promises as fs} from 'fs'
import {auth} from 'google-auth-library'
import http from 'http'
import process from 'process'

const client = auth.fromJSON(globalThis.JSON.parse(await fs.readFile('gcloud')))
client.scopes = ['https://www.googleapis.com/auth/cloud-platform']

async function build()
{
    await client.request({url:'https://cloudbuild.googleapis.com/v1/projects/chaowenguo/locations/us-central1/builds', method:'post', body:globalThis.JSON.stringify(
    {
        "source": {
            "storageSource": {
                "bucket": "buildbuild",
                "object": "build.tar.gz"
            }
        },
        "steps": [{
            "name": "gcr.io/cloud-builders/docker",
            "args": [
                "build",
                "-t",
                "gcr.io/chaowenguo/build",
                "."
            ]
        }],
        "timeout":"6900s"
    })})
}

http.createServer(async (req, res) => 
{
    await build()
    res.end("run")
}).listen(process.env.PORT)