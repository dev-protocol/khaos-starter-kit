import test from 'ava'
import { event } from './event'

test('Returns `Query` when passed network is mainnet', async (t) => {
	t.is(await event({ network: 'mainnet' }), 'Query')
})

test('Returns `Query` when passed network is ropsten', async (t) => {
	t.is(await event({ network: 'ropsten' }), 'Query')
})
