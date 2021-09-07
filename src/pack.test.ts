import test from 'ava'
import { pack } from './pack'

test('Returns callback function name', async (t) => {
	const res = await pack({ results: {} as any })
	if (res) {
		t.is(res.name, 'khaosCallback')
	}
})

test('Returns arguments', async (t) => {
	const res = await pack({
		results: { message: 'test', status: 1, statusMessage: 'status' },
	})
	if (res) {
		t.deepEqual(res.args, ['test', 1, 'status'])
	}
})
