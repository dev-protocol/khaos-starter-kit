import fs from 'fs'
import pinataSDK from '@pinata/sdk'
import { config } from 'dotenv'

config()

const { PINATA_JWT_KEY } = process.env

const pinata = new pinataSDK({ pinataJWTKey: PINATA_JWT_KEY ?? '' })

const stream = fs.createReadStream('./bundled/index.js')
const res = await pinata.pinFileToIPFS(stream, {
	pinataMetadata: { name: 'index.js' },
})

console.table(res)
