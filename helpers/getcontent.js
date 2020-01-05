import fs from 'fs'
import path from 'path'
import {createClient} from 'contentful'

const SPACE = process.env.CONTENTFUL_SPACE 
const TOKEN = process.env.CONTENTFUL_TOKEN

const client = createClient({
  space: '062rkadldcc7',
  accessToken: '997a2a4d28fcb9ac1260ec82ec0a115a06182890088d3a1c58a799d71008fc5f'
})

const types = [
  'pageHome'
]

export const getcontent = async () => {
  console.log('> Starting import...')
  for (const type of types) {
    console.log('> Getting content for', type)
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    })
    if (entries.total === 1) {
      const { fields } = entries.items[0]
      fs.writeFileSync(
        path.join(__dirname, '..', 'data', `${type}.json`),
        JSON.stringify(fields)
      )
      console.log('> Content gotten and written for', type)
    }
  }
  return true
}

if (process.argv[2] === 'install') {
  getcontent()
}