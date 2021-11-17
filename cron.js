import {promises as fs} from 'fs'

console.log(globalThis.JSON.parse(await fs.readFile('gcloud')))
