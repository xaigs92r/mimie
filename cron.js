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
        /*async with session.get('/'.join((job, repository)), headers={'authorization':f'Bearer {credentials.token}'}) as response:
            if response.status == 200:
                async with session.delete('/'.join((job, repository)), headers={'authorization':f'Bearer {credentials.token}'}) as _: pass
        async with session.post(job, headers={'authorization':f'Bearer {credentials.token}'}, json={'name':'/'.join((urllib.parse.urlparse(job).path.split('/', 2)[-1], repository)), 'schedule':'*/10 * * * *', 'httpTarget':{'uri':f'https://api.github.com/repos/{os.getenv("GITHUB_REPOSITORY")}/dispatches', 'headers':{'Authorization':f'token {parser.parse_args().github}'}, 'body':base64.b64encode(json.dumps({'event_type':repository}).encode()).decode()}}) as _: pass
        */
