import test from 'ava'
import { addresses } from './addresses'

test('Returns mainnet address', async (t) => {
	const res = await addresses({ network: 'mainnet' })
	t.is(res, '0x1510EA12a30E5c40b406660871b335feA32f29A')
})

test('Returns undefined when the passed network is not mainnet', async (t) => {
	const res1 = await addresses({ network: 'ropsten' })
	const res2 = await addresses({ network: 'arbitrum-one' })
	const res3 = await addresses({ network: 'arbitrum-rinkeby' })
	t.is(res1, undefined)
	t.is(res2, undefined)
	t.is(res3, undefined)
})
